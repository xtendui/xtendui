---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Interaction"
date: "2010-10-10"
---

## Class

You can customize the class names used with the component.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `active active-overlay`        | Class name for activation            |
| Option                  | `classIn:String`                          | `in`        | Class name for in animation            |
| Option                  | `classOut:String`                          | `out`        | Class name for out animation            |
| Option                  | `classDone:String`                          | `done`        | Class name for in animation done            |
| Option                  | `classInitial:String`                          | `initial`        | Class name for initialization            |
| Option                  | `classInverse:String`                          | `inverse`        | Class name for inverse direction activation            |

</div>

You can start with toggled elements and targets just by adding **one of the class names for activation** to the **elements** or **targets**.

Additionally on component initialization the class `xt-overlay` gets added to the **object** (the DOM element you assigned the component).

## Animations

You can use **css animations**, just add them with **class names**.

<demo>
  <demovanilla src="vanilla/components/core/overlay/animation">
  </demovanilla>
</demo>

You can use **javascript animations**, just use [overlay api](/components/core/overlay/api), and remember to set `durationOn: Milliseconds` and `durationOff: Milliseconds`.

<demo>
  <demovanilla src="vanilla/components/core/overlay/animation-js">
  </demovanilla>
</demo>

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

You can block the activations with the class `.xt-block` on elements. See the [api demo](/components/core/overlay/api#demo)
