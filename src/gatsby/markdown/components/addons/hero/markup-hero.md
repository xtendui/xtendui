---
type: "Components"
category: "Addons"
parent: "Hero"
title: "Markup Hero"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/addons/hero.css.js](https://github.com/minimit/xtendui/blob/master/src/addons/hero.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      hero: {
        component: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Usage

Use **component classes** to create a mouse follow.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.mouse-follow`                     | `mouse-follow`                | Styles for mouse follow            |

</div>

[[notePrimary]]
| This addon uses [loader](/components/core/loader). Visit the component page to import and customize.

<demo>
  <demovanilla src="vanilla/components/addons/mouse-follow">
  </demovanilla>
</demo>
