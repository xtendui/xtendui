---
type: "Components"
badge: "Extensions"
parent: "Scroll"
title: "Option Js"
date: "2019-11-01"
---

[[notePrimary]]
| Scroll uses toggle for logic, refer to [toggle's option](/components/toggle/option-js).

## Mode

You can set scroll mode with css selectors.

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/mode-infinite">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/mode-once">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/mode-inside">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/mode-outside">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/mode-outside-once">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/mode-responsive">
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
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/distance">
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
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/delay">
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
