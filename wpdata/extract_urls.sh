#!/bin/bash
for f in wpdata/raw/*.html; do
  grep -oE "https://lamat-elarabia\.org/wp-content/[^\"' )]+" "$f"
  grep -oE "https://lamat-elarabia\.org/wp-includes/[^\"' )]+" "$f"
done | sed 's/&#038;/\&/g; s/&amp;/\&/g' | sort -u
