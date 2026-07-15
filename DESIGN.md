---
name: Lamat Elarabia Contracting
description: Riyadh-based contracting company site, rebuilt from WordPress/Elementor into Next.js
colors:
  forest-primary: "#137547"
  forest-deep: "#0e5735"
  sage-accent: "#71a38b"
  earth-tan: "#B8987F"
  near-black: "#141310"
  near-white: "#FBFAF7"
  hairline-gray: "#DDDDDD"
  overlay-scrim: "#8080801A"
typography:
  display:
    fontFamily: "Cairo, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.8125rem)"
    fontWeight: 800
    lineHeight: 1.15
  body:
    fontFamily: "Tajawal, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Almarai, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: "8px"
  md: "16px"
  lg: "24px"
spacing:
  sm: "10px"
  md: "20px"
  lg: "50px"
components:
  button-primary:
    backgroundColor: "{colors.forest-primary}"
    textColor: "{colors.near-white}"
    rounded: "{rounded.lg}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.forest-deep}"
    textColor: "{colors.near-white}"
    rounded: "{rounded.lg}"
    padding: "14px 32px"
  contact-chip:
    backgroundColor: "{colors.overlay-scrim}"
    textColor: "{colors.near-white}"
    rounded: "{rounded.lg}"
    padding: "10px 20px"
---

# Design System: Lamat Elarabia Contracting

## 1. Overview

**Creative North Star: "The Foundation Stone"**

Everything here should read as load-bearing, not decorative: a company that pours concrete and stands behind it, not one chasing an app-store aesthetic. The existing site already leans this way by instinct - a heavy forest green paired with sun-baked tan, blunt 800-weight display type, zero shadows, zero gradients. The polish pass sharpens that instinct rather than replacing it: same palette, same fonts, same flat construction-of-solid-blocks logic, with the WordPress/Elementor template seams (inconsistent spacing, leftover default widget styling, pure #000/#fff instead of tinted neutrals) sanded off.

This system explicitly rejects the unedited Astra/Elementor template look (default spacing rhythm, stock icon-list bullets, clip-art stock imagery) and rejects SaaS/tech-startup visual language (gradients, glassmorphism, neon accents, hero-metric dashboards). It is not trying to look like a product; it is trying to look like an institution.

**Key Characteristics:**
- Deep forest green as the load-bearing color, not a UI accent
- Earth tan as the secondary material, used in solid bands rather than trim
- Flat surfaces, depth built from stacked color blocks, not shadows
- Heavy display type (Cairo 800) paired with plain, legible body type (Tajawal/Almarai)
- Generous, blunt rounding (24px) on every container, no sharp corners and no pill shapes

## 2. Colors

Two-color palette carrying real weight (Committed strategy), not a tinted-neutrals-plus-accent system: green is dominant, tan is secondary, both used at real scale (footer bands, backgrounds), not as trim.

### Primary
- **Foundation Green** (#137547): Primary brand color. Navigation, links, primary buttons, icon accents. Used at Committed-strategy scale, not restrained to a small accent role.
- **Foundation Green Deep** (#0e5735): Hover/pressed state for Foundation Green, and the dark band behind dropdown navigation.

### Secondary
- **Baked Earth Tan** (#B8987F): Footer's structural color band and the circular motif graphics. Reads as clay/adobe, reinforcing "built from the land."

### Tertiary
- **Sage** (#71a38b): Muted, desaturated green used sparingly for secondary icon/link accents where full Foundation Green would be too heavy.

### Neutral
- **Near-Black** (#141310): Replaces the current literal `#000000` used for footer background and body text. Same visual weight, hue-tinted 2-3% toward the green so it doesn't read as pure ink black.
- **Near-White** (#FBFAF7): Replaces literal `#FFFFFF` used for text-on-dark and page background. Warm-tinted, not clinical white.
- **Hairline Gray** (#DDDDDD): Dividers, submenu borders.
- **Overlay Scrim** (#8080801A, ~10% alpha): Translucent chip background for footer contact items (phone/email/address), sitting over the tan/black bands.

### Named Rules
**The No-Pure-Neutral Rule.** Never author new `#000000` or `#FFFFFF`. Use Near-Black / Near-White (or their OKLCH equivalents) so neutrals stay tinted toward Foundation Green. Existing instances of literal black/white are template debt to retire during polish, not a style to continue.

## 3. Typography

**Display Font:** Cairo (with sans-serif fallback)
**Body Font:** Tajawal (with sans-serif fallback)
**Label Font:** Almarai (with sans-serif fallback)

**Character:** Cairo at heavy weight (800) carries all headings, giving them a stamped, confident weight appropriate to a builder; Tajawal is plain and highly legible for running text and navigation; Almarai handles contact/label-style content (phone, email, address) with a slightly warmer, rounder letterform than Tajawal, giving the footer a distinct texture from the body copy above it.

### Hierarchy
- **Display** (800, clamp(1.75rem, 4vw, 2.8125rem), 1.15 line-height): Section headings, footer CTA heading. Cairo only, never body text.
- **Headline** (800, 1.25rem-2rem, 1.2): Sub-section titles.
- **Body** (400, 1.125rem, 1.6 line-height): Paragraph copy, nav links. Cap width at 65-75ch. Tajawal.
- **Label** (500, 1.125rem, 1.4 line-height): Contact info, footer chips, form labels. Almarai.

### Named Rules
**The One-Weight-Jump Rule.** Display type is always 800 weight; body text is always 400-500. No intermediate 600-700 weights - the jump itself is the hierarchy signal, not a gradual scale.

## 4. Elevation

The current site is entirely flat: no `box-shadow` anywhere. This polish pass introduces restrained elevation rather than staying flat, to help interactive elements (buttons, contact chips, nav dropdown) read as touchable against the site's large solid color bands. Elevation stays subtle and structural, never decorative glow.

### Shadow Vocabulary
- **resting** (`box-shadow: 0 1px 3px rgba(20,19,16,0.12)`): Default state for buttons and contact chips, barely-there separation from the band behind them.
- **raised** (`box-shadow: 0 4px 16px rgba(20,19,16,0.18)`): Hover/focus state for buttons and clickable cards.

### Named Rules
**The Structural-Only Rule.** Shadow exists to separate an interactive surface from the color band behind it. It never appears on static text, headings, or decorative image containers.

## 5. Components

### Buttons
- **Shape:** 24px radius on all corners (matches every existing container in the site - nav dropdown, hero image frame, footer bands).
- **Primary:** Foundation Green (#137547) background, Near-White text, Cairo or Tajawal depending on context, 14px 32px padding, `resting` shadow.
- **Hover / Focus:** Background shifts to Foundation Green Deep (#0e5735), shadow shifts to `raised`, no scale/transform tricks.
- **Secondary / Ghost:** Near-white background, Foundation Green text and 2px Foundation Green border, same 24px radius.

### Contact Chips (signature component)
The footer's phone/email/address items: Overlay Scrim background (#8080801A) over the tan/black band, 24px radius, Near-White Almarai text, WhatsApp/map icon inline at the leading (right, in RTL) edge. This is the site's most distinctive existing pattern and should be reused for any new call-to-action or contact surface rather than inventing a new one.

### Navigation
- Horizontal menu, Tajawal 18px/400, white text on the page's hero band.
- Dropdown/mobile submenu: Foundation Green Deep (#0e5735) background, 1px Hairline Gray dividers between items, white text, 24px radius on the dropdown panel.
- Mobile: collapses to a hamburger icon toggle; keep tap targets at least 44px tall for the general-public, non-technical audience.

### Icon Lists (signature component)
Bulleted content blocks (team/contact detail lists) use a tight RTL-packed layout: bullet glyph immediately right of the text with no intervening gap, `direction: rtl` set explicitly rather than inherited. Preserve this explicit-RTL pattern; do not rely on inherited document direction for any new list-style component, since the project has no global `dir="rtl"` (see AGENTS.md history) and inheritance has broken before.

## 6. Do's and Don'ts

### Do:
- **Do** keep Foundation Green (#137547) as the dominant, load-bearing color - it should read as structural, not a small accent.
- **Do** use 24px rounding on every container and interactive element; it is the site's one consistent geometric signature.
- **Do** set `direction: rtl` explicitly on any new list/menu-shaped component rather than relying on inheritance.
- **Do** use the Contact Chip pattern (scrim background + 24px radius + Almarai label) for any new contact/CTA surface.
- **Do** keep body text at 65-75ch max width and tap targets at least 44px for the general-public audience.

### Don't:
- **Don't** introduce gradients, glassmorphism, or neon accents - wrong register for a contracting company's credibility signal (per PRODUCT.md anti-references).
- **Don't** let the site read as an unedited WordPress/Elementor/Astra template: no default widget spacing, no stock icon-list bullets, no leftover clip-art placeholders.
- **Don't** author new literal `#000000` or `#FFFFFF` - use Near-Black / Near-White so neutrals stay tinted toward Foundation Green.
- **Don't** use `border-left`/`border-right` colored stripes as an accent treatment on any card, chip, or callout.
- **Don't** add a hero-metric template (big number + small label + gradient accent) - this is a contracting company, not a SaaS product.
