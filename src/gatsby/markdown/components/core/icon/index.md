---
type: "Components"
category: "Core"
parent: "Icon"
title: "Icon"
description: "Everything you need to stylize svg icons."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/icon.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/icon.css.js) for default values.

```jsx
module.exports = {
  theme:{
    extend: {
      xtendui: {
        icons: {
          utility: theme => ({
            // modify utilities
          }),
        },
      },
    },
  },
}
```

## Usage

Use `.icon` to create a **icon**.

<div class="overflow-sub overflow-y-hidden overflow-x-scroll my-4 mt-fc mb-lc w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.icon`                     | `icon`                | `responsive`                | Icon styles            |

</div>

Use this code to create **icons with svg**.

<demo>
  <demovanilla src="vanilla/components/core/icon/usage">
  </demovanilla>
</demo>

Use this code to create **icons with img**.

<demo>
  <demovanilla src="vanilla/components/core/icon/usage-img">
  </demovanilla>
</demo>

[[notePrimary]]
| Icons with img don't support [icons variant](/components/core/icon/content#variant)

[[noteDefault]]
| Icons from [Feather Icons](https://feathericons.com).

Check subpage to [customize content](/components/core/icon/content).