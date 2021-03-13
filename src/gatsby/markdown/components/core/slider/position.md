---
type: "Components"
category: "Core"
parent: "Slider"
title: "Position"
date: "2009-10-10"
---

## Align

Align the slides.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `align:String`                          | `'left'`        | Alignment 'left' or 'center' or 'right'           |

</div>

<demo>
  <demoinline src="vanilla/components/core/slider/align-left">
  </demoinline>
  <demoinline src="vanilla/components/core/slider/align-center">
  </demoinline>
  <demoinline src="vanilla/components/core/slider/align-right">
  </demoinline>
</demo>

## Group

With `group: Number` you set a decimal number from 0 to 1 to group the slides with a factor of the available `drag.dragger` width.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `group:Number`                          | `false`        | Set automatic grouping based on available width from 0 to 1            |

</div>

Example of **responsive group** with [match media](/components/core/slider/api#match-media).

<demo>
  <demoinline src="vanilla/components/core/slider/group-responsive">
  </demoinline>
</demo>

## Contain

Contain the slides and **automatically group** them when the scroll position is the same of another slide.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `contain:Boolean`                          | `false`        | If true contain the slides on available width            |

</div>

<demo>
  <demoinline src="vanilla/components/core/slider/contain-center">
  </demoinline>
  <demoinline src="vanilla/components/core/slider/contain-left">
  </demoinline>
  <demoinline src="vanilla/components/core/slider/contain-right">
  </demoinline>
</demo>

## Wrap

You can wrap the slides with `drag: { wrap: true }`. With `drag.wrap` you have to set `loop: true` and you can't use `contain: true`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `drag.wrap:Boolean|Number`                          | `false`        | Wrap slides on start and end             |

</div>

<demo>
  <demoinline src="vanilla/components/core/slider/wrap-center">
  </demoinline>
  <demoinline src="vanilla/components/core/slider/wrap-left">
  </demoinline>
  <demoinline src="vanilla/components/core/slider/wrap-right">
  </demoinline>
</demo>

## Other

If you have slides of different height you can set `autoHeight: '.xt-slides'` to have the slides element resize automatically on activation.

If you want to keep the first element height on the slide use `keepHeight: '.xt-slides'`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `autoHeight:Query`                          | `false`        | Elements to automaticaly height (ex: `.xt-slides`)            |
| Option                  | `keepHeight:Query`                          | `false`        | Elements to keep height of the first slide (ex: `.xt-slides`)            |

</div>

<demo>
  <demoinline src="vanilla/components/core/slider/other">
  </demoinline>
</demo>
