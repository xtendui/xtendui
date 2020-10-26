---
type: "Components"
category: "Addons"
parent: "Navigation"
title: "nav-sides"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
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

#### Toggle

Use this code to create a **navigation sides** on toggle. Position relative to closest element with `.relative`.

[[notePrimary]]
| This addon uses [mouse follow](/components/addons/animation/mouse-follow). Visit the component page to import and customize.

<demo>
  <demovanilla src="vanilla/components/addons/navigation/nav-sides-toggle">
  </demovanilla>
</demo>

#### Slider

Use this code to create a **navigation sides** on slider.

[[notePrimary]]
| This addon uses [mouse follow](/components/addons/animation/mouse-follow). Visit the component page to import and customize.

<demo>
  <demovanilla src="vanilla/components/addons/navigation/nav-sides-slider">
  </demovanilla>
</demo>
