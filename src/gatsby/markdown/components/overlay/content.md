---
type: "Components"
category: "Interaction"
parent: "Overlay"
title: "Content"
date: "2030-10-10"
---

## Variant

Use **tailwind classes** to assign variant (e.g. [border-color](https://tailwindcss.com/docs/border-color), [background-color](https://tailwindcss.com/docs/background-color), [text-color](https://tailwindcss.com/docs/text-color)).

Use `<div class="xt-backdrop pointer-events-none bg-black opacity-25"></div>` inside `.xt-overlay` to add a customizzable backdrop.

<demo>
  <demoinline src="demos/components/overlay/variant">
  </demoinline>
</demo>

## Size

The padding of `.xt-overlay-container` is set as a utility. Check [xtendui/src/overlay.css.js](https://github.com/xtendui/xtendui/blob/beta/src/overlay.css.js) for default styles.

Use **tailwind classes** to assign width (e.g. [width](https://tailwindcss.com/docs/width), [max-width](https://tailwindcss.com/docs/max-width)).

Use **tailwind classes** to assign size (e.g. [padding](https://tailwindcss.com/docs/padding), [font-size](https://tailwindcss.com/docs/font-size)).

<demo>
  <demoinline src="demos/components/overlay/size">
  </demoinline>
</demo>

## Content

Card content **stack vertically**.

<demo>
  <demoinline src="demos/components/overlay/content">
  </demoinline>
</demo>

## Group

Use **component utility** `.xt-card-group` to stack card content **horizontally**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.xt-card-group`       | `xt-card-group`                | `responsive`                | Card stack horizontal wrapper           |

</div>

Use **tailwind classes** to assign size (e.g. [width](https://tailwindcss.com/docs/width)).

<demo>
  <demoinline src="demos/components/overlay/group">
  </demoinline>
</demo>

## Separator

Use **tailwind classes** to style **borders** for separation.

<demo>
  <demoinline src="demos/components/overlay/separator">
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
  <demoinline src="demos/components/overlay/overflow-y">
  </demoinline>
</demo>

## List

You can use [list component](/components/list) to space card's internal content.

<demo>
  <demoinline src="demos/components/overlay/list">
  </demoinline>
</demo>
