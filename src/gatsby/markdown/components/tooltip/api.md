---
type: "Components"
category: "Interaction"
parent: "Tooltip"
title: "API"
date: "1980-05-05"
---

## Util

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Object                   | `let self = Xt.get('xt-tooltip', {DOM element})`       | `object` `elements` `targets` | Get object self for this component class             |

</div>

## Listen

See [javascript listeners](/introduction/javascript#listeners) for examples of listening to events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.xt.tooltip`       | `elements` `targets` | Activation event             |
| Event                   | `off.xt.tooltip`      | `elements` `targets` | Deactivation event            |
| Event                   | `ondone.xt.tooltip`           | `elements` `targets` | Activation event after delay and duration             |
| Event                   | `offdone.xt.tooltip`           | `elements` `targets` | Deactivation event after delay and duration             |
| Event                   | `medialoaded.xt.tooltip`           | `elements` `targets` | Images loaded event            |
| Event                   | `init.xt.tooltip`           | `object` | Init event             |
| Event                   | `status.xt.tooltip`           | `object` | Status event (enabled or disabled)             |
| Event                   | `restart.xt.tooltip`           | `object` | Restart event             |
| Event                   | `reinit.xt.tooltip`           | `object` | Reinit event             |
| Event                   | `destroy.xt.tooltip`           | `object` | Destroy event             |

</div>

## Trigger

Trigger events on **DOM elements**.

```js
document.querySelector('#my-element-or-target').dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.trigger.xt.tooltip`       | `elements` `targets` | Activation event             |
| Event                   | `off.trigger.xt.tooltip`      | `elements` `targets` | Deactivation event            |
| Event                   | `closeauto.trigger.xt`           | `window` | Autclose all components with `closeAuto: true` option             |

</div>

You can pass `e.detail` to the trigger event. For example with this code triggered `on.xt.tooltip` and `ondone.xt.tooltip` will have `e.detail.skip = true`.

```js
document.querySelector('#my-element-or-target').dispatchEvent(new CustomEvent('on.trigger.xt.tooltip', { detail: { skip: true } }))
```

## Properties

Access properties by getting component object.

```js
let self = Xt.get('xt-tooltip', document.querySelector('.my-object'))
const object = self.object
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
let self = Xt.get('xt-tooltip', document.querySelector('.my-object'))
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

## Demo

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/tooltip/events-methods">
  </div>
</demo>