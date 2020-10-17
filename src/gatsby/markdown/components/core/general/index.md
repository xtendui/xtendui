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

Follow the [css installation](/introduction/getting-started/installation#css-installation) instructions. To [customize styles](/introduction/getting-started/installation#css-installation-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: {
    // xtend utilities and components in node_modules/xtendui/src/tailwind-xtend.js
    xtendui: theme => ({
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
            // modify core component
          },
        },
      },
    }),
  },
}
```

To **see the default values** see the source code of `node_modules/xtendui/src/tailwind-xtend.js`.

## Usage

Check subpage to [use css](/components/core/general/css) or [use javascript](/components/core/general/javascript).
