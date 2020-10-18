---
type: "Components"
category: "Core"
parent: "Badge"
title: "Badge"
description: "Badge component for showing very short messages."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/badge.css.js](https://github.com/minimit/xtendui/blob/master/src/core/badge.css.js) for default values.

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

Use this code to create a **badge**.

<demo>
  <demovanilla src="vanilla/components/core/badge/usage">
  </demovanilla>
</demo>

Check subpage to [customize content](/components/core/badge/content).
