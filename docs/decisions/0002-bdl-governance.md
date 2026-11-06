# ADR 0002 — BDL 1.0 Design Governance

- Status: Accepted for foundation
- Date: 2026-11-06

## Context
Repeated section-level design changes create rework and visual inconsistency. The owner requires consistent, deliberate execution without repeated redesign approvals.

## Decision
Adopt Bodrock Design Language (BDL) 1.0: established blue/cyan brand anchors, dark-first with full light mode, responsive editorial typography, component/token hierarchy, accessible states and restrained motion. CSS token values are canonical in `src/styles/tokens.css`. All route and component work must consume BDL 1.0 rather than invent new styling rules.

## Enforcement
`AGENTS.md`, PR template, CODEOWNERS and `npm run guard:tokens`. Design-system changes get their own ADR and review. Implementation choices within BDL 1.0 do not need repeated owner prompts.
