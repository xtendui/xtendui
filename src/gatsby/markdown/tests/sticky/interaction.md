---
type: "Tests"
category: "Tests"
parent: "Sticky"
title: "Interaction"
date: "2010-10-10"
---

## Class

You can customize the **class names** used by the component.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `in in-sticky`        | Class name for activation            |
| Option                  | `classActive:String`                          | `active`        | Class name for active            |
| Option                  | `classOut:String`                          | `out`        | Class name for out            |
| Option                  | `classDone:String`                          | `done`        | Class name for in animation done            |
| Option                  | `classInitial:String`                          | `initial`        | Class name for initialization            |
| Option                  | `classInverse:String`                          | `inverse`        | Class name for inverse direction activation            |
| Option                  | `classSkip:Object`                          | `false`        | Skip class activation and deactivation, can be one or more booleans ex: `{ elements: true, elementsInner: true,  targets: true, targetsInner: true }`            |

</div>

You can start with toggled elements and targets just by adding **one of the class names for activation** to the **elements** or **targets**.

Additionally on component initialization the attribute `[data-xt-component="xt-sticky"]` gets added to the **object**.

## Mode

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `sticky:String`                          | `false`        | Sticky mode `'absolute'`, `'fixed`' or `'fixed-always'`            |

</div>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/sticky/mode-absolute">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/sticky/mode-fixed">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/sticky/mode-fixed-always">
  </div>
</demo>

## Position

The default **position** is `position: 'top'` you can also use `position: 'bottom'`.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `position:String`                          | `'top'`        | Position `'top'` or `'bottom'`            |

</div>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/sticky/position"></div>
</demo>

## Limit

The default **limit** for `limit: { top: Element }` is the element's own position, for `limit: { bottom: Element }` is Infinity.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `limit.top:Number|Query`                          | `false`        | Limit top sticky to pixel or query           |
| Option                  | `limit.bottom:Number|Query`                          | `'Infinity'`        | Limit bottom sticky to pixel or query            |

</div>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/sticky/limit">
  </div>
</demo>

## Contain

Use the `contain: {}` option to stack consecutive sticky elements. with `contain: { top: Element }` you stack the sticky to a previous element, with `contain: { bottom: Element }` you stack the sticky to a next element. The two solutions brings **different stacking effects**.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `contain.top:Query`                          | `false`        | Contain top sticky to query            |
| Option                  | `contain.bottom:Query`                          | `false`        | Contain bottom sticky to query            |

</div>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/sticky/contain-top">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/sticky/contain-bottom">
  </div>
</demo>

## Hide

To hide the sticky when scrolling down or up use `hide: 'down'` or `hide: 'up'`. Here's a complex example with hide behaviour.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `hide:String`                          | `false`        | Hide sticky on `'up'` or `'down'`            |

</div>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/sticky/hide">
  </div>
</demo>

## Block

You can block the activations with the class `.xt-block` on elements.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-block`                     | `NOT POSSIBLE`                | Block scroll on element            |

</div>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/sticky/block">
  </div>
</demo>
