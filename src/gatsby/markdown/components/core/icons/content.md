---
type: "Components"
category: "Core"
parent: "Icons"
title: "Content"
date: "2030-10-10"
---

## Variant

Use **tailwind classes** to assign variant (e.g.: color, opacity).


[[notePrimary]]
| Svg needs `fill: currentColor` or `stroke: currentColor` to have parent color.

<demo>
  <demovanilla src="vanilla/components/core/icons/variant">
  </demovanilla>
</demo>

Use [typography variant](/components/core/typography/content#variant) to style inverse colors.

[[notePrimary]]
| `.text-default` and `.text-inverse` don't support `text-opacity`. Use tailwind colors instead when using `text-opacity`.

<demo>
  <demovanilla src="vanilla/components/core/icons/inverse">
  </demovanilla>
</demo>

## Size

Use **component classes** to assign size (e.g.: font size).

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.icon-sm`                     | `icon-sm`                | Size small            |
| Component                  | `.icon-md`                     | `icon-md`                | Size medium            |
| Component                  | `.icon-lg`                     | `icon-lg`                | Size large            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/icons/size">
  </demovanilla>
</demo>

You can add **additional size** for example `.icon-xs` or `.icon-xl`.

## Button

<demo>
  <demovanilla src="vanilla/components/core/icons/button">
  </demovanilla>
</demo>
