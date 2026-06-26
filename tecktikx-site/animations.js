// Tecktikx GSAP animation module — exposes TecktikxAnims to window
window.TecktikxAnims = (() => {

  // When we programmatically scroll to an anchor, suppress the nav's
  // hide-on-scroll-down so the navbar doesn't vanish mid-jump.
  let suppressNavHide = false;
  let navHideTimer = null;

  /* Reduced-motion: when the OS asks for less motion we SKIP entrance
     reveals entirely (content stays in its natural, visible state) and
     keep only lightweight interactions. We never freeze the timeline —
     freezing leaves `from` tweens stuck at their invisible start state. */
  function reduced() {
    return !!(window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  /* Entrance helper: a no-op under reduced motion so the target keeps
     its natural visible state instead of being hidden by `from`. */
  function appear(targets, vars) {
    if (reduced()) return null;
    return gsap.from(targets, vars);
  }

  /* ─── CURSOR ─────────────────────────────────────────────── */
  function initCursor() {
    const dot  = document.getElementById('tkt-cursor');
    const ring = document.getElementById('tkt-cursor-ring');
    if (!dot || !ring) return;

    let mx = 0, my = 0;
    document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });

    gsap.to(dot,  { opacity: 1, duration: 0.3, delay: 0.5 });
    gsap.to(ring, { opacity: 1, duration: 0.3, delay: 0.6 });

    gsap.ticker.add(() => {
      gsap.set(dot,  { x: mx, y: my });
      gsap.to(ring,  { x: mx, y: my, duration: 0.18, ease: 'power2.out' });
    });

    document.querySelectorAll('a, button, [data-cursor-expand]').forEach(el => {
      el.addEventListener('mouseenter', () =>
        gsap.to(ring, { scale: 2.2, opacity: 0.5, duration: 0.25, ease: 'tkt.out' }));
      el.addEventListener('mouseleave', () =>
        gsap.to(ring, { scale: 1,   opacity: 1,   duration: 0.25, ease: 'tkt.out' }));
    });
  }

  /* ─── NAV SCROLL BEHAVIOUR ──────────────────────────────── */
  function initNav() {
    const header = document.querySelector('header');
    if (!header) return;

    ScrollTrigger.create({
      start: 'top -80px',
      onEnter:     () => gsap.to(header, { boxShadow: '0 2px 20px rgba(27,38,44,0.08)', duration: 0.3 }),
      onLeaveBack: () => gsap.to(header, { boxShadow: 'none', duration: 0.3 }),
    });

    let lastY = 0;
    ScrollTrigger.create({
      onUpdate: (self) => {
        const y = self.scroll();
        // During an anchor jump, keep the bar put and stay in sync.
        if (suppressNavHide) { lastY = y; return; }
        if (y < 120) return;
        if (y > lastY + 5)       gsap.to(header, { yPercent: -100, duration: 0.35, ease: 'power2.in'  });
        else if (y < lastY - 5)  gsap.to(header, { yPercent:    0, duration: 0.4,  ease: 'tkt.spring' });
        lastY = y;
      },
    });
  }

  /* ─── HERO ENTRANCE ─────────────────────────────────────── */
  function initHero() {
    if (reduced()) return; // leave hero content visible, no entrance/spin

    const tl = gsap.timeline({ defaults: { ease: 'tkt.out' } });

    tl.from('[data-hero-badge]',        { opacity: 0, y: 16, duration: 0.5 })
      .from('[data-hero-h1]',           { opacity: 0, y: 40, duration: 0.75, ease: 'tkt.reveal' }, '-=0.2')
      .from('[data-hero-sub]',          { opacity: 0, y: 24, duration: 0.6  }, '-=0.4')
      .from('[data-hero-cta] > *',      { opacity: 0, y: 16, duration: 0.5, stagger: 0.12 }, '-=0.3')
      .from('[data-hero-illustration]', { opacity: 0, x: 40, duration: 0.8, ease: 'tkt.spring' }, '-=0.5');

    tl.from('[data-chat-bubble]', {
      opacity: 0, y: 20, duration: 0.5, stagger: 0.2, ease: 'tkt.spring'
    }, '-=0.3');

    gsap.to('[data-hero-spike]', {
      rotation: 360, duration: 18, repeat: -1, ease: 'none'
    });
  }

  /* ─── WORD-BY-WORD HEADLINE REVEALS ─────────────────────── */
  function initHeadlineSplits() {
    if (reduced()) return; // leave headlines as natural text, fully visible

    document.querySelectorAll('[data-split-headline]').forEach(el => {
      // The hero H1 is animated by the hero timeline — don't double up.
      if (el.hasAttribute('data-hero-h1')) return;

      const words = el.textContent.trim().split(' ');
      el.innerHTML = words.map(w =>
        `<span class="tkt-split-word"><span class="tkt-split-char">${w}</span></span>`
      ).join(' ');

      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.from(el.querySelectorAll('.tkt-split-char'), {
            y: '110%', opacity: 0, duration: 0.7,
            stagger: 0.07, ease: 'tkt.reveal'
          });
        },
      });
    });
  }

  /* ─── SECTION BAND REVEAL (clip-path wipe) ───────────────── */
  function initBandReveals() {
    document.querySelectorAll('[data-band]').forEach(el => {
      appear(el, {
        clipPath: 'inset(4% 0 0 0)',
        opacity: 0,
        duration: 0.9,
        ease: 'tkt.reveal',
        immediateRender: false, // don't set invisible until scroll trigger fires
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      });
    });
  }

  /* ─── SERVICES CARDS — staggered rise ───────────────────── */
  function initServiceCards() {
    const cards = document.querySelectorAll('[data-service-card]');
    if (!cards.length) return;

    appear(cards, {
      opacity: 0, y: 48, duration: 0.7,
      stagger: { amount: 0.45, ease: 'power1.out' },
      ease: 'tkt.spring',
      immediateRender: false,
      scrollTrigger: {
        trigger: cards[0].closest('[data-services-grid]') || cards[0],
        start: 'top 82%',
        once: true,
      },
    });

    // Hover lift stays on regardless of motion preference.
    cards.forEach(card => {
      card.addEventListener('mouseenter', () =>
        gsap.to(card, { y: -8, duration: 0.35, ease: 'tkt.spring' }));
      card.addEventListener('mouseleave', () =>
        gsap.to(card, { y:  0, duration: 0.35, ease: 'tkt.spring' }));
    });
  }

  /* ─── SERVICE ICON MORPH (SpikeMark spin on card hover) ─── */
  function initServiceIcons() {
    document.querySelectorAll('[data-service-icon]').forEach(icon => {
      const card = icon.closest('[data-service-card]');
      if (!card) return;
      card.addEventListener('mouseenter', () =>
        gsap.to(icon, { rotation: 90, scale: 1.15, duration: 0.4, ease: 'tkt.spring' }));
      card.addEventListener('mouseleave', () =>
        gsap.to(icon, { rotation:  0, scale: 1,    duration: 0.4, ease: 'tkt.spring' }));
    });
  }

  /* ─── PHILOSOPHY PULL-QUOTE — horizontal line draw ──────── */
  function initPhilosophy() {
    if (reduced()) return; // divider + quote already visible at rest

    const quote   = document.querySelector('[data-philosophy-quote]');
    const divider = document.querySelector('[data-philosophy-line]');

    if (divider) {
      gsap.from(divider, {
        scaleX: 0, transformOrigin: 'left center',
        duration: 1.1, ease: 'tkt.reveal',
        immediateRender: false,
        scrollTrigger: { trigger: divider, start: 'top 85%', once: true },
      });
    }

    if (quote) {
      const original = quote.textContent;
      ScrollTrigger.create({
        trigger: quote, start: 'top 80%', once: true,
        onEnter: () => {
          quote.textContent = '';
          gsap.to(quote, {
            text: { value: original, delimiter: '' },
            duration: 2.4, ease: 'none',
          });
        },
      });
    }
  }

  /* ─── MISSION STAT TILES — scale + fade stagger ─────────── */
  function initMissionTiles() {
    const tiles = document.querySelectorAll('[data-mission-tile]');
    if (!tiles.length) return;

    appear(tiles, {
      opacity: 0, scale: 0.92, y: 32,
      duration: 0.6, stagger: 0.15, ease: 'tkt.spring',
      immediateRender: false,
      scrollTrigger: {
        trigger: tiles[0].closest('[data-mission-grid]') || tiles[0],
        start: 'top 84%',
        once: true,
      },
    });
  }

  /* ─── HORIZONTAL MARQUEE (optional trust strip) ─────────── */
  function initMarquee() {
    if (reduced()) return;
    const track = document.querySelector('[data-marquee-track]');
    if (!track) return;
    const width = track.scrollWidth / 2;
    gsap.to(track, {
      x: -width, duration: 22, repeat: -1, ease: 'none',
      modifiers: { x: gsap.utils.unitize(x => parseFloat(x) % width) },
    });
  }

  /* ─── CORAL CTA BAND — wipe + floating spikes ───────────── */
  function initCtaBand() {
    if (reduced()) return; // band + spikes already visible at rest

    const band   = document.querySelector('[data-cta-band]');
    const spikeL = document.querySelector('[data-cta-spike-left]');
    const spikeR = document.querySelector('[data-cta-spike-right]');

    if (band) {
      gsap.from(band, {
        clipPath: 'inset(0 100% 0 0)',
        duration: 1.1, ease: 'tkt.reveal',
        immediateRender: false,
        scrollTrigger: { trigger: band, start: 'top 88%', once: true },
      });
    }

    [spikeL, spikeR].forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        y: i % 2 === 0 ? -16 : 16,
        rotation: i % 2 === 0 ? 20 : -20,
        duration: 3.5 + i * 0.4, repeat: -1, yoyo: true, ease: 'sine.inOut',
      });
    });
  }

  /* ─── CONTACT FORM — field focus ring ───────────────────── */
  function initContactForm() {
    document.querySelectorAll('[data-form-field]').forEach((field, i) => {
      if (!reduced()) {
        gsap.from(field, {
          opacity: 0, x: -20, duration: 0.5, delay: i * 0.08, ease: 'tkt.out',
          immediateRender: false,
          scrollTrigger: { trigger: field, start: 'top 90%', once: true },
        });
      }

      const input = field.querySelector('input, textarea');
      if (!input) return;
      input.addEventListener('focus', () =>
        gsap.to(field, { scale: 1.015, duration: 0.25, ease: 'tkt.spring' }));
      input.addEventListener('blur', () =>
        gsap.to(field, { scale: 1,     duration: 0.25, ease: 'tkt.spring' }));
    });

    const btn = document.querySelector('[data-submit-btn]');
    if (!btn) return;
    btn.addEventListener('mouseenter', () =>
      gsap.fromTo(btn, { scale: 1 }, { scale: 1.04, duration: 0.25, ease: 'tkt.spring' }));
    btn.addEventListener('mouseleave', () =>
      gsap.to(btn, { scale: 1, duration: 0.25, ease: 'tkt.spring' }));
  }

  /* ─── FOOTER STAGGER ─────────────────────────────────────── */
  function initFooter() {
    appear('[data-footer-col]', {
      opacity: 0, y: 30, duration: 0.6,
      stagger: 0.1, ease: 'tkt.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 92%',
        once: true,
      },
    });
  }

  /* ─── PAGE TRANSITION ────────────────────────────────────── */
  function pageOut(onComplete) {
    if (reduced()) { onComplete && onComplete(); return; }
    gsap.to('#root', {
      opacity: 0, y: -20, duration: 0.3,
      ease: 'power2.in',
      onComplete,
    });
  }

  function pageIn() {
    window.scrollTo(0, 0);
    if (reduced()) { gsap.set('#root', { opacity: 1, y: 0 }); initAll(); return; }
    gsap.fromTo('#root',
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'tkt.spring',
        onComplete: initAll }
    );
  }

  /* ─── SMOOTH SCROLL TO ANCHOR ────────────────────────────── */
  function scrollTo(target, offset = 80) {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;

    // Keep the navbar visible throughout the jump.
    suppressNavHide = true;
    const header = document.querySelector('header');
    if (header) gsap.to(header, { yPercent: 0, duration: 0.3, ease: 'tkt.out' });

    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });

    clearTimeout(navHideTimer);
    navHideTimer = setTimeout(() => { suppressNavHide = false; }, 1000);
  }

  /* ─── INIT ALL ────────────────────────────────────────────── */
  function initAll() {
    ScrollTrigger.refresh();
    initCursor();
    initNav();
    initHero();
    initHeadlineSplits();
    initBandReveals();
    initServiceCards();
    initServiceIcons();
    initPhilosophy();
    initMissionTiles();
    initMarquee();
    initCtaBand();
    initContactForm();
    initFooter();
  }

  function destroyAll() {
    ScrollTrigger.getAll().forEach(t => t.kill());
    gsap.globalTimeline.clear();
  }

  return { initAll, destroyAll, pageIn, pageOut, scrollTo };
})();
