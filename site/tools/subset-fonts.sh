#!/usr/bin/env bash
# Rebuilds fonts/*.woff2 from the Google Fonts sources (SIL OFL 1.1). Run from site/.
set -euo pipefail
tmp="$(mktemp -d)"
base=https://raw.githubusercontent.com/google/fonts/main/ofl
curl -sSfL -o "$tmp/archivo.ttf" "$base/archivo/Archivo%5Bwdth,wght%5D.ttf"
curl -sSfL -o "$tmp/atk.ttf" "$base/atkinsonhyperlegiblenext/AtkinsonHyperlegibleNext%5Bwght%5D.ttf"
U='U+0020-007E,U+00A0-00FF,U+2009,U+2013,U+2018-201D,U+2026,U+2192,U+00D7'
uvx --from 'fonttools[woff]' fonttools varLib.instancer "$tmp/archivo.ttf" wght=700:900 wdth=100:112 -o "$tmp/archivo-cut.ttf"
uvx --from 'fonttools[woff]' pyftsubset "$tmp/archivo-cut.ttf" --unicodes="$U" --layout-features='kern,liga,tnum,case' --flavor=woff2 --output-file=fonts/archivo.woff2
uvx --from 'fonttools[woff]' fonttools varLib.instancer "$tmp/atk.ttf" wght=400:700 -o "$tmp/atk-cut.ttf"
uvx --from 'fonttools[woff]' pyftsubset "$tmp/atk-cut.ttf" --unicodes="$U" --layout-features='kern,liga' --flavor=woff2 --output-file=fonts/atkinson-next.woff2
ls -la fonts/*.woff2
# Fallback metrics in css/site.css (size-adjust, ascent/descent-override) were computed from the
# instanced files against Arial Black (Archivo 900) and Verdana (Atkinson 400). Recompute if the cut changes.
# Numerals for body text (Atkinson Next only has a slashed zero): Archivo 400-700, wdth 100, digits only.
uvx --from 'fonttools[woff]' fonttools varLib.instancer "$tmp/archivo.ttf" wght=400:700 wdth=100 -o "$tmp/archivo-dig.ttf"
uvx --from 'fonttools[woff]' pyftsubset "$tmp/archivo-dig.ttf" --unicodes='U+0030-0039' --layout-features='kern,tnum' --flavor=woff2 --output-file=fonts/archivo-digits.woff2
