---
type: "Components"
category: "Core"
parent: "Card"
title: "Content"
date: "2030-10-10"
---

## Variant

Use **tailwind classes** to assign variant (e.g. [border-color](https://tailwindcss.com/docs/border-color), [background-color](https://tailwindcss.com/docs/background-color), [text-color](https://tailwindcss.com/docs/text-color)).

<demo>
  <demoinline src="demos/components/card/variant">
  </demoinline>
</demo>

## Interactive

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration), [transition-timing-function](https://tailwindcss.com/docs/transition-timing-function)).

<demo>
  <demoinline src="demos/components/card/interactive">
  </demoinline>
  <demoinline src="demos/components/card/interactive-full">
  </demoinline>
</demo>

## Size

Use **tailwind classes** to assign size (e.g. [padding](https://tailwindcss.com/docs/padding), [font-size](https://tailwindcss.com/docs/font-size)).

<demo>
  <demoinline src="demos/components/card/size">
  </demoinline>
</demo>

## Content

Card content **stack vertically**.

<demo>
  <demoinline src="demos/components/card/content">
  </demoinline>
</demo>

## Group

Use **component utility** `.xt-card-group` to stack card content **horizontally**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.xt-card-group`       | `xt-card-group`                | `responsive`                | Card stack horizontal wrapper           |

</div>

Use `.flex-full` and [flex-direction](https://tailwindcss.com/docs/flex-direction) to **expand height**.

<demo>
  <demoinline src="demos/components/card/group">
  </demoinline>
</demo>

## Separator

Use **tailwind classes** to style **borders** for separation.

<demo>
  <demoinline src="demos/components/card/separator">
  </demoinline>
</demo>

## Overflow

Use **tailwind classes** to overflow divs. Use **component classes** to style **overflow**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.xt-overflow-main`                     | `xt-overflow-main`                | Overflow scrollbar style            |
| Component                  | `.xt-overflow-sub`                     | `xt-overflow-sub`                | Overflow scrollbar style small version            |

</div>

<demo>
  <demoinline src="demos/components/card/overflow-y">
  </demoinline>
</demo>

## List

You can use [list component](/components/list) to space card's internal content.

<demo>
  <demoinline src="demos/components/card/list">
  </demoinline>
</demo>

## Close button

Use **tailwind classes** to assign size (e.g. [padding](https://tailwindcss.com/docs/padding), [font-size](https://tailwindcss.com/docs/font-size)).

<demo>
  <demoinline src="demos/components/card/close">
  </demoinline>
</demo>

## Checks

Refer to [form checks custom](/components/form/addon#checks-custom).

## Content Group

Refer to [group card](/components/group/content#card).

## Content Nav

Refer to [nav card](/components/nav/content#card).

## Content Toolbar

Refer to [toolbar card](/components/toolbar/content#card).
