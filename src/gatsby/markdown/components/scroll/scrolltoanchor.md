---
type: "Components"
category: "Interaction"
parent: "Scroll"
title: "Scroll to Anchor"
description: "Automatically scroll to an id clicking the relative anchor with that id."
date: "1900-10-10"
---

## Javascript

Import the **javascript** file with `import 'xtendui/src/scrolltoanchor'`.

Initialize with **javascript** with `new Xt.Scrolltoanchor(document.querySelector('.my-object'), {/* options */})`.

## Usage

Use this code to create a **scroll to anchor**.

[[noteDefault]]
| This demo uses [scroll sticky](/components/scroll/sticky) and [overlay](/components/overlay) see documentation for more info.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/scrolltoanchor">
  </div>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/scrolltoanchor-overlay">
  </div>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `elements:Array`                          | `[href*="{hash}"]`        | Query for hash links where `{hash}` is the hash part of the link            |
| Option                    | `scrollElements:Query`                          | `'.xt-overlay`        | Query for scroll nodes besides document (ordered parent > child)             |
| Option                    | `class:String`                          | `'active'`        | Activation class             |
| Option                    | `scrollDelay:Number`                          | `250`        | Delay on scroll checks             |
| Option                    | `hash:Boolean`                          | `false`        | Update url with hash             |
| Option                    | `scrollPosition({ self }):Function`             | `<Function>`        | Positioning function return `Number`             |
| Option                    | `scrollSpace({ self }):Function`                          | `<Function>`        | Positioning space from top return `Number`             |
| Option                    | `scrollDistance({ self }):Function`                          | `<Function>`        | Distance from top on scroll checks return `Number`            |

</div>

## Listen

Listen to events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change.xt.scrolltoanchor`      | `object` | Change event            |
| Event                   | `init.xt.scrolltoanchor`           | `object` | Init event             |
| Event                   | `destroy.xt.scrolltoanchor`           | `object` | Destroy event             |

</div>

## Trigger

Trigger events on **DOM elements**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `scroll.trigger.xt.scrolltoanchor`       | `scrollElement` | Scroll event             |

</div>

## Properties

Access properties by getting component object.

```js
let self = Xt.get('xt-scrolltoanchor', document.querySelector('.my-object'))
const object = self.object
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `position:Number`       | Current scroll position to scroll to             |
| Property                   | `scrollElement:Node`       | Current scrolling element             |
| Property                   | `scrollPosition:Number`       | Current scroll position             |
| Property                   | `scrollSpace:Number`       | Current scroll space             |
| Property                   | `scrollDistance:Number`       | Current scroll distance             |

</div>

## Methods

Call methods by getting component object.

```js
let self = Xt.get('xt-scrolltoanchor', document.querySelector('.my-object'))
self.destroy()
self = null
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.reinit()`       | Reinit component             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>
