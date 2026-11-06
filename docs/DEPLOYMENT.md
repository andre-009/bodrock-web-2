# Environment, GitHub & Deployment Policy

## Project stages
1. **Foundation:** local repo and GitHub only. NO production, DNS, cPanel, purchases, Supabase or mail configuration changes.
2. **Preview:** isolated managed Next.js preview URL, access restricted where supported, `ALLOW_INDEXING=false`, test data only. Provider selection requires separate confirmation.
3. **Production readiness:** approved platform and plan, documented environment variables, security checks, monitoring, backups and a reversible cutover plan.
4. **Launch:** only after explicit approval and completion of the DNS/email and rollback gates below.

## GitHub repository
Repository `andre-009/bodrock-web-2`; the owner authorized changing visibility to public after foundation setup. `main` is production-candidate integration branch; `feat/*`, `fix/*`, `chore/*` via reviewed PR. Set GitHub ruleset/branch protection with required CI, no force push and PR review where account support permits. Enable secret scanning/Dependabot if available. Add CODEOWNERS and restrict who can approve high-impact changes. Never store tokens in repository or issue attachments.

## Critical DNS/email constraint
Audit dated 2026-11-06: both Bodrock domains shared one document root; `mail` aliased the apex in the observed cPanel DNS zone; 129 records were visible, but actual authoritative DNS remains unverified. **Changing apex A/CNAME without fixing mail dependencies may break email.** Inventory authoritative DNS, MX/SPF/DKIM/DMARC, mail endpoints, TTL, certificates and a rollback procedure before DNS work. Do not move nameservers merely to move the website.

## Recovery/security constraints
No cPanel full backups were listed in the observed interface; provider or offsite backups may exist but were unverified. Confirm backup location, retention and a restore test. Enable cPanel MFA. Keep local preview and production credentials separate. Do not share customer/production data with public previews. Treat Vercel as a candidate, not a purchased service.

## CI check suite
npm install creates `package-lock.json` (must be committed). CI uses Node 24, `npm ci`, `npm run check`; checks enforce token governance, ESLint, TypeScript, Node tests and production build. GitHub's required status checks must be configured manually if the connected integration cannot access repository settings.

## Approved cutover checklist (future, not permission to act)
Provider selection and spend; production backups and verified restore; DNS authority and mail inventory; exact provider records; TTL plan; SSL; smoke tests; rollback scripts; data protection; mobile performance; SEO; accessibility; error monitoring; on-call ownership.
