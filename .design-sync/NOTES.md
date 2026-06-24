# design-sync notes — @stepwords/design-system

Repo-specific gotchas for future syncs of the Stepwords design system.

## Build

- The DS package lives in `design-system/` (a subfolder of the prototype repo, not the repo root). Run `npm install` then `npm run build` **inside `design-system/`** before the converter.
- Build is Vite library mode → `design-system/dist/index.es.js` (ESM) + `dist/index.d.ts` (rolled-up types) + `dist/stepwords-ds.css` (one bundled stylesheet, `cfg.cssEntry`).
- Converter is run from the **repo root** with `--node-modules ./design-system/node_modules --entry ./design-system/dist/index.es.js`. The package isn't self-installed under its own `node_modules`, hence `--entry`.

## Fonts

- Kazimir Text (serif, Adobe Typekit kit `cst1gej`) and Libre Franklin (sans, Google Fonts) load via remote `@import`s at the top of `src/styles.css`. Validate reports `[FONT_REMOTE]` — expected, no action. Nothing is shipped in `fonts/` by design; the host serves them at runtime.

## Known render warns (benign — do not re-chase)

- `[RENDER_THIN] StarRating` — the component is genuinely a short row of SVG stars with no text, so the thin heuristic trips. Confirmed visually: three gold stars render correctly. Benign.

## Overrides

- `cfg.overrides.Modal = {cardMode: "column"}` — the Modal previews are 380px framed overlays, wider than a grid cell; column mode gives each story full card width. Applied to clear `[GRID_OVERFLOW]`.

## Re-sync risks (what can silently go stale)

- **Sub-part components as cards.** `Cell`, `Key`, `StairGlyph`, `CreateGlyph` are exported and each gets its own card. If they should be hidden from the picker later, exclude via `componentSrcMap: {"<Name>": null}`.
- **Remote fonts.** If the Typekit kit's allowed domains or the kit id change, every preview falls back to Georgia/system fonts with no error. Keep `use.typekit.net/cst1gej.css` reachable.
- **Design source of truth** is the prototype `app.html`; the React components are a hand port. If `app.html`'s tokens/markup change, re-port into `design-system/src/` and rebuild before re-syncing.
