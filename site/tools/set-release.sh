#!/usr/bin/env bash
# Points every download link at a new release. Usage (from site/): tools/set-release.sh 2.2.0 [mac-size] [win-size]
# Sizes are text like "486 MB". Review the diff before committing.
set -euo pipefail
new="$1"; macs="${2:-}"; wins="${3:-}"
old="$(sed -n 's/.*"version":"\([^"]*\)".*/\1/p' index.html | head -1)"
[ -n "$old" ] || { echo "No release block found"; exit 1; }
for f in index.html install/index.html; do
  sed -i.bak -e "s/v${old}\//v${new}\//g" -e "s/Friskshorts-${old}-/Friskshorts-${new}-/g" \
    -e "s/\"version\":\"${old}\"/\"version\":\"${new}\"/" -e "s/Version ${old}/Version ${new}/g" -e "s/v=${old}/v=${new}/g" "$f"
  rm -f "$f.bak"
done
echo "Release $old -> $new. Update sizes by hand if they changed${macs:+ (mac: $macs)}${wins:+ (win: $wins)}."
