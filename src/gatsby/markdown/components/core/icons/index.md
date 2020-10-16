---
type: "Components"
category: "Core"
parent: "Icons"
title: "Icons"
description: "Simple and extensible button styles."
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/installation#css-installation) instructions. To [customize styles](/introduction/getting-started/installation#css-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: require('xtendui/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtendui/src/tailwind-xtend.js
    xtend: theme => ({
      components: {
        core: {
          icons: {
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

Use this code to create **icons with svg**.

<demo>
  <demovanilla src="vanilla/components/core/icons/usage">
  </demovanilla>
</demo>

Use this code to create **icons with img**.

<demo>
  <demovanilla src="vanilla/components/core/icons/usage-img">
  </demovanilla>
</demo>

[[noteDefault]]
| Xtend UI icons used in this docs are from [Feather Icons](https://feathericons.com).

[[notePrimary]]
| Icons with img don't support [icons variant](/components/core/icons/content#variant)

Check subpage to [customize content](/components/core/icons/content).
