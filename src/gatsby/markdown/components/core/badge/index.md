---
type: "Components"
category: "Core"
parent: "Badge"
title: "Badge"
description: "Component for showing short and relevant tags."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/badge.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/badge.css.js) for default values.

```jsx
module.exports = {
  theme:{
    extend: {
      xtendui: {
        badge: {
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

Use `.xt-badge` to create a **badge**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-badge`                     | `badge`                | Badge styles            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/badge/usage">
  </demovanilla>
</demo>

Check subpage to [customize content](/components/core/badge/content).
