---
type: "Components"
category: "Core"
parent: "Button"
title: "Button"
description: "Simple and extensible button styles."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/btn.css.js](https://github.com/minimit/xtendui/blob/master/src/core/btn.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      btn: {
        component: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Usage

Use `.btn` to create a **button**.

<div class="table-overflow">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.btn`                     | `btn`                | Button styles            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/button/usage">
  </demovanilla>
</demo>

Check subpage to [customize content](/components/core/button/content).
