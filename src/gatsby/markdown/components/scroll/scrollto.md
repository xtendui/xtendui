---
type: "Components"
category: "Interaction"
parent: "Scroll"
title: "Scroll to"
description: "Automatically scroll to elements or anchors with automatic activation on scroll."
date: "1900-10-10"
---

## Javascript

Import the **javascript** file with `import 'xtendui/src/scrollto'`.

Initialize with **javascript** with `new Xt.Scrollto(document.querySelector('.my-object'), {/* options */})`.

## Usage

Use this code to create a **scroll to anchor**.

[[noteDefault]]
| This demo uses [scroll sticky](/components/scroll/sticky) and [overlay](/components/overlay) see documentation for more info.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/scrollto">
  </div>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/scrollto-overlay">
  </div>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `anchors:Array`                          | `[href*="{hash}"]`        | Query for hash links where `{hash}` is the hash part of the link            |
| Option                    | `scrolls:Query`                          | `'.xt-overlay'`        | Query for scroll nodes besides document (ordered parent > child)             |
| Option                    | `class:String`                          | `'in'`        | Activation class for anchors              |
| Option                    | `scrollActivation:Boolean`                          | `true`        | Activate anchors automatically on scroll             |
| Option                    | `scrollDelay:Number`                          | `150`        | Delay on scroll checks             |
| Option                    | `hash:Boolean`                          | `false`        | Update url with hash on anchors             |
| Option                    | `scrollPosition({ self }):Function`             | `<Function>`        | Positioning function return `Number`             |
| Option                    | `scrollSpace({ self }):Function`                          | `<Function>`        | Positioning space from top return `Number`             |
| Option                    | `scrollDistance({ self }):Function`                          | `<Function>`        | Distance from top on scroll checks return `Number`            |

</div>

## Listen

Listen to events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `scrollto.xt.scrollto`      | `object` | Scrolto event           |
| Event                   | `init.xt.scrollto`           | `object` | Init event             |
| Event                   | `destroy.xt.scrollto`           | `object` | Destroy event             |

</div>

## Trigger

Trigger events on **DOM elements**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `scrollto.trigger.xt.scrollto`       | `<any DOM node>` | Scroll to a Node also if not anchored              |

</div>

## Properties

Access properties by getting component object.

```js
let self = Xt.get('xt-scrollto', document.querySelector('.my-object'))
const object = self.object
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `position:Number`       | Current scroll position to scroll to             |
| Property                   | `scroll:Node`       | Current scrolling element             |
| Property                   | `scrollPosition:Number`       | Current scroll position             |
| Property                   | `scrollSpace:Number`       | Current scroll space             |
| Property                   | `scrollDistance:Number`       | Current scroll distance             |

</div>

## Methods

Call methods by getting component object.

```js
let self = Xt.get('xt-scrollto', document.querySelector('.my-object'))
self.destroy()
self = null
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.reinit()`       | Reinit component             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>
