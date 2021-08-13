---
type: "Components"
category: "Toggle"
parent: "Slider"
title: "Position"
date: "2009-10-10"
---

## Align

Slide alignment on activation.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `align:String`                          | `'center'`        | Alignment `'left'` or `'center'` or `'right'`           |

</div>

<demo>
  <demoinline src="demos/components/slider/align-center">
  </demoinline>
  <demoinline src="demos/components/slider/align-left">
  </demoinline>
  <demoinline src="demos/components/slider/align-right">
  </demoinline>
</demo>

## Contain

When `contain` is enabled (default) it **groups the slides activation and positions** when position values would be the same on start and end.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `contain:Boolean`                          | `true`        | If true contain the slides on available width            |

</div>

<demo>
  <demoinline src="demos/components/slider/nocontain-center">
  </demoinline>
  <demoinline src="demos/components/slider/nocontain-left">
  </demoinline>
  <demoinline src="demos/components/slider/nocontain-right">
  </demoinline>
</demo>

## Wrap

Wrap the slides for an infinite activation. Automatically has [loop](/components/slider/interaction#navigation-and-loop) and [no contain](/components/slider/position#contain).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `wrap:Boolean|Number`                          | `false`        | Wrap slides on start and end, if number activates only after checks available space based on available `drag.dragger` width factor from `0` to `1`             |

</div>

> Wrap **automatically doesn't activate** if there's not enough space to wrap elements (**must have available width** same as `drag.dragger` width if `wrap: true` or a factor from `0` to `1`).

<demo>
  <demoinline src="demos/components/slider/wrap-center">
  </demoinline>
  <demoinline src="demos/components/slider/wrap-left">
  </demoinline>
  <demoinline src="demos/components/slider/wrap-right">
  </demoinline>
</demo>

## Group

When `group` is enabled (set a number from 0 to 1) it **groups the slides activation and positions** when they are inside the `drag.dragger` width factor you specify.

When `groupSame` is enabled (default) it **groups the slides activation (not positions)** when when they are inside the `drag.dragger`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `group:Number`                          | `false`        | Set automatic grouping based on available `drag.dragger` width factor from `0` to `1`            |
| Option                  | `groupSame:Boolean`                          | `true`        | Group same activations            |

</div>

<demo>
  <demoinline src="demos/components/slider/group">
  </demoinline>
  <demoinline src="demos/components/slider/group-same">
  </demoinline>
  <demoinline src="demos/components/slider/no-group-same">
  </demoinline>
</demo>

## Auto Height

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `autoHeight:Query`                          | `false`        | Element inside slider to automaticaly height, remember to transition height            |
| Option                  | `keepHeight:Query`                          | `false`        | Elements to keep height of the first slide            |

</div>

<demo>
  <demoinline src="demos/components/slider/autoheight">
  </demoinline>
</demo>
