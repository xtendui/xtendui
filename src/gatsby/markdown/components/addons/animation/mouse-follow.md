---
type: "Components"
category: "Addons"
parent: "Animation"
title: "mouse-follow"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/setup#css-installation) instructions.

To customize this component in your `tailwind.config.js` file, as described in [css customization](/introduction/getting-started/setup#css-customization) instructions, use the keys like below.

```jsx
module.exports = {
  theme: require('xtend-library/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtend-library/src/tailwind-xtend.js
    xtend: theme => ({
      components: {
        mousefollow: {
          // modify component
        },
      },
    }),
  })
}
```

#### Javascript

Follow the [js installation](/introduction/getting-started/setup#js-installation) instructions.

Import the component's **js** file.

```jsx
import 'xtend-library/src/addons/animation/mousefollow'
```
