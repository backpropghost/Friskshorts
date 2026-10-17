# Friskshorts website: design direction

Status: ready to build. Owner: backpropghost. Date: 2026-10-17.
Read `research/RESEARCH.md` first (sources, browser support, slop checklist). This file says exactly what to build.
Nothing in this file, `research/` or `tools/` is deployed (see section 15).

---

## 1. Concept: "Burn-In"

> **The page is a Short being made.**
> Every headline is a caption, burned in word by word in Shorts yellow, with the word being "spoken" lit green.
> Scrolling is the timeline: one 9:16 frame stays on screen while topic, script, voice, scene and captions build up into a real MP4.

"Burned-in captions" is the video term for captions printed into the picture. That is literally what Friskshorts does, and it is what the page does to its own headlines. The concept comes from the product, not from a style trend:

- **The type is the product's type.** Big, heavy, uppercase, yellow with a black outline. The visitor sees the house style of a Short before they see a single video.
- **The stage is the product's canvas.** A 9:16 frame with editor crop marks, a pipeline ruler under it, a green playhead. Not a phone mockup.
- **The motion is the product's motion.** Cuts, word pops, a rewind, a playhead. Vocabulary from video editing, nothing from template land.
- **The proof is the product's output.** Real renders, real screenshots, a real script, real voice timing data. No testimonials, no counts.

Spend the boldness in one place: the captions + the frame. Everything else is quiet, left-aligned, flat ink, lots of air.

### Headline

Candidates considered:
1. **Type a topic. Get a Short.**  <- chosen
2. Topic in. Short out.
3. One line in. One Short out.
4. Your next Short, made on your Mac.
5. From a topic to a finished Short.

Why 1: it says exactly what happens, in the order it happens, in six words. It breaks into two lines of three words, which is exactly how a Shorts caption breaks. It is an instruction, not a promise.

---

## 2. Site map and section list

Two pages plus a 404. Home has seven sections, one idea per screen.

| # | Section (id) | One idea | Approx. height desktop / mobile |
|---|---|---|---|
| 0 | Nav | Name + download | 72px / 56px |
| 1 | Hero (`#top`) | What it is, in one caption, with a real Short playing | 100svh / auto (~1.3 screens) |
| 2 | The Run (`#how`) | How it gets made: 6 steps, frame stays put | 6 x 100svh / 6 x 72svh |
| 3 | The app (`#app`) | It's a real desktop app, three steps, here is the window | 100svh / auto |
| 4 | Reel (`#made`) | Real output, unedited | 100svh / auto |
| 5 | On your computer (`#private`) | Nothing leaves your computer except the script request | 90svh / auto |
| 6 | Notebook (`#story`) | It started years ago as Jupyter notebooks | 80svh / auto |
| 7 | Get it (`#download`) | Download, platform aware, honest install note, support | 100svh / auto |
| - | Footer | Small print | auto |

`install/index.html`: install help for Mac and Windows (light page).
`404.html`: one caption and a link home.

---

## 3. Copy (final, use verbatim)

Spelling follows the README: "colours", "licences". Sentence case everywhere except captions. No em dashes anywhere in user-facing text. Lines marked **[owner]** need a yes from the owner before launch.

**`<title>`**: `Friskshorts. Type a topic, get a YouTube Short.`
**meta description**: `A free desktop app for Mac and Windows. It writes the script, reads it aloud, adds gameplay, pictures and word-by-word captions, and saves a 1080 x 1920 MP4 on your computer.`

### 0. Nav
- Left: logo tile + wordmark `Friskshorts` (links to `#top`).
- Right (desktop): `How it works` (`#how`), `Install help` (`install/`), button `Download for Mac` (label is platform aware, see section 11; goes to `#download`).
- Right (mobile): only the button, label `Download`. No hamburger menu. Other links live in the footer.

### 1. Hero
- H1, caption style, two lines: `TYPE A TOPIC.` / `GET A SHORT.`
- Sub (body-l): `Friskshorts writes the script, reads it aloud, puts it over gameplay and adds the captions. You get a vertical video ready for YouTube, made on your own computer.`
- Primary button: `Download for Mac` (platform aware).
- Under button (small, muted): `Free. For Macs with Apple Silicon. 486 MB.` (platform aware)
- Secondary text link: `Also for Windows 10 and 11` (platform aware: on Windows it reads `Also for Mac`).
- Under the frame (micro, muted): `Made in Friskshorts. Not edited.`

### 2. The Run
- Section heading, caption style: `HOW IT GETS MADE.`
- Steps (ordered list, the numbers are real because it is a sequence). Title = h3, then body, then optional control.
  1. **Start with a topic.** `One line is enough. Stuck? Pick one of the ideas.`
  2. **It writes the script.** `With your own key for Claude, OpenAI, Gemini, DeepSeek or OpenRouter. No key? Copy the prompt into any chatbot and paste the reply back.`
  3. **It reads it aloud, offline.** `More than 40 natural voices, made on your computer. Want it in your own voice? Add voice cloning in Settings.`
     Control: button `Hear the voice` / `Stop` . Micro under it: `Voice: Heart, American English` (use whatever voice the asset agent actually rendered).
  4. **It sets the scene.** `Minecraft parkour, ASMR or your own video in the background. Pictures from the web or YouTube clips on top, found for each scene.`
     Control: segmented radio group `Minecraft parkour` / `ASMR` / `Your own video`.
  5. **It adds the captions.** `Bold, word by word, in your colours. The word being spoken lights up.`
     Control: two small radio groups, `Text` (4 swatches) and `Highlight` (4 swatches), same names as in the app.
  6. **Out comes an MP4.** `1080 x 1920, ready to upload. Next to it, a text file with the title, description and tags.`
     Below the frame, the two real output file names appear (from the asset agent), e.g. `Why An Octopus Has Three Hearts.mp4` and `.txt`.
  Typeset the "x" in 1080 x 1920 as the multiplication sign `×` with thin spaces.

### 3. The app
- H2: `That's the whole app.`
- Body: `Three steps: topic, script, style. Then press Make video and it's saved on your computer, with a text file ready to paste into YouTube. The same app runs on Mac and Windows.`

### 4. Reel
- Heading, caption style: `MADE WITH FRISKSHORTS.`
- Small: `Straight out of the app, not edited afterwards.`
- Per clip: line 1 = the topic exactly as typed (from `reel.json`); line 2 muted = what was picked, as a sentence (e.g. `Minecraft parkour with pictures from the web.`).

### 5. On your computer
- H2: `It stays on your computer.`
- Three lines (plain list, no icons):
  - `Videos are saved on your computer and never uploaded.`
  - `API keys live in your system keychain, not in plain files.`
  - `Script requests go straight to the AI you picked. There's no Friskshorts server in between.`
- Small: `Voice, captions and rendering work offline. Internet is only needed for AI scripts and web pictures or clips.`

### 6. Notebook **[owner]**
- H2: `It started as a notebook.`
- Body: `Friskshorts began years ago as a pile of Jupyter notebooks, back when AI could barely write a script and every video took an evening of fixing by hand. Version 2 is the same idea, finally simple enough for anyone to use.`

### 7. Get it
- Heading, caption style (ink on yellow): `GET FRISKSHORTS.`
- Primary block (platform aware, section 11). Mac default:
  - Button: `Download for Mac`
  - Line: `Version 2.1.1 for Macs with Apple Silicon (M1 or newer). 486 MB.`
- Secondary block: `Windows 10 or 11, 64-bit.` link `Download for Windows` + `480 MB.`
- Note: `The app isn't code-signed yet, so the first time you open it your computer asks if you're sure.` link `See the two clicks` (to `install/`).
- Requirements (small): `About 1 GB of free space. Voice, captions and rendering work offline.`
- Voice cloning (small): `Want the narration in your own voice? Turn on voice cloning in Settings and the app installs it for you (about 1.4 GB).`
- Support row (separated by a 2px ink rule):
  - `Friskshorts is free. If it saves you time, you can support it.`
  - Button (outline): `Support on GitHub Sponsors` -> https://github.com/sponsors/backpropghost
  - While the Sponsors listing is pending (`<html data-sponsors="pending">`): text becomes `Friskshorts is free. If it saves you time, a star on GitHub helps.` and the button `Star on GitHub` -> https://github.com/backpropghost/Friskshorts. Flip the attribute when Sponsors is live; both variants live in the HTML, CSS shows one.

### Footer
- Logo tile (24px) + `Friskshorts by backpropghost.`
- Links: `All releases` (https://github.com/backpropghost/Friskshorts/releases), `Install help`, `Report a problem` (https://github.com/backpropghost/Friskshorts/issues), `Support the project` (Sponsors or star, same toggle).
- Fine print (micro, `--muted`):
  - `Free to download. Source is not public. Includes ffmpeg and espeak-ng (GPL); their licences ship inside the app.`
  - `YouTube is a trademark of Google LLC. Minecraft is a trademark of Mojang Synergies AB. Friskshorts is not affiliated with either.`
  - `This site has no cookies and no tracking.`

### Install page (`install/`)
- H1 (sentence, not caption): `Install Friskshorts`
- Tabs: `Mac` / `Windows` (detected one selected; both readable without JS as two stacked sections).
- Mac steps (from README, with a real screenshot per step 3):
  1. `Open the .dmg and drag Friskshorts into Applications.`
  2. `The first time, right-click the app and choose Open, then Open again.`
  3. `If that doesn't appear, go to System Settings → Privacy & Security and click Open Anyway.`
- Windows steps:
  1. `Run the setup file.`
  2. `If SmartScreen says "Windows protected your PC", click More info, then Run anyway.`
  3. `It installs for your user only, no admin rights needed. Start it from the Start menu.`
- Then: `Requirements`, `Voice cloning (optional)`, `Your data` (same three lines as home #5), and the support row.
- Back link: `Friskshorts home`.

### 404
- Caption: `THIS PAGE ISN'T IN THE SCRIPT.` Link: `Back to Friskshorts`.

---

## 4. Typography

Both faces are SIL Open Font License 1.1, self-hosted as subset WOFF2, OFL text shipped next to them in `fonts/`.
The app's caption font ("The Bold Font") is all-rights-reserved with `fsType 4`: **never used on the web**.

| Role | Face | Settings |
|---|---|---|
| Caption (H1, caption headings, in-frame captions) | **Archivo** variable | `wght 900`, `wdth 100`, UPPERCASE, `letter-spacing: -0.01em`, `line-height: 0.9` |
| Headings (h2, h3, step titles), wordmark, buttons | **Archivo** variable | h2 `wght 760 wdth 112`; h3 / buttons `wght 700 wdth 106`; wordmark `wght 800 wdth 112` |
| Body, small, micro, UI text in the frame | **Atkinson Hyperlegible Next** variable | `wght 400` body, `700` for emphasis (rare) |
| Code (Notebook section only, if a real screenshot is not used) | none: use a real screenshot instead | - |

Why: Archivo at 900/100 uppercase has the same squat, heavy, tight silhouette as the in-video caption font, so the page and the videos look like one system. Wider Archivo (`wdth 112`) for normal headings separates "UI voice" from "caption voice" inside one family. Atkinson Hyperlegible Next is built for legibility, has character (the open shapes, distinct I/l/1) and is not one of the overused defaults.

Subsetting (run once, locally; output committed):
```
uvx --from 'fonttools[woff]' fonttools varLib.instancer 'Archivo[wdth,wght].ttf' wght=700:900 wdth=100:112 -o /tmp/archivo-cut.ttf
uvx --from 'fonttools[woff]' pyftsubset /tmp/archivo-cut.ttf --unicodes='U+0020-007E,U+00A0-00FF,U+2009,U+2013,U+2018-201D,U+2026,U+2192,U+00D7' --layout-features='kern,liga,tnum,case' --flavor=woff2 --output-file=fonts/archivo.woff2
uvx --from 'fonttools[woff]' fonttools varLib.instancer 'AtkinsonHyperlegibleNext[wght].ttf' wght=400:700 -o /tmp/atk-cut.ttf
uvx --from 'fonttools[woff]' pyftsubset /tmp/atk-cut.ttf --unicodes='U+0020-007E,U+00A0-00FF,U+2009,U+2013,U+2018-201D,U+2026,U+2192,U+00D7' --layout-features='kern,liga' --flavor=woff2 --output-file=fonts/atkinson-next.woff2
```
Targets: `archivo.woff2` <= 45 KB, `atkinson-next.woff2` <= 35 KB. Preload only `archivo.woff2`.

`@font-face`: `font-display: swap`. Add metric-matched fallbacks to stop layout shift: `"Archivo Fallback"` = `local("Arial Black"), local("Arial Bold")` and `"Atkinson Fallback"` = `local("Verdana"), local("Arial")`, with `size-adjust`, `ascent-override`, `descent-override` computed with Capsize or fontaine against the subset files (do not guess these numbers; compute them).

### Type scale (desktop base 18px, ratio about 1.333 for headings, captions fluid)

| Token | Size | Line height | Use |
|---|---|---|---|
| `--fs-cap-xl` | `clamp(52px, 7.2vw, 136px)` | 0.9 | Hero H1 |
| `--fs-cap-l` | `clamp(40px, 5.2vw, 96px)` | 0.92 | Caption section headings |
| `--fs-cap-frame` | `calc(var(--frame-w) * 0.105)` | 1.0 | Captions inside the frame (about 40px at 382px wide, same ratio as a real Short) |
| `--fs-h2` | `clamp(30px, 3.2vw, 48px)` | 1.05 | Section H2 |
| `--fs-h3` | `clamp(22px, 1.8vw, 28px)` | 1.15 | Step titles |
| `--fs-body-l` | `clamp(18px, 1.45vw, 21px)` | 1.5 | Hero sub |
| `--fs-body` | `18px` (mobile `17px`) | 1.55 | Body |
| `--fs-small` | `15px` | 1.45 | Notes, captions under media |
| `--fs-micro` | `13px` | 1.35 | Ruler labels, fine print |

Rules: body measure max `34em`. Archivo never below 15px. No letter-spaced uppercase anywhere except captions. Use `font-variant-numeric: tabular-nums` for sizes and versions. `text-wrap: balance` on h2/h3, `text-wrap: pretty` on body.

### The caption treatment (the signature)
```css
.caption {
  font: 900 var(--fs) / 0.9 "Archivo", "Archivo Fallback", sans-serif;
  font-variation-settings: "wdth" 100;
  text-transform: uppercase;
  color: var(--cap-text);                 /* #FFFF00 */
  -webkit-text-stroke: 0.14em #000;        /* drawn behind the fill: */
  paint-order: stroke fill;                /* net visible outline about 0.07em */
  letter-spacing: -0.01em;
}
.caption .w.is-now { color: var(--cap-now); }   /* #64FF47 */
```
Fallback for browsers without `paint-order` on HTML text (old Chrome < 123): `@supports not (paint-order: stroke fill)` -> no `-webkit-text-stroke`, use 8 `text-shadow`s at 0.05em offsets in #000.
On yellow (section 7) the caption is inverted: `color: var(--ink)`, no stroke.
Words are wrapped as `<span class="w">WORD</span>` in the HTML source (not by JS) so no-JS, screen readers and LCP are unaffected. Keep normal spaces between spans.

---

## 5. Colour

Dark-first. Five named colours carry the whole site; each has a job.

| Token | Hex | Job |
|---|---|---|
| `--ink` | `#17181F` | Page background. The colour of the app icon tile and the app's brand ink. |
| `--black` | `#000000` | Only inside the video frame (the video canvas) and the caption outline. |
| `--cap-text` | `#FFFF00` | Caption text, exactly as rendered in the videos. Only on text that is a caption. |
| `--cap-now` | `#64FF47` | "Now": the word being spoken, the active ruler step and playhead, focus rings. Nothing else. Never left resting on a heading. |
| `--brand-yellow` | `#FFE600` | UI yellow: primary buttons, the download field (section 7), the step number dots. |

Neutrals (from the app's dark theme, so screenshots sit in the page naturally):
`--surface #1F2027` (ruler track, segmented control bg), `--surface-2 #272830` (pressed), `--line #2E303A` (rules, frame edge), `--text #EEEEF2`, `--muted #A3A5B0`, `--faint #737584`.

Light (install page only, from the app's light theme): `--l-bg #F6F6F7`, `--l-surface #FFFFFF`, `--l-text #17181F`, `--l-muted #646672`, `--l-line #E3E3E8`, `--l-link #17713A`, button = ink bg + white text, step dots = `#FFE600` with ink numerals.

Contrast (WCAG formula, computed): `--text` on `--ink` 15.3:1; `--muted` on `--ink` 7.2:1; `--faint` on `--ink` 3.9:1 (micro text at 13px must use `--muted`, `--faint` only for non-essential fine print >= 15px or decorative ticks); ink on `#FFE600` 14.0:1; `#FFFF00` caption on ink 16.5:1; `#64FF47` on ink 13.4:1; light page: `#646672` on `#F6F6F7` 5.3:1, link `#17713A` 5.6:1.

Why this is not "near-black + one acid accent" (slop cluster 2): yellow is a dominant field (the whole download section, the button colour, the caption type at 100px+), green has one strict meaning tied to the product's caption highlight, and both colours are the real colours the app renders. No gradients, no glows, no washes. The only "atmosphere" is the real footage inside the frame.

`html, body { background: var(--ink); color-scheme: dark; }` (Safari 26 tints its toolbars from this). The yellow section is normal flow, never fixed.

---

## 6. Grid and spacing

- Desktop (>= 1024px): 12 columns, max content width 1312px, gutter 24px, outer margin `clamp(24px, 4.4vw, 64px)`.
- Tablet (640 to 1023px): 8 columns, gutter 20px, margin 32px.
- Mobile (< 640px): 4 columns, gutter 16px, margin 16px (plus `env(safe-area-inset-left/right)`). Must work at 320px.
- Spacing scale (px): 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192. Section padding block: `clamp(96px, 14svh, 192px)`.
- Alignment: everything left-aligned to the column grid. Centering only for: the frame on mobile, the 404 page.
- Radii with meaning (no other values): `20px` the video frame and reel clips; `12px` buttons and the app window screenshot; `999px` chips and segmented controls. Nothing else is rounded.
- Shadows: none, except `--shadow-window: 0 30px 80px rgb(0 0 0 / .55), 0 2px 8px rgb(0 0 0 / .35)` on the app window screenshot (a macOS window really has one).

### Frame geometry
- Desktop: `--frame-h: min(72svh, 680px)`, `--frame-w: calc(var(--frame-h) * 9 / 16)` (max 382px). Sticky band = frame + 16px + ruler (40px). Band `top: calc((100svh - var(--band-h)) / 2)`.
- Mobile: `--frame-h: min(56svh, 520px)`, sticky band `top: 0`, band has `--ink` background full width, padding `8px 16px 12px`, and a 24px ink-to-transparent fade on its bottom edge so step text slides under cleanly (this is the only gradient on the site, and it is functional).
- Frame: `aspect-ratio: 9 / 16`, `background: #000`, `border-radius: 20px`, `outline: 1px solid var(--line)`, `overflow: clip`.
- Crop marks: four L-shaped ticks, 14px arms, 1.5px, `--muted`, sitting 10px outside each corner. They show while the Short is "being made" (steps 1 to 5) and retract on step 6 and in the hero (finished state).

---

## 7. Layout and wireframes

The stage (Hero + Run) is one CSS grid so the frame can stay sticky from the first screen to the last step.

```
Desktop grid areas (>= 1024px):            Mobile grid (< 1024px):
  cols 1-7        cols 9-12                   col 1
  [hero      ]    [frame-col ]                [hero      ]   row 1
  [run-head  ]    [frame-col ]                [frame-col ]   rows 2-3 (spans; z-index 2; pointer-events none except band)
  [steps     ]    [frame-col ]                [run-head + steps] row 3 (starts below band height)
```
`.frame-col` spans every row and contains `.band { position: sticky }`. On mobile `.frame-col` overlaps the steps column (both in col 1); `pointer-events: none` on `.frame-col`, `auto` on `.band`. No ancestor of `.band` may have `overflow` other than `visible` or `clip`.

### 0 + 1. Nav and Hero

Desktop (1440 x 900)
```
+------------------------------------------------------------------------------------+
| [F] Friskshorts                                 How it works   Install help  [Download for Mac] |
|                                                                                    |
|                                                                                    |
|  TYPE A TOPIC.                                          ⌐ ┌───────────────┐ ¬      |
|  GET A SHORT.                     (caption, 7.2vw)        │               │        |
|                                                           │  real Short   │        |
|  Friskshorts writes the script, reads it aloud,           │  playing,     │        |
|  puts it over gameplay and adds the captions.             │  muted loop   │        |
|  You get a vertical video ready for YouTube,              │               │        |
|  made on your own computer.                               │   TO EAT.     │        |
|                                                           │               │        |
|  [ Download for Mac ]   Also for Windows 10 and 11        └───────────────┘        |
|  Free. For Macs with Apple Silicon. 486 MB.               Topic Script Voice Scene Captions [MP4]|
|                                                           ────────────────────────●│
|                                                           Made in Friskshorts. Not edited.|
+------------------------------------------------------------------------------------+
```
(In the hero the crop marks are hidden because the Short is finished; the ruler is fully lit with the playhead at MP4.)

Mobile (390 x 844)
```
+--------------------------------+
| [F] Friskshorts     [Download] |
|                                |
| TYPE A                         |
| TOPIC. GET                     |   caption at ~13.5vw, 3 lines max
| A SHORT.                       |
|                                |
| Friskshorts writes the script, |
| reads it aloud, puts it over   |
| gameplay and adds the captions.|
|                                |
| [      Download for Mac      ] |   full-width button, 52px tall
| Free. For Macs with Apple      |
| Silicon. 486 MB.               |
| Also for Windows 10 and 11     |
|--------------------------------|  <- sticky band starts here
|          ┌──────────┐          |
|          │  Short   │          |
|          │ playing  │          |
|          └──────────┘          |
|   • • • • • ●  MP4             |   6 ticks, only active label shown
+--------------------------------+
```
Mobile caption line breaks: let it wrap naturally at 13.5vw; at 320px it becomes 3 to 4 lines, still fine. Do not shrink below 40px.

### 2. The Run

Desktop
```
+------------------------------------------------------------------------------------+
|  HOW IT GETS MADE.                                     ⌐ ┌───────────────┐ ¬      |
|                                                          │ Why octopuses │        |
|  (1) Start with a topic.                                 │ have three    │        |
|      One line is enough. Stuck? Pick one                 │ hearts▌       │        |
|      of the ideas.                                       │               │        |
|                                                          │ (How black    │        |
|                                                          │  holes form)  │        |
|  (2) It writes the script.          <- next step,        │ (Why cats purr)│       |
|      dimmed until active                                 └───────────────┘        |
|                                                         [Topic] Script Voice Scene Captions MP4 |
|                                                          ●──────────────────────   |
+------------------------------------------------------------------------------------+
```
Each step block: `min-height: 100svh`, content vertically centred, cols 1-6. Number dot: 28px circle `--brand-yellow` with ink numeral (Archivo 700, 15px), same as the app's stepper. Inactive steps at `opacity: .38`, active at 1, transition 200ms.
Controls (voice button, background switcher, swatches) live in the step text column, never inside the frame (the frame is `aria-hidden`).

Mobile
```
+--------------------------------+
|          ┌──────────┐          |  sticky band (frame 56svh)
|          │ captions │          |
|          │ over bg  │          |
|          └──────────┘          |
|   • • • • ● •  Captions        |
|~~~~~~~~ 24px fade ~~~~~~~~~~~~~|
| (5) It adds the captions.      |  step text scrolls under the band
| Bold, word by word, in your    |
| colours. The word being        |
| spoken lights up.              |
| Text      [■][■][■][■]          |
| Highlight [■][■][■][■]          |
+--------------------------------+
```
Each step block `min-height: 72svh`. Step activates when its title crosses 70% of viewport height (IntersectionObserver `rootMargin: "-30% 0px -30% 0px"` desktop, `"-60% 0px -10% 0px"` mobile, tune by eye).

### What the frame shows per step

| Step | Frame layer | Detail |
|---|---|---|
| Hero | `layer-final` | Real hero Short (video, muted loop). Crop marks hidden. Ruler all lit, playhead at MP4. |
| 1 Topic | `layer-topic` | Black canvas. A rounded input (12px radius, 1px `--line`, padding 14px) at 30% height with the topic typing in: `Why an octopus has three hearts`, Atkinson 400 at `frame-w * 0.06`, `--text`, yellow 2px caret. Below: 2 idea chips (999px radius, `--surface`): `How black holes form`, `Why cats purr`. |
| 2 Script | `layer-script` | The real script's first 5 lines, Atkinson 400, `frame-w * 0.052`, `--text`, left-aligned, padding 8%. Lines appear one by one (Stream). Above them a micro label `Script`, sentence case, muted. |
| 3 Voice | `layer-voice` | The script dims to `--faint`; the current sentence stays `--text`. Bottom third: waveform SVG (real peaks), bars `--muted`, played part `--cap-now`, a 2px green playhead line. |
| 4 Scene | `layer-scene` | Background loop (selected one) fills the frame (object-fit cover). Web picture card at top 12%, width 84%, radius 12px, with a chip `Picture from the web` (as in the app's preview). |
| 5 Captions | `layer-scene` + `layer-captions` | Same scene; captions centred at 50% height, 1 to 3 words at a time, caption style, synced to the real word timings. Swatch changes apply instantly. |
| 6 MP4 | `layer-final` | Crop marks retract; the real finished Short plays. Below the frame (in the band, under the ruler) two file rows slide out: `[video icon] Why An Octopus Has Three Hearts.mp4  1080 × 1920` and `[text icon] Why An Octopus Has Three Hearts.txt`. |

### 3. The app

Desktop
```
+------------------------------------------------------------------------------------+
|  That's the whole app.                                                              |
|  Three steps: topic, script, style. Then press Make video and it's saved on your   |
|  computer, with a text file ready to paste into YouTube. The same app runs on Mac  |
|  and Windows.                                                                       |
|                                                                                    |
|  +------------------------------------------------------------------------------+  |
|  | (real Style & make window, dark, 2x capture, cols 1-12, radius 12, window    |  |
|  |  shadow)                                                     +----------+   |  |
|  |  Sound            Look                                       | live     |   |  |
|  |  Voice [....]     Background video [Minecraft parkour]       | video    |   |  |
|  |  Music [....]     On-screen visuals ...                      | overlay  |   |  |
|  |  Captions ...                                                +----------+   |  |
|  |                                                       [ Make video ]       |  |
|  +------------------------------------------------------------------------------+  |
+------------------------------------------------------------------------------------+
```
The preview slot in the screenshot gets the real hero Short overlaid as a `<video>` positioned in percentages (coordinates from the asset agent; for the existing 1600 x 960 `style-dark.png` the slot is left 73.75%, top 14.69%, width 20.31%, height 60.10%, radius 1%). The screenshot comes alive; no other motion in this section.

Mobile: same text; the screenshot is cropped to the right 48% (the Look column + preview) using `object-position: right` in a 4:5 box so the preview is legible; a `See the full window` link opens the full image.

### 4. Reel

Desktop
```
+------------------------------------------------------------------------------------+
|  MADE WITH FRISKSHORTS.                                                             |
|  Straight out of the app, not edited afterwards.                                   |
|                                                                                    |
|  ┌────────┐   ┌────────┐   ┌────────┐   ┌────────┐                                 |
|  │ clip 1 │   │ clip 2 │   │ clip 3 │   │ clip 4 │      cols 1-12, 4 x 9:16         |
|  │        │   │        │   │        │   │        │      each ~280px wide            |
|  └────────┘   └────────┘   └────────┘   └────────┘                                 |
|  (topic as     (topic as      ...          ...                                      |
|   typed)        typed)                                                             |
|  Minecraft     ASMR with                                                            |
|  parkour with  YouTube clips.                                                       |
|  pictures...                                                                        |
+------------------------------------------------------------------------------------+
```
Clips play only while on screen (max 2 at once on mobile, 4 on desktop), each with a pause button (32px, bottom-right inside the clip, visible on focus/hover and always on touch).

Mobile: horizontal scroll-snap row, each clip `width: 72vw`, `scroll-snap-align: start`, 16px gap, the row bleeds to the screen edge; the clip that is >= 60% visible plays, others pause. Show a small `1 / 4` counter under the row (tabular numerals).

### 5. On your computer

Desktop
```
+------------------------------------------------------------------------------------+
|  It stays on your computer.                       +----------------------------+    |
|                                                   |  (diagram, see 9.3)        |    |
|  Videos are saved on your computer and never      |  [your computer]------>    |    |
|  uploaded.                                        |   voice, captions,  [the AI|    |
|  API keys live in your system keychain, not in    |   render, keys       you   |    |
|  plain files.                                     |                      picked]|   |
|  Script requests go straight to the AI you        |                            |    |
|  picked. There's no Friskshorts server in between.+----------------------------+    |
|                                                                                    |
|  Voice, captions and rendering work offline. ...                                   |
+------------------------------------------------------------------------------------+
```
Text cols 1-5, diagram cols 7-12. Mobile: text then diagram, diagram full width.

### 6. Notebook

Desktop
```
+------------------------------------------------------------------------------------+
|  It started as a notebook.                    +-------------------------------+     |
|                                               | real screenshot of the v1     |     |
|  Friskshorts began years ago as a pile of     | Jupyter notebook (owner       |     |
|  Jupyter notebooks, back when AI could barely | supplies; usernames, paths,   |     |
|  write a script ...                           | keys scrubbed)                |     |
|                                               +-------------------------------+     |
+------------------------------------------------------------------------------------+
```
If no real screenshot exists: drop the visual and set the body text at `--fs-h3` across cols 1-8. Never fake a notebook.

### 7. Get it

Desktop (full-bleed `--brand-yellow` field, ink text)
```
+====================================================================================+
|  GET FRISKSHORTS.                          (caption, ink on yellow)                 |
|                                                                                    |
|  [  Download for Mac  ]     Windows 10 or 11, 64-bit.                              |
|  Version 2.1.1 for Macs      Download for Windows  480 MB.                          |
|  with Apple Silicon (M1 or                                                          |
|  newer). 486 MB.                                                                    |
|                                                                                    |
|  The app isn't code-signed yet, so the first time you open it your computer asks   |
|  if you're sure. See the two clicks                                                |
|  About 1 GB of free space. Voice, captions and rendering work offline.             |
|  Want the narration in your own voice? ...                                         |
|  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  |
|  Friskshorts is free. If it saves you time,     [ Support on GitHub Sponsors ]     |
|  you can support it.                                                                |
+====================================================================================+
```
Primary button here: ink bg, `#FFE600` text, 64px tall, 12px radius, Archivo 700 wdth 106 at 20px, Apple glyph (16px) before the label. Secondary is a text link with underline (2px, offset 4px). Padding bottom includes `env(safe-area-inset-bottom)`.

Mobile: single column; primary button full width; Windows block below it; support row stacks (text then full-width outline button).

### Footer
```
+------------------------------------------------------------------------------------+
| [F] Friskshorts by backpropghost.     All releases  Install help  Report a problem  Support the project |
| Free to download. Source is not public. Includes ffmpeg and espeak-ng (GPL); ...   |
| YouTube is a trademark of Google LLC. ... This site has no cookies and no tracking.|
+------------------------------------------------------------------------------------+
```
Mobile: links stack 2 per row, 44px tap height.

### Install page (light)
```
+--------------------------------------------------------------+
| [F] Friskshorts                             Friskshorts home  |
|                                                              |
| Install Friskshorts                                          |
| ( Mac | Windows )                                            |
|                                                              |
| (1) Open the .dmg and drag Friskshorts into Applications.    |
|     [real screenshot: dmg window]                            |
| (2) The first time, right-click the app and choose Open ...  |
|     [real screenshot: Gatekeeper dialog]                     |
| (3) If that doesn't appear, go to System Settings → ...      |
|     [real screenshot: Privacy & Security, Open Anyway]       |
|                                                              |
| Requirements / Voice cloning / Your data / Support row       |
+--------------------------------------------------------------+
```
Single column, max 680px, left-aligned. Screenshots 12px radius, 1px `--l-line` border, no shadow.

---

## 8. Motion system

Rules: motion vocabulary comes from video editing only. Time-based micro-animations are *triggered* when a step becomes active; the only *scroll-linked* (continuous) element is the ruler playhead. Nothing moves outside the frame except: the hero caption sweep, a caption heading's burn when it first enters, and the step dimming.

Tokens:
```
--ease-pop:   cubic-bezier(.2, 1.5, .4, 1);   /* small overshoot, caption pop */
--ease-out:   cubic-bezier(.16, 1, .3, 1);    /* drops, slides */
--ease-std:   cubic-bezier(.2, 0, 0, 1);      /* ruler, dims */
--t-pop: 140ms;  --t-ui: 160ms;  --t-dim: 200ms;  --t-drop: 560ms;  --t-rewind: 420ms;
--cadence: 300ms;   /* default time per word when no timing data */
--type-ms: 34ms;    /* per character */
```

| Name | Trigger | What happens | Reduced motion |
|---|---|---|---|
| **Burn (sweep)** | Hero H1, once, 350ms after `document.fonts.ready` (max wait 600ms) | Words are already visible and yellow. A "now" state walks word to word at `--cadence`: the current word turns `--cap-now` and pops `scale(1.06 -> 1)` over `--t-pop` with `--ease-pop`; previous word returns to yellow. Ends with all words yellow. | Nothing; static yellow. |
| **Burn (in)** | Each caption heading below the hero, first time 60% visible | Words start at `opacity: 0`; each word appears (opacity 1 + pop) and is "now" for one cadence, then yellow. 6 words max per heading. | Words visible, static yellow. |
| **Rewind** | Step 1 becomes active coming from the hero (and reverse when scrolling back up) | Ruler playhead slides from MP4 to Topic over `--t-rewind` (`--ease-std`); lit segments un-light right to left; frame: hero video `opacity 1 -> 0` in 120ms, then hard cut to the black canvas; crop marks appear (0ms). Reverse: hard cut back to the video, playhead slides to MP4. | Instant cuts, no slide. |
| **Cut** | Any step change | Frame layers swap with no transition (0ms), like an edit. The incoming layer then runs its own entry motion. | Same (cuts are not motion). |
| **Type** | Step 1 entry | Topic types at `--type-ms` per char; caret blinks `steps(1)` at 1.06s; idea chips appear together 200ms after typing ends (opacity only, 160ms). | Full text shown, no caret blink. |
| **Stream** | Step 2 entry | Script lines reveal one by one: `clip-path: inset(0 100% 0 0) -> inset(0 0 0 0)`, 240ms each, 120ms apart, `--ease-out`. | All lines shown. |
| **Wave** | Step 3 entry | Waveform bars grow from 0 to their height left to right over 700ms (`transform: scaleY`, origin bottom, 4ms stagger per bar); then a silent playhead sweeps the waveform at real audio speed and loops. `Hear the voice` plays the real audio and the playhead follows `audio.currentTime`. | Bars shown full; no sweep; audio button still works (user-triggered). |
| **Drop** | Step 4 entry | Background video layer `translateY(100% -> 0)` over `--t-drop` `--ease-out`, then `play()`; the picture card follows 300ms later `translateY(-12px) -> 0` + opacity, 320ms. Switching background later = Cut. | Cut, poster image only, no autoplay. |
| **Burn (frame)** | Step 5 active | Captions over the scene, 1 to 3 words per line, word timing from the real JSON (silent loop). Current word `--cap-now` (or the chosen highlight swatch) with pop. If the voice is playing, timings follow `audio.currentTime`. | Static caption line with the first phrase, no pop. |
| **Print** | Step 6 entry | Crop marks move 12px outward and fade (300ms `--ease-out`); final Short plays; file rows slide in under the ruler (`translateY(-8px) -> 0`, opacity, 260ms, 80ms apart). | Cut; rows shown. |
| **Playhead** | Continuous, scroll-linked through the Run | 2px `--cap-now` marker moves along the ruler; segments up to it are lit (`--text`), others `--faint`. Enhancement: CSS `animation-timeline: view()` on the steps container where `CSS.supports("animation-timeline: view()")`; fallback: one passive `scroll` listener + `requestAnimationFrame` writing a `--p` custom property (transform only). | Snaps to the active step (no continuous movement). |
| **Dim** | Step activation | Inactive step text `opacity .38`, active `1`, `--t-dim`. | Same (opacity change is fine), or all at 1. |
| **Press** | Buttons | `:active` `scale(.98)` 80ms. Hover (only `@media (hover: hover)`): background shifts one step lighter in 160ms. No lifts, no glows. | Same. |

Global rules:
- Only `transform`, `opacity` and `clip-path` animate. Never layout properties.
- No entrance animation on any non-caption section. Sections simply exist.
- Every looping video has a pause control; a paused state persists for that element.
- `matchMedia("(prefers-reduced-motion: reduce)")` is read at start and listened to; switching it mid-session applies immediately.
- When the tab is hidden (`visibilitychange`), pause all videos and timers.

---

## 9. Graphics (custom SVG, inline, `currentColor` where possible)

### 9.1 Logo "Caption F" as SVG (`img/logo.svg`, also inline in nav)
Geometry traced from the 256px PNG, viewBox `0 0 256 256`:
- Tile: `rect 0 0 256 256 rx 57` (macOS-like corner), fill vertical linear gradient `#2F303B` (top) to `#0B0B10` (bottom). (This is the icon's own gradient; it is the only gradient besides the mobile band fade.)
- Three blocks, each a rect with `rx 10`, all `transform="skewX(-9)"` (about 9 degrees slant):
  - Stem: `x 84 y 38 w 48 h 179`, fill linear gradient `#FFEF48` (top) to `#FFDF07` (bottom).
  - Top bar: `x 136 y 38 w 80 h 46`, same yellow gradient.
  - Middle block: `x 134 y 95 w 58 h 46`, fill `#64FF47`.
- Gaps between blocks are about 8px. Overlay the SVG on the PNG at 400% and adjust by eye; the PNG is the reference.
- Wordmark next to it: `Friskshorts`, Archivo 800 wdth 112, `--text`, tile 28px desktop / 24px mobile, gap 10px.

### 9.2 Pipeline ruler (in the sticky band, under the frame)
- Width = frame width + 120px on desktop (centred on frame), frame width on mobile. Height 40px.
- A 2px track `--surface`; six equal segments with a 1px tick `--line` at each boundary, plus 3 minor ticks (1px, 6px tall, `--line`) inside each segment, like an edit timeline.
- Labels above ticks (desktop): `Topic`, `Script`, `Voice`, `Scene`, `Captions`, `MP4`, Atkinson 13px, `--muted`; active label `--text`. Mobile: dots instead of labels, only the active label shown to the right.
- Playhead: 2px x 14px bar `--cap-now`, rounded 1px, with the lit part of the track `--text` up to it.
- Markup: an `<ol>` with `aria-hidden="true"` (the steps list is the accessible version).

### 9.3 "On your computer" diagram (`#private`)
Line drawing, 1.5px strokes, `--muted`, no fills except where noted, viewBox `0 0 560 360`:
- Left: a laptop outline (rounded rect screen 240 x 150, rx 12, plus base 280 x 10). Inside the screen, the Caption F tile at 36px, and four plain-text labels stacked (Atkinson 14px, `--text`): `Voice`, `Captions`, `Video`, `API keys (Keychain)`.
- Right: a small rounded rect 150 x 64 (rx 12) labelled `The AI you picked` (`--text`), with `Claude, OpenAI, Gemini, DeepSeek or OpenRouter` under it in 12px `--faint`.
- One arrow from laptop to that box: 1.5px line, arrowhead, labelled above `Script request only` (13px, `--muted`). On first view it draws once (stroke-dashoffset, 600ms) and turns `--cap-now` for the duration of the draw, then returns to `--muted`. (Reduced motion: drawn, muted.)
- Nothing else. No cloud icon, no lock icon, no shield.
- Text in the SVG is real `<text>` with the page fonts; the diagram has a `<title>` and the list next to it says the same thing in words.

### 9.4 Waveform (Run step 3)
- Built at runtime from `media/data/voice-peaks.json` (array of 96 numbers 0..1 from the real voice clip): bars 3px wide, 2px gap, rounded 1.5px, centred vertically, min height 2px.

### 9.5 Small glyphs
- Apple and Windows marks for download buttons (monochrome, 16px, `currentColor`), video-file and text-file glyphs for step 6 rows (16px, 1.5px stroke). That's the entire icon set. No icons next to features.

### 9.6 Crop marks
- Four inline SVG L shapes (14px arms, 1.5px, `--muted`) absolutely positioned 10px outside each frame corner.

---

## 10. Media plan (from the asset agent, into `site/media/`)

One topic ties the stage together: **"Why an octopus has three hearts"** (the octopus Short the asset agent already rendered; the app screenshot M10 must be re-captured with this exact topic). Everything in the hero, the Run and the app window shows that same Short.

Already delivered in `media/shorts/` (2026-10-17): five real Shorts (`octopus`, `aurora`, `lightning`, `saturn`, `sharks`), each as `*-loop-720.webm`, `*-loop-720.mp4`, `*-loop-540.mp4`, `*-full-720.mp4`, `*-poster.avif|jpg`, and `*-loop-captions.json` (caption groups with per-word start/end, exactly the M5 format). Use these names as-is; the table below maps to them.

Encoding defaults: no audio track in loop files; `-movflags +faststart`; seamless loops; each clip as two sources, efficient first:
- `*.webm` (VP9 or AV1; WebM plays in Chrome, Firefox, Safari macOS 16+ and iOS 17.4+), then
- `*.mp4` H.264 High (`codecs="avc1.640028"`) as the universal fallback.
- An AV1-in-MP4 source (`codecs="av01.0.05M.08"`) is optional; add it only if it is at least 30% smaller than the WebM.
- Use the 540 files on screens narrower than 640px (`<source media="(max-width: 639px)">` is not reliable for video; pick the file in JS from `matchMedia` before setting `src`, and default the HTML to 540).
- Poster: first frame, `*.avif` + `*.jpg`, same pixel size. Current posters are 16 to 55 KB AVIF; the jpgs (47 to 137 KB) are fallback only.

| ID | File(s) | Content | Size / length | Budget |
|---|---|---|---|---|
| M1 | `media/shorts/octopus-loop-720.{webm,mp4}`, `octopus-loop-540.mp4`, `octopus-poster.{avif,jpg}`, `octopus-loop-captions.json` (delivered) | Real finished Short excerpt, 8.8 s loop | 720 x 1280 / 540 x 960 | delivered: webm 771 KB, mp4 923 KB, 540 mp4 525 KB, poster 55 KB AVIF. Ask for a re-encode if the 720 webm can reach <= 600 KB without visible loss |
| M2 | `media/run/bg-minecraft.*`, `bg-asmr.*`, `bg-own.*` | **Clean** background loops: no captions, no overlays (the page draws its own captions on top). `bg-own` = footage the project owns or CC0, clearly "someone's own video" (e.g. a street or kitchen) | 720 x 1280, 6 s loops | <= 350 KB AV1 / 700 KB H.264 each |
| M3 | `media/run/picture.webp` + `picture.txt` | The actual web picture the app used for one octopus scene, plus its source URL and licence | 640 px wide | <= 60 KB. Must be public domain or CC0/CC-BY with credit in the txt |
| M4 | `media/audio/voice.m4a` | First 8 to 10 s of the octopus voiceover (AAC-LC 96 kbps, mono) | 8 to 10 s | <= 120 KB |
| M5 | `media/shorts/octopus-loop-captions.json` (delivered) | Caption groups with per-word `start`/`end` in seconds from loop start, plus `caption_color`/`highlight_color`. M4 audio must cover the same time range as this file | - | small |
| M6 | `media/data/voice-peaks.json` | 96 RMS peaks of M4, normalised 0..1 | - | small |
| M7 | `media/data/script.txt` | The real script the app produced for the octopus topic (first 5 lines minimum), and the voice name used | - | - |
| M8 | `media/data/output.json` | Real output file names (`.mp4`, `.txt`), real duration, and the generated title/description/tags text | - | - |
| M9 | `media/shorts/{aurora,lightning,saturn,sharks}-loop-*` (delivered) | Reel of 4 finished Shorts. Still needed: `media/shorts/reel.json` with, per clip, the topic exactly as typed and what was picked (background, visuals, voice, caption colours). Ideally at least one clip has a non-Minecraft background and one uses non-default caption colours; if none do, request one replacement render | 540 x 960 in the reel | delivered 540 mp4s are 440 to 610 KB; target <= 450 KB each |
| M10 | `media/ui/app-style-dark@2x.png` (+ `.avif`, `.webp`) | Style & make screen, dark, with the octopus Short in the preview, 3200 x 1920, real macOS window (title bar + shadow), plus `app-style-dark.json` with the preview slot rect in % | 3200 x 1920 | AVIF <= 220 KB |
| M11 | `media/ui/install-mac-*.png`, `install-win-*.png` | Real captures: dmg window; "Open" Gatekeeper dialog; Privacy & Security "Open Anyway"; SmartScreen "More info" and "Run anyway" | 2x | <= 80 KB each AVIF/WebP |
| M12 | `media/ui/app-windows.png` | Same Style & make screen on Windows 11 (for the install page Windows tab) | 2x | <= 200 KB |
| M13 | `media/og/still.png` | One 1080 x 1920 frame of M1 with a caption on screen, for the OG image | - | - |
| M14 (owner) | `media/story/notebook.png` | Real screenshot of the v1 Jupyter notebook | - | Optional |

**Scrub every capture**: no macOS username, home-folder paths, window titles with paths, email, API keys, or recent-files lists. The publisher name "backpropghost" is the only identity that may appear.

Loading rules:
- M1 starts loading after `load` (via `requestIdleCallback`, `setTimeout(…, 200)` fallback in Safari). Its poster is in the HTML.
- M2 to M6 load when the Run is within one screen of view (`rootMargin: "100% 0px"`).
- M9 and the M10 overlay video: `preload="none"`, load and play when >= 50% visible, pause when < 10%.
- All `<video>`: `muted playsinline loop disablepictureinpicture disableremoteplayback`, width/height attributes set, `aspect-ratio` in CSS. Catch every `play()` rejection (iOS Low Power Mode) and show our play button over the poster.
- Never more than 2 videos playing at once on touch devices.

---

## 11. Download block logic

Static HTML first: every download link is a real `<a href>` to the versioned asset, so it works without JS.
```
MAC = https://github.com/backpropghost/Friskshorts/releases/download/v2.1.1/Friskshorts-2.1.1-macos-arm64.dmg  (486 MB)
WIN = https://github.com/backpropghost/Friskshorts/releases/download/v2.1.1/Friskshorts-2.1.1-windows-x64-setup.exe  (480 MB)
ALL = https://github.com/backpropghost/Friskshorts/releases/latest
```
Keep these in one place: a `<script type="application/json" id="release">` block in each page with `version`, `mac`, `win`, sizes. A release = edit that block and the two hrefs (or run `tools/set-release.sh 2.2.0`).

Detection (in this order; never block the download on it):
```js
const ua = navigator.userAgent;
const uad = navigator.userAgentData;                       // Chromium only
const isMobile = uad?.mobile || /iPhone|iPad|Android/i.test(ua) || (navigator.maxTouchPoints > 1 && /Macintosh/.test(ua));
let os = uad?.platform || (/Windows/.test(ua) ? "Windows" : /Mac/.test(ua) ? "macOS" : /CrOS|Linux/.test(ua) ? "Linux" : "");
let arch = "";
if (uad?.getHighEntropyValues) arch = (await uad.getHighEntropyValues(["architecture"])).architecture; // "arm" | "x86"
```
(iPadOS reports as Macintosh with touch points; treat as mobile.)

| Case | Primary button | Line under it | Secondary |
|---|---|---|---|
| macOS, arch `arm` or unknown | `Download for Mac` -> MAC | `Free. For Macs with Apple Silicon. 486 MB.` | `Also for Windows 10 and 11` |
| macOS, arch `x86` (Chromium on an Intel Mac) | `Download for Mac` -> MAC (kept, but secondary styling) | `This Mac looks like it has an Intel chip. Friskshorts needs Apple Silicon (M1 or newer) for now.` | `Download for Windows` |
| Windows | `Download for Windows` -> WIN | `Free. For Windows 10 and 11, 64-bit. 480 MB.` | `Also for Mac` |
| Linux / ChromeOS | none (no primary) | `Friskshorts runs on macOS and Windows. There's no Linux version yet.` | both links as text |
| iPhone, iPad, Android | `Send yourself the link` (uses `navigator.share({url})`; if unavailable, copies the URL and the label changes to `Link copied`) | `Friskshorts is a desktop app for Mac and Windows.` | both direct links as text |

Safari on macOS cannot reveal Intel vs Apple Silicon reliably; do not try (no WebGL sniffing). The Apple Silicon requirement is always printed next to the Mac button.
After a click on a download link: the button label changes to `Downloading…` for 4 s and a line appears: `Next: open it and follow the two clicks in Install help.` (link). No modal.

---

## 12. Favicon, app icons, OG image

- `img/favicon.svg` (the logo SVG), `favicon.ico` (16/32/48, reuse `friskshorts_logo.ico` from the app repo), `apple-touch-icon.png` 180 x 180 (full-bleed tile, no transparent corners; iOS rounds it), `icon-192.png`, `icon-512.png`, `icon-512-maskable.png` (F at 60% inside the safe zone). `site.webmanifest` with `name: "Friskshorts"`, `background_color` and `theme_color` `#17181F`.
- `<meta name="theme-color" content="#17181F">` (still used by Chrome/Android).
- **OG image** `img/og.png`, 1200 x 630, <= 180 KB:
  - Background `#17181F`.
  - Right: M13 still cropped to 9:16 at 300 x 533, top 48px, right 96px, radius 20px, 1px `#2E303A` edge, crop marks around it (as on the site).
  - Left, from x 80: caption `TYPE A TOPIC.` / `GET A SHORT.` in Archivo 900, 92px, `#FFFF00` with black outline; all yellow (no green word in a still).
  - Bottom-left: logo tile 56px + `Friskshorts` Archivo 800 wdth 112, 34px, `#EEEEF2`.
  - Built from an HTML file in `tools/og/og.html` rendered with a headless browser screenshot; commit the PNG.
- `og:title` `Friskshorts`, `og:description` = meta description, `og:image` absolute URL `https://backpropghost.github.io/Friskshorts/img/og.png`, `twitter:card` `summary_large_image`. Canonical `https://backpropghost.github.io/Friskshorts/`.

---

## 13. Accessibility

- Landmarks: `header`, `nav`, `main`, `footer`; one `h1` (hero). Section headings are real `h2`; caption headings are real text with `<span class="w">` per word.
- Skip link `Skip to download` (first focusable, visible on focus).
- The frame and ruler are `aria-hidden="true"`; each step's text fully describes what the frame shows. Interactive controls live in the step text:
  - `Hear the voice`: `<button aria-pressed>`; audio has no autoplay.
  - Background picker and caption swatches: native radio groups (`fieldset` + `legend` visually styled), arrow-key navigation for free. Each swatch has a name (`Yellow`, `White`, `Pink`, `Cyan` / `Green`, `Red`, `Yellow`, `Cyan`).
- Videos: decorative ones `aria-hidden` with the meaning carried by adjacent text; reel clips have `aria-label` = the topic. Each has a pause/play `<button>` with an accessible name.
- Focus ring: `outline: 2px solid var(--cap-now); outline-offset: 3px;` on dark; on yellow use `outline-color: var(--ink)`.
- Tap targets >= 44 x 44 px.
- Reduced motion fully supported (section 8). No flashing (cuts are between dark frames; no strobe).
- Language `en`. Text resizes to 200% without loss (no fixed heights on text containers; step blocks use `min-height`).
- Without JS: all text, all links and the hero video (native autoplay attributes) work; the frame stays on the finished Short.

---

## 14. Performance budget

Measured on Lighthouse mobile (Moto G Power, slow 4G) and a real iPhone on 4G.

| Item | Budget |
|---|---|
| HTML (index) | <= 30 KB gzip |
| CSS (one file) | <= 22 KB gzip |
| JS (one module, `defer`) | <= 15 KB gzip |
| Fonts | <= 80 KB total (Archivo preloaded) |
| Hero poster | <= 45 KB AVIF |
| **First load before lazy media** | **<= 250 KB** |
| Hero video (after `load`) | <= 800 KB WebM / 950 KB MP4 at 720 wide; 540 file (<= 550 KB) on phones |
| Whole page fully scrolled | <= 4.5 MB |
| LCP | < 2.0 s (the hero H1 is the LCP element; it paints visible on first frame) |
| CLS | < 0.02 |
| INP | < 100 ms |
| Third-party requests | 0 |

How: no framework, no library, no runtime CDN, inline critical CSS for the hero (<= 8 KB) with the rest loaded normally, all media sized by `width`/`height`/`aspect-ratio`, `content-visibility: auto` with `contain-intrinsic-size` on sections below the Run, `fetchpriority="high"` on the hero poster, `decoding="async"` on images, `loading="lazy"` on everything below the fold.

---

## 15. Tech stack, files, build, deploy

**Decision: vanilla HTML + one CSS file + one ES module. No framework, no animation library, no runtime CDN.**
Platform features used: `position: sticky`, CSS grid, IntersectionObserver, Web Animations API, CSS transitions, `@property` for `--p`, CSS scroll-driven animations (enhancement only; Firefox stable lacks them), cross-document View Transitions (enhancement), `navigator.share`, `paint-order`.
Escape hatch (only if a real need appears, with a comment explaining it): self-hosted `gsap@3.15.0` core (`vendor/gsap/3.15.0/gsap.min.js`, 28 KB gzip, free under the GSAP Standard License). Not Lenis (no scroll smoothing on this site), not Rive/Lottie.

Cross-document transition between home and install page:
```css
@view-transition { navigation: auto; }
.nav-logo { view-transition-name: logo; }
@media (prefers-reduced-motion: reduce) { @view-transition { navigation: none; } }
```

Files:
```
site/
  index.html
  install/index.html
  404.html
  css/site.css            @layer reset, tokens, base, layout, components, stage, motion, utilities
  js/site.js              ~300 lines: release + platform, captions (burn), stage controller (steps, layers, rewind,
                           playhead fallback), media manager (lazy, play/pause, low-power), step controls, reduced motion
  fonts/archivo.woff2  atkinson-next.woff2  OFL-Archivo.txt  OFL-AtkinsonHyperlegibleNext.txt
  img/logo.svg  favicon.svg  favicon.ico  apple-touch-icon.png  icon-192.png  icon-512.png  icon-512-maskable.png  og.png
  media/                  (asset agent, section 10)
  site.webmanifest  robots.txt  sitemap.xml
  DESIGN.md               (not deployed)
  research/               (not deployed)
  tools/                  (not deployed) build.sh, subset-fonts.sh, set-release.sh, og/og.html
```
All URLs relative (the site lives under `/Friskshorts/`). No leading `/` anywhere in `href`, `src` or CSS `url()`.

Build (`tools/build.sh`): copy `site/` to `dist/` excluding `DESIGN.md`, `research/`, `tools/`; optionally minify CSS/JS with pinned `npx lightningcss-cli@1` / `npx esbuild@0` invocations (versions pinned in the script); append `?v=<release>` to CSS/JS URLs (GitHub Pages caches for about 10 minutes and allows no custom headers). Deploy `dist/` with the official Pages actions (`actions/upload-pages-artifact`, `actions/deploy-pages`) on push to `main`. Validate links with a local `npx linkinator dist` before deploy.

---

## 16. Anti-slop rules for this site

The general checklist is in `research/RESEARCH.md` section D. These are the Burn-In specific rules; breaking one is a bug.

1. **Green means "now".** `#64FF47` appears only on: the word being spoken, the ruler playhead/active step, focus rings, the privacy arrow while it draws. Never decorative. Never resting on a heading.
2. **Caption yellow only on captions.** `#FFFF00` + black outline + uppercase only on text that is literally a caption. UI yellow `#FFE600` for buttons, step dots and the download field. Nothing else is yellow.
3. **Pure black only in the frame.** The page is `#17181F`, the app's own ink.
4. **Everything shown is real.** Real renders, real screenshots, real script, real voice data, real file names. No device mockups, no stock, no AI images, no illustrations of things that could be shown for real.
5. **No numbers we can't back.** Allowed: 40+ voices, 1080 x 1920, 486 MB, 480 MB, 2.1.1, about 1 GB, about 1.4 GB. No users, ratings, downloads, speeds, "x faster".
6. **No borrowed trust.** No testimonials, logos, press quotes, "trusted by". Provider names are plain text, never logos.
7. **Editor vocabulary only.** Motion = cut, burn, drop, stream, rewind, playhead, print. No fade-up sections, no parallax, no hover lifts, no marquee, no custom cursor, no scroll smoothing.
8. **One thing moves at a time** outside the frame.
9. **Left-aligned.** Centering only for the mobile frame and the 404.
10. **No labels for decoration.** No eyebrows, no "Features", no section numbers. Step numbers exist only in the Run because it is a real sequence.
11. **Punctuation discipline.** No middle-dot meta strings, no "→" on buttons or links (real menu paths only), no em dashes, no exclamation marks.
12. **Three radii, one shadow.** 20 (video), 12 (buttons, window, screenshots), 999 (chips). One shadow, on the app window only.
13. **Two faces, fixed roles.** Archivo for captions and headings only; Atkinson Hyperlegible Next for all reading text; no third face, no monospace.
14. **The app's voice is the site's voice.** Test every line: would the app's own UI say it like this? ("Your video will be about 29 seconds long." is the benchmark.) No hype words from the RESEARCH.md list.
15. **Seven sections, no more.** A new idea replaces an old one or goes to the install page.
16. **Remove one accessory** before launch: review the finished page and cut the least necessary visual element.

---

## 17. Build checklist (definition of done)

- [ ] All copy from section 3 verbatim; **[owner]** items approved.
- [ ] Works at 320, 390, 768, 1024, 1440, 1920 px; no horizontal scroll at any width.
- [ ] Sticky stage verified on iOS Safari 26 and 18, macOS Safari, Chrome, Firefox, Edge (Windows).
- [ ] Reduced motion verified (macOS: Accessibility > Display > Reduce motion).
- [ ] iOS Low Power Mode: posters + play buttons, no broken frames.
- [ ] JS disabled: all content and download links work.
- [ ] Lighthouse mobile: Performance >= 95, Accessibility 100, Best Practices 100, SEO 100; budgets in section 14 met.
- [ ] Every URL relative; `linkinator` clean; `og.png` renders in a link preview.
- [ ] Platform detection matrix (section 11) tested in each case (use UA overrides for Linux/Android).
- [ ] RESEARCH.md section D checklist: zero fails.
- [ ] No username, path, key or personal name in any file, image or video.
