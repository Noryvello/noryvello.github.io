# Noryvello Batch 11 — 2027 seasonal wave pack (20 pages)

## INSTRUCTIONS FOR THE AI READING THIS FILE (read first, follow exactly)
You are the page builder. This file is your complete instruction set.
- Follow Prompt 0-EN below exactly for every page.
- Build ALL 20 topics in this file, IN ORDER, WITHOUT waiting for the owner
  to name each one. After finishing one page, continue to the next topic
  on your own, until all 20 are done.
- Return ONE page per reply: one complete HTML file in a single code block,
  nothing else. Never put two pages in one reply.
- Do NOT build anything else, and do NOT pick your own topics. Build ONLY
  the 20 topics in this file.
- If the session stops before all 20 are done, continue from the next
  unbuilt topic when the owner says "continue" — never rebuild a page
  already delivered.
- When all 20 pages are done, package them into ONE downloadable ZIP named
  Noryvello_2027_Wave_20.zip (see the last section).
- The owner will send the ZIP to Suraiya, who verifies every page before
  publish. You do NOT publish anything. You do NOT touch the hub page,
  the sitemap, or ads-config.js — Suraiya adds hub links and sitemap
  entries at publish time.

## For the owner
Upload this whole file to the builder chat. The builder will work through
all 20 topics on its own, one page per reply, and make the ZIP at the end.
Bring the ZIP to Suraiya — she verifies every page and publishes all at once.
Note: the Islamic dates in this batch are EXPECTED dates that depend on the
sighting of the moon and can shift by a day — every page says so plainly.
NO email address appears anywhere on any page, ever.

## Prompt 0-EN — SETUP (in this file, read and follow exactly)

```text
You are building pages for Noryvello, a free tools hub at
https://noryvello.github.io/. Every page you build must follow ALL the rules
below, exactly. The 20 topics are listed in this file, in order. Build them
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

TABLES — if a page needs a table, add minimal table rules AFTER the CSS
block (full width, collapsed borders, padded cells, readable on a phone).
Never change the copied block itself.

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
- VERIFIED FACTS ONLY: use ONLY the dates, numbers, and facts given in the
  topic spec. Never add a date, number, score, or statistic from your own
  knowledge. Where a spec says a date is EXPECTED or APPROXIMATE, the page
  must say so in plain words — never present an expected date as certain.
- MOON-SIGHTING DATES: Islamic dates in this batch depend on the sighting
  of the moon and can shift by a day. Every page carrying one must say so
  and tell readers to follow their local mosque or authority's announcement.
- DEPTH: guides must carry 800-1,200+ words of real content. Thin pages
  are rejected.
- FAQ: 4-6 questions per page. The visible FAQs and the JSON-LD must match
  word for word.
- ORIGINAL TEXT: greetings messages must be written by you, original, never
  copied from other sites.
- No crypto/speculation, no improvised medical/insurance/mental-health
  content, no politics, nothing needing expert review. No fake content.
- Currency-agnostic wording; no prices, no affiliate links, no phone numbers.
- No invented contact details, people, awards, or statistics. NEVER include
  any email address on any page.
- These are guide pages, not tools: no calculator is required. If you add
  any interactive element, every control must work with zero console errors.
- Related links: use ONLY the slugs listed in the topic spec, as
  <a href="https://noryvello.github.io/<slug>/"> links, separated by " · ".
```

## The 20 topics (in order)

### 1. laylat-al-qadr-2027 — Laylat al-Qadr 2027
- Title: `Laylat al-Qadr 2027: Expected Date and the Last 10 Nights | Noryvello`
- H1: `Laylat al-Qadr 2027`
- Deliver: what Laylat al-Qadr is (the Night of Decree, the night the Quran
  was first revealed; Surah al-Qadr, chapter 97, describes it as better than
  a thousand months, 97:3). The expected 2027 timing — Ramadan 1448 is
  expected to begin on Monday 8 February 2027, subject to moon sighting.
  The last 10 nights begin at sunset on Saturday 27 February 2027 (the eve
  of 21 Ramadan). In the Islamic calendar the night comes BEFORE its day,
  so each odd night begins at sunset on the evening BEFORE the numbered
  day — state all five exactly this way: the 21st night begins at sunset
  on Saturday 27 February (21 Ramadan day: Sunday 28 February); the 23rd
  night begins at sunset on Monday 1 March (23 Ramadan day: Tuesday
  2 March); the 25th night begins at sunset on Wednesday 3 March
  (25 Ramadan day: Thursday 4 March); the 27th night begins at sunset on
  Friday 5 March (27 Ramadan day: Saturday 6 March); the 29th night begins
  at sunset on Sunday 7 March (29 Ramadan day: Monday 8 March). The 27th
  night is the most widely observed, but the exact night is hidden — the
  Prophet ﷺ taught Muslims to seek it in the odd nights of the last ten
  (narration in Sahih al-Bukhari), so seek all five odd nights. What people
  do on these nights, in general terms: night prayer, reading Quran, dua,
  charity, and i'tikaf for those able. Include the dua the Prophet ﷺ taught
  Aisha (RA) for this night, exactly as given here — Arabic:
  اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي; transliteration:
  "Allahumma innaka 'afuwwun tuhibbul-'afwa fa'fu 'anni"; meaning: "O Allah,
  You are Pardoning and You love pardon, so pardon me." Source: Jami'
  at-Tirmidhi 3513 and Sunan Ibn Majah 3850. One line may note that some
  editions add the word "Karimun" after "'afuwwun" — either form is fine.
  Warn box: all dates are expected and depend on moon sighting; follow your
  local mosque's announcement. 800+ words.
- FAQ seeds: When is Laylat al-Qadr 2027? Which nights are the odd nights
  of the last ten? Why is the 27th night special? What dua should I say on
  Laylat al-Qadr? What should I do on these nights?
- Related: ramadan-countdown, ramadan-2027-calendar,
  eid-al-fitr-countdown-2027, hajj-2027-dates-guide.

### 2. ramadan-2027-calendar — Ramadan 2027 Calendar
- Title: `Ramadan 2027 Calendar: Day-by-Day Expected Dates | Noryvello`
- H1: `Ramadan 2027 Calendar`
- Deliver: a full day-by-day table of EXPECTED dates for Ramadan 1448.
  1 Ramadan = Monday 8 February 2027; the month is expected to have 29 days
  (Umm al-Qura calculated calendar), so 29 Ramadan = Monday 8 March 2027.
  The table must use exactly this mapping (Ramadan day, weekday, Gregorian
  date): 1 Mon 8 Feb · 2 Tue 9 Feb · 3 Wed 10 Feb · 4 Thu 11 Feb · 5 Fri
  12 Feb · 6 Sat 13 Feb · 7 Sun 14 Feb · 8 Mon 15 Feb · 9 Tue 16 Feb ·
  10 Wed 17 Feb · 11 Thu 18 Feb · 12 Fri 19 Feb · 13 Sat 20 Feb · 14 Sun
  21 Feb · 15 Mon 22 Feb · 16 Tue 23 Feb · 17 Wed 24 Feb · 18 Thu 25 Feb ·
  19 Fri 26 Feb · 20 Sat 27 Feb · 21 Sun 28 Feb · 22 Mon 1 Mar · 23 Tue
  2 Mar · 24 Wed 3 Mar · 25 Thu 4 Mar · 26 Fri 5 Mar · 27 Sat 6 Mar ·
  28 Sun 7 Mar · 29 Mon 8 Mar. Mark in the table: first taraweeh on the
  night of Sunday 7 February (the night before 1 Ramadan); the last 10
  nights begin at sunset on Saturday 27 February; the odd nights (21st,
  23rd, 25th, 27th, 29th — each night begins at sunset the evening before
  its numbered day); Eid al-Fitr expected Tuesday 9 March 2027. Explain
  how the dates are set (moon sighting; the Umm al-Qura calendar is a
  calculated calendar; countries and communities can differ by a day) and
  the 30-day case plainly: if the month completes 30 days, Ramadan ends
  Tuesday 9 March and Eid al-Fitr moves to Wednesday 10 March. Warn box:
  every date on this page is expected, not confirmed — follow your local
  mosque or authority's moon-sighting announcement. 800+ words including
  how to use the calendar.
- FAQ seeds: When does Ramadan 2027 start? How many days is Ramadan 2027?
  When is Eid al-Fitr 2027? Why might the Ramadan dates change? What
  happens if Ramadan is 30 days?
- Related: ramadan-countdown, laylat-al-qadr-2027,
  eid-al-fitr-countdown-2027, hajj-2027-dates-guide.

### 3. ramadan-greetings — Ramadan Mubarak Greetings
- Title: `Ramadan Mubarak Greetings: Messages and Wishes for Ramadan | Noryvello`
- H1: `Ramadan Mubarak Greetings and Messages`
- Deliver: an original collection of 30+ Ramadan messages, written by you,
  grouped under H2 sections: short texts, messages for family, messages
  for friends, formal messages for colleagues, dua-style messages, and
  short captions for social posts. A short section explaining what
  "Ramadan Mubarak" and "Ramadan Kareem" mean, and when to send greetings
  (at the start of Ramadan — expected Monday 8 February 2027, subject to
  moon sighting — and through the month). A short section on personalizing
  a message (use the person's name, mention something specific, keep it
  sincere). ALL messages must be original text — never copied from other
  sites. No images are needed. 800+ words total including the messages.
- FAQ seeds: What is the difference between Ramadan Mubarak and Ramadan
  Kareem? When should I send Ramadan greetings? What do I write in a
  Ramadan card? Is it OK to send Ramadan wishes to a colleague?
- Related: ramadan-countdown, ramadan-2027-calendar, eid-al-fitr-greetings,
  laylat-al-qadr-2027.

### 4. zakat-al-fitr-2027-guide — Zakat al-Fitr 2027
- Title: `Zakat al-Fitr 2027: Amount, Rules and When to Pay | Noryvello`
- H1: `Zakat al-Fitr 2027`
- Deliver: what Zakat al-Fitr (fitrana) is — the obligatory charity paid
  at the end of Ramadan, before the Eid al-Fitr prayer. The measure: one
  sa' of staple food per person, about 2.5–3 kg (wheat, rice, dates,
  barley are the commonly given staples). Who pays: it is owed for every
  person, including children and newborns, and the head of the household
  pays for the household. When: it may be paid during Ramadan or 1–2 days
  before Eid, and it MUST be paid before the Eid prayer (Eid al-Fitr is
  expected Tuesday 9 March 2027, subject to moon sighting) — paid after
  the Eid prayer it counts only as ordinary charity (sadaqah), per the
  hadith of Ibn Abbas; the obligation is narrated from Ibn Umar (Sahih
  al-Bukhari 1503 / Sahih Muslim 984). Cash: the Hanafi school permits
  paying the cash value of the food instead. Cash rates are set LOCALLY
  each Ramadan — the page must NOT state any universal cash amount and
  must tell readers to use their local mosque or charity's announced 2027
  rate (UK charities announced around £5 per person — use this ONLY as an
  example clearly labeled UK-only). How Zakat al-Fitr differs from annual
  zakat (2.5% of wealth above the nisab threshold, paid once a year).
  Warn box: schools of thought differ on details; follow your local
  scholars and mosque for the rate and method. 800+ words.
- FAQ seeds: How much is Zakat al-Fitr per person? When must Zakat al-Fitr
  be paid? Can Zakat al-Fitr be paid in cash? Who has to pay Zakat
  al-Fitr? What happens if I pay after the Eid prayer?
- Related: ramadan-countdown, ramadan-2027-calendar,
  eid-al-fitr-countdown-2027, eid-al-fitr-greetings.

### 5. eid-al-fitr-greetings — Eid al-Fitr Greetings
- Title: `Eid al-Fitr Greetings: Eid Mubarak Messages and Wishes 2027 | Noryvello`
- H1: `Eid al-Fitr Greetings and Messages`
- Deliver: an original collection of 30+ Eid al-Fitr messages, written by
  you, grouped under H2 sections: short texts, messages for family,
  messages for friends, formal messages for colleagues, messages that
  mention the end of Ramadan and new beginnings, and short captions for
  social posts. A short section explaining what "Eid Mubarak" means and
  how to reply to it. Eid al-Fitr is expected Tuesday 9 March 2027 (or
  Wednesday 10 March if Ramadan completes 30 days — expected, subject to
  moon sighting); say when to send greetings (from the sighting of the
  Shawwal moon through the days of Eid). ALL messages must be original
  text — never copied from other sites. 800+ words total including the
  messages.
- FAQ seeds: What does Eid Mubarak mean? When is Eid al-Fitr 2027? What
  should I write in an Eid card? How do I reply to Eid Mubarak?
- Related: eid-al-fitr-countdown-2027, ramadan-greetings,
  zakat-al-fitr-2027-guide, eid-al-adha-greetings.

### 6. qurbani-2027-guide — Qurbani 2027
- Title: `Qurbani 2027: Rules, Animals, Shares and Meat Distribution | Noryvello`
- H1: `Qurbani 2027`
- Deliver: what Qurbani (udhiyah) is — the sacrifice offered at Eid
  al-Adha, remembering the willingness of Prophet Ibrahim (AS). WHEN: it
  is offered on the 10th, 11th, and 12th of Dhul-Hijjah, after the Eid
  prayer — Eid al-Adha is expected Sunday 16 May 2027, and the Day of
  Arafah is expected Saturday 15 May 2027 (both expected, subject to moon
  sighting). Slaughter before the Eid prayer does not count as Qurbani.
  The Shafi'i school extends the days to the 13th; the majority view ends
  the time at sunset on the 12th. WHO: in the Hanafi school it is wajib
  (obligatory) for a sane, adult, resident Muslim who holds the nisab
  threshold; in the Shafi'i, Maliki, and Hanbali schools it is a strongly
  emphasized Sunnah (Sunnah mu'akkadah). It is per person, not per family.
  The nisab is the zakat nisab: 85 grams of gold or 595 grams of silver
  (612.36 grams in the Hanafi conversion) — state the gram weights only,
  never a fixed cash figure, because the cash value changes. ANIMALS: a
  sheep or goat counts for one person; a cow, buffalo, or camel can be
  shared by up to seven people. The commonly cited minimum ages: sheep
  6 months (well-grown), goats 1 year, cows 2 years, camels 5 years. The
  animal must be healthy and free of major defects, in general terms.
  MEAT: the recommended three-way split — one part for the family, one
  part for relatives, friends, and neighbours, and one part for the poor.
  State plainly that this division is RECOMMENDED, not obligatory, and
  that scholars differ on the details. Warn box: rules vary by school of
  thought; follow your local scholars. 800+ words.
- FAQ seeds: When is Qurbani 2027? Who has to offer Qurbani? How many
  shares is a cow for Qurbani? How should Qurbani meat be divided? Can
  Qurbani be done before the Eid prayer?
- Related: eid-al-adha-countdown-2027, hajj-2027-dates-guide,
  eid-al-adha-greetings, zakat-al-fitr-2027-guide.

### 7. eid-al-adha-greetings — Eid al-Adha Greetings
- Title: `Eid al-Adha Greetings: Eid Mubarak Messages and Wishes 2027 | Noryvello`
- H1: `Eid al-Adha Greetings and Messages`
- Deliver: an original collection of 30+ Eid al-Adha messages, written by
  you, grouped under H2 sections: short texts, messages for family,
  messages for friends, formal messages for colleagues, messages on the
  themes of sacrifice, sharing, and gratitude, and short captions for
  social posts. A short section on what makes Eid al-Adha greetings
  different (Hajj season, Qurbani, sharing with those in need). Eid
  al-Adha is expected Sunday 16 May 2027 (expected, subject to moon
  sighting). ALL messages must be original text — never copied from other
  sites. 800+ words total including the messages.
- FAQ seeds: When is Eid al-Adha 2027? What does Eid al-Adha celebrate?
  What should I write in an Eid al-Adha card? What is the difference
  between Eid al-Fitr and Eid al-Adha greetings?
- Related: eid-al-adha-countdown-2027, qurbani-2027-guide,
  hajj-2027-dates-guide, eid-al-fitr-greetings.

### 8. solar-eclipse-photography-guide — How to Photograph a Solar Eclipse
- Title: `How to Photograph a Solar Eclipse Safely: Camera and Phone Guide | Noryvello`
- H1: `How to Photograph a Solar Eclipse`
- Deliver: SAFETY FIRST, before any settings: a certified solar filter
  (ISO 12312-2) must cover the FRONT of the lens for every partial phase
  and for the whole of an annular eclipse. Never use sunglasses, ordinary
  ND filters, polarisers, smoked glass, or photographic film as a
  substitute. Never look through a camera viewfinder at the Sun without a
  filter on the lens, and never place eclipse glasses behind binoculars,
  a telescope, or a camera lens — concentrated sunlight can burn through
  them. The filter may be removed ONLY during totality, only from inside
  the path of totality, and only after the Sun's bright surface is fully
  covered — and it must go back on the instant totality ends. Phones need
  a filter too: pointing a phone at the Sun can damage its sensor. Note
  that from the UK the 2 August 2027 eclipse is partial only, so the
  filter stays on for the whole event there. CAMERA (DSLR/mirrorless):
  manual mode, shoot RAW, manual focus locked on the Sun's edge, tripod
  plus a remote release or the 2-second timer, and a rehearsal on an
  ordinary sunny day with the filter fitted. Starting points WITH a filter
  for the partial phases: ISO 100, f/8–f/11, 1/500–1/4000 second, bracket
  several frames. For totality (filter off): ISO 100–800, f/5.6–f/11,
  about 1/1000 second to 1 second or longer. A 200–600 mm lens gives a
  larger solar disk. PHONE: cover the rear lens with a certified solar
  filter for every partial phase; lock focus and exposure by tapping and
  holding on the Sun; use optical zoom, not digital zoom; use pro/manual
  mode if the phone has one; a small tripod mount helps; phones are best
  for wide, atmospheric shots — the eclipsed Sun in a landscape, the
  changing light, the people watching. PINHOLE ALTERNATIVE: a small hole
  in a card projects the Sun's image onto a surface — photograph the
  projection, never the Sun through the pinhole. State plainly that all
  settings are STARTING POINTS, not universal values — the right exposure
  depends on the filter, camera, haze, and the Sun's height. Link the
  2027 eclipse guide and countdown in the Related section. 800+ words.
- FAQ seeds: Do I need a filter to photograph an eclipse? When can I
  remove the solar filter? Can I photograph an eclipse with a phone? What
  camera settings should I start with? Is it safe to photograph a partial
  eclipse?
- Related: solar-eclipse-2027-guide, solar-eclipse-countdown-2027,
  upcoming-solar-eclipses, phone-photography-guide.

### 9. upcoming-solar-eclipses — Upcoming Solar Eclipses 2027–2030
- Title: `Upcoming Solar Eclipses 2027–2030: Dates, Types and Paths | Noryvello`
- H1: `Upcoming Solar Eclipses`
- Deliver: a table of the next six total and annular solar eclipses, from
  NASA eclipse predictions, with date, type, maximum duration, and where
  the central path runs: 6 February 2027 — annular, Saros 131, maximum
  ring 7 minutes 51 seconds, annular path over Chile, Argentina, and the
  Atlantic (partial across South America, Antarctica, and western and
  southern Africa); 2 August 2027 — total, Saros 136, maximum totality
  6 minutes 23 seconds, total path over Morocco, Spain, Algeria, Libya,
  Egypt, Saudi Arabia, Yemen, and Somalia; 26 January 2028 — annular,
  Saros 141, maximum ring 10 minutes 27 seconds, annular path over
  Ecuador, Peru, Brazil, Suriname, Spain, and Portugal; 22 July 2028 —
  total, Saros 146, maximum totality 5 minutes 10 seconds, total path
  over Australia (including Sydney) and New Zealand's South Island;
  1 June 2030 — annular, Saros 128, maximum ring 5 minutes 21 seconds,
  annular path over Algeria, Tunisia, Greece, Turkey, Russia, northern
  China, and Japan; 25 November 2030 — total, Saros 133, maximum totality
  3 minutes 44 seconds, total path over Namibia, Botswana, South Africa,
  and southern Australia. Explain the three types in plain terms (total:
  the Moon fully covers the Sun; annular: the Moon covers the middle and
  leaves a ring of fire; partial: only part of the Sun is covered). A
  safety pointer: never look at the Sun without certified eclipse glasses
  or a proper solar filter, and link the eclipse guide. State that this
  list covers total and annular eclipses only, and that durations are the
  maximum values from NASA's predictions. 800+ words.
- FAQ seeds: When is the next solar eclipse? What is the difference
  between a total and an annular eclipse? Where can I see the 2 August
  2027 eclipse? When is the next eclipse after 2028?
- Related: solar-eclipse-2027-guide, solar-eclipse-countdown-2027,
  solar-eclipse-photography-guide, full-moon-calendar-2027.

### 10. full-moon-calendar-2027 — Full Moon Calendar 2027
- Title: `Full Moon Calendar 2027: All 12 Dates and Names | Noryvello`
- H1: `Full Moon Calendar 2027`
- Deliver: a table of all 12 full moons of 2027 with UTC DATES ONLY (no
  clock times) and their traditional names: Friday 22 January — Wolf
  Moon (a supermoon, the closest full moon of 2027, about 357,644 km
  away); Saturday 20 February — Snow Moon (coincides with a penumbral
  lunar eclipse); Monday 22 March — Worm Moon; Tuesday 20 April — Pink
  Moon; Thursday 20 May — Flower Moon (a seasonal Blue Moon by the older
  rule — the third of four full moons in one season); Saturday 19 June —
  Strawberry Moon; Sunday 18 July — Buck Moon; Tuesday 17 August —
  Sturgeon Moon; Wednesday 15 September — Harvest Moon (the full moon
  nearest the September equinox, which falls on 23 September); Friday
  15 October — Hunter's Moon; Sunday 14 November — Beaver Moon; Monday
  13 December — Cold Moon. Explain: 2027 has exactly 12 full moons, one
  in every month, so there is NO calendar Blue Moon in 2027 (a calendar
  Blue Moon needs two full moons in one month). The names are the
  traditional North American almanac names, not official astronomical
  names, and other cultures use other names. A short section on how to
  watch (no equipment needed; the evening of the full moon is the best
  show) and what the names refer to, in general seasonal terms. Warn box:
  dates are in UTC — where the full moon falls near midnight UTC, your
  local calendar date may read a day earlier or later. 800+ words.
- FAQ seeds: How many full moons are there in 2027? Is there a Blue Moon
  in 2027? What is the Harvest Moon? Why do full moons have names? When
  is the supermoon in 2027?
- Related: upcoming-solar-eclipses, solar-eclipse-2027-guide,
  meteor-showers-2027, leap-year-explained.

### 11. meteor-showers-2027 — Meteor Showers 2027
- Title: `Meteor Showers 2027: Peak Dates and Best Nights to Watch | Noryvello`
- H1: `Meteor Showers 2027`
- Deliver: a table of the 9 main annual meteor showers with the 2027 peak
  NIGHT (in Universal Time), the approximate ZHR, the radiant
  constellation, the parent body, and the 2027 moon verdict: Quadrantids
  — night of 3–4 January, ZHR about 80–120 (a narrow, uncertain peak),
  radiant Boötes, parent asteroid 2003 EH1, thin waning crescent moon
  (about 10% lit) — the best shower of 2027; Lyrids — night of 22–23
  April, ZHR about 18, radiant Lyra, parent comet C/1861 G1 (Thatcher),
  moonlit, poor; Eta Aquariids — night of 5–6 May, ZHR about 50, radiant
  Aquarius, parent comet 1P/Halley, dark skies, good; Southern Delta
  Aquariids — night of 30–31 July, ZHR about 25, radiant Aquarius, parent
  probably comet 96P/Machholz, dark skies, good; Perseids — night of
  12–13 August, ZHR about 100–110, radiant Perseus, parent comet
  109P/Swift-Tuttle, waxing gibbous moon (about 85% lit), poor; Orionids
  — night of 21–22 October, ZHR about 20, radiant Orion, parent comet
  1P/Halley; Leonids — night of 17–18 November, ZHR about 15, radiant Leo,
  parent comet 55P/Tempel-Tuttle, moonlit, poor; Geminids — night of
  13–14 December, ZHR about 150, radiant Gemini, parent asteroid 3200
  Phaethon, full moon — very poor on the peak night, watch on nights
  either side instead; Ursids — night of 22–23 December, ZHR about 10,
  radiant Ursa Minor, parent comet 8P/Tuttle. Explain ZHR (the zenithal
  hourly rate — the ideal-sky number; what you actually count under a
  country sky is usually two to three times lower), that no major
  outbursts or storms are predicted for 2027 (International Meteor
  Organization 2027 calendar), that peak nights are in Universal Time so
  an early-hours peak falls on the evening before in North America, and
  how to watch (a dark sky away from lights, no telescope needed, let
  your eyes adapt for 20 minutes). 800+ words.
- FAQ seeds: What is the best meteor shower in 2027? When do the Perseids
  peak in 2027? Why does the Moon matter for meteor showers? Do I need a
  telescope to watch a meteor shower? What does ZHR mean?
- Related: full-moon-calendar-2027, upcoming-solar-eclipses,
  solar-eclipse-2027-guide, solar-eclipse-photography-guide.

### 12. diwali-2027-date — Diwali 2027 Date
- Title: `Diwali 2027 Date: Friday 29 October and the Five-Day Festival | Noryvello`
- H1: `Diwali 2027 Date`
- Deliver: Diwali (Lakshmi Puja) falls on Friday 29 October 2027 in
  India. The five days of the festival: Dhanteras on Wednesday 27
  October, Narak Chaturdashi (Choti Diwali) on Thursday 28 October,
  Diwali (Lakshmi Puja) on Friday 29 October, Govardhan Puja / Bali
  Pratipada on Saturday 30 October, and Bhai Dooj on Sunday 31 October
  2027. What Diwali is, in general terms: the festival of lights — homes
  lit with lamps (diyas), worship of Lakshmi together with Ganesh for
  well-being, family gatherings, sweets, and fireworks. How the date is
  set: Diwali falls on the Amavasya (new moon) of the month of Kartik
  (Ashwin in the amanta reckoning), and the correct day is the one whose
  evening (Pradosh Kaal) falls within the Amavasya tithi — which is why
  the Gregorian date moves between October and November each year.
  REGIONAL VARIATION (required section): some communities and regions —
  including parts of South India and the diaspora in Malaysia, Singapore,
  and South Africa — observe Deepavali on Thursday 28 October 2027, a day
  earlier, because their almanacs reckon the tithi differently; readers
  must check their local panchang. Do NOT give muhurat clock times — they
  vary by city. Warn box: dates follow the panchang; local observance can
  differ by a day. 800+ words.
- FAQ seeds: When is Diwali 2027? Why do some places celebrate Diwali on
  28 October? What are the five days of Diwali? How is the Diwali date
  decided? Is Diwali a public holiday?
- Related: holi-2027-date, easter-date-finder,
  chinese-new-year-2027-countdown, full-moon-calendar-2027.

### 13. holi-2027-date — Holi 2027 Date
- Title: `Holi 2027 Date: Holika Dahan and Rangwali Holi | Noryvello`
- H1: `Holi 2027 Date`
- Deliver: Holika Dahan (the bonfire, Chhoti Holi) falls on the evening
  of Sunday 21 March 2027, and Rangwali Holi (the festival of colours,
  Dhulandi) falls on Monday 22 March 2027. What Holi is, in general
  terms: the Hindu spring festival of colours, celebrating the arrival
  of spring and the victory of good over evil, told through the story of
  Prahlad and Holika. How the date is set: Holi follows the Hindu lunar
  calendar and falls on Phalguna Purnima, the full-moon day of the last
  lunar month; the bonfire is lit in the evening Pradosh Kaal after
  sunset, while the Purnima tithi is running and avoiding Bhadra, and
  the colours are played the next day. REGIONAL VARIATION (required
  section): some regions, including parts of Punjab and Haryana, play
  colours on Tuesday 23 March 2027; in the Braj region (Mathura and
  Vrindavan) celebrations run for days before the main day, each with
  its own local tradition; readers must check a local panchang. Do NOT
  give muhurat clock times — they vary by city. Warn box: exact
  observance varies by region and tradition. 800+ words.
- FAQ seeds: When is Holi 2027? What is the difference between Holika
  Dahan and Rangwali Holi? Why does the Holi date change every year?
  Where is Holi celebrated? Why do some regions celebrate on 23 March?
- Related: diwali-2027-date, easter-date-finder,
  chinese-new-year-2027-countdown, full-moon-calendar-2027.

### 14. leap-year-explained — Leap Year Explained
- Title: `Leap Year Explained: The Rules and Is 2027 a Leap Year? | Noryvello`
- H1: `Leap Year Explained`
- Deliver: the answer first — 2027 is NOT a leap year: it has 365 days,
  and February 2027 has 28 days (Monday 1 February to Sunday 28
  February). The next leap year is 2028, when 29 February falls on a
  Tuesday. The Gregorian rule, in three steps: (1) a year divisible by 4
  is a leap year; (2) EXCEPT century years (divisible by 100), which are
  not leap years; (3) UNLESS the century year is also divisible by 400,
  in which case it IS a leap year. Worked examples, each checked: 2024 —
  leap year (divisible by 4); 2027 — not a leap year (not divisible by
  4); 2028 — leap year; 1900 — not a leap year (divisible by 100, not by
  400); 2000 — leap year (divisible by 400). WHY leap years exist: Earth
  takes about 365.25 days to orbit the Sun, so adding one day every four
  years keeps the calendar aligned with the seasons — without it, the
  calendar would drift by about a quarter-day every year. A leap-year
  list for 2024–2040: 2024, 2028, 2032, 2036, 2040. A short section on
  29 February birthdays in general terms (people customarily celebrate
  on 28 February or 1 March in non-leap years — link the age guide).
  2027 calendar facts: the year starts on Friday 1 January and ends on
  Friday 31 December — 52 weeks plus 1 day. 800+ words.
- FAQ seeds: Is 2027 a leap year? What is the leap year rule? Why was
  1900 not a leap year but 2000 was? When is the next leap year? How many
  days are in 2027?
- Related: how-age-is-calculated, daylight-saving-dates-guide,
  easter-date-finder, full-moon-calendar-2027.

### 15. womens-world-cup-2027-qualification — Women's World Cup 2027 Qualification
- Title: `Women's World Cup 2027 Qualification: Slots, Teams and How It Works | Noryvello`
- H1: `Women's World Cup 2027 Qualification`
- Deliver: the tournament — the 10th FIFA Women's World Cup, 32 teams,
  24 June to 25 July 2027, hosted by Brazil across 8 host cities, with
  the final at the Maracanã in Rio de Janeiro on Sunday 25 July 2027;
  the first Women's World Cup staged in South America. SLOT ALLOCATION
  (approved by the FIFA Council on 10 December 2024): AFC 6, CAF 4,
  CONCACAF 4, CONMEBOL 2 plus host Brazil, OFC 1, UEFA 11 — 29 direct
  places plus 3 from a 10-team intercontinental playoff tournament = 32.
  How qualification works, in general terms: each confederation runs its
  own qualifying competition (continental championship or qualifying
  groups), and the remaining places go through playoffs and the
  intercontinental playoff. QUALIFIED SO FAR — a snapshot that MUST be
  labeled "as of November 2026" (18 teams): Brazil (host); AFC —
  Australia, China PR, Japan, Korea DPR, Korea Republic, Philippines;
  CAF — Algeria, Morocco, Cameroon, Malawi; CONMEBOL — Argentina,
  Colombia; OFC — New Zealand; UEFA — Denmark, France, Germany, Spain.
  STILL TO COME: the CONCACAF W Championship, 24 November–5 December
  2026 in Texas (8 teams, the 4 semifinalists qualify); the UEFA
  playoffs; and the intercontinental playoff (10 teams, 3 places, in the
  November/December 2026 and February 2027 windows). Qualification began
  on 19 February 2025 and ends in February 2027; 179 teams entered.
  FORMAT: 8 groups of 4, the top 2 in each group reach the knockout
  rounds, 64 matches in total; the draw is not yet scheduled. Warn box:
  the qualified list changes as playoffs finish — the snapshot on this
  page is dated November 2026, so check FIFA for the latest picture.
  800+ words.
- FAQ seeds: How many teams play in the 2027 Women's World Cup? How does
  qualification work? Which teams have qualified so far? When does
  qualification finish? When is the draw?
- Related: womens-world-cup-2027-guide, womens-world-cup-2027-countdown,
  womens-world-cup-winners-list, cricket-world-cup-2027-teams-qualification.

### 16. womens-world-cup-winners-list — Women's World Cup Winners List
- Title: `Women's World Cup Winners: Every Champion 1991–2023 | Noryvello`
- H1: `Women's World Cup Winners List`
- Deliver: a table of all 9 Women's World Cup finals, with year,
  champion, score, runner-up, and venue/city exactly as given here: 1991
  — USA beat Norway 2–1 (Tianhe Stadium, Guangzhou); 1995 — Norway beat
  Germany 2–0 (Råsunda Stadium, Solna); 1999 — USA beat China 0–0 after
  extra time, 5–4 on penalties (Rose Bowl, Pasadena, attendance 90,185);
  2003 — Germany beat Sweden 2–1 after extra time, golden goal (Carson);
  2007 — Germany beat Brazil 2–0 (Shanghai); 2011 — Japan beat USA 2–2
  after extra time, 3–1 on penalties (Frankfurt); 2015 — USA beat Japan
  5–2 (Vancouver); 2019 — USA beat Netherlands 2–0 (Lyon); 2023 — Spain
  beat England 1–0 (Stadium Australia, Sydney, attendance 75,784,
  20 August 2023). Summary: 5 champions in 9 editions — USA 4 titles
  (1991, 1999, 2015, 2019), Germany 2 (2003, 2007), Norway 1 (1995),
  Japan 1 (2011), Spain 1 (2023). How the tournament grew, from verified
  facts only: 12 teams in 1991 (matches lasted 80 minutes), 16 teams in
  1999, 24 teams in 2015, 32 teams in 2023 (the first edition with two
  host countries, Australia and New Zealand); Brazil 2027 keeps 32 teams,
  and FIFA has approved expansion to 48 teams from 2031. Short factual
  notes on each champion's wins, drawn from the table only — no invented
  detail, no scores beyond those given here. 800+ words.
- FAQ seeds: Who has won the most Women's World Cups? Who won the 2023
  Women's World Cup? Has England ever won the Women's World Cup? How
  many teams have won the Women's World Cup?
- Related: womens-world-cup-2027-guide, womens-world-cup-2027-countdown,
  womens-world-cup-2027-qualification, cricket-world-cup-winners-list.

### 17. cricket-world-cup-2027-teams-qualification — Cricket World Cup 2027 Teams and Qualification
- Title: `Cricket World Cup 2027 Teams and Qualification Explained | Noryvello`
- H1: `Cricket World Cup 2027 Teams and Qualification`
- Deliver: the tournament — 14 teams, 57 matches, 2 October to 21
  November 2027, hosted by South Africa, Zimbabwe, and Namibia under the
  brand "Three Nations, One Heartbeat"; the first men's Cricket World
  Cup in Africa since 2003. QUALIFICATION: 10 teams qualify directly —
  hosts South Africa and Zimbabwe plus 8 teams via the ICC ODI rankings
  (cut-off 30 September 2026) — and 4 more come through the World Cup
  Qualifier. The Qualifier winner goes straight into the group stage as
  Qualifier A; the teams finishing 2nd, 3rd, and 4th in the Qualifier go
  to the Super Series (the 3 lowest qualifier teams, a round robin from
  2–6 October in Windhoek, whose winner advances to the group stage).
  THE GROUPS: Group A — India, Australia, Pakistan, Afghanistan,
  Zimbabwe, Qualifier A. Group B — New Zealand, South Africa, Sri Lanka,
  England, Bangladesh, Qualifier B. Do NOT re-explain the full tournament
  format — link the format guide in the Related section and keep the
  format to two lines: the group stage runs 7–24 October (30 matches),
  the top 3 in each group plus the best 4th-place team advance, and
  points reset for the Super 7 stage. One line each on how the named
  teams got in (hosts, rankings, or qualifier route — from the structure
  given here only). Warn box: Qualifier A and Qualifier B are
  placeholders until the Qualifier is decided. 800+ words.
- FAQ seeds: How many teams play in the 2027 Cricket World Cup? How did
  teams qualify? What are the two groups? What is the Super Series? When
  is the 2027 Cricket World Cup?
- Related: cricket-world-cup-2027-format-guide,
  cricket-world-cup-2027-countdown, cricket-world-cup-2027-venues,
  cricket-world-cup-winners-list.

### 18. cricket-world-cup-2027-venues — Cricket World Cup 2027 Venues
- Title: `Cricket World Cup 2027 Venues: All 12 Stadiums | Noryvello`
- H1: `Cricket World Cup 2027 Venues`
- Deliver: all 12 venues announced on 30 July 2026, grouped by country
  with city, exactly as given here. SOUTH AFRICA (8): Wanderers Stadium,
  Johannesburg; SuperSport Park, Centurion (Tshwane); Newlands, Cape
  Town; Kingsmead, Durban; St George's Park, Gqeberha; Mangaung Oval,
  Bloemfontein; Boland Park, Paarl; Buffalo Park, KuGompo City (formerly
  East London). ZIMBABWE (3): Harare Sports Club, Harare; Queens Sports
  Club, Bulawayo; Fale Mosi-oa-Tunya International Cricket Stadium,
  Victoria Falls (a new stadium). NAMIBIA (1): Namibia Cricket Ground,
  Windhoek — which hosts the Super Series from 2–6 October 2027. The
  final is scheduled for Sunday 21 November 2027 at Wanderers Stadium,
  Johannesburg — state this as scheduled. A section per country, plus
  how the venues were announced and the tournament window (2 October–
  21 November 2027, 14 teams, 57 matches). FORBIDDEN: capacities,
  per-venue match counts, and any stadium characteristic not given in
  this spec — do not invent them. No travel advice, no prices. 800+ words.
- FAQ seeds: How many venues host the 2027 Cricket World Cup? Which
  stadium hosts the final? Is there a new stadium for 2027? Which venues
  are in Zimbabwe? Where is the Super Series played?
- Related: cricket-world-cup-2027-format-guide,
  cricket-world-cup-2027-countdown,
  cricket-world-cup-2027-teams-qualification, cricket-world-cup-winners-list.

### 19. cricket-world-cup-winners-list — Cricket World Cup Winners List
- Title: `Cricket World Cup Winners: Every Champion 1975–2023 | Noryvello`
- H1: `Cricket World Cup Winners List`
- Deliver: a table of all 13 Cricket World Cup finals, with year, winner,
  runner-up, and result detail exactly as given here: 1975 — West Indies
  beat Australia; 1979 — West Indies beat England; 1983 — India beat
  West Indies; 1987 — Australia beat England; 1992 — Pakistan beat
  England; 1996 — Sri Lanka beat Australia; 1999 — Australia beat
  Pakistan; 2003 — Australia beat India; 2007 — Australia beat Sri Lanka;
  2011 — India beat Sri Lanka; 2015 — Australia beat New Zealand; 2019 —
  England beat New Zealand (the match was tied, the Super Over was tied,
  and England won on the boundary-count rule); 2023 — Australia beat
  India by 6 wickets (Narendra Modi Stadium, Ahmedabad, 19 November
  2023). Summary: 6 champions in 13 editions — Australia 6 titles (1987,
  1999, 2003, 2007, 2015, 2023), India 2 (1983, 2011), West Indies 2
  (1975, 1979), Pakistan 1 (1992), Sri Lanka 1 (1996), England 1 (2019).
  Short factual notes on each champion's wins, drawn from the table only
  — do NOT add scores or margins beyond those given here. A short closing
  section pointing forward to the 2027 tournament (14 teams, 2 October–
  21 November 2027, South Africa, Zimbabwe, Namibia) with links in the
  Related section. 800+ words.
- FAQ seeds: Who has won the most Cricket World Cups? Who won the 2023
  Cricket World Cup? Has New Zealand ever won the Cricket World Cup? How
  many teams have won the Cricket World Cup?
- Related: cricket-world-cup-2027-format-guide,
  cricket-world-cup-2027-countdown,
  cricket-world-cup-2027-teams-qualification, womens-world-cup-winners-list.

### 20. black-friday-2027-deals-guide — Black Friday 2027 Deals Guide
- Title: `Black Friday 2027: How to Spot a Real Deal | Noryvello`
- H1: `Black Friday 2027 Deals Guide`
- Deliver: Black Friday 2027 is Friday 26 November 2027 (the day after
  US Thanksgiving); Cyber Monday follows on Monday 29 November 2027.
  WHAT THE RESEARCH FOUND — attribute every figure, and say plainly that
  the Which? studies are UK studies, a warning about how "was" prices
  work rather than a local statistic for every country: the UK consumer
  group Which? tracked 175 products at 8 retailers for a full year around
  Black Friday 2024 and found 83% were the same price or cheaper at least
  once outside the four-week sale period — and none of the deals was at
  its cheapest price of the year on Black Friday itself. Its Black Friday
  2023 study of 227 deals at the same 8 retailers found 92% were the same
  price or cheaper at other times of the year. The US Federal Trade
  Commission's Guides Against Deceptive Pricing (16 CFR 233.1) say a
  former price counts only if the item was openly and actively offered at
  that price for a reasonably substantial period of time — otherwise the
  advertised bargain is a false one. THE CHECKS, as a numbered list:
  (1) ignore the crossed-out "was" price and judge the deal by what the
  item actually sold for in the last 30–90 days; (2) look back six months
  or more where possible — a dip that only appears after a September or
  October price rise is not a bargain; (3) use a price-history tool
  (CamelCamelCamel or Keepa for Amazon listings; Google Shopping price
  insights elsewhere); (4) match the exact model number, because similar
  models carry different prices; (5) watch for fake stores and scam sites,
  which peak at sale time — buy from retailers you know. No prices, no
  store recommendations, no affiliate links, currency-agnostic wording.
  800+ words.
- FAQ seeds: Are Black Friday deals real? How do I check if a Black
  Friday deal is genuine? What is a fake discount? When is Black Friday
  2027? Should I wait until after Black Friday to buy?
- Related: black-friday-2027-countdown, debt-payoff-calculator,
  paycheck-budget-splitter, credit-card-mistakes.

## ZIP — when all 20 pages are done
Package all 20 pages into ONE downloadable ZIP named
`Noryvello_2027_Wave_20.zip`. Inside the ZIP, one folder per page
named by its slug, each holding that page's complete HTML as `index.html`
(for example `laylat-al-qadr-2027/index.html`,
`cricket-world-cup-winners-list/index.html`). The
HTML inside the ZIP must be byte-identical to the HTML in the per-reply
code blocks — never retype or shorten pages for the ZIP. Tell the owner
the ZIP is ready. The owner sends it to Suraiya, who verifies every page
before publish.
