---
type: "Components"
category: "Extensions"
parent: "Separator"
title: "Separator"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/setup#css-installation) instructions.

To customize this component in your `tailwind.config.js` file, as described in [css customization](/introduction/getting-started/setup#css-customization) instructions, use the keys like below.

```jsx
module.exports = {
  theme: require('xtend-library/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtend-library/src/tailwind-xtend.js
    xtend: theme => ({
      components: {
        separator: {
          // modify component
        },
      },
    }),
  })
}
```

## Usage

Use this markup to create a **separator**.

<script type="text/plain" class="language-markup">
  <span class="separator">
    <!-- content -->
  </span>
</script>

Then add and [style content](/components/extensions/separator/content).

<demo>
  <demovanilla src="vanilla/components/extensions/separator/usage">
  </demovanilla>
</demo>
