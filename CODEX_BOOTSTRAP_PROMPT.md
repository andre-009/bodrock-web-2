# Codex Task — Establish Bodrock Web Design 2.0 Foundation

Act as a principal full-stack engineer and DevOps architect. This is a **foundation/setup** task, NOT a website redesign or production migration.

## Authoritative inputs
- Extract the attached `bodrock-web-2-foundation.zip` into a clean workspace. If files are already extracted, operate in that folder.
- Read `AGENTS.md`, all `docs/*.md`, `docs/decisions/*.md` and `src/styles/tokens.css` before any changes.
- Do NOT create another visual direction. **BDL 1.0 is locked**. Implement its existing tokens and architecture as given, unless a verified toolchain error requires a minimal fix.

## Authorized tasks
1. Verify authenticated GitHub identity and permissions with `gh auth status` or a connected GitHub integration. Account owner expected: `andre-009`. Never print credentials.
2. Check whether `andre-009/bodrock-web-2` exists. If not, create a new **PRIVATE** repository. Do not reuse or alter `Bodrock-AI` or any other existing repository. If it already exists, inspect it carefully and never overwrite or force push.
3. Install and use Node.js 24. Run `npm install` using a network-capable development workspace and commit the resulting `package-lock.json`. Preserve compatible, stable package versions; avoid prereleases.
4. Initialize Git on `main` if needed. Commit all supplied foundation files, except ignored local secrets. Push to the new private repository using authenticated GitHub CLI or connector. Example: `git init -b main`, `git add .`, `git commit -m 'chore: establish Bodrock 2.0 foundation'`, `gh repo create andre-009/bodrock-web-2 --private --source=. --remote=origin --push`. Adapt only after checking Git/GitHub state; do not blindly reinitialize or overwrite remotes.
5. Run the full `npm run check`: design token guard, ESLint, TypeScript, Node tests, Next.js production build. Resolve verified scaffold errors without changing architectural decisions. Re-run until all checks pass. Avoid adding unnecessary dependencies or UI features.
6. Confirm `.github/workflows/ci.yml` runs green. Configure GitHub branch protection/rulesets where supported: require PR, require CI, prohibit force pushes, restrict direct `main` updates, and apply CODEOWNERS. Check available repository security settings (Dependabot, secret scanning) and enable when available; report any limitations accurately. Do not change account-wide settings.
7. Verify repository is private; default branch is `main`; no keys, passwords, tokens, live website files, or production data were added.
8. Document any fixes as a focused commit. Provide precise status of completed actions and any blockers.

## Restrictions
- No globalhosting247/cPanel login changes, no DNS, no WordPress file changes, no migrations, no purchases or hosting subscriptions.
- No Vercel or Supabase provisioning in this phase.
- No public preview or production deployment, even if tooling offers one-click deployment.
- No new homepage visual design. The `/` route is intentionally a smoke-test placeholder.
- Do not ask repeated questions about design choices. Follow BDL 1.0. Ask only if access/permissions or a consequential, irreversible change truly requires explicit human action.

## Report exactly
1. GitHub repository URL and privacy status.
2. Latest commit SHA and branch information.
3. Node/npm/Next/React versions that actually installed.
4. Commands run and pass/fail status of CI, typecheck, lint, tests, token guard, and build.
5. Which branch protections/security features were enabled vs unavailable.
6. Verified declaration that no live site, hosting, mail, DNS or billing state changed.
7. Any remaining blockers; next recommended step is BDL component system, not an unplanned redesign.
