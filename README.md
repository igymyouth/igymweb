# IGYM — International Geoscience Youth Movement

Astro site for IGYM, built around a "core sample" design concept: a sandstone
base, iron-oxide rust and copper-patina accents, jagged fault-line dividers
between sections, and a stratigraphic column as the site's signature graphic.

## Pages

- `/` — Landing page
- `/about` — About us (mission, structure, timeline, values)
- `/youth-leaders` — Youth Leaders
- `/events` — Events (upcoming + past)
- `/get-involved` — Get Involved (ways in + signup form)

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:4321

## Build for production

```bash
npm run build
npm run preview
```

## Notes

- Fonts (Fraunces, Public Sans, IBM Plex Mono) load from Google Fonts in
  `src/layouts/Layout.astro` — swap for self-hosted fonts if you need to work
  offline or avoid the external request.
- The Get Involved form currently submits via `mailto:`. For a real inbox,
  point the form's `action` at a service like Formspree or a serverless
  function, and remove `enctype="text/plain"`.
- Replace the placeholder chapter map, member counts, and leader bios in
  `src/pages/youth-leaders.astro` and `src/pages/index.astro` with real data.
- Color tokens, type scale, and spacing all live in `src/styles/global.css` —
  start there for any rebrand.
