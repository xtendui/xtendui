---
type: "Components"
category: "Core"
parent: "Structure"
title: "Structure"
description: "Structure components and utilities."
date: "2050-10-10"
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/structure.css.js](https://github.com/minimit/xtendui/blob/master/src/core/structure.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      structure: {
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

Check subpage to [use css](/components/core/structure/css) or [use javascript](/components/core/structure/javascript).
