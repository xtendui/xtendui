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
        components: theme => ({
          // modify components
        }),
        utilities: theme => ({
          // modify utilities
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
