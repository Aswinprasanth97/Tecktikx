import React from 'react';

/**
 * Input — standard text input. Cream background, hairline border, coral focus
 * ring. 40px tall, 8px radius. Supports an optional leading label.
 */
export function Input({ label, hint, error, style, id, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error
    ? 'var(--color-error)'
    : focused
    ? 'var(--color-primary)'
    : 'var(--color-hairline)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontFamily: 'var(--font-body)' }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-body-strong)' }}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          height: '40px',
          padding: '10px 14px',
          background: 'var(--color-canvas)',
          color: 'var(--color-ink)',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--type-body-md-size)',
          border: `1px solid ${borderColor}`,
          borderRadius: 'var(--radius-md)',
          outline: 'none',
          boxShadow: focused && !error ? 'var(--ring-focus)' : 'none',
          transition: 'border-color 120ms ease, box-shadow 120ms ease',
          ...style,
        }}
        {...rest}
      />
      {(hint || error) && (
        <span style={{ fontSize: '13px', color: error ? 'var(--color-error)' : 'var(--color-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
