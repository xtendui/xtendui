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

**Activated by default**, contain the slides inside the `drag.dragger`.

Also when enabled it **groups the slides positions values** when position values would be the same on start and end.

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

[[noteDefault]]
| Wrap **automatically doesn't activate** if there's not enough space to wrap elements (**double the width** of `drag.dragger`), see [Nooverflow demo](/components/slider/other#nooverflow).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `wrap:Boolean|Number`                          | `false`        | Wrap slides on start and end             |

</div>

<demo>
  <demoinline src="demos/components/slider/wrap-center">
  </demoinline>
  <demoinline src="demos/components/slider/wrap-left">
  </demoinline>
  <demoinline src="demos/components/slider/wrap-right">
  </demoinline>
</demo>

## Group

With `group: Number` you set a number from 0 to 1 to automatically group the slides with a factor of the available `drag.dragger` width.

It's different from the **automatic grouping of slides activations** because this grouping also **groups the slides position values**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `group:Number`                          | `false`        | Set automatic grouping based on available width from 0 to 1            |

</div>

<demo>
  <demoinline src="demos/components/slider/group">
  </demoinline>
  <demoinline src="demos/components/slider/group-wrap">
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
