---
type: "Components"
category: "Core"
parent: "Media"
title: "Media"
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
        core: {
          media: {
            // modify component
          },
        },
      },
    }),
  })
}
```

## Usage

Use markup to create a **media**.

<script type="text/plain" class="language-markup">
  <div class="media-container" style="padding-bottom: 37.5%;">
    <div class="media-inner">
      <img class="media" src="/img.jpg" alt="" loading="lazy"/>
    </div>
  </div>
</script>

Then add and [style content](/components/core/media/content).

<demo>
  <demovanilla src="vanilla/components/core/media/usage">
  </demovanilla>
</demo>
