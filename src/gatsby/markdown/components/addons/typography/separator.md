---
type: "Components"
category: "Addons"
parent: "Typography"
title: "Separator"
description: "Separator to be used in text content"
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/addons/separator.css.js](https://github.com/minimit/xtendui/blob/beta/src/addons/separator.css.js) for default values.

```jsx
module.exports = {
  theme:{
    extend: {
      xtendui: {
        separator: {
          component: theme => ({
            // modify components
          }),
        },
      },
    },
  },
}
```

## Usage

Use this code to create a **separator**.

<demo>
  <demovanilla src="vanilla/components/addons/typography/separator">
  </demovanilla>
</demo>

## Type

Use **tailwind classes** to assign styles (e.g. [margin](https://tailwindcss.com/docs/margin), [text-color](https://tailwindcss.com/docs/text-color)).

For `<type>` values use `dash`, `slash`, `pipe`, `point` or `arrow`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-separator-<type>`                     | `separator-<type>`                | Separator content            |

</div>

<demo>
  <demovanilla src="vanilla/components/addons/typography/separator-type">
  </demovanilla>
</demo>
