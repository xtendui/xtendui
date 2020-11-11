---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Interaction"
date: "2010-10-10"
---

## Class

You can customize the **class names** used with the component.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `in in-overlay`        | Class name for activation            |
| Option                  | `classActive:String`                          | `active`        | Class name for active            |
| Option                  | `classOut:String`                          | `out`        | Class name for out            |
| Option                  | `classDone:String`                          | `done`        | Class name for in animation done            |
| Option                  | `classInitial:String`                          | `initial`        | Class name for initialization            |
| Option                  | `classInverse:String`                          | `inverse`        | Class name for inverse direction activation            |

</div>

You can start with toggled elements and targets just by adding **one of the class names for activation** to the **elements** or **targets**.

Additionally on component initialization the class `xt-overlay` gets added to the **object** (the DOM element you assigned the component).

## Animation

Checkout out [overlay's themes](/themes/by-component/overlay) for **advanced animations**.

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration)).

<demo>
  <demovanilla src="vanilla/components/core/overlay/animation">
  </demovanilla>
</demo>

You can use also **css animations**, just add them with **class names** `.in`, `.out` and `.inverse`.

<demo>
  <demovanilla src="vanilla/components/core/overlay/animation-css">
  </demovanilla>
</demo>

You can use also **javascript animations**, just use [drop api](/components/core/drop/api), and remember to set `durationOn: Milliseconds` and `durationOff: Milliseconds`.

<demo>
  <demovanilla src="vanilla/components/core/overlay/animation-js">
  </demovanilla>
</demo>

## Timing

Activation/deactivation automatically waits for the <strong>duration</strong> of animations and transitions on <code>.active</code> and <code>.out</code>.

You can use a function for <code>delayOn</code> and <code>delayOff</code> for example <code>(current, total) => {return Math.min((total - current) * 150, 300)}</code>.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `instant:Boolean|Object`                 | `{ elements: true, targets: false, elementsInner: true, targetsInner: true }`     | Set instant activation and deactivation, can be one or more booleans `elements` `elementsInner` `targets` `targetsInner`          |
| Option                  | `delayOn:Milliseconds|Function`                          | `false`        | Activation delay            |
| Option                  | `delayOff:Milliseconds|Function`                          | `false`        | Deactivation delay            |
| Option                  | `delayInitial:Boolean`                          | `true`        | Initial activation delay            |
| Option                  | `durationOn:Milliseconds`                          | `false`        | Activation duration            |
| Option                  | `durationOff:Milliseconds`                          | `false`        | Deactivation duration            |

</div>

## Class html

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `classHtml:String`                          | `false`        | Add class to `html` on activation            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/overlay/class-html">
  </demovanilla>
</demo>

## Block

You can block the activations with the class `.xt-block` on elements.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-block`                     | `NOT POSSIBLE`                | Block scroll on element            |

</div>
