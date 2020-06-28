---
type: "Components"
badge: "Extensions"
parent: "Scroll"
title: "API"
date: "2019-01-15"
---

[[notePrimary]]
| Scroll uses toggle for logic, refer to [toggle's API](/components/toggle/api).

## Util

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `let self = Xt.get('xt-scroll', {DOM element})`       | `object` `elements` `targets` | Get object self for this component class             |

</div>

## Methods

Call methods this way (object is the DOM element you assigned the component):

```js
let self = Xt.get('xt-scroll', document.querySelector('#my-object'))
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

Trigger events this way:

```js
document.querySelector('#my-element-or-target').dispatchEvent(new CustomEvent('on.trigger.xt'))
```

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.trigger.xt`       | `elements` `targets` | Activation event             |
| Event                   | `off.trigger.xt`      | `elements` `targets` | Deactivation event            |

</div>

[[noteDefault]]
| For triggering and listening the **resize event**, refer to [structure](/components/structure/other#resize).

## Listen

Listen to events this way:

```js
const el = document.querySelector('#my-element-or-target')

const eventChange = e => {
  if (e.target === el) {
  // logic
  }
}

el.addEventListener('change.xt', eventOn)
```

Listen to events delegation with **useCapture** this way:

```js
let object = document.querySelector('#my-object')
let self = Xt.get('xt-scroll', object)

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

object.addEventListener('change.xt', eventChange, true)
```

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.xt`       | `elements` `targets` | Activation event             |
| Event                   | `off.xt`      | `elements` `targets` | Deactivation event            |
| Event                   | `ondone.xt`           | `elements` `targets` | Activation event after delay and duration             |
| Event                   | `offdone.xt`           | `elements` `targets` | Deactivation event after delay and duration             |
| Event                   | `change.xt`       | `elements` | Computation event             |
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
let self = Xt.get('xt-scroll', object)
const elements = self.elements
```

Here are the main properties inside `self`:

<div class="table-scroll">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Event                   | `object:Node`       | Object node             |
| Event                   | `elements:Array`       | Elements nodes             |
| Event                   | `targets:Array`       | Targets nodes            |
| Option                  | `initial:Boolean`       | If initial or reset activation            |

</div>
