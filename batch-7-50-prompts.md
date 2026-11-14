# Noryvello Batch 7 — 50 pages ready pack

## INSTRUCTIONS FOR THE AI READING THIS FILE (read first, follow exactly)
You are the page builder. This file is your complete instruction set.
- Follow Prompt 0 below exactly for every page.
- Build ALL 50 topics in this file, IN ORDER, WITHOUT waiting for the owner
  to name each one. After finishing one page, continue to the next topic
  on your own, until all 50 are done.
- Return ONE page per reply: one complete HTML file in a single code block,
  nothing else. Never put two pages in one reply.
- Do NOT build anything else, and do NOT pick your own topics. Build ONLY
  the 50 topics in this file.
- If the session stops before all 50 are done, continue from the next
  unbuilt topic when the owner says "continue" — never rebuild a page
  already delivered.
- When all 50 pages are done, package them into ONE downloadable ZIP named
  Noryvello_Batch_7_50.zip (see the last section).
- The owner will send the ZIP to Suraiya, who verifies every page before
  publish. You do NOT publish anything.

## For the owner
Upload this whole file to the builder chat. The builder will work through
all 50 topics on its own, one page per reply, and make the ZIP at the end.
Bring the ZIP to Suraiya — she verifies every page and publishes all at once.

## Prompt 0 — SETUP (in this file, read and follow exactly)

```text
You are building pages for Noryvello, a free tools hub at
https://noryvello.github.io/. Every page you build must follow ALL the rules
below, exactly. The 50 topics are listed in this file, in order. Build them
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
   below), then the AD ZONE block below copied EXACTLY, then the footer,
   then the page script, then ALWAYS as the last script tag:
   <script src="../ads-config.js"></script>

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
1. ENGLISH ONLY. No other language anywhere on the page.
2. THE PAGE MUST DELIVER WHAT ITS TITLE PROMISES. A dramatic or question
   title is fine; a page that does not answer it is a failure. No stubs, no
   filler, no fake content, no placeholder text, no "coming soon".
3. EVERY TOOL MUST REALLY WORK. Calculators compute live from the inputs
   (update on input AND change, and run once on load with sensible defaults).
   Handle empty, zero and negative inputs with a plain message, never NaN,
   never a crash, never a console error. Every button must do something.
   No dead controls. No external libraries, no images, no web fonts.
   Generators must use real content banks of the minimum sizes stated in
   each topic spec — never fewer, never repeated filler lines.
   Checklists show a live progress counter (X of Y done). Countdowns tick
   every second and handle the date passing with a plain message.
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
   Wellness pages in this pack are GENERAL INFORMATION ONLY: state that
   plainly in the warn box, never diagnose, never treat, never promise a
   health outcome.
7. FAQ: exactly 4 questions. The visible FAQ divs use
   <div class="faq"><h3>QUESTION</h3><p>ANSWER</p></div> and the JSON-LD
   mainEntity must contain the SAME question text and SAME answer text,
   word for word. Answers are plain text, no HTML inside. Use the 4
   questions given in each topic spec.
8. CROSS-LINKS: link 3-5 existing Noryvello pages, using relative hrefs
   like ../overtime-pay-calculator/ and the exact link texts below. Never
   link a page that is not on the list. Separate links with " · ".
9. ADS: paste ONLY the AD ZONE block above, exactly as given, directly
   before <footer>. NEVER paste any other ad code, ad script or ad network
   snippet into a page. Do not add, remove or change the ads-config.js tag.
10. MOBILE-FIRST: the page must work on a small phone screen. Inputs full
    width, text readable, no horizontal scrolling, no hover-only features.
11. SEMANTIC HTML: one H1 only, H2 for sections, H3 only inside FAQ divs,
    real <label> elements on every input and select.
12. DATES AND FACTS: use ONLY the dates and facts stated in the topic spec.
    For date-finder pages, compute each date from the rule stated in the
    spec and show the rule. If you cannot verify a fact from the spec, leave
    it out rather than guessing. Never invent fixtures, line-ups, statistics
    or official lists.
13. NO EXTERNAL LINKS in the page body. The only outside URLs allowed are
    the canonical link, the og:url and the footer link to the hub.

CROSS-LINK LIST (exact hrefs and link texts):
- ../overtime-pay-calculator/ — "Overtime Pay Calculator — Regular + Overtime Pay, Worked Out"
- ../rent-vs-buy-calculator/ — "Rent vs Buy Calculator — Which Costs Less Over the Years You Stay?"
- ../flat-rate-vs-reducing-balance/ — "Flat Rate vs Reducing Balance — Which Loan Really Costs Less?"
- ../debt-payoff-calculator/ — "Debt Payoff Calculator — When Will You Be Debt-Free?"
- ../buying-used-laptop-mistakes/ — "7 Mistakes to Avoid When Buying a Used Laptop"
- ../online-sale-mistakes/ — "Online Sale Season: 7 Mistakes That Waste Your Money"
- ../secret-santa-generator/ — "Secret Santa Generator — Fair Draws, No One Picks Themselves"
- ../wedding-budget-planner/ — "Wedding Budget Planner — Split Your Budget Before You Spend It"
- ../online-piano/ — "Free Online Piano — Play With Your Keyboard or Fingers"
- ../running-pace-calculator/ — "Running Pace Calculator — Pace, Finish Time and Race Predictor"
- ../paint-calculator/ — "Paint Calculator — How Much Paint Do I Need for a Room?"
- ../sleep-calculator/ — "Sleep Calculator — Bedtime and Wake-Up Time Calculator"
- ../led-vs-incandescent-running-cost/ — "LED vs Incandescent Running Cost Calculator"
- ../rent-a-car-vs-taxis/ — "Rent a Car vs Taxis Calculator"
- ../buy-vs-rent-formal-dress-suit/ — "Buy vs Rent a Formal Dress or Suit Calculator"
- ../hand-wash-vs-dishwasher-water-use/ — "Hand Wash vs Dishwasher Water Use Calculator"
- ../ramadan-countdown/ — "Ramadan Countdown 2027"
- ../gift-idea-generator-by-budget-and-person/ — "Gift Idea Generator by Budget and Person"
- ../clean-joke-generator/ — "Clean Joke Generator"
- ../would-you-rather-generator/ — "Would You Rather Generator"
- ../truth-or-dare-generator/ — "Truth or Dare Generator"
- ../charades-word-generator/ — "Charades Word Generator"
- ../ramp-slope-calculator/ — "Ramp Slope Calculator"
- ../carry-on-liquids-guide/ — "Carry-on Liquids Guide"
- ../visa-document-checklist/ — "Visa Document Checklist"
- ../hiking-time-calculator/ — "Hiking Time Calculator"
- ../braking-distance-calculator/ — "Braking Distance Calculator"
- ../job-scam-spotting-guide/ — "Job Scam Spotting Guide"
- ../decision-helper-weighted/ — "Decision Helper"
- ../dice-probability-calculator/ — "Dice Probability Calculator"
- ../guitar-chord-finder/ — "Guitar Chord Finder"
- ../speaking-time-calculator/ — "Speaking Time Calculator"
- ../data-usage-calculator/ — "Data Usage Calculator"
- ../charging-time-calculator/ — "Charging Time Calculator"
- ../battery-backup-time-calculator/ — "Battery Backup Time Calculator"
- ../filament-cost-calculator/ — "Filament Cost Calculator"
- ../fabric-needed-calculator/ — "Fabric Needed Calculator"
- ../moving-boxes-calculator/ — "Moving Boxes Calculator"
- ../storage-unit-size-finder/ — "Storage Unit Size Finder"
- ../rainwater-harvest-calculator/ — "Rainwater Harvest Calculator"
- ../wall-anchor-chooser/ — "Wall Anchor Chooser"
- ../screw-vs-nail-guide/ — "Screw vs Nail Guide"
- ../drill-bit-chooser/ — "Drill Bit Chooser"
```

---

## TOPICS 1–14 — 2027 WAVE (seasonal urgency: build first, in this order)

### 1. `eid-al-fitr-countdown-2027` | seasonal countdown
- Title: `Eid al-Fitr 2027 Countdown: Days Until Eid (9 March 2027) | Noryvello`
- H1: `Eid al-Fitr 2027 Countdown`
- Deliver: live countdown (days/hours/minutes/seconds, ticks every second) to the EXPECTED date 9 March 2027. Moon-sighting caveat in the warn box AND under the countdown: the date may move by one day and 10 March is possible in some regions; the final date follows the moon sighting. Short plain section: what Eid al-Fitr is, in 2–3 sentences.
- FAQs: `When is Eid al-Fitr in 2027?` / `Could the Eid al-Fitr 2027 date change?` / `How is the date of Eid al-Fitr decided?` / `What happens on Eid al-Fitr?`

### 2. `eid-al-adha-countdown-2027` | seasonal countdown
- Title: `Eid al-Adha 2027 Countdown: Days Until Eid (16 May 2027) | Noryvello`
- H1: `Eid al-Adha 2027 Countdown`
- Deliver: live countdown to the EXPECTED date 16 May 2027, ticking every second. Note the Day of Arafah on 15 May 2027 and the Hajj connection in one short section. Moon-sighting caveat everywhere the date appears.
- FAQs: `When is Eid al-Adha in 2027?` / `What is the Day of Arafah?` / `Could the Eid al-Adha 2027 date change?` / `How is Eid al-Adha different from Eid al-Fitr?`

### 3. `hajj-2027-dates-guide` | guide
- Title: `Hajj 2027 Dates: Key Dates of Hajj 1448 Explained | Noryvello`
- H1: `Hajj 2027 Dates`
- Deliver: a date table — 1 Dhul-Hijjah 7 May 2027, Day of Arafah 15 May 2027, Eid al-Adha 16 May 2027 — with a plain 2–3 sentence explanation of each day. Moon-sighting caveat in the warn box. NO detailed ritual instruction beyond the dates and what each day marks.
- FAQs: `When does Hajj 2027 start?` / `What is the Day of Arafah?` / `When is Eid al-Adha 2027?` / `Are the Hajj 2027 dates final?`

### 4. `chinese-new-year-2027-countdown` | seasonal countdown
- Title: `Chinese New Year 2027 Countdown: 6 February 2027 | Noryvello`
- H1: `Chinese New Year 2027 Countdown`
- Deliver: live countdown to 6 February 2027. Plain facts section: the Spring Festival, and the zodiac animal for 2027 per the standard 12-year cycle (Goat). NO horoscope content, NO fortune telling, NO personality claims of any kind.
- FAQs: `When is Chinese New Year 2027?` / `Which animal is 2027 in the Chinese zodiac?` / `How long do Chinese New Year celebrations last?` / `What is the Spring Festival?`

### 5. `mothers-day-2027-date` | seasonal date finder
- Title: `Mother's Day 2027: Date by Country + Countdown | Noryvello`
- H1: `Mother's Day 2027 Date`
- Deliver: a country/region picker that shows the 2027 date AND a live countdown to it. Compute each date from its rule and SHOW the rule: second Sunday of May = 9 May 2027 (United States, Canada, Australia, India and most countries); Mothering Sunday, three weeks before Easter = 7 March 2027 (United Kingdom, Ireland); fixed 10 May (Mexico); fixed 12 August (Thailand); last Sunday of May = 30 May 2027 (France, Sweden); first Sunday of May = 2 May 2027 (Spain, Portugal). If you cannot verify a country from these rules, leave it out — never guess a date.
- FAQs: `When is Mother's Day 2027 in the US?` / `Why is Mother's Day in the UK on a different date?` / `Is Mother's Day the same date everywhere?` / `When is Mother's Day 2027 in Australia?`

### 6. `fathers-day-2027-date` | seasonal date finder
- Title: `Father's Day 2027: Date by Country + Countdown | Noryvello`
- H1: `Father's Day 2027 Date`
- Deliver: same pattern as topic 5 — picker + date + countdown, every date computed from its rule and the rule shown: third Sunday of June = 20 June 2027 (United States, United Kingdom, Canada and most countries); first Sunday of September = 5 September 2027 (Australia, New Zealand); second Sunday of August = 8 August 2027 (Brazil); Ascension Day, 39 days after Easter = 6 May 2027 (Germany); fixed 19 March (Spain, Italy, Portugal). Leave out anything you cannot verify — never guess.
- FAQs: `When is Father's Day 2027 in the US?` / `When is Father's Day 2027 in the UK?` / `Why is Father's Day in Australia in September?` / `Is Father's Day the same date everywhere?`

### 7. `womens-world-cup-2027-countdown` | seasonal countdown
- Title: `Women's World Cup 2027 Countdown: Brazil, 24 June 2027 | Noryvello`
- H1: `Women's World Cup 2027 Countdown`
- Deliver: live countdown to 24 June 2027. Plain facts only: hosted by Brazil, 32 teams, 8 host cities, final on 25 July 2027 at the Maracanã in Rio de Janeiro. NO fixture claims, NO team lists, NO invented details.
- FAQs: `When does the Women's World Cup 2027 start?` / `Where is the Women's World Cup 2027?` / `How many teams play in the Women's World Cup 2027?` / `When is the Women's World Cup 2027 final?`

### 8. `womens-world-cup-2027-guide` | guide
- Title: `Women's World Cup 2027 Guide: Host Cities, Format and Dates | Noryvello`
- H1: `Women's World Cup 2027 Guide`
- Deliver: host cities (list ONLY the announced cities: Rio de Janeiro, São Paulo, Belo Horizonte, Fortaleza, Recife, Salvador, Porto Alegre, Brasília — omit any city you cannot confirm), the tournament format in plain language (32 teams, group stage then knockouts), the dates (24 June – 25 July 2027), and how to follow it in general terms (broadcasters differ by country — name NO channels). NO invented fixtures, NO team lists (qualification is incomplete).
- FAQs: `Where is the Women's World Cup 2027 held?` / `How many teams are in the Women's World Cup 2027?` / `What is the format of the Women's World Cup 2027?` / `When is the Women's World Cup 2027 final?`

### 9. `solar-eclipse-countdown-2027` | seasonal countdown
- Title: `Solar Eclipse 2027 Countdown: Total Eclipse on 2 August 2027 | Noryvello`
- H1: `Solar Eclipse 2027 Countdown`
- Deliver: live countdown to 2 August 2027. Path summary: totality crosses southern Spain, Morocco, Libya, Egypt and Saudi Arabia. Safety line in the warn box AND under the countdown: never look at the sun without proper eclipse glasses — standard published guidance.
- FAQs: `When is the total solar eclipse in 2027?` / `Where will the 2027 solar eclipse be visible?` / `How long does totality last in 2027?` / `Is it safe to look at a solar eclipse?`

### 10. `solar-eclipse-2027-guide` | guide
- Title: `Solar Eclipse 2027 Guide: Path, Best Places and Safety | Noryvello`
- H1: `Solar Eclipse 2027 Guide`
- Deliver: the path (southern Spain, Morocco, Libya, Egypt, Saudi Arabia), best-viewing places, the Luxor fact (totality 6 minutes 23 seconds — the longest on accessible land until 2114), what totality means in plain language, and the safety rules. Standard published facts only.
- FAQs: `What is the path of the 2027 solar eclipse?` / `Where is the best place to see the 2027 eclipse?` / `How long is totality near Luxor?` / `What safety rules apply for watching an eclipse?`

### 11. `cricket-world-cup-2027-countdown` | seasonal countdown
- Title: `Cricket World Cup 2027 Countdown: 2 October 2027 | Noryvello`
- H1: `Cricket World Cup 2027 Countdown`
- Deliver: live countdown to 2 October 2027. Plain facts: hosted by South Africa, Zimbabwe and Namibia; 14 teams; 54 matches; final on 21 November 2027 in Johannesburg. NO fixtures, NO team lists beyond the host facts.
- FAQs: `When does the Cricket World Cup 2027 start?` / `Where is the Cricket World Cup 2027 held?` / `How many teams play in the Cricket World Cup 2027?` / `When is the Cricket World Cup 2027 final?`

### 12. `cricket-world-cup-2027-format-guide` | guide
- Title: `Cricket World Cup 2027 Format Explained in Plain Language | Noryvello`
- H1: `Cricket World Cup 2027 Format Guide`
- Deliver: how the format works in plain language — two groups, a super stage, semi-finals and a final — kept to the announced structure only. Describe the stages generally; do NOT invent fixtures, venues for specific matches, or team seedings. State plainly where detail is still unannounced.
- FAQs: `How many teams are in the Cricket World Cup 2027?` / `How does the group stage work?` / `What comes after the group stage?` / `When is the Cricket World Cup 2027 final?`

### 13. `back-to-school-2027-checklist` | guide + checklist
- Title: `Back-to-School 2027 Checklist: Supplies, Clothes and Routines | Noryvello`
- H1: `Back-to-School 2027 Checklist`
- Deliver: a tick-off checklist with a live progress counter, grouped: school supplies, clothes and shoes, daily routines, paperwork and health forms. General and worldwide — no country-specific school rules, no prices. August peak note in the intro.
- FAQs: `When should I start back-to-school shopping?` / `What school supplies do I need?` / `How do I reset sleep routines before school?` / `What paperwork do schools need?`

### 14. `black-friday-2027-countdown` | seasonal countdown
- Title: `Black Friday 2027 Countdown: 26 November 2027 | Noryvello`
- H1: `Black Friday 2027 Countdown`
- Deliver: live countdown to 26 November 2027. Plain date facts: the day after US Thanksgiving (25 November 2027); Cyber Monday follows on 29 November 2027. NO deals, NO prices, NO store names, NO affiliate content of any kind.
- FAQs: `When is Black Friday 2027?` / `Why is Black Friday the day after Thanksgiving?` / `Is Black Friday a public holiday?` / `When is Cyber Monday 2027?`

---

## TOPICS 15–36 — CALM, FAMILY AND EVERYDAY LIFE

### 15. `breathing-exercise-guide` | guide + interactive pacer
- Title: `Breathing Exercises: 3 Simple Techniques With a Visual Pacer | Noryvello`
- H1: `Breathing Exercise Guide`
- Deliver: three techniques — box breathing (4-4-4-4), 4-7-8 breathing, and slow belly breathing — each with a visual pacer (a circle that grows and shrinks with Start/Stop buttons following the stated pattern). GENERAL INFORMATION ONLY: the warn box must say this is general information, not medical advice, to stop if dizzy, and that people with breathing conditions should ask a doctor first. Never promise a health outcome.
- FAQs: `What is box breathing?` / `How long should I practise a breathing exercise?` / `Can breathing exercises help me relax?` / `Are breathing exercises safe for everyone?`

### 16. `sleep-hygiene-checklist` | guide + checklist
- Title: `Sleep Hygiene Checklist: 12 Habits for Better Sleep | Noryvello`
- H1: `Sleep Hygiene Checklist`
- Deliver: a tick-off checklist of 12 habits (light, screens, caffeine cut-off, room temperature, wind-down routine, fixed wake time and more) with a live progress counter. GENERAL INFORMATION ONLY: the warn box must say persistent sleep problems should be discussed with a doctor, and the page never diagnoses or treats anything.
- FAQs: `What is sleep hygiene?` / `How long before bed should I stop using screens?` / `Does caffeine affect sleep?` / `What if I still cannot sleep?`

### 17. `morning-routine-builder` | builder
- Title: `Morning Routine Builder: Plan a Morning That Fits Your Time | Noryvello`
- H1: `Morning Routine Builder`
- Deliver: the visitor picks a wake time, then picks ordered morning steps (wake, water, stretch, shower, breakfast, plan the day and more) with minutes for each. The tool shows the total time and the finish time, and the finished routine as a printable ordered list. MORNING ONLY — no whole-day planning.
- FAQs: `How long should a morning routine be?` / `What time should I wake up?` / `What if I only have 15 minutes in the morning?` / `How do I stick to a morning routine?`

### 18. `thirty-day-challenge-idea-generator` | generator
- Title: `30-Day Challenge Ideas: Kindness, Tidy Home and Reading Plans | Noryvello`
- H1: `30-Day Challenge Idea Generator`
- Deliver: the visitor picks one of 3 areas — kindness, tidy home, reading — and gets a 30-day plan: one small daily action for each of the 30 days. Write 30 UNIQUE actions per area (90 total), one line each, all realistic and free. No repeated filler lines.
- FAQs: `How does a 30-day challenge work?` / `What if I miss a day?` / `Which 30-day challenge should I pick?` / `Can I repeat a 30-day challenge?`

### 19. `goal-setting-worksheet` | worksheet
- Title: `Goal Setting Worksheet: Turn a Goal Into a Plan | Noryvello`
- H1: `Goal Setting Worksheet`
- Deliver: a fill-in worksheet — the goal, why it matters, a deadline, 3 milestones, the first step, and a weekly check-in day — that builds a printable summary card from the visitor's own words. Include a short plain explanation of SMART goals. Nothing is saved or sent anywhere.
- FAQs: `What is a SMART goal?` / `How many goals should I set at once?` / `What if I miss a milestone?` / `How often should I review my goals?`

### 20. `family-game-night-idea-generator` | generator
- Title: `Family Game Night Ideas for Kids, Teens and Adults | Noryvello`
- H1: `Family Game Night Idea Generator`
- Deliver: the visitor picks a group (kids, teens, adults, mixed ages) and the time available, and gets a game idea with how to play in 3 lines and what is needed. Minimum 8 ideas per group (32 total), all playable with household items or no equipment at all — no purchases required.
- FAQs: `How often should we have a family game night?` / `What games work for mixed ages?` / `What can we play with no board games?` / `How long should a family game night last?`

### 21. `apology-letter-guide` | guide + letter builder
- Title: `How to Write an Apology Letter (With a Fill-In Builder) | Noryvello`
- H1: `Apology Letter Guide`
- Deliver: a fill-in builder — recipient, what happened, what you take responsibility for, what you will do differently — that produces a draft letter the visitor can copy. Plus a short guide on tone: what makes an apology sincere. NO legal advice of any kind.
- FAQs: `How long should an apology letter be?` / `Should I apologise by text or by letter?` / `What makes an apology sincere?` / `What if they do not reply to my apology?`

### 22. `thank-you-note-generator` | generator
- Title: `Thank You Note Generator: Short Notes for Gifts, Help and More | Noryvello`
- H1: `Thank You Note Generator`
- Deliver: the visitor picks an occasion (gift, help, job interview, hospitality) and adds a few details, and gets 3 note drafts — short, medium and warm — with a copy button on each. The drafts must read like real notes, not templates with blanks.
- FAQs: `How long should a thank you note be?` / `Should a thank you note be emailed or handwritten?` / `How soon should I send a thank you note?` / `What do I write for a gift I did not like?`

### 23. `kids-chore-chart-generator` | generator
- Title: `Kids Chore Chart Generator: Printable Weekly Charts by Age | Noryvello`
- H1: `Kids Chore Chart Generator`
- Deliver: the visitor picks a child age band (4–6, 7–9, 10–12) and picks chores, and gets a printable weekly chart with days and star boxes. Minimum 12 chores per age band (36 total), all age-appropriate. Include a short list of non-money reward ideas. NO money amounts anywhere.
- FAQs: `What age should children start chores?` / `How many chores should a child have?` / `Should chores earn rewards?` / `What if my child refuses to do chores?`

### 24. `bedtime-story-idea-generator` | generator
- Title: `Bedtime Story Ideas: Heroes, Settings and Plot Twists | Noryvello`
- H1: `Bedtime Story Idea Generator`
- Deliver: the visitor picks a hero, a setting and a mood, and gets a story starter (an opening of 3–4 sentences) plus 3 plot twists. Content banks: at least 10 heroes, 8 settings, 6 moods and 12 twists, all original and child-friendly.
- FAQs: `What age are these bedtime story ideas for?` / `How long should a bedtime story be?` / `Can I tell the same bedtime story twice?` / `How do I make up a story ending?`

### 25. `family-reunion-planning-checklist` | guide + checklist
- Title: `Family Reunion Planning Checklist: From 6 Months Out to the Day | Noryvello`
- H1: `Family Reunion Planning Checklist`
- Deliver: a tick-off checklist with a live progress counter, grouped by phase: 6 months out, 3 months out, 1 month out, the week before, the day itself. Plus a small headcount helper: number of guests → tables needed at 8 guests per table, rounded up, with the working shown.
- FAQs: `How far ahead should I plan a family reunion?` / `Who pays for a family reunion?` / `Should a family reunion be indoors or outdoors?` / `How do I keep track of RSVPs?`

### 26. `rice-water-ratio-calculator` | calculator
- Title: `Rice Water Ratio Calculator: How Much Water for Every Rice Type | Noryvello`
- H1: `Rice Water Ratio Calculator`
- Deliver: the visitor picks a rice type (white long-grain, basmati, jasmine, brown, short-grain) and cups of rice, and gets cups of water plus rest time and short method notes. Ratios for the absorption method with rinsed rice: white 1:1.5, basmati 1:1.5, jasmine 1:1.25, brown 1:2, short-grain 1:1.2. State the method plainly and that amounts may need adjusting to the visitor's own pot.
- FAQs: `What is the water ratio for basmati rice?` / `Should I rinse rice before cooking?` / `Why is my rice sticky?` / `How long should rice rest after cooking?`

### 27. `meat-temperature-guide` | guide + picker
- Title: `Meat Temperature Guide: Safe Internal Temperatures + Rest Times | Noryvello`
- H1: `Meat Temperature Guide`
- Deliver: a picker — meat and cut → safe internal temperature and rest time, in both °C and °F. Use the published USDA temperatures: beef and lamb steaks and chops 145°F (63°C), ground meat 160°F (71°C), all poultry 165°F (74°C), pork 145°F (63°C), fish 145°F (63°C). State the thermometer rule: temperature, not colour, decides doneness.
- FAQs: `What temperature should chicken be cooked to?` / `Do I need a meat thermometer?` / `What is rest time for meat?` / `Is pink pork safe to eat?`

### 28. `herb-substitution-finder` | finder
- Title: `Herb Substitution Finder: What to Use When an Herb Is Missing | Noryvello`
- H1: `Herb Substitution Finder`
- Deliver: the visitor picks a missing herb (fresh or dried) and gets substitution options with ratios and flavour notes. Cover at least 12 herbs. State the dried-to-fresh rule plainly: use one third as much dried herb as fresh.
- FAQs: `What is the dried to fresh herb ratio?` / `What can I substitute for basil?` / `What can I substitute for cilantro?` / `Can I just leave an herb out?`

### 29. `slow-cooker-time-converter` | converter
- Title: `Slow Cooker Time Converter: Oven Times to LOW and HIGH | Noryvello`
- H1: `Slow Cooker Time Converter`
- Deliver: the visitor enters a recipe's normal cook time, and gets the slow-cooker equivalent on LOW and HIGH from the standard published conversion table (15–30 minutes becomes 1.5–2.5 hours on HIGH or 4–6 hours on LOW; 35–45 minutes becomes 2–3 hours on HIGH or 6–8 hours on LOW; 50 minutes to 3 hours becomes 4–6 hours on HIGH or 8–12 hours on LOW). State that the table is a guide, and include the liquid note: slow cookers lose little liquid, so use less than the original recipe.
- FAQs: `What is the difference between LOW and HIGH on a slow cooker?` / `Can any recipe be converted to a slow cooker?` / `Should I use less liquid in a slow cooker?` / `Can I leave a slow cooker on all day?`

### 30. `pasta-cooking-time-guide` | guide + picker
- Title: `Pasta Cooking Time Guide: Times for Every Shape, Fresh and Dried | Noryvello`
- H1: `Pasta Cooking Time Guide`
- Deliver: a picker — pasta shape (spaghetti, penne, fusilli, farfalle, rigatoni, fettuccine, macaroni, lasagne sheets) and fresh or dried — giving a time range, the al dente test, and salt and water notes. Times are standard packet ranges, stated as guides, with the rule: taste one minute before the earliest time.
- FAQs: `How much water do I need to cook pasta?` / `When should I salt pasta water?` / `How do I tell when pasta is al dente?` / `Should I rinse pasta after cooking?`

### 31. `smoothie-recipe-builder` | builder
- Title: `Smoothie Recipe Builder: Pick a Base, Fruit and Extra | Noryvello`
- H1: `Smoothie Recipe Builder`
- Deliver: the visitor picks a base (milk, yogurt, water, juice), two fruits (at least 8 to choose from) and one extra (oats, peanut butter, spinach and more — at least 6), and gets a recipe with parts and steps. State the ratio rule: 1 part liquid to 1.5 parts fruit.
- FAQs: `What is the best liquid for a smoothie?` / `Can I make a smoothie without a blender?` / `How do I fix a smoothie that is too thick?` / `Can I prepare smoothies ahead of time?`

### 32. `lunchbox-idea-generator` | generator
- Title: `Lunchbox Ideas: 5 Combos for School and Work | Noryvello`
- H1: `Lunchbox Idea Generator`
- Deliver: the visitor picks school or work, hot or cold, and a nut-free option if needed, and gets 5 lunch combos — each with a main, a side, a fruit and a drink. Bank of at least 20 mains. All ideas must be realistic packed lunches, not restaurant meals.
- FAQs: `How do I keep lunchbox food cold?` / `What are good nut-free lunchbox ideas?` / `Can I prepare a lunchbox the night before?` / `How much food should a lunchbox hold?`

### 33. `grocery-budget-planner` | planner
- Title: `Grocery Budget Planner: Split Your Food Budget by Category | Noryvello`
- H1: `Grocery Budget Planner`
- Deliver: the visitor enters household size, meals per week and a budget (any currency), and gets a split by category — produce, protein, dairy, pantry, household — with a percentage and an amount for each. Percentages must be adjustable by the visitor. NO prices, NO currency symbols.
- FAQs: `What percentage of income should go to groceries?` / `How can I cut my grocery bill?` / `How do I plan groceries for one person?` / `Should eating out count in a grocery budget?`

### 34. `meal-prep-planning-checklist` | guide + checklist
- Title: `Meal Prep Planning Checklist: Plan, Shop, Prep and Store | Noryvello`
- H1: `Meal Prep Planning Checklist`
- Deliver: a tick-off checklist with a live progress counter in four phases — plan, shop, prep day, store — plus a batch-cook helper: servings wanted → containers needed. Storage guidance must stay GENERAL: no specific day-counts for risky foods; the warn box says to follow standard food-safety guidance and, when in doubt, throw it out.
- FAQs: `How many meals should I prep at once?` / `What are the best containers for meal prep?` / `How long does prepped food last?` / `Which foods are best for meal prep?`

### 35. `paycheck-budget-splitter` | calculator
- Title: `Paycheck Budget Splitter: The 50/30/20 Split on Your Pay | Noryvello`
- H1: `Paycheck Budget Splitter`
- Deliver: the visitor enters take-home pay (any currency) and gets the 50/30/20 split — needs, wants, savings — with an amount for each and adjustable percentages. GENERAL EDUCATION ONLY: the warn box says this is a starting guide, not financial advice, and every household is different.
- FAQs: `What is the 50/30/20 budget rule?` / `What counts as a need in a budget?` / `What if rent alone takes half my pay?` / `How much of my pay should I save?`

### 36. `subscription-audit-checklist` | checklist + adder
- Title: `Subscription Audit: List Every Subscription and See the Yearly Total | Noryvello`
- H1: `Subscription Audit Checklist`
- Deliver: the visitor adds subscriptions with a name and monthly cost (any currency) and marks each keep, cancel or undecided. The tool shows the monthly total, the yearly total, and the yearly saving if the cancelled ones go. NO account connections, NO invented statistics — the page shows the visitor's OWN total only.
- FAQs: `How often should I audit my subscriptions?` / `What about free trials I forgot?` / `Are family plans worth it?` / `How much does the average person spend on subscriptions?`

---

## TOPICS 37–50 — WORK, HOME, GAMES AND CELEBRATIONS

### 37. `resignation-letter-guide` | guide + letter builder
- Title: `How to Write a Resignation Letter (With a Fill-In Builder) | Noryvello`
- H1: `Resignation Letter Guide`
- Deliver: a fill-in builder — name, role, last working day, notice-period picker — that produces a short professional letter the visitor can copy. Plus a do and don't list on tone. NO legal advice: the warn box says to check the notice period in the visitor's own contract.
- FAQs: `How much notice should I give when resigning?` / `Must I give a reason for resigning?` / `Should a resignation letter be emailed or printed?` / `What should I cover in a handover?`

### 38. `home-energy-audit-checklist` | guide + checklist
- Title: `Home Energy Audit Checklist: Room-by-Room, Find the Waste | Noryvello`
- H1: `Home Energy Audit Checklist`
- Deliver: a room-by-room tick-off audit (heating and cooling, lights, drafts and windows, appliances, water heating) with a live progress counter, ending in a top-5 findings summary the visitor builds from their own checks. NO savings claims and NO invented figures anywhere.
- FAQs: `What is a home energy audit?` / `What uses the most energy in a home?` / `Can I do an energy audit myself?` / `How often should I audit my home's energy use?`

### 39. `cleaning-schedule-generator` | generator
- Title: `Cleaning Schedule Generator: A Weekly Plan for Your Home | Noryvello`
- H1: `Cleaning Schedule Generator`
- Deliver: the visitor enters home size, people and pets, and gets a weekly schedule — daily, weekly and monthly tasks — with a room rotation, as a printable list. Tasks must be realistic and specific, not generic ("clean the house").
- FAQs: `How often should bathrooms be cleaned?` / `What is the difference between daily and weekly cleaning tasks?` / `How does having pets change a cleaning schedule?` / `What is a 15-minute tidy routine?`

### 40. `plant-watering-schedule-guide` | guide + picker
- Title: `Houseplant Watering Guide: How Often to Water 12 Common Plants | Noryvello`
- H1: `Plant Watering Schedule Guide`
- Deliver: a picker — plant type (at least 12 common houseplants: pothos, snake plant, monstera, peace lily, spider plant, ZZ plant, fiddle-leaf fig, succulents, fern, philodendron, calathea, rubber plant) — giving watering frequency, the finger-test rule (check the soil, not the calendar) and a season note. HOUSEPLANTS ONLY. Warn box: overwatering kills more houseplants than underwatering.
- FAQs: `How often should I water houseplants?` / `What is the finger test for watering plants?` / `Why are my plant's leaves turning yellow?` / `Do plants need less water in winter?`

### 41. `moving-cost-estimator` | estimator
- Title: `Moving Cost Estimator: Every Cost of Moving, Added Up | Noryvello`
- H1: `Moving Cost Estimator`
- Deliver: the visitor picks home size, distance band and help level (do-it-yourself, friends help, professional movers), then enters their own amounts (any currency) against a full component list — boxes and packing, truck or van, movers, cleaning, deposits and fees — and gets a total with the working shown. NO stated prices anywhere; every amount comes from the visitor.
- FAQs: `What costs the most when moving?` / `Is it cheaper to move yourself or hire movers?` / `What hidden costs come with moving?` / `How far ahead should I book movers?`

### 42. `coffee-grind-size-guide` | guide + picker
- Title: `Coffee Grind Size Guide: The Right Grind for Every Brew Method | Noryvello`
- H1: `Coffee Grind Size Guide`
- Deliver: a picker — brew method (espresso, pour-over, French press, cold brew, drip, AeroPress, Turkish, moka pot) — giving the grind size, what it should look and feel like, and the brew time. Grinder guidance must stay relative (finer/coarser), with NO brand-specific settings.
- FAQs: `What happens if coffee is ground too fine?` / `What happens if coffee is ground too coarse?` / `Is pre-ground coffee as good as fresh ground?` / `How can I tell grind size by look?`

### 43. `story-prompt-generator` | generator
- Title: `Story Prompt Generator: 72 Original Prompts in 6 Genres | Noryvello`
- H1: `Story Prompt Generator`
- Deliver: the visitor picks a genre — adventure, mystery, science fiction, fantasy, funny, everyday — and gets a prompt built from a character, a situation and a twist. Minimum 12 complete prompts per genre (72 total), all original, each a full sentence or two — never a bare word list.
- FAQs: `Are these story prompts for kids or adults?` / `Can I publish a story written from a prompt?` / `How do I develop a story prompt into a story?` / `What if I get stuck after the first line?`

### 44. `riddle-generator` | generator
- Title: `Riddle Generator: 45 Clean Riddles, Easy to Tricky | Noryvello`
- H1: `Riddle Generator`
- Deliver: the visitor picks a difficulty — easy, medium, tricky — and gets a riddle with a reveal-answer button. Minimum 15 original riddles per level (45 total), all clean, with no repeats within a session until the bank is exhausted.
- FAQs: `What age are these riddles for?` / `Can I use these riddles at a party?` / `How do I write my own riddle?` / `Do the riddles include answers?`

### 45. `trivia-question-generator` | generator (for quiz hosts)
- Title: `Trivia Question Generator: Questions and Answers for Quiz Hosts | Noryvello`
- H1: `Trivia Question Generator`
- Deliver: a HOST-facing tool — the visitor picks a category (science, geography, history, sport, food, animals) and a difficulty, and gets a question card with the answer hidden until reveal, plus a simple score sheet. Minimum 12 question-and-answer pairs per category (72 total). Every fact must be a verified general fact — NO invented statistics, NO guessed figures.
- FAQs: `How many rounds should a trivia quiz have?` / `How many players can join a trivia quiz?` / `Can I print the trivia questions?` / `How should trivia be scored?`

### 46. `scavenger-hunt-list-generator` | generator
- Title: `Scavenger Hunt List Generator: 15-Item Hunts for Any Setting | Noryvello`
- H1: `Scavenger Hunt List Generator`
- Deliver: the visitor picks a setting (indoors, garden, park, beach) and an age group (kids, teens, adults), and gets a 15-item hunt list as a printable checklist. Write a full 15-item bank for every setting-and-age combination. All items must be findable without buying anything.
- FAQs: `How many items should a scavenger hunt have?` / `Should a scavenger hunt be timed?` / `Do scavenger hunts need prizes?` / `What is a good indoor scavenger hunt for a rainy day?`

### 47. `tongue-twister-generator` | generator
- Title: `Tongue Twister Generator: 36 Twisters, Easy to Hard | Noryvello`
- H1: `Tongue Twister Generator`
- Deliver: the visitor picks a difficulty and gets a tongue twister with a "say it 3 times fast" challenge. Minimum 12 twisters per level (36 total), classic and original, all clean and speakable.
- FAQs: `Why practise tongue twisters?` / `Are tongue twisters good for speech practice?` / `Are tongue twisters suitable for children?` / `What is the hardest tongue twister?`

### 48. `icebreaker-question-generator` | generator
- Title: `Icebreaker Questions: Safe Starters for Meetings and Groups | Noryvello`
- H1: `Icebreaker Question Generator`
- Deliver: the visitor picks a setting — work meeting, classroom, party, team-building — and gets a question plus a follow-up prompt. Minimum 12 questions per setting (48 total), all safe and professional, nothing personal or intrusive.
- FAQs: `How many icebreaker questions should I ask?` / `Do icebreakers work for remote meetings?` / `What if an icebreaker question meets silence?` / `Which icebreaker questions should I avoid?`

### 49. `anniversary-gift-guide` | guide + picker
- Title: `Anniversary Gifts by Year: Traditional and Modern Themes | Noryvello`
- H1: `Anniversary Gift Guide`
- Deliver: a year picker (years 1–25, plus 30, 40, 50 and 60) showing the traditional and modern gift themes from the standard published lists, with 3–4 idea examples per theme. NO prices, NO shop names, NO links.
- FAQs: `What is the traditional 1st anniversary gift?` / `What is the difference between traditional and modern anniversary gifts?` / `What is the 25th anniversary gift?` / `What are good anniversary gift ideas without a theme?`

### 50. `wedding-toast-builder` | builder
- Title: `Wedding Toast Builder: A 3–5 Minute Speech, Structured | Noryvello`
- H1: `Wedding Toast Builder`
- Deliver: the visitor picks a role (best man, maid of honour, parent, friend) and answers 3 short prompts (a memory, what you admire, a wish), and gets a toast outline — opening, story, wish, closing — with their own words filled in, plus a length guide (3–5 minutes) and delivery tips.
- FAQs: `How long should a wedding toast be?` / `Can a wedding toast be funny?` / `How do I handle nerves before a toast?` / `What should a wedding toast never say?`

---

## ZIP PACKAGING (when all 50 pages are done)
Package the 50 pages into ONE downloadable ZIP named `Noryvello_Batch_7_50.zip`.
Inside the ZIP: one folder per topic slug, each folder holding that page's
complete `index.html` — exactly 50 folders, exactly 50 files, nothing else.
The folder names must be the slugs exactly as listed in this file.
Tell the owner the ZIP is ready and that Suraiya will verify every page
before publish.
