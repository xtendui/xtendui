---
type: "Components"
category: "Core"
parent: "Form"
title: "Form"
description: "Form styles with multiple layouts, custom checkbox/radio, and more."
---

## Setup

#### Javascript

Follow the [javascript installation](/introduction/getting-started/installation#javascript-installation) instructions and **import the component javascript** file.

```jsx
import 'xtendui/src/core/form'
```

#### Css

Follow the [css installation](/introduction/getting-started/installation#css-installation) instructions. To [customize styles](/introduction/getting-started/installation#css-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: require('xtendui/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtendui/src/tailwind-xtend.js
    xtend: theme => ({
      components: {
        core: {
          form: {
            // modify core component
          },
        },
      },
    }),
  })
}
```

To **see the default values** see the source code of `node_modules/xtendui/src/tailwind-xtend.js`.

## Usage

Use this code to create a **form items**.

<demo>
  <demovanilla src="vanilla/components/core/form/usage">
  </demovanilla>
</demo>

Check subpage to [customize content](/components/core/form/content) and [customize layout](/components/core/form/layout).
