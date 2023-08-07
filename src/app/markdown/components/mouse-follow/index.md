---
type: "Components"
category: "Animation"
parent: "MouseFollow"
title: "MouseFollow"
description: "MouseFollow is a plugin that manages animations that follow mouse position"
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.mousefollow` see [css customization](/components/global/preset#customization). Check [xtendui/src/mousefollow.css.js](https://github.com/xtendui/xtendui/blob/master/src/mousefollow.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/mousefollow'`.

Initialize automatically **within markup** with `[data-xt-mousefollow="{ <options> }"]`.

Initialize manually **within javascript** with `new Xt.Mousefollow(document.querySelector('.my-container'), {/* options */})`.

## Usage

Initialize mousefollow `container` to the **element that bounds the mosefollow**, for the targets to actually mousefollow use `options.targets`.

Use **component classes** to create a **mousefollow** and add `fixed` position.

> Remember **not to transition transform** of `.xt-mousefollow` element.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-mousefollow`                     | `xt-mousefollow`                | Styles for mousefollow            |

</div>

<demo>
  <demoinline src="demos/components/mouse-follow/usage">
  </demoinline>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `debug:Boolean`                          | `false`        | Debug on console            |
| Option                    | `targets:Query`                          | `':scope > .xt-mousefollow'`        | Mousefollow targets            |
| Option                    | `classSkip:Boolean`                          | `false`        | Skip class activation and deactivation            |
| Option                    | `transform:Boolean`                          | `true`        | Use transform instead of position            |
| Option                    | `friction({ delta }):Function`                          | `<Function>`        | Function for friction             |
| Option                    | `mouseCheck({ self }):Function\|false`                          | `false`        | Function called on activate/deactivate, return false to skip activation/deactivation, return `Boolean`             |

</div>

Default functions as follow.

```js
friction: ({ delta }) => {
  return delta / 9
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
let self = Xt.get({ name: 'xt-mousefollow', el: document.querySelector('.my-container') })
```

You can set **default options** for all components of the same type, with [Xt.options](/components/global/javascript#xt-options).

```js
Xt.options['xt-mousefollow'] = {
  debug: true,
}
```

## Listen

Listen to events, for listeners use [this guideline](/components/global/javascript#listeners).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.xt.mousefollow`       | `container` | Activation event (event `e.detail` is original event)             |
| Event                   | `off.xt.mousefollow`      | `container` | Deactivation event (event `e.detail` is original event)            |
| Event                   | `change.xt.mousefollow`       | `container` | Change event (event `e.detail` is original event)             |
| Event                   | `init.xt.mousefollow`           | `container` | Init or reinit event             |
| Event                   | `status.xt.mousefollow`           | `container` | Status event (enabled or disabled)             |
| Event                   | `destroy.xt.mousefollow`           | `container` | Destroy event             |

</div>

## Properties

Access properties by getting [self object](/components/global/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-mousefollow', el: document.querySelector('.my-container') })
const container = self.container
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `componentName:String`       | Component name (used in `Xt.get`)             |
| Property                   | `options:Object`       | Final options             |
| Property                   | `initial:Boolean`       | If initial or reset activation             |
| Property                   | `disabled:Boolean`       | If component disabled            |
| Property                   | `container:Node`       | Container node             |
| Property                   | `targets:Array`       | Targets nodes            |

</div>

## Methods

Call methods by getting [self object](/components/global/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-mousefollow', el: document.querySelector('.my-container') })
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
