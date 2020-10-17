---
type: "Components"
category: "Core"
parent: "Slider"
title: "Slider"
description: "Customizable sliders with custom animation and interaction."
---

## Setup

#### Javascript

Follow the [javascript installation](/introduction/getting-started/installation#javascript-installation) instructions and **import the component javascript** file.

```jsx
import 'xtendui/src/core/slider'
```

#### Css

Follow the [css installation](/introduction/getting-started/installation#css-installation) instructions. To [customize styles](/introduction/getting-started/installation#css-installation-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: {
    // xtend utilities and components in node_modules/xtendui/src/tailwind-xtend.js
    xtend: theme => ({
      utilities: { // highlight-line
        core: {
          slider: {
            // modify utility
          },
        },
      },
      components: {
        core: {
          slider: {
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

Use this code to create a **slider**.

[[notePrimary]]
| `[data-xt-pag].xt-ignore` is essential to the functioning of the slider, but you can hide it using the class `.hidden`.

<demo>
  <demovanilla src="vanilla/components/core/slider/usage">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/slider/interaction) and [customize position](/components/core/slider/position).
