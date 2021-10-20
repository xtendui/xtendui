---
type: "Components"
category: "Scroll"
parent: "Scrollto"
title: "Scrollto"
description: "Scrollto is a plugin that manages interaction scroll with hash links or any node."
---

## Javascript

Import the **javascript** file with `import 'xtendui/src/scrollto'`.

Initialize manually **within javascript** with `new Xt.Scrollto(document.querySelector('.my-container'), {/* options */})`.

## Usage

Use **tailwind variants** `on:`, `group-on:` to assign animations to anchors elements.

You can also scroll to a Node also if not anchored using the event `scrollto.trigger.xt.scrollto`.

> This demo uses [scroll sticky](/components/scrolltrigger/sticky) see documentation for more info.

> Do not assign **other components** to `anchors` or the components activations conflict.

Try the demo [on a new page](/demos/components/scrollto/usage#anchor-2) to preview location hash changes.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrollto/usage">
  </div>
</demo>

You can also **set scroll position without gsap**.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrollto/usage-simple">
  </div>
</demo>

It works also inside [overlay](/components/overlay) and it automatically open **overlay and all parent components** with `openauto: true`.

Try the demo [on a new page](/demos/components/scrollto/overlay#anchor-2) to preview location hash changes.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrollto/overlay">
  </div>
</demo>

## Toggle

You can use the Scrollto component in conjunction with any **toggle component** ([toggle](/components/toggle/interaction#hash), [drop](/components/drop/interaction#hash), [overlay](/components/overlay/interaction#hash), [slider](/components/slider/interaction#hash), [tooltip](/components/tooltip/interaction#hash)). It also integrates with the **toggle hash** interaction.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `scrollto:Boolean\|Query\|String`                          | `false`        | On activation trigger [scrollto](/components/scrollto) to `self.container` or to a query or to type can be `elements`, `targets`, `elementsInner`, `targetsInner`            |
| Option                  | `scrolltoInit:Boolean`                          | `false`        | Scrollto also on initialization (`data-xt-hash` or `.on` or `options.min` etc..)            |

</div>

> Use `a[role="button"]` instead of `a[href]`. Use `queue: false` for proper browser back button.

Try the demo [on a new page](/demos/components/scrollto/toggle#anchor-2) to preview location hash changes.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrollto/toggle">
  </div>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `debug:Boolean`                          | `false`        | Debug on console            |
| Option                    | `anchors:Array`                          | `[href*="{hash}"]:not([href$="#"])`        | Query for hash links where `{hash}` is the hash part of the link            |
| Option                    | `scrollers:Query`                          | `'.xt-overlay:not([data-xt-overlay-disabled])'`        | Query for scroll nodes besides document (ordered parent > child)             |
| Option                    | `class:String`                          | `'on'`        | Activation class for anchors              |
| Option                    | `events:String\|false`                          | `'scroll off.xt.overlay'`        | Events of `self.scrollers` that triggers activation              |
| Option                    | `scrollActivation:Boolean`                          | `true`        | Activate anchors automatically on scroll             |
| Option                    | `scrollDelay:Number`                          | `150`        | Delay on scroll checks             |
| Option                    | `hash:Boolean`                          | `false`        | Update url with hash on anchors, if false you can use `[data-xt-scrollto-hash="true"]` or `[data-xt-scrollto-hash="false"]` on **each link**             |
| Option                    | `position({ self }):Function`             | `<Function>`        | Positioning function that sets `self.position`, return `Number`             |
| Option                    | `space({ self }):Function`                          | `<Function>`        | Positioning space window top that sets `self.space`, return `Number`             |
| Option                    | `duration({ self }):Function`                          | `<Function>`        | Scroll duration depending on `self.scroll.scrollTop` and `self.position` that sets `self.duration`, return `Number`            |

</div>

Default functions as follow.

```js
position: ({ self }) => {
  const rect = self.target.getBoundingClientRect()
  let position = rect.top + self.scroller.scrollTop
  if (self.scroller !== document.scrollingElement) {
    const rectScrollElement = self.scroller.getBoundingClientRect()
    position = position - rectScrollElement.top
  }
  return position
},
space: () => {
  return window.innerHeight / 6
},
duration: () => {
  const overlay = self.target.closest('.xt-overlay')
  // instant scroll on initial or hashchange or inside overlay and not already activated
  if (self.initial || self.hashchange || (overlay && !overlay.classList.contains('in'))) return 0
  return 1
},
```

## Match Media

You can add **additional options** that gets added on **match media query**. You can use different queries with different and nested options.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `matches:Object`                              | `false`                     | Add additional options on match media query           |

</div>

## Util

You can get **self object from DOM node** on Xtend UI components with [Xt.get](/components/global/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-scrollto', el: document.querySelector('.my-container') })
```

You can set **default options** for all components of the same type, with [Xt.options](/components/global/javascript#xt-options).

```js
Xt.options['xt-scrollto'] = {
  debug: true,
}
```

## Listen

Listen to events, for listeners use [this guideline](/components/global/javascript#listeners).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `scrollto.xt.scrollto`      | `container` | Scrollto event           |
| Event                   | `init.xt.scrollto`           | `container` | Init or reinit event             |
| Event                   | `status.xt.scrollto`           | `container` | Status event (enabled or disabled)             |
| Event                   | `destroy.xt.scrollto`           | `container` | Destroy event             |

</div>

## Trigger

Trigger events on **DOM node**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `scrollto.trigger.xt.scrollto`       | `<any DOM node>` | Scroll to a Node also if not anchored              |

</div>

## Properties

Access properties by getting [self object](/components/global/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-scrollto', el: document.querySelector('.my-container') })
const container = self.container
```

> If you want to **force the self.hashchange value manually for instant duration** set `Xt.scrolltoHashforce` to `true` or `false` just before triggering `scrollto.trigger.xt.scrollto` or changing `location.hash`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `componentName:String`       | Component name (used in `Xt.get`)             |
| Property                   | `options:Object`       | Final options             |
| Property                   | `initial:Boolean`       | If initial or reset activation             |
| Property                   | `disabled:Boolean`       | If component disabled            |
| Property                   | `container:Node`       | Container node             |
| Property                   | `hashchange:Boolean`       | If browser hash change activation             |
| Property                   | `target:Node`       | Current scroll target             |
| Property                   | `scrollers:Node`       | All scrolling element             |
| Property                   | `scroller:Node`       | Current scrolling element             |
| Property                   | `position:Number`       | Current scroll position             |
| Property                   | `space:Number`       | Current scroll space             |
| Property                   | `duration:Number`       | Current scroll duration             |

</div>

## Methods

Call methods by getting [self object](/components/global/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-scrollto', el: document.querySelector('.my-container') })
self.destroy()
self = null
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.reinit()`       | Reinit component             |
| Method                  | `self.disable()`                          | Disable component             |
| Method                  | `self.enable()`                          | Enable component             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>
