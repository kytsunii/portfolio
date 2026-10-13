/* =========================================================
   Portfólio — interações
   Efeito de digitação · reveal on scroll · menu mobile
   ========================================================= */

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Navbar: fundo ao rolar ---------- */
  const navbar = document.getElementById("navbar");

  function onScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Menu mobile ---------- */
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    menuToggle.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });

  // Fecha o menu ao clicar em um link (navegação na mesma página)
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Efeito de digitação no cargo ---------- */
  const roles = [
    "Desenvolvedor Full-Stack",
    "Desenvolvedor Web",
    "Entusiasta de Open Source",
  ];
  const typeTarget = document.getElementById("typewriter");

  if (prefersReducedMotion) {
    typeTarget.textContent = roles[0];
  } else {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {
      const current = roles[roleIndex];

      if (deleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      typeTarget.textContent = current.slice(0, charIndex);

      let delay = deleting ? 38 : 75;

      if (!deleting && charIndex === current.length) {
        delay = 2200; // pausa com a frase completa
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 450;
      }

      setTimeout(type, delay);
    }
    type();
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");

  if (prefersReducedMotion) {
    revealEls.forEach((el) => el.classList.add("visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el, i) => {
      // Escalona levemente os cards que aparecem juntos
      el.style.transitionDelay = `${(i % 3) * 90}ms`;
      revealObserver.observe(el);
    });
  }

  /* ---------- Link ativo na navegação ---------- */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  /* ---------- Contadores (stats do Sobre) ---------- */
  const counters = document.querySelectorAll("[data-count]");

  function animateCounter(el) {
    const target = Number(el.dataset.count);
    if (prefersReducedMotion) {
      el.textContent = String(target);
      return;
    }
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out para desacelerar no final
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => counterObserver.observe(el));

  /* ---------- Ano atual no footer ---------- */
  document.getElementById("ano").textContent = String(new Date().getFullYear());
})();
