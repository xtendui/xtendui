---
type: "Components"
category: "Interaction"
parent: "Scroll"
title: "Sticky Flow"
description: "Advanced animation for postion sticky to show content on scroll for better usability."
date: "1900-10-10"
---

## Javascript

Import the **javascript** file with `import 'xtendui/src/stickyflow'`.

Initialize manually **within javascript** with `new Xt.Stickyflow(document.querySelector('.my-container'), {/* options */})`.

## Usage

Use this code to create a **sticky flow** (**use large screen to see it in action**).

Pratically it's a solution that **scrolls sticky content** when it **overflow the window**, following scroll direction.

Be sure that `sticky` parent has not `overflow-hidden` or `position: sticky;` doesn't work.

Remember to use `.items-stretch` on on the container or `.sticky` doesn't work.

[[notePrimary]]
| This addon is for css `position: sticky;` and **doesn't need** Gsap ScrollTrigger.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/scroll/stickyflow">
  </div>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `debug:Boolean`                          | `false`        | Debug on console            |
| Option                    | `element:Query`                          | `false`        | Sticky element query            |
| Option                    | `filler:Query`                          | `false`        | Filler element query            |

</div>

## Listen

Listen to events, for listeners use [this guideline](/components/javascript#listeners).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change.xt.stickyflow`                        | `input` | Position change event             |
| Event                   | `init.xt.stickyflow`           | `container` | Init or reinit event             |
| Event                   | `destroy.xt.stickyflow`           | `container` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

```js
let self = Xt.get('xt-stickyflow', document.querySelector('.my-container'))
const container = self.container
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `container:Node`       | Object node             |
| Property                   | `initial:Boolean`       | If initial or reset activation             |
| Property                   | `element:Node`       | Sticky element             |
| Property                   | `filler:Nodes`       | Filler element             |

</div>

## Methods

Call methods by getting component object.

```js
let self = Xt.get('xt-stickyflow', document.querySelector('.my-container'))
self.destroy()
self = null
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.reinit()`       | Reinit component             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>
