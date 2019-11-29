---
type: "Components"
badge: "Extensions"
parent: "Scroll"
title: "API"
date: "2000-12-01"
---

[[noteDefault]]
| Scroll uses toggle for logic, refer to [toggle page](/components/toggle/api) for a complete **API**.

###Options

These are the default options for **Scroll**:

```js
{
  elements: false,
  targets: false,
  on: 'scroll resize',
  min: 0,
  max: 'Infinity',
  instant: true,
  class: 'fade',
  classIn: 'fade-in',
  classOut: 'fade-out',
  aria: false,
  // scroll only
  sticky: false,
  distance: '20%',
  trigger: '100%',
  start: '100%',
  end: false,
  fallback: 100,
}
```

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `sticky:String`                          | `false`        | Sticky mode 'absolute' or 'fixed' or 'fixed-always'            |
| Option                  | `distance:Number|Percent`                          | `'20%'`        | Activation distance from window's top and bottom            |
| Option                  | `trigger:Number|Percent`                          | `'100%'`        | Activation trigger distance viewport's top and bottom            |
| Option                  | `start:Number|Percent`                          | `'100%'`        | Activation start distance viewport's top and bottom           |
| Option                  | `end:Number|Percent`                          | `false`        | Activation end distance viewport's top and bottom            |
| Option                  | `fallback:Number|Percent`                          | `100`        | Fallback distance when too close to the start and end of the page            |

</div>

Other options are inherited from [toggle options](/components/toggle/api#options).

###Events

@TODO tables events
