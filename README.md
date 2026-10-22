# Mohit Kumar — portfolio

React, TypeScript, and Vite portfolio for **https://mohitarty.github.io/**. Static output, no backend or API keys. No remote changes, push, or deployment were performed for this rebuild.

## Local preview

Use Node.js 24 and npm:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite, normally **http://127.0.0.1:5173**.

For the production build:

```sh
npm run build
npm run preview
```

## Checks

```sh
npm run typecheck
npm run lint
npx playwright install chromium
npm test
```

Tests exercise project slide navigation, case-study disclosures, mobile navigation and Escape behavior, email copy success and failure, reduced motion, metadata, static files, and layout at 320, 375, 768, 1024, and 1440px. The test server uses the production build; run `npm run build` before `npm test`.

## GitHub Pages — after approval

The original Pages configuration was verified as **Deploy from a branch → master → / (root)**. The new source is a Vite application and must be built before serving. Do not push the source and expect the old branch-based configuration to build it.

The included `.github/workflows/deploy-pages.yml` is **manual only** (`workflow_dispatch`). It does not deploy on push or pull request.

When ready to publish:

1. Review and approve the source changes.
2. In the repository’s **Settings → Pages → Build and deployment**, change **Source** to **GitHub Actions**.
3. Commit and push the reviewed changes to `master`.
4. Under **Actions → Build and deploy portfolio**, choose **Run workflow** on `master`.
5. The workflow installs locked dependencies, lints, builds, uploads `dist`, and deploys to the existing user-site URL.

Vite’s `base: '/'` is intentional for `mohitarty.github.io`. There is no client-side router or backend, so section links and refreshes work without a SPA rewrite. `public/.nojekyll` is copied to `dist`. Publishing changes no other GitHub Pages projects.

To enable push-to-publish later, add a `push` trigger for `master` to the workflow, after explicitly deciding to enable automatic deployment. That trigger is intentionally absent now.

## Structure and content

```text
src/
  components/   Navigation, shared UI, custom project illustrations
  sections/     Hero, Work, Enterprise, Experience, Expertise, About, Contact
  data/         Typed profile, projects, employment, expertise, links
  styles/       Design tokens, layout, responsive rules, reduced motion
public/
  assets/       Résumé, favicon, social preview SVG and PNG
  robots.txt
  sitemap.xml
tests/          Playwright interaction, responsive, and accessibility checks
```

Update `src/data/portfolio.ts` for projects, experience, expertise, and links. Biographical prose lives in `src/sections/About.tsx` and `Hero.tsx`. Replace the downloadable PDF at `public/assets/Mohit-Kumar-Resume.pdf` when your résumé changes.

## Content and design notes

- Profile and core projects come from the supplied résumé and master prompt.
- Slideframe, TakeMyNotes, and Fast Read are the primary engineering showcases. 001 GOODS is explicitly an early-stage product / brand exploration.
- TakeMyNotes AI work is described separately as experimentation. No usage, revenue, performance, or ownership metrics were invented.
- Enterprise work is a high-level account of contributions. No company code, confidential screenshots, customer data, internal URLs, or architecture diagrams are included.
- Project visuals are clearly labeled **concept / illustrative previews**, made with HTML and CSS. They are not fabricated product screenshots or live integrations.
- Fonts are installed packages and served with the site. No CDN libraries, third-party tracking, external font requests, icon library, or animation framework are needed.
- Git history and existing legacy image assets are preserved. Those images are not shipped in the production build; they remain at the repository root for historical reference.
- The Chrome Web Store URL was extracted from the résumé and independently verified against the live listing.
- Project destinations were checked: the Slideframe documentation, npm registry entry, 001 GOODS, TakeMyNotes, Fast Read GitHub, and Chrome Web Store listing responded successfully. LinkedIn rate-limited automated verification; the URL is retained from the résumé and supplied prompt.
- MCP is intentionally omitted as a claimed skill because the source information does not establish a specific implementation.

See `AUDIT.md` for the original-site audit and migration decisions.

See `VALIDATION.md` for build, browser, accessibility, and measured Lighthouse results.
