---
type: "Components"
category: "Addons"
parent: "Slider"
title: "navigation-sides"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/installation#css-installation) instructions. To [customize styles](/introduction/getting-started/installation#css-installation-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: {
    // xtend utilities and components in node_modules/xtendui/src/tailwind-xtend.js
    xtend: theme => ({
      components: {
        addons: {
          sliderNavigationSides: {
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

Use this code to create a **navigation sides**.

[[notePrimary]]
| This addon uses [mouse follow](/components/addons/general/mouse-follow). Visit the component page to import and customize.

<demo>
  <demovanilla src="vanilla/components/addons/slider-navigation-sides">
  </demovanilla>
</demo>
