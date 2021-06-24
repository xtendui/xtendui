---
type: "Hidden"
category: "Hidden"
parent: "Future"
title: "Future"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Slider Absolute

Make a slider with absolute positioning. Automatically has [no drag overflow](/components/slider/interaction#drag) and [no contain](/components/slider/position#contain) and [no wrap](/components/slider/position#wrap).

The class `.xt-slider-absolute` hides the element **with `display: none`** when **not activated by the component**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|               | Syntax                          | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.xt-slider-absolute`                     | Apply `display: none` when not `.on` or `.in` or `.out` or `.display`            |

</div>

## Toggle inverse	

Devo switchare la queue mettendo un data-xt-inverse su targets inverse e tenere classi uguali.

Forse basta che metto nella queue inversa in eventOn ed eventOff.

<demo>
  <demoinline src="demos/components/toggle/animation-css-inverse">
  </demoinline>
</demo>

<demo>
  <demoinline src="demos/components/toggle/animation-css">
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

## Aria

[[notePrimary]]
| **Do not use aria attributes for selectors**, they are generated and they can change anytime.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `aria:Object|false`                          | `Object`        | Inject aria attributes            |
| Option                  | `aria.activation:Boolean`                          | `true`        | Inject aria selected, expanded and live attributes            |
| Option                  | `aria.role:Boolean`                          | `true`        | Inject aria role attributes            |
| Option                  | `aria.controls:Boolean`                          | `true`        | Inject aria controls attributes            |
| Option                  | `aria.describedby:Boolean`                          | `false`        | Inject aria describedby attributes            |
| Option                  | `aria.labelledby:Boolean`                          | `false`        | Inject aria labelledby attributes            |

</div>
