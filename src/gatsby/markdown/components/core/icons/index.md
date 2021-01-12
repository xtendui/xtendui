---
type: "Components"
category: "Core"
parent: "Icons"
title: "Icons"
description: "Everything you need to stylize svg icons."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/icons.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/icons.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      icons: {
        component: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Usage

Use `.icon` to create a **icon**.

<div class="table-overflow">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.icon`                     | `icon`                | Icon styles            |

</div>

Use this code to create **icons with svg**.

<demo>
  <demovanilla src="vanilla/components/core/icons/usage">
  </demovanilla>
</demo>

Use this code to create **icons with img**.

<demo>
  <demovanilla src="vanilla/components/core/icons/usage-img">
  </demovanilla>
</demo>

[[notePrimary]]
| Icons with img don't support [icons variant](/components/core/icons/content#variant)

[[noteDefault]]
| Icons from [Feather Icons](https://feathericons.com).

Check subpage to [customize content](/components/core/icons/content).
