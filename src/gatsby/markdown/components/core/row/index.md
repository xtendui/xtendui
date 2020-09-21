---
type: "Components"
category: "Core"
parent: "Row"
title: "Row"
description: "Flex row to space any element with paddings, also spaces vertically."
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/setup#css-installation) instructions.

To customize this component in your `tailwind.config.js` file, as described in [css customization](/introduction/getting-started/setup#css-customization) instructions, use the keys like below.

```jsx
module.exports = {
  theme: require('xtend-library/src/tailwind-theme')({
    extend: {
      // xtend utilities and components in node_modules/xtend-library/src/tailwind-xtend.js
      xtend: theme => ({
        utilities: {
          row: {
            // modify utility
          },
        },
        components: {
          row: {
            // modify component
          },
        },
      }),
    }  
  })
}
```

## Usage

Use this markup to create a **row**.

<script type="text/plain" class="language-markup">
  <div class="row">
    <!-- content -->
  </div>
</script>

Then add and [style content](/components/core/row/content).

<demo>
  <demovanilla src="vanilla/components/core/row/usage">
  </demovanilla>
</demo>
