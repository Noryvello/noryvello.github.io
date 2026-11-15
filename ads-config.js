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
 * both enabled AND non-empty. GATED-SLOT RULES 2026-11-15 (owner order +
 * owner's 5-point presentation guide; Social Bar gated 2026-11-15 on the
 * owner's word after its offer opened on EVERY visit, without a tap):
 * (1) FREQUENCY CAP — at most ONCE per visitor per 24 hours, per slot
 * (localStorage gates below); (2) TIME DELAY — each gated script loads
 * only 20s after page load, so only engaged readers ever trigger it;
 * (3) POPUNDER NEVER on hub pages (/ and /bn/) — inner tool pages only;
 * the Social Bar gate applies on all pages, hubs included. Mobile keeps
 * the same careful rules (visitors are overwhelmingly mobile;
 * desktop-only would kill the format).
 * Do NOT loosen these rules without the owner's word.
 * DISPLAY-SLOT RULE 2026-11-15 (owner order: the visitor must see the page
 * first — Adsterra's banner code was redirecting mobile visitors off the
 * page the moment they entered): Banner + Native tags load 8s after DOM
 * ready, into placeholders in the ad-zone block. NO frequency cap on
 * display slots (they are per-impression inventory), all pages including
 * hubs. The tag code itself is byte-identical to what Adsterra issued;
 * only WHEN it loads changed. Tags are never sandboxed, iframed, or
 * altered without Adsterra's prior written consent (ToS 4.7).
 * UPDATE 2026-11-15: the Banner slot is temporarily DISABLED
 * (enabled:false below) — the forced redirect survived the 8s delay on the
 * owner's mobile Chrome (cdn.aucey.com, 14:38); the Banner is the prime
 * suspect. Native + gates unchanged. Restore on Adsterra's reply or the
 * owner's word; if the redirect persists with the banner off, the Native
 * unit is next.
 * UPDATE 2026-11-15: the Popunder slot is DISABLED (enabled:false below) —
 * AdSense condition #1 (owner order 2026-11-15): the popunder must be off
 * before any AdSense application. Code kept byte-identical for the record;
 * do NOT re-enable without the owner's word.
 * UPDATE 2026-11-15: ALL slots are now DISABLED — Native + Social Bar
 * switched off with the owner's AdSense decision (apply clean; no other
 * ad scripts during review). Every unit's code is kept byte-identical;
 * re-enable only on the owner's word, after the AdSense verdict.
 */
window.NORYVELLO_ADS = {
  popunder:   { enabled: false, code: "<script data-cfasync=\"false\" src=\"https://abscloud.org/1/ed75688592e9e156b7406d2363b76c44\"></script>" }, /* Adsterra Popunder_1, ID 32242761, issued 2026-11-13 — DISABLED 2026-11-15 (AdSense condition #1; code kept byte-identical, re-enable only on owner's word) */
  socialBar:  { enabled: false, code: "<script data-cfasync=\"false\" src=\"https://bauval.org/14/421055aafe4956dd5c498c37c06637ed\"></script>" }, /* Adsterra SocialBar_1, ID 32242762, issued 2026-11-13 — DISABLED 2026-11-15 (AdSense clean-site decision; code kept byte-identical, re-enable only on owner's word) */
  inPagePush: { enabled: false, code: "" },  /* No In-Page Push unit for this site yet */
  native:     { enabled: false, code: "<script async=\"async\" data-cfasync=\"false\" src=\"https://bauval.org/21/d3643148ad0d192d49387f5ff33bfbab\"></script>" }, /* Adsterra Native Banner, ID 32275408, issued 2026-11-13 — renders into #container-d3643148ad0d192d49387f5ff33bfbab — DISABLED 2026-11-15 (AdSense clean-site decision; code kept byte-identical, re-enable only on owner's word) */
  banner:     { enabled: false, code: "<script>\natOptions = {\n  'key' : 'bc6c23f29ce8054c16144e7f48ae8ef9',\n  'format' : 'iframe',\n  'height' : 250,\n  'width' : 300,\n  'params' : {}\n};\n</script>\n<script src=\"https://bauval.org/22/bc6c23f29ce8054c16144e7f48ae8ef9\"></script>" } /* Adsterra Banner 300x250, ID 32275368 — TEMPORARILY DISABLED 2026-11-15 (prime forced-redirect suspect; code kept byte-identical, re-enable with enabled:true when Adsterra replies or on owner's word) */
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
  /* Inject tag code as real executable scripts, preserving order, with no
   * wrapper element: each fresh script lands exactly where the static tag
   * used to sit, so position-sensitive ad code behaves identically. */
  function injectScripts(code, parentEl, beforeNode) {
    if (!parentEl) return;
    var holder = document.createElement("div");
    holder.innerHTML = code;
    var scripts = holder.querySelectorAll("script");
    for (var i = 0; i < scripts.length; i++) {
      var old = scripts[i], s = document.createElement("script");
      for (var j = 0; j < old.attributes.length; j++) {
        s.setAttribute(old.attributes[j].name, old.attributes[j].value);
      }
      s.text = old.text || "";
      if (beforeNode) parentEl.insertBefore(s, beforeNode);
      else parentEl.appendChild(s);
    }
  }
  /* Gated slots (owner's presentation guide, 2026-11-15; Social Bar
   * gate added 2026-11-15 on the owner's word after its offer opened
   * on EVERY visit, without a tap):
   * - Frequency cap: at most once per visitor per 24 hours, per slot
   *   (separate keys). The timestamp is written only when the script
   *   actually loads; loads inside the window skip the slot entirely.
   * - Time delay: the script is requested only 20s after page load,
   *   so a visitor who bounces early never triggers it, and leaving
   *   before the delay does not burn the day's one allowance.
   * - Hub pages (/ and /bn/) never load the popunder at all. The
   *   Social Bar gate applies on ALL pages, hubs included.
   * If storage is unavailable (private mode), fall back to loading. */
  var GATE_MS = 24 * 60 * 60 * 1000;
  var GATE_DELAY_MS = 20 * 1000;
  var DISPLAY_DELAY_MS = 8 * 1000;
  var displayLoaded = false;
  function gateOpen(key) {
    try {
      var last = parseInt(localStorage.getItem(key) || "0", 10);
      return (Date.now() - last >= GATE_MS);
    } catch (e) {
      return true;
    }
  }
  function gateClaim(key) {
    try {
      var last = parseInt(localStorage.getItem(key) || "0", 10);
      if (Date.now() - last < GATE_MS) return false;
      localStorage.setItem(key, String(Date.now()));
      return true;
    } catch (e) {
      return true;
    }
  }
  var POPUNDER_GATE_KEY = "noryvello_popunder_last";
  var SOCIALBAR_GATE_KEY = "noryvello_socialbar_last";
  function isHubPage() {
    var path = window.location.pathname;
    return path === "/" || path === "/index.html" || path === "/bn/" || path === "/bn/index.html";
  }
  /* Display slots (Banner + Native): delayed 8s so the visitor sees and
   * can use the page first. No frequency cap. Tags byte-identical; only
   * the load timing changed. Runs once per page view. */
  function loadDisplaySlots() {
    if (displayLoaded) return;
    displayLoaded = true;
    var container = document.getElementById("container-d3643148ad0d192d49387f5ff33bfbab");
    if (container && slots.native && slots.native.enabled && String(slots.native.code || "").trim()) {
      injectScripts(String(slots.native.code), container.parentNode, container);
    }
    var bannerHolder = document.getElementById("noryvello-ad-banner-slot");
    if (bannerHolder && slots.banner && slots.banner.enabled && String(slots.banner.code || "").trim()) {
      injectScripts(String(slots.banner.code), bannerHolder, null);
    }
  }
  function run() {
    if (!isHubPage() && gateOpen(POPUNDER_GATE_KEY)) {
      setTimeout(function () {
        if (gateClaim(POPUNDER_GATE_KEY)) inject(slots.popunder, "noryvello-ad-popunder");
      }, GATE_DELAY_MS);
    }
    if (gateOpen(SOCIALBAR_GATE_KEY)) {
      setTimeout(function () {
        if (gateClaim(SOCIALBAR_GATE_KEY)) inject(slots.socialBar, "noryvello-ad-socialbar");
      }, GATE_DELAY_MS);
    }
    inject(slots.inPagePush, "noryvello-ad-inpagepush");
    setTimeout(loadDisplaySlots, DISPLAY_DELAY_MS);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
