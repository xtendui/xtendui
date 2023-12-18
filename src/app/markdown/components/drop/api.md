---
type: "Components"
category: "Toggle"
parent: "Drop"
title: "API"
date: "1980-05-05"
---

## Util

You can get **self object from DOM node** on Xtend UI components with [Xt.get](/components/global/javascript#xt-get).

```js
Xt.get({ name: 'xt-drop', el: document.querySelector('.my-container') }).then(self => {})
```

You can set **default options** for all components of the same type, with [Xt.options](/components/global/javascript#xt-options).

```js
Xt.options['xt-drop'] = {
  debug: true,
}
```

By default components are **loaded and initialized only when inside viewport**.

You can set [global observer options](/components/global/javascript/#xt-observe-globals) or **singular component observer options** passing this options:

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `observer:Boolean`                          | `true`        | Use intersection observer            |

</div>

## Listen

Listen to events, for listeners use [this guideline](/components/global/javascript#listeners).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.xt.drop`       | `elements` `targets` | Activation event (event `e.detail` is original event)             |
| Event                   | `off.xt.drop`      | `elements` `targets` | Deactivation event (event `e.detail` is original event)            |
| Event                   | `ondone.xt.drop`           | `elements` `targets` | Activation event after delay and duration             |
| Event                   | `offdone.xt.drop`           | `elements` `targets` | Deactivation event after delay and duration             |
| Event                   | `medialoaded.xt.drop`           | `elements` `targets` | Images loaded event            |
| Event                   | `init.xt.drop`           | `container` | Init or reinit event             |
| Event                   | `status.xt.drop`           | `container` | Status event (enabled or disabled)             |
| Event                   | `restart.xt.drop`           | `container` | Restart event             |
| Event                   | `destroy.xt.drop`           | `container` | Destroy event             |

</div>

## Trigger

Trigger events on **DOM node**.

```js
document.querySelector('#my-element-or-target').dispatchEvent(new CustomEvent('on.trigger.xt.drop'))
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.trigger.xt.drop`       | `elements` `targets` | Activation event             |
| Event                   | `off.trigger.xt.drop`      | `elements` `targets` | Deactivation event            |
| Event                   | `openauto.trigger.xt`           | `Node` | Trigger the event `openauto.trigger.xt` **inside elements or targets** to automatically activate `openauto: true`             |
| Event                   | `closeauto.trigger.xt`           | `window` | Trigger the event `closeauto.trigger.xt` **on window** to automatically deactivate if `closeauto: true`             |

</div>

You can pass `e.detail` to the trigger event.

With on and off event `e.detail.force = true` will force the activation/deactivation skipping checks.

```js
document.querySelector('#my-element-or-target').dispatchEvent(new CustomEvent('on.trigger.xt.drop', { detail: { force: true } }))
```

## Properties

Access properties by getting [self object](/components/global/javascript#xt-get).

```js
Xt.get({ name: 'xt-drop', el: document.querySelector('.my-container') }).then(self => {
  const container = self.container
})
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `componentName:String`       | Component name (used in `Xt.get`)             |
| Property                   | `options:Object`       | Final options             |
| Property                   | `initial:Boolean`       | If initial or reset activation            |
| Property                   | `disabled:Boolean`       | If component disabled            |
| Property                   | `container:Node`       | Container node             |
| Property                   | `elements:Array`       | Elements nodes             |
| Property                   | `targets:Array`       | Targets nodes            |
| Property                   | `direction:Number`       | Direction `1` or `-1`            |
| Property                   | `index:Number\|null`       | Current activated index            |

</div>

## Methods

Call methods by getting [self object](/components/global/javascript#xt-get).

```js
Xt.get({ name: 'xt-drop', el: document.querySelector('.my-container') }).then(self => {
  self.destroy()
})
```

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
  <div class="docs_demo_item" data-iframe="demos/components/drop/api">
  </div>
</demo>