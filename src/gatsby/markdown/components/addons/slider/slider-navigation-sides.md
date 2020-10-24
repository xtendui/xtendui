---
type: "Components"
category: "Addons"
parent: "Slider"
title: "navigation-sides"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/addons/slider-navigation-sides.css.js](https://github.com/minimit/xtendui/blob/master/src/addons/slider-navigation-sides.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      'slider-navigation-sides': {
        component: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Usage

Use this code to create a **navigation sides**.

[[notePrimary]]
| This addon uses [mouse follow](/components/addons/animation/mouse-follow). Visit the component page to import and customize.

<demo>
  <demovanilla src="vanilla/components/addons/slider-navigation-sides">
  </demovanilla>
</demo>
