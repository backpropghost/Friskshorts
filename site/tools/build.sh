#!/usr/bin/env bash
# Builds the deployable site in dist/. Used by .github/workflows/pages.yml.
# - Drops DESIGN.md, research/, tools/, review files and every *.md.
# - From media/ it copies only files the pages actually reference (HTML, CSS, JS, JSON fetches),
#   so PNG masters, full-sound Shorts and unused captures never ship.
# Usage (from the repo root): site/tools/build.sh [out-dir]
set -euo pipefail
here="$(cd "$(dirname "$0")/.." && pwd)"
out="${1:-$here/../dist}"
rm -rf "$out"
mkdir -p "$out"
rsync -a \
  --exclude 'DESIGN.md' --exclude 'research/' --exclude 'tools/' --exclude '.review/' \
  --exclude '*.md' --exclude '.DS_Store' --exclude '.gitignore' --exclude 'media/' \
  "$here/" "$out/"
python3 - "$here" "$out" <<'PY'
import pathlib, re, shutil, sys
site, out = pathlib.Path(sys.argv[1]), pathlib.Path(sys.argv[2])
text = ""
for f in list(site.glob("*.html")) + list(site.glob("*/index.html")) + [site / "css/site.css", site / "js/site.js"]:
    text += f.read_text()
refs = set(re.findall(r"media/[A-Za-z0-9_@./-]+\.[a-z0-9]+", text))
total = 0
for r in sorted(refs):
    src = site / r
    if not src.is_file():
        sys.exit(f"Missing referenced media file: {r}")
    dst = out / r
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dst)
    total += src.stat().st_size
print(f"media: {len(refs)} referenced files, {total / 1e6:.1f} MB")
PY
touch "$out/.nojekyll"
# Cache-busting: GitHub Pages caches for about 10 minutes and allows no custom headers.
version="$(sed -n 's/.*"version":"\([^"]*\)".*/\1/p' "$here/index.html" | head -1)"
find "$out" -name '*.html' -print0 | xargs -0 sed -i.bak -E "s/(site\.(css|js))\?v=[^\"']*/\1?v=${version}/g"
find "$out" -name '*.bak' -delete
echo "Built $out (release $version), $(du -sh "$out" | cut -f1)"
