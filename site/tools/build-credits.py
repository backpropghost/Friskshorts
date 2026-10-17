"""Builds credits/index.html. Run from site/: python3 tools/build-credits.py
Source: media/data/credits.json when the media agent has delivered it (a list, or {"items": [...]}, of objects with
what, credit/author, licence, licence_url, source/page). Until then: media/data/octopus-pictures.json + fixed rows.
Rows whose author is unknown and whose licence needs no credit are summarised in one line instead of guessed.
A URL is only ever linked if it is a clean http(s) URL (no spaces, no notes)."""
import json, html, pathlib, re
site = pathlib.Path(__file__).resolve().parent.parent
D = site / "media" / "data"
e = html.escape
URL = re.compile(r"^https?://[^\s<>\"]+$")
def clean_url(u):
    u = (u or "").strip()
    return u if URL.match(u) else ""
def unknown(who):
    w = (who or "").lower()
    return not w or "unknown" in w or "see page" in w or "not resolved" in w
rows, no_credit = [], []
cj = D / "credits.json"
if cj.exists():
    data = json.loads(cj.read_text())
    items = data.get("items", data.get("credits", [])) if isinstance(data, dict) else data
    for it in items:
        who = it.get("credit") or it.get("author") or ""
        rows.append([it.get("what") or it.get("item") or "", who, it.get("licence") or it.get("license") or "",
                     clean_url(it.get("licence_url") or it.get("license_url")), clean_url(it.get("source") or it.get("page") or it.get("url"))])
else:
    for s in json.loads((D / "octopus-pictures.json").read_text())["scenes"]:
        a, b = s["shown_s"]
        rows.append([f"Octopus Short, picture {s['scene']} ({a:.1f} to {b:.1f} s)", s.get("author", ""), s.get("licence", ""),
                     clean_url(s.get("licence_url")), clean_url(s.get("page"))])
    rows.append(["Your own video background (milk on a stove)", "Wikimedia Commons, File:Milchkochen.webm", "CC0",
                 "https://creativecommons.org/publicdomain/zero/1.0/", "https://commons.wikimedia.org/wiki/File:Milchkochen.webm"])
kept = []
for r in rows:
    if unknown(r[1]) and re.search(r"unsplash|pexels", r[2], re.I):
        no_credit.append(r[0])
    else:
        kept.append(r)
kept += [
    ["Typeface Archivo", "Omnibus-Type", "SIL Open Font License 1.1", "../fonts/OFL-Archivo.txt", "https://github.com/google/fonts/tree/main/ofl/archivo"],
    ["Typeface Atkinson Hyperlegible Next", "Braille Institute", "SIL Open Font License 1.1", "../fonts/OFL-AtkinsonHyperlegibleNext.txt", "https://github.com/google/fonts/tree/main/ofl/atkinsonhyperlegiblenext"],
]
lis = []
for what, who, lic, lurl, src in kept:
    lic_html = f'<a href="{e(lurl)}">{e(lic)}</a>' if lurl else e(lic)
    src_html = f' <a href="{e(src)}">Source</a>.' if src else ""
    sep = ", " if who and lic else ""
    lis.append(f'      <li><p class="cr-what">{e(what)}</p><p class="cr-who">{e(who)}{sep}{lic_html}.{src_html}</p></li>')
notes = []
if no_credit:
    notes.append(f"{len(no_credit)} more pictures in the octopus Short come from Unsplash under the Unsplash License, which does not require credit.")
notes.append("Background gameplay footage is bundled with the app.")
page = (site / "tools" / "credits.template.html").read_text()
page = page.replace("<!--ROWS-->", "\n".join(lis)).replace("<!--NOTES-->", "\n".join(f'  <p class="cr-note small">{e(n)}</p>' for n in notes))
(site / "credits" / "index.html").write_text(page)
print(f"credits/index.html: {len(kept)} rows, {len(no_credit)} summarised")
