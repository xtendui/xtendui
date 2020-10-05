---
type: "Components"
category: "Core"
parent: "Breadcrumbs"
title: "Content"
date: "2030-10-10"
---

## Metadata

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
  <demovanilla src="vanilla/components/core/breadcrumbs/title">
  </demovanilla>
</demo>
