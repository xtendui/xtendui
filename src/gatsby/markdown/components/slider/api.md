---
type: "Components"
badge: "Extensions"
parent: "Slider"
title: "API"
date: "2000-12-01"
---

[[noteDefault]]
| Slider uses toggle for logic, refer to [toggle page](/components/toggle/api) for a complete **API**.

###Options

These are the default options for **Slider**:

```js
{
  elements: '[data-xt-pag]',
  targets: '.slide',
  on: 'click',
  min: 1,
  max: 1,
  instant: true,
  class: 'active active-slider',
  loop: true,
  jump: true,
  imageLoadedInit: true,
  navigation: '[data-xt-nav]',
  wheel: {
    selector: false,
    block: true,
    limit: false,
    transform: true,
    horizontal: true,
    factor: 1,
    friction: function(delta) {
      return delta / 9
    },
    frictionLimit: 1.5,
  },
  keyboard: {
    selector: '.slides',
  },
  aria: {
    labelledby: false,
  },
  // slider only
  autoHeight: '.slides',
  groupMq: { all: 0.8 },
  align: 'center',
  contain: false,
  pagination: '.slider-pagination',
  drag: {
    drag: true,
    wrap: false,
    dragger: '.slides-inner',
    threshold: 50,
    linkThreshold: 50,
    factor: 1,
    friction: function(velocity) {
      return Math.pow(velocity, 0.9)
    },
    frictionLimit: 1.5,
    overflow: function(overflow) {
      return Math.pow(overflow, 0.73)
    },
    timeLimit: 25,
  },
}
```

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `autoHeight:Query`                          | `.slides`        | Elements to automaticaly height            |
| Option                  | `groupMq:Object`                          | `all: 0.8`        | Set automatic grouping based on available width from 0 to 1            |
| Option                  | `align:String`                          | `'center'`        | Alignment 'left' or 'center' or 'right'           |
| Option                  | `contain:Boolean`                          | `false`        | If true contain the slides on available width            |
| Option                  | `pagination:Query`                          | `'.slider-pagination'`        | Query for pagination element             |
| Option                  | `drag.drag:Boolean`                          | `true`        | Enable or disable drag             |
| Option                  | `drag.wrap:Boolean`                          | `false`        | Wrap slides on start and end             |
| Option                  | `drag.dragger:Query`                          | `'.slides-inner'`        | Query for dragger element             |
| Option                  | `drag.threshold:Number`                          | `50`        | Minumim drag size for starting drag             |
| Option                  | `drag.linkThreshold:Number`                          | `50`        | Maximum drag size for clicking links             |
| Option                  | `drag.factor:Number`                          | `1`        | Factor multiplier for drag             |
| Option                  | `drag.friction:Function`                          | `<function>`        | Function for drag friction             |
| Option                  | `drag.frictionLimit:Number`                          | `1.5`        | Limit for friction calculation             |
| Option                  | `drag.overflow:Function`                          | `<function>`        | Function for drag overflow             |
| Option                  | `drag.timeLimit:Milliseconds`                          | `25`        | Milliseconds after we disable drag friction building            |

</div>

Other options are inherited from [toggle options](/components/toggle/api#options).

###Events

@TODO tables events
