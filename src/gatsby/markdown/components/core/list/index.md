---
type: "Components"
category: "Core"
parent: "List"
title: "List"
description: "Flex lists to space any element with margins, also spaces vertically."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/list.css.js](https://github.com/minimit/xtendui/blob/master/src/core/list.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      list: {
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

#### Horizontal

Use this code to create a **list horizontal**.

<demo>
  <demovanilla src="vanilla/components/core/list/usage">
  </demovanilla>
</demo>

#### Vertical

Use this code to create a **list vertical** with `.flex-col`.

<demo>
  <demovanilla src="vanilla/components/core/list/usage-vertical">
  </demovanilla>
</demo>

[[notePrimary]]
| You can space anything inside `.list`. If you need to use **tailwind width classes** use [row](/components/core/row).

Check subpage to [customize content](/components/core/list/content).
