---
type: "Components"
category: "Addons"
parent: "Layout"
title: "Breadcrumbs"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Usage

Use **tailwind classes** to create breadcrumbs.

[[noteDefault]]
| This addon uses [separator](/components/addons/separator). Visit the component's webpages to customize them.

<demo>
  <demovanilla src="vanilla/components/addons/layout/breadcrumbs-usage">
  </demovanilla>
</demo>

Use markup to add **json-ld** metadata to **breadcrumb**.

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
