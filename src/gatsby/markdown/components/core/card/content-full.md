---
type: "Components"
category: "Core"
parent: "Card"
title: "Content Full"
date: "2030-10-10"
---

## Variant

Use **tailwind classes** to assign variant (e.g.: border, background, color).

<demo>
  <demovanilla src="vanilla/components/core/card/variant-full">
  </demovanilla>
</demo>

## Interactive

Use **tailwind classes** to modify variants for interactive animations.

<demo>
  <demovanilla src="vanilla/components/core/card/interactive-full">
  </demovanilla>
</demo>

## Size

Use **component classes** to assign size (e.g.: padding, font size).

<demo>
  <demovanilla src="vanilla/components/core/card/size-full">
  </demovanilla>
</demo>

## Asset

If you want full width assets use `.card-asset`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.card-asset`                     | `card-asset`                | Full width assets            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/card/asset-full">
  </demovanilla>
</demo>

## Block

Sequential `.card-block` stack vertically. Use **tailwind classes** to assign styles (e.g.: border-radius, background, spacing) 

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.card-block`                     | `card-block`                | Card stack            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/card/block-full">
  </demovanilla>
</demo>

## Group

To stack `.card-block` horizontally wrap them inside `.card-group`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Util                  | `.card-group`       | `card-group`                | `responsive`                | Card stack horizontal wrapper           |

</div>

<demo>
  <demovanilla src="vanilla/components/core/card/group-full">
  </demovanilla>
</demo>

The horizontal size of `.card-block` is automatic, but you can specify it with [tailwind width](https://tailwindcss.com/docs/width).

<demo>
  <demovanilla src="vanilla/components/core/card/group-block-full">
  </demovanilla>
</demo>

## Separator

Use **tailwind classes** to style borders for separation.

<demo>
  <demovanilla src="vanilla/components/core/card/separator-full">
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
  <demovanilla src="vanilla/components/core/card/overflow-y-full">
  </demovanilla>
</demo>

## List

You can use [list component](/components/core/list) to space card's internal content.

<demo>
  <demovanilla src="vanilla/components/core/card/list-full">
  </demovanilla>
</demo>

## Close button

Use **tailwind classes** to assign size (e.g.: padding, font size).

<demo>
  <demovanilla src="vanilla/components/core/card/close-full">
  </demovanilla>
</demo>
