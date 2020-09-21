---
type: "Components"
category: "Core"
parent: "Button"
title: "Button"
description: "Simple and extensible button styles."
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
        btn: {
          // modify component
        },
      },
    }),
  })
}
```

## Usage

Use this markup to create a **button**.

<script type="text/plain" class="language-markup">
  <button type="button" class="btn">
    <!-- content -->
  </button>
  
  <a href="#" class="btn">
    <!-- content -->
  </a>
  
  <a role="button" class="btn">
    <!-- content -->
  </a>
</script>

Then add and [style content](/components/core/button/content).

<demo>
  <demovanilla src="vanilla/components/core/button/usage">
  </demovanilla>
</demo>
