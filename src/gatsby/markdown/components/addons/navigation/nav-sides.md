---
type: "Components"
category: "Addons"
parent: "Navigation"
title: "nav-sides"
description: "Arrow navigation on sides that appears and follows the mouse."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/addons/nav-sides.css.js](https://github.com/minimit/xtendui/blob/master/src/addons/nav-sides.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      'nav-sides': {
        component: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Usage

[[notePrimary]]
| This addon uses [mouse follow](/components/addons/animation/mouse-follow). Visit the component page to import javascript and customize.

#### Toggle

Use this code to create a **navigation sides** on toggle. Position relative to closest element with `.relative`.

<demo>
  <demovanilla src="vanilla/components/addons/navigation/nav-sides-toggle">
  </demovanilla>
</demo>

#### Slider

Use this code to create a **navigation sides** on slider.

<demo>
  <demovanilla src="vanilla/components/addons/navigation/nav-sides-slider">
  </demovanilla>
</demo>
