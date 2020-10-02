---
type: "Components"
category: "Core"
parent: "Slider"
title: "Slider"
description: "Customizable sliders with custom animation and interaction."
---

## Setup

#### Javascript

Follow the [js installation](/introduction/getting-started/setup#js-installation) instructions and **import the component javascript** file.

```jsx
import { Xt } from 'xtend-library'
import 'xtend-library/src/core/slider'
```

#### Css

Follow the [css installation](/introduction/getting-started/setup#css-installation) instructions. To [customize styles](/introduction/getting-started/setup#css-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: require('xtend-library/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtend-library/src/tailwind-xtend.js
    xtend: theme => ({
      utilities: {
        core: {
          slider: {
            // modify utility
          },
        },
      },
      components: {
        core: {
          slider: {
            // modify component
          },
        },
      },
    }),
  })
}
```

To **see the default values** see the source code of `node_modules/xtend-library/src/tailwind-xtend.js`.

## Usage

Use this code to create a **slider**.

<demo>
  <demovanilla src="vanilla/components/core/slider/usage">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/slider/interaction) and [customize position](/components/core/slider/position).

[[notePrimary]]
| `slider-pagination[data-xt-pag].xt-ignore` is essential to the functioning of the slider, so if you don't want to show it add `.hidden`.
