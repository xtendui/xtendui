---
type: "Components"
badge: "Extensions"
parent: "Scroll"
title: "API"
date: "2000-01-01"
---

## Initialization

Initialize automatically within markup with `[data-xt-scroll="{ <options> }"]`.

Or initialize with javascript (object is the DOM element you assigned the component):

```jsx
let self = new Xt.Scroll(document.querySelector('#my-object'), {
  // options
});
```

## Usage

@TODO

[[notePrimary]]
| It's recomended to animate the scroll elements with <code>animation</code> instead of <code>transition</code> because of <a href="{% link faq.html %}#browsers-bugs-fixed-position">this bug</a>.

## Options

[[noteDefault]]
| Scroll uses toggle for logic, refer to [toggle's options](/components/toggle/api#options).

### Mode

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

### Distance

Use `distance: Number` activation and deactivation distance. For percent use `distance: 'Number%'`.

The default **distance** is `distance: '20%'`.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `distance:Number|Percent`                          | `'20%'`        | Activation distance from window's top and bottom            |

</div>

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/distance">
  </div>
</demo>

### Delay

You can use a function for `delayOn` and `delayOff` for example `function(current, total) {return Math.min((total - current) * 150, 300)}`.

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

### Sticky

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `sticky:String`                          | `false`        | Sticky mode 'absolute' or 'fixed' or 'fixed-always'            |

</div>

@TODO demo

### Position

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `trigger:Number|Percent`                          | `'100%'`        | Activation trigger distance viewport's top and bottom            |
| Option                  | `start:Number|Percent`                          | `'100%'`        | Activation start distance viewport's top and bottom           |
| Option                  | `end:Number|Percent`                          | `false`        | Activation end distance viewport's top and bottom            |
| Option                  | `fallback:Number|Percent`                          | `100`        | Fallback distance when too close to the start and end of the page            |

</div>

@TODO demo

## Events and Methods

### Util

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `let self = Xt.get('xt-scroll', {DOM element})`       | `object` `elements` `targets` | Get object self for this component class             |

</div>

### Methods

Call methods this way (object is the DOM element you assigned the component):

```jsx
let self = Xt.get('xt-scroll', document.querySelector('#my-object'))
self.destroy()
self = null
```

<div class="table-scroll">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.restart()`                          | Restart component to initial             |
| Method                  | `self.reinit(saveCurrents:Boolean)`       | Reinitialize component and save currents as initial (default: `true`)             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>

### Listen

Listen to events this way:

```jsx
document.querySelector('#my-element').addEventListener('change.xt', function(e) {
  // logic
})
```

Listen to events delegation with **useCapture** this way:

```jsx
let object = document.querySelector('#my-object')
let self = Xt.get('xt-scroll', object)

object.addEventListener('change.xt', function(e) {
  const el = e.target
  // useCapture delegation
  if (self.elements.includes(el)) {
    // logic
  }
}, true)
```

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change.xt`       | `elements` | Computation event             |
| Event                   | `medialoaded.xt`           | `elements` `targets` | Images loaded event            |
| Event                   | `init.xt`           | `object` | Init event             |

</div>
