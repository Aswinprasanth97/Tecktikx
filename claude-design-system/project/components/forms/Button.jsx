import React from 'react';

/**
 * Button — the system's CTA primitive.
 * Coral primary is the signature; reserve it for the main action. Secondary is
 * cream-with-hairline; on dark surfaces use the `secondary-on-dark` variant
 * (the system never inverts to a light secondary on dark). `text` is a bare
 * inline link button. Only default + active(press) states are styled.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onPrimary, // deprecated alias, ignored
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);

  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--type-button-weight)',
    fontSize: 'var(--type-button-size)',
    lineHeight: 1,
    border: '1px solid transparent',
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'background-color 120ms ease, color 120ms ease, border-color 120ms ease',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
  };

  const sizes = {
    sm: { height: '32px', padding: '0 14px' },
    md: { height: '40px', padding: '0 20px' },
    lg: { height: '48px', padding: '0 26px', fontSize: '15px' },
  };

  const variants = {
    primary: {
      background: disabled ? 'var(--color-primary-disabled)' : pressed ? 'var(--color-primary-active)' : 'var(--color-primary)',
      color: disabled ? 'var(--color-muted-soft)' : 'var(--color-on-primary)',
    },
    secondary: {
      background: 'var(--color-canvas)',
      color: 'var(--color-ink)',
      borderColor: 'var(--color-hairline)',
      ...(pressed && !disabled ? { background: 'var(--color-surface-card)' } : null),
    },
    'secondary-on-dark': {
      background: pressed && !disabled ? '#33302b' : 'var(--color-surface-dark-elevated)',
      color: 'var(--color-on-dark)',
    },
    'on-coral': {
      background: pressed && !disabled ? 'var(--color-surface-card)' : 'var(--color-canvas)',
      color: 'var(--color-primary-active)',
    },
    text: {
      background: 'transparent',
      color: 'var(--color-ink)',
      padding: '0 4px',
      height: 'auto',
    },
  };

  const press = disabled ? {} : {
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
  };

  return (
    <button
      disabled={disabled}
      style={{ ...base, ...sizes[size], ...variants[variant], ...(variant === 'text' ? {} : {}), ...(disabled ? { opacity: variant === 'primary' ? 1 : 0.5 } : {}), ...style }}
      {...press}
      {...rest}
    >
      {children}
    </button>
  );
}
