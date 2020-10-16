---
type: "Components"
category: "Core"
parent: "Link"
title: "Link"
description: "Default link styles for html links, buttons and divs."
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/installation#css-installation) instructions. To [customize styles](/introduction/getting-started/installation#css-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: require('xtendui/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtendui/src/tailwind-xtend.js
    xtend: theme => ({
      utilities: {
        core: {
          link: {
            // modify utility
          },
        },
      },
      components: {
        core: {
          link: {
            // modify core component
          },
        },
      },
    }),
  })
}
```

To **see the default values** see the source code of `node_modules/xtendui/src/tailwind-xtend.js`.

## Usage

Use this code to create a **link**.

You can use `.link` to style any element as a link.

<div class="table-scroll">

|                         | Syntax                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.link`                 | `link`              | Stile a tag with link            |

</div>

[[noteDefault]]
| Links `a` are automatically styled when they **don't have `[class]`**. To have custom styles use **tailwind classes**.

<demo>
  <demovanilla src="vanilla/components/core/link/usage">
  </demovanilla>
</demo>

Use [typography variant](/components/core/typography/content#variant) to style text color.

[[notePrimary]]
| `.text-default` and `.text-inverse` don't support `text-opacity`. Use tailwind colors instead when using `text-opacity`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Util                  | `.text-default`       | `text-default`                | `responsive hover`                | Default text and links colors            |
| Util                  | `.text-inverse`       | `text-inverse`                | `responsive hover`                | Inverse text and links colors            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/link/usage-inverse">
  </demovanilla>
</demo>
