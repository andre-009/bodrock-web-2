# Bodrock 2.0 — Architecture Baseline (v1.0)

**Status:** Approved implementation baseline for foundation work; production provider and backend services remain provisional. **Date:** 2026-11-06.

## Intent
The Bodrock website behaves like a refined web application rather than a template-driven WordPress site. It must be editorial, performant, responsive, accessible, and secure, with reusable components and minimal JavaScript by default.

## Locked baseline
- Next.js App Router and React, TypeScript strict mode, Node.js 24 LTS, npm with committed `package-lock.json`.
- Tailwind CSS v4 + canonical CSS custom properties in `src/styles/tokens.css`. BDL 1.0 rules in `docs/DESIGN_SYSTEM.md`.
- Server Components by default. Client Components only for actual interaction; dynamic imports for heavy animations/WebGL.
- SSR/SSG as needed, no blanket static-export restriction. SEO metadata and server rendering remain available.
- Deploy to isolated preview and production environments on a managed Next.js-compatible host **after a separate hosting decision**. Vercel is a candidate, not an already configured or purchased service.
- Existing GlobalHosting247 infrastructure remains unchanged and may continue to serve domain/email after careful verification.
- Backend architecture starts with typed interfaces and adapters. Do not implement or pay for a hosted database or auth until product requirements justify it.

## Layering / project organization
```text
src/
  app/                Next.js routing, layouts and route-specific metadata
  components/         Shared UI primitives and composed sections (future)
  features/           Bounded product features (future)
  lib/                Shared utilities, server adapters and validated config
  content/            Typed content contracts and data sources (future)
  styles/tokens.css   THE source of brand/theme token values
docs/
  decisions/          Architecture Decision Records; never rewrite accepted history
scripts/              Static governance checks
tests/                Initial Node tests; adopt component/E2E test suites by need
```

## Route plan (future design/development phases)
Public routes: `/`, `/work`, `/work/[slug]`, `/services`, `/studio`, `/insights`, `/insights/[slug]`, `/contact`, `/brief`. Authentication-protected `/portal` is a later product milestone; do not implement its UX or data model speculatively.

## Content architecture
Start with typed content interfaces and local fixture data. Later choose an editor-friendly CMS behind an adapter based on content workflow, ownership, release flow, costs and SEO. No client-side-only fetching of critical public SEO content. User-facing forms must validate on server and include abuse protection before launch.

## Visual platform rules
BDL 1.0 is the single approved design language. Site sections consume shared tokens and components, and all breakpoints/patterns are mobile-first. Animations are progressive enhancement and must not block navigation/content. Never add a WebGL dependency to the critical rendering path.

## Release discipline
Trunk-based: feature branches → PR previews → CI → protected `main` → production when approved. No `main` auto-deployment to current Bodrock domain during foundation phase. Separate environment variables and data. Preview must be protected and noindexed; no user production data in previews.

## Operational requirements
Secrets in managed environments only; MFA; least privilege; authenticated backend authorization and database RLS once data layer exists; observability; external backups with restore test; dependency updates; performance budgets; accessible QA and tested rollback. Database migration rollback is separate from web release rollback.

## Explicit unknowns
GlobalHosting247 full Node runtime support, authoritative DNS provider, effective mail dependency, backups, planned traffic, budget, hosting SLA, CMS needs, portal requirements, CMS/model vendor and eventual domain cutover timing. Unknowns do not block local architecture work.
