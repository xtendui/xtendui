---
type: "Components"
category: "Core"
parent: "General"
title: "General"
description: "Layout components and utilities."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/general.css.js](https://github.com/minimit/xtendui/blob/master/src/core/general.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      general: {
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

Check subpage to [use css](/components/core/general/css) or [use javascript](/components/core/general/javascript).
