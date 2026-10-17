# Friskshorts site: research

Compiled 2026-10-17. Everything below was checked against the source linked next to it on that date. Where a source was secondary or contradicted, it says so.
This folder is for the builder and the evaluator. It must not be deployed (see DESIGN.md, "Build and deploy").

---

## A. Anthropic's own guidance on non-generic frontend design

Saved locally (verbatim, source URL in a comment at the top of each file):

| Local file | Source |
|---|---|
| `skills/frontend-design.SKILL.md` | https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md (last change 41bbe19, 2026-09-03). Byte-identical to the Claude Code plugin copy: https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md |
| `skills/frontend-aesthetics-cookbook.md` | https://github.com/anthropics/claude-cookbooks/blob/main/coding/prompting_for_frontend_aesthetics.ipynb (notebook converted to markdown) |
| `skills/frontend-aesthetics-prompt-snippet.md` | https://github.com/anthropics/claude-code/blob/main/plugins/claude-opus-4-5-migration/skills/claude-opus-4-5-migration/references/prompt-snippets.md (section 4 only) |
| `skills/claude-docs-frontend-design-excerpt.md` | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices ("Frontend design") |
| `skills/claude-docs-sonnet-5-design-defaults-excerpt.md` | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-sonnet-5 ("Design and frontend defaults") |
| `skills/web-artifacts-builder.SKILL.md`, `canvas-design.SKILL.md`, `theme-factory.SKILL.md`, `brand-guidelines.SKILL.md` | https://github.com/anthropics/skills/tree/main/skills (context only; brand-guidelines is Anthropic's own brand and does not apply here) |

Blog post (not saved verbatim, summary only): "Improving frontend design through Skills", 2025-11-12, https://claude.com/blog/improving-frontend-design-through-skills

What these say, in one list (this is what the evaluator should hold us to):
1. **Ground it in the subject.** Distinctive choices come from the product's own materials and vernacular. Ours: Shorts captions, 9:16 frames, timelines, gameplay footage, a desktop app window.
2. **The hero opens with the most characteristic thing in the subject's world.** "Big number + small label + gradient accent" is called out as the default to avoid.
3. **One or two typefaces, chosen on purpose.** A clear scale. Type used as an active design element. Lines under 80 characters.
4. **Typographic tells to avoid:** accenting one word of a headline in a colour or italic; ALL-CAPS labels; labels above content that add nothing.
5. **Structure is information.** Numbered markers only for real sequences. (Our pipeline is a real sequence, so numbers are allowed there and nowhere else.)
6. **Motion:** one orchestrated moment beats scattered effects. Fade-and-slide-up on every section and hover effects on every card "read as AI-generated". Motion that answers a person's action is welcome.
7. **Named clusters of current AI output** (from the 2026 skill): (1) cream #F4F1EA + serif + terracotta #D97757; (2) near-black + one acid-green or vermilion accent; (3) broadsheet hairlines, zero radius; (4) SaaS card kit, same radius and grey shadow everywhere, gradient washes; (5) template chrome: tracked ALL-CAPS eyebrows, "A · B · C" meta strings, "WORD — fragment" labels, tinted near-black (#0B0B0B, #111) standing in for black, monospace for small data labels, "→" appended to links and buttons.
   **This matters for us:** our brand is near-black + bright yellow + acid green, which is cluster 2 by default. DESIGN.md answers this directly: yellow is the dominant field colour in places (not a thin accent), green has one fixed meaning ("the word being spoken now"), and the colours are the product's real caption colours, not decoration.
8. **Fonts named as overused:** Inter, Roboto, Arial, Open Sans, Lato, system fonts; also Space Grotesk as a model favourite. Purple gradients on white or dark.
9. **Process:** write a token plan (4 to 6 named hex values, type roles, layout in ASCII), then review it against the brief and revise anything that reads like a default. Spend boldness in one place. "Remove one accessory." Quality floor: responsive to mobile, visible focus, reduced motion, accessible colour.
10. **Copy:** plain verbs, sentence case, what the user understands, no selling. A button says exactly what happens.

---

## B. What award-level product sites do (2025-2026)

Sources looked at directly: https://screen.studio, https://cleanshot.com, https://www.raycast.com, https://linear.app, https://culturedcode.com/things/, https://rive.app, https://teenage.engineering, Awwwards Sites of the Day (https://www.awwwards.com/websites/sites_of_the_day/, latest entry 2026-10-16). Godly (godly.website) now 301-redirects to https://recent.design. Inspiration lists: https://www.macstories.net/stories/insipiration-60-awesome-mac-apps-websites/ (older but still the best list of Mac-app sites).

Patterns that make the best ones feel made by hand:
- **The product is the hero, shown for real.** Linear, Screen Studio and CleanShot all show the real UI or real output, not illustrations. Screen Studio's hero is a real recording; its section titles are short plain claims ("Record once. Post everywhere.", "Offline first.").
- **One voice of copy.** Raycast: "Your shortcut to everything." Screen Studio: "Beautiful screen recordings, in minutes." Short, concrete, no "unleash". Things leads with just the name. Teenage Engineering writes everything lowercase and terse; the tone is the brand.
- **One signature device, repeated.** Linear's "Fig 0.1" figure labels; Teenage Engineering's tiny grey labels and product photography; Raycast's keyboard. A single idea carried through the whole page beats ten effects.
- **Mac-first CTA wording.** "Download for Mac" (Screen Studio), "Get CleanShot for Mac". Platform named in the button. Screen Studio states requirements (macOS version, Apple silicon) right where you download.
- **Privacy as a section, stated plainly.** Screen Studio has an "Offline first" section listing what stays on the Mac and what is sent. Directly relevant: Friskshorts can say the same thing truthfully.
- **What to NOT copy from them:** Screen Studio has 23 sections and CleanShot 17, plus logo walls, tweet walls and newsletters. That works for paid products with a large community. For a free app from an anonymous studio, invented social proof would be the biggest slop tell of all. Our proof is the output itself: real Shorts, unedited.
- **Award sites (Awwwards SOTD 2025-26)** lean on: one strong typographic idea at very large sizes; scroll-linked storytelling with a pinned stage; hard cuts and snappy timing borrowed from film editing rather than floaty fades; real media; generous empty space; custom cursors and WebGL are common but not required (and are slop when they don't relate to the subject).

What "hand-made" means in practice (checklist used in DESIGN.md):
- Real artefacts: real screenshots, real renders, real waveform data from a real voice, a real script.
- Specific, slightly odd details only this product would have: the caption's black outline, the green current word, the 9:16 crop marks, a timecode.
- Interactions you can touch: change the caption colours, switch the background, hear a voice. Small, real, honest.
- Copy written by someone who uses the thing ("One line is enough.").

---

## C. Motion and media tooling for a static site, late 2026

### Libraries (versions checked with `npm view` on 2026-10-17)

| Option | Latest | Size (min+gzip, measured from jsDelivr) | License | Verdict |
|---|---|---|---|---|
| GSAP core | 3.15.0 (2026-04-13) | 28.3 KB | GSAP Standard "No Charge" license, all plugins free incl. commercial since 2025-04-30 (https://gsap.com/standard-license/). Only bans use inside no-code animation builders that compete with Webflow. No attribution needed. | Good, but not needed for this design |
| GSAP ScrollTrigger | 3.15.0 | 18.0 KB | same | Not needed: sticky + IntersectionObserver covers it |
| GSAP SplitText | 3.15.0 | 3.7 KB | same (free since 2025) | Not needed: we split our own words (we control the markup) |
| Motion (motion.dev) vanilla | 14.3.0 (2026-10-15); last version older than two weeks: 13.4.6 | 49 KB full UMD | MIT | Overkill for this page |
| Lenis | 1.3.27 (2026-10-15); older than two weeks: 1.3.26; 2.0 in dev | 5.4 KB | MIT | **Rejected.** macOS trackpads already scroll with inertia; Lenis smooths wheel only, not keyboard/scrollbar (GSAP forum reports), adds a frame of latency, and fights native find-in-page and anchor jumps. Sticky + native scroll is calmer and more "Mac". |
| Rive web runtime (@rive-app/canvas) | 2.44.2 | 125 KB + .riv files | MIT runtime | Rejected: heavy for a few vector moments we can do in SVG + CSS |
| dotLottie web | 0.81.0 | 33 KB + WASM | MIT | Rejected for same reason; Lottie also needs After Effects source |

### Native platform features

- **CSS scroll-driven animations** (`animation-timeline: scroll()/view()`): Chrome/Edge 115+, Safari 26.0+ (macOS and iOS), Firefox only from 161 per caniuse, i.e. not in current Firefox stable (MDN still lists it behind `layout.css.scroll-driven-animations.enabled` in release). Global ~88%. https://caniuse.com/mdn-css_properties_animation-timeline, https://developer.mozilla.org/Firefox/Experimental_features, https://developer.chrome.com/docs/css-ui/scroll-driven-animations
  Use as progressive enhancement only for continuous, decorative progress (our playhead), with a tiny JS fallback.
- **`animation-trigger`** (scroll-triggered CSS): Chrome/Edge 146+ only. Do not use yet.
- **View Transitions, cross-document** (`@view-transition { navigation: auto; }`): Chrome/Edge 126+, Safari 18.2+, Firefox partial from 144. ~89%. https://caniuse.com/cross-document-view-transitions. Free progressive enhancement between our two pages.
- **Web Animations API** (`element.animate()`): universal; enough for sequencing with promises (`.finished`).
- **IntersectionObserver**: universal; use for step activation and video play/pause.
- **`paint-order: stroke fill`** for the caption outline on HTML text: Chrome 123+ (full), Firefox 60+, Safari 11+. ~97%. https://caniuse.com/mdn-css_properties_paint-order. Fallback for older Chrome: 8-direction `text-shadow`.

### Decision

**No animation library.** Vanilla HTML, one CSS file, one small ES module (target under 15 KB gzip), using `position: sticky`, IntersectionObserver, the Web Animations API, CSS transitions, and CSS scroll-driven animation as an enhancement. Self-hosted fonts. Nothing from a CDN at runtime (no third-party requests, no cookie banner needed, nothing breaks if a CDN changes).
If the builder later finds a genuine need for a timeline engine, the only allowed addition is self-hosted `gsap@3.15.0/dist/gsap.min.js` (core only, 28 KB) under `vendor/gsap/3.15.0/`, loaded with `defer`. Justify it in a comment first.

### Performance targets and facts
- Core Web Vitals "good": LCP <= 2.5 s, INP <= 200 ms, CLS <= 0.1, measured at the 75th percentile (https://web.dev/articles/vitals). A claimed 2026 tightening of LCP to 2.0 s is not on web.dev; we target 2.0 s anyway.
- An element at `opacity: 0` is not an LCP candidate until it becomes visible, so a hidden-then-revealed hero headline delays LCP. The hero headline must paint visible on first frame (DESIGN.md: the hero "Burn" is a highlight sweep over already-visible words, not a reveal).
- A video `poster` image can be an LCP candidate; keep it small and sized.
- GitHub Pages: site <= 1 GB, soft 100 GB/month bandwidth, no custom headers, every file served with a short cache (about 10 minutes). https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits. At ~3 MB per full visit that is roughly 33,000 full visits a month before the soft limit; video must stay small and lazy.
- Project site lives under `/Friskshorts/`: every URL in HTML/CSS must be relative (no leading `/`).

### Video
- **Autoplay rules:** muted + `playsinline` + `autoplay` + `loop` plays inline on iOS without a gesture (https://webkit.org/blog/6784/new-video-policies-for-ios/). Set `video.muted = true` in JS too. **iOS Low Power Mode blocks autoplay by design** and shows a play button; `play()` rejects with `NotAllowedError` (https://bugs.webkit.org/show_bug.cgi?id=219889). Always have a good poster and our own play control; catch the promise.
- **Codecs:** H.264 MP4 plays everywhere. AV1: Chrome 70+, Firefox 67+, Edge 121+; Safari 17+ only "partial" (hardware decoder: M3 and later Macs, A17 Pro and later iPhones) (https://caniuse.com/av1, https://bitmovin.com/apple-av1-support). WebM: Safari macOS 16+, iOS 17.4+ (https://caniuse.com/webm).
  Plan: two `<source>`s per clip: WebM first (the asset agent already delivers VP9/AV1 WebM; Safari macOS 16+ and iOS 17.4+ play WebM), H.264 MP4 second as the universal fallback. Optional AV1-in-MP4 with an explicit `codecs` string (browsers without AV1 decode return "" for `canPlayType` and skip it) only if it is clearly smaller.
- iOS decodes a limited number of videos at once: play only what is on screen (IntersectionObserver), pause the rest, never more than 2 playing.
- `preload="none"` on everything except the hero clip, which is fetched after the `load` event.

### Mobile Safari gotchas (to design around)
- Use `svh` for sizes that must not jump when the toolbar collapses; `dvh` resizes during scroll and causes jank. Use `lvh`/`svh` deliberately, never bare `vh` for the stage.
- `position: sticky` silently fails if any ancestor has `overflow: hidden|auto|scroll`. Use `overflow: clip` for clipping.
- Safari 26 ignores `<meta name="theme-color">`; it tints the toolbars from the page/`body` background and from fixed elements touching the edges (https://benfrain.com/ios26-safari-theme-color-tab-tinting-with-fixed-position-elements/, https://bugs.webkit.org/show_bug.cgi?id=301756). Set an explicit `html, body` background. Avoid fixed elements at the top/bottom edges with a different colour from the page (the yellow download section must not be `position: fixed`).
- `viewport-fit=cover` + `env(safe-area-inset-*)` padding for full-bleed sections.
- No hover on touch: everything hover-revealed must also be reachable by tap/focus (`@media (hover: hover)` for hover-only polish).
- Audio needs a user gesture; our "Hear a voice" button provides it.

### Reduced motion
- `@media (prefers-reduced-motion: reduce)`: no sweeps, no typing, no drops, no autoplay. Each step shows its final state as a still. Hard cuts (0 ms) are fine. Respect it in JS via `matchMedia` and listen for changes.
- WCAG 2.2.2: anything that moves for more than 5 seconds needs a pause control. Every looping video gets one.

---

## D. "AI slop" tells: strict checklist for the evaluator

Sources: the Anthropic skill and docs in section A; practitioner write-ups (vendor blogs, treat as heuristics): https://www.925studios.co/blog/ai-slop-web-design-guide, https://capitalandcompute.net/blog/fix-ai-slop-design/, https://noqta.tn/en/blog/ai-design-slop-overused-ui-patterns-fix-2026, https://github.com/Laith0003/ux-skill/wiki/How-to-detect-AI-slop-in-your-design

Fail the page if any of these is true. Each line is a yes/no check.

**Layout**
- [ ] A centered hero with headline, subline and two buttons, all centre-aligned over a gradient or blurred blob.
- [ ] A row of 3 (or 4, or 6) identical feature cards, each with an icon on top, a bold title and two lines of text.
- [ ] Every section uses the same rhythm: centered heading, centered paragraph, grid below.
- [ ] Everything is centered. (Our default alignment is left; centering is reserved for the 9:16 frame on mobile.)
- [ ] More than 7 sections on the home page, or more than one idea per screen.
- [ ] Bento grid of mismatched cards used as decoration.
- [ ] Device mockups (stock iPhone/MacBook frames) instead of the real app window or real output.

**Colour and surface**
- [ ] Purple, violet or purple-to-blue gradients anywhere.
- [ ] Gradient blobs, mesh gradients, aurora glows, noise-gradient "atmosphere" behind content.
- [ ] Glassmorphism (frosted `backdrop-filter` panels) anywhere.
- [ ] The same border-radius on every element (cards, buttons, images, chips) regardless of hierarchy.
- [ ] Soft grey drop shadow (`rgba(0,0,0,.1)`) under every card.
- [ ] Near-black page with a single acid accent used decoratively (accent colours must carry the meaning defined in DESIGN.md).
- [ ] Tinted near-black (#0B0B0B, #111) used where pure black is meant. (Pure black is used only inside the video frame; the page uses the brand ink #17181F on purpose because it is the colour of the app icon tile.)
- [ ] Glow, neon, or "shine" sweeps on buttons.

**Typography**
- [ ] Inter, Roboto, Arial, Open Sans, Lato, Poppins, Montserrat, Space Grotesk, Syne, Unbounded, Bricolage Grotesque, Instrument Serif or the system UI font as the visible design font.
- [ ] One word in a headline accented in another colour, italic or gradient at rest. (Our green word moves across the caption and is never left resting on one word.)
- [ ] Tracked-out ALL-CAPS eyebrow labels above headings ("FEATURES", "HOW IT WORKS"). (Uppercase is allowed only where text is literally a caption.)
- [ ] Monospace used for small labels or meta data. (Allowed only for real code in the "notebook" section.)
- [ ] Meta strings joined with middle dots ("Free · macOS · Windows"), labels like "WORD — fragment", or "→" appended to links and buttons. (A real menu path like "System Settings → Privacy & Security" is allowed.)
- [ ] Default Tailwind-like type scale 12/14/16/18/24/30/36/48/60/72.
- [ ] Gradient text.

**Copy**
- [ ] Hype words: unleash, supercharge, revolutionize, elevate, seamless, effortless, game-changer, cutting-edge, next-level, magic/magical, "in seconds", "AI-powered" as an adjective, "Say goodbye to", "Meet X", "Introducing".
- [ ] Emoji used as bullets or section icons.
- [ ] Invented numbers: user counts, ratings, "10x faster", "trusted by", fake download counts.
- [ ] Fake testimonials, fake avatars, fake press quotes, logo walls of companies that never used it.
- [ ] Rhetorical question headlines ("Tired of…?").
- [ ] Copy that describes how it is built rather than what the user gets.
- [ ] Inconsistent action names (button says "Download", next screen says "Get the app").
- [ ] Lorem ipsum or placeholder text in anything shipped.

**Imagery and graphics**
- [ ] Stock 3D renders, isometric illustrations, abstract "AI brain/sparkle" art, sparkle ✨ icons for AI.
- [ ] Generic icon set (Lucide/Heroicons line icons) as decoration next to each feature.
- [ ] AI-generated images of any kind.
- [ ] Logos of AI providers in a row ("logo soup"). (Provider names appear as plain text.)
- [ ] Decorative grid/dot patterns behind sections with no meaning.

**Motion**
- [ ] Fade-and-slide-up on every section as it enters.
- [ ] Hover lift/scale on every card.
- [ ] Parallax for its own sake, floating elements bobbing, marquee tickers.
- [ ] Custom cursor, cursor-follow blobs, magnetic buttons.
- [ ] Smooth-scroll hijacking or scroll that cannot be stopped.
- [ ] Motion with no reduced-motion fallback, or looping motion without a pause control.
- [ ] Animated counters counting up.

**Craft floor (fail if missing)**
- [ ] Works at 320 px wide with no horizontal scroll; 16 px side gutter minimum.
- [ ] Visible keyboard focus on every control; skip link.
- [ ] Text contrast at least 4.5:1 (3:1 for 24 px+ bold).
- [ ] Real alt text; videos have a text equivalent.
- [ ] No layout shift from fonts, images or video (all media sized by aspect-ratio).
- [ ] Works with JavaScript off (all content and download links present).

---

## E. Other facts found while researching

- **Caption font in the app** (`src/friskshorts/assets/fonts/bold_font.ttf`): family "The Bold Font", name table says "Copyright (c) 2015 ... All rights reserved.", trademark of its designer, OS/2 `fsType = 4` (preview-and-print embedding only). No open licence ships with it. **Do not use it on the web.** (Separately worth checking: whether the app itself is licensed to bundle it.)
- **Chosen web faces** (both SIL Open Font License 1.1, from https://github.com/google/fonts):
  - Archivo, variable `wdth 62-125`, `wght 100-900`, by Omnibus-Type: https://github.com/google/fonts/tree/main/ofl/archivo. At `wght 900, wdth 100`, uppercase, it has the same squat, heavy, tight silhouette as the in-video caption font.
  - Atkinson Hyperlegible Next, variable `wght 200-800`, added to Google Fonts 2025-01: https://github.com/google/fonts/tree/main/ofl/atkinsonhyperlegiblenext. Designed for legibility (distinct I/l/1, open shapes), which suits plain-spoken copy and is not one of the overused defaults.
- App UI tokens (from `src/friskshorts/assets/ui/css/base.css`): ink `#17181f`, yellow `#ffe600`, green `#64ff47`; dark surfaces `#141519`, `#1f2027`, `#272830`, border `#2e303a`, text `#eeeef2`, muted `#a3a5b0`, faint `#737584`; light bg `#f6f6f7`, light text `#17181f`, link green (light) `#17713a`. Render captions use `#FFFF00` text and `#64FF47` current word with a black outline.
- Release facts (README): macOS Apple Silicon `.dmg` 486 MB, Windows 10/11 x64 setup 480 MB, version 2.1.1, unsigned (Gatekeeper "Open" / SmartScreen "Run anyway" steps), voice cloning add-on about 1.4 GB installed from inside the app, ffmpeg and espeak-ng (GPL) licences ship inside the app, keys in Keychain / Credential Manager, videos never uploaded.
