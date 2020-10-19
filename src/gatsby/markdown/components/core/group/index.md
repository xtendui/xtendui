---
type: "Components"
category: "Core"
parent: "Group"
title: "Group"
description: "Css component to group up buttons and inputs. Can easily create toolbar and navigations."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/group.css.js](https://github.com/minimit/xtendui/blob/master/src/core/group.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      group: {
        component: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Usage

#### Horizontal

Use this code to create a **group horizontal**.

Use **tailwind classes** to assign styles (e.g. [border-color](https://tailwindcss.com/docs/border-color), [border-radius](https://tailwindcss.com/docs/border-radius)).

<demo>
  <demovanilla src="vanilla/components/core/group/usage">
  </demovanilla>
</demo>

#### Vertical

Use this code to create a **group vertical** with `.flex-col`.

Use **tailwind classes** to assign styles (e.g. [border-color](https://tailwindcss.com/docs/border-color), [border-radius](https://tailwindcss.com/docs/border-radius)).

<demo>
  <demovanilla src="vanilla/components/core/group/usage-vertical">
  </demovanilla>
</demo>

Check subpage to [customize content](/components/core/group/content).
