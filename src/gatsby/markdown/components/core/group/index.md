---
type: "Components"
category: "Core"
parent: "Group"
title: "Group"
description: "Css component to group up buttons and inputs. Can easily create toolbar and navigations."
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
          group: {
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

#### Horizontal

Use this code to create a **group horizontal**.

Use **tailwind classes** to assign styles (e.g.: border, border radius).

<demo>
  <demovanilla src="vanilla/components/core/group/usage">
  </demovanilla>
</demo>

#### Vertical

Use this code to create a **group vertical** with `.flex-col`.

Use **tailwind classes** to assign styles (e.g.: border, border radius).

<demo>
  <demovanilla src="vanilla/components/core/group/usage-vertical">
  </demovanilla>
</demo>

Check subpage to [customize content](/components/core/group/content).
