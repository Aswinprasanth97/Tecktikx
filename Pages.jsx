// Services + Company pages. Exposes Services and Company to window.
const { Button, Card, Badge, SpikeMark } = window.ClaudeDesignSystem_8d7c53;

const pgWrap = { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 32px' };

function PageHero({ badge, title, sub }) {
  return (
    <section style={{ ...pgWrap, paddingTop: 80, paddingBottom: 48, textAlign: 'center' }}>
      {badge && (
        <div data-hero-badge style={{ marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
          <Badge variant="coral">{badge}</Badge>
        </div>
      )}
      <h1
        data-hero-h1
        data-split-headline
        style={{
          fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
          fontSize: 56, lineHeight: 1.05, letterSpacing: '-1.5px',
          color: 'var(--color-ink)', margin: '0 0 18px',
        }}
      >
        {title}
      </h1>
      {sub && (
        <p data-hero-sub style={{
          fontSize: 19, lineHeight: 1.55, color: 'var(--color-body-strong)',
          margin: '0 auto', maxWidth: 580,
        }}>
          {sub}
        </p>
      )}
    </section>
  );
}

function CtaBand({ onCta }) {
  return (
    <section style={{ background: 'var(--color-canvas)', padding: '96px 32px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <Card
          variant="coral"
          pad="band"
          radius="lg"
          data-cta-band
          style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}
        >
          <span data-cta-spike-left style={{ position: 'absolute', top: 24, left: 24, opacity: 0.3, display: 'inline-flex' }}>
            <SpikeMark size={48} color="var(--color-canvas)" />
          </span>
          <span data-cta-spike-right style={{ position: 'absolute', bottom: 24, right: 24, opacity: 0.3, display: 'inline-flex' }}>
            <SpikeMark size={48} color="var(--color-canvas)" />
          </span>
          <h2
            data-split-headline
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
              fontSize: 40, letterSpacing: '-0.8px', color: 'var(--color-on-primary)', margin: '0 0 12px',
            }}
          >
            Ready to solve your next challenge?
          </h2>
          <p style={{ fontSize: 17, color: 'var(--color-on-primary)', opacity: 0.9, margin: '0 0 28px' }}>
            Wherever you are, we're ready to help.
          </p>
          <Button variant="on-coral" size="lg" onClick={onCta}>Get in touch</Button>
        </Card>
      </div>
    </section>
  );
}

function Services({ onCta }) {
  const services = [
    {
      num: '01',
      title: 'Software integration',
      body: 'We connect the systems your business already runs on — CRMs, ERPs, finance tools, and bespoke software — so data flows cleanly instead of being re-keyed by hand.',
      points: ['System-to-system API integrations', 'Data migration & synchronisation', 'Eliminating manual hand-offs'],
    },
    {
      num: '02',
      title: 'Remote technical support',
      body: 'Prompt, expert help from any location. We diagnose and resolve issues remotely and keep operations running without needing anyone on-site — saving time and cost.',
      points: ['Fast remote diagnosis & resolution', 'Ongoing maintenance & monitoring', 'No on-site dependency'],
    },
    {
      num: '03',
      title: 'Workflow automation',
      body: 'We streamline operations by automating repetitive, manual processes and connecting the tools your team relies on — cutting errors and freeing people for higher-value work.',
      points: ['Automating repetitive tasks', 'Connecting existing tools', 'Reducing errors & turnaround time'],
    },
  ];

  return (
    <div style={{ background: 'var(--color-canvas)' }}>
      <PageHero
        badge="What we do"
        title="Our services"
        sub="Technical depth across integration, support, and connectivity — delivered remotely, end to end."
      />

      {/* Service cards */}
      <section id="services" data-band style={{ background: 'var(--color-surface-soft)', padding: '88px 0' }}>
        <div style={{ ...pgWrap }}>
          <div data-services-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {services.map(({ num, title, body, points }) => (
              <Card key={title} variant="feature" data-service-card style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <span data-service-icon style={{ display: 'inline-flex' }}>
                    <SpikeMark size={22} color="var(--color-primary)" />
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
                    fontSize: 22, color: 'var(--color-hairline)', letterSpacing: '-0.5px',
                  }}>{num}</span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 19,
                  color: 'var(--color-ink)', margin: '0 0 10px',
                }}>{title}</h3>
                <p style={{ margin: '0 0 18px', fontSize: 15, lineHeight: 1.55, color: 'var(--color-body)' }}>{body}</p>
                <ul style={{ listStyle: 'none', margin: '0 0 4px', padding: 0, display: 'flex', flexDirection: 'column', gap: 9, flexGrow: 1 }}>
                  {points.map((p) => (
                    <li key={p} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, lineHeight: 1.45, color: 'var(--color-body)' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)"
                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBand onCta={onCta} />
    </div>
  );
}

function Company({ onCta }) {
  const stats = [
    { heading: 'Remote-first', sub: 'Delivered from anywhere, no on-site dependency' },
    { heading: 'End-to-end', sub: 'From scoping to support, one partner' },
    { heading: 'Sector depth', sub: 'Experience across the systems you depend on' },
  ];
  const values = [
    { heading: 'Innovation', sub: 'We push what is technically possible, choosing the approach that solves the real problem.' },
    { heading: 'Collaboration', sub: 'We work closely with the people we serve, not at arm’s length from them.' },
    { heading: 'Customer-first', sub: 'We put the customer’s outcome above the process, every time.' },
  ];

  return (
    <div style={{ background: 'var(--color-canvas)' }}>
      <PageHero
        badge="Who we are"
        title="About Tecktikx"
        sub="A software consultancy helping businesses integrate systems, get remote technical support, and automate the workflows that keep them moving."
      />

      {/* About — two column: story + at-a-glance stats */}
      <section data-band style={{ background: 'var(--color-surface-soft)', padding: '88px 0' }}>
        <div style={{ ...pgWrap }}>
          <div data-hero-grid style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56, alignItems: 'center' }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '1.5px',
                color: 'var(--color-muted)', textTransform: 'uppercase', marginBottom: 16, fontWeight: 500,
              }}>Our story</div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
                fontSize: 34, letterSpacing: '-0.6px', color: 'var(--color-ink)', margin: '0 0 18px', lineHeight: 1.15,
              }}>
                One partner who understands your systems — and stays with you
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--color-body)', margin: '0 0 14px' }}>
                Tecktikx partners with businesses to put their software to work — connecting systems,
                automating workflows, and eliminating the gaps that slow teams down.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--color-body)', margin: 0 }}>
                We deliver remotely and end to end, from the first scoping conversation through to
                ongoing support — wherever you are, without the wait.
              </p>
            </div>
            <div data-mission-grid style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 14 }}>
              {stats.map(({ heading, sub }) => (
                <Card key={heading} variant="outline" data-mission-tile style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
                    fontSize: 22, letterSpacing: '-0.4px', color: 'var(--color-ink)',
                  }}>{heading}</div>
                  <p style={{ margin: 0, fontSize: 14, color: 'var(--color-muted)', lineHeight: 1.5 }}>{sub}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy values */}
      <section id="philosophy" data-band style={{ background: 'var(--color-canvas)', padding: '88px 0' }}>
        <div style={{ ...pgWrap }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
              fontSize: 40, letterSpacing: '-0.8px', color: 'var(--color-ink)', margin: '0 0 12px',
            }}>Our philosophy</h2>
            <p style={{ fontSize: 17, color: 'var(--color-muted)', margin: '0 auto', maxWidth: 520 }}>
              Three commitments behind everything we build.
            </p>
          </div>
          <div data-services-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {values.map(({ heading, sub }) => (
              <Card key={heading} variant="feature" data-service-card style={{ display: 'flex', flexDirection: 'column' }}>
                <span data-service-icon style={{ display: 'inline-flex', marginBottom: 16 }}>
                  <SpikeMark size={20} color="var(--color-primary)" />
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 18,
                  color: 'var(--color-ink)', margin: '0 0 8px',
                }}>{heading}</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: 'var(--color-body)' }}>{sub}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission — highlighted statement */}
      <section id="mission" data-band style={{ background: 'var(--color-surface-soft)', padding: '88px 0' }}>
        <div style={{ ...pgWrap }}>
          <Card variant="outline" style={{ textAlign: 'center', padding: 'var(--space-band)', maxWidth: 820, margin: '0 auto' }}>
            <div style={{
              fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '1.5px',
              color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600,
            }}>Our mission</div>
            <p
              data-philosophy-quote
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
                fontSize: 26, lineHeight: 1.4, letterSpacing: '-0.4px', color: 'var(--color-ink)', margin: 0,
              }}
            >
              To be the go-to engineering partner for businesses navigating the digital era — delivering
              transformative integration solutions that unlock potential and fuel long-term success.
            </p>
          </Card>
        </div>
      </section>

      <CtaBand onCta={onCta} />
    </div>
  );
}

Object.assign(window, { Services, Company });
