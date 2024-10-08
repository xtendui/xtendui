---
type: "Components"
category: "Scroll"
parent: "InfiniteScroll"
title: "InfiniteScroll"
description: "InfiniteScroll is a plugin that manages automating pagination loads with infinite scrolling."
---

## Javascript

Import the **javascript** file with `import 'xtendui/src/infinitescroll'`.

Initialize automatically **within markup** with `[data-xt-infinitescroll="{ <options> }"]`.

Initialize manually **within javascript** with `new Xt.Infinitescroll(document.querySelector('.my-container'), {/* options */})`.

## Usage

Remember to set a `options.get` variable for a **get request on current url** to load items. Also remember to set `options.max` number of pages.

> Infinitescroll works also if your website is eligible for [bfcache](https://web.dev/bfcache/) to resume previous state when using back/forward browser buttons. To disable default behaviour use or use `options.nocache: false`.

> This is a **speed optimization technique**, it automatically **prefetch next page**.

> Depending on website content the load more content may retain website scroll, use `body { overflow-anchor: none; }` to prevent that.

Try the demo [on a new page](/demos/components/infinitescroll/usage?false=2) to preview location hash changes.

<demo>
  <div class="docs_demo_item" data-iframe="demos/components/infinitescroll/usage">
  </div>
</demo>

## Options

Here are the main **javascript options**.

Inside `elements.pagination:Query` you can use this strings that gets populated with variables:

- `xt-num` replaced with current page number
- `xt-tot` replaced with total pages number

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `debug:Boolean`                          | `false`        | Debug on console            |
| Option                    | `get:String\|false`                          | `false`        | **url get** variable to use            |
| Option                    | `nocache:Boolean`                          | `true`        | Restore scroll position on back and forward browser buttons            |
| Option                    | `prefetch:Boolean`                          | `true`        | Prefetch next page automatically            |
| Option                    | `min:Number`                          | `1`        | **Initial** and minimum items / page number            |
| Option                    | `max:Number`                          | `'Infinity'`        | Maximum items / page number            |
| Option                    | `perPage:Number`                          | `1`        | Items / pages per pagination            |
| Option                    | `events.scrollUp:Boolean`                          | `false`        | Automatically activate on scroll up            |
| Option                    | `events.scrollDown:Boolean`                          | `false`        | Automatically activate on scroll down            |
| Option                    | `events.on:String\|false`                          | `'click'`        | List of space separated events to trigger infinite scroll            |
| Option                    | `elements.itemsContainer:Query`                          | `false`        | Container query for items container            |
| Option                    | `elements.item:Query`                          | `false`        | Items container query for items            |
| Option                    | `elements.scrollUp:Query`                          | `false`        | Container query for trigger elements when scrolling up            |
| Option                    | `elements.scrollDown:Query`                          | `false`        | Container query for trigger elements when scrolling down            |
| Option                    | `elements.spaceAdditional:Query`                          | `false`        | Container query for additional space when resuming pages            |
| Option                    | `elements.pagination:Query`                          | `false`        | Container query for pagination            |

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
new Xt.Infinitescroll(document.querySelector('.my-container'), {}).then(self => {})

// or

Xt.get({ name: 'xt-infinitescroll', el: document.querySelector('.my-container') }).then(self => {})
```

You can set **default options** for all components of the same type, with [Xt.options](/components/global/javascript#xt-options).

```js
Xt.options['xt-infinitescroll'] = {
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
| Event                   | `populate.xt.infinitescroll`           | `container` | Replace event             |
| Event                   | `setup.xt.infinitescroll`           | `container` | Setup event             |
| Event                   | `init.xt.infinitescroll`           | `container` | Init or reinit event             |
| Event                   | `status.xt.infinitescroll`           | `container` | Status event (enabled or disabled)             |
| Event                   | `destroy.xt.infinitescroll`           | `container` | Destroy event             |

</div>

## Properties

Access properties by getting [self object](/components/infinite-scroll/#util).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `self.componentName:String`       | Component name (used in `Xt.get`)             |
| Property                   | `self.options:Object`       | Final options             |
| Property                   | `self.initial:Boolean`       | If initial or reset activation             |
| Property                   | `self.disabled:Boolean`       | If component disabled            |
| Property                   | `self.container:Node`       | Container node             |
| Property                   | `self.current:Number`       | Current page             |
| Property                   | `self.scrollUp:Nodes`       | Trigger elements when scrolling up             |
| Property                   | `self.scrollDown:Nodes`       | Trigger elements when scrolling down             |
| Property                   | `self.itemsContainer:Node`       | Items container node             |
| Property                   | `self.loadedHtml:Node`       | New html loaded before `populate.xt.infinitescroll` event             |
| Property                   | `self.spaceAdditionals:Node`       | Nodes for space additional             |
| Property                   | `self.paginations:Node`       | Paginations nodes             |
| Property                   | `self.inverse:Boolean`       | If paginating inverse direction             |

</div>

## Methods

Call methods by getting [self object](/components/infinite-scroll/#util).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.reinit()`       | Reinit component             |
| Method                  | `self.disable()`                          | Disable component             |
| Method                  | `self.enable()`                          | Enable component             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>

## Other

Style on `self.container` the classes `.xt-infinitescroll-first` and `.xt-infinitescroll-last` for when the infinitescroll is on first or on last page.
