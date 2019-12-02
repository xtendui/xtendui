---
type: "Components"
badge: "Extensions"
parent: "Scroll"
title: "Option"
date: "2000-02-01"
---

[[noteDefault]]
| Scroll uses toggle for logic, refer to [toggle's option](/components/toggle/option) for all **options**.

##Mode

You can set scroll mode.

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/mode-infinite">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/mode-scroll">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/mode-visible">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/mode-responsive">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/mode-block">
  </div>
</demo>

##Distance

Use `distance: Number` activation and deactivation distance. For percent use `distance: 'Number%'`.

The default **distance** is `distance: '20%'`.

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `distance:Number|Percent`                          | `'20%'`        | Activation distance from window's top and bottom            |

</div>

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/distance">
  </div>
</demo>

##Delay

You can use a function for `delayOn` and `delayOff` for example `function(current, total) {return Math.min((total - current) * 150, 300)}`.

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `delayOn:Milliseconds|Function`                          | `false`        | Activation delay            |
| Option                  | `delayOff:Milliseconds|Function`                          | `false`        | Deactivation delay            |

</div>
<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/delay">
  </div>
</demo>

##Sticky

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `sticky:String`                          | `false`        | Sticky mode 'absolute' or 'fixed' or 'fixed-always'            |

</div>

@TODO demo

##Position

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `trigger:Number|Percent`                          | `'100%'`        | Activation trigger distance viewport's top and bottom            |
| Option                  | `start:Number|Percent`                          | `'100%'`        | Activation start distance viewport's top and bottom           |
| Option                  | `end:Number|Percent`                          | `false`        | Activation end distance viewport's top and bottom            |
| Option                  | `fallback:Number|Percent`                          | `100`        | Fallback distance when too close to the start and end of the page            |

</div>

@TODO demo
