# Noryvello Jobs Pilot — 5 Bangla jobs pages ready pack (first jobs wave)

## INSTRUCTIONS FOR THE AI READING THIS FILE (read first, follow exactly)
You are the page builder. This file is your complete instruction set.
- Follow Prompt 0-JOBS below exactly for every page.
- Build ALL 5 topics in this file, IN ORDER, WITHOUT waiting for the owner
  to name each one. After finishing one page, continue to the next topic
  on your own, until all 5 are done.
- Return ONE page per reply: one complete HTML file in a single code block,
  nothing else. Never put two pages in one reply.
- Do NOT build anything else, and do NOT pick your own topics. Build ONLY
  the 5 topics in this file.
- If the session stops before all 5 are done, continue from the next
  unbuilt topic when the owner says "continue" — never rebuild a page
  already delivered.
- When all 5 pages are done, package them into ONE downloadable ZIP named
  Noryvello_Jobs_Pilot_5.zip (see the last section).
- The owner will send the ZIP to Suraiya, who verifies every page before
  publish. You do NOT publish anything. You do NOT touch the English pages.

## For the owner
Upload this whole file to the builder chat. The builder will work through
all 5 topics on its own, one page per reply, and make the ZIP at the end.
Bring the ZIP to Suraiya — she verifies every page and publishes all at once.

## Prompt 0-JOBS — SETUP (in this file, read and follow exactly)

```text
You are building BANGLA jobs pages for Noryvello, a free tools hub at
https://noryvello.github.io/. These pages live under /bn/ — for example
https://noryvello.github.io/bn/bpsc-non-cadre-job-circular-2026/. Every page
you build must follow ALL the rules below, exactly. The 5 topics are listed
in this file, in order. Build them one at a time, in order, without waiting.
For each topic, return ONE complete, self-contained HTML file in a single
code block, nothing else.

LANGUAGE — the whole page is in BANGLA (Bangla script), except:
- the brand name "Noryvello" (Latin letters, two-tone spans, never translated),
- URLs and slugs (ASCII, exactly as given in each spec),
- NUMBERS: use Western digits 0-9 in every date, count, fee and in the
  deadline-status box. Month names stay in Bangla words (e.g. "30 নভেম্বর
  2026"). Never use Bangla digits anywhere on these pages.
- <html lang="bn">. og:locale is bn_BD. The JSON-LD carries "inLanguage":"bn".

STRUCTURE — every page has exactly this shape, in this order:
1. <head>: charset, viewport, unique <title> ending in " | Noryvello",
   unique meta description in Bangla (80-250 characters, states the
   organisation, the post count or categories, and the deadline), canonical
   link, og:type article, og:locale bn_BD, og:title (title without the
   suffix), og:description (one sentence, Bangla), og:url. Canonical and
   og:url are https://noryvello.github.io/bn/<slug>/ with a trailing slash.
   ONE hreflang link: hreflang="bn" pointing at its own /bn/<slug>/ URL.
2. The CSS block below, copied EXACTLY, unchanged, then the EXTRA RULES
   below, copied exactly, unchanged. No other CSS.
3. One FAQPage JSON-LD script with exactly the same questions and answers as
   the visible FAQ section (rule 7 below), plus "inLanguage":"bn".
4. <body>: brand line, ONE <h1> (Bangla), an answer-first box
   (<p class="answer">) in Bangla that says in 2-3 sentences which
   organisation is hiring, for how many posts/categories, and the deadline,
   then the DEADLINE-STATUS box (rule 3 below), then the summary table
   ("এক নজরে" — rule 4 below), then the how-to-apply steps (H2 "আবেদন
   করবেন যেভাবে"), then the OFFICIAL LINKS box (rule 14 below), then a warn
   box (<div class="warn">) in Bangla with the honesty notes from the topic
   spec, then H2 content sections, then "প্রশ্নোত্তর" with the visible FAQs,
   then "Noryvello-তে আরও ফ্রি টুল" with 3-5 links (rule 8 below), then the
   AD ZONE block below copied EXACTLY, then the footer, then the page
   script, then ALWAYS as the last script tag:
   <script src="../../ads-config.js"></script>
   NOTE THE PATHS: these pages sit TWO levels deep (/bn/<slug>/), so the
   brand link is href="../../", the ad script is ../../ads-config.js, links
   to English pages are ../../<slug>/, and links to Bangla sibling pages
   are ../<slug>/.

CSS BLOCK (copy exactly):
<style>*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Segoe UI',Arial,sans-serif;background:linear-gradient(160deg,#e0e7ff,#f5f3ff 45%,#dbeafe) fixed;color:#1e293b;line-height:1.65}
.wrap{max-width:760px;margin:0 auto;padding:24px 16px 48px}
.brand{font-weight:800;font-size:15px;letter-spacing:.4px}
.brand a{text-decoration:none}
.brand .n{color:#4338ca}.brand .v{color:#0d9488}
h1{font-size:28px;line-height:1.3;margin:14px 0 10px;text-shadow:0 2px 0 rgba(255,255,255,.7)}
.answer{background:rgba(255,255,255,.78);backdrop-filter:blur(8px);box-shadow:0 12px 26px rgba(30,41,59,.12),inset 0 1px 0 #fff;border:1px solid rgba(255,255,255,.85);border-radius:12px;padding:14px 16px;font-size:16.5px;margin:14px 0}
h2{font-size:21px;margin:26px 0 8px}
ol,ul{margin:8px 0 8px 22px}
li{margin:5px 0}
.faq{background:rgba(255,255,255,.78);backdrop-filter:blur(8px);box-shadow:0 12px 26px rgba(30,41,59,.12),inset 0 1px 0 #fff;border:1px solid rgba(255,255,255,.85);border-radius:12px;padding:14px 16px;margin:10px 0}
.faq h3{font-size:16.5px;margin-bottom:4px}
.note{font-size:14px;color:#64748b}
.links a{color:#4338ca}
footer{margin-top:36px;font-size:13.5px;color:#64748b}
.calc{background:rgba(255,255,255,.78);backdrop-filter:blur(8px);box-shadow:0 12px 26px rgba(30,41,59,.12),inset 0 1px 0 #fff;border:1px solid rgba(255,255,255,.85);border-radius:12px;padding:16px;margin:14px 0}
.calc label{display:block;font-weight:600;margin:10px 0 4px;font-size:14.5px}
.calc input,.calc select{width:100%;padding:10px;border:1px solid #cbd5e1;border-radius:8px;font-size:16px;background:#fff}
.calc .out{font-size:19px;font-weight:700;margin-top:14px}
.calc .steps{font-size:15px;color:#334155;margin-top:6px;white-space:pre-line}
.warn{background:rgba(255,251,235,.9);border:1px solid #fde68a;border-radius:12px;padding:14px 16px;margin:14px 0;font-size:15px}
code{background:#eef2ff;padding:1px 5px;border-radius:5px}
</style>

EXTRA RULES (copy exactly, directly after the CSS block):
<style>.status{border-radius:12px;padding:14px 16px;margin:14px 0;font-size:17px;font-weight:700}
.status.open{background:#ecfdf5;border:1px solid #6ee7b7;color:#065f46}
.status.closed{background:#fef2f2;border:1px solid #fca5a5;color:#991b1b}
table{width:100%;border-collapse:collapse;margin:10px 0;background:rgba(255,255,255,.85);border-radius:12px;overflow:hidden}
th,td{text-align:left;padding:9px 12px;border-bottom:1px solid #e2e8f0;font-size:15.5px}
th{width:38%;color:#475569;font-weight:700}
.apply{display:block;text-align:center;background:#4338ca;color:#fff !important;text-decoration:none;font-weight:700;border-radius:10px;padding:13px;margin:12px 0}
.apply.closed{background:#94a3b8}
.offbox{background:rgba(255,255,255,.78);border:1px solid rgba(255,255,255,.85);border-radius:12px;padding:14px 16px;margin:14px 0}
</style>

BRAND: the brand line is exactly:
<div class="brand"><a href="../../"><span class="n">Nory</span><span class="v">vello</span></a></div>
Footer is exactly:
<footer>© Noryvello — <a href="https://noryvello.github.io/">noryvello.github.io</a></footer>
Never use any other brand name. Never recolour the brand.

AD ZONE (copy exactly, directly before <footer>, on every page):
<div style="margin:28px auto 4px;text-align:center;max-width:100%;overflow:hidden">
<script async="async" data-cfasync="false" src="https://bauval.org/21/d3643148ad0d192d49387f5ff33bfbab"></script>
<div id="container-d3643148ad0d192d49387f5ff33bfbab"></div>
<script>
atOptions = {
  'key' : 'bc6c23f29ce8054c16144e7f48ae8ef9',
  'format' : 'iframe',
  'height' : 250,
  'width' : 300,
  'params' : {}
};
</script>
<script src="https://bauval.org/22/bc6c23f29ce8054c16144e7f48ae8ef9"></script>
</div>

QUALITY RULES (non-negotiable):
1. BANGLA ONLY (plus the exceptions above). No English sentences anywhere
   on the page. Write natural, correct, everyday Bangla. Never mix English
   words where a plain Bangla word exists. Organisation names keep their
   official Bangla name; the English abbreviation (BPSC, DAM, CPA) may
   appear once, in brackets, after the Bangla name.
2. THE PAGE MUST DELIVER WHAT ITS TITLE PROMISES. A real summary, a working
   deadline status, real official links. No stubs, no filler, no fake
   content, no placeholder text, no "coming soon".
3. DEADLINE-STATUS BOX — the page's working tool. Use EXACTLY this logic:
   const DEADLINE = new Date('<DEADLINE-ISO from the spec>');
   Every second, compare the visitor's current time with DEADLINE. While the
   deadline is in the future, show class "status open" with the text:
   "আবেদন চলছে — শেষ তারিখ <DEADLINE-WORDS from the spec>। আর <N> দিন বাকি।"
   where <N> is the whole days left, rounded UP, in 0-9 digits. When the
   deadline has passed, show class "status closed" with the text:
   "আবেদনের সময় শেষ — <DEADLINE-WORDS from the spec> পার হয়ে গেছে।"
   Never show NaN. Never crash. The official links STAY on the page after
   the deadline (visitors may still need admit cards or results) — but the
   apply button gets class "apply closed" and the note under it says the
   portal may no longer accept applications. No external libraries.
4. SUMMARY TABLE ("এক নজরে"): a two-column table with ONLY the facts given
   in the topic spec — organisation, posts/categories, circular date and
   memo number (if given), application start, application deadline, fee
   (only if given), age limit (only if given). NEVER add a row for a fact
   the spec does not give. NEVER list individual post names, vacancy splits
   per post, pay scales, or per-post qualifications — the spec does not
   give them, and the page points to the official circular for post-wise
   details. Where the spec says "বিজ্ঞপ্তিতে দেখুন", write exactly that in
   the table cell.
5. FEES: application fees are official facts, not prices. State them ONLY
   when the spec gives them, exactly as given, using the word "টাকা" (never
   a currency symbol). Never state any other money figure.
6. FORBIDDEN — refuse these, do not build them: crypto and speculation,
   medical / insurance / mental-health advice, politics, anything needing
   expert review, horoscopes/fortune/love calculators, personality quizzes,
   or anything that invents facts about real people. NEVER invent circular
   facts: no invented post lists, dates, fees, age limits, or eligibility
   rules. If a fact is not in the spec, the page says "বিজ্ঞপ্তিতে দেখুন".
7. FAQ: exactly 4 questions, all in Bangla. The visible FAQ divs use
   <div class="faq"><h3>QUESTION</h3><p>ANSWER</p></div> and the JSON-LD
   mainEntity must contain the SAME question text and SAME answer text,
   word for word. Answers are plain text, no HTML inside. Use the 4
   questions given in each topic spec, and answer ONLY from the spec's
   facts.
8. CROSS-LINKS: link 3-5 pages. At least 2 must be Bangla sibling pages
   from this pack (href ../<slug>/, link text = that page's Bangla H1 from
   this file). The rest may be English pages from the list below
   (href ../../<slug>/, exact English link texts below). Never link a page
   that is not on one of these lists. Separate links with " · ".
9. HREFLANG: all 5 topics are Bangla-first with no English twin. Each page
   carries ONE hreflang link: hreflang="bn" pointing at its own
   /bn/<slug>/ URL. Do NOT edit any English page.
10. ADS: paste ONLY the AD ZONE block above, exactly as given, directly
    before <footer>. NEVER paste any other ad code, ad script or ad network
    snippet into a page. Do not add, remove or change the ads-config.js tag.
    The popunder presentation rules (24-hour cap, 20-second delay, never on
    hub pages) live inside ads-config.js — you do NOT implement them, touch
    them, or add any popunder code of your own.
11. MOBILE-FIRST: the page must work on a small phone screen. Table and
    buttons full width, text readable, no horizontal scrolling, no
    hover-only features.
12. SEMANTIC HTML: one H1 only, H2 for sections, H3 only inside FAQ divs.
13. DATES AND FACTS: use ONLY the dates and facts stated in the topic spec.
    If you cannot verify a fact from the spec, leave it out rather than
    guessing. Never invent fixtures, statistics or official lists. All
    deadline times are Bangladesh time (UTC+6) — the DEADLINE-ISO in each
    spec already carries the +06:00 offset; use it verbatim.
14. OFFICIAL LINKS (the ONLY external links allowed, besides canonical,
    og:url, hreflang and the footer link): the exact URLs given in the topic
    spec, and no others. Put them in the OFFICIAL LINKS box
    (<div class="offbox">) with the Bangla labels given in the spec, plus
    ONE apply button (<a class="apply">) pointing at the apply-portal URL.
    Every official link opens in a new tab: target="_blank"
    rel="noopener". Never link any job-aggregator site, never link a
    Facebook page, never shorten or alter the given URLs.

ENGLISH CROSS-LINK LIST (exact hrefs and link texts; use ../../ in hrefs):
- ../../job-scam-spotting-guide/ — "Job Scam Spotting Guide"
- ../../interview-mistakes/ — "7 Interview Mistakes That Can Undercut a Strong Candidate"
- ../../first-job-checklist/ — "What Should You Sort Out in Your First Month at a New Job?"
- ../../sleep-calculator/ — "Sleep Calculator — Bedtime and Wake-Up Time Calculator"
- ../../clean-joke-generator/ — "Clean Joke Generator"
```

---

## TOPICS 1–5 — BANGLA-FIRST JOBS PAGES (no English twin; hreflang bn self only)

### 1. `bpsc-non-cadre-job-circular-2026` | jobs summary + deadline status
- Title: `বিপিএসসি নন-ক্যাডার নিয়োগ 2026: আবেদনের শেষ তারিখ 30 নভেম্বর | Noryvello`
- H1: `বিপিএসসি নন-ক্যাডার নিয়োগ 2026`
- DEADLINE-ISO: `2026-11-30T18:00:00+06:00`
- DEADLINE-WORDS: `30 নভেম্বর 2026, সন্ধ্যা 6টা`
- Facts (summary table, ONLY these): প্রতিষ্ঠান: বাংলাদেশ সরকারি কর্ম কমিশন (BPSC) | বিজ্ঞপ্তি: নন-ক্যাডার, নোটিশ নম্বর 78 থেকে 96, মোট 19 ক্যাটাগরি | বিজ্ঞপ্তি প্রকাশ: 19 অক্টোবর 2026 | স্মারক নম্বর: 80.00.0000.301.73.014(004).26-354 এবং 80.00.0000.301.73.014(004).26-355 | আবেদন শুরু: 1 নভেম্বর 2026, দুপুর 12টা | আবেদনের শেষ তারিখ: 30 নভেম্বর 2026, সন্ধ্যা 6টা | মোট পদসংখ্যা: বিজ্ঞপ্তিতে দেখুন | আবেদন ফি: বিজ্ঞপ্তিতে দেখুন | বয়সসীমা: বিজ্ঞপ্তিতে দেখুন | আবেদনের মাধ্যম: অনলাইনে, BPSC Form-5A.
- Deliver: summary table as above; how-to-apply steps (অফিসিয়াল পোর্টালে যান → বিজ্ঞপ্তি পড়ুন → Form-5A পূরণ করুন → ফি জমা দিন → আবেদনপত্রের কপি সংরক্ষণ করুন); H2 sections: "কোন কোন ক্যাটাগরি" (শুধু এটুকু: 19 ক্যাটাগরিতে নন-ক্যাডার পদ — পদের নাম ও সংখ্যা অফিসিয়াল বিজ্ঞপ্তিতে দেখুন) and "আবেদনের আগে যাচাই করুন" (যোগ্যতা, বয়স ও ফি বিজ্ঞপ্তি থেকে মিলিয়ে নিন). Warn box: Noryvello নিয়োগকারী নয়; সব তথ্য অফিসিয়াল বিজ্ঞপ্তি থেকে মিলিয়ে নিন; চাকরির প্রলোভনে কাউকে টাকা দেবেন না.
- Official links: আবেদন করুন (অফিসিয়াল পোর্টাল): https://bpsc.teletalk.com.bd | বিপিএসসির অফিসিয়াল ওয়েবসাইট: https://bpsc.gov.bd | চলমান নিয়োগ বিজ্ঞপ্তির পাতা: https://bpsc.gov.bd/pages/static-pages/6ad5e44f3c97e6c4ab675017
- FAQs: `আবেদনের শেষ তারিখ কবে?` / `কয়টি ক্যাটাগরিতে নিয়োগ দেওয়া হবে?` / `আবেদন কোথায় করতে হবে?` / `বিজ্ঞপ্তি নম্বর কত?`

### 2. `parliament-secretariat-job-circular-2026` | jobs summary + deadline status
- Title: `সংসদ সচিবালয় নিয়োগ 2026: 155 পদ, শেষ তারিখ 2 ডিসেম্বর | Noryvello`
- H1: `বাংলাদেশ সংসদ সচিবালয় নিয়োগ 2026`
- DEADLINE-ISO: `2026-12-02T23:59:00+06:00`
- DEADLINE-WORDS: `2 ডিসেম্বর 2026, রাত 11:59`
- Facts (summary table, ONLY these): প্রতিষ্ঠান: বাংলাদেশ সংসদ সচিবালয় (জাতীয় সংসদ সচিবালয়) | মোট পদ: 155টি, 28 ক্যাটাগরি (গ্রেড 11 থেকে গ্রেড 20) | বিজ্ঞপ্তির তারিখ: 10 নভেম্বর 2026 | স্মারক নম্বর: 11.00.0000.000.804.11.0004.26.646 | আবেদন শুরু: 12 নভেম্বর 2026, রাত 12:01 | আবেদনের শেষ তারিখ: 2 ডিসেম্বর 2026, রাত 11:59 | আবেদন ফি: পদ অনুযায়ী 168 টাকা, 112 টাকা বা 56 টাকা | নিয়ম: একজন প্রার্থী কেবল একটি পদে আবেদন করতে পারবে | বয়সসীমা: বিজ্ঞপ্তিতে দেখুন.
- Deliver: summary table as above; how-to-apply steps; H2 sections: "একজন, একটি পদ" (পোর্টালের নিয়ম: একজন প্রার্থী কেবল একটি পদে আবেদন করতে পারবে — পদ বাছার আগে বিজ্ঞপ্তি পড়ে নিন) and "আবেদনের আগে যাচাই করুন". Warn box: Noryvello নিয়োগকারী নয়; সব তথ্য অফিসিয়াল বিজ্ঞপ্তি থেকে মিলিয়ে নিন; চাকরির প্রলোভনে কাউকে টাকা দেবেন না.
- Official links: আবেদন করুন (অফিসিয়াল পোর্টাল): https://bps.teletalk.com.bd | নিয়োগ বিজ্ঞপ্তির PDF (অফিসিয়াল): https://bps.teletalk.com.bd/docs/20261110.pdf
- FAQs: `আবেদনের শেষ তারিখ কবে?` / `মোট কয়টি পদে নিয়োগ দেওয়া হবে?` / `একজন প্রার্থী কয়টি পদে আবেদন করতে পারবে?` / `আবেদন ফি কত?`

### 3. `dam-job-circular-2026` | jobs summary + deadline status
- Title: `কৃষি বিপণন অধিদপ্তর নিয়োগ 2026: 97 পদ, আবেদন 16 নভেম্বর থেকে | Noryvello`
- H1: `কৃষি বিপণন অধিদপ্তর (DAM) নিয়োগ 2026`
- DEADLINE-ISO: `2026-12-10T16:00:00+06:00`
- DEADLINE-WORDS: `10 ডিসেম্বর 2026, বিকাল 4টা`
- Facts (summary table, ONLY these): প্রতিষ্ঠান: কৃষি বিপণন অধিদপ্তর (Department of Agricultural Marketing, DAM), কৃষি মন্ত্রণালয় | মোট পদ: 97টি, 8 ক্যাটাগরি | স্মারক নম্বর: 12.02.0000.002.11.291.26.1026, তারিখ 9 নভেম্বর 2026 | আবেদন শুরু: 16 নভেম্বর 2026, সকাল 10টা | আবেদনের শেষ তারিখ: 10 ডিসেম্বর 2026, বিকাল 4টা | আবেদন ফি: বিজ্ঞপ্তিতে দেখুন | বয়সসীমা: বিজ্ঞপ্তিতে দেখুন.
- Deliver: summary table as above; how-to-apply steps; H2 sections: "আবেদন কবে শুরু" (16 নভেম্বর সকাল 10টার আগে পোর্টালে ফরম খুলবে না — আগেভাগে কাগজপত্র গুছিয়ে রাখুন) and "আবেদনের আগে যাচাই করুন". Warn box: Noryvello নিয়োগকারী নয়; সব তথ্য অফিসিয়াল বিজ্ঞপ্তি থেকে মিলিয়ে নিন; চাকরির প্রলোভনে কাউকে টাকা দেবেন না.
- Official links: আবেদন করুন (অফিসিয়াল পোর্টাল): https://dam.teletalk.com.bd | অধিদপ্তরের অফিসিয়াল ওয়েবসাইট: https://dam.gov.bd
- FAQs: `আবেদন কবে শুরু হবে?` / `আবেদনের শেষ তারিখ কবে?` / `কয়টি পদে নিয়োগ দেওয়া হবে?` / `স্মারক নম্বর কত?`

### 4. `bangladesh-post-office-job-circular-2026` | jobs summary + deadline status
- Title: `ডাক অধিদপ্তর নিয়োগ 2026: 169 পদ, শেষ তারিখ 10 ডিসেম্বর | Noryvello`
- H1: `বাংলাদেশ ডাক অধিদপ্তর নিয়োগ 2026`
- DEADLINE-ISO: `2026-12-10T17:00:00+06:00`
- DEADLINE-WORDS: `10 ডিসেম্বর 2026, বিকাল 5টা`
- Facts (summary table, ONLY these): প্রতিষ্ঠান: বাংলাদেশ ডাক অধিদপ্তর (Department of Posts), ডাক ও টেলিযোগাযোগ বিভাগ | মোট পদ: 169টি, 36 ক্যাটাগরি (গ্রেড 11 থেকে গ্রেড 20) | বিজ্ঞপ্তির তারিখ: 8 নভেম্বর 2026 (9 নভেম্বর 2026 পত্রিকায় প্রকাশিত) | স্মারক নম্বর: 14.31.0000.000.029.11.0006.26.59 | আবেদন শুরু: 10 নভেম্বর 2026, সকাল 10টা | আবেদনের শেষ তারিখ: 10 ডিসেম্বর 2026, বিকাল 5টা | বয়সসীমা: 18 থেকে 32 বছর (বয়স গণনার তারিখ বিজ্ঞপ্তিতে দেখুন) | আবেদন ফি: বিজ্ঞপ্তিতে দেখুন.
- Deliver: summary table as above; how-to-apply steps; H2 sections: "পরীক্ষার ধরন" (শুধু এটুকু লিখবে: লিখিত পরীক্ষা MCQ ধরনের হবে বলে জানা গেছে — বিষয় ও বিস্তারিত বিজ্ঞপ্তিতে দেখুন) and "আবেদনের আগে যাচাই করুন". Warn box: Noryvello নিয়োগকারী নয়; সব তথ্য অফিসিয়াল বিজ্ঞপ্তি থেকে মিলিয়ে নিন; চাকরির প্রলোভনে কাউকে টাকা দেবেন না.
- Official links: আবেদন করুন (অফিসিয়াল পোর্টাল): https://dgbpo.teletalk.com.bd | ডাক অধিদপ্তরের অফিসিয়াল ওয়েবসাইট: https://bdpost.gov.bd
- FAQs: `আবেদনের শেষ তারিখ কবে?` / `কয়টি পদে নিয়োগ দেওয়া হবে?` / `বয়সসীমা কত?` / `আবেদন কোথায় করতে হবে?`

### 5. `chattogram-port-authority-job-circular-2026` | jobs summary + deadline status
- Title: `চট্টগ্রাম বন্দর নিয়োগ 2026: 393 পদ, শেষ তারিখ 8 ডিসেম্বর | Noryvello`
- H1: `চট্টগ্রাম বন্দর কর্তৃপক্ষ (CPA) নিয়োগ 2026`
- DEADLINE-ISO: `2026-12-09T00:00:00+06:00`
- DEADLINE-WORDS: `8 ডিসেম্বর 2026, রাত 12টা`
- Facts (summary table, ONLY these): প্রতিষ্ঠান: চট্টগ্রাম বন্দর কর্তৃপক্ষ (Chattogram Port Authority, CPA), নৌপরিবহন মন্ত্রণালয় | মোট পদ: 393টি, 22 ক্যাটাগরি | বিজ্ঞপ্তি নম্বর: 04/2026 | স্মারক নম্বর: 18.13.0000.181.11.09-2025/334 | বিজ্ঞপ্তি প্রকাশ: 25 অক্টোবর 2026 | আবেদন শুরু: 8 নভেম্বর 2026, সকাল 10টা | আবেদনের শেষ তারিখ: 8 ডিসেম্বর 2026, রাত 12টা | ফি জমা দেওয়ার শেষ তারিখ: 10 ডিসেম্বর 2026 | বয়সসীমা: 18 থেকে 32 বছর (8 ডিসেম্বর 2026 তারিখে).
- Deliver: summary table as above; how-to-apply steps (পোর্টালে সার্কুলার বাছুন → পদ বাছুন → NID যাচাই → ফরম পূরণ → ফি জমা দিন); H2 sections: "ফি জমার শেষ তারিখ আলাদা" (আবেদন শেষ 8 ডিসেম্বর, কিন্তু ফি জমা দেওয়া যাবে 10 ডিসেম্বর পর্যন্ত — ফি না দিলে আবেদন সম্পূর্ণ হয় না) and "আবেদনের আগে যাচাই করুন". Warn box: Noryvello নিয়োগকারী নয়; সব তথ্য অফিসিয়াল বিজ্ঞপ্তি থেকে মিলিয়ে নিন; চাকরির প্রলোভনে কাউকে টাকা দেবেন না.
- Official links: আবেদন করুন (অফিসিয়াল পোর্টাল): https://cpadigital.gov.bd/jobs | বন্দর কর্তৃপক্ষের অফিসিয়াল ওয়েবসাইট: https://www.cpa.gov.bd
- FAQs: `আবেদনের শেষ তারিখ কবে?` / `মোট কয়টি পদে নিয়োগ দেওয়া হবে?` / `ফি জমা দেওয়ার শেষ তারিখ কবে?` / `বয়সসীমা কত?`

---

## ZIP PACKAGING (when all 5 pages are done)
Package the 5 pages into ONE downloadable ZIP named `Noryvello_Jobs_Pilot_5.zip`.
Inside the ZIP: one folder per topic slug, each folder holding that page's
complete `index.html` — exactly 5 folders, exactly 5 files, nothing else.
The folder names must be the slugs exactly as listed in this file. Suraiya
will place them under the bn/ directory at publish time. Do NOT add a bn/
folder inside the ZIP yourself.
Tell the owner the ZIP is ready and that Suraiya will verify every page
before publish.
