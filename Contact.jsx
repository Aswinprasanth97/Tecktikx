// Contact — Tecktikx contact page
const { Button, Card, Input } = window.ClaudeDesignSystem_8d7c53;

const wrap = { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 32px' };

// Web3Forms access key — get a free one at https://web3forms.com (verify your email).
// Submissions are emailed to the address you registered with that key.
const WEB3FORMS_ACCESS_KEY = 'e08dd0ff-1d70-4cd0-a077-04150981e1bb';

// Google Sheets endpoint — deploy the Apps Script (see setup notes) as a Web App
// and paste its /exec URL here. Leave as-is to disable the Sheets logging.
const GOOGLE_SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzTWVFS7X-oLpzN_KhgFWBxxwfReYizhz445xBjDO4pvVMT9bx0YOfBHwocsWAL5iWMMA/exec';

function Contact() {
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const formData = new FormData(e.target);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'New contact from Tecktikx website');
    formData.append('from_name', 'Tecktikx Website');

    // Fire-and-forget log to Google Sheets. no-cors is required because Apps
    // Script doesn't return CORS headers — we can't read the response, so we
    // rely on the Web3Forms call below for the success/error UX.
    if (GOOGLE_SHEET_ENDPOINT && !GOOGLE_SHEET_ENDPOINT.includes('PASTE')) {
      fetch(GOOGLE_SHEET_ENDPOINT, { method: 'POST', mode: 'no-cors', body: formData })
        .catch(() => {});
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ background: 'var(--color-canvas)', minHeight: '80vh' }}>

      {/* Hero */}
      <section style={{ ...wrap, paddingTop: 80, paddingBottom: 56, textAlign: 'center' }}>
        <h1
          data-hero-h1
          data-split-headline
          style={{
            fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
            fontSize: 48, lineHeight: 1.1, letterSpacing: '-1.2px',
            color: 'var(--color-ink)', margin: '0 0 16px',
          }}
        >
          Get in touch
        </h1>
        <p
          data-hero-sub
          style={{
            fontSize: 18, lineHeight: 1.55, color: 'var(--color-body)',
            margin: '0 auto', maxWidth: 460,
          }}
        >
          Tell us about the problem. We'll get back to you promptly.
        </p>
      </section>

      {/* Form */}
      <section style={{ ...wrap, paddingBottom: 96 }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          {sent ? (
            <Card variant="outline" style={{ textAlign: 'center', padding: 'var(--space-band)' }}>
              <div style={{ marginBottom: 16 }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'var(--color-surface-card)',
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                    stroke="var(--color-success)" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
                fontSize: 28, letterSpacing: '-0.4px', color: 'var(--color-ink)', margin: '0 0 10px',
              }}>
                Message sent
              </h2>
              <p style={{ fontSize: 16, color: 'var(--color-muted)', margin: 0, lineHeight: 1.55 }}>
                We typically respond within one business day.
              </p>
            </Card>
          ) : (
            <Card variant="outline" style={{ padding: 40 }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                <div data-form-field>
                  <Input label="Full name" name="name" placeholder="Your name" required />
                </div>

                <div data-form-field>
                  <Input label="Work email" name="email" placeholder="you@company.com" type="email" required />
                </div>

                <div data-form-field>
                  <Input label="Company" name="company" placeholder="Company name" />
                </div>

                <div data-form-field>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
                    color: 'var(--color-body-strong)', marginBottom: 6,
                  }}>
                    How can we help?
                  </div>
                  <textarea
                    name="message"
                    required
                    placeholder="Describe the integration, support need, or challenge you're facing"
                    rows={5}
                    style={{
                      width: '100%', boxSizing: 'border-box',
                      fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55,
                      color: 'var(--color-ink)', background: 'var(--color-canvas)',
                      border: '1px solid var(--color-hairline)', borderRadius: 'var(--radius-md)',
                      padding: '10px 14px', resize: 'vertical',
                      outline: 'none', transition: 'border-color 120ms ease',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--color-hairline)'}
                  />
                </div>

                {error && (
                  <p role="alert" style={{
                    fontSize: 14, color: 'var(--color-error)', margin: 0, lineHeight: 1.5,
                  }}>
                    {error}
                  </p>
                )}

                <div data-form-field>
                  <button
                    data-submit-btn
                    type="submit"
                    disabled={submitting}
                    style={{
                      width: '100%', height: 48,
                      fontFamily: 'var(--font-body)', fontWeight: 600,
                      fontSize: 15, cursor: submitting ? 'default' : 'pointer',
                      opacity: submitting ? 0.7 : 1,
                      background: 'var(--color-primary)', color: 'var(--color-on-primary)',
                      border: '1px solid transparent', borderRadius: 'var(--radius-md)',
                      transition: 'background-color 120ms ease, opacity 120ms ease',
                    }}
                    onMouseEnter={e => { if (!submitting) e.currentTarget.style.background = 'var(--color-primary-active)'; }}
                    onMouseLeave={e => { if (!submitting) e.currentTarget.style.background = 'var(--color-primary)'; }}
                  >
                    {submitting ? 'Sending…' : 'Send message'}
                  </button>
                </div>

              </form>

              <p style={{ fontSize: 14, color: 'var(--color-muted)', textAlign: 'center', margin: '16px 0 0' }}>
                We typically respond within one business day.
              </p>
            </Card>
          )}
        </div>
      </section>

    </div>
  );
}

Object.assign(window, { Contact });
