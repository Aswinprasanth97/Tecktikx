// Home — Tecktikx marketing homepage
const { Button, Card, Badge, SpikeMark } = window.ClaudeDesignSystem_8d7c53;

const wrap = { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 32px' };

function HeroIllustration() {
  return (
    <div
      data-hero-illustration
      style={{
        background: 'var(--color-surface-card)', borderRadius: 'var(--radius-xl)',
        height: 380, overflow: 'hidden',
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
        alt="Tecktikx team collaborating on a software integration"
        loading="lazy"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  );
}

function ServicesGrid() {
  const services = [
    {
      title: 'Software integration',
      body: 'We help businesses put their software to work — connecting systems, automating workflows, and eliminating the gaps that slow teams down.',
    },
    {
      title: 'Remote technical support',
      body: 'Prompt, expert help from any location. We resolve issues and keep your operations running without needing anyone on-site — saving you time and cost.',
    },
    {
      title: 'Workflow automation',
      body: 'We streamline operations by automating manual processes and connecting the tools your team already relies on — cutting errors and freeing up time.',
    },
  ];

  return (
    <div data-services-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
      {services.map(({ title, body }) => (
        <Card
          key={title}
          variant="feature"
          data-service-card
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <span data-service-icon style={{ display: 'inline-flex', marginBottom: 16 }}>
            <SpikeMark size={20} color="var(--color-primary)" />
          </span>
          <h3 style={{
            fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 18,
            color: 'var(--color-ink)', margin: '0 0 10px',
          }}>{title}</h3>
          <p style={{ margin: '0 0 20px', fontSize: 15, lineHeight: 1.55, color: 'var(--color-body)', flexGrow: 1 }}>{body}</p>
          <a href="#" style={{ color: 'var(--color-primary)', fontWeight: 500, fontSize: 14, textDecoration: 'none', transition: 'color 120ms ease' }}>
            Learn more →
          </a>
        </Card>
      ))}
    </div>
  );
}

function MissionGrid() {
  const tiles = [
    { heading: 'Any location',     sub: 'Remote-first delivery, no on-site dependency' },
    { heading: 'End-to-end',       sub: 'From scoping to support, one partner' },
    { heading: 'Sector expertise', sub: 'Deep experience across the systems your business depends on' },
  ];

  return (
    <div data-mission-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 40 }}>
      {tiles.map(({ heading, sub }) => (
        <Card
          key={heading}
          variant="outline"
          data-mission-tile
          style={{ textAlign: 'center' }}
        >
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
            fontSize: 28, letterSpacing: '-0.5px', color: 'var(--color-ink)', marginBottom: 10,
          }}>{heading}</div>
          <p style={{ margin: 0, fontSize: 14, color: 'var(--color-muted)', lineHeight: 1.55 }}>{sub}</p>
        </Card>
      ))}
    </div>
  );
}

function Home({ onCta }) {
  return (
    <div>
      {/* SECTION 1 — HERO (canvas) */}
      <section style={{ ...wrap, paddingTop: 80, paddingBottom: 96 }}>
        <div data-hero-grid style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div data-hero-badge style={{ marginBottom: 20 }}>
              <Badge variant="coral">Software consultancy</Badge>
            </div>
            <h1
              data-hero-h1
              data-split-headline
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
                fontSize: 60, lineHeight: 1.05, letterSpacing: '-1.5px',
                color: 'var(--color-ink)', margin: 0,
              }}
            >
              Engineering solutions that move your business forward
            </h1>
            <p
              data-hero-sub
              style={{
                fontSize: 18, lineHeight: 1.55, color: 'var(--color-body-strong)',
                margin: '20px 0 28px', maxWidth: 460,
              }}
            >
              Tecktikx partners with businesses to integrate software, deliver remote technical support, and automate the workflows that keep your operations moving — from anywhere, without the wait.
            </p>
            <div data-hero-cta style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" onClick={onCta}>Get in touch</Button>
              <Button variant="secondary" size="lg">See our services</Button>
            </div>
          </div>
          <div style={{ height: 380 }}>
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* SECTION 2 — SERVICES (surface-soft) */}
      <section id="services" data-band style={{ background: 'var(--color-surface-soft)', padding: '96px 0' }}>
        <div style={wrap}>
          <h2
            data-split-headline
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
              fontSize: 40, letterSpacing: '-0.8px', color: 'var(--color-ink)',
              margin: '0 0 12px',
            }}
          >
            Our services
          </h2>
          <p style={{ fontSize: 17, color: 'var(--color-muted)', margin: '0 0 40px', maxWidth: 520 }}>
            Technical depth across integration, support, and connectivity.
          </p>
          <ServicesGrid />
        </div>
      </section>

      {/* SECTION 3 — PHILOSOPHY (canvas) */}
      <section id="philosophy" data-band style={{ background: 'var(--color-canvas)', padding: '96px 32px' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <div data-philosophy-grid style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: 12,
                letterSpacing: '1.5px', color: 'var(--color-muted)',
                textTransform: 'uppercase', marginBottom: 16, fontWeight: 500,
              }}>
                Our philosophy
              </div>
              <h2
                data-split-headline
                style={{
                  fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
                  fontSize: 40, letterSpacing: '-0.8px', color: 'var(--color-ink)',
                  margin: '0 0 20px',
                }}
              >
                Innovation, collaboration, and a customer-first approach
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--color-body)', margin: '0 0 24px' }}>
                At Tecktikx, everything we build is grounded in three commitments: push what's technically possible, work closely with the people we serve, and always put the customer's outcome above the process.
              </p>
              <hr
                data-philosophy-line
                style={{
                  border: 'none', borderTop: '1px solid var(--color-hairline)',
                  margin: '24px 0', width: '100%',
                }}
              />
            </div>
            <div>
              <Card variant="outline" style={{ padding: 'var(--space-xl)' }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 80, lineHeight: 1,
                  color: 'var(--color-surface-card)', margin: '-8px 0 8px -4px',
                  userSelect: 'none',
                }}>
                  "
                </div>
                <p
                  data-philosophy-quote
                  style={{
                    fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
                    fontSize: 22, lineHeight: 1.45, letterSpacing: '-0.3px',
                    color: 'var(--color-ink)', margin: '0 0 20px', fontStyle: 'italic',
                  }}
                >
                  We believe the best engineering solution is the one that actually gets used.
                </p>
                <div style={{ fontSize: 14, color: 'var(--color-muted)' }}>Tecktikx founding principle</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — MISSION (surface-soft) */}
      <section id="mission" data-band style={{ background: 'var(--color-surface-soft)', padding: '96px 0' }}>
        <div style={wrap}>
          <h2
            data-split-headline
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
              fontSize: 40, letterSpacing: '-0.8px', color: 'var(--color-ink)',
              margin: '0 0 16px',
            }}
          >
            Our mission
          </h2>
          <p style={{ fontSize: 17, color: 'var(--color-muted)', margin: 0, maxWidth: 540, lineHeight: 1.6 }}>
            To be the go-to engineering partner for businesses navigating the digital era — delivering transformative integration solutions that unlock potential and fuel long-term success.
          </p>
          <MissionGrid />
        </div>
      </section>

      {/* SECTION 5 — CTA BAND (canvas) */}
      <section style={{ background: 'var(--color-canvas)', padding: '96px 32px' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <Card
            variant="coral"
            pad="band"
            radius="lg"
            data-cta-band
            style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}
          >
            <span
              data-cta-spike-left
              style={{ position: 'absolute', top: 24, left: 24, opacity: 0.3, display: 'inline-flex' }}
            >
              <SpikeMark size={48} color="var(--color-canvas)" />
            </span>
            <span
              data-cta-spike-right
              style={{ position: 'absolute', bottom: 24, right: 24, opacity: 0.3, display: 'inline-flex' }}
            >
              <SpikeMark size={48} color="var(--color-canvas)" />
            </span>

            <h2
              data-split-headline
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
                fontSize: 40, letterSpacing: '-0.8px', color: 'var(--color-on-primary)',
                margin: '0 0 12px',
              }}
            >
              Ready to solve your next integration challenge?
            </h2>
            <p style={{ fontSize: 17, color: 'var(--color-on-primary)', opacity: 0.9, margin: '0 0 28px' }}>
              Wherever you are, we're ready to help.
            </p>
            <Button variant="on-coral" size="lg" onClick={onCta}>Get in touch</Button>
          </Card>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Home });
