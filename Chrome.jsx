// TopNav + Footer — Tecktikx chrome. Exposes TopNav and Footer to window.
const { SpikeMark, Wordmark, Button } = window.ClaudeDesignSystem_8d7c53;

function TopNav({ current, onNav }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const items = [
    { label: 'Services',   page: 'home',    anchor: '#services'   },
    { label: 'Philosophy', page: 'home',    anchor: '#philosophy' },
    { label: 'Mission',    page: 'home',    anchor: '#mission'    },
    { label: 'Contact',    page: 'contact'                        },
  ];

  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (typeof gsap !== 'undefined' && !reduce) {
      gsap.from('header', { yPercent: -100, opacity: 0, duration: 0.6, ease: 'tkt.spring' });
    }
  }, []);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20, height: 72,
      background: 'rgba(245,249,252,0.85)', backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--color-hairline)',
      display: 'flex', alignItems: 'center', gap: 32,
      padding: '0 32px',
    }}>
      <a href="#" onClick={(e) => { e.preventDefault(); onNav('home'); }} style={{ textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
        <img src="assets/logo.png" alt="Techtikx" style={{ height: 56, width: 'auto', display: 'block' }} />
      </a>

      {/* Desktop nav */}
      <nav className="tkt-desktop-nav" style={{ display: 'flex', gap: 4, marginLeft: 8, flexGrow: 1 }}>
        {items.map(({ label, page, anchor }) => {
          const isActive = page === 'contact' ? current === 'contact' : false;
          return (
            <a
              key={label}
              href={anchor || '#'}
              onClick={(e) => { e.preventDefault(); onNav(page, anchor); }}
              className={`tkt-nav-link${isActive ? ' active' : ''}`}
              data-cursor-expand
              style={{
                fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
                color: isActive ? 'var(--color-ink)' : 'var(--color-muted)',
                padding: '8px 12px', borderRadius: 8, textDecoration: 'none',
                transition: 'color 120ms ease',
              }}
            >{label}</a>
          );
        })}
      </nav>

      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
        <Button variant="primary" onClick={() => onNav('contact')}>Get in touch</Button>
      </div>

      {/* Hamburger — shown below 640px via CSS */}
      <button
        className="tkt-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', padding: 8, color: 'var(--color-ink)',
        }}
        aria-label="Toggle menu"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          {menuOpen
            ? <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            : <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          }
        </svg>
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: 72, left: 0, right: 0,
          background: 'var(--color-canvas)', borderBottom: '1px solid var(--color-hairline)',
          padding: '12px 24px 20px', display: 'flex', flexDirection: 'column', gap: 4,
          zIndex: 100,
        }}>
          {items.map(({ label, page, anchor }) => (
            <a
              key={label}
              href={anchor || '#'}
              onClick={(e) => { e.preventDefault(); onNav(page, anchor); setMenuOpen(false); }}
              style={{
                fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500,
                color: 'var(--color-ink)', padding: '10px 8px', textDecoration: 'none',
                borderBottom: '1px solid var(--color-hairline)',
              }}
            >{label}</a>
          ))}
          <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
            <Button variant="primary" onClick={() => { onNav('contact'); setMenuOpen(false); }} style={{ flex: 1 }}>Get in touch</Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer({ onNav }) {
  const navMap = {
    'Software integration': { page: 'services' },
    'Remote support':       { page: 'services' },
    'Workflow automation':  { page: 'services' },
    'About':                { page: 'company' },
    'Philosophy':           { page: 'home', anchor: '#philosophy' },
    'Mission':              { page: 'home', anchor: '#mission' },
    'Privacy':              { page: 'privacy' },
    'Terms':                { page: 'terms' },
  };
  const cols = [
    ['Services',  ['Software integration', 'Remote support', 'Workflow automation']],
    ['Company',   ['About', 'Philosophy', 'Mission']],
    ['Legal',     ['Privacy', 'Terms']],
  ];

  return (
    <footer style={{ background: 'var(--color-surface-dark)', color: 'var(--color-on-dark-soft)', padding: '64px 32px 40px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 48 }}>
        <div style={{ flex: '1 1 240px', minWidth: 200 }}>
          <img src="assets/logo-white.png" alt="Techtikx" style={{ height: 48, width: 'auto', display: 'block' }} />
          <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.55, maxWidth: 260, color: 'var(--color-on-dark-soft)' }}>
            Engineering solutions that move your business forward.
          </p>
        </div>
        {cols.map(([title, links]) => (
          <div key={title} data-footer-col style={{ minWidth: 130 }}>
            <div style={{
              fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600,
              color: 'var(--color-on-dark)', marginBottom: 14,
            }}>{title}</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    onClick={(e) => { const t = navMap[l]; if (t) { e.preventDefault(); onNav && onNav(t.page, t.anchor); } }}
                    style={{ color: 'var(--color-on-dark-soft)', fontSize: 14, textDecoration: 'none', transition: 'color 120ms ease' }}
                    onMouseEnter={e => e.target.style.color = 'var(--color-on-dark)'}
                    onMouseLeave={e => e.target.style.color = 'var(--color-on-dark-soft)'}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '40px auto 0',
        paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        fontSize: 13, color: 'var(--color-muted-soft)',
      }}>
        <span>© 2026 Tecktikx</span>
        <span style={{ display: 'flex', gap: 18 }}>
          <a href="#" style={{ color: 'var(--color-muted-soft)', textDecoration: 'none' }}>LinkedIn</a>
          <a href="#" style={{ color: 'var(--color-muted-soft)', textDecoration: 'none' }}>Twitter / X</a>
        </span>
      </div>
    </footer>
  );
}

Object.assign(window, { TopNav, Footer });
