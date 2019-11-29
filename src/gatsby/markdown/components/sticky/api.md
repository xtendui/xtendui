---
type: "Components"
badge: "Extensions"
parent: "Sticky"
title: "API"
date: "2000-12-01"
---

[[noteDefault]]
| Sticky uses toggle for logic, refer to [toggle page](/components/toggle/api) for a complete **API**.

###Options

These are the default options for **Sticky**:

```js
{
  elements: false,
  targets: false,
  on: 'scroll resize',
  min: 0,
  max: 'Infinity',
  instant: true,
  class: 'active active-sticky',
  aria: false,
  // sticky only
  sticky: true,
  position: 'top',
  limit: { bottom: 'Infinity' },
  contain: false,
  hide: false,
}
```

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `sticky:String`                          | `false`        | Sticky mode 'absolute' or 'fixed' or 'fixed-always'            |
| Option                  | `position:String`                          | `'top'`        | Position 'top' or 'bottom'            |
| Option                  | `limit.top:Number|Query`                          | `false`        | Limit top sticky to pixel or query           |
| Option                  | `limit.bottom:Number|Query`                          | `'Infinity'`        | Limit bottom sticky to pixel or query            |
| Option                  | `contain.top:Query`                          | `false`        | Contain top sticky to query            |
| Option                  | `contain.bottom:Query`                          | `false`        | Contain bottom sticky to query            |
| Option                  | `hide:String`                          | `false`        | Hide sticky on 'up' or 'down'            |

</div>

Other options are inherited from [toggle options](/components/toggle/api#options).

###Events

@TODO tables events
