// Extracts editable pieces (visible text nodes, image src/alt) from a legacy
// Elementor HTML blob, and applies edited values back positionally. Regex on
// HTML is normally fragile, but this content is machine-generated Elementor
// markup (no unquoted attributes, no stray `<` in text), and edits are
// applied by occurrence index against the exact same extraction pass, so a
// value that round-trips unedited is byte-identical.

function maskNonContent(html: string): string {
  return html.replace(
    /(<(style|script)\b[^>]*>)([\s\S]*?)(<\/\2>)/gi,
    (_m, open, _tag, body, close) => open + " ".repeat(body.length) + close
  );
}

const TEXT_RE = />([^<>]*[\p{L}\p{N}][^<>]*)</gu;
const IMG_RE = /<img\b[^>]*>/gi;
const SRC_RE = /\bsrc="([^"]*)"/i;
const ALT_RE = /\balt="([^"]*)"/i;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export interface EditableText {
  index: number;
  value: string;
}

export interface EditableImage {
  index: number;
  src: string;
  alt: string;
}

export interface ExtractedEditable {
  texts: EditableText[];
  images: EditableImage[];
}

export function extractEditable(html: string): ExtractedEditable {
  const masked = maskNonContent(html);

  const texts: EditableText[] = [];
  let m: RegExpExecArray | null;
  TEXT_RE.lastIndex = 0;
  while ((m = TEXT_RE.exec(masked)) !== null) {
    texts.push({ index: texts.length, value: m[1] });
  }

  const images: EditableImage[] = [];
  IMG_RE.lastIndex = 0;
  while ((m = IMG_RE.exec(masked)) !== null) {
    const tag = html.slice(m.index, m.index + m[0].length);
    const src = SRC_RE.exec(tag)?.[1];
    if (!src) continue;
    images.push({
      index: images.length,
      src,
      alt: ALT_RE.exec(tag)?.[1] ?? "",
    });
  }

  return { texts, images };
}

interface Splice {
  start: number;
  end: number;
  value: string;
}

export function applyEdits(html: string, texts: string[], images: { src: string; alt: string }[]): string {
  const masked = maskNonContent(html);
  const splices: Splice[] = [];

  let i = 0;
  let m: RegExpExecArray | null;
  TEXT_RE.lastIndex = 0;
  while ((m = TEXT_RE.exec(masked)) !== null) {
    const start = m.index + 1; // skip the ">"
    const end = start + m[1].length;
    if (texts[i] !== undefined && texts[i] !== m[1]) {
      splices.push({ start, end, value: escapeHtml(texts[i]) });
    }
    i++;
  }
  if (i !== texts.length) {
    throw new Error(`text count mismatch: html has ${i}, payload has ${texts.length}`);
  }

  i = 0;
  IMG_RE.lastIndex = 0;
  while ((m = IMG_RE.exec(masked)) !== null) {
    const tag = html.slice(m.index, m.index + m[0].length);
    const srcMatch = SRC_RE.exec(tag);
    if (!srcMatch) continue;
    const edit = images[i];
    if (edit !== undefined) {
      let newTag = tag;
      if (edit.src !== srcMatch[1]) {
        newTag = newTag.replace(SRC_RE, `src="${escapeHtml(edit.src)}"`);
        newTag = newTag.replace(/\s(srcset|sizes)="[^"]*"/gi, "");
      }
      const altMatch = ALT_RE.exec(newTag);
      if (altMatch) {
        if (edit.alt !== altMatch[1]) {
          newTag = newTag.replace(ALT_RE, `alt="${escapeHtml(edit.alt)}"`);
        }
      } else if (edit.alt) {
        newTag = newTag.replace(/<img\b/i, `<img alt="${escapeHtml(edit.alt)}"`);
      }
      if (newTag !== tag) {
        splices.push({ start: m.index, end: m.index + tag.length, value: newTag });
      }
    }
    i++;
  }
  if (i !== images.length) {
    throw new Error(`image count mismatch: html has ${i}, payload has ${images.length}`);
  }

  splices.sort((a, b) => b.start - a.start);
  let result = html;
  for (const s of splices) {
    result = result.slice(0, s.start) + s.value + result.slice(s.end);
  }
  return result;
}
