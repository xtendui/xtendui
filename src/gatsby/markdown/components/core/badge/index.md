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
    xtendui: {
      badge: {
        component: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Usage

Use `.badge` to create a **badge**.

<div class="table-overflow">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.badge`                     | `badge`                | Badge styles            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/badge/usage">
  </demovanilla>
</demo>

Check subpage to [customize content](/components/core/badge/content).
