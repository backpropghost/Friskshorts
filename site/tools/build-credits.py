"""Builds credits/index.html from media/data/credits.json (written by the media agent).
Run from site/: python3 tools/build-credits.py
- Pictures are grouped per Short, in the order the Shorts appear on the page.
- Rows whose author was not recorded and whose licence needs no credit (Unsplash, Pexels) are summarised in one line.
- Footage without a recorded licence gets the neutral line "Background gameplay footage is bundled with the app."
- A URL is only linked if it is a clean http(s) URL."""
import json, html, pathlib, re
site = pathlib.Path(__file__).resolve().parent.parent
data = json.loads((site / "media" / "data" / "credits.json").read_text())
e = html.escape
URL = re.compile(r"^https?://[^\s<>\"]+$")
LIC = {"CC BY 2.0": "https://creativecommons.org/licenses/by/2.0/", "CC BY 4.0": "https://creativecommons.org/licenses/by/4.0/",
       "CC BY-SA 2.0": "https://creativecommons.org/licenses/by-sa/2.0/", "CC BY-SA 3.0": "https://creativecommons.org/licenses/by-sa/3.0/",
       "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/", "CC0": "https://creativecommons.org/publicdomain/zero/1.0/"}
NAMES = {"octopus": "Why an octopus has three hearts", "lightning": "Lightning is hotter than the Sun",
         "aurora": "Where the northern lights come from", "saturn": "Saturn could float in water", "sharks": "Sharks are older than trees"}
ORDER = ["octopus", "lightning", "aurora", "saturn", "sharks"]
def url(u): u = (u or "").strip(); return u if URL.match(u) else ""
def unknown(s): s = (s or "").lower(); return not s or "not recorded" in s or "unknown" in s or "see page" in s
def lic_short(l): return re.sub(r"\s*\(.*\)$", "", (l or "").strip())
def row(what, who, lic, lurl, src, extra=""):
    lic = lic_short(lic); lurl = url(lurl) or LIC.get(lic, "")
    parts = [e(who)] if who else []
    if lic: parts.append(f'<a href="{e(lurl)}">{e(lic)}</a>' if lurl else e(lic))
    tail = f' <a href="{e(src)}">Source</a>.' if url(src) else ""
    return f'      <li><p class="cr-what">{e(what)}{extra}</p><p class="cr-who">{", ".join(parts)}.{tail}</p></li>'
out = []
skipped = {}
for short in ORDER:
    pics = [p for p in data.get("pictures", []) if p.get("short") == short]
    lis = []
    for p in pics:
        a, b = p.get("shown_s", [0, 0])
        if unknown(p.get("author")) and re.search(r"unsplash|pexels", p.get("licence", ""), re.I):
            skipped[short] = skipped.get(short, 0) + 1; continue
        lis.append(row(p.get("title", ""), p.get("author", ""), p.get("licence", ""), p.get("licence_url"), p.get("source_url"),
                       f' <span class="cr-time">{a:.1f} to {b:.1f} s</span>'))
    note = ""
    if skipped.get(short):
        n = skipped[short]
        note = f'\n    <p class="cr-note small">{"One more picture comes" if n == 1 else f"{n} more pictures come"} from Unsplash under the Unsplash License, which does not require credit.</p>'
    if not pics:
        note = '\n    <p class="cr-note small">No pictures: background footage and captions only.</p>'
    out.append(f'  <section class="cr-sec">\n    <h2 class="cr-h">{e(NAMES[short])}</h2>\n    <ul class="cr-list">\n' + "\n".join(lis) + f'\n    </ul>{note}\n  </section>')
foot = []
bundled = False
for f in data.get("background_footage", []):
    if unknown(f.get("author")) or "unknown" in (f.get("licence", "").lower()):
        bundled = True; continue
    foot.append(row(f.get("what", "").split(",")[0], f.get("author", ""), f.get("licence", ""), f.get("licence_url"), f.get("source_url")))
for m in data.get("music", []):
    foot.append(row(f'Music: {re.sub(r" \(.*\)$", "", m.get("track", ""))}', m.get("author", ""), m.get("licence", ""), m.get("licence_url"), m.get("source_url"),
                    ' <span class="cr-time">in the full Shorts with sound</span>'))
foot += [row("Typeface Archivo", "Omnibus-Type", "SIL Open Font License 1.1", "../fonts/OFL-Archivo.txt", "https://github.com/google/fonts/tree/main/ofl/archivo"),
         row("Typeface Atkinson Hyperlegible Next", "Braille Institute", "SIL Open Font License 1.1", "../fonts/OFL-AtkinsonHyperlegibleNext.txt", "https://github.com/google/fonts/tree/main/ofl/atkinsonhyperlegiblenext")]
foot_note = '\n    <p class="cr-note small">Background gameplay footage is bundled with the app.</p>' if bundled else ""
out.append('  <section class="cr-sec">\n    <h2 class="cr-h">Footage, music and type</h2>\n    <ul class="cr-list">\n' + "\n".join(foot) + f"\n    </ul>{foot_note}\n  </section>")
page = (site / "tools" / "credits.template.html").read_text()
page = page.replace("  <ul class=\"cr-list\">\n<!--ROWS-->\n  </ul>\n", "\n".join(out) + "\n").replace("<!--NOTES-->\n", "")
(site / "credits" / "index.html").write_text(page)
print("credits/index.html written:", sum(o.count("<li>") for o in out), "rows")
