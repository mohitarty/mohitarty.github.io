# Portfolio audit and rebuild decisions

## Original repository

Inspected the tracked tree, complete original `index.html`, image directory, Git remote, history, branch, working-tree state, and GitHub Pages configuration.

- Repository: `mohitarty/mohitarty.github.io`; branch: `master`.
- Original Pages mechanism: `legacy` build, source `master`, path `/`.
- No package manifest, frontend build, test framework, CI, router, or backend.
- One XHTML-doctype HTML page with roughly 25KB of inline styles and scripts.
- External Bootstrap 4.3.1, jQuery 3.3.1, Popper, Font Awesome 4.7, Chart.js 2.8, and Google Fonts.
- Chart.js was imported without a chart implementation. The responsive carousel, thumbnail indicators, floating layouts, flip cards, and skill bars depended on outdated presentation assumptions.
- Mobile layout relied on negative margins, fixed dimensions, and large percentage offsets. Some styling was invalid, including `font-weight: : 300`.
- Content emphasized early graphic design, UI mockups, PHP, and arbitrary skill percentages rather than current engineering work.
- Existing files include an approximately 2.5MB GIF, early project images, and an old headshot. They are preserved in Git and on disk, but excluded from the new production output.

## Implementation plan followed

1. Replace old identity and content using the supplied résumé and latest master prompt.
2. Establish React + TypeScript + Vite, minimal runtime dependencies, typed content, and reusable sections.
3. Implement charcoal / warm-white / cyan design tokens, editorial typography, custom project compositions, accessible navigation, and native case-study disclosures.
4. Add enterprise highlights, timeline, expertise domains, engineering philosophy, education, and contact actions.
5. Include résumé, self-hosted fonts, metadata, social image, structured data, robots, and sitemap.
6. Prepare a manual GitHub Pages workflow without changing remote settings or publishing.
7. Type-check, lint, build, test browser interactions, check responsive layouts and accessibility, inspect screenshots, and audit production performance.

## Technical decisions

- Vite is appropriate for a small static React site; there is no server or route infrastructure.
- Three font families are installed locally; only relevant font files are requested by the browser.
- Native `details` elements provide keyboard-accessible case studies without a dialog library.
- Motion is limited to short entrance and hover transitions, disabled by reduced-motion preferences.
- Project visuals are lightweight HTML/CSS illustrations with visible labels. Slideframe offers manual preview navigation; there is no auto-rotating carousel.
- The workflow uses a manual trigger to meet the explicit no-automatic-deployment requirement. Repository settings and external state remain unchanged.
