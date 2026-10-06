# Working on this repo

- Astro static site, deployed to GitHub Pages from `main` by `.github/workflows/deploy.yml`. Base path is `/altheim`, so every internal link goes through `import.meta.env.BASE_URL`.
- Story text lives in `src/chronicle/*.md`; everything else is data in `src/data/`. Do not hard-code story facts into page templates.
- Only state what the chronicle or the art actually establishes. Unidentified art stays uncaptioned in the gallery until Marc names it.
- Style rules: no em dashes, no "It wasn't X, it was Y" phrasing, no random bold. Do not assign pronouns to the player characters.
- Layout rules: headings hug what follows and always have more space above than below (run `tools/spacing-audit.mjs`); photos get rounded corners; screenshot every page at 390px and look before calling a change done.
