# The Chronicle of Altheim

The campaign site for our Altheim game: the story so far, the company, the kingdom, the people, the bestiary, and all the art.

Live at https://odyssey-jotun.github.io/altheim/ (kept out of search engines with `robots.txt` and `noindex`).

## Adding to the story

- **A new chapter:** add a Markdown file to `src/chronicle/`, named with the next number (`09-whatever.md`). Copy the front matter from an existing chapter: `order`, `numeral`, `title`, and optionally `image` and `alt`. The newest chapter shows up on the home page automatically.
- **Art:** drop a `.jpg` into `src/assets/art/` and refer to it by file name without the extension. Astro resizes it and makes the phone-sized copies.
- **Characters:** `src/data/company.ts`. Each character gets a page at `/company/<slug>/`.
- **People, the Four Houses, the bestiary, open questions:** `src/data/world.ts`.
- **Gallery captions:** `src/pages/gallery.astro`.

Pushing to `main` rebuilds and publishes the site through GitHub Actions in about a minute.

## Running it locally

```sh
npm install
npm run dev      # http://localhost:4321/altheim/
npm run build    # writes dist/
```

`tools/` holds the layout checks used before publishing (heading spacing and phone screenshots). They need Playwright, and expect `npm run preview -- --port 4791` to be running.

## Source material

Art and notes come from the "Altheim" folder in Marc's Google Drive (`Images` and `Documents`).
