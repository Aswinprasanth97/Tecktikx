---
name: claude-design
description: Use this skill to generate well-branded interfaces and assets for Claude / Anthropic, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Map of this system

- `readme.md` — the full design guide: brand overview, content fundamentals, visual foundations, iconography, font substitutions, token reference.
- `styles.css` — the single global stylesheet to link; it `@import`s everything in `tokens/`.
- `tokens/` — CSS custom properties (`colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`). Reference tokens, never inline hex.
- `components/` — reusable React primitives (`Button`, `IconButton`, `Input`, `Badge`, `Avatar`, `Card`, `CodeWindow`/`Tok`, `CategoryTab`, `SpikeMark`/`Wordmark`). Each has a `.d.ts` props contract and a `.prompt.md` usage note.
- `ui_kits/marketing/` — an interactive marketing-site recreation showing the components composed into real pages.
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand).
- `assets/spike-mark.svg` — the Anthropic brand glyph.

## Using the components

In production React, import primitives directly from `components/<group>/<Name>.jsx`.
In standalone HTML artifacts, link `styles.css`, load the compiled bundle
(`_ds_bundle.js`), then read components off the global namespace —
`const { Button, Card } = window.ClaudeDesignSystem_8d7c53`.

## The five rules that matter most

1. Anchor every page on the cream canvas (`--color-canvas`), never pure white.
2. Serif display headlines at regular weight with negative letter-spacing; humanist sans body. The split is unbreakable.
3. Coral is scarce on individual CTAs, generous only on full-bleed coral callout cards.
4. Alternate cream and dark-navy bands — the surface contrast is the pacing.
5. Sentence case, no emoji, plain confident copy. No hype.

⚠️ Fonts: Copernicus/StyreneB are licensed and substituted with Cormorant Garamond / Inter. See `readme.md` → *Fonts & substitutions*.
