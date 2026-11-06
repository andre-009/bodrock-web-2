# ADR 0001 — Next.js Application Architecture

- Status: Accepted for foundation
- Date: 2026-11-06

## Context
Bodrock 2.0 is an app-like agency site. GlobalHosting247 account runtime was not verified, 2 GB memory and shared-hosting resource constraints observed. We must not couple implementation to an unverified PHP/cPanel environment.

## Decision
Use Next.js App Router + React + TypeScript + Tailwind; Node.js 24 + npm lockfile; managed preview-first deployment. Server Components by default and explicit client islands for interactivity. Backend and hosting vendor are not selected or provisioned at this stage. Preserve production WordPress and domain/email configuration.

## Consequences
Supports SEO, static content, server rendering and later app workflows. Managed app hosting may incur future commercial spend. The existing shared cPanel plan is not assumed to host the full Next.js runtime. Changes require a new ADR and owner review.
