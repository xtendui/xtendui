---
type: "Hidden"
category: "Test"
parent: "Test"
title: "Animation"
---

## Class

TEST queue activations and should not jump page.

<demo>
  <demoinline src="demos/components/toggle/animation-queue">
  </demoinline>
  <demoinline src="demos/components/overlay/animation-queue">
  </demoinline>
  <demoinline src="demos/components/drop/animation-queue">
  </demoinline>
  <demoinline src="demos/components/tooltip/animation-queue">
  </demoinline>
  <demoinline src="demos/components/slider/animation-queue">
  </demoinline>
</demo>

TEST noqueue activations and should not jump page.

<demo>
  <demoinline src="demos/components/toggle/animation-noqueue">
  </demoinline>
  <demoinline src="demos/components/overlay/animation-noqueue">
  </demoinline>
  <demoinline src="demos/components/drop/animation-noqueue">
  </demoinline>
  <demoinline src="demos/components/tooltip/animation-noqueue">
  </demoinline>
  <demoinline src="demos/components/slider/animation">
  </demoinline>
</demo>

TEST inverse activations and should not jump page.

<demo>
  <demoinline src="demos/components/toggle/animation-inverse">
  </demoinline>
</demo>

## Duration and Delay

TEST duration and delay.

<demo>
  <demoinline src="demos/components/toggle/animation-duration-delay">
  </demoinline>
</demo>

## Css

TEST animation.

TEST direction.

TEST queue timing.

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

TEST direction and queue timing.

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

TEST height and width and maxHeight styles on activation and deactivation.

TEST overlay height inherit on animation done.

<demo>
  <demoinline src="demos/components/toggle/animation-collapse-initial">
  </demoinline>
  <demoinline src="demos/components/toggle/animation-collapse">
  </demoinline>
</demo>

## Megamenu

TEST move slightly over other and then target should not change with delay.

TEST direction and zIndex sequential activation and zIndex reset.

TEST backdrop should not flickr // needs TWO raf or sequential off/on flickr (e.g. backdrop megamenu)

[/demos/themes/navigation/megamenu-v1](/demos/themes/navigation/megamenu-v1).
