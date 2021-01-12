---
type: "Components"
category: "Core"
parent: "List"
title: "List"
description: "Flex component to space any element with margins, also spaces vertically."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/list.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/list.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      list: {
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

Use `.list` to create a **list**.

[[notePrimary]]
| For aria purpose use `<nav></nav>`.

<div class="table-overflow">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.list`                     | `list`                | List styles            |

</div>

#### Horizontal

Use this code to create a **list horizontal**.

<demo>
  <demovanilla src="vanilla/components/core/list/usage">
  </demovanilla>
</demo>

Check subpage to [customize content](/components/core/list/content).

#### Vertical

Use this code to create a **list vertical** with `.flex-col`.

<demo>
  <demovanilla src="vanilla/components/core/list/usage-vertical">
  </demovanilla>
</demo>

[[notePrimary]]
| You can space anything inside `.list`. If you need to use **tailwind width classes** use [row](/components/core/row).

Check subpage to [customize content](/components/core/list/content).
