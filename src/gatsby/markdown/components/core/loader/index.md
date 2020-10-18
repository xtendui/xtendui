---
type: "Components"
category: "Core"
parent: "Loader"
title: "Loader"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/loader.css.js](https://github.com/minimit/xtendui/blob/master/src/core/loader.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      loader: {
        component: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

To **see the default values** see the source code of `node_modules/xtendui/src/tailwind-xtend.js`.

## Usage

Use this code to create a **loader spinner**.

<demo>
  <demovanilla src="vanilla/components/core/loader/spinner">
  </demovanilla>
</demo>

Use this code to create a **loader filler**.

<demo>
  <demovanilla src="vanilla/components/core/loader/filler-x">
  </demovanilla>
</demo>

Check subpage to [customize content](/components/core/loader/content#filler).
