---
type: "Components"
category: "Extensions"
parent: "Breadcrumbs"
title: "Breadcrumbs"
description: "Dynamic breadcrumbs that looks awesome in all responsive breakpoints."
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
        breadcrumbs: {
          // modify component
        },
      },
    }),
  })
}
```

## Usage

Use this markup to create a **breadcrumb**.

<script type="text/plain" class="language-markup">
  <div class="breadcrumbs">
    <div class="container">

      <nav class="breadcrumbs-list">
        <a href="#" class="btn">
          <!-- content -->
        </a>
        <span class="separator"></span>
        <a href="#" class="btn">
          <!-- content -->
        </a>
        <span class="separator"></span>
        <div class="btn">
          <!-- content -->
        </div>
      </nav>
      
    </div>
  </div>
</script>

Use this markup to add **json-ld** metadata to **breadcrumb**.

```html
<script type="application/ld+json">
  {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
          {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "#"
          },
          {
              "@type": "ListItem",
              "position": 2,
              "name": "Lorem ipsum dolor sit amet",
              "item": "#"
          },
          {
              "@type": "ListItem",
              "position": 3,
              "name": "Lorem ipsum"
          }
      ]
  }
</script>
```

Then add and [style content](/components/extensions/breadcrumbs/content).

[[noteDefault]]
| To customize separator follow [separator component](/components/extensions/separator).

<demo>
  <demovanilla src="vanilla/components/extensions/breadcrumbs/usage">
  </demovanilla>
</demo>
