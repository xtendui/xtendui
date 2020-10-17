---
type: "Components"
category: "Core"
parent: "Typography"
title: "Typography"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/installation#css-installation) instructions. To [customize styles](/introduction/getting-started/installation#css-installation-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: {
    // xtend utilities and components in node_modules/xtendui/src/tailwind-xtend.js
    xtend: theme => ({
      utilities: {
        core: {
          typography: {
            // modify utility
          },
        },
      },
      components: {
        core: {
          typography: {
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

Check subpage to [customize content](/components/core/typography/content).
