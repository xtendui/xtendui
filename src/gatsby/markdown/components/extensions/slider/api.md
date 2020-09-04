---
type: "Components"
category: "Extensions"
parent: "Slider"
title: "API"
date: "2019-01-15"
---

## Demo

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/extensions/slider/events-methods">
  </div>
</demo>
## Util

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Object                   | `let self = Xt.get('xt-slider', {DOM element})`       | `object` `elements` `targets` | Get object self for this component class             |

</div>

## Methods

Call methods by getting component object.

```js
const self = Xt.get('xt-slider', document.querySelector('#my-object'))
self.destroy()
self = null
```

<div class="table-scroll">

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

Trigger events on **DOM elements**.

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

Listen to events on **DOM elements**.

```js
const el = document.querySelector('#my-element-or-target')

const eventOn = e => {
  if (e.target === el) {
  // logic
  }
}

el.addEventListener('on.xt', eventOn)
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
| Event                   | `medialoaded.xt`           | `elements` `targets` | Images loaded event, only when setting `options.mediaLoaded: true`           |
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

Access properties by getting component object.

```js
let object = document.querySelector('#my-object')
let self = Xt.get('xt-slider', object)
const elements = self.elements
```

<div class="table-scroll">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `object:Node`       | Object node             |
| Property                   | `elements:Array`       | Elements nodes             |
| Property                   | `targets:Array`       | Targets nodes            |
| Property                  | `initial:Boolean`       | If initial or reset activation            |
| Property                   | `wrap:Boolean`       | If wrap activation             |
| Property                   | `direction:Number`       | Direction `1` or `-1`            |
| Property                   | `dragger:Node`       | Dragger node             |
| Property                   | `wheel:Node`       | Wheel node             |
| Property                   | `detail.dragging:Boolean`       | Returns true when slider is being dragged or just being dragged             |
| Property                   | `detail.dragBlock:Boolean`       | Returns true when slider is blocked on dragging and other interactions are prevented             |
| Property                   | `detail.draggerWidth:Number`       | Dragger width             |
| Property                   | `detail.dragRatio:Number`       | Drag ratio from 0 to 1             |
| Property                   | `detail.dragRatioInverse:Number`       | Drag ratio inverse from 1 to 0             |
| Property                   | `detail.dragStart:Number`       | Drag starting position             |
| Property                   | `detail.dragCurrent:Number`       | Drag current position             |
| Property                   | `detail.dragPos:Number`       | Drag distance from dragStart to dragCurrent with computation             |
| Property                   | `detail.dragPosOld:Number`       | Drag distance from dragStart to dragCurrent with computation on the previous frame             |
| Property                   | `detail.wheelCurrent:Number`       | Wheel current scroll position             |
| Property                   | `detail.wheelEnd:Number`       | Wheel end scroll position             |

</div>

