#!/usr/bin/env zsh

# Converts each artist media kit PDF into per-page JPGs using pdftoppm (Poppler).
# Output: public/media-kits/<artist-id>/page-1.jpg, page-2.jpg, ...

SCRIPT_DIR="${0:A:h}"
PROJECT_DIR="${SCRIPT_DIR:h}"
MEDIA_KITS_DIR="$PROJECT_DIR/public/media-kits"

convert_kit() {
  local ARTIST_ID="$1"
  local PDF_FILE="$2"
  local INPUT="$MEDIA_KITS_DIR/$PDF_FILE"
  local OUTPUT_DIR="$MEDIA_KITS_DIR/$ARTIST_ID"

  if [ ! -f "$INPUT" ]; then
    echo "SKIP: $INPUT not found"
    return
  fi

  mkdir -p "$OUTPUT_DIR"
  echo "Converting $PDF_FILE -> $OUTPUT_DIR/page-*.jpg ..."

  pdftoppm -jpeg -r 150 "$INPUT" "$OUTPUT_DIR/page"

  # Rename zero-padded files (page-01.jpg) to page-1.jpg
  for f in "$OUTPUT_DIR"/page-*.jpg; do
    [ -f "$f" ] || continue
    BASE="${f:t:r}"       # filename without extension
    NUM="${BASE##page-}"  # strip "page-" prefix
    NUM=$((10#$NUM))      # strip leading zeros
    NEW="$OUTPUT_DIR/page-$NUM.jpg"
    if [ "$f" != "$NEW" ]; then
      mv "$f" "$NEW"
    fi
  done

  COUNT=$(ls "$OUTPUT_DIR"/page-*.jpg 2>/dev/null | wc -l | tr -d ' ')
  echo "  Done — $COUNT pages generated"
}

convert_kit "eeque"          "eeque-epk.pdf"
convert_kit "chcco"          "chcco-media-kit.pdf"
convert_kit "al-xapo"        "al-xapo-epk.pdf"
convert_kit "masterpiece-yvk" "masterpiece-yvk-epk.pdf"
convert_kit "chley"          "chley-press-kit.pdf"

echo ""
echo "All conversions complete."
