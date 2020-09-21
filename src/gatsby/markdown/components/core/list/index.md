---
type: "Components"
category: "Core"
parent: "List"
title: "List"
description: "Flex lists to space any element with margins, also spaces vertically."
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
          list: {
            // modify utility
          },
        },
        components: {
          list: {
            // modify component
          },
        },
      }),
    }  
  })
}
```

## Usage

Use this markup to create a **horizontal list**.

<script type="text/plain" class="language-markup">
  <nav class="list">
    <!-- content -->
  </nav>
</script>

Use this markup to create a **vertical list**.

<script type="text/plain" class="language-markup">
  <nav class="list-block">
    <!-- content -->
  </nav>
</script>

[[notePrimary]]
| You can space anything inside `.list`, it's like a [row](/components/core/row) but that spaces with **margins instead of paddings** and you don't use **tailwind width classes**.

Then add and [style content](/components/core/list/content).

<demo>
  <demovanilla src="vanilla/components/core/list/usage">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/usage-block">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/usage-nested">
  </demovanilla>
</demo>
