import React from 'react';

/**
 * Badge — small pill label. `pill` is the neutral cream tag; `coral` is the
 * filled accent for NEW / BETA (uppercase, tracked); `amber` and `outline`
 * are companion variants.
 */
export function Badge({ children, variant = 'pill', style, ...rest }) {
  const variants = {
    pill: {
      background: 'var(--color-surface-card)',
      color: 'var(--color-ink)',
      fontSize: 'var(--type-caption-size)',
      fontWeight: 'var(--type-caption-weight)',
      letterSpacing: 0,
      textTransform: 'none',
    },
    coral: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      fontSize: 'var(--type-caption-up-size)',
      fontWeight: 500,
      letterSpacing: 'var(--type-caption-up-track)',
      textTransform: 'uppercase',
    },
    amber: {
      background: 'var(--color-accent-amber)',
      color: 'var(--color-ink)',
      fontSize: 'var(--type-caption-up-size)',
      fontWeight: 500,
      letterSpacing: 'var(--type-caption-up-track)',
      textTransform: 'uppercase',
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-muted)',
      border: '1px solid var(--color-hairline)',
      fontSize: 'var(--type-caption-size)',
      fontWeight: 'var(--type-caption-weight)',
    },
    'on-dark': {
      background: 'var(--color-surface-dark-elevated)',
      color: 'var(--color-on-dark-soft)',
      fontSize: 'var(--type-caption-size)',
      fontWeight: 'var(--type-caption-weight)',
    },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 12px',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-body)',
        lineHeight: 1.4,
        whiteSpace: 'nowrap',
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
