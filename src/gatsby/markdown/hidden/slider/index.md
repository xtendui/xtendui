---
type: "Hidden"
category: "Hidden"
parent: "Slider"
title: "Slider"
description: "Slider is a toggle plugin for drag interactions and for interfaces that slide on one axis."
---

## Usage

You can have sliders on two different modes: `'relative'` or `'absolute'`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `mode:String`                          | `'relative'`        | Slider mode `'relative'` or `'absolute'`           |

</div>

#### Relative

Use this code to create a **slider** in **relative mode**.

<demo>
  <demoinline src="demos/components/slider/usage-relative">
  </demoinline>
</demo>

#### Absolute

Use this code to create a **slider** in **absolute mode**.

Use `off:hidden` to hide with `display: none;` the node when **not activated or animating**.

Use `xt-slide-absolute` to position the node in **absolute mode** when **animating out**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-slide-absolute`                     | `xt-slide-absolute`                | Slide in absolute mode            |

</div>

In **absolute mode** all options of [slider position](/components/slider/position) are not taken in consideration because not applicable.

Check out [slider's animation absolute](/components/slider/animation#absolute) for **advanced usage**.

<demo>
  <demoinline src="demos/components/slider/usage-absolute">
  </demoinline>
</demo>
