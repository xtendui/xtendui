---
type: "Components"
category: "Core"
parent: "Link"
title: "Link"
description: "Default link styles for html links, buttons and divs."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/link.css.js](https://github.com/minimit/xtendui/blob/master/src/core/link.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      link: {
        utility: theme => ({
          // modify utilities
        }),
        component: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

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

## Variant

Use **component utility** `.links-default` and `.links-inverse` on **parent elements** to style **child links**.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.links-default`       | `links-default`                | `responsive`                | Default links colors            |
| Utility                  | `.links-inverse`       | `links-inverse`                | `responsive`                | Inverse links colors            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/link/variant-inverse">
  </demovanilla>
</demo>
