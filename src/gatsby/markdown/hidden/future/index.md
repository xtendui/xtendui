---
type: "Hidden"
category: "Hidden"
parent: "Future"
title: "Future"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Wrap

Wrap the slides for an infinite activation. Automatically has [loop](/components/slider/interaction#loop) and no [contain](/components/slider/position#contain).

[[notePrimary]]
| Do not transition transform on `xt-slide` because of transform positioning, **transition the content instead**.

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

## Absolute

Automatically has no [contain](/components/slider/position#contain) and no [wrap](/components/slider/position#wrap).

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/themes/hero/slider-hero-v1">
  </div>
</demo>

## Toggle inverse	

<demo>
  <demoinline src="demos/components/toggle/animation-css-multiple">
  </demoinline>
  <demoinline src="demos/components/toggle/animation-css-inverse">
  </demoinline>
</demo>

## Slider Wheel	

Use `wheel: { selector: 'object' }` or `wheel: { selector: Query }` to enable mousewheel navigation.	

<demo>	
  <demoinline src="demos/components/slider/wheel">	
  </demoinline>	
</demo>	
