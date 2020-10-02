---
type: "Components"
category: "Addons"
parent: "Typography"
title: "Separator"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/setup#css-installation) instructions. To [customize styles](/introduction/getting-started/setup#css-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: require('xtend-library/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtend-library/src/tailwind-xtend.js
    xtend: theme => ({
      components: {
        addons: {
          separator: {
            // modify component
          },
        },
      },
    }),
  })
}
```

To **see the default values** see the source code of `node_modules/xtend-library/src/tailwind-xtend.js`.

## Usage

Use this markup to create a **separator**.

<script type="text/plain" class="language-markup">
  <span class="separator">
    <!-- content -->
  </span>
</script>

Use **component classes** to create a separator.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.separator-dash`                     | `separator-dash`                | Separator with dash            |
| Component                  | `.separator-slash`                     | `separator-slash`                | Separator with slash            |
| Component                  | `.separator-pipe`                     | `separator-pipe`                | Separator with pipe            |
| Component                  | `.separator-point`                     | `separator-point`                | Separator with point            |
| Component                  | `.separator-arrow`                     | `separator-arrow`                | Separator with arrow            |

</div>

<demo>
  <demovanilla src="vanilla/components/addons/separator/usage">
  </demovanilla>
</demo>

## Type

Use **tailwind classes** to assign styles (e.g.: margin, color).

For `<type>` values use `dash`, `slash`, `pipe`, `point` or `arrow`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.separator-<type>`                     | `separator-<type>`                | Separator content            |

</div>

<demo>
  <demovanilla src="vanilla/components/addons/separator/type">
  </demovanilla>
</demo>
