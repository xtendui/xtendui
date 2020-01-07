---
type: "Components"
badge: "Core"
parent: "Toggle"
title: "API"
date: "2000-12-01"
---

## Util

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `let self = Xt.get('xt-toggle', {DOM element})`       | `object` `elements` `targets` | Get object self for this component class             |

</div>

## Methods

Call methods this way (object is the DOM element you assigned the component):

```js
let self = Xt.get('xt-toggle', document.querySelector('#my-object'))
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
| Event                   | `autoclose.trigger.xt`           | `window` | Autclose all components with `autoClose: true` option             |
| Event                   | `autostart.trigger.xt`           | `object` | Auto start event             |
| Event                   | `autostop.trigger.xt`           | `object` | Auto stop event             |

</div>

[[noteDefault]]
| For triggering and listening the **resize event**, refer to [global's js](/components/global/js#events-resize).

## Listen

Listen to events this way:

```js
const eventOn = function(e) {
  // logic
}

document.querySelector('#my-element-or-target').addEventListener('on.xt', eventOn)
```

Listen to events delegation with **useCapture** this way:

```js
let object = document.querySelector('#my-object')
let self = Xt.get('xt-toggle', object)

const eventOn = function(e) {
  const el = e.target
  // useCapture delegation
  if (self.elements.includes(el)) {
    // logic
  }
  if (self.targets.includes(tr)) {
    // logic
  }
}

object.addEventListener('on.xt', eventOn, true)
```

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.xt`       | `elements` `targets` | Activation event             |
| Event                   | `off.xt`      | `elements` `targets` | Deactivation event            |
| Event                   | `ondone.xt`           | `elements` `targets` | Activation event after delay and duration             |
| Event                   | `offdone.xt`           | `elements` `targets` | Deactivation event after delay and duration             |
| Event                   | `medialoaded.xt`           | `elements` `targets` | Images loaded event            |
| Event                   | `autostart.xt`           | `object` | Auto start event             |
| Event                   | `autostop.xt`           | `object` | Auto stop event             |
| Event                   | `autopause.xt`           | `object` | Auto pause event             |
| Event                   | `init.xt`           | `object` | Init event             |
| Event                   | `restart.xt`           | `object` | Restart event             |
| Event                   | `reinit.xt`           | `object` | Reinit event             |
| Event                   | `destroy.xt`           | `object` | Destroy event             |

</div>

## Properties

Access properties this way inside events:

```js
let object = document.querySelector('#my-object')
let self = Xt.get('xt-toggle', object)

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

## Demo

<demo>
  <demovanilla src="vanilla/components/toggle/events-methods">
  </demovanilla>
</demo>
