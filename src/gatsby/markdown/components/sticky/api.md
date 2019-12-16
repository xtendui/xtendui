---
type: "Components"
badge: "Extensions"
parent: "Sticky"
title: "API"
date: "2000-01-01"
---

[[noteDefault]]
| Sticky uses toggle for logic, refer to [toggle's API](/components/toggle/api) for all **API**.

## Initialization

Initialize automatically within markup with `[data-xt-sticky="{ <options> }"]`.

Or initialize with javascript:

```jsx
new Xt.Sticky(document.querySelector('.my-sticky'), {
  // options
});
```

### Mode

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `sticky:String`                          | `false`        | Sticky mode 'absolute' or 'fixed' or 'fixed-always'            |

</div>

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/mode-absolute">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/mode-fixed">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/mode-fixed-always">
  </div>
</demo>

### Limit

The default **limit** for `limit: { top: Element }` is the element's own position, for `limit: { bottom: Element }` is Infinity.

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `limit.top:Number|Query`                          | `false`        | Limit top sticky to pixel or query           |
| Option                  | `limit.bottom:Number|Query`                          | `'Infinity'`        | Limit bottom sticky to pixel or query            |

</div>

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/limit">
  </div>
</demo>

### Position

The default **position** is `position: 'top'` you can also use `position: 'bottom'`.

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `position:String`                          | `'top'`        | Position 'top' or 'bottom'            |

</div>

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/position"></div>
</demo>

### Contain

Use the `contain: {}` option to stack consecutive sticky elements. with `contain: { top: Element }` you stack the sticky to a previous element, with `contain: { bottom: Element }` you stack the sticky to a next element. The two solutions brings **different stacking effects**.

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `contain.top:Query`                          | `false`        | Contain top sticky to query            |
| Option                  | `contain.bottom:Query`                          | `false`        | Contain bottom sticky to query            |

</div>

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/contain-top">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/contain-bottom">
  </div>
</demo>

### Hide

To hide the sticky when scrolling down or up use `hide: 'down'` or `hide: 'up'`. Here's a complex example with hide behaviour.

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `hide:String`                          | `false`        | Hide sticky on 'up' or 'down'            |

</div>

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/hide">
  </div>
</demo>

## Events

@TODO tables events
