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
        component: theme => ({
          // modify components
        }),
        utility: theme => ({
          // modify utilities
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

You can add **card content** classes directly to `.card`

<demo>
  <demovanilla src="vanilla/components/core/card/usage-block">
  </demovanilla>
</demo>

Check subpage to [customize content](/components/core/card/content).
