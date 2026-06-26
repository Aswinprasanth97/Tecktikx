import React from 'react';

/**
 * IconButton — 36px circular icon button. Cream background, hairline border,
 * ink-color icon. Used for carousel arrows, share, "view more". Pass an SVG /
 * glyph as children.
 */
export function IconButton({ children, size = 36, variant = 'default', ariaLabel, style, disabled, ...rest }) {
  const [pressed, setPressed] = React.useState(false);
  const variants = {
    default: {
      background: pressed && !disabled ? 'var(--color-surface-card)' : 'var(--color-canvas)',
      color: 'var(--color-ink)',
      border: '1px solid var(--color-hairline)',
    },
    'on-dark': {
      background: pressed && !disabled ? '#33302b' : 'var(--color-surface-dark-elevated)',
      color: 'var(--color-on-dark)',
      border: '1px solid transparent',
    },
  };
  return (
    <button
      aria-label={ariaLabel}
      disabled={disabled}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: 'var(--radius-full)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        padding: 0,
        transition: 'background-color 120ms ease',
        opacity: disabled ? 0.5 : 1,
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
