---
type: "Components"
category: "Core"
parent: "Badge"
title: "Badge"
description: "Badge component for showing very short messages."
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
        core: {
          badge: {
            // modify component
          },
        },
      },
    }),
  })
}
```
## Usage

Use this markup to create a **badge**.

<script type="text/plain" class="language-markup">
  <div class="badge">
    <!-- content -->
  </div>
</script>

Then add and [style content](/components/core/badge/content).

<demo>
  <demovanilla src="vanilla/components/core/badge/usage">
  </demovanilla>
</demo>
