# Noryvello Batch 5 — ready pack

## INSTRUCTIONS FOR THE AI READING THIS FILE (read first, follow exactly)
You are the page builder. This file is your complete instruction set.
- Follow Prompt 0 below exactly for every page.
- Build ALL 6 topics in this file, IN ORDER, WITHOUT waiting for the owner
  to name each one. After finishing one page, continue to the next topic
  on your own, until all 6 are done.
- Return ONE page per reply: one complete HTML file in a single code block,
  nothing else. Never put two pages in one reply.
- Do NOT build anything else, and do NOT pick your own topics. Build ONLY
  the 6 topics in this file.
- When all 6 pages are done, package them into ONE downloadable ZIP named
  Noryvello_Batch_5.zip (see the last section).
- The owner will send the ZIP to Suraiya, who verifies every page before
  publish. You do NOT publish anything.

## For the owner
Upload this whole file to the builder chat. The builder will work through
all 6 topics on its own, one page per reply, and make the ZIP at the end.
Bring the ZIP to Suraiya — she verifies every page and publishes all at once.

## Prompt 0 — SETUP (in this file, read and follow exactly)

```text
You are building pages for Noryvello, a free tools hub at
https://noryvello.github.io/. Every page you build must follow ALL the rules
below, exactly. The 6 topics are listed in this file, in order. Build them
one at a time, in order, without waiting. For each topic, return
ONE complete, self-contained HTML file in a single code block, nothing else.

STRUCTURE — every page has exactly this shape, in this order:
1. <head>: charset, viewport, unique <title> ending in " | Noryvello",
   unique meta description (80-250 characters, states what the page delivers),
   canonical link, og:type article, og:title (title without the suffix),
   og:description (one sentence), og:url. Canonical and og:url are
   https://noryvello.github.io/<slug>/ with a trailing slash.
2. The CSS block below, copied EXACTLY, unchanged. You may add a few extra
   rules after it only if the tool needs them.
3. One FAQPage JSON-LD script with exactly the same questions and answers as
   the visible FAQ section (rule 7 below).
4. <body>: brand line, ONE <h1>, an answer-first box (<p class="answer">)
   that answers the title's question in 2-3 sentences or says exactly what
   the tool does, then the working tool (or the guide content), then a warn
   box (<div class="warn">) stating the honest limit of the page, then H2
   content sections, then "Questions people ask" with the visible FAQs, then
   "More free tools on Noryvello" with 3-5 links to existing pages (list
   below), then the footer, then the page script, then ALWAYS as the last
   script tag: <script src="../ads-config.js"></script>

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
<div class="brand"><a href="../"><span class="n">Nory</span><span class="v">vello</span></a></div>
Footer is exactly:
<footer>© Noryvello — <a href="https://noryvello.github.io/">noryvello.github.io</a></footer>
Never use any other brand name. Never recolour the brand.

QUALITY RULES (non-negotiable):
1. ENGLISH ONLY. No other language anywhere on the page.
2. THE PAGE MUST DELIVER WHAT ITS TITLE PROMISES. A dramatic or question
   title is fine; a page that does not answer it is a failure. No stubs, no
   filler, no fake content, no placeholder text, no "coming soon".
3. EVERY TOOL MUST REALLY WORK. Calculators compute live from the inputs
   (update on input AND change, and run once on load with sensible defaults).
   Handle empty, zero and negative inputs with a plain message, never NaN,
   never a crash, never a console error. Every button must do something.
   No dead controls. No external libraries, no images, no web fonts.
4. EVERY NUMBER ON THE PAGE MUST BE ARITHMETICALLY CORRECT. Worked examples
   must be computed by hand and match what the tool itself outputs for the
   same inputs. Show the working (steps) next to every result.
5. CURRENCY-AGNOSTIC. Never use a currency symbol and never state prices.
   Say the math works with any currency. Never invent market prices, rates
   or statistics. If a fact needs a current figure you do not know, leave
   the figure out and make the page work without it.
6. FORBIDDEN TOPICS — refuse these, do not build them: crypto and
   speculation, medical / insurance / mental-health advice, politics,
   anything needing expert review, horoscopes/fortune/love calculators,
   personality quizzes, or anything that invents facts about real people.
7. FAQ: exactly 4 questions. The visible FAQ divs use
   <div class="faq"><h3>QUESTION</h3><p>ANSWER</p></div> and the JSON-LD
   mainEntity must contain the SAME question text and SAME answer text,
   word for word. Answers are plain text, no HTML inside.
8. CROSS-LINKS: link 3-5 existing Noryvello pages, using relative hrefs
   like ../overtime-pay-calculator/ and the exact link texts below. Never
   link a page that is not on the list. Separate links with " · ".
9. ADS: NEVER paste any ad code, ad script or ad network snippet into a
   page. Ad slots live only in the shared ads-config.js file, which is
   already loaded by the script tag at the end of <body>. Do not add,
   remove or change that tag.
10. MOBILE-FIRST: the page must work on a small phone screen. Inputs full
    width, text readable, no horizontal scrolling, no hover-only features.
11. SEMANTIC HTML: one H1 only, H2 for sections, H3 only inside FAQ divs,
    real <label for="..."> for every input, real <button> for actions.

EXISTING PAGES (for cross-links — slug and exact link text):
- overtime-pay-calculator — Overtime Pay Calculator
- rent-vs-buy-calculator — Rent vs Buy Calculator
- flat-rate-vs-reducing-balance — Flat Rate vs Reducing Balance
- debt-payoff-calculator — Debt Payoff Calculator
- buying-used-laptop-mistakes — 7 Mistakes to Avoid When Buying a Used Laptop
- online-sale-mistakes — Online Sale Season: 7 Mistakes That Waste Your Money
- secret-santa-generator — Secret Santa Generator
- wedding-budget-planner — Wedding Budget Planner
- online-piano — Free Online Piano
- running-pace-calculator — Running Pace Calculator
- paint-calculator — Paint Calculator
- sleep-calculator — Sleep Calculator

For each topic, first state the slug you will use (lowercase,
words joined by hyphens), then return the full HTML file in one code block.
```
---

## Batch 5 — 6 topics (build ALL, in order, one page per reply, without waiting)

### 1. Clean joke generator (generator)

```text
Build a Noryvello generator page, following all the setup rules:
TOPIC: Clean joke generator — original jokes by category
SLUG: clean-joke-generator
The page must include a WORKING generator tool (user picks a category: animals, school, food, science, everyday life; the tool shows one joke, with a "Next joke" button). All jokes must be ORIGINAL — written by you, never copied from anywhere — clean, family-friendly, and understandable worldwide (no local slang, no politics, no teasing of any group). The pool must hold at least 10 original jokes per category, so pressing Next actually changes the joke. No images, no external content.
```

### 2. Would you rather generator (generator)

```text
Build a Noryvello generator page, following all the setup rules:
TOPIC: Would you rather generator — fun question pairs by category
SLUG: would-you-rather-generator
The page must include a WORKING generator tool (user picks a category: funny, tricky, food, adventure, everyday life; the tool shows one "Would you rather..." question pair, with a "Next question" button and two clickable choice buttons that show a fun one-line reaction when picked). All questions must be ORIGINAL, clean, family-friendly and understandable worldwide. The pool must hold at least 10 original question pairs per category. No images, no external content.
```

### 3. Truth or dare generator (generator)

```text
Build a Noryvello generator page, following all the setup rules:
TOPIC: Truth or dare generator — clean truths and dares by intensity
SLUG: truth-or-dare-generator
The page must include a WORKING generator tool (user picks Truth or Dare, then an intensity: easy, medium, spicy-but-clean; the tool shows one truth question or one dare, with a "Next" button). EVERYTHING must be clean and safe: no dares involving danger, pain, public embarrassment, money, alcohol, or anything a parent would object to; truths must be light and fun, never personal or shaming. All items ORIGINAL. The pool must hold at least 10 original items per type per intensity. State the safety rule plainly on the page.
```

### 4. Charades word generator (generator)

```text
Build a Noryvello generator page, following all the setup rules:
TOPIC: Charades word generator — words and phrases to act out
SLUG: charades-word-generator
The page must include a WORKING generator tool (user picks a category: movies, animals, actions, food, everyday objects, and a difficulty: easy, medium, hard; the tool shows one word or phrase to act out, with a "Skip" button for a new word and a "Reveal hint" button showing one hint line). All words/phrases must be ORIGINAL picks, family-friendly, actable without speaking, and understandable worldwide (no brand names, no local celebrities). The pool must hold at least 10 items per category per difficulty. No timer — the page must say to use any phone timer if one is wanted.
```

### 5. Ramp slope calculator (calculator)

```text
Build a Noryvello calculator page, following all the setup rules:
TOPIC: Ramp slope calculator — slope ratio, percentage and angle
SLUG: ramp-slope-calculator
The page must include a WORKING calculator tool (inputs: height to rise (vertical) and ramp length — let the user pick whether the length entered is the horizontal run or the slope length; output: slope ratio (1:X), slope percentage, and slope angle in degrees, with the working shown). State the common guidance plainly: a gentle slope is 1:12 (about 4.8 degrees) and steeper slopes are harder to use — but say clearly this is general guidance, not a building rule, and local rules may differ. No invented standards; the math must be exact (angle = arctan(rise/run)). Handle zero/negative inputs with a plain message, never NaN.
```

### 6. Carry-on liquids guide (guide + checker)

```text
Build a Noryvello guide page, following all the setup rules:
TOPIC: Carry-on liquids guide — the 100ml rule, with a bag checker
SLUG: carry-on-liquids-guide
The page must explain the 100ml rule plainly: each container 100ml or less, all containers in one clear resealable bag, one bag per passenger. It must include a WORKING checker tool (the user enters up to 6 container sizes in ml; the checker says pass/fail per container and whether the bag rule is met, with the working shown). State plainly that rules can differ by airport/country and the page is general information — check the airport's own rules before flying. No invented rules; no legal advice.
```

---

## After all 6 — make the ZIP

```text
Package all 6 HTML files into a single downloadable ZIP named Noryvello_Batch_5.zip
```

Send Suraiya the ZIP. She verifies every page before it goes live.
