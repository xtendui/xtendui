---
type: "Components"
category: "Core"
parent: "Badge"
title: "Badge"
description: "Badge component for showing very short messages."
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/setup#css-installation) instructions. To [customize styles](/introduction/getting-started/setup#css-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: require('xtend-ui/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtend-ui/src/tailwind-xtend.js
    xtend: theme => ({
      components: {
        core: {
          badge: {
            // modify core component
          },
        },
      },
    }),
  })
}
```

To **see the default values** see the source code of `node_modules/xtend-ui/src/tailwind-xtend.js`.

## Usage

Use this code to create a **badge**.

<demo>
  <demovanilla src="vanilla/components/core/badge/usage">
  </demovanilla>
</demo>

Check subpage to [customize content](/components/core/badge/content).
