/* Safer — private preview gate.
   Soft access code for the pre-launch site. NOT high security (static site,
   code lives client-side) — it keeps the public out and the site out of search.
   To change the code: edit PASS below. To remove the gate: delete the
   <script src="gate.js"> tag from the pages (or empty this file). */
(function () {
  var PASS = "safer2026";          // <-- change the access code here
  var KEY = "safer_gate_ok";
  try { if (sessionStorage.getItem(KEY) === "1") return; } catch (e) {}

  // hide the page immediately (before it paints)
  var style = document.createElement("style");
  style.id = "gate-style";
  style.textContent = "body>*:not(#safer-gate){display:none!important} html,body{background:#e9f0ff!important}";
  (document.head || document.documentElement).appendChild(style);

  function build() {
    var ov = document.createElement("div");
    ov.id = "safer-gate";
    ov.setAttribute("style", "position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:20px;background:linear-gradient(160deg,#eef4ff,#dbe7ff);font-family:Inter,system-ui,-apple-system,sans-serif");
    ov.innerHTML =
      '<div style="text-align:center;max-width:360px;width:100%;padding:36px 30px;background:#fff;border-radius:26px;box-shadow:0 30px 70px rgba(20,58,122,.18)">'
      + '<img src="assets/orb.png" width="54" height="54" style="margin-bottom:14px" alt=""/>'
      + '<h1 style="font-size:1.3rem;color:#0a1f44;margin:0 0 6px;font-weight:800">Private preview</h1>'
      + '<p style="color:#5a6784;font-size:.93rem;line-height:1.5;margin:0 0 20px">This site isn’t public yet. Enter the access code to continue.</p>'
      + '<input id="gate-pw" type="password" inputmode="text" placeholder="Access code" autocomplete="off" style="width:100%;box-sizing:border-box;padding:14px 16px;border:1px solid #e7efff;border-radius:13px;font-size:1rem;outline:none;margin-bottom:10px"/>'
      + '<button id="gate-go" style="width:100%;padding:14px;border:0;border-radius:13px;background:#2f6bff;color:#fff;font-weight:700;font-size:1rem;cursor:pointer">Enter</button>'
      + '<p id="gate-err" style="color:#e5484d;font-size:.85rem;height:16px;margin:12px 0 0"></p>'
      + '</div>';
    document.body.appendChild(ov);
    var pw = document.getElementById("gate-pw");
    function go() {
      if (pw.value === PASS) {
        try { sessionStorage.setItem(KEY, "1"); } catch (e) {}
        var s = document.getElementById("gate-style"); if (s) s.remove();
        ov.remove();
      } else {
        document.getElementById("gate-err").textContent = "Incorrect code — try again";
        pw.value = ""; pw.focus();
      }
    }
    document.getElementById("gate-go").onclick = go;
    pw.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
    pw.focus();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
