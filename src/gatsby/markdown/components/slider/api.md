---
type: "Components"
badge: "Extensions"
parent: "Slider"
title: "API"
date: "2019-01-15"
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

Index methods:

<div class="table-scroll">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.getNextIndex(amount:Number:1, loop:Boolean:null)`                          | Get next activation index             |
| Method                  | `self.getNext(amount:Number:1, loop:Boolean:null)`                          | Get next activation element             |
| Method                  | `self.goToNext(amount:Number:1, force:Boolean:false, loop:Boolean:null)`                          | Activate next             |
| Method                  | `self.getPrevIndex(amount:Number:1, loop:Boolean:null)`                          | Get prev activation index             |
| Method                  | `self.getPrev(amount:Number:1, loop:Boolean:null)`                          | Get prev activation element             |
| Method                  | `self.goToPrev(amount:Number:1, force:Boolean:false, loop:Boolean:null)`                          | Activate prev             |
| Method                  | `self.getNumIndex(index:Number, loop:Boolean:null)`                          | Get number activation index             |
| Method                  | `self.getNum(index:Number, loop:Boolean:null)`                          | Get number activation element             |
| Method                  | `self.goToNum(index:Number, force:Boolean:false, loop:Boolean:null)`                          | Activate number             |

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

[[noteDefault]]
| For triggering and listening the **resize event**, refer to [global's js](/components/global/js#events-resize).

## Listen

Listen to events this way:

```js
const eventOn = e => {
  // logic
}

document.querySelector('#my-element-or-target').addEventListener('on.xt', eventOn)
```

Listen to events delegation with **useCapture** this way:

```js
let object = document.querySelector('#my-object')
let self = Xt.get('xt-slider', object)

const eventOn = e => {
  const element = e.target
  // useCapture delegation
  if (self.elements.includes(element)) {
    // logic
  }
  if (self.targets.includes(element)) {
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
const elements = self.elements
```

Here are the main properties inside `self`:

<div class="table-scroll">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Event                   | `object:Node`       | Object node             |
| Event                   | `elements:Array`       | Elements nodes             |
| Event                   | `targets:Array`       | Targets nodes            |
| Event                   | `initial:Boolean`       | If first activation             |
| Event                   | `continue:Boolean`       | If continue activation (wrap)             |
| Event                   | `direction:Number`       | Direction `1` or `-1`            |
| Event                   | `dragger:Node`       | Dragger node             |
| Event                   | `wheel:Node`       | Wheel node             |

</div>

Here are the main drag properties inside `self.detail`:

<div class="table-scroll">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Event                   | `detail.draggerWidth:Number`       | Dragger width             |
| Event                   | `detail.dragRatio:Number`       | Drag ratio from 0 to 1             |
| Event                   | `detail.dragRatioInverse:Number`       | Drag ratio inverse from 1 to 0             |
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
