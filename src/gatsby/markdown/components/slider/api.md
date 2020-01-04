---
type: "Components"
badge: "Extensions"
parent: "Slider"
title: "API"
date: "2000-12-01"
---

[[notePrimary]]
| Slider uses toggle for logic, refer to [toggle's API](/components/toggle/api).

## Util

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `let self = Xt.get('xt-slider', {DOM element})`       | `object` `elements` `targets` | Get object self for this component class             |

</div>

## Methods

Call methods this way (object is the DOM element you assigned the component):

```js
const self = Xt.get('xt-slider', document.querySelector('#my-object'))
self.destroy()
self = null
```

<div class="table-scroll">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.restart()`                          | Restart component to initial             |
| Method                  | `self.reinit(saveCurrents:Boolean)`       | Reinit component and save currents as initial (default: `true`)             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>

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
| Event                   | `autostart.trigger.xt`           | `object` | Auto start event             |
| Event                   | `autostop.trigger.xt`           | `object` | Auto stop event             |

</div>

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
let self = Xt.get('xt-slider', object)

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
| Event                   | `autoheight.xt`           | `targets` | Autoheight event             |
| Event                   | `wheelstart.xt`           | `wheel` | Wheel start event             |
| Event                   | `wheelend.xt`           | `wheel` | Wheel end event             |
| Event                   | `wheel.xt`           | `wheel` | Wheel event             |
| Event                   | `dragstart.xt`           | `dragger` | Drag start event             |
| Event                   | `dragend.xt`           | `dragger` | Drag end event             |
| Event                   | `drag.xt`           | `dragger` | Drag event             |
| Event                   | `dragreset.xt`           | `dragger` | Drag reset event             |
| Event                   | `init.xt`           | `object` | Init event             |
| Event                   | `restart.xt`           | `object` | Restart event             |
| Event                   | `reinit.xt`           | `object` | Reinit event             |
| Event                   | `destroy.xt`           | `object` | Destroy event             |

</div>

## Properties

Access properties this way inside events:

```js
let object = document.querySelector('#my-object')
let self = Xt.get('xt-slider', object)

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
| Event                   | `dragger:Node`       | Dragger node             |
| Event                   | `wheel:Node`       | Wheel node             |

</div>

Here are the main drag properties inside `self.detail`:

<div class="table-scroll">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Event                   | `detail.dragStart:Number`       | Drag starting position             |
| Event                   | `detail.dragCurrent:Number`       | Drag current position             |
| Event                   | `detail.dragPos:Number`       | Drag distance from dragStart to dragCurrent with computation             |
| Event                   | `detail.dragPosOld:Number`       | Drag distance from dragStart to dragCurrent with computation on the previous frame             |

</div>

Here are the main wheel properties inside `self.detail`:

<div class="table-scroll">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Event                   | `detail.wheelCurrent:Number`       | Wheel current scroll position             |
| Event                   | `detail.wheelEnd:Number`       | Wheel end scroll position             |

</div>

## Demo

<demo>
  <demovanilla src="vanilla/components/slider/events-methods">
  </demovanilla>
</demo>
