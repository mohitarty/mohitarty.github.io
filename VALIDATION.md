# Validation results

Validated on 22 October 2026 against the local Vite production build in Chromium. No push, remote settings change, or deployment was performed.

## Build and code quality

- `npm run typecheck`: passed.
- `npm run lint`: passed.
- `npm run build`: passed.
- `git diff --check`: passed.
- npm dependency audit at installation: zero known vulnerabilities.

## Browser checks

`npm test`: **12 passed**.

- Project previews: next, previous, direct slide selection, keyboard activation, and pressed state.
- Native case-study disclosure and the separate notebook AI research note.
- Responsive layouts at **320, 375, 768, 1024, and 1440px**, with no document-level horizontal overflow.
- Mobile menu: opening, Escape, focus restoration, and section navigation.
- Clipboard success and permission-denied feedback.
- Valid anchors, title, canonical URL, résumé PDF signature, favicon, social image, robots, and sitemap.
- Reduced-motion preferences disable entrance animation and smooth scrolling.
- axe-core WCAG 2 A/AA and WCAG 2.1 AA scans at 375 and 1440px: **zero violations**.
- Desktop and mobile full-page and hero screenshots reviewed for layout and typography.

Automated accessibility scans are useful checks, not a guarantee of complete accessibility. Browser checks used Chromium; Safari and Firefox were not tested.

## Lighthouse

Lighthouse 13.5.0, default simulated mobile profile and desktop preset, against `http://127.0.0.1:4173`.

| Category       | Mobile | Desktop |
| -------------- | -----: | ------: |
| Performance    |     97 |     100 |
| Accessibility  |    100 |     100 |
| Best Practices |    100 |     100 |
| SEO            |    100 |     100 |

These are local lab measurements, not field measurements or live GitHub Pages scores. Hosting, device, network, and browser conditions can change the results. Mobile cumulative layout shift was zero, total blocking time was 10ms, and largest contentful paint was 2.1 seconds in this run.

Full Lighthouse JSON and screenshots are generated under ignored `tmp/` for local inspection. The final output can be reproduced with `npm run build`, `npm run preview`, and Lighthouse against the printed local URL.

## Sources and links

- Employment dates, education, primary products, and résumé download come from the supplied PDF and current user-provided master prompt.
- Additional skills, enterprise themes, and 001 GOODS come from the current master prompt.
- Chrome Web Store destination was extracted from the résumé and verified against the live Fast Read listing.
- Direct checks returned HTTP 200 for TakeMyNotes, 001 GOODS, Slideframe docs, the Slideframe npm registry entry, and Fast Read on GitHub.
- LinkedIn returned HTTP 429 to an automated request. The profile URL matches the user’s supplied résumé and prompt.
- No MCP implementation is asserted because supporting implementation details were not supplied.
- Project images are explicitly labeled illustrations / concepts, rather than actual product screenshots. Original legacy image assets remain preserved but are not used in the new site.

No additional factual confirmation is needed for the content supplied in the master prompt. Real project screenshots can replace the illustrations later if desired.
