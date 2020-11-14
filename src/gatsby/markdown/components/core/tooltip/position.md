---
type: "Components"
category: "Core"
parent: "Tooltip"
title: "Position"
date: "2009-10-10"
---

## Position and arrow

Use **js option** `position: <value>` to specify [popperjs placement](https://popper.js.org/docs/v2/constructors/#placement).

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `position:String`                          | `top`        | Position option for popperjs, can be `bottom`, `bottom-start`, `bottom-end`, `top`, `top-start`, `top-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end`, `auto`, `auto-start`, `auto-end`.           |

</div>

Use `<div class="tooltip-arrow" data-arrow></div>` at the end of `.tooltip` to add an arrow.

You can customize **position and arrow** in the [tooltip component](/components/core/tooltip#customization). **We use padding** instead of popperjs offset to support mouseenter and mouseleave events.

<demo>
  <demovanilla src="vanilla/components/core/tooltip/bottom">
  </demovanilla>
  <demovanilla src="vanilla/components/core/tooltip/top">
  </demovanilla>
  <demovanilla src="vanilla/components/core/tooltip/left">
  </demovanilla>
  <demovanilla src="vanilla/components/core/tooltip/right">
  </demovanilla>
  <demovanilla src="vanilla/components/core/tooltip/auto">
  </demovanilla>
</demo>

Use `.tooltip-nospace` to **disable tooltip spacing**.

Here are the main spacing javascript options, more [popperjs](https://popper.js.org/docs/v2/) options with [popperjs options](/components/core/tooltip/other#popperjs).

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | 
| Option                  | `strategy:String`                          | `'absolute'`        | Position strategy, can be `'absolute'` or `'fixed'`            |----------------------------- |
| Option                  | `spaceOverflow:Number`                          | `15`        | Space to contain the tooltip            |
| Option                  | `spaceFlip:Number`                          | `15`        | Space to flip the tooltip            |
| Option                  | `spaceArrow:Number`                          | `0`        | Space for arrow            |

</div>

## Static

If you want a tooltip with size and position **relative to a parent Node with relative** use `.tooltip-static`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.tooltip-static`       | `tooltip-static`                | `responsive`                | Position relative to closest element with `.relative`            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/tooltip/static">
  </demovanilla>
</demo>

## Mouse Follow

Use **component classes** to create a **mouse follow**. Remember **not to transition** `.mouse-follow` element.

[[notePrimary]]
| This demo uses [mouse follow](/components/addons/animation/mouse-follow). Visit the component page to import javascript and customize.

<demo>
  <demovanilla src="vanilla/components/core/tooltip/mouse-follow">
  </demovanilla>
</demo>
