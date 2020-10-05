---
type: "Components"
category: "Core"
parent: "Sticky"
title: "Sticky"
description: "Sticky elements with complex interactions."
---

## Setup

#### Javascript

Follow the [javascript installation](/introduction/getting-started/setup#javascript-installation) instructions and **import the component javascript** file.

```jsx
import 'xtend-ui/src/core/sticky'
```

#### Css

Follow the [css installation](/introduction/getting-started/setup#css-installation) instructions. To [customize styles](/introduction/getting-started/setup#css-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: require('xtend-ui/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtend-ui/src/tailwind-xtend.js
    xtend: theme => ({
      utilities: {
        core: {
          sticky: {
            // modify utility
          },
        },
      },
      components: {
        core: {
          sticky: {
            // modify component
          },
        },
      },
    }),
  })
}
```

To **see the default values** see the source code of `node_modules/xtend-ui/src/tailwind-xtend.js`.

## Usage

Use this code to create a **sticky**.

@TODO

Check subpage to [customize interaction](/components/core/sticky/interaction).
