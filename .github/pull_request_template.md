## Summary
What changed, and which architecture/design requirement does it implement?

## Architecture and design consistency
- [ ] I read `AGENTS.md`, relevant ADRs and `docs/DESIGN_SYSTEM.md`.
- [ ] All UI uses BDL 1.0 tokens/patterns; no hard-coded colors, arbitrary breakpoints or duplicate components.
- [ ] Any change to locked design or technology decisions has its own ADR and owner approval.
- [ ] Responsive behavior, keyboard interaction and reduced motion were checked when relevant.

## Safety and validation
- [ ] No secrets, credentials, production data or restricted logs.
- [ ] No hosting, DNS, email, live database or production changes.
- [ ] `npm run check` passes; screenshots/tests attached when useful.
- [ ] Rollback/upgrade risks are described.
