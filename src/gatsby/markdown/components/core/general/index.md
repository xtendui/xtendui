---
type: "Components"
category: "Core"
parent: "General"
title: "General"
description: "General components and utils."
date: "2050-10-10"
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/setup#css-installation) instructions.

To customize this component in your `tailwind.config.js` file, as described in [css customization](/introduction/getting-started/setup#css-customization) instructions, use the keys like below.

```jsx
module.exports = {
  theme: require('xtend-library/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtend-library/src/tailwind-xtend.js
    xtend: theme => ({
      utilities: {
        core: {
          general: {
            // modify utility
          },
        },
      },
      components: {
        core: {
          general: {
            // modify component
          },
        },
      },
    }),
  })
}
```
