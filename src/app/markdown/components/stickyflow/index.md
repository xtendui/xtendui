---
type: "Components"
category: "Scroll"
parent: "Stickyflow"
title: "Stickyflow"
description: "Stickyflow is a plugin that enhance css sticky position by making it scroll the content also if overflowing the window."
---

## Javascript

Import the **javascript** file with `import 'xtendui/src/stickyflow'`.

Initialize manually **within javascript** with `new Xt.Stickyflow(document.querySelector('.my-container'), {/* options */})`.

## Usage

Be sure that `sticky` parent has not `overflow-hidden` or `position: sticky;` doesn't work.

Remember to use `.items-stretch` on on the container or `.sticky` doesn't work.

> This addon is for css `position: sticky;` and **doesn't need** Gsap ScrollTrigger.

<demo>
  <div class="docs_demo_item" data-iframe="xtendui/demos/components/stickyflow/usage">
  </div>
</demo>

You can also set **min and max value** with top and bottom classes (e.g. `top-[100px] bottom-[100px]`) on `self.element`.

<demo>
  <div class="docs_demo_item" data-iframe="xtendui/demos/components/stickyflow/position">
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
| Option                    | `scrollers:Query`                          | `'.xt-overlay:not([data-xt-overlay-disabled])'`        | Query for scroll nodes besides document (ordered parent > child)             |


</div>

## Match Media

You can add **additional options** that gets added on **match media query**. You can use different queries with different and nested options.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `matches:Object`                              | `false`                     | Add additional options on match media query           |

</div>

## Util

You can get **self object** on Xtend UI components with **the constructor** or [Xt.get](/components/global/javascript#xt-get).

```js
new Xt.Stickyflow(document.querySelector('.my-container'), {}).then(self => {})

// or

Xt.get({ name: 'xt-stickyflow', el: document.querySelector('.my-container') }).then(self => {})
```

You can set **default options** for all components of the same type, with [Xt.options](/components/global/javascript#xt-options).

```js
Xt.options['xt-stickyflow'] = {
  debug: true,
}
```

By default components are **loaded and initialized only when inside viewport** or instantly if `self.container` is not visible (`display: none`).

You can force [global observer options](/components/global/javascript/#xt-observe-globals) or **singular component observer options** passing this option.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `observer:Boolean\|null`                          | `null`        | Force enable or disable intersection observer            |

</div>

## Listen

Listen to events, for listeners use [this guideline](/components/global/javascript#listeners).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change.xt.stickyflow`                        | `input` | Position change event             |
| Event                   | `setup.xt.stickyflow`           | `container` | Setup event             |
| Event                   | `init.xt.stickyflow`           | `container` | Init or reinit event             |
| Event                   | `status.xt.stickyflow`           | `container` | Status event (enabled or disabled)             |
| Event                   | `destroy.xt.stickyflow`           | `container` | Destroy event             |

</div>

## Properties

Access properties by getting [self object](/components/stickyflow/#util).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `self.componentName:String`       | Component name (used in `Xt.get`)             |
| Property                   | `self.options:Object`       | Final options             |
| Property                   | `self.initial:Boolean`       | If initial or reset activation             |
| Property                   | `self.disabled:Boolean`       | If component disabled            |
| Property                   | `self.container:Node`       | Container node             |
| Property                   | `self.element:Node`       | Sticky element             |
| Property                   | `self.filler:Nodes`       | Filler element             |
| Property                   | `self.scrollers:Node`       | All scrolling element             |
| Property                   | `self.scroller:Node`       | Current scrolling element             |

</div>

## Methods

Call methods by getting [self object](/components/stickyflow/#util).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.reinit()`       | Reinit component             |
| Method                  | `self.disable()`                          | Disable component             |
| Method                  | `self.enable()`                          | Enable component             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>
