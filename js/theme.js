/* =========================================================
   Natours — light / dark theme toggle
   ---------------------------------------------------------
   The initial theme is applied by a tiny inline script in
   <head> to avoid a flash of incorrect theme. This file
   wires up the toggle button and the prefers-color-scheme
   listener.
   ========================================================= */
(function () {
  "use strict";

  const STORAGE_KEY = "natours.theme";
  const root = document.documentElement;
  const mql = window.matchMedia("(prefers-color-scheme: dark)");

  function current() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function apply(theme, persist) {
    if (theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");

    document.querySelectorAll(".theme-toggle-btn").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(theme === "dark"));
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    });

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch (_) {
        /* ignore */
      }
    }
  }

  function init() {
    // Reflect the theme that the head pre-script already set
    apply(current(), false);

    // Toggle on click
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".theme-toggle-btn");
      if (!btn) return;
      apply(current() === "dark" ? "light" : "dark", true);
    });

    // Follow OS preference if user hasn't picked one
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", (e) => {
        let saved = null;
        try {
          saved = localStorage.getItem(STORAGE_KEY);
        } catch (_) {
          /* ignore */
        }
        if (!saved) apply(e.matches ? "dark" : "light", false);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
