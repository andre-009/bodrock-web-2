# Bodrock Web Design 2.0

**Your Vision. Our Code.**

A clean architectural foundation for a premium Next.js agency application. **This is intentionally not the final website design.**

## Project status
- Architecture and BDL 1.0 design governance established.
- No production deployment, domain change or hosting purchase.
- No authenticated dashboard, CMS or backend service provisioned.
- CI becomes operational when the npm lockfile is generated and committed by Codex.

## Local setup (Node.js 24 / npm)
```bash
nvm use                 # or install Node.js 24 by your normal version manager
npm install             # MUST commit the generated package-lock.json
npm run dev
npm run check
```

`.env.example` documents nonsecret deployment settings. Copy to `.env.local` when necessary; never commit `.env.local`.

## Canonical documentation
- `AGENTS.md` — Codex contract.
- `docs/ARCHITECTURE.md` — product/runtime/repository architecture.
- `docs/DESIGN_SYSTEM.md` — BDL 1.0 system and component governance.
- `src/styles/tokens.css` — actual token values (single source).
- `docs/DEPLOYMENT.md` — environments, risk gates and no-DNS-change requirement.
- `docs/decisions/` — records of locked decisions.

## Repository bootstrap
Use a **fresh PRIVATE GitHub repository** named `andre-009/bodrock-web-2`. The existing `Bodrock-AI` repository is a separate product and must not be repurposed. If Codex has authenticated GitHub CLI access, it can initialize a new repository. Otherwise, create the empty private repo in GitHub and let Codex push this foundation. Never accidentally publish the code publicly.

## Out-of-scope
Visual implementation, client portal data model, CMS selection, hosting subscription, DNS cutover, email migration, analytics services, authentication setup, database provisioning.
