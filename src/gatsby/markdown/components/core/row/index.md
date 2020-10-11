---
type: "Components"
category: "Core"
parent: "Row"
title: "Row"
description: "Flex row to space any element with paddings, also spaces vertically."
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/setup#css-installation) instructions. To [customize styles](/introduction/getting-started/setup#css-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: require('xtend-ui/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtend-ui/src/tailwind-xtend.js
    xtend: theme => ({
      utilities: {
        core: {
          row: {
            // modify utility
          },
        },
      },
      components: {
        core: {
          row: {
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

Use this code to create a **row**.

<demo>
  <demovanilla src="vanilla/components/core/row/usage">
  </demovanilla>
</demo>

[[notePrimary]]
| You should always use **tailwind width classes** inside `.row`. Otherwise you can space contents with [list](/components/core/list).

Check subpage to [customize content](/components/core/row/content).
