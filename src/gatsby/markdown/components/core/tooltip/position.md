---
type: "Components"
category: "Core"
parent: "Tooltip"
title: "Position"
date: "2009-10-10"
---

## Position and arrow

Use **js option** `position: <value>` to specify [popperjs placement](https://popper.js.org/docs/v2/constructors/#placement).

If you want to **control a specific tooltip position** use `[data-xt-position=<value>]` on the `.xt-tooltip`

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `position:String`                          | `top`        | Position option for popperjs, can be `bottom`, `bottom-start`, `bottom-end`, `top`, `top-start`, `top-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end`, `auto`, `auto-start`, `auto-end`.           |

</div>

Use `<div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>` inside `.xt-tooltip` to add an arrow. You can change the [inset](https://tailwindcss.com/docs/top-right-bottom-left) and [width](https://tailwindcss.com/docs/width) and [height](https://tailwindcss.com/docs/height) values to change the arrow size and position.

<demo>
  <demoinline src="vanilla/components/core/tooltip/bottom">
  </demoinline>
  <demoinline src="vanilla/components/core/tooltip/top">
  </demoinline>
  <demoinline src="vanilla/components/core/tooltip/left">
  </demoinline>
  <demoinline src="vanilla/components/core/tooltip/right">
  </demoinline>
  <demoinline src="vanilla/components/core/tooltip/auto">
  </demoinline>
</demo>

To not have **space** just omit `.xt-tooltip` **padding** and `.xt-arrow` **margin**.

<demo>
  <demoinline src="vanilla/components/core/tooltip/nospace">
  </demoinline>
</demo>

Here are the main spacing javascript options, more [popperjs](https://popper.js.org/docs/v2/) options with [popperjs options](/components/core/tooltip/other#popperjs).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | 
| Option                  | `strategy:String`                          | `'fixed'`        | Position strategy, can be `'absolute'` or `'fixed'`            |----------------------------- |
| Option                  | `spaceOverflow:Number`                          | `15`        | Space to contain the tooltip            |
| Option                  | `spaceFlip:Number`                          | `15`        | Space to flip the tooltip            |
| Option                  | `spaceArrow:Number|Boolean`                          | `false`        | Space for arrow, if false automatic            |

</div>

## Static

If you want a tooltip with size and position **relative to a parent Node with relative** use `.xt-tooltip-static`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.xt-tooltip-static`       | `xt-tooltip-static`                | `responsive`                | Position relative to closest element with `.relative`            |

</div>

<demo>
  <demoinline src="vanilla/components/core/tooltip/static">
  </demoinline>
</demo>

## Mouse Follow

Use **component classes** to create a **mouse follow**.

[[notePrimary]]
| Remember **not to transition transform** of `.xt-mousefollow` element.

[[noteDefault]]
| This demo uses [mouse follow](/components/addons/animation/mousefollow) see documentation for more info.

<demo>
  <demoinline src="vanilla/components/core/tooltip/mousefollow">
  </demoinline>
</demo>
