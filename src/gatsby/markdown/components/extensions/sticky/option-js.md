---
type: "Components"
category: "Extensions"
parent: "Sticky"
title: "Option Js"
date: "2019-11-10"
---

## Class

You can customize the classnames used with the component.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `active active-sticky`        | Class name for activation            |
| Option                  | `classIn:String`                          | `in`        | Class name for in animation            |
| Option                  | `classOut:String`                          | `out`        | Class name for out animation            |
| Option                  | `classInitial:String`                          | `initial`        | Class name for initialization            |
| Option                  | `classInverse:String`                          | `inverse`        | Class name for inverse direction activation            |

</div>

You can start with toggled elements and targets just by adding **one of the activation classes** to the **elements** or **targets**.

Additionally on component initialization the class `xt-sticky` gets added to the object (the DOM element you assigned the component) useful if you want to animate with css on component intialization. `classInitial` and `classInverse` are useful if you want to animate with css depending on initial activation or direction of the activation. For javascript animation you can use the [api properties](/components/extensions/sticky/api#properties).

## Block

You can block the activations with the class `.xt-block` on elements.

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/extensions/sticky/block">
  </div>
</demo>

## Mode

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `sticky:String`                          | `false`        | Sticky mode 'absolute' or 'fixed' or 'fixed-always'            |

</div>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/extensions/sticky/mode-absolute">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/extensions/sticky/mode-fixed">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/extensions/sticky/mode-fixed-always">
  </div>
</demo>

## Position

The default **position** is `position: 'top'` you can also use `position: 'bottom'`.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `position:String`                          | `'top'`        | Position 'top' or 'bottom'            |

</div>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/extensions/sticky/position"></div>
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
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/extensions/sticky/limit">
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
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/extensions/sticky/contain-top">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/extensions/sticky/contain-bottom">
  </div>
</demo>

## Hide

To hide the sticky when scrolling down or up use `hide: 'down'` or `hide: 'up'`. Here's a complex example with hide behaviour.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `hide:String`                          | `false`        | Hide sticky on 'up' or 'down'            |

</div>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/extensions/sticky/hide">
  </div>
</demo>
