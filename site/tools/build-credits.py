"""Builds credits/index.html from the media data files. Run from site/: python3 tools/build-credits.py
Sources, in order: media/data/credits.json (if the media agent has delivered it: a list of objects with
what, credit, licence, licence_url, source), else media/data/octopus-pictures.json plus the fixed entries below."""
import json, html, pathlib
site = pathlib.Path(__file__).resolve().parent.parent
D = site / "media" / "data"
e = html.escape
rows = []
cj = D / "credits.json"
if cj.exists():
    data = json.loads(cj.read_text())
    items = data.get("items", data) if isinstance(data, dict) else data
    for it in items:
        rows.append((it.get("what", ""), it.get("credit", ""), it.get("licence", ""), it.get("licence_url", ""), it.get("source", "")))
else:
    pics = json.loads((D / "octopus-pictures.json").read_text())["scenes"]
    for s in pics:
        a, b = s["shown_s"]
        who = s.get("author") or ""
        if not who or "unknown" in who.lower() or "see page" in who.lower():
            site_name = "Unsplash" if "unsplash" in s.get("page", "") else "Pexels" if "pexels" in s.get("page", "") else "the source site"
            who = f"A photographer on {site_name}"
        rows.append((f"Octopus Short, picture {s['scene']} ({a:.1f} to {b:.1f} s)", who,
                     s.get("licence", ""), s.get("licence_url", ""), s.get("page", "")))
    rows.append(("Your own video background (milk on a stove)", "Wikimedia Commons, File:Milchkochen.webm", "CC0", "https://creativecommons.org/publicdomain/zero/1.0/", "https://commons.wikimedia.org/wiki/File:Milchkochen.webm"))
rows += [
    ("Typeface Archivo", "Omnibus-Type", "SIL Open Font License 1.1", "../fonts/OFL-Archivo.txt", "https://github.com/google/fonts/tree/main/ofl/archivo"),
    ("Typeface Atkinson Hyperlegible Next", "Braille Institute", "SIL Open Font License 1.1", "../fonts/OFL-AtkinsonHyperlegibleNext.txt", "https://github.com/google/fonts/tree/main/ofl/atkinsonhyperlegiblenext"),
]
lis = []
for what, who, lic, lurl, src in rows:
    lic_html = f'<a href="{e(lurl)}">{e(lic)}</a>' if lurl else e(lic)
    src_html = f' <a href="{e(src)}">Source</a>.' if src.startswith("http") else ""
    lis.append(f'      <li><p class="cr-what">{e(what)}</p><p class="cr-who">{e(who)}{", " if lic else ""}{lic_html}.{src_html}</p></li>')
page = (site / "tools" / "credits.template.html").read_text().replace("<!--ROWS-->", "\n".join(lis))
(site / "credits" / "index.html").write_text(page)
print(f"credits/index.html: {len(rows)} entries")
