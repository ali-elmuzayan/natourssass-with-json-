/* =========================================================
   Natours — small UI polish
   - Auto-close the navigation drawer after a link is clicked
   - Handle booking form submission with friendly inline feedback
   - Reveal sections on scroll (subtle fade-up)
   ========================================================= */
(function () {
  "use strict";

  // ---------- Auto-close nav after clicking a link ----------
  const navToggle = document.getElementById("nav-toggle");
  if (navToggle) {
    document.querySelectorAll(".navigation-link").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.checked = false;
      });
    });
  }

  // ---------- Booking form: prevent reload, show inline thank-you ----------
  const form = document.querySelector(".form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      // Disable inputs, replace button with confirmation
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        const isAr = document.documentElement.lang === "ar";
        btn.textContent = isAr ? "تم! سنتواصل معك ✓" : "Thanks! We'll be in touch ✓";
        btn.disabled = true;
        btn.style.opacity = "0.85";
      }
    });
  }

  // ---------- Scroll-reveal for sections (progressive enhancement) ----------
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealTargets = document.querySelectorAll(
      ".section-about, .section-tours, .section-stories, .section-gallery, .section-book, .section-stats"
    );

    revealTargets.forEach((el) => el.classList.add("reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    revealTargets.forEach((el) => io.observe(el));
  }
})();
