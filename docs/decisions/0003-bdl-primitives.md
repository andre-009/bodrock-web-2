# ADR 0003 — BDL 1.0 primitive implementation

Status: Accepted for the requested component milestone.

The approved BDL 1.0 describes a 4px-based spacing scale, accessible control sizing, semantic light and dark themes, and reusable primitives but the foundation token file did not yet contain all values needed to implement them. This ADR records their first implementation, not a change to the approved brand anchors or a new visual direction. Values remain centralized in `tokens.css`; existing semantic colors and the 44px control minimum support the documented interaction and contrast goals. Future deviations from BDL still require the existing approval process.

The initial primitives are Button, Link, Input, Label, Badge, Surface, Container, Stack, Grid and Icon. They retain native HTML semantics. Richer interactive patterns remain separate work and must not be represented as completed by this primitive milestone.
