---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Content"
date: "2030-10-10"
---

## Variant

Use **tailwind classes** to assign variant (e.g. [border-color](https://tailwindcss.com/docs/border-color), [background-color](https://tailwindcss.com/docs/background-color), [text-color](https://tailwindcss.com/docs/text-color)).

You can also customize `xt-backdrop` styles or just do not include it.

<demo>
  <demoinline src="vanilla/components/core/overlay/variant">
  </demoinline>
</demo>

## Size

The padding of `.xt-overlay-container` is set as a utility. Check [xtendui/src/core/overlay.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/overlay.css.js) for default styles.

Use **tailwind classes** to assign width (e.g. [width](https://tailwindcss.com/docs/width), [max-width](https://tailwindcss.com/docs/max-width)).

Use **tailwind classes** to assign size (e.g. [padding](https://tailwindcss.com/docs/padding), [font-size](https://tailwindcss.com/docs/font-size)).

<demo>
  <demoinline src="vanilla/components/core/overlay/size">
  </demoinline>
</demo>

## Content

Card content **stack vertically**. Use **tailwind classes** to assign styles (e.g. [padding](https://tailwindcss.com/docs/padding), [background-color](https://tailwindcss.com/docs/background-color), [border-radius](https://tailwindcss.com/docs/border-radius)) 

<demo>
  <demoinline src="vanilla/components/core/overlay/content">
  </demoinline>
</demo>

## Group

Use **component utility** `.xt-card-group` to stack card content **horizontally**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.xt-card-group`       | `xt-card-group`                | `responsive`                | Card stack horizontal wrapper           |

</div>

Use **tailwind classes** to assign size (e.g. [width](https://tailwindcss.com/docs/width)).

<demo>
  <demoinline src="vanilla/components/core/overlay/group">
  </demoinline>
</demo>

## Separator

Use **tailwind classes** to style **borders** for separation.

<demo>
  <demoinline src="vanilla/components/core/overlay/separator">
  </demoinline>
</demo>

## Overflow

Use **tailwind classes** to overflow divs. Use **component classes** to style **overflow**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.xt-overflow-main`                     | `xt-overflow-main`                | Overflow scrollbar style            |
| Component                  | `.xt-overflow-sub`                     | `xt-overflow-sub`                | Overflow scrollbar style small version            |

</div>

<demo>
  <demoinline src="vanilla/components/core/overlay/overflow-y">
  </demoinline>
</demo>

## List

You can use [list component](/components/core/list) to space card's internal content.

<demo>
  <demoinline src="vanilla/components/core/overlay/list">
  </demoinline>
</demo>
