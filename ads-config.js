/* Noryvello ad slots — LIVE since 2026-11-13.
 *
 * Site approved in Adsterra 2026-11-13 (site ID 6196082, publisher 1Faisal1).
 * Popunder + Social Bar codes below are the EXACT codes Adsterra issued for
 * noryvello.github.io — nothing invented, nothing copied from ToolBari.
 * In-Page Push: NOT a separate unit in Adsterra's current platform (verified
 * 2026-11-13: AD UNIT dialog offers only Popunder, Social Bar, Native Banner,
 * Banner, Smartlink). Per Adsterra's own docs, In-Page Push is a Social Bar
 * subformat/skin — and SocialBar_1 is already placed below. Do not chase a
 * separate In-Page Push code; a different presentation needs Adsterra support.
 *
 * The loader runs after the DOM is ready and only touches slots that are
 * both enabled AND non-empty. POPUNDER RULES 2026-11-15 (owner order +
 * owner's 5-point presentation guide): (1) FREQUENCY CAP — at most ONCE
 * per visitor per 24 hours (localStorage gate below); (2) TIME DELAY —
 * the script loads only 20s after page load, so only engaged readers
 * ever trigger it; (3) NEVER on hub pages (/ and /bn/) — inner tool
 * pages only. Mobile keeps the same careful rules (visitors are
 * overwhelmingly mobile; desktop-only would kill the format).
 * Do NOT loosen these rules without the owner's word.
 * Social Bar + Banner + Native stay live, ungated.
 */
window.NORYVELLO_ADS = {
  popunder:   { enabled: true, code: "<script data-cfasync=\"false\" src=\"https://abscloud.org/1/ed75688592e9e156b7406d2363b76c44\"></script>" }, /* Adsterra Popunder_1, ID 32242761, issued 2026-11-13 */
  socialBar:  { enabled: true, code: "<script data-cfasync=\"false\" src=\"https://bauval.org/14/421055aafe4956dd5c498c37c06637ed\"></script>" }, /* Adsterra SocialBar_1, ID 32242762, issued 2026-11-13 */
  inPagePush: { enabled: false, code: "" }  /* No In-Page Push unit for this site yet */
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
  /* Popunder rules (owner's presentation guide, 2026-11-15):
   * - Frequency cap: at most once per visitor per 24 hours. The
   *   timestamp is written only when the script actually loads; loads
   *   inside the window skip the slot entirely.
   * - Time delay: the script is requested only 20s after page load,
   *   so a visitor who bounces early never triggers it, and leaving
   *   before the delay does not burn the day's one allowance.
   * - Hub pages (/ and /bn/) never load the popunder at all.
   * If storage is unavailable (private mode), fall back to loading. */
  var POPUNDER_GATE_KEY = "noryvello_popunder_last";
  var POPUNDER_GATE_MS = 24 * 60 * 60 * 1000;
  var POPUNDER_DELAY_MS = 20 * 1000;
  function popunderGateOpen() {
    try {
      var last = parseInt(localStorage.getItem(POPUNDER_GATE_KEY) || "0", 10);
      return (Date.now() - last >= POPUNDER_GATE_MS);
    } catch (e) {
      return true;
    }
  }
  function popunderClaim() {
    try {
      var last = parseInt(localStorage.getItem(POPUNDER_GATE_KEY) || "0", 10);
      if (Date.now() - last < POPUNDER_GATE_MS) return false;
      localStorage.setItem(POPUNDER_GATE_KEY, String(Date.now()));
      return true;
    } catch (e) {
      return true;
    }
  }
  function isHubPage() {
    var path = window.location.pathname;
    return path === "/" || path === "/index.html" || path === "/bn/" || path === "/bn/index.html";
  }
  function run() {
    if (!isHubPage() && popunderGateOpen()) {
      setTimeout(function () {
        if (popunderClaim()) inject(slots.popunder, "noryvello-ad-popunder");
      }, POPUNDER_DELAY_MS);
    }
    inject(slots.socialBar, "noryvello-ad-socialbar");
    inject(slots.inPagePush, "noryvello-ad-inpagepush");
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
