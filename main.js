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

  /* ---- Waitlist: REAL signup capture ----
     Paste your Formspree endpoint below to store signups + get emailed on each one.
     Get it free at formspree.io (New form -> copy the URL). Until then, it routes to
     the support inbox via the visitor's mail app so no signup is silently lost. */
  var WAITLIST_ENDPOINT = "https://formsubmit.co/ajax/support@safer.global"; // no-signup capture; emails each new lead to support@
  var wf = document.getElementById("waitlistForm");
  if (wf) {
    wf.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = wf.querySelector('input[name="email"]');
      var ok = wf.querySelector(".form-note:not(.form-error)");
      var err = wf.querySelector(".form-error");
      var btn = wf.querySelector('button[type="submit"]');
      if (ok) ok.hidden = true;
      if (err) err.hidden = true;
      if (!email || !email.value || !email.checkValidity()) { if (email) email.reportValidity(); return; }
      if (wf.querySelector('input[name="_gotcha"]').value) return; // honeypot: silent drop

      function showOk() { if (ok) { ok.hidden = false; ok.scrollIntoView({ behavior: "smooth", block: "center" }); } wf.reset(); }

      if (!WAITLIST_ENDPOINT) {
        // Not configured yet — hand off to the mail app (real, reaches support@)
        window.location.href = "mailto:support@safer.global?subject=" +
          encodeURIComponent("Safer Early Access signup") +
          "&body=" + encodeURIComponent("Please add me to the Safer early access list: " + email.value);
        showOk();
        return;
      }

      var original = btn.innerHTML;
      btn.disabled = true; btn.textContent = "Joining…";
      fetch(WAITLIST_ENDPOINT, { method: "POST", headers: { "Accept": "application/json" }, body: new FormData(wf) })
        .then(function (r) { return r.json().catch(function () { return {}; }); })
        .then(function (data) {
          btn.disabled = false; btn.innerHTML = original;
          // FormSubmit returns HTTP 200 even on failure — only trust success:"true"
          if (data && String(data.success) === "true") { showOk(); }
          else if (err) { err.hidden = false; }
        })
        .catch(function () {
          btn.disabled = false; btn.innerHTML = original;
          if (err) err.hidden = false;
        });
    });
  }

  /* Contact / GDPR / delete forms — build a REAL mailto so nothing is silently dropped */
  document.querySelectorAll("form[data-mailto]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var to = form.getAttribute("data-mailto");
      var subject = form.getAttribute("data-subject") || "Website message";
      var lines = [];
      form.querySelectorAll("input, textarea, select").forEach(function (el) {
        if (!el.name || el.type === "hidden") return;
        var label = el.getAttribute("aria-label") || el.name;
        lines.push(label + ": " + el.value);
      });
      var note = form.querySelector(".form-note");
      window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(lines.join("\n"));
      if (note) { note.hidden = false; note.scrollIntoView({ behavior: "smooth", block: "center" }); }
      form.reset();
    });
  });
})();
