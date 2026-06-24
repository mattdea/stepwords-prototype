# Stepwords design system — how to build with it

Stepwords is a daily anagram-ladder word game with a calm, editorial / NYT-Games
feel: warm paper backgrounds, a serif display face, one confident blue accent.
Build screens out of these components and style your own layout glue with the
design tokens below — never hardcode hex values.

## Setup

No provider or theme wrapper is needed. Import components from
`@stepwords/design-system` and ensure the stylesheet is loaded once
(`@stepwords/design-system/styles.css`). The stylesheet defines every token on
`:root` and ships the two brand fonts via remote `@import`, so components are
styled the moment they mount.

```jsx
import { StaircaseBoard, ClueBar, Keyboard } from "@stepwords/design-system";

<div style={{ background: "var(--bg)", minHeight: "100dvh", color: "var(--ink)" }}>
  <StaircaseBoard rows={rows} />
  <ClueBar clue="Looked fixedly" length={6} />
  <Keyboard available={["S", "T", "A", "R", "E", "D"]} />
</div>
```

## The styling idiom: CSS custom properties

This is a **token system** — style your own elements with `var(--token)`, not a
utility-class vocabulary. The tokens (all defined in `styles.css`):

| Token | Use |
|---|---|
| `--paper` `#fdfcf8` | card / cell / key fills |
| `--bg` `#f4f2ea` | page background (fill the whole viewport with it) |
| `--ink` | primary text; tints `--ink-65` `--ink-45` `--ink-25` `--ink-14` `--ink-08` for muted text, borders, dividers |
| `--accent` `#1d3f6e` | the one brand blue — Play/Submit/Share, selected state, focus (`--accent-hover`, `--accent-press`, `--accent-light`) |
| `--gold` `#e2c044` | stars, the Quick puzzle |
| `--green` / `--yellow` / `--assist` | per-letter board feedback: solved first try / solved later / hint-revealed |
| `--serif` (`"kazimirtext"`) | display: wordmarks, titles, clues, board letters — always weight 600 for headings, 500 for clues |
| `--sans` (`"Libre Franklin"`) | body, buttons, labels, numbers |

Headings and game text are serif; everything else is sans. Keep corners soft
(cards ~16px, cells ~6–8px, pills fully rounded) and shadows faint.

## Components

`Button` (variants `primary` pill / `icon` paper square / `text` link),
`HomeCard` (+ `StairGlyph`, `CreateGlyph` icons), `StaircaseBoard` (+ `Cell`),
`ClueBar`, `Keyboard` (+ `Key`), `TopBar`, `Modal`, `StarRating`, `Calendar`,
`SegmentedToggle`. Each component's props are in its `<Name>.d.ts` and usage in
its `<Name>.prompt.md` — read those before composing. Prefer the real component
over re-implementing its markup; if you need structure a component doesn't
expose, compose its props/children rather than hand-rolling a lookalike.
