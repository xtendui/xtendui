---
type: "Hidden"
category: "Hidden"
parent: "Test"
title: "Animation"
---

## Class

Test activations and animations.

Test toggle noqueue and toggle inverse should not jump page.

Test overlay multiple, opening another overlay inside the overlay FocusTrap should work and not give console error.

Test slider animation no flick on change slide data-xt-group-same (bug with classes activation).

<demo>
  <demoinline src="demos/components/toggle/animation-queue">
  </demoinline>
  <demoinline src="demos/components/toggle/animation-noqueue">
  </demoinline>
  <demoinline src="demos/components/overlay/animation-queue">
  </demoinline>
  <demoinline src="demos/components/overlay/animation-noqueue">
  </demoinline>
  <demoinline src="demos/components/drop/animation-queue">
  </demoinline>
  <demoinline src="demos/components/drop/animation-noqueue">
  </demoinline>
  <demoinline src="demos/components/tooltip/animation-queue">
  </demoinline>
  <demoinline src="demos/components/tooltip/animation-noqueue">
  </demoinline>
  <demoinline src="demos/components/slider/animation">
  </demoinline>
  <demoinline src="demos/components/slider/animation-queue">
  </demoinline>
</demo>

## Inverse

Test inverse animation.

<demo>
  <demoinline src="demos/components/toggle/animation-inverse">
  </demoinline>
</demo>

## Duration and Delay

Test duration and delay.

<demo>
  <demoinline src="demos/components/toggle/animation-duration-delay">
  </demoinline>
</demo>

## Css

Test animation.

Test direction.

Test queue timing.

<demo>
  <demoinline src="demos/components/toggle/animation-css">
  </demoinline>
  <demoinline src="demos/components/overlay/animation-css">
  </demoinline>
  <demoinline src="demos/components/drop/animation-css">
  </demoinline>
  <demoinline src="demos/components/tooltip/animation-css">
  </demoinline>
  <demoinline src="demos/components/slider/animation-css">
  </demoinline>
</demo>

## Js

Test direction and queue timing.

Slider test should not deactivate and reactivate if already activated (bug skip obj nodes that are in off and on)

<demo>
  <demoinline src="demos/components/toggle/animation-js">
  </demoinline>
  <demoinline src="demos/components/overlay/animation-js">
  </demoinline>
  <demoinline src="demos/components/drop/animation-js">
  </demoinline>
  <demoinline src="demos/components/tooltip/animation-js">
  </demoinline>
  <demoinline src="demos/components/slider/animation-js">
  </demoinline>
</demo>

## Collapse

Test height and width and maxHeight styles on activation and deactivation.

Test overlay height inherit on animation done.

<demo>
  <demoinline src="demos/components/toggle/animation-collapse">
  </demoinline>
  <demoinline src="demos/components/toggle/animation-collapse-initial">
  </demoinline>
</demo>

## Megamenu

Test move slightly over other and then target should not change with delay.

Test direction and zIndex sequential activation and zIndex reset.

Test backdrop should not flickr // needs TWO raf or sequential off/on flickr (e.g. backdrop megamenu)

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/themes/navigation/megamenu-v1">
  </div>
</demo>
