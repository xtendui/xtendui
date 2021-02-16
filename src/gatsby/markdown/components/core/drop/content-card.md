---
type: "Components"
category: "Core"
parent: "Drop"
title: "Content Card"
date: "2030-05-05"
---

## Variant

Use **tailwind classes** to assign variant (e.g. [border-color](https://tailwindcss.com/docs/border-color), [background-color](https://tailwindcss.com/docs/background-color), [text-color](https://tailwindcss.com/docs/text-color)).

<demo>
  <demovanilla src="vanilla/components/core/drop/card-variant">
  </demovanilla>
</demo>

## Size

Use **tailwind classes** to assign width (e.g. [width](https://tailwindcss.com/docs/width), [max-width](https://tailwindcss.com/docs/max-width)).

Use **tailwind classes** to assign size (e.g. [padding](https://tailwindcss.com/docs/padding), [font-size](https://tailwindcss.com/docs/font-size)).

<demo>
  <demovanilla src="vanilla/components/core/drop/card-size">
  </demovanilla>
</demo>

## Content

Card content **stack vertically**. Use **tailwind classes** to assign styles (e.g. [padding](https://tailwindcss.com/docs/padding), [background-color](https://tailwindcss.com/docs/background-color), [border-radius](https://tailwindcss.com/docs/border-radius)) 

<demo>
  <demovanilla src="vanilla/components/core/drop/card-content">
  </demovanilla>
</demo>

## Group

Use **component utility** `.xt-card-group` to stack card content **horizontally**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.xt-card-group`       | `xt-card-group`                | `responsive`                | Card stack horizontal wrapper           |

</div>

Use **tailwind classes** to assign size (e.g. [width](https://tailwindcss.com/docs/width)).

<demo>
  <demovanilla src="vanilla/components/core/drop/card-group">
  </demovanilla>
</demo>

## Separator

Use **tailwind classes** to style **borders** for separation.

<demo>
  <demovanilla src="vanilla/components/core/drop/card-separator">
  </demovanilla>
</demo>

## Overflow

Use **tailwind classes** to overflow divs. Use **component classes** to style **overflow**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.xt-overflow-main`                     | `xt-overflow-main`                | Overflow scrollbar style            |
| Component                  | `.xt-overflow-sub`                     | `xt-overflow-sub`                | Overflow scrollbar style small version            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/card-overflow-y">
  </demovanilla>
</demo>

## List

You can use [list component](/components/core/list) to space card's internal content.

<demo>
  <demovanilla src="vanilla/components/core/drop/card-list">
  </demovanilla>
</demo>
