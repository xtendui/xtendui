## Frontend

- For Frontend documentation use [XtendUI](https://github.com/xtendui/xtendui) and [Tailwindcss](https://github.com/tailwindlabs/tailwindcss).
- Reuse the markup and classes of the components already used in the project (e.g. XtendUI components).

## HTML

- **Indent HTML** by always starting a new line when opening or closing tags, except for the `<span></span>` tag.
- Don't use newline before closing html tag, closing double quotation and closing tag must be on the same line.
- always specify the `loading` attribute in `img` tags, `lazy` or `eager`.
- leave the `alt` attribute empty unless a description of the image is required.
- use the `aria-label` attribute when there is no text inside `a` or `button` tags.

## CSS

- **Write CSS using Tailwind CSS classes** instead of standard CSS unless it is strictly necessary.
- **For reusable CSS**, use `config/packages/custom/tailwindcss.yaml` and implement them as follows: `{{ tw.button.primary }}`.
- Css and Tailwindcss classes ordered with Grouped by type https://github.com/necolas/idiomatic-css#declaration-order

## JavaScript

- Use vanilla js with ES6+ syntax and features for modern JavaScript development.
- Prefer querySelector and querySelectorAll to other js node query api.
- In XtendUI don't unmount components with `return () => {` it's not needed.
