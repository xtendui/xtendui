---
type: "Components"
category: "Core"
parent: "Layout"
title: "Layout"
description: "Layout components and utilities."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/layout.css.js](https://github.com/minimit/xtendui/blob/master/src/core/layout.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      layout: {
        variant: [],
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

Check subpage to [use css](/components/core/layout/css) or [use javascript](/components/core/layout/javascript).
