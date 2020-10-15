---
type: "Components"
category: "Core"
parent: "Drop"
title: "Content Card"
date: "2030-05-05"
---

## Variant

Use **tailwind classes** to assign variant (e.g.: border, background, color).

<demo>
  <demovanilla src="vanilla/components/core/drop/card-variant">
  </demovanilla>
</demo>

## Size

Use **tailwind classes** to assign size (e.g.: padding, font size).

Use **card classes** to assign card size (e.g.: min-width).

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.card-sm`                     | `card-sm`                | Width small            |
| Component                  | `.card-md`                     | `card-md`                | Width medium            |
| Component                  | `.card-lg`                     | `card-lg`                | Width large            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/card-size">
  </demovanilla>
</demo>

You can add **additional size** for example `.card-xs` or `.card-xl`.

## Asset

If you want full width assets use `.card-asset`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.card-asset`                     | `card-asset`                | Full width assets            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/asset">
  </demovanilla>
</demo>

## Block

Sequential `.card-block` stack vertically. Use **tailwind classes** to assign styles (e.g.: border-radius, background, spacing) 

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.card-block`                     | `card-block`                | Card stack            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/block">
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
  <demovanilla src="vanilla/components/core/drop/group">
  </demovanilla>
</demo>

The horizontal size of `.card-block` is automatic, but you can specify it with [tailwind width](https://tailwindcss.com/docs/width).

<demo>
  <demovanilla src="vanilla/components/core/drop/group-block">
  </demovanilla>
</demo>

## Separator

Use **tailwind classes** to style borders for separation.

<demo>
  <demovanilla src="vanilla/components/core/drop/separator">
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
  <demovanilla src="vanilla/components/core/drop/overflow-y">
  </demovanilla>
</demo>

## List

You can use [list component](/components/core/list) to space card's internal content.

<demo>
  <demovanilla src="vanilla/components/core/drop/list">
  </demovanilla>
</demo>
