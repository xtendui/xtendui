---
type: "Components"
category: "Core"
parent: "Hero"
title: "Hero"
description: "Hero markup component for pages introductions or banners."
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

## Direction

Use **tailwind classes** to customize content direction.

<demo>
  <demovanilla src="vanilla/components/core/hero/direction">
  </demovanilla>
</demo>

## Shadow

Use **component classes** to add shadow.

<div class="table-scroll">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.hero-shadow-top`                     | `hero-shadow-top`                | Hero shadow on top            |
| Component                  | `.hero-shadow-bottom`                     | `hero-shadow-bottom`                | Hero shadow on bottom            |
| Component                  | `.hero-shadow-left`                     | `hero-shadow-left`                | Hero shadow on left            |
| Component                  | `.hero-shadow-right`                     | `hero-shadow-right`                | Hero shadow on right            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/hero/shadow">
  </demovanilla>
</demo>
