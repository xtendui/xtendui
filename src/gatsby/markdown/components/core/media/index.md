---
type: "Components"
category: "Core"
parent: "Media"
title: "Media"
description: "Wrapper to have media with aspect ratio, also on page load, useful also for advanced animations."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/media.css.js](https://github.com/minimit/xtendui/blob/master/src/core/media.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      media: {
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

Use this code to create a **media**.

<demo>
  <demovanilla src="vanilla/components/core/media/usage">
  </demovanilla>
</demo>

Check subpage to [customize content](/components/core/media/content).
