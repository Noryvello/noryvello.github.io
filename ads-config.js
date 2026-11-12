/* Noryvello ad slots — STRUCTURE ONLY. No live ad code lives here yet.
 *
 * HOW TO ACTIVATE (one day, when the site is ready):
 *   1. Add noryvello.github.io as a site in Adsterra and get it approved.
 *   2. Create one unit per format: Popunder, Social Bar, In-Page Push.
 *   3. Paste ONLY the exact code Adsterra gives you into the matching slot
 *      below and set that slot's enabled flag to true.
 *
 * Until then every slot stays empty and the loader below injects NOTHING:
 * pages show no ads, no placeholders, and no errors. NEVER invent, guess,
 * or copy ad codes from another site — a wrong code earns nothing and can
 * get the account flagged.
 *
 * Each page on the site loads this file. The loader runs after the DOM is
 * ready and only touches slots that are both enabled AND non-empty.
 */
window.NORYVELLO_ADS = {
  popunder:   { enabled: false, code: "" }, /* Adsterra Popunder snippet goes here */
  socialBar:  { enabled: false, code: "" }, /* Adsterra Social Bar snippet goes here */
  inPagePush: { enabled: false, code: "" }  /* Adsterra In-Page Push snippet goes here */
};

(function () {
  var slots = window.NORYVELLO_ADS || {};
  /* Append HTML so that any <script> tags inside it actually execute. */
  function injectHTML(code, holderId) {
    var holder = document.createElement("div");
    holder.id = holderId;
    holder.innerHTML = code;
    var scripts = holder.querySelectorAll("script");
    var fresh = [];
    for (var i = 0; i < scripts.length; i++) {
      var old = scripts[i], s = document.createElement("script");
      for (var j = 0; j < old.attributes.length; j++) {
        s.setAttribute(old.attributes[j].name, old.attributes[j].value);
      }
      s.text = old.text || "";
      fresh.push({ old: old, next: s });
    }
    for (var k = 0; k < fresh.length; k++) {
      fresh[k].old.parentNode.replaceChild(fresh[k].next, fresh[k].old);
    }
    document.body.appendChild(holder);
  }
  function inject(slot, holderId) {
    if (!slot || !slot.enabled || !slot.code || !String(slot.code).trim()) return;
    injectHTML(String(slot.code), holderId);
  }
  function run() {
    inject(slots.popunder, "noryvello-ad-popunder");
    inject(slots.socialBar, "noryvello-ad-socialbar");
    inject(slots.inPagePush, "noryvello-ad-inpagepush");
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
