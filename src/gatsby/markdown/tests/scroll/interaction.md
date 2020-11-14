---
type: "Tests"
category: "Tests"
parent: "Scroll"
title: "Interaction"
date: "2010-10-10"
---

## Class

You can customize the **class names** used by the component.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `fade fade-scroll`        | Class name for activation            |
| Option                  | `classActive:String`                          | `fade-in`        | Class name for in animation            |
| Option                  | `classOut:String`                          | `fade-out`        | Class name for out animation            |
| Option                  | `classDone:String`                          | `done`        | Class name for in animation done            |
| Option                  | `classInitial:String`                          | `initial`        | Class name for initialization            |
| Option                  | `classInverse:String`                          | `inverse`        | Class name for inverse direction activation            |
| Option                  | `classSkip:Object`                          | `false`        | Skip class activation and deactivation, can be one or more booleans ex: `{ elements: true, elementsInner: true, targets: true, targetsInner: true }`            |

</div>

You can start with toggled elements and targets just by adding **one of the class names for activation** to the **elements** or **targets**.

Additionally on component initialization the attribute `[data-xt-component="xt-scroll"]` gets added to the **object**.

## Mode

You can set **scroll mode** with css selectors.

<div class="table-scroll">

|                      | Syntax                          |  Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Selector                  | `&:not(.scroll-done) {`                     | Animate once            |
| Selector                  | ` &:not(.scroll-outside) {`                     | Animate inside viewport once            |
| Selector                  | `&.scroll-outside {`                     |  Animate outside viewport            |
| Selector                  | `&.scroll-outside:not(.scroll-done) {`                     |  Animate outside viewport once            |

</div>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/scroll/mode-infinite">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/scroll/mode-once">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/scroll/mode-inside">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/scroll/mode-outside">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/scroll/mode-outside-once">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/scroll/mode-responsive">
  </div>
</demo>

## Distance

Use `distance: Number` activation and deactivation distance. For percent use `distance: 'Number%'`.

You can also set a **fallback** distance from top and bottom for elements that are too close to window's top or bottom.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `distance:Number|Percent`                          | `100`        | Activation distance from window's top and bottom            |
| Option                  | `fallback:Number|Percent`                          | `0`        | Fallback distance when too close to the start and end of the page            |

</div>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/scroll/distance">
  </div>
</demo>

## Delay

You can use `delayOn` and `delayOff` for a delay on activation and deactivation.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `delayOn:Milliseconds|Function`                          | `false`        | Activation delay            |
| Option                  | `delayOff:Milliseconds|Function`                          | `false`        | Deactivation delay            |

</div>
<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/scroll/delay">
  </div>
</demo>

## Sticky

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `sticky:String`                          | `false`        | Sticky mode 'absolute' or 'fixed' or 'fixed-always'            |

</div>

@TODO

## Position

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `trigger:Number|Percent`                          | `'100%'`        | Activation trigger distance viewport's top and bottom            |
| Option                  | `start:Number|Percent`                          | `'100%'`        | Activation start distance viewport's top and bottom           |
| Option                  | `end:Number|Percent`                          | `false`        | Activation end distance viewport's top and bottom            |
| Option                  | `fallback:Number|Percent`                          | `0`        | Fallback distance when too close to the start and end of the page            |

</div>

@TODO

## Block

You can block the activations with the class `.xt-block` on elements.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-block`                     | `NOT POSSIBLE`                | Block scroll on element            |

</div>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/scroll/block">
  </div>
</demo>
