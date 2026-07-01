/* Safer Global — landing interactions */
(function () {
  "use strict";

  /* Sticky header shadow on scroll */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* Mobile menu open/close */
  var menu = document.getElementById("mobileMenu");
  var openBtn = document.getElementById("navToggle");
  var closeBtn = document.getElementById("mmClose");
  var openMenu = function () { if (menu) { menu.classList.add("open"); document.body.style.overflow = "hidden"; } };
  var closeMenu = function () { if (menu) { menu.classList.remove("open"); document.body.style.overflow = ""; } };
  if (openBtn) openBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (menu) menu.addEventListener("click", function (e) { if (e.target === menu) closeMenu(); });
  document.querySelectorAll(".mobile-panel a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  /* FAQ accordion */
  document.querySelectorAll(".faq-q").forEach(function (q) {
    q.addEventListener("click", function () {
      var item = q.closest(".faq-item");
      var ans = item.querySelector(".faq-a");
      var isOpen = item.classList.contains("open");
      if (isOpen) {
        item.classList.remove("open");
        ans.style.maxHeight = null;
      } else {
        item.classList.add("open");
        ans.style.maxHeight = ans.scrollHeight + "px";
      }
    });
  });

  /* Reveal on scroll (sections + character walk-ins) */
  var reveals = document.querySelectorAll(".reveal, .char-wrap");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* Contact / request form (front-end only demo) */
  document.querySelectorAll("form[data-demo]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.querySelector(".form-note");
      if (note) { note.hidden = false; note.scrollIntoView({ behavior: "smooth", block: "center" }); }
      form.reset();
    });
  });
})();
