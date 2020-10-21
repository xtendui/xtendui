---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Content"
date: "2030-10-10"
---

## Variant

Use **tailwind classes** to assign variant (e.g. [border-color](https://tailwindcss.com/docs/border-color), [background-color](https://tailwindcss.com/docs/background-color), [text-color](https://tailwindcss.com/docs/text-color)).

<demo>
  <demovanilla src="vanilla/components/core/overlay/variant">
  </demovanilla>
</demo>

## Size

Use **tailwind classes** to assign size (e.g. [padding](https://tailwindcss.com/docs/padding), [font-size](https://tailwindcss.com/docs/font-size)) and width ([max-width](https://tailwindcss.com/docs/max-width)).

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.max-w-xl`                     | `max-w-xl`                | Width small            |
| Component                  | `.max-w-3xl`                     | `max-w-3xl`                | Width medium            |
| Component                  | `.max-w-5xl`                     | `max-w-5xl`                | Width large            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/overlay/size">
  </demovanilla>
</demo>

## Content

Card content **stack vertically**. Use **tailwind classes** to assign styles (e.g. [padding](https://tailwindcss.com/docs/padding), [background-color](https://tailwindcss.com/docs/background-color), [border-radius](https://tailwindcss.com/docs/border-radius)) 

<demo>
  <demovanilla src="vanilla/components/core/overlay/content">
  </demovanilla>
</demo>

## Group

Use **component utility** `.card-group` to stack card content **horizontally**.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.card-group`       | `card-group`                | `responsive`                | Card stack horizontal wrapper           |

</div>

Use **tailwind classes** to assign size (e.g. [width](https://tailwindcss.com/docs/width)).

<demo>
  <demovanilla src="vanilla/components/core/overlay/group">
  </demovanilla>
</demo>

## Separator

Use **tailwind classes** to style borders for separation.

<demo>
  <demovanilla src="vanilla/components/core/overlay/separator">
  </demovanilla>
</demo>

## Overflow

Use **tailwind classes** to overflow divs. Use **component classes** to style overflow.

<div class="table-scroll">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.overflow-main`                     | `overflow-main`                | Overflow scrollbar style            |
| Component                  | `.overflow-sub`                     | `overflow-sub`                | Overflow scrollbar style small version            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/overlay/overflow-y">
  </demovanilla>
</demo>

## List

You can use [list component](/components/core/list) to space card's internal content.

<demo>
  <demovanilla src="vanilla/components/core/overlay/list">
  </demovanilla>
</demo>
