---
type: "Components"
category: "Interaction"
parent: "Toggle"
title: "API"
date: "1980-05-05"
---

## Util

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Object                   | `let self = Xt.get('xt-toggle', {DOM element})`       | `object` `elements` `targets` | Get object self for this component class             |

</div>

## Listen

Listen to events on **single Nodes**.

```js
const el = document.querySelector('#my-element-or-target')

const eventOn = e => {
  if (e.target === el) {
    // logic
  }
}

el.addEventListener('on.xt.toggle', eventOn)
```

Listen to events on **elements or targets**.

```js
let object = document.querySelector('#my-object')
let self = Xt.get('xt-toggle', object)

const eventOn = e => {
  const tr = e.target
  // logic
}

for (const target of self.targets) {
  target.addEventListener('on.xt.toggle', eventOn)
}
```

Listen to events delegation with **useCapture**.

```js
let object = document.querySelector('#my-object')
let self = Xt.get('xt-toggle', object)

const eventOn = e => {
  const tr = e.target
  // useCapture delegation
  if (self.targets.includes(tr)) {
    // logic
  }
}

object.addEventListener('on.xt.toggle', eventOn, true)
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.xt.toggle`       | `elements` `targets` | Activation event             |
| Event                   | `off.xt.toggle`      | `elements` `targets` | Deactivation event            |
| Event                   | `ondone.xt.toggle`           | `elements` `targets` | Activation event after delay and duration             |
| Event                   | `offdone.xt.toggle`           | `elements` `targets` | Deactivation event after delay and duration             |
| Event                   | `medialoaded.xt.toggle`           | `elements` `targets` | Images loaded event            |
| Event                   | `autostart.xt.toggle`           | `object` | Auto start event             |
| Event                   | `autostop.xt.toggle`           | `object` | Auto stop event             |
| Event                   | `autopause.xt.toggle`           | `object` | Auto pause event             |
| Event                   | `init.xt.toggle`           | `object` | Init event             |
| Event                   | `status.xt.toggle`           | `object` | Status event (enabled or disabled)             |
| Event                   | `restart.xt.toggle`           | `object` | Restart event             |
| Event                   | `reinit.xt.toggle`           | `object` | Reinit event             |
| Event                   | `destroy.xt.toggle`           | `object` | Destroy event             |

</div>

## Trigger

Trigger events on **DOM elements**.

```js
document.querySelector('#my-element-or-target').dispatchEvent(new CustomEvent('on.trigger.xt.toggle'))
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.trigger.xt.toggle`       | `elements` `targets` | Activation event             |
| Event                   | `off.trigger.xt.toggle`      | `elements` `targets` | Deactivation event            |
| Event                   | `closeauto.trigger.xt`           | `window` | Autclose all components with `closeAuto: true` option             |
| Event                   | `autostart.trigger.xt.toggle`           | `object` | Auto start event             |
| Event                   | `autostop.trigger.xt.toggle`           | `object` | Auto stop event             |

</div>

You can pass `e.detail` to the trigger event. For example with this code triggered `on.xt.toggle` and `ondone.xt.toggle` will have `e.detail.skip = true`.

```js
document.querySelector('#my-element-or-target').dispatchEvent(new CustomEvent('on.trigger.xt.toggle', { detail: { skip: true } }))
```

## Properties

Access properties by getting component object.

```js
let object = document.querySelector('#my-object')
let self = Xt.get('xt-toggle', object)
const elements = self.elements
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `elements:Array`       | Elements nodes             |
| Property                   | `targets:Array`       | Targets nodes            |
| Property                   | `initial:Boolean`       | If initial or reset activation            |
| Property                   | `disabled:Boolean`       | If component disabled            |
| Property                   | `direction:Number`       | Direction `1` or `-1`            |

</div>

## Methods

Call methods by getting component object.

```js
let self = Xt.get('xt-toggle', document.querySelector('#my-object'))
self.destroy()
self = null
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.getElements(el:Node|null)`                          | Get all elements or all elements from element or target             |
| Method                  | `self.getTargets(el:Nod|null)`                          | Get all targets from or all targets from element or target             |
| Method                  | `self.getElementsGroups()`                          | Get elements (one per group)             |
| Method                  | `self.getTargetsGroups()`                          | Get targets (one per group)             |
| Method                  | `self.hasCurrent(el:Node)`                          | Returns `true` or `false` if element or target is activated             |
| Method                  | `self.reinit(saveCurrents:Boolean)`       | Reinit component and save currents as initial (default: `true`)             |
| Method                  | `self.restart()`                          | Restart component to initial             |
| Method                  | `self.disable()`                          | Disable component             |
| Method                  | `self.enable()`                          | Enable component             |
| Method                  | `self.destroy(weak:Boolean)`              | Destroy component            |

</div>

You can get activated elements or targets with `hasCurrent`.

```js
self.elements.filter(x => self.hasCurrent(x))
self.targets.filter(x => self.hasCurrent(x))
```

Index methods:

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.getNextIndex(index:Number:false, amount:Number:1, loop:Boolean:null)`                          | Get next activation index             |
| Method                  | `self.getNext(amount:Number:1, loop:Boolean:null)`                          | Get next activation element             |
| Method                  | `self.goToNext(amount:Number:1, force:Boolean:false, loop:Boolean:null)`                          | Activate next             |
| Method                  | `self.getPrevIndex(index:Number:false, amount:Number:1, loop:Boolean:null)`                          | Get prev activation index             |
| Method                  | `self.getPrev(amount:Number:1, loop:Boolean:null)`                          | Get prev activation element             |
| Method                  | `self.goToPrev(amount:Number:1, force:Boolean:false, loop:Boolean:null)`                          | Activate prev             |
| Method                  | `self.getNumIndex(index:Number, loop:Boolean:null)`                          | Get number activation index             |
| Method                  | `self.getNum(index:Number, loop:Boolean:null)`                          | Get number activation element             |
| Method                  | `self.goToNum(index:Number, force:Boolean:false, loop:Boolean:null)`                          | Activate number             |

</div>

## Demo

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/toggle/events-methods">
  </div>
</demo>
