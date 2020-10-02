---
type: "Components"
category: "Core"
parent: "Card"
title: "Card"
description: "Generic component to display content in a box."
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
      utilities: {
        core: {
          card: {
            // modify utility
          },
        },
      },
      components: {
        core: {
          card: {
            // modify component
          },
        },
      },
    }),
  })
}
```

## Usage

Use markup to create a **card**.

<script type="text/plain" class="language-markup">
  <div class="card">
    <div class="card-block">
      <!-- content -->
    </div>
  </div>
</script>

Or add `.card-block` classes directly to `.card`

<script type="text/plain" class="language-markup">
  <div class="card card-block">
    <!-- content -->
  </div>
</script>

Then add and [style content](/components/core/card/content).

<demo>
  <demovanilla src="vanilla/components/core/card/usage">
  </demovanilla>
</demo>
