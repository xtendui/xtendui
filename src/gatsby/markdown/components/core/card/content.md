---
type: "Components"
category: "Core"
parent: "Card"
title: "Content"
date: "2020-10-10"
---

## Variant

Use **tailwind classes** to assign variant (e.g.: border / background / color).

<demo>
  <demovanilla src="vanilla/components/core/card/variant">
  </demovanilla>
</demo>

## Interactive

Use **tailwind classes** to modify variants for interactive animations.

<demo>
  <demovanilla src="vanilla/components/core/card/interactive">
  </demovanilla>
</demo>

## Size

Use component's classes to assign size (e.g.: padding / font size). See [component customizations](/introduction/getting-started/setup) to modify values.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.card-block-small`                     | `card-block-small`                | Size small            |
| Component                  | `.card-block-medium`                     | `card-block-medium`                | Size medium            |
| Component                  | `.card-block-large`                     | `card-block-large`                | Size large            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/card/size">
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
  <demovanilla src="vanilla/components/core/card/asset">
  </demovanilla>
</demo>

## Block

Sequential `.card-block` stack vertically. Use **tailwind classes** to assign styles (e.g.: border-radius / background / spacing) 

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.card-block`                     | `card-block`                | Card stack vertical           |

</div>

<demo>
  <demovanilla src="vanilla/components/core/card/block">
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
  <demovanilla src="vanilla/components/core/card/group">
  </demovanilla>
</demo>

The horizontal size of `.card-block` is automatic, but you can specify it with [tailwind width](https://tailwindcss.com/docs/width).

<demo>
  <demovanilla src="vanilla/components/core/card/group-block">
  </demovanilla>
</demo>

## Separator

Use **tailwind classes** to style borders for separation.

<demo>
  <demovanilla src="vanilla/components/core/card/separator">
  </demovanilla>
</demo>

## Overflow

Use **tailwind classes** to overflow divs, you can style it with `overflow-sub`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.overflow-sub`       | `overflow-sub`                | Overflow styles           |

</div>

<demo>
  <demovanilla src="vanilla/components/core/card/overflow-y">
  </demovanilla>
</demo>

## List

You can use [list component](/components/core/list) to space card's internal content.

<demo>
  <demovanilla src="vanilla/components/core/card/list">
  </demovanilla>
</demo>

## Close button

Close button inside card.

<demo>
  <demovanilla src="vanilla/components/core/card/close">
  </demovanilla>
</demo>
