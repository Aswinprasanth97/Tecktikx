import React from 'react';

/**
 * CategoryTab — sub-nav filter tab. Inactive is transparent with muted text;
 * active fills with cream surface and ink text. Used in solutions / connectors
 * filter rows.
 */
export function CategoryTab({ children, active = false, style, ...rest }) {
  return (
    <button
      style={{
        padding: '8px 14px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--type-nav-size)',
        fontWeight: 'var(--type-nav-weight)',
        background: active ? 'var(--color-surface-card)' : 'transparent',
        color: active ? 'var(--color-ink)' : 'var(--color-muted)',
        transition: 'background-color 120ms ease, color 120ms ease',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
