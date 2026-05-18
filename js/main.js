/* ============================================================
   main.js — Portfolio interactions
   Vanilla, dependency-free. Loaded with `defer` so DOMContentLoaded
   already fired by the time this executes.
   ============================================================ */

(() => {
  'use strict';

  /* ----------------------------------------------------------------
     1. Reveal-on-scroll
     Uses IntersectionObserver. Falls back to "show all" when not supported.
     ---------------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ----------------------------------------------------------------
     2. Nav: subtle border on scroll
     ---------------------------------------------------------------- */
  const nav = document.querySelector('.nav');
  if (nav) {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          nav.classList.toggle('is-scrolled', window.scrollY > 8);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ----------------------------------------------------------------
     3. Spotlight cursor on project cards
     Tracks pointer position; CSS reads --mx/--my for radial gradient.
     ---------------------------------------------------------------- */
  const supportsHover = window.matchMedia('(hover: hover)').matches;
  if (supportsHover) {
    document.querySelectorAll('.project-card').forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mx', `${x}%`);
        card.style.setProperty('--my', `${y}%`);
      });
    });
  }

  /* ----------------------------------------------------------------
     4. TOC scrollspy (project detail pages)
     Highlights the table-of-contents link for the section currently
     near the top of the viewport.
     ---------------------------------------------------------------- */
  const tocLinks = document.querySelectorAll('.case-toc a');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    const sections = Array.from(tocLinks)
      .map((a) => document.querySelector(a.getAttribute('href')))
      .filter(Boolean);

    const tocIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            tocLinks.forEach((a) => {
              a.classList.toggle('is-active', a.getAttribute('href') === id);
            });
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((s) => tocIo.observe(s));
  }

  /* ----------------------------------------------------------------
     5. Current year in footer
     ---------------------------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ----------------------------------------------------------------
     6. Smooth anchor scrolling guard for keyboard users
     (browsers do it by default; we just ensure focus moves too)
     ---------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      // Allow native smooth scroll; just move focus.
      setTimeout(() => target.setAttribute('tabindex', '-1'), 0);
      setTimeout(() => target.focus({ preventScroll: true }), 350);
    });
  });
})();
