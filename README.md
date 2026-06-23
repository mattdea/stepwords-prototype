# Stepwords — UI Redesign Prototype

A clickable prototype for a refreshed [stepwords.xyz](https://stepwords.xyz) UI (daily anagram-ladder word game).

## What's here

- **`index.html`** — device-preview shell with Desktop / Tablet / Mobile toggles (the "prototype view").
- **`app.html`** — the responsive app itself (Home, Game, Completion, How-to-Play, Info, Archives). Also reachable at `/app`.

Both are self-contained static HTML — no build step. Fonts load from Adobe Typekit + Google Fonts.

## Run locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

Static site on Netlify (publish directory = repo root). No build command.
