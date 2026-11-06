# BDL 1.0 primitives

Import the named primitives from `src/components/ui`. Load `src/app/globals.css` once. Use `Button` for actions and `Link` for navigation; provide accessible names. Pair every `Input` with a `Label` using `id` and `htmlFor`; connect error text via `aria-describedby` and set `aria-invalid`. `Button` defaults to `type="button"`; use `type="submit"` for forms. Its loading state disables the control and sets `aria-busy` while preserving its label. `Icon` is decorative unless a `label` is supplied. Container, Stack and Grid are layout building blocks; Surface and Badge provide common visual roles. Theme is selected by an ancestor `data-theme="light"` or `data-theme="dark"`. Motion respects reduced-motion preferences.

This initial layer does not implement the larger navigation, dialog, command palette or form workflow patterns. Those need interaction-specific design and tests.
