# BDL 1.0 primitives

Import the named primitives from `src/components/ui`. Load `src/app/globals.css` once. Use `Button` for actions and `Link` for navigation; provide accessible names. Pair every `Input` with a `Label` using `id` and `htmlFor`; connect error text via `aria-describedby` and set `aria-invalid`. `Button` defaults to `type="button"`; use `type="submit"` for forms. Its loading state disables the control and sets `aria-busy` while preserving its label. `Icon` is decorative unless a `label` is supplied. Container, Stack and Grid are layout building blocks; Surface and Badge provide common visual roles. Theme is selected by an ancestor `data-theme="light"` or `data-theme="dark"`. Motion respects reduced-motion preferences.

This initial layer does not implement the larger navigation, dialog, command palette or form workflow patterns. Those need interaction-specific design and tests.

## Interactive patterns

Import from `src/components/patterns`. `SiteHeader` exposes a labelled disclosure navigation; Escape closes it and returns focus to the menu button. Supply a `brandHref` and unique navigation destinations. `SiteFooter` supplies labelled footer navigation. `Dialog` is a controlled native modal: provide `open`, an `onClose` callback that updates state, and a descriptive title; native modal focus handling and Escape are retained. `CommandPalette` filters supplied commands and calls their actions on selection. Provide unique command labels.

`FormField` renders a label and optional hint/error text. Give the child control the same `id`, set `aria-invalid` when needed, and reference the generated `${id}-hint` and `${id}-error` IDs with `aria-describedby`. `TextArea`, `Select`, and `FormSteps` are reusable presentational controls; validation, privacy, submission, server authorization and abuse protection belong to the consuming form. `ProjectTile` and `CaseStudyModule` are content structures, not connected to a CMS. The gallery form is a browser-only example and never transmits data.
