---
type: "Components"
category: "Core"
parent: "Card"
title: "Card"
description: "Generic component to display content in a box."
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/installation#css-installation) instructions. To [customize styles](/introduction/getting-started/installation#css-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: require('xtendui/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtendui/src/tailwind-xtend.js
    xtend: theme => ({
      utilities: {
        core: {
          card: {
            // modify utility
          },
        },
      },
      components: {
        core: {
          card: {
            // modify core component
          },
        },
      },
    }),
  })
}
```

To **see the default values** see the source code of `node_modules/xtendui/src/tailwind-xtend.js`.

## Usage

Use this code to create a **card**.

<demo>
  <demovanilla src="vanilla/components/core/card/usage">
  </demovanilla>
</demo>

You can add `.card-block` classes directly to `.card`

<demo>
  <demovanilla src="vanilla/components/core/card/usage-block">
  </demovanilla>
</demo>

Check subpage to [customize content](/components/core/card/content).
