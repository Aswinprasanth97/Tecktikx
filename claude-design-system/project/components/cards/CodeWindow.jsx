import React from 'react';

/**
 * Tok — a syntax token for use inside CodeWindow lines.
 * kind ∈ keyword | string | comment | func | num | plain
 */
export function Tok({ kind = 'plain', children }) {
  const colors = {
    keyword: 'var(--color-code-keyword)',
    string: 'var(--color-code-string)',
    comment: 'var(--color-code-comment)',
    func: 'var(--color-code-func)',
    num: 'var(--color-code-num)',
    plain: 'var(--color-code-plain)',
  };
  return <span style={{ color: colors[kind] || colors.plain }}>{children}</span>;
}

/**
 * CodeWindow — the signature dark code-editor mockup card. Shows real product
 * chrome: a title bar with filename, line numbers, syntax-highlighted mono
 * code, and an optional status bar. Pass `lines` (array of React nodes, one
 * per row) built with <Tok>, or plain strings.
 */
export function CodeWindow({
  filename = 'main.py',
  lines = [],
  showLineNumbers = true,
  status,
  style,
  ...rest
}) {
  return (
    <div
      style={{
        background: 'var(--color-surface-dark)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        fontFamily: 'var(--font-mono)',
        ...style,
      }}
      {...rest}
    >
      {/* title bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px var(--space-lg)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <span style={{ display: 'flex', gap: '6px' }}>
          {['#3a3833', '#3a3833', '#3a3833'].map((c, i) => (
            <span key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
          ))}
        </span>
        <span style={{ marginLeft: '8px', fontSize: '12px', color: 'var(--color-on-dark-soft)', fontFamily: 'var(--font-body)' }}>
          {filename}
        </span>
      </div>

      {/* code body */}
      <div style={{ padding: 'var(--space-lg)', overflowX: 'auto' }}>
        <pre style={{ margin: 0, fontSize: 'var(--type-code-size)', lineHeight: 'var(--type-code-line)' }}>
          {lines.map((ln, i) => (
            <div key={i} style={{ display: 'flex', whiteSpace: 'pre' }}>
              {showLineNumbers && (
                <span style={{ width: '28px', flex: 'none', color: 'var(--color-muted-soft)', userSelect: 'none', textAlign: 'right', marginRight: '18px' }}>
                  {i + 1}
                </span>
              )}
              <span style={{ color: 'var(--color-code-plain)' }}>{ln}</span>
            </div>
          ))}
        </pre>
      </div>

      {/* status bar */}
      {status && (
        <div
          style={{
            background: 'var(--color-surface-dark-elevated)',
            padding: '8px var(--space-lg)',
            fontSize: '12px',
            color: 'var(--color-on-dark-soft)',
            fontFamily: 'var(--font-body)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {status}
        </div>
      )}
    </div>
  );
}
