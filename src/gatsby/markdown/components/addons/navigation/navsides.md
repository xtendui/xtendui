---
type: "Components"
category: "Addons"
parent: "Navigation"
title: "Nav Sides"
description: "Arrow navigation on sides that appears and follows the mouse."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/addons/navsides.css.js](https://github.com/minimit/xtendui/blob/master/src/addons/navsides.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      'navsides': {
        component: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Usage

[[noteDefault]]
| This addon uses [mouse follow](/components/addons/animation/mousefollow) see documentation to **import javascript** and **customize**.

#### Toggle

Use this code to create a **navigation sides** on toggle. Position relative to closest element with `.relative`.

<demo>
  <demovanilla src="vanilla/components/addons/navigation/navsides-toggle">
  </demovanilla>
</demo>

#### Slider

Use this code to create a **navigation sides** on slider.

<demo>
  <demovanilla src="vanilla/components/addons/navigation/navsides-slider">
  </demovanilla>
</demo>
