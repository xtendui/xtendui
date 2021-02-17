---
type: "Components"
category: "Core"
parent: "Button"
title: "Button"
description: "Simple and extensible button styles."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/button.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/button.css.js) for default values.

```jsx
module.exports = {
  theme:{
    extend: {
      xtendui: {
        button: {
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

Use `.xt-button` to create a **button**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-button`                     | `xt-button`                | Button styles            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/button/usage">
  </demovanilla>
</demo>

Check subpage to [customize content](/components/core/button/content).
