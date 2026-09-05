VERDICT: REVISE

# Brand Expert Review — Concepts v1

Overall: this is very close. The set uses the real website brand (tokens, Inter, orb, doodle characters), reuses site lines verbatim, and the tone is warm/protective throughout — including the SOS tile, which correctly sells "the alert landing" rather than danger. I verified every headline/sub-line against the repo: "Never walk alone." + "When you can't reach them, Safer does." (index.html h1/kicker), "Watch Me · Session active" (the hero chip, verbatim), "Your whole family, one circle." + "without hovering" (usecase-family.html h1/lead), and the WhatsApp+SMS fallback + "the alert always lands" (BRIEF.md). One caption line is not backable and that alone forces the REVISE.

## BLOCKING (the reason for REVISE)

1. **Post 4 caption — "Families are joining the iPhone pilot now"**: neither the brief nor the site backs any adoption claim, and the brief explicitly forbids fabricated social proof. This is the "+4500 users" trap in softer clothing. Change to an invitation, not a status report — e.g. "Bring your circle to the iPhone pilot — link in bio." or "Join the iPhone pilot as a family — link in bio." Nothing else in Post 4 needs to change.

## Per-post notes

### Post 1 — "Never walk alone." — APPROVED as concepted
- Brand fit: excellent. H1 + kicker verbatim, cream #fbf9f6 ground, navy Inter stack, char-watchme is literally the site's hero fallback image — this tile IS the website as a poster.
- Tone: peace-of-mind, zero fear. Caption's "reaches your trusted people when you can't" is exactly the site's promise shape — no rescue claim. Good.
- Feasibility/production note (non-blocking): **orb.png is a soft radial glow** — if its halo fades to white rather than true alpha, compositing on cream will show a pale fringe. Use screen/lighten blend or a properly transparent export. Applies to all four tiles since the orb is the recurring motif (which is a smart, on-brand motif — keep it).
- Minor: #WomenSafety hashtag on the general promise tile slightly narrows the brand's "her/him/family/community" breadth; fine to keep, better on a her-specific post later.

### Post 2 — "Walking home? Watch Me." — APPROVED as concepted
- Brand fit: the chip copy "Watch Me · Session active" matches the site hero chip word-for-word — exactly the "improve, don't reinvent" move. "WATCH ME." in action blue is right.
- Claim accuracy: "watches over you until you say you're safe" and "You're in control, always" both trace to brief/site. Clean.
- Feasibility: sit-walk has a baked-in ground shadow and near-white fills — verify the PNG is a true cutout before placing on #e7efff; if the background is baked white it needs a clean knockout so the soft-blue tile doesn't show a white box. The "orb walking her home" gag is achievable and reads at thumbnail size. Keep the one-chip discipline stated in the concept.

### Post 3 — "One tap. Your people know." — APPROVED as concepted
- Tone: this is the tile that could have gone fear-mongering and didn't — warm cream ground, determined (not scared) char-sos, arcs showing the alert *arriving*. That's the brand handling an emergency correctly.
- Claim accuracy: WhatsApp/SMS fallback and "the alert always lands" are both verbatim brief claims — backed. Keep "the alert always lands" welded to the fallback sentence as drafted (it's a delivery-mechanism claim, never let it drift toward an outcome/rescue promise in later copy passes).
- Feasibility: coral signal arcs + tiny doodle avatars are new line-work but trivially in-style. Keep the avatars faceless-simple, navy line only — don't let them become a second illustration style.

### Post 4 — "Your whole family, one circle." — REVISE (caption line above only)
- Brand fit: headline + sub verified verbatim on usecase-family.html. The hand-drawn circle with the orb as a member is a genuinely good brand idea — Safer inside the family circle.
- Style-consistency watch (non-blocking, flag for the render round): **sit-kids is a chunkier, fully-colored cartoon** than the thin-line char-*/sit-walk doodles. It's an existing site asset so it's allowed, but at grid level Post 4 will read slightly "heavier" than tiles 1–3. Mitigate in design: keep the drawn circle and avatars in the thin navy line style so the tile's frame matches the set, and don't add more color around him.
- "Home ✓" chip: backed by "Know your kids got home" — fine; same one-chip rule as Post 2.

## Grid strategy
Posting-order logic (Family→SOS→WatchMe→Promise so the top row reads NEVER WALK ALONE | WALKING HOME? | ONE TAP) is sound and brand-serving — the hero promise lands top-left. Checkerboard of warm/blue with a single coral punch on Post 3 matches the site's color discipline (coral "sparing"). No objection.

## What I will re-check at render time (keeping standards consistent)
- Headline + character + chip fully inside the center 1080×1080; tile readable with everything but the headline covered.
- Orb glow composited cleanly (no white fringe), one chip max per tile, coral appears only on Post 3.
- No copy drift from the verified verbatim lines.

---

## v2 VERDICT: APPROVED

Re-read concepts_v2.md in full. The blocker is resolved and no new issues were introduced:

- **Blocker fixed:** Post 4 caption is now "Bring your circle to the iPhone pilot — link in bio." — an invitation, not a traction claim — and the self-audit now carries an explicit "no traction claims" rule. Exactly the fix asked for.
- **Production notes landed:** orb.png alpha/fringing check (per-background, at 100% zoom) and sit-walk white-matte cleanup are now written into the render-round notes; Post 4's circle + avatars are pinned to thin navy line style with a side-by-side thumbnail weight check.
- **New v2 changes audited for regressions:** Post 3's shortened sub-line ("Live location to your people — app, WhatsApp, SMS.") is still fully backed by the brief's fallback claim; the shared bottom-left orb+wordmark lockup and the headline-carries-the-thumbnail rule strengthen brand consistency; Post 1's "phone + shield legible at thumbnail" note keeps the product cue — all on-brand, nothing unbackable, tone unchanged (warm, no fear, no rescue promises).

Concepts are approved from the brand side. Proceed to rendering Post 1. At render time I will hold the checks listed above: verbatim copy, orb compositing, one-chip max, coral only on Post 3, Post 4 line weight, and the 110px thumbnail test.

---

## POST 1 VERDICT: APPROVED

Checked post1.png (1080×1350) and post1_thumb110.png against the concepts_v2.md Post 1 spec and my render-time checklist:

- **Copy: verbatim.** "NEVER WALK ALONE." (3 stacked lines, navy, Inter extra-bold) and "When you can't reach them, Safer does." — both exact site lines, no drift. The 2-line sub wrap is fine; it stays clearly subordinate.
- **Orb compositing: clean.** No white fringe or pale box on the cream #fbf9f6 — both the companion orb and the lockup orb sit clean. The alpha deviation note is accepted.
- **No coral on this tile.** Correct — the tile's only saturated color is the brand blue shield + orbs.
- **Lockup:** orb + "Safer" bottom-left, inside the safe square. Capital-S "Safer" matching the live site's brand lockup is the RIGHT call — it is more brand-true than the concept's lowercase; carry this exact lockup (same size/position/case) to Posts 2–4.
- **Product cue:** giant phone fully in frame, blue shield-check legible, and it survives the 110px thumbnail.
- **Thumbnail test: pass.** At 110px the headline alone carries the tile; sub-line and lockup disappear gracefully, character + phone still read.
- **Tone:** warm, confident, zero fear. This is the website as a poster — exactly the brief.

Non-blocking polish (apply only if a revision pass happens anyway; do NOT hold the post for these):
1. The headline's terminal period after "ALONE" sits detached with a visible gap, and the character's waving hand + sparkle marks graze that zone — a small kerning nudge (period tighter to the E) or shifting the character down ~20px would clean the collision.
2. The companion orb floats high and to the right of her head — closer to the headline than to her shoulder — so it reads as a stray dot rather than "Safer walking with her." A nudge toward her phone-side shoulder would strengthen the motif before it recurs on Posts 2–4.

Lock this tile as the template: background discipline, headline scale/position, lockup, and safe-square behavior here are the reference for the remaining three.

---

## POST 2 VERDICT: APPROVED

Checked post2.png (1080×1350) + post2_thumb110.png against concepts_v2.md Post 2, and re-checked post1.png (both polish notes applied — period tightened, orb at shoulder; Post 1 stands approved).

- **Copy: verbatim.** "WALKING HOME? / WATCH ME." with "WATCH ME." in action blue #2f6bff, sub-line "Safer watches over you until you say you're safe." exact, and the chip reads "Watch Me · Session active" with the green #1fb37a dot — word-for-word the site's hero chip. No drift.
- **Compositing: clean.** sit-walk sits on #e7efff with no white matte or fringing; the baked ground shadow reads naturally; the asset's own doodle sparkle dots survive and match the added motion dashes behind the orb.
- **The visual joke lands.** Orb + motion dashes trailing her = Safer walking her home; it works with all text covered, as specced.
- **Lockup:** orb + capital-S "Safer" bottom-left, matching Post 1's placement and scale. Consistency holding.
- **Tone:** calm, warm, daylight-flat — nothing fearful.
- **Thumbnail test: pass.** Headline alone carries the 110px tile; the chip shrinks to an inert white pill and never competes; the navy/blue two-tone headline is the strongest thumbnail of the set so far.
- **Accepted deviations:** 3-line headline at the locked scale, blue "WATCH ME.", chip at her phone/hip — all fine; the chip near her phone actually reads as coming FROM the phone, which is better than floating near the orb.

Non-blocking polish (only if another pass happens):
1. The chip's left edge grazes the orb's glow halo — nudge the chip ~20px right or down so orb and chip each read as separate objects.
2. The orb trails at hip height rather than the specced shoulder height; shoulder height would make the "companion" read a touch stronger and match Post 1's corrected placement. Minor.
3. She's slightly smaller in the frame than Post 1's character — acceptable, but on Posts 3–4 keep the character at Post 1's visual weight so the row feels even.

Proceed to Post 3. There I will specifically enforce: coral appears (the set's only red tile) but stays limited to the SOS button + arcs + one doodle underline; warm #f4efe9 ground; determined-not-scared read at thumbnail size.

---

## POST 3 VERDICT: APPROVED

Checked post3.png + post3_thumb110.png against concepts_v2.md Post 3 and the enforcement list.

- **Coral discipline: held.** Coral appears exactly three ways — the rough underline under "ONE TAP.", the signal arcs, and the SOS button baked into the asset. Nothing else. This remains the set's single red-punch tile as designed.
- **Copy: verbatim.** Headline exact; trimmed sub-line "Live location to your people — app, WhatsApp, SMS." word-for-word as approved in v2. No drift, no new claims.
- **Tone: correct.** Warm #f4efe9 ground, determined stance, the alert *leaving* the button — no darkness, no fear. At 110px she reads as action, not distress. This is the tile that had the most fear-mongering risk and it cleared it.
- **Lockup:** matches Posts 1–2. Character at roughly Post 1 weight — row will feel even.
- **Thumbnail test: pass.** The 4-line headline dominates cleanly; sub-line and arcs disappear gracefully.
- **Accepted deviations:** 4-line headline under the scale lock (right call — never shrink the locked scale), sub-line moved lower (it sits clear of both headline and character), avatar faces dropped (fine — the arcs alone say "the alert lands," and fewer elements is more kesef, not less).

**Ruling on the companion-orb question:** ABSENT IS CORRECT on this tile. The SOS button is the tile's single point of action; a second glowing object would compete with the red button and dilute "one tap." Safer's presence here is expressed by the alert itself (the arcs) plus the lockup orb. Rule going forward: the companion orb is a *comfort-state* motif (tiles 1, 2, 4) and stays out of the *action-state* tile. On Post 4 the orb MUST return as specced — a member sitting on the family circle — so three of four tiles carry it and the grid still reads as one system.

Non-blocking polish (only if another pass happens):
1. The terminal period after "KNOW" floats detached — the same quirk fixed on Post 1. Tighten it to the W for cross-set consistency (no collision here, so cosmetic only).
2. The arcs ripple sideways at hip height, partly occluded by her leg; the spec's upper-right direction would read more clearly as the alert *landing with her people* rather than bouncing off the phone. Minor.

Proceed to Post 4. Enforcement there: thin navy/blue line circle + avatars matching tiles 1–3 stroke weight (sit-kids is the heaviest asset — the linework around him must not add weight), orb ON the circle ring, "Home ✓" chip full-view-only, headline verbatim, no coral, side-by-side 110px check of all four tiles before sign-off.

---

## POST 4 VERDICT: APPROVED

Checked post4.png + post4_thumb110.png against concepts_v2.md Post 4 and my enforcement list.

- **Copy: verbatim.** "YOUR WHOLE FAMILY, ONE CIRCLE." (family-page H1) and "Know they got home — without hovering." — exact. 5-line headline under the scale lock and sub-line at y≈1024 both accepted; everything sits inside the 1080×1080 safe square.
- **Added linework: weight held.** The circle is a thin action-blue stroke consistent with Post 3's arcs, the two avatars are thin-line, unfilled faces, and nothing added around the boy increases the tile's weight. sit-kids' own baked color (backpack, blush) is the pre-approved asset — the ADDED artwork stayed disciplined, which was the risk.
- **Orb ON the ring: yes** — lower-right of the circle, reading as a member of the family circle. The comfort-state motif returns as required by my Post 3 ruling (tiles 1, 2, 4 carry it; 3 correctly does not).
- **"Home ✓" chip DROPPED: correct call.** The chip was optional in the approved concept and full-view-only by rule; the circle + avatars + orb already say the whole idea, and the boy's ring-breaking overlap keeps the tile clean. Fewer elements = more kesef. No objection.
- **No coral** anywhere on the tile. Correct.
- **Lockup:** matches tiles 1–3.
- **Thumbnail: pass.** Headline carries; boy-in-circle still reads as a shape at 110px.

Non-blocking polish (do not hold the post): the two ring avatars are drawn in slightly different styles (one baby-with-ears, one plain smiley) — harmonizing them would be tidier; and "YOUR" sits a few px right of the lines below it — an optical left-align pass would perfect the stack. Cosmetic only.

---

## GRID VERDICT: APPROVED — FINAL BRAND SIGN-OFF

Side-by-side 110px check of all four thumbnails (post1–4_thumb110.png; no local montage tool, judged from the four thumbs directly):

- **Every headline alone carries its tile** at grid size — the thumbnail rule held on all four.
- **Checkerboard holds** in the recommended posting order (4→3→2→1): top row cream / soft-blue / warm-cream, row 2 opens soft-wash blue. The alternation is visible at thumbnail size.
- **One coral punch** — Post 3 is the only tile with red beyond nothing; the grid's eye lands exactly where designed.
- **The row reads as one app's profile:** identical bottom-left orb + "Safer" lockup on all four, same navy Inter headline system, same doodle world, orb motif on 1/2/4. Post 4's chunkier character is the known, pre-approved asset variance and does not break the row.
- **Copy across the set:** every line verbatim from the site or brief; zero invented claims, zero traction claims, zero fear. Captions all end on the pilot link-in-bio — remember the ops gate: bio link live before the first post goes up.

The first four posts are brand-approved as a set. Nothing further blocks publishing from the brand side.

---

## POSTS 5-6 CONCEPTS VERDICT: REVISE

Read concepts_posts5-6_v1.md, viewed sit-run.png and char-resting.png, re-checked claims against index.html + BRIEF.md. The selection rationale is right (the run completes the site's own value line; the consent tile answers the real objection), both tiles honor every locked rule (orb comfort-state roles, coral exclusive to P3, lockup, thumbnail rule, no chips), and the two-axis checkerboard math checks out. Two copy lines force the REVISE — both are one-line fixes.

## BLOCKING

1. **Post 5 sub-line — "Safer watches over your run until you're back."** The verified mechanic is "until you SAY you're safe" — the user ends the session. Dropping "you say" implies Safer detects your arrival, a capability neither site nor brief claims (the caption keeps "until you say you're back" and is fine — the tile must match). Fix: **"Safer watches over your run until you say you're back."** This also preserves the control story Post 6 is about to tell.
2. **Post 6 caption — "Your location is yours. That never changes."** The first sentence is fine value framing (backed by "share... with the people you choose, only when you choose"). "That never changes." is an absolute forever-guarantee about data practice that no site or brief line makes — the same category of unbackable overclaim as the round-1 traction line. Fix: end the caption on **"Your location is yours."** (or "Your location is yours — always your call."), and drop "That never changes."

## Per-post notes

### Post 5 — "On a run? Not alone." — approved except the sub-line above
- Claim base: "going for a run" is in the site's value line; "watches over" is the site's own verb. Solid.
- Asset feasibility: sit-run is a thin-line doodle with baked motion dashes and pre-approved-style blush/skin (same standing as sit-kids, but lighter) — matches tiles 1–3 weight. The pacing-orb-ahead inversion of Post 2's trailing orb is a genuinely good motif evolution: recurs without repeating. Orb ahead at chest height on her facing direction (rightward) is feasible.
- No-chip call: correct — Post 2 owns the chip.
- Tone: joyful, zero fear. Caption's "someone who's got you" stays on the watched-over side of the line — fine.
- Watch-item for the render (non-blocking): "NOT ALONE." next to Post 1's "NEVER WALK ALONE." in the same row doubles "ALONE" — the concept argues it as a deliberate rhyme and I accept that, but at render time make sure the two tiles differ clearly in composition so the row reads as rhyme, not repetition.

### Post 6 — "Only when you choose." — approved except the caption trim above
- **The coordinator's two flagged lines, checked:** "It's about being watched over — when you ask" IS traceable — "it watches over you, so you're never really alone" (index.html) + "Start Watch Me whenever you want — you're in control" (site). Approved as written. The headline "ONLY WHEN YOU CHOOSE." is the brief's own phrase. Sub-line "share it with your circle, on your terms" maps to "with the people you choose, only when you choose" — backed.
- Tone on the surveillance objection: the reframe ("isn't about being watched → watched over") is confident, not defensive, and char-resting — utterly at ease, sitting ON the device, in charge of it — is the least creepy possible way to draw consent. This tile is a brand asset; well conceived.
- Toggle-with-orb-knob feasibility: same thin-line bar as Post 4's circle — feasible, with ONE production requirement: the toggle sits on the tilted phone screen, so it must be drawn in the phone's perspective (foreshortened track, ellipse knob shadow), not pasted flat, or it will read as a sticker. The asset's teal pin within the #1fb37a green family: acceptable, agreed — not coral.
- Orb role discipline: knob = a fresh comfort-state role, consistent with the ruling (companion 1/2/5, circle-member 4, switch here, absent from the action tile 3). Approved.

## Grid extension
Publish order P6→P5 producing rows (P5 cream | P6 blue | P1 cream) / (P2 blue | P3 warm | P4 wash): verified — true alternation on both axes, coral lands dead-center as the six-tile focal point, use case holds the top-left per the advisor. Approved. Row-1 narrative (use case → value → promise) is sound.

Fix the two copy lines and this is approved without another full round — I only need to see the corrected sub-line and caption text.

---

## POSTS 5-6 v2 VERDICT: APPROVED

Verified concepts_posts5-6_v2.md in full:

- **Blocker 1 fixed:** P5 tile sub-line is now "Safer watches over your run — until you say you're back." — the user-ends-the-session consent shape restored on tile AND caption; no implied auto-arrival detection.
- **Blocker 2 fixed:** P6 caption's "That never changes." is deleted; it now ends on the plain, backed statement "Your location is yours."
- **My toggle-perspective production note is binding** in the P6 render notes (foreshortened to the screen plane, matching the asset's own pin/shadow — never flat).
- **v2-only additions audited for regressions — all clean:** the trimmed 8-word P6 sub-line "Your location is yours — shared on your terms." still traces to "with the people you choose, only when you choose"; the pre-agreed fallback headline "SHARED ONLY WHEN YOU CHOOSE." is the brief's own phrase and stays inside the locked scale system; the grid-fragility note (post 7 requires re-mathing the 7/8/9-post states before publishing) is a smart, binding guardrail I co-sign — the 2×3 checkerboard and center-coral focal point exist only at exactly six tiles.

Posts 5–6 concepts are brand-approved. Proceed to rendering. At the render gate I will hold: the corrected sub-line verbatim, toggle drawn in the phone's perspective with the orb as knob (meaning-closure test — headline + art must land "sharing is a switch she controls" without the sub-line), P5 orb pacing ahead at Post 1 character weight, no coral on either tile, pixel-identical lockup, 110px test, and — once both are rendered — a six-thumbnail grid check in the P5|P6|P1 / P2|P3|P4 layout.

---

## POSTS 5-6 VERDICT: APPROVED (both)

Checked post5.png, post6.png, both 110px thumbs, and post6_toggle_zoom.png against concepts_posts5-6_v2.md.

**Post 5 — approved.**
- Sub-line VERBATIM: "Safer watches over your run — until you say you're back." — the consent-shape fix is on the tile exactly as gated.
- Headline break `ON A RUN? / NOT / ALONE.` with the navy-question/blue-answer hierarchy mirroring P2; period tucked (template fix holding).
- Orb: pacing ahead of her at chest height on her facing direction — the inversion of P2's trailing orb lands; motion dashes read as the asset's own doodle language.
- Character at Post 1 weight, clean cutout on cream, no coral (blush/skin are the pre-approved asset colors), lockup matches.
- 110px: headline carries; runner + orb still read as shapes. Pass.

**Post 6 — approved.**
- Sub-line VERBATIM: "Your location is yours — shared on your terms."
- **Toggle ruling (the 150px question): it reads as a SWITCH, not a smudge.** The zoom confirms the track is foreshortened to the screen plane at the phone's isometric angle — drawn UI, not a sticker — and the glowing orb as the ON-position knob is unmistakable. At full view the pill + orb + pin + utterly-relaxed woman close the headline's meaning without the sub-line: sharing is a switch she controls. Meaning-closure test passed; the fallback headline is NOT needed.
- Teal pin sits in the brand-green family as pre-cleared; zero coral on both tiles; lockup pixel-consistent; safe square respected.
- 110px: headline carries; the toggle correctly disappears (full-view element by rule). Pass.

Non-blocking polish (only if a pass happens anyway): (a) P6 — seat the orb-knob slightly INSIDE the track's right end; it currently overflows the pill's outline a touch, and the track stroke sits at the heavy end of the thin-line family (P4-ring weight, not beyond). (b) P5 — the asset's baked white cloud-shape near her leading hand reads slightly orphaned on cream; harmless.

---

## 6-GRID VERDICT: APPROVED — FINAL BRAND SIGN-OFF AT SIX

Six-thumbnail check in the publish layout P5|P6|P1 / P2|P3|P4 (judged from the six individual 110px thumbs):

- **Two-axis checkerboard confirmed in the renders:** cream/blue/cream over blue/warm/wash — alternation holds along every row and column exactly as the grid math promised.
- **Coral dead-center:** P3 remains the only red in all six tiles and now sits at the grid's focal middle. The eye lands on "ONE TAP." from anywhere on the profile.
- **One system, six tiles:** identical lockup on all six, headline upper-left / character lower-right on every tile, locked headline scale carrying every thumbnail, orb present in comfort-state roles on 1/2/4/5/6 (companion ×3, circle-member, toggle-knob) and correctly absent from the action tile. The row-1 "ALONE" rhyme (P5/P1) reads as rhyme, not repetition — the compositions differ clearly (blue answer + runner vs navy stack + phone-walker).
- **Copy across all six:** every tile line verbatim-backed by site or brief; zero invented features, numbers, traction claims, or forever-guarantees; zero fear anywhere.
- **Standing guardrail:** the grid-fragility note is binding — this composition is stable ONLY at exactly six posts. Post 7 does not publish until its 7/8/9-state grid math is re-run and re-gated.

The six-post grid is brand-approved as a set. Nothing further blocks publishing from the brand side.

---

## P6 v2 VERDICT: APPROVED — no brand regression; six-post sign-off stands

Re-checked post6.png, post6_thumb110.png, post6_toggle_zoom4.png, and post5.png after the Path A rework.

- **Headline swap is clean:** "SHARED ONLY WHEN YOU CHOOSE." is the fallback I pre-cleared — the brief's own phrase — rendered as a 4-line stack at the locked scale, navy, period tucked. If anything the meaning-closure is now stronger: "SHARED" + pin + toggle close instantly, sub-line not needed.
- **Toggle:** knob now seated INSIDE the pill's right end per my cosmetic note; track still foreshortened to the screen plane (drawn UI, not a sticker); teal ghost fill and pin intact. Reads unambiguously as an ON switch at full view.
- **Untouched surfaces verified untouched:** sub-line "Your location is yours — shared on your terms." verbatim; lockup pixel-consistent; zero coral; background #e7efff; safe square respected.
- **Character at 450px:** accepted as the Path A trade (headline + toggle prominence over character weight). She is now the smallest figure in the six — within tolerance because the locked rule makes the headline the thumbnail carrier, and at 110px the tile still reads. Note for any future tile: 450px is the FLOOR for character weight; do not go below it again.
- **Post 5:** towel matte hardening (via sit-run-clean.png copy, original asset untouched — correct asset hygiene) shows no visible edge artifacts on cream; nothing else changed.
- **110px:** the 4-line headline carries the thumb. Pass.

**FINAL SIGN-OFF RESTATED:** the six-post set (P1–P5 as previously approved, P6 in this v2) is brand-approved for publishing in the P6→P5 order, grid P5|P6|P1 / P2|P3|P4. The grid-fragility guardrail remains binding: post 7 requires re-run grid math and a new watcher gate before publishing.
