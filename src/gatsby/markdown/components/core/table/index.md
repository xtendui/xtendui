---
type: "Components"
category: "Core"
parent: "Table"
title: "Table"
description: "Base styles for all tables overridable with tailwind classes."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/table.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/list.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      table: {
        component: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Usage

Use `.table` to create a **table**.

<div class="table-overflow">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.table`                     | `table`                | Table styles            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/table/usage">
  </demovanilla>
</demo>

Use **tailwind classes** to assign [table-layout](https://tailwindcss.com/docs/table-layout).

<demo>
  <demovanilla src="vanilla/components/core/table/usage-fixed">
  </demovanilla>
</demo>

Check subpage to [customize content](/components/core/table/content).
