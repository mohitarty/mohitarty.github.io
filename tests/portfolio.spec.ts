import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("project previews and case studies work with keyboard and pointer", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Thoughtful experiences.",
  );
  await page.getByRole("button", { name: "Next preview slide" }).click();
  await expect(page.getByText("Slide 2 of 3", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Show preview slide 02" }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: "Show preview slide 03" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.getByText("Slide 3 of 3", { exact: true })).toBeVisible();
  const notebook = page.getByRole("article", { name: "TakeMyNotes project" });
  await notebook.locator("summary").click();
  await expect(
    notebook.getByRole("heading", { name: "In the lab" }),
  ).toBeVisible();
  await expect(
    notebook.getByText(/not claims about released notebook features/),
  ).toBeVisible();
  expect(errors).toEqual([]);
});

for (const width of [320, 375, 768, 1024, 1440]) {
  test(`layout fits a ${width}px viewport`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(
      page.getByRole("heading", { name: "Curious by default." }),
    ).toBeVisible();
    const dimensions = await page.evaluate(() => ({
      content: document.documentElement.scrollWidth,
      viewport: innerWidth,
    }));
    expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
    for (const section of [
      "work",
      "experience",
      "expertise",
      "about",
      "contact",
    ]) {
      await expect(page.locator(`#${section}`)).toBeVisible();
    }
  });
}

test("mobile menu supports navigation, Escape, and focus return", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: /^(Menu|Close)$/ });
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Expertise", exact: true })
    .click();
  await expect(page).toHaveURL(/#expertise$/);
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
});

test("email copying provides success and denied-permission feedback", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");
  await page.getByRole("button", { name: "Copy email" }).click();
  await expect(page.getByRole("status")).toHaveText(
    "Email address copied. Say hello!",
  );
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "mohitme100@gmail.com",
  );
  await page.evaluate(() => {
    Object.defineProperty(navigator.clipboard, "writeText", {
      value: () => Promise.reject(new Error("Denied")),
      configurable: true,
    });
  });
  await page.getByRole("button", { name: "Copy email" }).click();
  await expect(page.getByRole("status")).toContainText("copy it directly");
});

test("metadata, anchors, résumé, and static resources are valid", async ({
  page,
  request,
}) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Mohit Kumar.*Software Engineer III/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://mohitarty.github.io/",
  );
  const anchors = await page
    .locator('a[href^="#"]')
    .evaluateAll((elements) =>
      elements.map((element) => element.getAttribute("href")!.slice(1)),
    );
  for (const id of anchors)
    expect(await page.locator(`[id="${id}"]`).count()).toBe(1);
  for (const asset of [
    "/assets/Mohit-Kumar-Resume.pdf",
    "/assets/social-card.png",
    "/assets/favicon.svg",
    "/robots.txt",
    "/sitemap.xml",
  ]) {
    const response = await request.get(asset);
    expect(response.ok(), asset).toBeTruthy();
    if (asset.endsWith(".pdf"))
      expect((await response.body()).subarray(0, 4).toString()).toBe("%PDF");
    if (asset.endsWith(".png"))
      expect(response.headers()["content-type"]).toContain("image/png");
  }
});

test("reduced motion disables entrance animations and smooth scrolling", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(
    await page
      .locator("h1")
      .evaluate((element) => getComputedStyle(element).animationName),
  ).toBe("none");
  expect(
    await page
      .locator("html")
      .evaluate((element) => getComputedStyle(element).scrollBehavior),
  ).toBe("auto");
});

for (const width of [375, 1440]) {
  test(`accessibility audit and visual capture at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(results.violations).toEqual([]);
    await page.screenshot({
      path: `tmp/portfolio-${width}.png`,
      fullPage: true,
    });
    await page.screenshot({ path: `tmp/hero-${width}.png` });
  });
}
