---
type: "Components"
category: "Core"
parent: "Row"
title: "Row"
description: "Flex component to space columns with paddings, also spaces vertically."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/row.css.js](https://github.com/minimit/xtendui/blob/master/src/core/row.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      row: {
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

Use this code to create a **row**.

<demo>
  <demovanilla src="vanilla/components/core/row/usage">
  </demovanilla>
</demo>

[[notePrimary]]
| You should always use **tailwind width classes** inside `.row`. Otherwise you can space contents with [list](/components/core/list).

Check subpage to [customize content](/components/core/row/content).
