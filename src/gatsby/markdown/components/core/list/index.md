---
type: "Components"
category: "Core"
parent: "List"
title: "List"
description: "Flex lists to space any element with margins, also spaces vertically."
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/setup#css-installation) instructions. To [customize styles](/introduction/getting-started/setup#css-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: require('xtendui/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtendui/src/tailwind-xtend.js
    xtend: theme => ({
      utilities: {
        core: {
          list: {
            // modify utility
          },
        },
      },
      components: {
        core: {
          list: {
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

#### Horizontal

Use this code to create a **list horizontal**.

<demo>
  <demovanilla src="vanilla/components/core/list/usage">
  </demovanilla>
</demo>

#### Vertical

Use this code to create a **list vertical** with `.flex-col`.

<demo>
  <demovanilla src="vanilla/components/core/list/usage-vertical">
  </demovanilla>
</demo>

[[notePrimary]]
| You can space anything inside `.list`. If you need to use **tailwind width classes** use [row](/components/core/row).

Check subpage to [customize content](/components/core/list/content).
