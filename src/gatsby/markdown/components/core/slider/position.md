---
type: "Components"
category: "Core"
parent: "Slider"
title: "Position"
date: "2009-10-10"
---

## Align

Align the slides.

<div class="overflow-sub overflow-y-hidden overflow-x-scroll my-4 mt-fc mb-lc w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `align:String`                          | `'left'`        | Alignment 'left' or 'center' or 'right'           |

</div>

<demo>
  <demovanilla src="vanilla/components/core/slider/align-left">
  </demovanilla>
  <demovanilla src="vanilla/components/core/slider/align-center">
  </demovanilla>
  <demovanilla src="vanilla/components/core/slider/align-right">
  </demovanilla>
</demo>

## Group

With `group: Number` you set a decimal number from 0 to 1 to group the slides with a factor of the available `drag.dragger` width.

<div class="overflow-sub overflow-y-hidden overflow-x-scroll my-4 mt-fc mb-lc w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `group:Number`                          | `false`        | Set automatic grouping based on available width from 0 to 1            |

</div>

Example of **responsive group** with [match media](/components/core/slider/api#match-media).

<demo>
  <demovanilla src="vanilla/components/core/slider/group-responsive">
  </demovanilla>
</demo>

## Contain

Contain the slides and **automatically group** them when the scroll position is the same of another slide.

<div class="overflow-sub overflow-y-hidden overflow-x-scroll my-4 mt-fc mb-lc w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `contain:Boolean`                          | `false`        | If true contain the slides on available width            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/slider/contain-center">
  </demovanilla>
  <demovanilla src="vanilla/components/core/slider/contain-left">
  </demovanilla>
  <demovanilla src="vanilla/components/core/slider/contain-right">
  </demovanilla>
</demo>

## Wrap

You can wrap the slides with `drag: { wrap: true }`. With `drag.wrap` you have to set `loop: true` and you can't use `contain: true`.

<div class="overflow-sub overflow-y-hidden overflow-x-scroll my-4 mt-fc mb-lc w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `drag.wrap:Boolean|Number`                          | `false`        | Wrap slides on start and end             |

</div>

<demo>
  <demovanilla src="vanilla/components/core/slider/wrap-center">
  </demovanilla>
  <demovanilla src="vanilla/components/core/slider/wrap-left">
  </demovanilla>
  <demovanilla src="vanilla/components/core/slider/wrap-right">
  </demovanilla>
</demo>

## Other

If you have slides of different height you can set `autoHeight: '.slides'` to have the slides element resize automatically on activation.

If you want to keep the first element height on the slide use `keepHeight: '.slides'`.

<div class="overflow-sub overflow-y-hidden overflow-x-scroll my-4 mt-fc mb-lc w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `autoHeight:Query`                          | `false`        | Elements to automaticaly height (ex: `.slides`)            |
| Option                  | `keepHeight:Query`                          | `false`        | Elements to keep height of the first slide (ex: `.slides`)            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/slider/other">
  </demovanilla>
</demo>
