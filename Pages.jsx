// Services + Company pages. Exposes Services and Company to window.
const { Button, Card, SpikeMark } = window.ClaudeDesignSystem_8d7c53;

const pgWrap = { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 32px' };

function PageHero({ eyebrow, title, sub }) {
  return (
    <section style={{ ...pgWrap, paddingTop: 72, paddingBottom: 40, textAlign: 'center' }}>
      {eyebrow && (
        <div style={{
          fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '1.5px',
          color: 'var(--color-muted)', textTransform: 'uppercase', marginBottom: 14, fontWeight: 500,
        }}>
          {eyebrow}
        </div>
      )}
      <h1
        data-hero-h1
        data-split-headline
        style={{
          fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
          fontSize: 48, lineHeight: 1.1, letterSpacing: '-1.2px',
          color: 'var(--color-ink)', margin: '0 0 16px',
        }}
      >
        {title}
      </h1>
      {sub && (
        <p data-hero-sub style={{
          fontSize: 18, lineHeight: 1.55, color: 'var(--color-body)',
          margin: '0 auto', maxWidth: 560,
        }}>
          {sub}
        </p>
      )}
    </section>
  );
}

function CtaRow({ onCta }) {
  return (
    <div data-form-field style={{ textAlign: 'center', marginTop: 8 }}>
      <Button variant="primary" size="lg" onClick={onCta}>Get in touch</Button>
    </div>
  );
}

function Services({ onCta }) {
  const services = [
    {
      title: 'Software integration',
      body: 'We connect the systems your business already runs on — CRMs, ERPs, finance tools, and bespoke software — so data flows cleanly between them instead of being re-keyed by hand.',
      points: ['System-to-system API integrations', 'Data migration and synchronisation', 'Eliminating manual hand-offs between tools'],
    },
    {
      title: 'Remote technical support',
      body: 'Prompt, expert help from any location. We diagnose and resolve issues remotely and keep your operations running without needing anyone on-site — saving you time and cost.',
      points: ['Fast remote diagnosis and resolution', 'Ongoing maintenance and monitoring', 'No on-site dependency, wherever you are'],
    },
    {
      title: 'Workflow automation',
      body: 'We streamline operations by automating repetitive, manual processes and connecting the tools your team relies on — cutting errors and freeing people up for higher-value work.',
      points: ['Automating manual, repetitive tasks', 'Connecting existing tools into one flow', 'Reducing errors and turnaround time'],
    },
  ];

  return (
    <div style={{ background: 'var(--color-canvas)', minHeight: '80vh' }}>
      <PageHero
        eyebrow="What we do"
        title="Our services"
        sub="Technical depth across integration, support, and connectivity — delivered remotely, end to end."
      />

      <section style={{ ...pgWrap, paddingBottom: 72 }}>
        <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
          {services.map(({ title, body, points }) => (
            <Card key={title} variant="outline" data-service-card style={{ padding: 32 }}>
              <span data-service-icon style={{ display: 'inline-flex', marginBottom: 16 }}>
                <SpikeMark size={22} color="var(--color-primary)" />
              </span>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
                fontSize: 24, letterSpacing: '-0.4px', color: 'var(--color-ink)', margin: '0 0 10px',
              }}>{title}</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--color-body)', margin: '0 0 16px' }}>{body}</p>
              <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--color-body)' }}>
                {points.map((p) => (
                  <li key={p} style={{ fontSize: 15, lineHeight: 1.6, marginBottom: 6 }}>{p}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section style={{ ...pgWrap, paddingBottom: 96 }}>
        <CtaRow onCta={onCta} />
      </section>
    </div>
  );
}

function Company({ onCta }) {
  const values = [
    { heading: 'Innovation', sub: 'We push what is technically possible, choosing the approach that solves the real problem.' },
    { heading: 'Collaboration', sub: 'We work closely with the people we serve, not at arm’s length from them.' },
    { heading: 'Customer-first', sub: 'We put the customer’s outcome above the process, every time.' },
  ];

  return (
    <div style={{ background: 'var(--color-canvas)', minHeight: '80vh' }}>
      <PageHero
        eyebrow="Who we are"
        title="About Tecktikx"
        sub="A software consultancy helping businesses integrate systems, get remote technical support, and automate the workflows that keep them moving."
      />

      {/* About */}
      <section style={{ ...pgWrap, paddingBottom: 8 }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--color-body)', margin: '0 0 16px' }}>
            Tecktikx partners with businesses to put their software to work — connecting systems,
            automating workflows, and eliminating the gaps that slow teams down. We deliver
            remotely and end to end, from first scoping conversation through to ongoing support.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--color-body)', margin: 0 }}>
            The result is a single partner who understands your systems and stays with you —
            wherever you are, without the wait.
          </p>
        </div>
      </section>

      {/* Philosophy / values */}
      <section style={{ ...pgWrap, paddingTop: 48, paddingBottom: 8 }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
            fontSize: 28, letterSpacing: '-0.5px', color: 'var(--color-ink)', margin: '0 0 20px', textAlign: 'center',
          }}>
            Our philosophy
          </h2>
          <div data-mission-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {values.map(({ heading, sub }) => (
              <Card key={heading} variant="outline" data-mission-tile style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
                  fontSize: 22, letterSpacing: '-0.3px', color: 'var(--color-ink)', marginBottom: 10,
                }}>{heading}</div>
                <p style={{ margin: 0, fontSize: 14, color: 'var(--color-muted)', lineHeight: 1.55 }}>{sub}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ ...pgWrap, paddingTop: 48, paddingBottom: 56 }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
            fontSize: 28, letterSpacing: '-0.5px', color: 'var(--color-ink)', margin: '0 0 16px',
          }}>
            Our mission
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--color-body)', margin: 0 }}>
            To be the go-to engineering partner for businesses navigating the digital era — delivering
            transformative integration solutions that unlock potential and fuel long-term success.
          </p>
        </div>
      </section>

      <section style={{ ...pgWrap, paddingBottom: 96 }}>
        <CtaRow onCta={onCta} />
      </section>
    </div>
  );
}

Object.assign(window, { Services, Company });
