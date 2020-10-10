---
type: "Components"
category: "Core"
parent: "Group"
title: "Group"
description: "Css component to group up buttons and form inputs."
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/setup#css-installation) instructions. To [customize styles](/introduction/getting-started/setup#css-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: require('xtend-ui/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtend-ui/src/tailwind-xtend.js
    xtend: theme => ({
      components: {
        core: {
          group: {
            // modify component
          },
        },
      },
    }),
  })
}
```

To **see the default values** see the source code of `node_modules/xtend-ui/src/tailwind-xtend.js`.

## Usage

Use this code to create a **horizontal group**.

Use **tailwind classes** to assign styles (e.g.: border, border radius).

<demo>
  <demovanilla src="vanilla/components/core/group/usage">
  </demovanilla>
</demo>

Use this code to create a **vertical group** with `.flex-col`.

Use **tailwind classes** to assign styles (e.g.: border, border radius).

<demo>
  <demovanilla src="vanilla/components/core/group/usage-vertical">
  </demovanilla>
</demo>

[[notePrimary]]
| This demos uses [button](/components/core/button) and [input](/components/core/form). Visit the component page to import and customize.

Check subpage to [customize content](/components/core/group/content).
