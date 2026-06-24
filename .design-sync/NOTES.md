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

## Self-contained preview cards (REQUIRED before every upload)

The converter emits preview cards that load React + the bundle via **relative**
script srcs (`../../../_vendor/react.js`, `../../../_ds_bundle.js`,
`../../../_preview/<Name>.js`). Those do NOT resolve in the claude.ai/design
**thumbnail/list renderer**, so cards show **blank** there (the live Edit view
serves them differently and works). Confirmed root cause via the Design agent.

Fix: `.design-sync/scripts/selfcontain-cards.mjs` rewrites each card to load
React/ReactDOM from a CDN and inline the bundle + preview. **Run it as the LAST
step after `package-build.mjs`/validate and immediately before upload:**

```
node .design-sync/scripts/selfcontain-cards.mjs ./ds-bundle
```

- It changes only the card `<Name>.html` files; do NOT re-run validate after it
  (the build anchor `_ds_sync.json` is computed from the unpatched htmls, so a
  post-patch validate prints a benign `[SYNC_STALE]`). Upload the patched htmls;
  leave the anchor as the build wrote it (it stays consistent across syncs
  because the patch is always applied identically after an unpatched build).
- On re-sync: build → validate → **run this script** → upload. If you skip it,
  the blank-thumbnail bug returns.
- Verified 14/14 cards still render with the CDN React in the headless check.
- The patched cards are large (~35KB each — inlined bundle + CSS). Upload them in
  small batches (≤7 htmls per `write_files`); a full-bundle single call exceeds the
  server payload limit and the socket closes.

## Re-sync risks (what can silently go stale)

- **Sub-part components as cards.** `Cell`, `Key`, `StairGlyph`, `CreateGlyph` are exported and each gets its own card. If they should be hidden from the picker later, exclude via `componentSrcMap: {"<Name>": null}`.
- **Remote fonts.** If the Typekit kit's allowed domains or the kit id change, every preview falls back to Georgia/system fonts with no error. Keep `use.typekit.net/cst1gej.css` reachable.
- **Design source of truth** is the prototype `app.html`; the React components are a hand port. If `app.html`'s tokens/markup change, re-port into `design-system/src/` and rebuild before re-syncing.
