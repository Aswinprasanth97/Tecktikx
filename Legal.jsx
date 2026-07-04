// Legal — Privacy Policy and Terms of Service pages. Exposes Privacy, Terms.
const wrap = { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 32px' };

// Shared layout: hero title + a readable prose column of sections.
function LegalPage({ title, updated, intro, sections }) {
  return (
    <div style={{ background: 'var(--color-canvas)', minHeight: '80vh' }}>

      {/* Hero */}
      <section style={{ ...wrap, paddingTop: 72, paddingBottom: 32, textAlign: 'center' }}>
        <h1
          data-hero-h1
          data-split-headline
          style={{
            fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
            fontSize: 44, lineHeight: 1.1, letterSpacing: '-1px',
            color: 'var(--color-ink)', margin: '0 0 12px',
          }}
        >
          {title}
        </h1>
        <p data-hero-sub style={{ fontSize: 14, color: 'var(--color-muted)', margin: 0 }}>
          Last updated: {updated}
        </p>
      </section>

      {/* Body */}
      <section style={{ ...wrap, paddingBottom: 96 }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {intro && (
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--color-body)', margin: '0 0 32px' }}>
              {intro}
            </p>
          )}

          {sections.map(({ heading, paras = [], list }, i) => (
            <div key={i} data-form-field style={{ marginBottom: 32 }}>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 'var(--type-display-weight)',
                fontSize: 22, letterSpacing: '-0.3px', color: 'var(--color-ink)', margin: '0 0 12px',
              }}>
                {i + 1}. {heading}
              </h2>
              {paras.map((p, j) => (
                <p key={j} style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--color-body)', margin: '0 0 12px' }}>
                  {p}
                </p>
              ))}
              {list && (
                <ul style={{ margin: '4px 0 0', paddingLeft: 22, color: 'var(--color-body)' }}>
                  {list.map((li, k) => (
                    <li key={k} style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 6 }}>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <p style={{
            fontSize: 13, color: 'var(--color-muted)', lineHeight: 1.6,
            margin: '8px 0 0', paddingTop: 20, borderTop: '1px solid var(--color-hairline)',
          }}>
            This document is provided for general information and does not constitute legal advice.
            Please confirm it reflects your actual practices before relying on it.
          </p>
        </div>
      </section>
    </div>
  );
}

const CONTACT_EMAIL = 'hello@tecktikx.co.uk'; // TODO: replace with your real contact address
const LAST_UPDATED = 'July 2026';

function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated={LAST_UPDATED}
      intro={`This Privacy Policy explains how Tecktikx ("we", "us", "our") collects, uses, and protects your personal information when you visit tecktikx.co.uk or contact us. We are committed to handling your data responsibly and in line with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.`}
      sections={[
        {
          heading: 'Information we collect',
          paras: ['When you use our contact form, we collect the information you choose to provide, which may include:'],
          list: [
            'Your name',
            'Your work email address',
            'Your company name',
            'The message and any details you include about your enquiry',
          ],
        },
        {
          heading: 'How we use your information',
          paras: ['We use the information you provide to:'],
          list: [
            'Respond to your enquiry and communicate with you',
            'Provide, and where relevant scope, our services',
            'Keep a record of your enquiry for follow-up',
            'Improve our website and the service we offer',
          ],
        },
        {
          heading: 'Legal basis for processing',
          paras: [
            'Under the UK GDPR, we rely on your consent (given when you submit the contact form) and our legitimate interest in responding to enquiries and running our business. Where we enter into an agreement with you, we process data to perform that contract.',
          ],
        },
        {
          heading: 'Third-party services',
          paras: [
            'We use trusted third parties to operate our site and contact form. Contact form submissions are processed by Web3Forms (for email delivery) and stored in Google Sheets via Google Apps Script. Our website is hosted on GitHub Pages. These providers process data on our behalf, and some may process it outside the UK; where they do, appropriate safeguards apply.',
          ],
        },
        {
          heading: 'Data retention',
          paras: [
            'We keep enquiry information only for as long as necessary to respond to you and for our legitimate business records, after which it is deleted or anonymised. You can ask us to delete your data at any time.',
          ],
        },
        {
          heading: 'Data security',
          paras: [
            'We take reasonable technical and organisational measures to protect your information. However, no method of transmission or storage over the internet is completely secure, and we cannot guarantee absolute security.',
          ],
        },
        {
          heading: 'Your rights',
          paras: ['Under UK data protection law you have the right to:'],
          list: [
            'Access the personal data we hold about you',
            'Ask us to correct inaccurate data',
            'Ask us to erase your data',
            'Restrict or object to our processing',
            'Request portability of your data',
            'Withdraw consent at any time',
          ],
        },
        {
          heading: 'Cookies and analytics',
          paras: [
            'Our website is a static site and does not set tracking or advertising cookies. Third-party scripts we load (such as our animation and component libraries from public CDNs) may set technical cookies necessary for delivery. We do not use these to profile you.',
          ],
        },
        {
          heading: 'Changes to this policy',
          paras: [
            'We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last updated" date.',
          ],
        },
        {
          heading: 'Contact us',
          paras: [
            `If you have any questions about this policy or wish to exercise your rights, contact us at ${CONTACT_EMAIL}. You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at ico.org.uk.`,
          ],
        },
      ]}
    />
  );
}

function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      updated={LAST_UPDATED}
      intro={`These Terms of Service ("Terms") govern your use of the Tecktikx website at tecktikx.co.uk. By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use the site.`}
      sections={[
        {
          heading: 'About us',
          paras: [
            'Tecktikx is a software consultancy providing software integration, remote technical support, and workflow automation services. These Terms cover your use of our website; any services we provide to you will be governed by a separate written agreement.',
          ],
        },
        {
          heading: 'Use of the website',
          paras: ['You agree to use the website lawfully and not to:'],
          list: [
            'Use it in any way that breaches applicable law or regulation',
            'Attempt to gain unauthorised access to the site or its systems',
            'Introduce malicious code, or submit false or abusive content through our forms',
            'Interfere with the proper operation of the site',
          ],
        },
        {
          heading: 'Enquiries and contact form',
          paras: [
            'Submitting an enquiry through our contact form does not create a contract or oblige either party to proceed. Any engagement for services will be confirmed separately in writing.',
          ],
        },
        {
          heading: 'Intellectual property',
          paras: [
            'All content on this website — including text, graphics, logos, and design — is owned by or licensed to Tecktikx and is protected by intellectual property laws. You may not copy, reproduce, or reuse it without our prior written permission.',
          ],
        },
        {
          heading: 'Third-party links',
          paras: [
            'Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of those sites and provide such links for convenience only.',
          ],
        },
        {
          heading: 'Disclaimer',
          paras: [
            'The website and its content are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components.',
          ],
        },
        {
          heading: 'Limitation of liability',
          paras: [
            'To the fullest extent permitted by law, Tecktikx shall not be liable for any indirect, incidental, or consequential loss arising from your use of, or inability to use, this website. Nothing in these Terms excludes liability that cannot be excluded under applicable law.',
          ],
        },
        {
          heading: 'Governing law',
          paras: [
            'These Terms are governed by and construed in accordance with the laws of England and Wales, and any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.',
          ],
        },
        {
          heading: 'Changes to these Terms',
          paras: [
            'We may revise these Terms from time to time. The version in force is the one published on this page, with the current "Last updated" date.',
          ],
        },
        {
          heading: 'Contact us',
          paras: [
            `If you have any questions about these Terms, contact us at ${CONTACT_EMAIL}.`,
          ],
        },
      ]}
    />
  );
}

Object.assign(window, { Privacy, Terms });
