# The Chronicle of Altheim

The campaign site for our Altheim game: the story so far, the company, the kingdom, the people, the bestiary, and all the art.

Live at https://odyssey-jotun.github.io/altheim/ (kept out of search engines with `robots.txt` and `noindex`).

## Adding to the story

- **A new session:** add it to `src/data/sessions.ts` (number, name, one-line summary). Then add one Markdown file per scene to `src/chronicle/`, named with the next number (`10-whatever.md`), with front matter `order`, `session`, `title`, and optionally `image` and `alt`. The Chronicle groups scenes under their session and builds the contents automatically.
- **Art:** drop a `.jpg` into `src/assets/art/` and refer to it by file name without the extension. Astro resizes it and makes the phone-sized copies.
- **Characters:** `src/data/company.ts`. Each character gets a page at `/company/<slug>/`.
- **People, the Four Houses, the bestiary, open questions:** `src/data/world.ts`.
- **Gallery captions:** `src/pages/gallery.astro`.

**21st.dev pieces in use:** the gallery viewer (ported from Framer Thumbnail Carousel), the Company flip cards (the flip from Circular Flip Card Gallery), and Luminous Topography behind the Kingdom intro (rendered at build time, no JavaScript shipped).

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
