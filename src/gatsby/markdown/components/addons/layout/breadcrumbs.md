---
type: "Components"
category: "Addons"
parent: "Layout"
title: "Breadcrumbs"
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
        breadcrumbs: {
          // modify component
        },
      },
    }),
  })
}
```

## Usage

Use **tailwind classes** to create breadcrumbs.

[[notePrimary]]
| This addon uses [separator](/components/extensions/separator) components. Visit the component's webpages to customize them.

<demo>
  <demovanilla src="vanilla/components/addons/layout/breadcrumbs-usage">
  </demovanilla>
</demo>

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

## Title

Use **tailwind classes** to add title and background.

<demo>
  <demovanilla src="vanilla/components/addons/layout/background-title">
  </demovanilla>
</demo>
