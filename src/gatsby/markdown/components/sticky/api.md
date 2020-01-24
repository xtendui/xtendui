---
type: "Components"
badge: "Extensions"
parent: "Sticky"
title: "API"
date: "2019-01-15"
---

[[notePrimary]]
| Sticky uses toggle for logic, refer to [toggle's API](/components/toggle/api).

## Util

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `let self = Xt.get('xt-sticky', {DOM element})`       | `object` `elements` `targets` | Get object self for this component class             |

</div>

## Methods

Call methods this way (object is the DOM element you assigned the component):

```js
let self = Xt.get('xt-sticky', document.querySelector('#my-object'))
self.destroy()
self = null
```

<div class="table-scroll">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.getElements(el:Node)`                          | Get elements from element or target             |
| Method                  | `self.getTargets(el:Node)`                          | Get targets from element or target             |
| Method                  | `self.hasCurrent(el:Node)`                          | Returns `true` or `false` if element or target is activated             |
| Method                  | `self.reinit(saveCurrents:Boolean)`       | Reinit component and save currents as initial (default: `true`)             |
| Method                  | `self.restart()`                          | Restart component to initial             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>

You can get activated elements or targets this way:

```js
self.elements.filter(x => self.hasCurrent(x))
self.targets.filter(x => self.hasCurrent(x))
```

## Trigger

[[noteDefault]]
| For triggering and listening the **resize event**, refer to [global's js](/components/global/js#events-resize).

## Listen

Listen to events this way:

```js
const eventChange = (e) => {
  // logic
}

document.querySelector('#my-element').addEventListener('change.xt', eventChange)
```

Listen to events delegation with **useCapture** this way:

```js
let object = document.querySelector('#my-object')
let self = Xt.get('xt-sticky', object)

const eventChange = (e) => {
  const element = e.target
  // useCapture delegation
  if (self.elements.includes(element)) {
    // logic
  }
  if (self.targets.includes(element)) {
    // logic
  }
}

object.addEventListener('change.xt', eventChange, true)
```

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change.xt`       | `elements` | Computation event             |
| Event                   | `show.xt`       | `elements` | Show event             |
| Event                   | `hide.xt`       | `elements` | Hide event             |
| Event                   | `medialoaded.xt`           | `elements` `targets` | Images loaded event            |
| Event                   | `init.xt`           | `object` | Init event             |
| Event                   | `restart.xt`           | `object` | Restart event             |
| Event                   | `reinit.xt`           | `object` | Reinit event             |
| Event                   | `destroy.xt`           | `object` | Destroy event             |

</div>

## Properties

Access properties this way inside events:

```js
let object = document.querySelector('#my-object')
let self = Xt.get('xt-sticky', object)

console.debug(self.elements)
```

Here are the main properties inside `self`:

<div class="table-scroll">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Event                   | `object:Node`       | Object node             |
| Event                   | `elements:Array`       | Elements nodes             |
| Event                   | `targets:Array`       | Targets nodes            |
| Event                   | `initial:Boolean`       | If first activation             |

</div>
