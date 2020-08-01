---
type: "Components"
category: "Extensions"
parent: "Scroll"
title: "Option Js"
date: "2019-11-10"
---

## Class

You can customize the classnames used with the component.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `fade fade-scroll`        | Class name for activation            |
| Option                  | `classIn:String`                          | `fade-in`        | Class name for in animation            |
| Option                  | `classOut:String`                          | `fade-out`        | Class name for out animation            |
| Option                  | `classInitial:String`                          | `initial`        | Class name for initialization            |
| Option                  | `classInverse:String`                          | `inverse`        | Class name for inverse direction activation            |

</div>

You can start with toggled elements and targets just by adding **one of the activation classes** to the **elements** or **targets**.

Additionally on component initialization the class `xt-scroll` gets added to the object (the DOM element you assigned the component) useful if you want to animate with css on component intialization. `classInitial` and `classInverse` are useful if you want to animate with css depending on initial activation or direction of the activation. For javascript animation you can use the [api properties](/components/extensions/scroll/api#properties).

## Block

You can block the activations with the class `.xt-block` on elements.

<demo>
  <div class="gatsby_demo_item toggle-flex" data-iframe="iframe/components/extensions/scroll/block">
  </div>
</demo>

## Mode

You can set scroll mode with css selectors.

<demo>
  <div class="gatsby_demo_item toggle-flex" data-iframe="iframe/components/extensions/scroll/mode-infinite">
  </div>
  <div class="gatsby_demo_item toggle-flex" data-iframe="iframe/components/extensions/scroll/mode-once">
  </div>
  <div class="gatsby_demo_item toggle-flex" data-iframe="iframe/components/extensions/scroll/mode-inside">
  </div>
  <div class="gatsby_demo_item toggle-flex" data-iframe="iframe/components/extensions/scroll/mode-outside">
  </div>
  <div class="gatsby_demo_item toggle-flex" data-iframe="iframe/components/extensions/scroll/mode-outside-once">
  </div>
  <div class="gatsby_demo_item toggle-flex" data-iframe="iframe/components/extensions/scroll/mode-responsive">
    <div class="gatsby_demo_text">
      You can style animations within media queries (resize to mobile to see it in action).
    </div>
  </div>
</demo>

## Distance

Use `distance: Number` activation and deactivation distance. For percent use `distance: 'Number%'`.

You can also set a **fallback** distance from top and bottom for elements that are too close to window's top or bottom.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `distance:Number|Percent`                          | `100`        | Activation distance from window's top and bottom            |
| Option                  | `fallback:Number|Percent`                          | `0`        | Fallback distance when too close to the start and end of the page            |

</div>

<demo>
  <div class="gatsby_demo_item toggle-flex" data-iframe="iframe/components/extensions/scroll/distance">
  </div>
</demo>

## Delay

You can use a function for `delayOn` and `delayOff` for example `(current, total) => {return Math.min((total - current) * 150, 300)}`.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `delayOn:Milliseconds|Function`                          | `false`        | Activation delay            |
| Option                  | `delayOff:Milliseconds|Function`                          | `false`        | Deactivation delay            |

</div>
<demo>
  <div class="gatsby_demo_item toggle-flex" data-iframe="iframe/components/extensions/scroll/delay">
  </div>
</demo>

## Sticky

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `sticky:String`                          | `false`        | Sticky mode 'absolute' or 'fixed' or 'fixed-always'            |

</div>

@TODO demo

## Position

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `trigger:Number|Percent`                          | `'100%'`        | Activation trigger distance viewport's top and bottom            |
| Option                  | `start:Number|Percent`                          | `'100%'`        | Activation start distance viewport's top and bottom           |
| Option                  | `end:Number|Percent`                          | `false`        | Activation end distance viewport's top and bottom            |
| Option                  | `fallback:Number|Percent`                          | `0`        | Fallback distance when too close to the start and end of the page            |

</div>

@TODO demo
