# Bodrock 2.0 — Permanent Codex Engineering Contract

This repository is the **only source of truth** for Bodrock Web Design 2.0. Treat this file, `docs/ARCHITECTURE.md`, `docs/DESIGN_SYSTEM.md`, and `docs/decisions/` as governing documents. The latest approved ADR controls architectural changes; design token values live **only** in `src/styles/tokens.css`.

## Mission
Build a premium, fast, inclusive, app-like web presence for Bodrock Web Design, rooted in disciplined engineering and a distinct editorial design language. Its tagline is **Your Vision. Our Code.** Do not imitate Tesla, Apple, X, or other products literally; translate the intended quality and usability into original work.

## Non-negotiable rules
1. **No ad-hoc redesigns.** Use BDL 1.0 tokens, components, layout primitives and typography. Do not invent colors, fonts, radii, breakpoints or animation curves in individual pages. Extend the shared system only through an ADR + corresponding implementation + tests.
2. **No framework churn.** Next.js App Router, React, TypeScript, Tailwind v4, Node.js 24, npm lockfile. Prefer React Server Components for noninteractive views; minimize client JS.
3. **Scope control.** Foundation phase ONLY until specifically requested to build pages. A small placeholder home route is allowed to test the toolchain, not a final design.
4. **No production changes.** Do not deploy or alter any domain, MX/SPF/DKIM/DMARC record, hosting account, WordPress filesystem, database, or email service without separate explicit approval.
5. **No secrets in Git.** Environment secrets belong in local `.env.local` or platform secret managers. Never log credentials. All privileged mutations must be validated, authorized and rate-limited server-side.
6. **Respect privacy, accessibility and speed.** WCAG 2.2 AA as target; semantic HTML, keyboard/focus states, responsive layouts, proper contrast and `prefers-reduced-motion` support; define measurable performance budgets and validate on slow/mobile devices.
7. **Reviewable increments.** Changes use `feat/*`, `fix/*` or `chore/*` branches with PRs to protected `main`. CI must pass lint, typecheck, design-system guard, tests and production build before merge.
8. **No speculative integrations.** Do not provision Supabase, a CMS, payments, analytics vendor, domain, or hosting spend before documented need and authorization. Keep external services behind typed adapters.
9. **No duplicate sources of truth.** Update existing system components; don't duplicate components for the same role. Do not scatter theme values across CSS, JSX and TS config.
10. **Protect existing installations.** The .com and .com.ng domains presently share a hosting document root. Do not touch them during this phase.

## Work sequence for every task
Read `AGENTS.md` → relevant ADRs and docs → inspect existing source → make the smallest coherent change → run `npm run check` → report affected files, decisions, validation results and unresolved risks. Do not silently change architectural standards.

## Change approval rules
Minor implementation decisions: decide independently within these standards. A change to locked brand tokens, core stack, authentication/data model, infrastructure provider or production DNS requires an ADR and user approval first. All other choices should be made decisively without repeatedly asking for design direction.

## Definition of done
Build passes, tests cover important behavior, accessibility is considered, no new hard-coded design values, no secrets, documentation updated, rollback path clear, and no unauthorized production activity.
