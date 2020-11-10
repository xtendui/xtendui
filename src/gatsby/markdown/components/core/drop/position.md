---
type: "Components"
category: "Core"
parent: "Drop"
title: "Position"
date: "2009-10-10"
---

## Position and arrow

Use **js option** `position: <value>` to specify [popperjs placement](https://popper.js.org/docs/v2/constructors/#placement).

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `position:String`                          | `bottom-start`        | Position option for popperjs, can be `bottom`, `bottom-start`, `bottom-end`, `top`, `top-start`, `top-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end`, `auto`, `auto-start`, `auto-end`.           |

</div>

Use `<div class="drop-arrow" data-arrow></div>` at the end of `.drop` to add an arrow.

You can customize **position and arrow** in the [drop component](/components/core/drop#customization). **We use padding** instead of popperjs offset to support mouseenter and mouseleave events.

<demo>
  <demovanilla src="vanilla/components/core/drop/bottom">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/top">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/left">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/right">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/auto">
  </demovanilla>
</demo>

There are some spacing javascript options.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `spaceOverflow:Number`                          | `15`        | Space to contain the drop            |
| Option                  | `spaceFlip:Number`                          | `15`        | Space to flip the drop            |
| Option                  | `spaceArrow:Number`                          | `0`        | Space for arrow            |

</div>

## Static

If you want a drop with size and position **relative to a parent Node with relative** use `.drop-static` and `.card.w-full`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.drop-static`       | `drop-static`                | `responsive`                | Position relative to closest element with `.relative`            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/static">
  </demovanilla>
</demo>
