# Noryvello Remaining 26 — ready pack

## INSTRUCTIONS FOR THE AI READING THIS FILE (read first, follow exactly)
You are the page builder. This file is your complete instruction set.
- Follow Prompt 0 below exactly for every page.
- Build ALL 26 topics in this file, IN ORDER, WITHOUT waiting for the owner
  to name each one. After finishing one page, continue to the next topic
  on your own, until all 26 are done.
- Return ONE page per reply: one complete HTML file in a single code block,
  nothing else. Never put two pages in one reply.
- Do NOT build anything else, and do NOT pick your own topics. Build ONLY
  the 26 topics in this file.
- If the session stops before all 26 are done, continue from the next
  unbuilt topic when the owner says "continue" — never rebuild a page
  already delivered.
- When all 26 pages are done, package them into ONE downloadable ZIP named
  Noryvello_Remaining_26.zip (see the last section).
- The owner will send the ZIP to Suraiya, who verifies every page before
  publish. You do NOT publish anything.

## For the owner
Upload this whole file to the builder chat. The builder will work through
all 26 topics on its own, one page per reply, and make the ZIP at the end.
Bring the ZIP to Suraiya — she verifies every page and publishes all at once.

## Prompt 0 — SETUP (in this file, read and follow exactly)

```text
You are building pages for Noryvello, a free tools hub at
https://noryvello.github.io/. Every page you build must follow ALL the rules
below, exactly. The 26 topics are listed in this file, in order. Build them
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

## Remaining 26 — build ALL, in order, one page per reply, without waiting

### 1. Visa document checklist (generator)

```text
Build a Noryvello generator page, following all the setup rules:
TOPIC: Visa document checklist — documents by trip type
SLUG: visa-document-checklist
The page must include a WORKING checklist tool (user picks a trip type: tourist visit, family visit, study, work, medical, pilgrimage; the tool shows a tick-off document checklist with a progress counter). Every checklist must carry a warn box: requirements differ by country and embassy — check the embassy's own official list; general information only, no legal or visa advice. No invented embassy rules.
```

### 2. Hiking time calculator (calculator)

```text
Build a Noryvello calculator page, following all the setup rules:
TOPIC: Hiking time calculator — walking time by Naismith's rule
SLUG: hiking-time-calculator
The page must include a WORKING calculator tool (inputs: distance and elevation gain; output: estimated walking time by Naismith's rule — 5 km per hour plus 1 hour per 600 m of ascent — with the working shown). State the rule plainly and say it is an estimate for average fitness on decent paths. Handle empty/zero inputs with a plain message, never NaN.
```

### 3. Braking distance calculator (calculator)

```text
Build a Noryvello calculator page, following all the setup rules:
TOPIC: Braking distance calculator — stopping distance by speed and road condition
SLUG: braking-distance-calculator
The page must include a WORKING calculator tool (inputs: speed and road condition — dry, wet, icy; output: thinking distance + braking distance + total stopping distance, with the working shown). Show the formula used and state plainly that braking distance grows with the square of speed. Say clearly it is an estimate for general education — real distances vary by vehicle, tires and driver. No invented official figures.
```

### 4. Job scam spotting guide (guide)

```text
Build a Noryvello guide page, following all the setup rules:
TOPIC: Job scam spotting guide — red flags and a scam check
SLUG: job-scam-spotting-guide
The page must list 7+ red flags of job scams (upfront fees, too-good pay, no interview, personal documents requested early, unofficial email or chat-only contact, pressure to decide fast, vague job description) and include a WORKING scam-check questionnaire (yes/no questions leading to a plain risk verdict). Plain advice: never pay for a job; verify the company independently. General education only, no legal advice.
```

### 5. Decision helper (calculator)

```text
Build a Noryvello calculator page, following all the setup rules:
TOPIC: Decision helper — weighted scoring for hard choices
SLUG: decision-helper-weighted
The page must include a WORKING decision tool (user names up to 3 options and up to 4 criteria, sets a weight per criterion, scores each option per criterion; the tool shows weighted totals and a ranked recommendation, with the working shown). All names, weights and scores editable. Handle empty inputs with a plain message, never NaN.
```

### 6. Dice probability calculator (calculator)

```text
Build a Noryvello calculator page, following all the setup rules:
TOPIC: Dice probability calculator — exact odds for any roll
SLUG: dice-probability-calculator
The page must include a WORKING calculator tool (inputs: number of dice 1-6, sides per die 4/6/8/10/12/20, target total; output: the EXACT probability of rolling that total, computed by counting combinations — never by simulation — plus the probability of rolling at least the target, with the working shown). The math must be exact. Handle impossible targets with a plain message.
```

### 7. Guitar chord finder (generator)

```text
Build a Noryvello generator page, following all the setup rules:
TOPIC: Guitar chord finder — fingering diagrams for every chord
SLUG: guitar-chord-finder
The page must include a WORKING finder tool (user picks a chord: all 12 roots × major, minor and 7th; the tool draws a fingering diagram with HTML/CSS only — 6 strings, frets, finger dots, open/muted marks — plus the chord name and which fingers to use). No images. Standard beginner open-position fingerings only; state plainly these are standard beginner fingerings.
```

### 8. Speaking time calculator (calculator)

```text
Build a Noryvello calculator page, following all the setup rules:
TOPIC: Speaking time calculator — how long a speech takes
SLUG: speaking-time-calculator
The page must include a WORKING calculator tool (inputs: word count and speaking pace — slow, average, fast, with the words-per-minute of each shown, plus a custom pace box; output: duration in minutes and seconds, with the working shown). State that paces are typical ranges. Handle empty/zero inputs with a plain message, never NaN.
```

### 9. File transfer time calculator (calculator)

```text
Build a Noryvello calculator page, following all the setup rules:
TOPIC: File transfer time calculator — download and upload time
SLUG: file-transfer-time-calculator
The page must include a WORKING calculator tool (inputs: file size with MB/GB unit picker, and connection speed in Mbps; output: transfer time, with the working shown). Explain MB vs Mb plainly (bytes vs bits) on the page. Handle empty/zero inputs with a plain message, never NaN.
```

### 10. Data usage calculator (calculator)

```text
Build a Noryvello calculator page, following all the setup rules:
TOPIC: Data usage calculator — monthly mobile and home data
SLUG: data-usage-calculator
The page must include a WORKING calculator tool (inputs: daily hours for streaming by quality — SD, HD, 4K — plus gaming, browsing/social and video calls; output: monthly data estimate, with the working shown). The per-hour rates must be clearly labelled as typical rates the user can edit. State plainly that rates vary — edit them to match reality. No invented carrier figures presented as fact.
```

### 11. Charging time calculator (calculator)

```text
Build a Noryvello calculator page, following all the setup rules:
TOPIC: Charging time calculator — how long a battery takes to charge
SLUG: charging-time-calculator
The page must include a WORKING calculator tool (inputs: battery capacity in mAh or Wh, and charger power in watts; output: estimated charging time, with the working shown). Show an efficiency factor the user can edit, and state plainly it is an estimate — real charging slows near full. Handle empty/zero inputs with a plain message, never NaN.
```

### 12. Battery backup time calculator (calculator)

```text
Build a Noryvello calculator page, following all the setup rules:
TOPIC: Battery backup time calculator — runtime from capacity and load
SLUG: battery-backup-time-calculator
The page must include a WORKING calculator tool (inputs: battery capacity in mAh or Wh, and load in watts; output: estimated runtime, with the working shown). Show an efficiency factor the user can edit, and state plainly it is an estimate. Usable for power banks and UPS units. Handle empty/zero inputs with a plain message, never NaN.
```

### 13. Filament cost calculator (calculator)

```text
Build a Noryvello calculator page, following all the setup rules:
TOPIC: Filament cost calculator — 3D print material cost
SLUG: filament-cost-calculator
The page must include a WORKING calculator tool (inputs: print weight in grams and filament price per kg entered by the user; output: material cost, with the working shown). Currency-agnostic: no currency symbol anywhere; say the math works with any currency. Handle empty/zero inputs with a plain message, never NaN.
```

### 14. Fabric needed calculator (calculator)

```text
Build a Noryvello calculator page, following all the setup rules:
TOPIC: Fabric needed calculator — fabric length for a sewing project
SLUG: fabric-needed-calculator
The page must include a WORKING calculator tool (inputs: project width and length, fabric width, seam and hem allowance; output: fabric length to buy, with the working shown). State plainly to round up and buy a little extra. Handle empty/zero inputs with a plain message, never NaN.
```

### 15. Moving boxes calculator (calculator)

```text
Build a Noryvello calculator page, following all the setup rules:
TOPIC: Moving boxes calculator — boxes and tape for a move
SLUG: moving-boxes-calculator
The page must include a WORKING calculator tool (inputs: rooms by type and clutter level; output: box count by size plus tape rolls, with the working shown). State plainly it is a planning estimate. Handle empty inputs with a plain message, never NaN.
```

### 16. Storage unit size finder (calculator)

```text
Build a Noryvello calculator page, following all the setup rules:
TOPIC: Storage unit size finder — what size unit fits your things
SLUG: storage-unit-size-finder
The page must include a WORKING finder tool (user ticks items — sofa, bed, boxes and more; the tool shows total volume and a suggested unit size range, with the working shown). State plainly that unit sizes vary by facility — check theirs. Handle no items picked with a plain message.
```

### 17. Rainwater harvest calculator (calculator)

```text
Build a Noryvello calculator page, following all the setup rules:
TOPIC: Rainwater harvest calculator — litres from roof and rainfall
SLUG: rainwater-harvest-calculator
The page must include a WORKING calculator tool (inputs: roof area, rainfall in mm, collection efficiency; output: litres collectable, with the working shown). Show the formula plainly: 1 mm of rain over 1 square metre gives 1 litre. State it is an estimate; efficiency editable. Handle empty/zero inputs with a plain message, never NaN.
```

### 18. Wall anchor chooser (generator)

```text
Build a Noryvello generator page, following all the setup rules:
TOPIC: Wall anchor chooser — the right anchor for the wall and load
SLUG: wall-anchor-chooser
The page must include a WORKING chooser tool (user picks wall type — plasterboard, brick, concrete, wood — and load weight; the tool suggests an anchor type with a plain explanation). Warn box: heavy loads and overhead fixing need a professional. General guidance only, no guarantee.
```

### 19. Screw vs nail guide (guide)

```text
Build a Noryvello guide page, following all the setup rules:
TOPIC: Screw vs nail — which fastener for which job
SLUG: screw-vs-nail-guide
The page must explain when to use screws and when to use nails in plain language, and include a WORKING picker tool (user picks a job type; the tool says screw or nail and why). No invented standards. General guidance only.
```

### 20. Drill bit chooser (generator)

```text
Build a Noryvello generator page, following all the setup rules:
TOPIC: Drill bit chooser — the right bit for the material
SLUG: drill-bit-chooser
The page must include a WORKING chooser tool (user picks material — wood, metal, masonry, tile, plastic — and hole size; the tool suggests a bit type with plain tips). Warn box: wear safety gear and check for pipes and cables before drilling. General guidance only.
```

### 21. Rug size finder (calculator)

```text
Build a Noryvello calculator page, following all the setup rules:
TOPIC: Rug size finder — the right rug for the room
SLUG: rug-size-finder
The page must include a WORKING finder tool (inputs: room size and furniture layout — rug under front legs only, under all legs, or floating; output: suggested rug size, with the working shown). General guidance only; state that personal taste matters.
```

### 22. TV size and viewing distance calculator (calculator)

```text
Build a Noryvello calculator page, following all the setup rules:
TOPIC: TV size calculator — screen size from viewing distance
SLUG: tv-size-viewing-distance-calculator
The page must include a WORKING calculator tool (input: viewing distance; output: recommended screen-size range in inches, with the working shown, using common viewing-angle guidance stated plainly on the page). State it is general guidance and personal preference matters. Handle empty/zero inputs with a plain message, never NaN.
```

### 23. Tea steeping guide (guide)

```text
Build a Noryvello guide page, following all the setup rules:
TOPIC: Tea steeping guide — time and temperature by tea type
SLUG: tea-steeping-guide
The page must include a WORKING picker tool (user picks a tea type — black, green, white, oolong, herbal; the tool shows steeping time, water temperature and plain steps). State plainly the ranges are typical and taste adjusts them. No health claims of any kind.
```

### 24. Compost ratio guide (guide)

```text
Build a Noryvello guide page, following all the setup rules:
TOPIC: Compost ratio guide — green and brown mix, with a mix calculator
SLUG: compost-ratio-guide
The page must explain greens and browns in plain language and include a WORKING mix calculator (user enters greens amount; the tool shows browns needed for common ratios, with the working shown). Label the standard 1:2 and 1:3 guidance as typical. No invented science.
```

### 25. Pet choosing guide (guide)

```text
Build a Noryvello guide page, following all the setup rules:
TOPIC: Pet choosing guide — which pet fits your life
SLUG: pet-choosing-guide
The page must include a WORKING matcher tool (questionnaire: time, space, budget, allergies, experience; the tool suggests matched pet types with honest trade-offs for each). State plainly: general guidance only — research and vet advice before deciding. No vet or medical advice of any kind.
```

### 26. Craft fair checklist (guide)

```text
Build a Noryvello guide page, following all the setup rules:
TOPIC: Craft fair checklist — first stall, fully prepared
SLUG: craft-fair-checklist
The page must include a WORKING tick-off checklist tool with a progress counter, covering: stock, display, pricing, payments, packing, transport and promotion — plain practical items for a first craft-fair stall. No invented fees or rules.
```

---

## After all 26 — make the ZIP

```text
Package all 26 HTML files into a single downloadable ZIP named Noryvello_Remaining_26.zip
```

Send Suraiya the ZIP. She verifies every page before it goes live.
