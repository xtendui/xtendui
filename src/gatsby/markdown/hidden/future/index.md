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
| Do not transition or transform on `xt-slide` because of transform positioning, **transition the content instead**.

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

## Keyboard

Use `keyboard: { selector: 'object' }` or `keyboard: { selector: Query }` to enable keyboard navigation on focus.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `keyboard.selector:Boolean`                          | `false`        | Elements that triggers the events            |

</div>

<demo>
  <demoinline src="demos/components/toggle/usability-keyboard">
  </demoinline>
</demo>

## Toggle inverse	

<demo>
  <demoinline src="demos/components/toggle/animation-css">
  </demoinline>
  <demoinline src="demos/components/toggle/animation-css-inverse">
  </demoinline>
</demo>
