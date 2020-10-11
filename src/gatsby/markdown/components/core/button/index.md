---
type: "Components"
category: "Core"
parent: "Button"
title: "Button"
description: "Simple and extensible button styles."
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
          btn: {
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

Use this code to create a **button**.

<demo>
  <demovanilla src="vanilla/components/core/button/usage">
  </demovanilla>
</demo>

Check subpage to [customize content](/components/core/button/content).
