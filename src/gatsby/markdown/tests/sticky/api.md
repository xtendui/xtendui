---
type: "Tests"
category: "Tests"
parent: "Sticky"
title: "API"
date: "1980-05-05"
---

## Initialization

Initialize automatically within markup with `[data-xt-sticky="{ <options> }"]` on the **object** (the DOM element you assigned the component).

Or initialize with **javascript**.

```js
let self = new Xt.Sticky(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

```js
Xt.mount.push({
  matches: '#my-object',
  mount: object => {
    // init

    let self = new Xt.Sticky(object, {
      // options
    })

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  }
})
```

## Util

<div class="table-overflow">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Object                   | `let self = Xt.get('xt-sticky', {DOM element})`       | `object` `elements` `targets` | Get object self for this component class             |

</div>

## Trigger

Trigger events on **DOM elements**.

```js
document.querySelector('#my-element-or-target').dispatchEvent(new CustomEvent('on.trigger.xt.sticky'))
```

<div class="table-overflow">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `sticky.trigger.xt.sticky`      | `window` | Run sticky checks for activation/deactivation            |
| Event                   | `on.trigger.xt.sticky`       | `elements` `targets` | Activation event             |
| Event                   | `off.trigger.xt.sticky`      | `elements` `targets` | Deactivation event            |

</div>

## Listen

Listen to events on **DOM elements**.

```js
const el = document.querySelector('#my-element-or-target')

const eventOn = e => {
  if (e.target === el) {
  // logic
  }
}

el.addEventListener('on.xt.sticky', eventOn)
```

Listen to events delegation with **useCapture** this way:

```js
let object = document.querySelector('#my-object')
let self = Xt.get('xt-sticky', object)

const eventChange = e => {
  const element = e.target
  // useCapture delegation
  if (self.elements.includes(element)) {
    // logic
  }
  if (self.targets.includes(element)) {
    // logic
  }
}

object.addEventListener('change.xt.sticky', eventChange, true)
```

<div class="table-overflow">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change.xt.sticky`       | `elements` | Computation event             |
| Event                   | `show.xt.sticky`       | `elements` | Show event             |
| Event                   | `hide.xt.sticky`       | `elements` | Hide event             |
| Event                   | `medialoaded.xt.sticky`           | `elements` `targets` | Images loaded event            |
| Event                   | `init.xt.sticky`           | `object` | Init event             |
| Event                   | `status.xt.sticky`           | `object` | Status event (enabled or disabled)             |
| Event                   | `restart.xt.sticky`           | `object` | Restart event             |
| Event                   | `reinit.xt.sticky`           | `object` | Reinit event             |
| Event                   | `destroy.xt.sticky`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

```js
let object = document.querySelector('#my-object')
let self = Xt.get('xt-sticky', object)
const elements = self.elements
```

<div class="table-overflow">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `elements:Array`       | Elements nodes             |
| Property                   | `targets:Array`       | Targets nodes            |
| Property                   | `initial:Boolean`       | If initial or reset activation            |
| Property                   | `disabled:Boolean`       | If component disabled            |

</div>

## Methods

Call methods by getting component object.

```js
let self = Xt.get('xt-sticky', document.querySelector('#my-object'))
self.destroy()
self = null
```

<div class="table-overflow">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.getElements(el:Node|null)`                          | Get all elements or all elements from element or target             |
| Method                  | `self.getTargets(el:Nod|null)`                          | Get all targets from or all targets from element or target             |
| Method                  | `self.getElementsGroups()`                          | Get elements (one per group)             |
| Method                  | `self.getTargetsGroups()`                          | Get targets (one per group)             |
| Method                  | `self.hasCurrent(el:Node)`                          | Returns `true` or `false` if element or target is activated             |
| Method                  | `self.reinit(saveCurrents:Boolean)`       | Reinit component and save currents as initial (default: `true`)             |
| Method                  | `self.restart()`                          | Restart component to initial             |
| Method                  | `self.destroy(weak:Boolean)`              | Destroy component            |

</div>

You can get activated elements or targets with `hasCurrent`.

```js
self.elements.filter(x => self.hasCurrent(x))
self.targets.filter(x => self.hasCurrent(x))
```
