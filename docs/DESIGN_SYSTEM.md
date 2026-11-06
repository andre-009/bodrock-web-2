# Bodrock Design Language — BDL 1.0

**Status:** Locked foundation. One coherent system for all current and future marketing routes and the eventual portal. **Values belong in `src/styles/tokens.css` only.** This document defines *why and how* to use them; do not duplicate numerical token values in other design configs.

## Brand personality
Original, engineered, assured, premium, human and sharply editorial. Interpret Apple's polish, Tesla's control of detail and X's speed as **quality benchmarks** rather than copying their specific UI.

## Brand anchors
- Official name: **Bodrock Web Design**.
- Signature: **Your Vision. Our Code.**
- Established brand primary: `#0047BA`; established brand accent: `#00C2C7`. These two values are defined ONLY in `src/styles/tokens.css`; they are recorded here for product recognition but CSS remains canonical.
- Default experience: deep midnight / near-black **dark** theme with quiet blue structural emphasis and cyan accents; a complete **light** theme uses semantic tokens, not inverted screenshots.
- Display: confident, oversized type; generous negative space; asymmetry only when it improves reading hierarchy.

## Typography
Font families: Geist Sans (primary) and Geist Mono (technical/metadata), loaded with `next/font` once build dependencies are installed and font loading verified; system fallback is acceptable during foundation bootstrap. Defined scale: display, h1, h2, h3, body, small, caption. Use one responsive type scale and consistent line-height/letter-spacing; avoid individual `font-size` values per section.

## Layout and spacing
4px-based spacing with 8px rhythm. Container width and page gutters controlled by tokens, not per-page CSS. Responsive progression: 360px compact, 768px tablet, 1024px desktop, 1440px large desktop; build mobile-first and test 320–1920px. Only introduce new breakpoints through the design system.

## Component roles
1. **Primitives:** Button, Link, Input, Label, Badge, Surface, Container, Stack, Grid, Icon.
2. **Patterns:** Header, navigation, command palette, project tiles, case-study modules, form steps, modal and footer.
3. **Sections:** Must compose from the same primitives and patterns. Never create a different primary button, border radius or card spacing because of a new section.
4. **States:** resting, hover, pressed, focus-visible, loading, disabled, error, success, empty; keyboard and touch equivalents must exist.

## Motion system
Small feedback ~120–180 ms; navigation/enter ~220–320 ms; layered storytelling ~420–700 ms, subject to actual tokens. Prefer transform and opacity; keep animations interruptible and route transitions short. Honor `prefers-reduced-motion`; provide equivalent content without movement. 3D is optional enhancement with reduced-power, mobile and unsupported-device fallbacks.

## Accessibility and quality gates
Target WCAG 2.2 AA, keyboard navigation, visible focus, minimum comfortable tap targets, text contrast, no motion dependency for comprehension, form errors and screen reader semantics. Treat Core Web Vitals and actual mobile GPU load as mandatory constraints; set quantitative budgets after a measured baseline.

## Nonnegotiable governance
- No new hex/rgb/hsl colors outside `src/styles/tokens.css` (automated guard).
- No inline dynamic styles for brand colors; no Tailwind arbitrary hex.
- No new layout primitive or design variation where one exists already.
- Any intentional design-language change requires a small ADR and version bump; feature pages cannot override it unilaterally.
- Do not ask for aesthetic direction repeatedly: implement BDL 1.0 until the owner explicitly authorizes a revision.
