---
type: "Components"
category: "Interaction"
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
  <demoinline src="demos/components/slider/align-left">
  </demoinline>
  <demoinline src="demos/components/slider/align-center">
  </demoinline>
  <demoinline src="demos/components/slider/align-right">
  </demoinline>
</demo>

## Group

With `group: Number` you set a decimal number from 0 to 1 to group the slides with a factor of the available `drag.dragger` width.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `group:Number`                          | `false`        | Set automatic grouping based on available width from 0 to 1            |

</div>

Example of **responsive group** with [match media](/components/slider/api#match-media).

<demo>
  <demoinline src="demos/components/slider/group-responsive">
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
  <demoinline src="demos/components/slider/contain-center">
  </demoinline>
  <demoinline src="demos/components/slider/contain-left">
  </demoinline>
  <demoinline src="demos/components/slider/contain-right">
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
  <demoinline src="demos/components/slider/wrap-center">
  </demoinline>
  <demoinline src="demos/components/slider/wrap-left">
  </demoinline>
  <demoinline src="demos/components/slider/wrap-right">
  </demoinline>
</demo>
