# Noryvello Bangla Pilot — 10 pages ready pack (first non-English wave)

## INSTRUCTIONS FOR THE AI READING THIS FILE (read first, follow exactly)
You are the page builder. This file is your complete instruction set.
- Follow Prompt 0-BN below exactly for every page.
- Build ALL 10 topics in this file, IN ORDER, WITHOUT waiting for the owner
  to name each one. After finishing one page, continue to the next topic
  on your own, until all 10 are done.
- Return ONE page per reply: one complete HTML file in a single code block,
  nothing else. Never put two pages in one reply.
- Do NOT build anything else, and do NOT pick your own topics. Build ONLY
  the 10 topics in this file.
- If the session stops before all 10 are done, continue from the next
  unbuilt topic when the owner says "continue" — never rebuild a page
  already delivered.
- When all 10 pages are done, package them into ONE downloadable ZIP named
  Noryvello_Bangla_Pilot_10.zip (see the last section).
- The owner will send the ZIP to Suraiya, who verifies every page before
  publish. You do NOT publish anything. You do NOT touch the English pages.

## For the owner
Upload this whole file to the builder chat. The builder will work through
all 10 topics on its own, one page per reply, and make the ZIP at the end.
Bring the ZIP to Suraiya — she verifies every page and publishes all at once.

## Prompt 0-BN — SETUP (in this file, read and follow exactly)

```text
You are building BANGLA pages for Noryvello, a free tools hub at
https://noryvello.github.io/. These pages live under /bn/ — for example
https://noryvello.github.io/bn/ramadan-countdown/. Every page you build must
follow ALL the rules below, exactly. The 10 topics are listed in this file,
in order. Build them one at a time, in order, without waiting. For each
topic, return ONE complete, self-contained HTML file in a single code block,
nothing else.

LANGUAGE — the whole page is in BANGLA (Bangla script), except:
- the brand name "Noryvello" (Latin letters, two-tone spans, never translated),
- URLs and slugs (ASCII, exactly as given in each spec),
- NUMBERS: use Western digits 0-9 in every input, result and calculation, so
  the tools work. Bangla prose may use Bangla words for numbers, but every
  number the tool reads or shows must be 0-9 digits.
- <html lang="bn">. og:locale is bn_BD. The JSON-LD carries "inLanguage":"bn".

STRUCTURE — every page has exactly this shape, in this order:
1. <head>: charset, viewport, unique <title> ending in " | Noryvello",
   unique meta description in Bangla (80-250 characters, states what the page
   delivers), canonical link, og:type article, og:locale bn_BD, og:title
   (title without the suffix), og:description (one sentence, Bangla), og:url.
   Canonical and og:url are https://noryvello.github.io/bn/<slug>/ with a
   trailing slash. Hreflang links per rule 9 below.
2. The CSS block below, copied EXACTLY, unchanged. You may add a few extra
   rules after it only if the tool needs them.
3. One FAQPage JSON-LD script with exactly the same questions and answers as
   the visible FAQ section (rule 7 below), plus "inLanguage":"bn".
4. <body>: brand line, ONE <h1> (Bangla), an answer-first box
   (<p class="answer">) in Bangla that answers the title's question in 2-3
   sentences or says exactly what the tool does, then the working tool (or
   the guide content), then a warn box (<div class="warn">) in Bangla stating
   the honest limit of the page, then H2 content sections, then "প্রশ্নোত্তর"
   with the visible FAQs, then "Noryvello-তে আরও ফ্রি টুল" with 3-5 links
   (rule 8 below), then the AD ZONE block below copied EXACTLY, then the
   footer, then the page script, then ALWAYS as the last script tag:
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
   on the page. Write natural, correct, everyday Bangla — the kind a
   Bangladeshi reader reads without effort. Never mix English words where a
   plain Bangla word exists. Tool labels, buttons, results and error
   messages are all in Bangla.
2. THE PAGE MUST DELIVER WHAT ITS TITLE PROMISES. No stubs, no filler, no
   fake content, no placeholder text, no "coming soon".
3. EVERY TOOL MUST REALLY WORK. Calculators compute live from the inputs
   (update on input AND change, and run once on load with sensible defaults).
   Handle empty, zero and negative inputs with a plain Bangla message, never
   NaN, never a crash, never a console error. Every button must do something.
   No dead controls. No external libraries, no images, no web fonts.
   Generators must use real content banks of the minimum sizes stated in
   each topic spec — never fewer, never repeated filler lines.
   Checklists show a live progress counter. Countdowns tick every second
   and handle the date passing with a plain message.
4. EVERY NUMBER ON THE PAGE MUST BE ARITHMETICALLY CORRECT. Worked examples
   must be computed by hand and match what the tool itself outputs for the
   same inputs. Show the working (steps) next to every result.
5. CURRENCY-AGNOSTIC. Never use a currency symbol and never state prices.
   Never invent market prices, rates or statistics. If a fact needs a
   current figure you do not know, leave the figure out and make the page
   work without it.
6. FORBIDDEN TOPICS — refuse these, do not build them: crypto and
   speculation, medical / insurance / mental-health advice, politics,
   anything needing expert review, horoscopes/fortune/love calculators,
   personality quizzes, or anything that invents facts about real people.
   Never invent Bangla name meanings, dates, or official facts.
7. FAQ: exactly 4 questions, all in Bangla. The visible FAQ divs use
   <div class="faq"><h3>QUESTION</h3><p>ANSWER</p></div> and the JSON-LD
   mainEntity must contain the SAME question text and SAME answer text,
   word for word. Answers are plain text, no HTML inside. Use the 4
   questions given in each topic spec.
8. CROSS-LINKS: link 3-5 pages. At least 2 must be Bangla sibling pages
   from this pack (href ../<slug>/, link text = that page's Bangla title
   from this file). The rest may be English pages from the list below
   (href ../../<slug>/, exact English link texts below). Never link a page
   that is not on one of these lists. Separate links with " · ".
9. HREFLANG: topics 1-5 are Bangla versions of existing English pages, so
   each carries THREE hreflang links in <head>: hreflang="bn" pointing at
   its own /bn/<slug>/ URL, hreflang="en" pointing at the English twin
   https://noryvello.github.io/<slug>/, and hreflang="x-default" pointing
   at the English twin. Topics 6-10 have no English twin: each carries ONE
   hreflang link, hreflang="bn" pointing at its own /bn/<slug>/ URL. Do NOT
   edit any English page — Suraiya adds the return links at publish time.
10. ADS: paste ONLY the AD ZONE block above, exactly as given, directly
    before <footer>. NEVER paste any other ad code, ad script or ad network
    snippet into a page. Do not add, remove or change the ads-config.js tag.
11. MOBILE-FIRST: the page must work on a small phone screen. Inputs full
    width, text readable, no horizontal scrolling, no hover-only features.
12. SEMANTIC HTML: one H1 only, H2 for sections, H3 only inside FAQ divs,
    real <label> elements on every input and select.
13. DATES AND FACTS: use ONLY the dates and facts stated in the topic spec.
    If you cannot verify a fact from the spec, leave it out rather than
    guessing. Never invent fixtures, statistics or official lists.
14. NO EXTERNAL LINKS in the page body. The only outside URLs allowed are
    the canonical link, the og:url, the hreflang links and the footer link.

ENGLISH CROSS-LINK LIST (exact hrefs and link texts; use ../../ in hrefs):
- ../../overtime-pay-calculator/ — "Overtime Pay Calculator — Regular + Overtime Pay, Worked Out"
- ../../rent-vs-buy-calculator/ — "Rent vs Buy Calculator — Which Costs Less Over the Years You Stay?"
- ../../flat-rate-vs-reducing-balance/ — "Flat Rate vs Reducing Balance — Which Loan Really Costs Less?"
- ../../debt-payoff-calculator/ — "Debt Payoff Calculator — When Will You Be Debt-Free?"
- ../../buying-used-laptop-mistakes/ — "7 Mistakes to Avoid When Buying a Used Laptop"
- ../../online-sale-mistakes/ — "Online Sale Season: 7 Mistakes That Waste Your Money"
- ../../secret-santa-generator/ — "Secret Santa Generator — Fair Draws, No One Picks Themselves"
- ../../wedding-budget-planner/ — "Wedding Budget Planner — Split Your Budget Before You Spend It"
- ../../online-piano/ — "Free Online Piano — Play With Your Keyboard or Fingers"
- ../../running-pace-calculator/ — "Running Pace Calculator — Pace, Finish Time and Race Predictor"
- ../../paint-calculator/ — "Paint Calculator — How Much Paint Do I Need for a Room?"
- ../../sleep-calculator/ — "Sleep Calculator — Bedtime and Wake-Up Time Calculator"
- ../../led-vs-incandescent-running-cost/ — "LED vs Incandescent Running Cost Calculator"
- ../../rent-a-car-vs-taxis/ — "Rent a Car vs Taxis Calculator"
- ../../buy-vs-rent-formal-dress-suit/ — "Buy vs Rent a Formal Dress or Suit Calculator"
- ../../hand-wash-vs-dishwasher-water-use/ — "Hand Wash vs Dishwasher Water Use Calculator"
- ../../ramadan-countdown/ — "Ramadan Countdown 2027"
- ../../gift-idea-generator-by-budget-and-person/ — "Gift Idea Generator by Budget and Person"
- ../../clean-joke-generator/ — "Clean Joke Generator"
- ../../would-you-rather-generator/ — "Would You Rather Generator"
- ../../truth-or-dare-generator/ — "Truth or Dare Generator"
- ../../charades-word-generator/ — "Charades Word Generator"
- ../../ramp-slope-calculator/ — "Ramp Slope Calculator"
- ../../carry-on-liquids-guide/ — "Carry-on Liquids Guide"
```

---

## TOPICS 1–5 — BANGLA VERSIONS OF EXISTING ENGLISH PAGES (hreflang pairs)

### 1. `ramadan-countdown` | seasonal countdown — Bangla version of /ramadan-countdown/
- Title: `রমজান কাউন্টডাউন ২০২৭: প্রথম রোজা পর্যন্ত আর কত দিন | Noryvello`
- H1: `রমজান কাউন্টডাউন ২০২৭`
- Deliver: live countdown (days/hours/minutes/seconds, ticks every second) to the EXPECTED first fast, Monday 8 February 2027, with the first taraweeh on the evening of Sunday 7 February. Moon-sighting caveat in Bangla in the warn box AND under the countdown: the date may move by one day, and Bangladesh often starts on Tuesday 9 February; the final date follows the moon sighting. Short plain Bangla section: what Ramadan is, in 2–3 sentences. All numbers shown in 0-9 digits.
- FAQs: `২০২৭ সালে প্রথম রোজা কবে?` / `রমজানের তারিখ কি বদলাতে পারে?` / `প্রথম তারাবি কবে?` / `রমজান মাস কী?`

### 2. `sleep-calculator` | calculator — Bangla version of /sleep-calculator/
- Title: `ঘুমের হিসাব: কখন ঘুমাতে যাবেন, কখন উঠবেন | Noryvello`
- H1: `ঘুমের হিসাব`
- Deliver: the same sleep-cycle calculator as the English twin, fully in Bangla: the visitor picks a wake-up time and gets bedtimes in 90-minute sleep cycles (counting back, allowing 15 minutes to fall asleep), or picks a bedtime and gets wake-up times. Show the working (cycles × 90 minutes + 15 minutes). General information only: the warn box says sleep needs vary and persistent sleep problems should be discussed with a doctor.
- FAQs: `ঘুমের চক্র কত মিনিটের?` / `ঘুমাতে যেতে কত সময় ধরা হয়?` / `একজন প্রাপ্তবয়স্কের কত ঘণ্টা ঘুম দরকার?` / `ঘুমের হিসাব কি সবার জন্য এক?`

### 3. `paint-calculator` | calculator — Bangla version of /paint-calculator/
- Title: `রংয়ের হিসাব: দেয়ালের জন্য কত লিটার রং লাগবে | Noryvello`
- H1: `রংয়ের হিসাব`
- Deliver: the same paint calculator as the English twin, fully in Bangla: wall dimensions and number of coats → paint needed in litres, with doors and windows subtracted. Show the working. One coat coverage: state the standard assumption used (10 square metres per litre per coat) plainly in Bangla, and that real coverage varies by surface and paint.
- FAQs: `এক লিটার রংয়ে কতটুকু দেয়াল হয়?` / `কয় কোট রং দিতে হয়?` / `দরজা-জানালার জায়গা কি বাদ দিতে হয়?` / `রং কেনার সময় কতটুকু বেশি কিনবো?`

### 4. `pizza-order-calculator` | calculator — Bangla version of /pizza-order-calculator/
- Title: `পিৎজার হিসাব: কয়জনের জন্য কয়টা পিৎজা লাগবে | Noryvello`
- H1: `পিৎজার হিসাব`
- Deliver: the same pizza calculator as the English twin, fully in Bangla: number of guests + appetite level (light, normal, hungry) → pizzas to order, using slices per pizza by size (small 6, medium 8, large 10 slices) and slices per person by appetite (2, 3, 4). Show the working. Round up — never order a fraction of a pizza.
- FAQs: `একজন মানুষ গড়ে কয় স্লাইস খায়?` / `বড় পিৎজায় কয় স্লাইস থাকে?` / `বাচ্চাদের জন্য হিসাব কি আলাদা?` / `পিৎজা কি একটু বেশি অর্ডার করা ভালো?`

### 5. `gift-idea-generator-by-budget-and-person` | generator — Bangla version of /gift-idea-generator-by-budget-and-person/
- Title: `উপহারের আইডিয়া: বাজেট ও মানুষ অনুযায়ী | Noryvello`
- H1: `উপহারের আইডিয়া জেনারেটর`
- Deliver: the same gift-idea generator as the English twin, fully in Bangla: the visitor picks a person (mother, father, friend, partner, child, colleague) and a budget band (low, medium, high — NO amounts, NO currency symbols) and gets 8 gift ideas. Minimum 8 ideas for every person × band combination (6 persons × 3 bands × 8 = 144 ideas), all in Bangla, all realistic and buyable or makable, no duplicates across combinations.
- FAQs: `কম বাজেটে ভালো উপহার কী হতে পারে?` / `বন্ধুর জন্য কী উপহার ভালো?` / `উপহারে কি কার্ড দেওয়া উচিত?` / `কাউকে জিজ্ঞেস না করে উপহার কেনা কি ঠিক?`

---

## TOPICS 6–10 — BANGLA-FIRST PAGES (no English twin; hreflang bn self only)

### 6. `ssc-gpa-calculator` | calculator
- Title: `এসএসসি জিপিএ ক্যালকুলেটর: বাংলাদেশ বোর্ডের গ্রেডিং অনুযায়ী | Noryvello`
- H1: `এসএসসি জিপিএ ক্যালকুলেটর`
- Deliver: the visitor enters grade points for each subject (using the Bangladesh education board grading table: 80+ = A+ = 5.00, 70–79 = A = 4.00, 60–69 = A− = 3.50, 50–59 = B = 3.00, 40–49 = C = 2.00, 33–39 = D = 1.00, below 33 = F = 0.00) and marks ONE subject as the optional (4th) subject if any. The tool applies the standard published rule: the optional subject adds ONLY its grade points above 2.00 to the total, and the divisor is the number of subjects EXCLUDING the optional subject. Show the full working: each subject's points, the optional-subject adjustment, the total, the divisor, and the final GPA rounded to 2 decimals. The warn box must say grading rules come from the education boards and the visitor should verify against their own board's published rules. Handle F (fail) plainly: if any subject is F, say the overall result is fail and do not show a passing GPA.
- FAQs: `জিপিএ ৫.০০ মানে কী?` / `ঐচ্ছিক (৪র্থ) বিষয়ের পয়েন্ট কিভাবে ধরা হয়?` / `কোনো বিষয়ে F পেলে জিপিএ কত হয়?` / `এসএসসিতে মোট কয়টি বিষয় ধরা হয়?`

### 7. `baby-name-generator` | generator — Bangla names bank
- Title: `বাংলা শিশুর নাম: অর্থসহ সুন্দর নামের আইডিয়া | Noryvello`
- H1: `বাংলা শিশুর নাম জেনারেটর`
- Deliver: the visitor picks boy or girl and a starting letter (at least 8 letters offered) and gets name ideas WITH meanings, all in Bangla script. Minimum 10 names per letter per gender offered (at least 160 names total). Every meaning must be a REAL, established meaning of that name — NEVER invent a meaning; if you are unsure of a name's meaning, leave that name out. The warn box says meanings come from common usage and may vary.
- FAQs: `শিশুর নাম বাছার সময় কী খেয়াল রাখবো?` / `নামের অর্থ কি সবসময় এক হয়?` / `একই নাম ছেলে ও মেয়ে দুজনের হতে পারে?` / `কতগুলো নাম দেখতে পাবো?`

### 8. `pohela-boishakh-countdown` | seasonal countdown
- Title: `পহেলা বৈশাখ কাউন্টডাউন ২০২৭: ১৪ এপ্রিল পর্যন্ত আর কত দিন | Noryvello`
- H1: `পহেলা বৈশাখ কাউন্টডাউন ২০২৭`
- Deliver: live countdown (days/hours/minutes/seconds, ticks every second) to 14 April 2027, the fixed date of Pohela Boishakh in Bangladesh. Short plain Bangla sections: what Pohela Boishakh is (the first day of the Bangla year, the month of Boishakh), and the Mangal Shobhajatra procession (recognised by UNESCO as cultural heritage). No invented details, no event listings, no times or venues.
- FAQs: `পহেলা বৈশাখ ২০২৭ কবে?` / `পহেলা বৈশাখ কী?` / `মঙ্গল শোভাযাত্রা কী?` / `বাংলা নববর্ষের তারিখ কি প্রতি বছর এক থাকে?`

### 9. `bangladesh-electricity-bill-guide` | guide
- Title: `বিদ্যুৎ বিল পড়ার গাইড: বাংলাদেশের বিলের প্রতিটি লাইন বুঝুন | Noryvello`
- H1: `বাংলাদেশের বিদ্যুৎ বিল পড়ার গাইড`
- Deliver: a picker — the visitor picks a line/section of a Bangladesh electricity bill (consumer number, meter number, present reading, previous reading, units consumed, demand charge, service charge, VAT, total, due date, and more — at least 10 sections) and gets a plain Bangla explanation of what it means and where to find it on the bill. NO tariff figures, NO rates, NO amounts anywhere — explain structure only. The warn box says tariffs and charges change from time to time and the bill itself is the final source.
- FAQs: `বিলে ইউনিট মানে কী?` / `মিটারের রিডিং কিভাবে পড়বো?` / `ডিমান্ড চার্জ কী?` / `বিলে ভুল থাকলে কী করবো?`

### 10. `riddle-generator` | generator — বাংলা ধাঁধা
- Title: `বাংলা ধাঁধা জেনারেটর: মজার ধাঁধা ও উত্তর | Noryvello`
- H1: `বাংলা ধাঁধা জেনারেটর`
- Deliver: the visitor picks a difficulty — সহজ, মাঝারি, কঠিন — and gets a Bangla ধাঁধা (riddle) with a reveal-answer button. Minimum 15 original or traditional ধাঁধা per level (45 total), all in Bangla script, all clean and family-friendly, with no repeats within a session until the bank is exhausted. Traditional ধাঁধা are welcome; write each one fully and correctly, with its real answer.
- FAQs: `ধাঁধা কাদের জন্য?` / `ধাঁধা কি পার্টিতে ব্যবহার করা যায়?` / `নিজে ধাঁধা বানাবো কিভাবে?` / `ধাঁধার উত্তর কি দেওয়া থাকে?`

---

## ZIP PACKAGING (when all 10 pages are done)
Package the 10 pages into ONE downloadable ZIP named `Noryvello_Bangla_Pilot_10.zip`.
Inside the ZIP: one folder per topic slug, each folder holding that page's
complete `index.html` — exactly 10 folders, exactly 10 files, nothing else.
The folder names must be the slugs exactly as listed in this file. Suraiya
will place them under the bn/ directory at publish time. Do NOT add a bn/
folder inside the ZIP yourself.
Tell the owner the ZIP is ready and that Suraiya will verify every page
before publish.
