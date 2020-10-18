---
type: "Components"
category: "Core"
parent: "Icons"
title: "Icons"
description: "Simple and extensible button styles."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/icons.css.js](https://github.com/minimit/xtendui/blob/master/src/core/icons.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      icons: {
        components: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Usage

Use this code to create **icons with svg**.

<demo>
  <demovanilla src="vanilla/components/core/icons/usage">
  </demovanilla>
</demo>

Use this code to create **icons with img**.

<demo>
  <demovanilla src="vanilla/components/core/icons/usage-img">
  </demovanilla>
</demo>

[[noteDefault]]
| Xtend UI icons used in this docs are from [Feather Icons](https://feathericons.com).

[[notePrimary]]
| Icons with img don't support [icons variant](/components/core/icons/content#variant)

Check subpage to [customize content](/components/core/icons/content).
