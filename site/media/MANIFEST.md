# site/media manifest

Everything here was made locally on 2026-10-17 by running the real Friskshorts app (v2.1.x source, `api.generate`) and its real UI (pywebview + WKWebView snapshots, no screen capture). No personal names, usernames or file paths appear in any image or video. Files marked **illustration** are hand-built recreations, not captures.

Totals: about 35 MB on disk = 14.9 MB web set (loops, posters, WebP/AVIF, audio, JSON) + 8.1 MB full-length Shorts with sound + 12.1 MB PNG masters (1080x1920 layer stills, OG still, 2x app PNGs). The page only needs the web set plus whichever PNG/full video it actually uses. `og/og-full-colour.png` is a spare and can be deleted.

## The five Shorts

All 1080x1920 30 fps originals, rendered by the app at speed 1.2x. Loop windows and best frames are seconds on the full Short's timeline.

| id | Topic (as typed) | Title (app output folder) | Length | Background | Visuals | Voice | Music | Captions text / highlight | Loop window | Best frames |
|---|---|---|---|---|---|---|---|---|---|---|
| octopus (hero) | Why an octopus has three hearts | An Octopus Has Three Hearts (`An_Octopus_Has_Three_Hearts/`) | 18.00 s | Minecraft parkour | pictures from the web (6, all licence-documented) | Heart, American English (`kokoro:af_heart`) | Epic Battle | default `#FFFF00` / `#64FF47` | 0.10 to 8.88 (8.78 s) | 0.9 coconut octopus + "THREE HEARTS,"; 1.2 OG still; 3.3 seagrass octopus + "TWO HEARTS"; 12.5 suckers; 15.5 eye |
| lightning | Lightning is hotter than the Sun | Lightning Is Hotter Than The Sun | 21.16 s | ASMR (split layout) | 8 Wikimedia Commons pictures (CC BY / CC BY-SA / public domain), fed to the app | Michael, American English | Upbeat Electro | `#FFFFFF` / `#00E5FF` | 0.10 to 7.84 (7.74 s) | 0.5 purple bolt; 3.0 the Sun (NASA SDO); 6.0 NOAA lightning; 9.0 lighthouse storm; 16.0 supercell |
| aurora | Where the northern lights come from | Where The Northern Lights Come From | 17.20 s | Minecraft parkour | 6 Commons pictures (NASA public domain, CC BY 4.0, CC0), fed to the app | Emma, British English | Chill Lofi | `#FFFFFF` / `#FF7AD9` | 5.70 to 15.70 (10.0 s) | 1.0 purple Sun (NASA SDO); 6.0 aurora from the ISS; 9.5 green and red aurora from space; 12.0 purple aurora; 15.0 Lofoten aurora |
| sharks | Sharks are older than trees | Sharks Are Older Than Trees | 15.37 s | Minecraft parkour | none (background + captions only) | Fenrir, American English | Epic Battle | `#FFFFFF` / `#FF9F1C` | 3.70 to 11.90 (8.2 s) | 3.7 "THAT MAKES"; 7.9 "YEARS AGO."; 10.5 "DINOSAURS." |
| saturn | Saturn could float in water | Saturn Could Float In Water | 15.44 s | ASMR (split layout) | 8 Commons pictures (NASA public domain, CC BY 2.0, CC BY-SA 4.0), fed to the app | Nova, American English | Chill Lofi | `#8BE9FD` / `#FFE600` | 0.10 to 9.49 (9.39 s) | 0.5 Saturn at equinox; 2.5 rubber ducks; 6.5 hexagon pole; 8.0 iceberg; 10.5 backlit rings; 11.5 Earth and Moon |

Per Short in `shorts/`: `*-loop-720.webm` (VP9, no audio), `*-loop-720.mp4` (H.264 High, yuv420p, faststart, no audio), `*-loop-540.mp4` (same, 540x960), `*-poster.avif|jpg` (first loop frame, 720x1280), `*-loop-captions.json` (caption lines + per-word start/end in seconds from loop start, same grouping the app burns in), `*-full-720.mp4` (whole Short with sound, AAC 128k, for "watch with sound"). `shorts/reel.json` (copy at `reel.json`): per clip topic, title, output folder, voice, background, visuals, music, colours, loop window, a ready "picked" sentence and file paths.

## Other sets

- `run/` (design M2, M3): clean background loops with no captions or overlays, 720x1280, 6.0 s, crossfaded so they loop seamlessly: `bg-minecraft` (the app's bundled Minecraft parkour, same footage as the hero), `bg-asmr` (bundled ASMR footage, rainbow kinetic sand, centre-cropped to 9:16), `bg-own` ("someone's own video": a pot of milk heating on a stove, CC0, Wikimedia Commons `File:Milchkochen.webm`). Each as AV1 `.webm` + H.264 `.mp4` + poster AVIF/JPG. `picture.webp` + `picture.txt`: the real web picture from octopus scene 2 with credit (Albert Kok, CC BY-SA 3.0, Wikimedia Commons).
- `audio/voice.m4a` (M4): the octopus voiceover only (no music), sped up exactly like the video and cut to the loop window 0.10 to 8.88 s, so it lines up with `shorts/octopus-loop-captions.json`. AAC-LC 96k mono. `data/voice-peaks.json` (M6): 96 RMS peaks of it, 0..1.
- `audio/voices/` ("hear the voices"): the same sentence "An octopus has three hearts, and its blood is blue." in Heart, Michael, Emma and Fenrir at speed 1.2, AAC 64k mono, about 2.3 to 2.8 s; `voices.json` lists name, id, file, length.
- `data/`: `script.txt` (M7: topic, title, voice, narration one sentence per line, scenes), `output.json` (M8: real output folder `An_Octopus_Has_Three_Hearts/` with `video.mp4`, `details.txt`, `info.json`, real duration and the details.txt text), `scripts/*.json` (exact app script JSON of every Short), `octopus-pictures.json` (hero pictures with URL, author, licence, time on screen), `credits.json` (all 28 pictures in all Shorts + footage + music), `reel-sources.json` (superseded stub).
- `pipeline/`: one hero frame (t = 0.9 s) as three layers from the same render job: background only, + web picture, + captions. 1080x1920 PNG and 540x960 WebP.
- `ui/` (M10): real app captures at 2x, window 1600x960 pt with the real macOS title bar (drawn by AppKit, not screen capture), dark and light, for the octopus topic: `app-topic`, `app-script`, `app-style`, `app-making`, `app-result`. Each as `@2x.png` (3200x1920), `@2x.webp` and 1x `.webp` (1600x960). `app-style-dark@2x.avif` too. `app-style-dark.json` has the live-preview slot: left 69.0%, top 15.026%, width 16.25%, height 48.148% (px 2208, 288, 520x924), radius 32 px at 2x. Same geometry for all app captures.
- `ui/app-windows-{dark,light}@2x.png|webp` (M12, **illustration**): the real Style & make screen (rendered by the app at 1440x868 pt, 2x) inside a hand-drawn generic Windows 11 frame (icon, title, minimise/maximise/close). Not a Windows capture.
- `ui/install-*` (M11, **illustration**, 2x, PNG + WebP <= 40 KB): HTML recreations of the OS steps, with a green ring on the button to click: `install-mac-1-dmg` (drag to Applications), `install-mac-2-not-opened` (macOS 15+ Gatekeeper alert: "Friskshorts" Not Opened, Done / Move to Trash), `install-mac-3-open-anyway` (System Settings, Privacy & Security, Open Anyway), `install-win-1-more-info` and `install-win-2-run-anyway` (SmartScreen).
- `og/`: `still.png` (M13, hero frame t = 1.2 s with caption, 1080x1920), `og.png` (1200x630 per DESIGN section 12: still with crop marks, "TYPE A TOPIC. / GET A SHORT." in Archivo 900 from `site/fonts/archivo.woff2`, logo tile + wordmark; 256-colour PNG, 101 KB).

## Notes

- Licences: every picture visible in any Short is openly licensed and listed with author, licence and source in `data/credits.json` and the human-readable `CREDITS.md` (link it from the footer). Octopus: Commons/Flickr CC BY-SA, Unsplash and Pexels pictures the app found. Lightning, aurora, saturn: re-rendered 2026-10-18 with pictures picked from Wikimedia Commons and fed to the app through its picture cache (no web search, no YouTube clips anywhere). Sharks has no pictures. Music: three CC0 tracks (credited too). Open item: the bundled Minecraft parkour and ASMR background footage has no recorded source or licence in the app's packaging; `run/bg-own` is CC0 (Lulumara, Wikimedia Commons).
- Every picture and clip was checked full-size for watermarks; watermarked hits were replaced by changing the query (as a user would) and re-rendering.
- `app-result-*`: the app's result layout collapsed (title one letter per line) in 2 of 3 runs once the video loaded in WKWebView at this window size; the capture pins `.result-player` width to its intended 9:16 size. Probably a real app bug worth a look (`css/create.css`, `.result` grid with an `auto` column).

## Every file

#### `./`

| File | Size px | Length | Codec | File size |
|---|---|---|---|---|
| `CREDITS.md` |  |  | md | 7 KB |
| `reel.json` |  |  | json | 5 KB |

#### `audio/`

| File | Size px | Length | Codec | File size |
|---|---|---|---|---|
| `audio/voice.m4a` |  | 8.78 s | aac | 111 KB |
| `audio/voices/voice-emma.m4a` |  | 2.27 s | aac | 18 KB |
| `audio/voices/voice-fenrir.m4a` |  | 2.32 s | aac | 19 KB |
| `audio/voices/voice-heart.m4a` |  | 2.39 s | aac | 19 KB |
| `audio/voices/voice-michael.m4a` |  | 2.78 s | aac | 22 KB |
| `audio/voices/voices.json` |  |  | json | 1 KB |

#### `data/`

| File | Size px | Length | Codec | File size |
|---|---|---|---|---|
| `data/credits.json` |  |  | json | 14 KB |
| `data/octopus-pictures.json` |  |  | json | 3 KB |
| `data/output.json` |  |  | json | 1 KB |
| `data/reel-sources.json` |  |  | json | 0 KB |
| `data/script.txt` |  |  | txt | 1 KB |
| `data/scripts/aurora.json` |  |  | json | 1 KB |
| `data/scripts/lightning.json` |  |  | json | 1 KB |
| `data/scripts/octopus.json` |  |  | json | 1 KB |
| `data/scripts/saturn.json` |  |  | json | 1 KB |
| `data/scripts/sharks.json` |  |  | json | 1 KB |
| `data/voice-peaks.json` |  |  | json | 1 KB |

#### `og/`

| File | Size px | Length | Codec | File size |
|---|---|---|---|---|
| `og/og-full-colour.png` | 1200x630 |  | png | 289 KB |
| `og/og.png` | 1200x630 |  | png | 101 KB |
| `og/still.png` | 1080x1920 |  | png | 1,781 KB |

#### `pipeline/`

| File | Size px | Length | Codec | File size |
|---|---|---|---|---|
| `pipeline/octopus-layer-1-background-540.webp` | 540x960 |  | webp | 18 KB |
| `pipeline/octopus-layer-1-background.png` | 1080x1920 |  | png | 748 KB |
| `pipeline/octopus-layer-2-with-picture-540.webp` | 540x960 |  | webp | 44 KB |
| `pipeline/octopus-layer-2-with-picture.png` | 1080x1920 |  | png | 1,694 KB |
| `pipeline/octopus-layer-3-with-captions-540.webp` | 540x960 |  | webp | 47 KB |
| `pipeline/octopus-layer-3-with-captions.png` | 1080x1920 |  | png | 1,681 KB |

#### `run/`

| File | Size px | Length | Codec | File size |
|---|---|---|---|---|
| `run/bg-asmr-poster.avif` | same as .jpg/.png twin |  | avif | 48 KB |
| `run/bg-asmr-poster.jpg` | 720x1280 |  | jpg | 83 KB |
| `run/bg-asmr.mp4` | 720x1280 | 6.00 s | h264 | 584 KB |
| `run/bg-asmr.webm` | 720x1280 | 6.00 s | av1 | 291 KB |
| `run/bg-minecraft-poster.avif` | same as .jpg/.png twin |  | avif | 25 KB |
| `run/bg-minecraft-poster.jpg` | 720x1280 |  | jpg | 55 KB |
| `run/bg-minecraft.mp4` | 720x1280 | 6.00 s | h264 | 632 KB |
| `run/bg-minecraft.webm` | 720x1280 | 6.00 s | av1 | 339 KB |
| `run/bg-own-poster.avif` | same as .jpg/.png twin |  | avif | 14 KB |
| `run/bg-own-poster.jpg` | 720x1280 |  | jpg | 34 KB |
| `run/bg-own.mp4` | 720x1280 | 6.00 s | h264 | 366 KB |
| `run/bg-own.webm` | 720x1280 | 6.00 s | av1 | 70 KB |
| `run/picture.txt` |  |  | txt | 1 KB |
| `run/picture.webp` | 640x487 |  | webp | 55 KB |

#### `shorts/`

| File | Size px | Length | Codec | File size |
|---|---|---|---|---|
| `shorts/aurora-full-720.mp4` | 720x1280 | 17.20 s | h264+aac | 1,655 KB |
| `shorts/aurora-loop-540.mp4` | 540x960 | 10.00 s | h264 | 420 KB |
| `shorts/aurora-loop-720.mp4` | 720x1280 | 10.00 s | h264 | 1,045 KB |
| `shorts/aurora-loop-720.webm` | 720x1280 | 10.00 s | vp9 | 607 KB |
| `shorts/aurora-loop-captions.json` |  |  | json | 4 KB |
| `shorts/aurora-poster.avif` | same as .jpg/.png twin |  | avif | 40 KB |
| `shorts/aurora-poster.jpg` | 720x1280 |  | jpg | 88 KB |
| `shorts/lightning-full-720.mp4` | 720x1280 | 21.17 s | h264+aac | 1,463 KB |
| `shorts/lightning-loop-540.mp4` | 540x960 | 7.77 s | h264 | 235 KB |
| `shorts/lightning-loop-720.mp4` | 720x1280 | 7.77 s | h264 | 452 KB |
| `shorts/lightning-loop-720.webm` | 720x1280 | 7.77 s | vp9 | 488 KB |
| `shorts/lightning-loop-captions.json` |  |  | json | 3 KB |
| `shorts/lightning-poster.avif` | same as .jpg/.png twin |  | avif | 31 KB |
| `shorts/lightning-poster.jpg` | 720x1280 |  | jpg | 64 KB |
| `shorts/octopus-full-720.mp4` | 720x1280 | 18.00 s | h264+aac | 1,724 KB |
| `shorts/octopus-loop-540.mp4` | 540x960 | 8.80 s | h264 | 419 KB |
| `shorts/octopus-loop-720.mp4` | 720x1280 | 8.80 s | h264 | 922 KB |
| `shorts/octopus-loop-720.webm` | 720x1280 | 8.80 s | vp9 | 579 KB |
| `shorts/octopus-loop-captions.json` |  |  | json | 4 KB |
| `shorts/octopus-poster.avif` | same as .jpg/.png twin |  | avif | 59 KB |
| `shorts/octopus-poster.jpg` | 720x1280 |  | jpg | 121 KB |
| `shorts/reel.json` |  |  | json | 5 KB |
| `shorts/saturn-full-720.mp4` | 720x1280 | 15.44 s | h264+aac | 1,137 KB |
| `shorts/saturn-loop-540.mp4` | 540x960 | 9.40 s | h264 | 352 KB |
| `shorts/saturn-loop-720.mp4` | 720x1280 | 9.40 s | h264 | 625 KB |
| `shorts/saturn-loop-720.webm` | 720x1280 | 9.40 s | vp9 | 568 KB |
| `shorts/saturn-loop-captions.json` |  |  | json | 5 KB |
| `shorts/saturn-poster.avif` | same as .jpg/.png twin |  | avif | 22 KB |
| `shorts/saturn-poster.jpg` | 720x1280 |  | jpg | 64 KB |
| `shorts/sharks-full-720.mp4` | 720x1280 | 15.37 s | h264+aac | 1,494 KB |
| `shorts/sharks-loop-540.mp4` | 540x960 | 8.20 s | h264 | 399 KB |
| `shorts/sharks-loop-720.mp4` | 720x1280 | 8.20 s | h264 | 879 KB |
| `shorts/sharks-loop-720.webm` | 720x1280 | 8.20 s | vp9 | 495 KB |
| `shorts/sharks-loop-captions.json` |  |  | json | 4 KB |
| `shorts/sharks-poster.avif` | same as .jpg/.png twin |  | avif | 35 KB |
| `shorts/sharks-poster.jpg` | 720x1280 |  | jpg | 77 KB |

#### `ui/`

| File | Size px | Length | Codec | File size |
|---|---|---|---|---|
| `ui/app-making-dark.webp` | 1600x960 |  | webp | 17 KB |
| `ui/app-making-dark@2x.png` | 3200x1920 |  | png | 52 KB |
| `ui/app-making-dark@2x.webp` | 3200x1920 |  | webp | 42 KB |
| `ui/app-making-light.webp` | 1600x960 |  | webp | 16 KB |
| `ui/app-making-light@2x.png` | 3200x1920 |  | png | 53 KB |
| `ui/app-making-light@2x.webp` | 3200x1920 |  | webp | 42 KB |
| `ui/app-result-dark.webp` | 1600x960 |  | webp | 49 KB |
| `ui/app-result-dark@2x.png` | 3200x1920 |  | png | 1,080 KB |
| `ui/app-result-dark@2x.webp` | 3200x1920 |  | webp | 132 KB |
| `ui/app-result-light.webp` | 1600x960 |  | webp | 46 KB |
| `ui/app-result-light@2x.png` | 3200x1920 |  | png | 1,020 KB |
| `ui/app-result-light@2x.webp` | 3200x1920 |  | webp | 127 KB |
| `ui/app-script-dark.webp` | 1600x960 |  | webp | 43 KB |
| `ui/app-script-dark@2x.png` | 3200x1920 |  | png | 108 KB |
| `ui/app-script-dark@2x.webp` | 3200x1920 |  | webp | 100 KB |
| `ui/app-script-light.webp` | 1600x960 |  | webp | 43 KB |
| `ui/app-script-light@2x.png` | 3200x1920 |  | png | 111 KB |
| `ui/app-script-light@2x.webp` | 3200x1920 |  | webp | 103 KB |
| `ui/app-style-dark.json` |  |  | json | 1 KB |
| `ui/app-style-dark.webp` | 1600x960 |  | webp | 52 KB |
| `ui/app-style-dark@2x.avif` | same as .jpg/.png twin |  | avif | 70 KB |
| `ui/app-style-dark@2x.png` | 3200x1920 |  | png | 662 KB |
| `ui/app-style-dark@2x.webp` | 3200x1920 |  | webp | 121 KB |
| `ui/app-style-light.webp` | 1600x960 |  | webp | 52 KB |
| `ui/app-style-light@2x.png` | 3200x1920 |  | png | 663 KB |
| `ui/app-style-light@2x.webp` | 3200x1920 |  | webp | 122 KB |
| `ui/app-topic-dark.webp` | 1600x960 |  | webp | 32 KB |
| `ui/app-topic-dark@2x.png` | 3200x1920 |  | png | 85 KB |
| `ui/app-topic-dark@2x.webp` | 3200x1920 |  | webp | 78 KB |
| `ui/app-topic-light.webp` | 1600x960 |  | webp | 32 KB |
| `ui/app-topic-light@2x.png` | 3200x1920 |  | png | 86 KB |
| `ui/app-topic-light@2x.webp` | 3200x1920 |  | webp | 78 KB |
| `ui/app-windows-dark@2x.png` | 2880x1800 |  | png | 741 KB |
| `ui/app-windows-dark@2x.webp` | 2880x1800 |  | webp | 121 KB |
| `ui/app-windows-light@2x.png` | 2880x1800 |  | png | 740 KB |
| `ui/app-windows-light@2x.webp` | 2880x1800 |  | webp | 122 KB |
| `ui/install-mac-1-dmg@2x.png` | 1440x920 |  | png | 27 KB |
| `ui/install-mac-1-dmg@2x.webp` | 1440x920 |  | webp | 12 KB |
| `ui/install-mac-2-not-opened@2x.png` | 920x880 |  | png | 25 KB |
| `ui/install-mac-2-not-opened@2x.webp` | 920x880 |  | webp | 16 KB |
| `ui/install-mac-3-open-anyway@2x.png` | 1720x1120 |  | png | 41 KB |
| `ui/install-mac-3-open-anyway@2x.webp` | 1720x1120 |  | webp | 32 KB |
| `ui/install-win-1-more-info@2x.png` | 1360x1000 |  | png | 29 KB |
| `ui/install-win-1-more-info@2x.webp` | 1360x1000 |  | webp | 30 KB |
| `ui/install-win-2-run-anyway@2x.png` | 1360x1000 |  | png | 36 KB |
| `ui/install-win-2-run-anyway@2x.webp` | 1360x1000 |  | webp | 39 KB |
