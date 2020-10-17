---
type: "Components"
category: "Core"
parent: "Loader"
title: "Loader"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/installation#css-installation) instructions. To [customize styles](/introduction/getting-started/installation#css-installation-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: {
    // xtend utilities and components in node_modules/xtendui/src/tailwind-xtend.js
    xtendui: theme => ({
      components: {
        core: {
          loader: {
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

Use this code to create a **loader spinner**.

<demo>
  <demovanilla src="vanilla/components/core/loader/spinner">
  </demovanilla>
</demo>

Use this code to create a **loader filler**.

<demo>
  <demovanilla src="vanilla/components/core/loader/filler-x">
  </demovanilla>
</demo>

Check subpage to [customize content](/components/core/loader/content#filler).
