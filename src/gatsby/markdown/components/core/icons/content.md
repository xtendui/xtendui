---
type: "Components"
category: "Core"
parent: "Icons"
title: "Content"
date: "2030-10-10"
---

## Variant

Use **tailwind classes** to assign variant (e.g. [text-color](https://tailwindcss.com/docs/text-color), [opacity](https://tailwindcss.com/docs/opacity)).


[[notePrimary]]
| Svg needs `fill: currentColor` or `stroke: currentColor` to have parent text color.

<demo>
  <demovanilla src="vanilla/components/core/icons/variant">
  </demovanilla>
</demo>

Use **tailwind classes** to assign styles (e.g. [text-color](https://tailwindcss.com/docs/text-color), [text-opacity](https://tailwindcss.com/docs/text-opacity)).

Text styles on **parent elements** are applied when **inerithed**.

<demo>
  <demovanilla src="vanilla/components/core/icons/variant-inverse">
  </demovanilla>
</demo>

## Size

Use **component classes** to assign size. You can add **additional size** for example `.icon-xs`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |
| Component                  | `.icon-sm`       | `icon-sm`                | Size small            |
| Component                  | `.icon-md`       | `icon-md`                | Size medium            |
| Component                  | `.icon-lg`       | `icon-lg`                | Size large            |

</div>

[[noteDefault]]
| **Size bigger** than `1em` **has negative margin** to not enlarge the parent element (e.g. button).

<demo>
  <demovanilla src="vanilla/components/core/icons/size">
  </demovanilla>
</demo>

Otherwise use **tailwind classes** to assign size (e.g. [font-size](https://tailwindcss.com/docs/font-size), [stroke-width](https://tailwindcss.com/docs/stroke-width)).

## Button

Refer to [button icons and alignment](/components/core/button/content#icons-and-alignment).
