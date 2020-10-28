---
type: "Components"
category: "Core"
parent: "Hero"
title: "Hero"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/addons/hero.css.js](https://github.com/minimit/xtendui/blob/master/src/addons/hero.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      hero: {
        utility: theme => ({
          // modify utility
        }),
      },
    },
  },
}
```

## Usage

Use **component classes** and **tailwind classes** to create a **hero**.

<demo>
  <demovanilla src="vanilla/components/core/hero/usage">
  </demovanilla>
</demo>

## Content

Use **tailwind classes** to customize content.

Use **component classes** to add hero shadow.

<div class="table-scroll">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.hero-shadow-top`                     | `hero-shadow-top`                | Hero shadow on top            |
| Component                  | `.hero-shadow-bottom`                     | `hero-shadow-bottom`                | Hero shadow on bottom            |
| Component                  | `.hero-shadow-left`                     | `hero-shadow-left`                | Hero shadow on left            |
| Component                  | `.hero-shadow-right`                     | `hero-shadow-right`                | Hero shadow on right            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/hero/content">
  </demovanilla>
</demo>

Check out [hero themes](/themes/by-type/hero) for advanced interactions.
