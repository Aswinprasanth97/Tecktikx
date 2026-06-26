/* @ds-bundle: {"format":3,"namespace":"ClaudeDesignSystem_8d7c53","components":[{"name":"SpikeMark","sourcePath":"components/brand/SpikeMark.jsx"},{"name":"Wordmark","sourcePath":"components/brand/SpikeMark.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"Tok","sourcePath":"components/cards/CodeWindow.jsx"},{"name":"CodeWindow","sourcePath":"components/cards/CodeWindow.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"CategoryTab","sourcePath":"components/navigation/CategoryTab.jsx"}],"sourceHashes":{"components/brand/SpikeMark.jsx":"498f725a2df7","components/cards/Card.jsx":"f4a7b365e281","components/cards/CodeWindow.jsx":"dd0963c90883","components/data-display/Avatar.jsx":"555f10369e96","components/data-display/Badge.jsx":"f10c052df6a9","components/forms/Button.jsx":"53126fb1a9d0","components/forms/IconButton.jsx":"db1cd8e72be6","components/forms/Input.jsx":"f84722be86bb","components/navigation/CategoryTab.jsx":"39b5276518f0","guidelines/tweaks-panel.jsx":"6591467622ed","ui_kits/marketing/Chrome.jsx":"211a17d22978","ui_kits/marketing/Developers.jsx":"1b5eac0bc0c1","ui_kits/marketing/Home.jsx":"a61f7cb660b2","ui_kits/marketing/Pricing.jsx":"a345a0f80c87"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ClaudeDesignSystem_8d7c53 = window.ClaudeDesignSystem_8d7c53 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/SpikeMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SpikeMark — the Anthropic radial-burst brand glyph.
 * Inherits color via currentColor. Use as the wordmark prefix and inline
 * content marker. Never invert the mark inside the wordmark itself.
 */
function SpikeMark({
  size = 20,
  color,
  className,
  style,
  ...rest
}) {
  const spokes = [[90, 46, 6.5], [270, 46, 6.5], [0, 40, 5.5], [180, 40, 5.5], [45, 34, 4.5], [135, 34, 4.5], [225, 34, 4.5], [315, 34, 4.5], [22.5, 26, 3.5], [67.5, 26, 3.5], [112.5, 26, 3.5], [157.5, 26, 3.5], [202.5, 26, 3.5], [247.5, 26, 3.5], [292.5, 26, 3.5], [337.5, 26, 3.5]];
  const rad = d => d * Math.PI / 180;
  const paths = spokes.map(([ang, len, hw], i) => {
    const a = rad(ang);
    const px = Math.cos(a),
      py = -Math.sin(a);
    const tx = -py,
      ty = px;
    const d = `M ${50 + tx * hw} ${50 + ty * hw} L ${50 + px * len} ${50 + py * len} L ${50 - tx * hw} ${50 - ty * hw} Z`;
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: d
    });
  });
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 100 100",
    width: size,
    height: size,
    fill: "currentColor",
    role: "img",
    "aria-label": "Anthropic mark",
    className: className,
    style: {
      color,
      display: 'inline-block',
      flex: 'none',
      ...style
    }
  }, rest), paths, /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "5.5"
  }));
}

/**
 * Wordmark — SpikeMark + label, the standard brand lockup.
 */
function Wordmark({
  label = 'Claude',
  size = 20,
  color = 'var(--color-ink)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      color,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: `${Math.round(size * 0.95)}px`,
      letterSpacing: '-0.01em',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(SpikeMark, {
    size: size
  }), label);
}
Object.assign(__ds_scope, { SpikeMark, Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SpikeMark.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Card({
  children,
  variant = 'feature',
  pad = 'xl',
  radius = 'lg',
  style,
  ...rest
}) {
  const variants = {
    feature: {
      background: 'var(--color-surface-card)',
      color: 'var(--color-body)'
    },
    soft: {
      background: 'var(--color-surface-soft)',
      color: 'var(--color-body)'
    },
    outline: {
      background: 'var(--color-canvas)',
      color: 'var(--color-body)',
      border: '1px solid var(--color-hairline)'
    },
    dark: {
      background: 'var(--color-surface-dark)',
      color: 'var(--color-on-dark)'
    },
    'dark-elevated': {
      background: 'var(--color-surface-dark-elevated)',
      color: 'var(--color-on-dark)'
    },
    coral: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)'
    }
  };
  const pads = {
    none: '0',
    lg: 'var(--space-lg)',
    xl: 'var(--space-xl)',
    xxl: 'var(--space-xxl)',
    band: 'var(--space-band)'
  };
  const radii = {
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: radii[radius] || radii.lg,
      padding: pads[pad] || pads.xl,
      fontFamily: 'var(--font-body)',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/cards/CodeWindow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tok — a syntax token for use inside CodeWindow lines.
 * kind ∈ keyword | string | comment | func | num | plain
 */
function Tok({
  kind = 'plain',
  children
}) {
  const colors = {
    keyword: 'var(--color-code-keyword)',
    string: 'var(--color-code-string)',
    comment: 'var(--color-code-comment)',
    func: 'var(--color-code-func)',
    num: 'var(--color-code-num)',
    plain: 'var(--color-code-plain)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors[kind] || colors.plain
    }
  }, children);
}

/**
 * CodeWindow — the signature dark code-editor mockup card. Shows real product
 * chrome: a title bar with filename, line numbers, syntax-highlighted mono
 * code, and an optional status bar. Pass `lines` (array of React nodes, one
 * per row) built with <Tok>, or plain strings.
 */
function CodeWindow({
  filename = 'main.py',
  lines = [],
  showLineNumbers = true,
  status,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--color-surface-dark)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      fontFamily: 'var(--font-mono)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px var(--space-lg)',
      borderBottom: '1px solid rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: '6px'
    }
  }, ['#3a3833', '#3a3833', '#3a3833'].map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: c
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: '8px',
      fontSize: '12px',
      color: 'var(--color-on-dark-soft)',
      fontFamily: 'var(--font-body)'
    }
  }, filename)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-lg)',
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      fontSize: 'var(--type-code-size)',
      lineHeight: 'var(--type-code-line)'
    }
  }, lines.map((ln, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      whiteSpace: 'pre'
    }
  }, showLineNumbers && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '28px',
      flex: 'none',
      color: 'var(--color-muted-soft)',
      userSelect: 'none',
      textAlign: 'right',
      marginRight: '18px'
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-code-plain)'
    }
  }, ln))))), status && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface-dark-elevated)',
      padding: '8px var(--space-lg)',
      fontSize: '12px',
      color: 'var(--color-on-dark-soft)',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, status));
}
Object.assign(__ds_scope, { Tok, CodeWindow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CodeWindow.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular avatar. Photo crops to a perfect circle; without a src it
 * renders cream-surface initials. Default 40px (testimonial size).
 */
function Avatar({
  src,
  alt = '',
  initials,
  size = 40,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small pill label. `pill` is the neutral cream tag; `coral` is the
 * filled accent for NEW / BETA (uppercase, tracked); `amber` and `outline`
 * are companion variants.
 */
function Badge({
  children,
  variant = 'pill',
  style,
  ...rest
}) {
  const variants = {
    pill: {
      background: 'var(--color-surface-card)',
      color: 'var(--color-ink)',
      fontSize: 'var(--type-caption-size)',
      fontWeight: 'var(--type-caption-weight)',
      letterSpacing: 0,
      textTransform: 'none'
    },
    coral: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      fontSize: 'var(--type-caption-up-size)',
      fontWeight: 500,
      letterSpacing: 'var(--type-caption-up-track)',
      textTransform: 'uppercase'
    },
    amber: {
      background: 'var(--color-accent-amber)',
      color: 'var(--color-ink)',
      fontSize: 'var(--type-caption-up-size)',
      fontWeight: 500,
      letterSpacing: 'var(--type-caption-up-track)',
      textTransform: 'uppercase'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-muted)',
      border: '1px solid var(--color-hairline)',
      fontSize: 'var(--type-caption-size)',
      fontWeight: 'var(--type-caption-weight)'
    },
    'on-dark': {
      background: 'var(--color-surface-dark-elevated)',
      color: 'var(--color-on-dark-soft)',
      fontSize: 'var(--type-caption-size)',
      fontWeight: 'var(--type-caption-weight)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the system's CTA primitive.
 * Coral primary is the signature; reserve it for the main action. Secondary is
 * cream-with-hairline; on dark surfaces use the `secondary-on-dark` variant
 * (the system never inverts to a light secondary on dark). `text` is a bare
 * inline link button. Only default + active(press) states are styled.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onPrimary,
  // deprecated alias, ignored
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
    textDecoration: 'none'
  };
  const sizes = {
    sm: {
      height: '32px',
      padding: '0 14px'
    },
    md: {
      height: '40px',
      padding: '0 20px'
    },
    lg: {
      height: '48px',
      padding: '0 26px',
      fontSize: '15px'
    }
  };
  const variants = {
    primary: {
      background: disabled ? 'var(--color-primary-disabled)' : pressed ? 'var(--color-primary-active)' : 'var(--color-primary)',
      color: disabled ? 'var(--color-muted-soft)' : 'var(--color-on-primary)'
    },
    secondary: {
      background: 'var(--color-canvas)',
      color: 'var(--color-ink)',
      borderColor: 'var(--color-hairline)',
      ...(pressed && !disabled ? {
        background: 'var(--color-surface-card)'
      } : null)
    },
    'secondary-on-dark': {
      background: pressed && !disabled ? '#33302b' : 'var(--color-surface-dark-elevated)',
      color: 'var(--color-on-dark)'
    },
    'on-coral': {
      background: pressed && !disabled ? 'var(--color-surface-card)' : 'var(--color-canvas)',
      color: 'var(--color-primary-active)'
    },
    text: {
      background: 'transparent',
      color: 'var(--color-ink)',
      padding: '0 4px',
      height: 'auto'
    }
  };
  const press = disabled ? {} : {
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false)
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...(variant === 'text' ? {} : {}),
      ...(disabled ? {
        opacity: variant === 'primary' ? 1 : 0.5
      } : {}),
      ...style
    }
  }, press, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — 36px circular icon button. Cream background, hairline border,
 * ink-color icon. Used for carousel arrows, share, "view more". Pass an SVG /
 * glyph as children.
 */
function IconButton({
  children,
  size = 36,
  variant = 'default',
  ariaLabel,
  style,
  disabled,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  const variants = {
    default: {
      background: pressed && !disabled ? 'var(--color-surface-card)' : 'var(--color-canvas)',
      color: 'var(--color-ink)',
      border: '1px solid var(--color-hairline)'
    },
    'on-dark': {
      background: pressed && !disabled ? '#33302b' : 'var(--color-surface-dark-elevated)',
      color: 'var(--color-on-dark)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — standard text input. Cream background, hairline border, coral focus
 * ring. 40px tall, 8px radius. Supports an optional leading label.
 */
function Input({
  label,
  hint,
  error,
  style,
  id,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--color-error)' : focused ? 'var(--color-primary)' : 'var(--color-hairline)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: '14px',
      fontWeight: 500,
      color: 'var(--color-body-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
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
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: error ? 'var(--color-error)' : 'var(--color-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CategoryTab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CategoryTab — sub-nav filter tab. Inactive is transparent with muted text;
 * active fills with cream surface and ink text. Used in solutions / connectors
 * filter rows.
 */
function CategoryTab({
  children,
  active = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { CategoryTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CategoryTab.jsx", error: String((e && e.message) || e) }); }

// guidelines/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Chrome.jsx
try { (() => {
// TopNav + Footer — shared marketing chrome. Exposes to window for index.html.
const {
  SpikeMark,
  Wordmark,
  Button
} = window.ClaudeDesignSystem_8d7c53;
function TopNav({
  current,
  onNav,
  onSignIn
}) {
  const items = ['Product', 'Solutions', 'Research', 'Pricing'];
  const map = {
    Product: 'home',
    Solutions: 'developers',
    Research: 'home',
    Pricing: 'pricing'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      height: 64,
      background: 'rgba(250,249,245,0.85)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--color-hairline)',
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    label: "Claude",
    size: 22
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 8
    }
  }, items.map(it => {
    const active = map[it] === current;
    return /*#__PURE__*/React.createElement("a", {
      key: it,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav(map[it]);
      },
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        fontWeight: 500,
        color: active ? 'var(--color-ink)' : 'var(--color-muted)',
        padding: '8px 12px',
        borderRadius: 8,
        textDecoration: 'none'
      }
    }, it);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    onClick: onSignIn
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onSignIn
  }, "Try Claude")));
}
function Footer() {
  const cols = [['Product', ['Overview', 'Claude Code', 'Pricing', 'Connectors']], ['Company', ['About', 'Careers', 'News', 'Research']], ['Resources', ['Docs', 'API', 'Status', 'Support']], ['Legal', ['Privacy', 'Terms', 'Trust', 'Cookies']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-surface-dark)',
      color: 'var(--color-on-dark-soft)',
      padding: '64px 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 240px',
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    label: "Anthropic",
    size: 22,
    color: "var(--color-on-dark)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 14,
      lineHeight: 1.55,
      maxWidth: 260,
      color: 'var(--color-on-dark-soft)'
    }
  }, "AI research and products that put safety at the frontier.")), cols.map(([title, links]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      minWidth: 130
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--color-on-dark)',
      marginBottom: 14
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--color-on-dark-soft)',
      fontSize: 14,
      textDecoration: 'none'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '40px auto 0',
      paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,0.08)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: 'var(--color-muted-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Anthropic PBC"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--color-muted-soft)'
    }
  }, "X"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--color-muted-soft)'
    }
  }, "LinkedIn"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--color-muted-soft)'
    }
  }, "YouTube"))));
}
Object.assign(window, {
  TopNav,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Developers.jsx
try { (() => {
// Developers — connectors page: category tabs + connector tile grid + dark CTA.
const {
  Card,
  Badge,
  Button,
  CategoryTab,
  CodeWindow,
  Tok,
  SpikeMark
} = window.ClaudeDesignSystem_8d7c53;
const dwrap = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 32px'
};
const ALL_TILES = [['GitHub', 'Developer tools', 'Read repos, open PRs, review code.'], ['Slack', 'Productivity', 'Summarize channels and draft replies.'], ['Google Drive', 'Productivity', 'Search and reason over your docs.'], ['Linear', 'Developer tools', 'Triage issues and plan sprints.'], ['Notion', 'Productivity', 'Query and update your workspace.'], ['Postgres', 'Data', 'Ask questions in plain English.'], ['Figma', 'Design', 'Pull frames and design context.'], ['Sentry', 'Developer tools', 'Investigate and explain errors.']];
const CATS = ['All', 'Productivity', 'Developer tools', 'Data', 'Design'];
function ConnectorTile({
  name,
  cat,
  desc
}) {
  return /*#__PURE__*/React.createElement(Card, {
    variant: "outline",
    pad: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: 'var(--color-surface-cream-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      color: 'var(--color-ink)',
      fontFamily: 'var(--font-body)'
    }
  }, name[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--color-accent-teal)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--color-ink)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--color-body)'
    }
  }, desc));
}
function Developers() {
  const [cat, setCat] = React.useState('All');
  const tiles = cat === 'All' ? ALL_TILES : ALL_TILES.filter(t => t[1] === cat);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...dwrap,
      paddingTop: 80,
      paddingBottom: 48,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "coral",
    style: {
      marginBottom: 18
    }
  }, "Connectors"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--type-display-weight)',
      fontSize: 56,
      letterSpacing: '-1.2px',
      color: 'var(--color-ink)',
      margin: 0
    }
  }, "Plug Claude into your stack"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--color-muted)',
      margin: '16px auto 0',
      maxWidth: 520
    }
  }, "Give Claude secure, scoped access to the tools your team already uses.")), /*#__PURE__*/React.createElement("section", {
    style: dwrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: 32
    }
  }, CATS.map(c => /*#__PURE__*/React.createElement(CategoryTab, {
    key: c,
    active: cat === c,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, tiles.map(t => /*#__PURE__*/React.createElement(ConnectorTile, {
    key: t[0],
    name: t[0],
    cat: t[1],
    desc: t[2]
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...dwrap,
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "dark",
    pad: "band",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--type-display-weight)',
      fontSize: 36,
      letterSpacing: '-0.6px',
      color: 'var(--color-on-dark)',
      margin: '0 0 12px'
    }
  }, "Build your own connector"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--color-on-dark-soft)',
      margin: '0 0 24px'
    }
  }, "The Model Context Protocol is open. Ship a server in an afternoon."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "View the MCP docs")), /*#__PURE__*/React.createElement(CodeWindow, {
    filename: "server.ts",
    showLineNumbers: false,
    lines: [/*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Tok, {
      kind: "keyword"
    }, "const"), " server = ", /*#__PURE__*/React.createElement(Tok, {
      kind: "keyword"
    }, "new"), " ", /*#__PURE__*/React.createElement(Tok, {
      kind: "func"
    }, "McpServer"), "()"), /*#__PURE__*/React.createElement("span", null, "server.", /*#__PURE__*/React.createElement(Tok, {
      kind: "func"
    }, "tool"), "(", /*#__PURE__*/React.createElement(Tok, {
      kind: "string"
    }, "\"search\""), ", handler)"), /*#__PURE__*/React.createElement("span", null, "server.", /*#__PURE__*/React.createElement(Tok, {
      kind: "func"
    }, "listen"), "()")]
  }))));
}
Object.assign(window, {
  Developers
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Developers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Home.jsx
try { (() => {
// Home — marketing homepage. Composes bundle primitives.
const {
  Button,
  Card,
  Badge,
  CodeWindow,
  Tok,
  SpikeMark
} = window.ClaudeDesignSystem_8d7c53;
const wrap = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 32px'
};
function HeroIllustration() {
  // simple coral + ink line-art on cream, per brand (minimal, hand-drawn feel)
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface-card)',
      borderRadius: 'var(--radius-xl)',
      padding: 28,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SpikeMark, {
    size: 18,
    color: "var(--color-primary)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 14,
      color: 'var(--color-ink)'
    }
  }, "Claude")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-canvas)',
      borderRadius: 12,
      padding: '14px 16px',
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--color-body)',
      maxWidth: '88%'
    }
  }, "Draft a launch plan for our Q3 release and flag the riskiest assumptions."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-ink)',
      color: 'var(--color-on-dark)',
      borderRadius: 12,
      padding: '14px 16px',
      fontSize: 14,
      lineHeight: 1.5,
      alignSelf: 'flex-end',
      maxWidth: '92%'
    }
  }, "Here's a 6-week plan. The two assumptions most likely to break: channel readiness and the data-migration window. I'd validate both this week \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      color: 'var(--color-muted)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--color-success)'
    }
  }), "Thinking partner \xB7 always on"));
}
function FeatureGrid() {
  const feats = [['Write & edit', 'Draft, rewrite and polish anything — from a board memo to a launch email — in your voice.'], ['Reason through code', 'Read a whole repository, plan a change, and ship a tested patch with Claude Code.'], ['Analyze your data', 'Hand Claude a spreadsheet or a PDF and get the answer, the chart, and the why.']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, feats.map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    variant: "feature"
  }, /*#__PURE__*/React.createElement(SpikeMark, {
    size: 20,
    color: "var(--color-primary)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      margin: '16px 0 8px',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      color: 'var(--color-ink)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--color-body)'
    }
  }, d))));
}
function ModelCards() {
  const models = [['Opus', 'The most capable model for deep reasoning, agents and hard problems.'], ['Sonnet', 'The everyday workhorse — fast, balanced, and remarkably smart.'], ['Haiku', 'Near-instant responses for high-volume, latency-sensitive work.']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, models.map(([m, d]) => /*#__PURE__*/React.createElement(Card, {
    key: m,
    variant: "outline"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--type-display-weight)',
      fontSize: 28,
      letterSpacing: '-0.3px',
      color: 'var(--color-ink)'
    }
  }, "Claude ", m), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 18px',
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--color-body)'
    }
  }, d), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--color-primary)',
      fontWeight: 500,
      fontSize: 14,
      textDecoration: 'none'
    }
  }, "Learn more \u2192"))));
}
function Home({
  onCta
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: 80,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    variant: "coral",
    style: {
      marginBottom: 20
    }
  }, "New \xB7 Claude Opus 4.5"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--type-display-weight)',
      fontSize: 60,
      lineHeight: 1.05,
      letterSpacing: '-1.5px',
      color: 'var(--color-ink)',
      margin: 0
    }
  }, "Meet your thinking partner"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.55,
      color: 'var(--color-body-strong)',
      margin: '20px 0 28px',
      maxWidth: 460
    }
  }, "Claude is a family of AI models built to be safe, accurate, and genuinely useful \u2014 for work that matters."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onCta
  }, "Try Claude"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: onCta
  }, "Talk to sales"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 380
    }
  }, /*#__PURE__*/React.createElement(HeroIllustration, null)))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-surface-soft)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--type-display-weight)',
      fontSize: 40,
      letterSpacing: '-0.8px',
      color: 'var(--color-ink)',
      margin: '0 0 12px',
      maxWidth: 560
    }
  }, "One partner, every kind of work"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--color-muted)',
      margin: '0 0 40px',
      maxWidth: 520
    }
  }, "From the first draft to the final ship."), /*#__PURE__*/React.createElement(FeatureGrid, null))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    style: {
      marginBottom: 16
    }
  }, "For developers"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--type-display-weight)',
      fontSize: 40,
      letterSpacing: '-0.8px',
      color: 'var(--color-ink)',
      margin: '0 0 14px'
    }
  }, "Claude Code, in your terminal"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.55,
      color: 'var(--color-body)',
      margin: '0 0 24px',
      maxWidth: 440
    }
  }, "Point Claude at your repository and it reads the code, plans the change, and ships a tested patch \u2014 agentic, end to end."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Read the docs")), /*#__PURE__*/React.createElement(CodeWindow, {
    filename: "refactor.py",
    lines: [/*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Tok, {
      kind: "keyword"
    }, "from"), " anthropic ", /*#__PURE__*/React.createElement(Tok, {
      kind: "keyword"
    }, "import"), " Anthropic"), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Tok, {
      kind: "comment"
    }, "# let Claude plan and apply the change")), /*#__PURE__*/React.createElement("span", null, "client = ", /*#__PURE__*/React.createElement(Tok, {
      kind: "func"
    }, "Anthropic"), "()"), /*#__PURE__*/React.createElement("span", null, "resp = client.messages.", /*#__PURE__*/React.createElement(Tok, {
      kind: "func"
    }, "create"), "("), /*#__PURE__*/React.createElement("span", null, "    ", "model=", /*#__PURE__*/React.createElement(Tok, {
      kind: "string"
    }, "\"claude-opus-4-5\""), ","), /*#__PURE__*/React.createElement("span", null, "    ", "messages=[", "{", /*#__PURE__*/React.createElement(Tok, {
      kind: "string"
    }, "\"role\""), ": ", /*#__PURE__*/React.createElement(Tok, {
      kind: "string"
    }, "\"user\""), ", ...", "}", "],"), /*#__PURE__*/React.createElement("span", null, ")"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Tok, {
      kind: "func"
    }, "print"), "(resp.content)")],
    status: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--color-success)'
      }
    }, "\u25CF"), " 3 files changed \xB7 tests passing")
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-surface-soft)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--type-display-weight)',
      fontSize: 40,
      letterSpacing: '-0.8px',
      color: 'var(--color-ink)',
      margin: '0 0 40px'
    }
  }, "Which problem are you up against?"), /*#__PURE__*/React.createElement(ModelCards, null))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "coral",
    pad: "band",
    radius: "lg",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--type-display-weight)',
      fontSize: 40,
      letterSpacing: '-0.8px',
      color: 'var(--color-on-primary)',
      margin: '0 0 12px'
    }
  }, "Start building with Claude"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--color-on-primary)',
      opacity: 0.9,
      margin: '0 0 28px'
    }
  }, "Free to try. Ready when you are."), /*#__PURE__*/React.createElement(Button, {
    variant: "on-coral",
    size: "lg",
    onClick: onCta
  }, "Try Claude"))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Pricing.jsx
try { (() => {
// Pricing — 3-up tiers; featured tier flips to dark surface.
const {
  Button,
  Card,
  Badge,
  SpikeMark
} = window.ClaudeDesignSystem_8d7c53;
function Tier({
  name,
  price,
  sub,
  features,
  featured,
  cta
}) {
  const ink = featured ? 'var(--color-on-dark)' : 'var(--color-ink)';
  const body = featured ? 'var(--color-on-dark-soft)' : 'var(--color-body)';
  return /*#__PURE__*/React.createElement(Card, {
    variant: featured ? 'dark' : 'outline',
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 22,
      color: ink
    }
  }, name), featured && /*#__PURE__*/React.createElement(Badge, {
    variant: "coral"
  }, "Popular")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--type-display-weight)',
      fontSize: 40,
      letterSpacing: '-1px',
      color: ink
    }
  }, price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: featured ? 'var(--color-on-dark-soft)' : 'var(--color-muted)',
      marginBottom: 22
    }
  }, sub), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 28,
      flex: 1
    }
  }, features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 15,
      lineHeight: 1.45,
      color: body
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)',
      flex: 'none',
      marginTop: 1
    }
  }, "\u2713"), f))), /*#__PURE__*/React.createElement(Button, {
    variant: featured ? 'primary' : 'secondary',
    style: {
      width: '100%'
    }
  }, cta));
}
function Pricing({
  onCta
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 32px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--type-display-weight)',
      fontSize: 56,
      letterSpacing: '-1.2px',
      color: 'var(--color-ink)',
      margin: 0
    }
  }, "Plans for every kind of work"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--color-muted)',
      margin: '16px auto 0',
      maxWidth: 480
    }
  }, "Start free. Upgrade when you need more reasoning, more context, and your whole team.")), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '48px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(Tier, {
    name: "Free",
    price: "$0",
    sub: "For getting started",
    features: ['Chat with Claude', 'Access to Sonnet', 'Web and desktop apps', 'Limited usage'],
    cta: "Get started"
  }), /*#__PURE__*/React.createElement(Tier, {
    name: "Pro",
    price: "$20",
    sub: "per month",
    featured: true,
    features: ['Everything in Free', 'Access to Opus & Haiku', '5× more usage', 'Claude Code in terminal', 'Projects and connectors'],
    cta: "Try Claude"
  }), /*#__PURE__*/React.createElement(Tier, {
    name: "Team",
    price: "$30",
    sub: "per seat / month",
    features: ['Everything in Pro', 'Central billing & admin', 'Shared projects', 'Higher usage limits', 'Priority support'],
    cta: "Contact sales"
  }))));
}
Object.assign(window, {
  Pricing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Pricing.jsx", error: String((e && e.message) || e) }); }

__ds_ns.SpikeMark = __ds_scope.SpikeMark;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tok = __ds_scope.Tok;

__ds_ns.CodeWindow = __ds_scope.CodeWindow;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.CategoryTab = __ds_scope.CategoryTab;

})();
