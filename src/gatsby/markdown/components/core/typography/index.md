---
type: "Components"
category: "Core"
parent: "Typography"
title: "Typography"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/typography.css.js](https://github.com/minimit/xtendui/blob/master/src/core/typography.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      typography: {
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

Check subpage to [customize content](/components/core/typography/content).
