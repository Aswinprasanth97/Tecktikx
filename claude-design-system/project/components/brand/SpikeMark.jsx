import React from 'react';

/**
 * SpikeMark — the Anthropic radial-burst brand glyph.
 * Inherits color via currentColor. Use as the wordmark prefix and inline
 * content marker. Never invert the mark inside the wordmark itself.
 */
export function SpikeMark({ size = 20, color, className, style, ...rest }) {
  const spokes = [
    [90, 46, 6.5], [270, 46, 6.5], [0, 40, 5.5], [180, 40, 5.5],
    [45, 34, 4.5], [135, 34, 4.5], [225, 34, 4.5], [315, 34, 4.5],
    [22.5, 26, 3.5], [67.5, 26, 3.5], [112.5, 26, 3.5], [157.5, 26, 3.5],
    [202.5, 26, 3.5], [247.5, 26, 3.5], [292.5, 26, 3.5], [337.5, 26, 3.5],
  ];
  const rad = (d) => (d * Math.PI) / 180;
  const paths = spokes.map(([ang, len, hw], i) => {
    const a = rad(ang);
    const px = Math.cos(a), py = -Math.sin(a);
    const tx = -py, ty = px;
    const d = `M ${50 + tx * hw} ${50 + ty * hw} L ${50 + px * len} ${50 + py * len} L ${50 - tx * hw} ${50 - ty * hw} Z`;
    return <path key={i} d={d} />;
  });
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="currentColor"
      role="img"
      aria-label="Anthropic mark"
      className={className}
      style={{ color, display: 'inline-block', flex: 'none', ...style }}
      {...rest}
    >
      {paths}
      <circle cx="50" cy="50" r="5.5" />
    </svg>
  );
}

/**
 * Wordmark — SpikeMark + label, the standard brand lockup.
 */
export function Wordmark({ label = 'Claude', size = 20, color = 'var(--color-ink)', style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        color,
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: `${Math.round(size * 0.95)}px`,
        letterSpacing: '-0.01em',
        ...style,
      }}
      {...rest}
    >
      <SpikeMark size={size} />
      {label}
    </span>
  );
}
