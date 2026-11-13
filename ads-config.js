/* Noryvello ad slots — LIVE since 2026-11-13.
 *
 * Site approved in Adsterra 2026-11-13 (site ID 6196082, publisher 1Faisal1).
 * Popunder + Social Bar codes below are the EXACT codes Adsterra issued for
 * noryvello.github.io — nothing invented, nothing copied from ToolBari.
 * In-Page Push: no unit exists for this site yet (not offered in the
 * add-website form); create it in Adsterra via AD UNIT if wanted, then
 * fill its slot and set enabled to true.
 *
 * The loader runs after the DOM is ready and only touches slots that are
 * both enabled AND non-empty. Popunder exception applies here (NEW site):
 * aggressive Adsterra formats are allowed during the Adsterra phase, and
 * are removed before any AdSense application.
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
