import React from 'react';

/**
 * Card — the system's surface container. Depth comes from surface color, not
 * shadow. Variants map to the brand's surface modes:
 *   feature  → cream card (--surface-card), the default content card
 *   outline  → canvas + hairline (pricing tiers, model-comparison)
 *   dark     → navy product-mockup surface
 *   coral    → full-bleed coral callout (voltage moment)
 *   soft     → very-soft cream band
 * `pad` selects internal padding from the spacing scale.
 */
export function Card({ children, variant = 'feature', pad = 'xl', radius = 'lg', style, ...rest }) {
  const variants = {
    feature: { background: 'var(--color-surface-card)', color: 'var(--color-body)' },
    soft:    { background: 'var(--color-surface-soft)', color: 'var(--color-body)' },
    outline: { background: 'var(--color-canvas)', color: 'var(--color-body)', border: '1px solid var(--color-hairline)' },
    dark:    { background: 'var(--color-surface-dark)', color: 'var(--color-on-dark)' },
    'dark-elevated': { background: 'var(--color-surface-dark-elevated)', color: 'var(--color-on-dark)' },
    coral:   { background: 'var(--color-primary)', color: 'var(--color-on-primary)' },
  };
  const pads = {
    none: '0', lg: 'var(--space-lg)', xl: 'var(--space-xl)', xxl: 'var(--space-xxl)', band: 'var(--space-band)',
  };
  const radii = {
    md: 'var(--radius-md)', lg: 'var(--radius-lg)', xl: 'var(--radius-xl)',
  };
  return (
    <div
      style={{
        borderRadius: radii[radius] || radii.lg,
        padding: pads[pad] || pads.xl,
        fontFamily: 'var(--font-body)',
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
