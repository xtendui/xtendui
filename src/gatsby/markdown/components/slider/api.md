---
type: "Components"
category: "Toggle"
parent: "Slider"
title: "API"
date: "1980-05-05"
---

## Util

You can get **self object from DOM node** on Xtend UI components with [Xt.get](/components/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-slider', el: document.querySelector('.my-container') })
```

You can set **default options** for Xtend UI components, with [Xt.options](/components/javascript#xt-options).

```js
Xt.options['xt-slider'] = {
  debug: true,
}
```

## Listen

Listen to events, for listeners use [this guideline](/components/javascript#listeners).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.xt.slider`       | `elements` `targets` | Activation event (event `e.detail` is original event)             |
| Event                   | `off.xt.slider`      | `elements` `targets` | Deactivation event (event `e.detail` is original event)            |
| Event                   | `ondone.xt.slider`           | `elements` `targets` | Activation event after delay and duration             |
| Event                   | `offdone.xt.slider`           | `elements` `targets` | Deactivation event after delay and duration             |
| Event                   | `medialoaded.xt.slider`           | `elements` `targets` | Images loaded event, only when setting `options.mediaLoaded: true`           |
| Event                   | `autostart.xt.slider`           | `container` | Auto start event             |
| Event                   | `autostop.xt.slider`           | `container` | Auto stop event             |
| Event                   | `autopause.xt.slider`           | `container` | Auto pause event             |
| Event                   | `autoheight.xt.slider`           | `targets` | Autoheight event             |
| Event                   | `dragstart.xt.slider`           | `dragger` | Drag start event             |
| Event                   | `dragend.xt.slider`           | `dragger` | Drag end event             |
| Event                   | `drag.xt.slider`           | `dragger` | Drag event             |
| Event                   | `dragposition.xt.slider`           | `dragger` | Drag position event             |
| Event                   | `dragreset.xt.slider`           | `dragger` | Drag reset event             |
| Event                   | `init.xt.slider`           | `container` | Init or reinit event             |
| Event                   | `status.xt.slider`           | `container` | Status event (enabled or disabled)             |
| Event                   | `restart.xt.slider`           | `container` | Restart event             |
| Event                   | `destroy.xt.slider`           | `container` | Destroy event             |

</div>

## Trigger

Trigger events on **DOM node**.

```js
document.querySelector('#my-element-or-target').dispatchEvent(new CustomEvent('on.trigger.xt.slider'))
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.trigger.xt.slider`       | `elements` `targets` | Activation event             |
| Event                   | `off.trigger.xt.slider`      | `elements` `targets` | Deactivation event            |
| Event                   | `autostart.trigger.xt.slider`           | `container` | Auto start event             |
| Event                   | `autostop.trigger.xt.slider`           | `container` | Auto stop event             |

</div>

You can pass `e.detail` to the trigger event.

With on and off event `e.detail.force = true` will force the activation/deactivation skipping checks.

```js
document.querySelector('#my-element-or-target').dispatchEvent(new CustomEvent('on.trigger.xt.slider', { detail: { force: true } }))
```

## Properties

Access properties by getting [self object](/components/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-slider', el: document.querySelector('.my-container') })
const container = self.container
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `initial:Boolean`       | If initial or reset activation            |
| Property                   | `disabled:Boolean`       | If component disabled            |
| Property                   | `container:Node`       | Container node             |
| Property                   | `elements:Array`       | Elements nodes             |
| Property                   | `targets:Array`       | Targets nodes            |
| Property                   | `wrap:Boolean`       | If wrap activation             |
| Property                   | `direction:Number`       | Direction `1` or `-1`            |
| Property                   | `dragger:Node`       | Dragger node             |
| Property                   | `drag.size:Number`       | Dragger size             |
| Property                   | `drag.position:Number`       | Current drag position, just set this value in `dragposition.xt.slider`             |
| Property                   | `drag.final:Number`       | Final drag position, just use this value in `dragposition.xt.slider`             |
| Property                   | `drag.ratio:Number`       | Current drag ratio from 0 to 1             |
| Property                   | `drag.ratioInverse:Number`       | Current drag inverse from 1 to 0             |
| Property                   | `drag.instant:Boolean`       | Is `true` if is dragging activation or setup activation             |

</div>

## Methods

Call methods by getting [self object](/components/javascript#xt-get).

```js
const self = Xt.get({ name: 'xt-slider', el: document.querySelector('.my-container') })
self.destroy()
self = null
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.getElements(el:Node, same:Boolean = false)`                          | Get all elements from element or target, also with same drag activation, returns `Array`             |
| Method                  | `self.getTargets(el:Node, same:Boolean = false)`                          | Get all targets from element or target, also with same drag activation, returns `Array`             |
| Method                  | `self.getElementsGroups()`                          | Get elements (one per group), returns `Array`             |
| Method                  | `self.hasCurrent({ el:Node, same:Boolean = false })`                          | Check if element or target is activated, returns `Boolean`             |
| Method                  | `self.getIndex({ el:Node })`                          | Get activation index of from element or target, returns `Number`             |
| Method                  | `self.reinit({ save:Boolean = true })`       | Reinit component and save currents as initial (default: `true`)             |
| Method                  | `self.restart()`                          | Restart component to initial             |
| Method                  | `self.disable()`                          | Disable component             |
| Method                  | `self.enable()`                          | Enable component             |
| Method                  | `self.destroy({ weak:Boolean = false })`              | Destroy component            |

</div>

You can get activated elements or targets with `hasCurrent`.

```js
self.elements.filter(x => self.hasCurrent({ el: x }))
self.targets.filter(x => self.hasCurrent({ el: x }))
```

Index methods, they all consider `options.loop`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.getNextIndex({ index:Number|false = false, amount:Number = 1, loop:Boolean|null = null })`                          | Get next activation index, returns `Number|null`             |
| Method                  | `self.getNext({ amount:Number = 1, loop:Boolean|null = null })`                          | Get next element, returns `Node|null`             |
| Method                  | `self.goToNext({ amount:Number = 1, force:Boolean = false, loop:Boolean|null = null })`                          | Activate next element, returns `Node|null`             |
| Method                  | `self.getPrevIndex({ index:Number|false = false, amount:Number = 1, loop:Boolean|null = null })`                          | Get prev activation index, returns `Number|null`             |
| Method                  | `self.getPrev({ amount:Number = 1, loop:Boolean|null = null })`                          | Get previous element, returns `Node|null`             |
| Method                  | `self.goToPrev({ amount:Number = 1, force:Boolean = false, loop:Boolean|null = null })`                          | Activate previous element, returns `Node|null`             |
| Method                  | `self.getNumIndex({ index:Number, loop:Boolean|null = null }`                          | Get index from number, return `Number|null`             |
| Method                  | `self.getNum({ index:Number = 1, loop:Boolean|null = null })`                          | Get element from index, returns `Node|null`             |
| Method                  | `self.goToNum({ index:Number, force:Boolean = false, loop:Boolean|null = null })`                          | Activate index, returns `Node|null`             |

</div>

## API Demo

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/slider/api">
  </div>
</demo>
