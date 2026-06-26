import React from 'react';

/**
 * Avatar — circular avatar. Photo crops to a perfect circle; without a src it
 * renders cream-surface initials. Default 40px (testimonial size).
 */
export function Avatar({ src, alt = '', initials, size = 40, style, ...rest }) {
  return (
    <span
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: 'var(--radius-full)',
        overflow: 'hidden',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-surface-cream-strong)',
        color: 'var(--color-muted)',
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        fontSize: `${Math.round(size * 0.38)}px`,
        flex: 'none',
        ...style,
      }}
      {...rest}
    >
      {src ? (
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        initials
      )}
    </span>
  );
}
