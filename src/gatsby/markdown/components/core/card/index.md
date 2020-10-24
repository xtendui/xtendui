---
type: "Components"
category: "Core"
parent: "Card"
title: "Card"
description: "Generic component to display content in a box."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/card.css.js](https://github.com/minimit/xtendui/blob/master/src/core/card.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      card: {
        variants: [],
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

Use this code to create a **card**.

<demo>
  <demovanilla src="vanilla/components/core/card/usage">
  </demovanilla>
</demo>

You can also **stack** card content.

<demo>
  <demovanilla src="vanilla/components/core/card/usage-stack">
  </demovanilla>
</demo>

Check subpage to [customize content](/components/core/card/content).
