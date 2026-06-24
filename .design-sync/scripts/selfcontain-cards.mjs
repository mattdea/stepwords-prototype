#!/usr/bin/env node
// Post-build patch: make each generated preview card self-contained so it
// renders in the claude.ai/design thumbnail/list view.
//
// The design-sync converter emits cards that load React, the bundle, and the
// preview via RELATIVE script srcs (`../../../_vendor/react.js`, etc.). Those
// don't resolve in the Design pane's thumbnail renderer (it appears to strip
// relative <script src> while still resolving <link> stylesheets), so the
// cards mount nothing and show blank. The live Edit view serves them
// differently, which is why it works there.
//
// Fix (matches what the Design agent verified by hand): load React/ReactDOM
// from a CDN and INLINE the bundle + per-component preview as <script> blocks.
// Stylesheet <link>s are left as-is (those resolve fine). Run this after every
// `package-build.mjs` and before upload. Re-runnable; idempotent.
//
// Usage: node .design-sync/scripts/selfcontain-cards.mjs <bundle-dir>   (default ./ds-bundle)

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const BUNDLE = process.argv[2] || "./ds-bundle";
const REACT_CDN = "https://unpkg.com/react@18/umd/react.production.min.js";
const REACT_DOM_CDN =
  "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js";

const esc = (js) => js.replace(/<\/script>/gi, "<\\/script>");
const escCss = (css) => css.replace(/<\/style>/gi, "<\\/style>");
const bundleJs = readFileSync(join(BUNDLE, "_ds_bundle.js"), "utf8");
// The full compiled design-system CSS (remote font @imports + tokens + every
// component rule). The wrapper styles.css just @imports this file.
const bundleCss = readFileSync(join(BUNDLE, "_ds_bundle.css"), "utf8");

const compRoot = join(BUNDLE, "components");
let patched = 0;
for (const group of readdirSync(compRoot)) {
  const groupDir = join(compRoot, group);
  for (const name of readdirSync(groupDir)) {
    const htmlPath = join(groupDir, name, `${name}.html`);
    if (!existsSync(htmlPath)) continue;
    let html = readFileSync(htmlPath, "utf8");

    const previewPath = join(BUNDLE, "_preview", `${name}.js`);
    const previewJs = existsSync(previewPath)
      ? readFileSync(previewPath, "utf8")
      : "";

    html = html
      // inline the stylesheet (relative <link>s don't resolve in the pane)
      .replace(
        /<link rel="stylesheet" href="\.\.\/\.\.\/\.\.\/styles\.css">/,
        `<style>${escCss(bundleCss)}</style>`,
      )
      .replace(
        /\s*<link rel="stylesheet" href="\.\.\/\.\.\/\.\.\/_ds_bundle\.css">/,
        "",
      )
      .replace(
        /<script src="\.\.\/\.\.\/\.\.\/_vendor\/react\.js"><\/script>/,
        `<script crossorigin src="${REACT_CDN}"></script>`,
      )
      .replace(
        /<script src="\.\.\/\.\.\/\.\.\/_vendor\/react-dom\.js"><\/script>/,
        `<script crossorigin src="${REACT_DOM_CDN}"></script>`,
      )
      .replace(
        /<script src="\.\.\/\.\.\/\.\.\/_ds_bundle\.js"><\/script>/,
        `<script>${esc(bundleJs)}</script>`,
      )
      .replace(
        new RegExp(
          `<script src="\\.\\./\\.\\./\\.\\./_preview/${name}\\.js"></script>`,
        ),
        previewJs ? `<script>${esc(previewJs)}</script>` : "",
      );

    writeFileSync(htmlPath, html);
    patched++;
  }
}
console.log(`selfcontain-cards: patched ${patched} card(s) in ${BUNDLE}`);
