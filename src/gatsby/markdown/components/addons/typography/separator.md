---
type: "Components"
category: "Addons"
parent: "Typography"
title: "Separator"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/addons/separator.css.js](https://github.com/minimit/xtendui/blob/master/src/addons/separator.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      separator: {
        component: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Usage

Use this code to create a **separator**.

<demo>
  <demovanilla src="vanilla/components/addons/separator">
  </demovanilla>
</demo>

## Type

Use **tailwind classes** to assign styles (e.g.: [margin](https://tailwindcss.com/docs/margin), [text-color](https://tailwindcss.com/docs/text-color)).

For `<type>` values use `dash`, `slash`, `pipe`, `point` or `arrow`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.separator-<type>`                     | `separator-<type>`                | Separator content            |

</div>

<demo>
  <demovanilla src="vanilla/components/addons/separator-type">
  </demovanilla>
</demo>
