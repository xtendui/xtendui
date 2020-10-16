---
type: "Components"
category: "Addons"
parent: "Group"
title: "number"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Setup

#### Javascript

Follow the [javascript installation](/introduction/getting-started/installation#javascript-installation) instructions and **import the component javascript** file.

```jsx
import 'xtendui/src/addons/group-number'
```

#### Css

Follow the [css installation](/introduction/getting-started/installation#css-installation) instructions. To [customize styles](/introduction/getting-started/installation#css-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: require('xtendui/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtendui/src/tailwind-xtend.js
    xtend: theme => ({
      components: {
        addons: {
          groupNumber: {
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

Use this code to create a **group number**.

<demo>
  <demovanilla src="vanilla/components/addons/group-number">
  </demovanilla>
</demo>
