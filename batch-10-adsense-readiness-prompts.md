# Noryvello Batch 10 — AdSense readiness pack (18 pages: 3 trust pages + 15 guides)

## INSTRUCTIONS FOR THE AI READING THIS FILE (read first, follow exactly)
You are the page builder. This file is your complete instruction set.
- Follow Prompt 0-EN below exactly for every page.
- Build ALL 18 topics in this file, IN ORDER, WITHOUT waiting for the owner
  to name each one. After finishing one page, continue to the next topic
  on your own, until all 18 are done.
- Return ONE page per reply: one complete HTML file in a single code block,
  nothing else. Never put two pages in one reply.
- Do NOT build anything else, and do NOT pick your own topics. Build ONLY
  the 18 topics in this file.
- If the session stops before all 18 are done, continue from the next
  unbuilt topic when the owner says "continue" — never rebuild a page
  already delivered.
- When all 18 pages are done, package them into ONE downloadable ZIP named
  Noryvello_AdSense_Readiness_18.zip (see the last section).
- The owner will send the ZIP to Suraiya, who verifies every page before
  publish. You do NOT publish anything. You do NOT touch the hub page,
  the sitemap, or ads-config.js — Suraiya adds hub links and sitemap
  entries at publish time.

## For the owner
Upload this whole file to the builder chat. The builder will work through
all 18 topics on its own, one page per reply, and make the ZIP at the end.
Bring the ZIP to Suraiya — she verifies every page and publishes all at once.
Note: the Contact page uses the Telegram channel as its only contact
channel (link given in topic 2) — NO email address appears anywhere on any
page, ever. The Privacy page carries a [LAST-UPDATED-TO-FILL] placeholder
for the last-updated date; Suraiya fills that from the owner's word at
publish — the builder must not invent it.

## Prompt 0-EN — SETUP (in this file, read and follow exactly)

```text
You are building pages for Noryvello, a free tools hub at
https://noryvello.github.io/. Every page you build must follow ALL the rules
below, exactly. The 18 topics are listed in this file, in order. Build them
one at a time, in order, without waiting. For each topic, return
ONE complete, self-contained HTML file in a single code block, nothing else.

LANGUAGE — English only. <html lang="en">.

STRUCTURE — every page has exactly this shape, in this order:
1. <head>: charset, viewport, unique <title> ending in " | Noryvello",
   unique meta description (80-250 characters, states what the page delivers),
   canonical link, og:type article, og:title (title without the suffix),
   og:description (one sentence), og:url. Canonical and og:url are
   https://noryvello.github.io/<slug>/ with a trailing slash.
2. The CSS block below, copied EXACTLY, unchanged. You may add a few extra
   rules after it only if the page needs them.
3. One FAQPage JSON-LD script with exactly the same questions and answers as
   the visible FAQ section (rule 7 below).
4. <body>: brand line, ONE <h1>, an answer-first box (<p class="answer">)
   that answers the title's question in 2-3 sentences or says exactly what
   the page delivers, then the guide content, then a warn box
   (<div class="warn">) stating the honest limit of the page, then H2
   content sections, then "Questions people ask" with the visible FAQs, then
   "More free tools on Noryvello" with 3-5 links to existing pages (use ONLY
   the slugs listed in the topic spec), then the note line, then the AD ZONE
   block below copied EXACTLY, then the footer, then ALWAYS as the last
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

NOTE LINE (exactly, before the ad zone):
<p class="note">Noryvello is a free tools hub — every tool works in your browser with no sign-up.</p>

AD ZONE (copy exactly, directly before <footer>, on every page — placeholder
only, NEVER raw ad tags, NEVER any script tag from an ad network):
<div style="margin:28px auto 4px;text-align:center;max-width:100%;overflow:hidden">
<div id="container-d3643148ad0d192d49387f5ff33bfbab"></div>
<div id="noryvello-ad-banner-slot"></div>
</div>

RULES:
- Every page DELIVERS what its title promises. No filler, no invented facts.
  Any number or worked example must be checked by hand first.
- DEPTH: guides must carry 800-1,200+ words of real content; trust pages
  400+ words. Thin pages are rejected.
- FAQ: 4-6 questions per page. The visible FAQs and the JSON-LD must match
  word for word.
- No crypto/speculation, no improvised medical/insurance/mental-health
  content, no politics, nothing needing expert review. No fake content.
- Currency-agnostic wording; no prices, no affiliate links, no phone numbers.
- No invented contact details, people, awards, or statistics. NEVER include
  any email address on any page. Where a spec says [OWNER-TO-FILL] or
  [LAST-UPDATED-TO-FILL], leave that placeholder text exactly as written.
- These are guide pages, not tools: no calculator is required. If you add
  any interactive element, every control must work with zero console errors.
- Related links: use ONLY the slugs listed in the topic spec, as
  <a href="https://noryvello.github.io/<slug>/"> links, separated by " · ".
```

## The 18 topics (in order)

### 1. about — About Noryvello
- Title: `About Noryvello | Noryvello` — H1: `About Noryvello`
- Deliver: what Noryvello is (a free hub of browser tools and plain-language
  guides, no sign-up, everything works in the browser), who runs it (an
  independent creator based in Bangladesh — do NOT invent a name, bio,
  credentials, team, or awards), how pages are made (each tool is tested
  before publish, guides are checked for plain, honest wording), and what
  the site will never do (no sign-up walls, no fake tools, no copied
  content). End with what is coming next (more tools and guides, same
  standard). 400+ words.
- FAQ seeds: Is Noryvello free? Do I need an account? Who runs Noryvello?
  How do I suggest a tool or report a mistake?
- Related: paint-calculator, sleep-calculator, tip-calculator,
  baby-name-generator.

### 2. contact — Contact Noryvello
- Title: `Contact Noryvello | Noryvello` — H1: `Contact Noryvello`
- Deliver: how to reach the site owner through the Telegram channel — ONE
  link to https://t.me/+FfnlCZPeZLAwZTI1 exactly (the channel is the ONLY
  contact channel). Explain what to write about (a broken tool, a wrong
  result, a suggestion, a content correction), what to include (the page
  URL and what happened), and the expected reply time using the placeholder
  `[OWNER-RESPONSE-TIME-TO-FILL]` exactly. No form (this is a static site),
  no email address, no phone number, no other channel, no invented details.
  400+ words.
- FAQ seeds: How do I report a broken tool? How long until I hear back?
  Can I suggest a new tool? Do you accept guest posts? (Answer: no, plainly.)
- Related: about, privacy-policy, sleep-calculator.

### 3. privacy-policy — Privacy Policy
- Title: `Privacy Policy | Noryvello` — H1: `Privacy Policy`
- Deliver a policy that matches reality EXACTLY. It MUST state, plainly:
  no accounts and no sign-ups; the site sets no cookies of its own; no
  analytics is installed; no ads are running on the site at the time of
  writing; the site itself collects no personal data; pages are hosted on
  GitHub Pages, whose servers may keep standard technical logs (such as IP
  address, date, and page requested) that Noryvello does not see or
  control; if you message us on Telegram, your message is used only to reply; no data is
  sold or shared with anyone. Include a last-updated line using the
  placeholder `[LAST-UPDATED-TO-FILL]` exactly, and a line saying the
  policy will be updated here if anything changes. FORBIDDEN: any mention
  of AdSense, DART, advertising cookies, Google Analytics, or any data
  collection that does not exist. 400+ words.
- FAQ seeds: Do you collect my personal data? Do you use cookies? Are
  there ads on Noryvello? Who hosts this site?
- Related: about, contact.

### 4. room-air-conditioner-buying-guide — Room Air Conditioner Buying Guide
- Title: `Room Air Conditioner Buying Guide: Size, Type and What to Check | Noryvello`
- H1: `Room Air Conditioner Buying Guide`
- Deliver: how size relates to room size (BTU basics, link the BTU
  calculator), window vs split vs portable types and who each suits,
  energy ratings explained in plain generic terms, noise, installation
  checks before buying, and basic maintenance that keeps a unit efficient.
  No prices, no brand recommendations, no invented ratings. 800+ words.
- FAQ seeds: How do I know what size AC my room needs? Is a split AC
  better than a window AC? What should I check before installation? How
  often should an AC be serviced?
- Related: ac-size-btu-calculator, ceiling-fan-size-finder,
  fan-vs-air-conditioner, home-energy-audit-checklist.

### 5. emi-explained-guide — EMI Explained
- Title: `EMI Explained: How Loan Repayments Work | Noryvello`
- H1: `EMI Explained: How Loan Repayments Work`
- Deliver: what an EMI is, how each payment splits between interest and
  principal and how that split changes over time, flat vs reducing-balance
  interest (link the comparison page), what prepayment means, and what to
  check before borrowing (total cost, not just the monthly figure). Worked
  example with hand-checked numbers. Warn box: educational content only,
  not financial advice. 800+ words.
- FAQ seeds: What does EMI stand for? Why is the interest part higher at
  the start? What is the difference between flat and reducing-balance
  interest? Does prepayment save money?
- Related: flat-rate-vs-reducing-balance, debt-payoff-calculator,
  credit-card-mistakes, paycheck-budget-splitter.

### 6. youtube-thumbnail-guide — YouTube Thumbnail Guide
- Title: `YouTube Thumbnail Guide: Sizes, Text and What Gets Clicks | Noryvello`
- H1: `YouTube Thumbnail Guide`
- Deliver: recommended dimensions and file basics, text rules (few words,
  readable at small size), contrast and faces, common mistakes, and how to
  test and improve thumbnails over time. Do NOT claim any downloader or
  tool. No invented click-through statistics. 800+ words.
- FAQ seeds: What size should a YouTube thumbnail be? How much text should
  a thumbnail have? Do faces in thumbnails help? How do I know if a
  thumbnail is working?
- Related: youtube-revenue-calculator, phone-photography-guide,
  product-photo-guide, free-ai-image-generators.

### 7. how-age-is-calculated — How Age Is Calculated
- Title: `How Age Is Calculated: Years, Months and Leap Years | Noryvello`
- H1: `How Age Is Calculated`
- Deliver: the exact-age method (years, then months, then days), leap-year
  edge cases (including 29 February birthdays), age at a future or past
  date, and everyday uses (school cutoffs, eligibility ages). Worked
  examples with hand-checked dates and numbers. 800+ words.
- FAQ seeds: How do you calculate exact age? How does a leap year affect
  age? When does someone born on 29 February have a birthday? What is the
  difference between age in years and age in days?
- Related: daylight-saving-dates-guide, easter-date-finder,
  goal-setting-worksheet, ramadan-countdown.

### 8. read-water-bill-guide — How to Read a Water Bill
- Title: `How to Read a Water Bill: Meter, Units and Leak Checks | Noryvello`
- H1: `How to Read a Water Bill`
- Deliver: how to read a water meter, what the units/volume figures mean,
  fixed charges vs usage charges in generic terms, how to estimate your own
  use, a simple leak check anyone can do, and what to ask the supplier when
  a bill looks wrong. No prices, no supplier-specific claims. 800+ words.
- FAQ seeds: How do I read my water meter? What do the units on a water
  bill mean? Why did my water bill jump suddenly? How can I check for a
  leak at home?
- Related: read-electricity-bill-guide, shower-vs-bath-water-use,
  hand-wash-vs-dishwasher-water-use, rainwater-harvest-calculator.

### 9. organize-digital-photos-guide — How to Organize Digital Photos
- Title: `How to Organize Digital Photos: Folders, Names and Backups | Noryvello`
- H1: `How to Organize Digital Photos`
- Deliver: a simple folder system that survives years, a file-naming habit,
  dealing with duplicates, favorites and albums, the 3-2-1 backup reminder
  (link the phone backup guide), and a short yearly tidy routine. No app
  endorsements, no invented storage claims. 800+ words.
- FAQ seeds: What is the best way to organize photos? How should I name
  photo files? How do I handle duplicate photos? How many backups of my
  photos should I keep?
- Related: phone-backup-guide, digital-declutter-checklist,
  scan-documents-with-phone-guide, old-phone-repurposing-guide.

### 10. cover-letter-guide — How to Write a Cover Letter
- Title: `How to Write a Cover Letter: Structure, Examples and Mistakes | Noryvello`
- H1: `How to Write a Cover Letter`
- Deliver: the structure that works (opening, fit, closing), how to tailor
  one letter to one job, ideal length, and the mistakes that get letters
  ignored. Include short example paragraphs clearly labeled as examples —
  not text to copy blindly. 800+ words.
- FAQ seeds: How long should a cover letter be? Should I write a new cover
  letter for every job? What should the first paragraph say? What are the
  most common cover letter mistakes?
- Related: cv-mistakes, interview-mistakes, resignation-letter-guide,
  first-job-checklist.

### 11. video-interview-preparation-guide — Video Interview Preparation
- Title: `Video Interview Preparation: Setup, Practice and Backup Plans | Noryvello`
- H1: `Video Interview Preparation`
- Deliver: camera, lighting, and sound setup; background and framing;
  connection and software test; a short practice routine; a backup plan
  for tech failures; and a day-of checklist. No app endorsements. 800+ words.
- FAQ seeds: What is the best lighting for a video interview? How do I
  test my setup before the call? What should I do if my connection drops
  mid-interview? Should I look at the camera or the screen?
- Related: interview-mistakes, cv-mistakes, home-office-setup-checklist,
  work-from-home-mistakes.

### 12. spot-phishing-messages-guide — How to Spot Phishing Messages
- Title: `How to Spot Phishing Messages: Email, SMS and Chat Red Flags | Noryvello`
- H1: `How to Spot Phishing Messages`
- Deliver: the urgency and fear tricks, how to check a sender, how to
  inspect a link WITHOUT clicking it, one-time-code and parcel-delivery
  scams, what to do if you already clicked, and how to report a message.
  Warn box: general guidance only, not incident-specific security advice.
  No invented scam statistics. 800+ words.
- FAQ seeds: What are the signs of a phishing message? Should I click a
  link to check if it is real? What should I do if I entered details on a
  fake page? Why do phishing messages create urgency?
- Related: website-safety-checks, job-scam-spotting-guide,
  spot-fake-product-review, phone-backup-guide.

### 13. phone-battery-saving-guide — How to Save Phone Battery
- Title: `How to Save Phone Battery: Settings and Habits That Work | Noryvello`
- H1: `How to Save Phone Battery`
- Deliver: screen and brightness settings, background refresh, location
  use, Wi-Fi vs mobile data, charging habits (link the charging-time
  calculator), and battery-health myths corrected plainly. No invented
  percentage claims. 800+ words.
- FAQ seeds: What drains phone battery the fastest? Does closing apps save
  battery? Is it bad to charge a phone overnight? Does dark mode save
  battery?
- Related: charging-time-calculator, battery-backup-time-calculator,
  rechargeable-vs-disposable-batteries, old-phone-repurposing-guide.

### 14. leftover-food-storage-guide — Leftover Food Storage Guide
- Title: `Leftover Food Storage Guide: How Long, How Cold, How to Reheat | Noryvello`
- H1: `Leftover Food Storage Guide`
- Deliver: the cool-down rule, fridge and freezer storage times as general
  ranges (labeled as general guidance), containers and labeling, reheating
  until steaming hot throughout, and the when-in-doubt rule. Warn box:
  general food-safety guidance; follow local guidance for specific foods.
  No medical claims. 800+ words.
- FAQ seeds: How long can cooked food stay in the fridge? How quickly
  should leftovers be refrigerated? Can you reheat leftovers more than
  once? How do you know if leftovers are no longer safe?
- Related: egg-cooking-time-guide, meat-temperature-guide,
  pasta-cooking-time-guide, fridge-size-finder.

### 15. wifi-router-buying-guide — Wi-Fi Router Buying Guide
- Title: `Wi-Fi Router Buying Guide: Coverage, Speed and Placement | Noryvello`
- H1: `Wi-Fi Router Buying Guide`
- Deliver: coverage vs speed, frequency bands explained simply, how many
  devices a home really runs, placement rules that matter more than the
  router itself, single router vs mesh, and security basics (change the
  default password, keep firmware updated). No prices, no brand
  recommendations. 800+ words.
- FAQ seeds: What matters more, coverage or speed? Where should I place
  my router? Do I need a mesh system? How do I secure a new router?
- Related: file-transfer-time-calculator, data-usage-calculator,
  home-office-setup-checklist, cloud-storage-vs-external-drive.

### 16. beginner-vegetable-garden-guide — Beginner Vegetable Garden Guide
- Title: `Beginner Vegetable Garden Guide: Sun, Soil and First Crops | Noryvello`
- H1: `Beginner Vegetable Garden Guide`
- Deliver: sunlight needs, soil basics, bed vs container choice, easy
  first crops described generically, a watering rhythm (link the
  plant-watering guide), and the beginner mistakes that kill most first
  gardens. No region-specific planting claims. 800+ words.
- FAQ seeds: How much sun do vegetables need? Should I start with seeds
  or seedlings? What is the easiest vegetable to grow first? How often
  should I water a vegetable garden?
- Related: plant-watering-schedule-guide, seed-spacing-calculator,
  compost-ratio-guide, garden-mistakes.

### 17. self-study-language-guide — How to Learn a Language on Your Own
- Title: `How to Learn a Language on Your Own: A Self-Study Plan | Noryvello`
- H1: `How to Learn a Language on Your Own`
- Deliver: a realistic daily routine, balancing input (listening, reading)
  and output (speaking, writing), a vocabulary system that sticks, ways to
  practise speaking alone, how to measure progress, and how to stay
  consistent past the first month. No invented timelines or fluency
  promises. 800+ words.
- FAQ seeds: How much time per day does self-study need? What should a
  beginner learn first? How do I practise speaking without a partner? How
  do I stay motivated after the first weeks?
- Related: goal-setting-worksheet, morning-routine-builder,
  thirty-day-challenge-idea-generator, decision-helper-weighted.

### 18. daily-journaling-guide — Daily Journaling Guide
- Title: `Daily Journaling Guide: How to Start and Keep It Going | Noryvello`
- H1: `Daily Journaling Guide`
- Deliver: why people journal, a 5-minute start, starter prompts, morning
  vs evening journaling, keeping entries private, and how to keep the
  habit going. Warn box: journaling is not therapy; for serious distress,
  talk to a qualified person. No medical claims. 800+ words.
- FAQ seeds: What should I write in a journal? How long should a journal
  entry be? Is morning or evening journaling better? What if I miss a day?
- Related: goal-setting-worksheet, morning-routine-builder,
  breathing-exercise-guide, bucket-list-idea-generator.

## ZIP — when all 18 pages are done
Package all 18 pages into ONE downloadable ZIP named
`Noryvello_AdSense_Readiness_18.zip`. Inside the ZIP, one folder per page
named by its slug, each holding that page's complete HTML as `index.html`
(for example `about/index.html`, `cover-letter-guide/index.html`). The
HTML inside the ZIP must be byte-identical to the HTML in the per-reply
code blocks — never retype or shorten pages for the ZIP. Tell the owner
the ZIP is ready. The owner sends it to Suraiya, who verifies every page
before publish.
