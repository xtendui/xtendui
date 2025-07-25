---
type: "Components"
category: "Toggle"
parent: "Overlay"
title: "API"
date: "1980-05-05"
---

## Util

You can get **self object** on Xtend UI components with **the constructor** or [Xt.get](/xtendui/components/global/javascript#xt-get).

```js
new Xt.Overlay(document.querySelector('.my-container'), {}).then(self => {})

// or

Xt.get({ name: 'xt-overlay', el: document.querySelector('.my-container') }).then(self => {})
```

You can set **default options** for all components of the same type, with [Xt.options](/xtendui/components/global/javascript#xt-options).

```js
Xt.options['xt-overlay'] = {
  debug: true,
}
```

By default components are **loaded and initialized only when inside viewport** or instantly if `self.container` is not visible (`display: none`).

You can force [global observer options](/xtendui/components/global/javascript/#xt-observe-globals) or **singular component observer options** passing this option.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `observer:Boolean\|null`                          | `null`        | Force enable or disable intersection observer            |

</div>

## Listen

Listen to events, for listeners use [this guideline](/xtendui/components/global/javascript#listeners).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.xt.overlay`       | `elements` `targets` | Activation event (event `e.detail` is original event)             |
| Event                   | `off.xt.overlay`      | `elements` `targets` | Deactivation event (event `e.detail` is original event)            |
| Event                   | `ondone.xt.overlay`           | `elements` `targets` | Activation event after delay and duration             |
| Event                   | `offdone.xt.overlay`           | `elements` `targets` | Deactivation event after delay and duration             |
| Event                   | `medialoaded.xt.overlay`           | `elements` `targets` | Images loaded event            |
| Event                   | `setup.xt.overlay`           | `container` | Setup event             |
| Event                   | `init.xt.overlay`           | `container` | Init or reinit event             |
| Event                   | `status.xt.overlay`           | `container` | Status event (enabled or disabled)             |
| Event                   | `restart.xt.overlay`           | `container` | Restart event             |
| Event                   | `destroy.xt.overlay`           | `container` | Destroy event             |

</div>

## Trigger

Trigger events on **DOM node**.

```js
document.querySelector('#my-element-or-target').dispatchEvent(new CustomEvent('on.trigger.xt.overlay'))
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.trigger.xt.overlay`       | `elements` `targets` | Activation event             |
| Event                   | `off.trigger.xt.overlay`      | `elements` `targets` | Deactivation event            |
| Event                   | `openauto.trigger.xt`           | `Node` | Trigger the event `openauto.trigger.xt` **inside elements or targets** to automatically activate `openauto: true`             |
| Event                   | `closeauto.trigger.xt`           | `window` | Trigger the event `closeauto.trigger.xt` **on window** to automatically deactivate **current activation** if `closeauto: true`             |

</div>

You can pass `e.detail` to the trigger event.

With on and off event `e.detail.force = true` will force the activation/deactivation skipping checks.

```js
document.querySelector('#my-element-or-target').dispatchEvent(new CustomEvent('on.trigger.xt.overlay', { detail: { force: true } }))
```

## Properties

Access properties by getting [self object](/xtendui/components/overlay/api/#util).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `self.componentName:String`       | Component name (used in `Xt.get`)             |
| Property                   | `self.options:Object`       | Final options             |
| Property                   | `self.initial:Boolean`       | If initial or reset activation            |
| Property                   | `self.disabled:Boolean`       | If component disabled            |
| Property                   | `self.container:Node`       | Container node             |
| Property                   | `self.elements:Array`       | Elements nodes             |
| Property                   | `self.targets:Array`       | Targets nodes            |
| Property                   | `self.direction:Number`       | Direction `1` or `-1`            |
| Property                   | `self.index:Number\|null`       | Current activated index            |

</div>

## Methods

Call methods by getting [self object](/xtendui/components/overlay/api/#util).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.getElements({ el:Node, same:Boolean = false })`                          | Get all elements from element or target, returns `Array`             |
| Method                  | `self.getTargets({ el:Node, same:Boolean = false })`                          | Get all targets from element or target, returns `Array`             |
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
| Method                  | `self.getNextIndex({ index:Number\|false = false, amount:Number = 1, loop:Boolean\|null = null })`                          | Get next activation index, returns `Number\|null`             |
| Method                  | `self.getNext({ amount:Number = 1, loop:Boolean\|null = null })`                          | Get next element, returns `Node\|null`             |
| Method                  | `self.goToNext({ amount:Number = 1, force:Boolean = false, loop:Boolean\|null = null })`                          | Activate next element, returns `Node\|null`             |
| Method                  | `self.getPrevIndex({ index:Number\|false = false, amount:Number = 1, loop:Boolean\|null = null })`                          | Get prev activation index, returns `Number\|null`             |
| Method                  | `self.getPrev({ amount:Number = 1, loop:Boolean\|null = null })`                          | Get previous element, returns `Node\|null`             |
| Method                  | `self.goToPrev({ amount:Number = 1, force:Boolean = false, loop:Boolean\|null = null })`                          | Activate previous element, returns `Node\|null`             |
| Method                  | `self.getNumIndex({ index:Number, loop:Boolean\|null = null }`                          | Get index from number, return `Number\|null`             |
| Method                  | `self.getNum({ index:Number = 1, loop:Boolean\|null = null })`                          | Get element from index, returns `Node\|null`             |
| Method                  | `self.goToNum({ index:Number, force:Boolean = false, loop:Boolean\|null = null })`                          | Activate index, returns `Node\|null`             |

</div>

## API Demo

<demo>
  <div class="docs_demo_item" data-iframe="xtendui/demos/components/overlay/api">
  </div>
</demo>
