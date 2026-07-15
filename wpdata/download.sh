#!/bin/bash
mkdir -p public
count=0
fail=0
while IFS= read -r url; do
  path=$(echo "$url" | sed -E 's#https://lamat-elarabia\.org/##' | sed -E 's/\?.*$//')
  outfile="public/$path"
  mkdir -p "$(dirname "$outfile")"
  if [ ! -s "$outfile" ]; then
    curl -sL -A "Mozilla/5.0" "$url" -o "$outfile"
    if [ -s "$outfile" ]; then count=$((count+1)); else fail=$((fail+1)); echo "FAIL: $url"; fi
  fi
done < wpdata/all_asset_urls.txt
echo "Downloaded: $count Failed: $fail"
