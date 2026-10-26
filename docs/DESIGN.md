---
version: alpha
name: Ikbar — Quiet Engineering
description: Minimal monochrome editorial portfolio focused on software projects.
colors:
  primary: "#18181B"
  secondary: "#52525B"
  neutral: "#FAFAF9"
  surface: "#FFFFFF"
  darkBackground: "#111113"
  darkSurface: "#19191C"
  darkText: "#F4F4F5"
  darkMuted: "#A1A1AA"
typography:
  h1:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: 4.5rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.05em"
  body-md:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: 1rem
    lineHeight: 1.7
rounded:
  sm: 6px
  md: 12px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: 12px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 24px
  card-dark:
    backgroundColor: "{colors.darkSurface}"
    textColor: "{colors.darkText}"
    rounded: "{rounded.md}"
    padding: 24px
---

## Revision 5 Projects composition
The Projects route is an Explore surface with a vertical editorial composition, not a carousel. Start with a featured hero project: 2-column split on desktop (large 16:9 preview, text/meta block), stacked on mobile. Follow with a Current work section: a compact bordered status panel for one fictional in-progress sample, with status marker, phase, and short note—no progress percentages or invented delivery claims. Finish with All projects: three-column desktop, two tablet, one mobile card grid. Keep the existing card radius, thin borders, neutral surfaces, image ratios and typography.

Decoration is structural: section index labels, thin rules, offset frame/border on featured image, small status dot, corner markers, subtle background line texture using CSS only if it does not reduce contrast. Avoid gradients, giant stats, decorative blobs, and excessive badges. Use the existing monochrome palette. Translate all labels and aria text.

Remove the Revision 4 wheel mapping and horizontal progress UI from Projects. Normal vertical scrolling is the interaction. Keep motion posture below and reduced-motion behavior.


Projects uses ordinary document scrolling. There is no bounded horizontal track, wheel remapping, track instruction, or progress cue. Filters, keyboard focus, touch, and reduced-motion all retain native vertical behavior. Keep page root overflow-x hidden so decorative frames cannot create viewport overflow.

Increase motion visibility modestly: 220–400ms eased route/section reveals, staggered cards, and image scale/clip reveals. No infinite animation, parallax or flashing; `prefers-reduced-motion: reduce` disables non-essential motion.


Motion is an understated editorial cue: page content enters with a short opacity/translate transition; sections use staggered reveal only when content is first rendered; project cards lift at most 2px and image scale stays at or below 1.015 on hover-capable devices; links/buttons use color/border/arrow transitions; detail images have a restrained hover treatment. Use CSS only unless route state genuinely requires otherwise. Never animate continuously. Keep motion within 150–300ms, use ease-out, avoid layout-shifting animation, and disable transforms/animations under `prefers-reduced-motion: reduce`. Focus indicators must remain immediate and visible.


Preserve all current neutral colors, fonts, border treatments, container widths and card grid rhythm. Primary Projects surface remains Explore; detail surface is Learn with a wide 16:9 project preview followed by editorial case-study content, metadata row (localized date/duration and tags) and clear back link. Replace old modal requirements with routed detail pages. Home gains purposeful capability/process content and a small selected-work preview without fake stats or filler. Card image sits above existing card text with consistent aspect ratio and subtle neutral border. Six local sample UI mockups are explicitly authorized for project previews; label them as illustrative dummy assets, not actual shipped product screenshots. Avoid decorative unrelated dashboard imagery.

Animation: restrained opacity/translate entry (<=300ms, <=8px), hover lift <=2px, no indefinite animations. Hover only on hover-capable devices. Reduced-motion removes motion. Opaque sticky header stays unchanged. Preserve legibility in dark/light themes and fully translate new copy/alt text.

## Overview
Primary surface: Explore, with a restrained introductory Decide/Learn section. Visitors inspect project work, not a marketing funnel. Quiet engineering, typographic hierarchy, monochrome, generous negative space. No gradients, colorful blobs, fake metrics, testimonials, stock portraits or decorative dashboard imagery.

## Colors
Only neutral colors. Light canvas #FAFAF9, white cards, ink #18181B, muted #52525B, borders #E4E4E7. Dark canvas #111113, cards #19191C, ink #F4F4F5, muted #A1A1AA, borders #343438. Clear high-contrast focus ring in both modes. All small body text meets AA contrast.

## Typography
Arial/Helvetica deliberately chosen for understated, locally available technical clarity. Consolas/monospace only for index labels, code mark, tech tags and small section captions. Responsive headline clamp(2.6rem, 6vw, 4.5rem). Body 16px, readable line length, no low-contrast tiny text.

## Layout
Maximum content width 1120px; desktop side gutters 48px, mobile 20px (16px narrow). Header logo IR with small code punctuation, anchor navigation, locale and theme controls. Left-aligned intro with role eyebrow, name and concise bilingual description, CTA to projects. No huge empty hero. Projects: heading and count, compact category filters, three columns desktop, two tablet, one mobile; aligned card bottoms and consistent heights. About is a simple split text/stack section, contact a clean closing strip. Header wraps or uses accessible mobile menu, never hides toggles. Section spacing 80–104px desktop and 56–64px mobile.

## Elevation & Depth
Borders rather than shadows; optional subtle hover border changes. No glassmorphism.

## Shapes
Cards 12px radius, buttons 6px; thin dividers. Avoid excessive pills except technology tags.

## Components
Six bilingual sample project cards with index/category, title, short description, stack tags and explicit details action. Visible sample-content notice. Dialog with descriptive details, stack and fictional-content disclaimer. Filters have accessible selected state; empty state if relevant. Toggle controls show current language and a clear theme action. Interactive touch targets >=44px. Details dialog traps focus, closes with Escape/backdrop and restores focus. Navigation supports keyboard, anchors account for sticky header. Respect reduced motion.

## Do's and Don'ts
Do prioritize alignment, legibility and project cards. Do translate accessible labels and state copy. Do persist preferences safely. Do not use dummy live/source links or fabricate a delivered contact form. Do not add unnecessary dependency frameworks, animated particles or giant terminal illustrations.
