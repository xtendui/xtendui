---
type: "Components"
category: "Core"
parent: "Link"
title: "Link"
description: "Default link styles for html links, buttons and divs."
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/setup#css-installation) instructions. To [customize styles](/introduction/getting-started/setup#css-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: require('xtend-library/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtend-library/src/tailwind-xtend.js
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
            // modify component
          },
        },
      },
    }),
  })
}
```

To **see the default values** see the source code of `node_modules/xtend-library/src/tailwind-xtend.js`.

## Usage

Use this code to create a **link**.

<demo>
  <demovanilla src="vanilla/components/core/link/usage">
  </demovanilla>
</demo>

Inside `.text-inverse` links are styled accordingly.

<demo>
  <demovanilla src="vanilla/components/core/link/usage-inverse">
  </demovanilla>
</demo>

You can use `.link` to style any element as a link.

<div class="table-scroll">

|                         | Syntax                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.link`                 | `link`              | Stile a tag with link            |

</div>

[[noteDefault]]
| Links `a` are automatically styled when they **don't have `[class]`**. To have custom styles use **tailwind classes**.

