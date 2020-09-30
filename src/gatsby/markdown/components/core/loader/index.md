---
type: "Components"
category: "Core"
parent: "Loader"
title: "Loader"
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
        loader: {
          // modify component
        },
      },
    }),
  })
}
```

## Usage

Use this markup to create a **spinner loader**.

<script type="text/plain" class="language-markup">
  <div class="loader">
    <div class="spinner">
      <svg viewBox="0 0 250 250">
        <circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628" class="stroke-current"/>
      </svg>
      <svg viewBox="0 0 250 250" preserveAspectRatio="xMinYMin meet">
        <circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628" class="stroke-current opacity-25"/>
      </svg>
    </div>
  </div>
</script>

Then add and [style content](/components/core/loader/content#spinner).

Use this markup to create a **filler loader**.

<script type="text/plain" class="language-markup">
  <span class="loader">
    <span class="filler">
      <span class="bg-current"></span>
      <span class="bg-current opacity-25"></span>
    </span>
  </span>
</script>

Then add and [style content](/components/core/loader/content#filler).
