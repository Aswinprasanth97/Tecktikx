# Claude / Anthropic — Design System

A design system for the **Claude marketing surface** (claude.com) — the warmest,
most editorial interface in the AI-product category. Cream canvas, coral accent,
dark-navy product surfaces, and an unbreakable serif-display + sans-body split.

> **Sources.** This system was authored from a written brand specification (no
> codebase, Figma, or deck was attached). If you have access to the real
> claude.com source or the Anthropic brand kit, cross-reference and update the
> tokens here. The licensed typefaces (Copernicus, StyreneB) are **not** included
> — see *Fonts & substitutions* below.

---

## What this is for

Generate well-branded Claude/Anthropic-style interfaces and assets — marketing
pages, product-chrome mockups, decks, and throwaway prototypes. Everything
references the same tokens, so a button here looks like a button there.

---

## Index (root manifest)

- **`styles.css`** — the single global entry point consumers link. Import lines only.
- **`tokens/`** — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`.
- **`components/`** — reusable React primitives, grouped by concern:
  - `brand/` — `SpikeMark`, `Wordmark`
  - `forms/` — `Button`, `IconButton`, `Input`
  - `data-display/` — `Badge`, `Avatar`
  - `cards/` — `Card`, `CodeWindow` (+ `Tok`)
  - `navigation/` — `CategoryTab`
- **`ui_kits/marketing/`** — interactive marketing-site recreation (home · pricing · connectors · sign-in).
- **`guidelines/`** — foundation specimen cards (Colors · Type · Spacing · Brand).
- **`assets/`** — `spike-mark.svg` (brand glyph).
- **`SKILL.md`** — Agent-Skills-compatible entry point.

Components are consumed in card/kit HTML via the compiled bundle:
`const { Button } = window.ClaudeDesignSystem_8d7c53` after `<script src=".../_ds_bundle.js">`.

---

## The brand in one paragraph

The base atmosphere is a **tinted cream canvas** (`--color-canvas` #faf9f5) —
warm, deliberately not the cool gray-white every other AI brand uses. Headlines
run a **serif display** at regular weight with negative letter-spacing; body is a
**humanist sans**. Brand voltage comes from the **cream + coral** pairing — coral
(`--color-primary` #cc785c) appears scarcely on individual CTAs and generously on
full-bleed coral callout cards. Three surface modes alternate page-by-page: cream
canvas → light cream cards → dark navy product surfaces. The cream-to-dark
contrast is the page's pacing rhythm.

---

## CONTENT FUNDAMENTALS

**Voice.** Literary, considered, plain-spoken. Reads like a magazine column, not
a SaaS landing page. Confident without hype; warm without being cute.

- **Person.** Speaks to *you* ("Meet your thinking partner", "Plug Claude into
  your stack"). Refers to the product as *Claude*, the company as *Anthropic*.
- **Casing.** Sentence case everywhere — headlines, buttons, nav. Never Title
  Case or ALL CAPS, except the tracked uppercase micro-label (badges: "NEW",
  category eyebrows).
- **Headlines.** Short, declarative, often a metaphor grounded in work ("Meet
  your thinking partner", "One partner, every kind of work", "Which problem are
  you up against?"). No exclamation marks.
- **Body.** One idea per sentence. Concrete verbs (draft, reason, ship, analyze).
  Avoids adjective stacks and buzzwords ("revolutionary", "cutting-edge").
- **CTAs.** Plain and direct: "Try Claude", "Talk to sales", "Read the docs",
  "Get started". Two words where possible.
- **Emoji.** None. The brand never uses emoji on marketing surfaces.
- **Numbers / stats.** Used sparingly and only when true and load-bearing
  (pricing, "5× more usage"). No decorative stat-slop.
- **Tone test.** If a line could appear in *The Economist*, it's on-brand. If it
  sounds like a growth-hacking webinar, rewrite it.

---

## VISUAL FOUNDATIONS

**Color.** Cream canvas + coral accent + dark navy is the trinity — never a
fourth surface tone (no purple cards, no green sections). Coral is scarce on
individual elements, generous only on full-bleed callout cards. Text is warm
near-black ink (#141413), never pure black. See the Colors specimen cards.

**Type.** Serif display (Copernicus → Cormorant Garamond substitute) for every
headline at regular weight with **negative letter-spacing** (-0.3 to -1.5px) —
non-negotiable; without the negative tracking it reads off-brand. Humanist sans
(StyreneB → Inter) for body, nav, buttons, labels. JetBrains Mono for code.
Never bold the serif; never set a headline in the sans. Bigger serif before
bolder weight.

**Spacing.** 4px base unit. 96px (`--space-section`) between major bands —
uniform, generous. 32px internal card padding. The editorial pacing comes from
big whitespace + a literary serif + roomy cards.

**Backgrounds.** Flat color blocks, no gradients, no photographic hero, no
repeating texture. Depth comes from surface contrast (cream vs dark), not images.
Hero artifacts are either minimal coral/ink line-art on cream, or a dark
code-editor mockup showing real product chrome.

**Borders.** 1px hairline (#e6dfd8) on cream surfaces — the border tone is the
disabled-coral tone, so borders feel like one elevation step, not ink lines.
Inside dark cards, a 6%-white hairline.

**Corner radii.** Hierarchical: 8px buttons/inputs, 12px content + product cards,
16px hero container, pill for badges. Nothing is sharp-cornered; nothing is
over-rounded.

**Cards.** No drop shadow by default — the surface *color* is the card. Feature
cards are cream (#efe9de); product mockups are navy (#181715); callouts are
coral. A faint `0 1px 3px rgba(20,20,19,0.08)` exists for rare hover-elevation
only.

**Shadows & elevation.** Color-block first, shadow rare. Most depth is the
cream-vs-dark surface jump. Dark mockups carry their own internal chrome (line
numbers, syntax color, status bars) instead of external shadows.

**Animation.** Out of scope in the source brand; keep it minimal. Quiet
120ms color transitions on interactive elements. No bounce, no parallax, no
infinite loops on content.

**Hover / press.** Default + press only — do **not** invent hover styling. The
coral primary darkens to `--color-primary-active` (#a9583e) on press; secondary
fills to cream-card; nothing scales or lifts. (Hover is intentionally undefined
in this system — match that restraint.)

**Transparency / blur.** Sparing. The sticky top-nav uses a cream-at-85% +
8px blur; modal overlays use ink-at-32%. Otherwise surfaces are opaque.

**Imagery vibe.** Warm, editorial, never photorealistic illustration. When
photography appears (testimonials only) it crops to 40px circles. Code and
terminal mockups are the dominant "hero" imagery on developer surfaces.

**Layout rules.** ~1200px max content width, centered. Hero is a 6/6 split
(headline left, artifact right) collapsing to single column on mobile. Feature
grids 3-up → 2-up → 1-up; connector tiles 4/6-up → 2-up; pricing 3-up → 1-up
with the featured (dark) tier staying distinct at every breakpoint.

**Do / Don't (top hits).** Do anchor every page on cream; do alternate
cream-card and dark-mockup bands; do use the spike-mark as the wordmark prefix.
Don't use pure white or cool gray; don't bold the serif; don't use cool
blue/cyan accents; don't repeat the same surface mode in two consecutive bands.

---

## ICONOGRAPHY

- **Brand glyph.** The **Anthropic spike-mark** — a small radial burst — is the
  one true brand mark. Shipped as `assets/spike-mark.svg` and as the `SpikeMark`
  React component (inherits `currentColor`; tint coral or ink). It prefixes the
  wordmark and appears inline as a content marker. Never invert it to white
  *inside* the wordmark.
- **UI icons.** The source brand uses simple, thin line icons (≈1.5–2px stroke,
  rounded caps). This system does not ship a full icon set; for UI icons,
  substitute **[Lucide](https://lucide.dev)** (CDN) — its humanist line style and
  stroke weight match. **⚠️ Substitution flagged:** confirm against the real
  Anthropic icon set if available.
- **Emoji.** Never used.
- **Unicode.** Light functional use only (✓ in checklists, → in links, ● status
  dots). Not as decoration.

---

## Fonts & substitutions  ⚠️

Copernicus and StyreneB are **licensed Anthropic typefaces with no public
webfont**, so this system substitutes the documented open-source matches and
loads them from Google Fonts (`tokens/fonts.css`):

| Role | Brand face | Substitute (shipped) |
|---|---|---|
| Display serif | Copernicus / Tiempos Headline | **Cormorant Garamond** (wt 500) |
| Body sans | StyreneB | **Inter** |
| Mono | — | **JetBrains Mono** |

Because the fonts load via Google Fonts `@import` (remote), the compiler reports
**0 `@font-face` rules** — that's expected; the families resolve at render time.
Display weight is set to **500** here to compensate for Cormorant's lighter
color; **switch `--type-display-weight` back to 400 when real Copernicus is
installed** and add local `@font-face` rules pointing at the licensed binaries.

**➡️ If you have the Copernicus / StyreneB font files, send them and I'll swap
them in and retune the display weight.**

---

## Tokens quick reference

- Colors: `--color-primary`, `--color-canvas`, `--color-surface-card`,
  `--color-surface-dark`, `--color-ink`, `--color-body`, `--color-hairline`, …
- Type: `--font-display`, `--font-body`, `--font-mono`, `--type-display-xl-size`, …
- Spacing: `--space-xs … --space-section`, `--container-max`.
- Radius: `--radius-md` (8) · `--radius-lg` (12) · `--radius-xl` (16) · `--radius-pill`.

Always reference tokens — never inline hex.
