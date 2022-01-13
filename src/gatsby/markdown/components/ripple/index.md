---
type: "Components"
category: "Animation"
parent: "Ripple"
title: "Ripple"
description: "Ripple is a plugin that achieve Material ripple animation."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.ripple` see [css customization](/components/global/preset#customization). Check [xtendui/src/ripple.css.js](https://github.com/xtendui/xtendui/blob/master/src/ripple.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/ripple'`.

Initialize manually **within javascript** with `new Xt.Ripple(document.querySelector('.my-container'), {/* options */})`.

## Usage

Initialize with javascript **on the selectors you want the ripple effect on**, `options.onlyInside` takes care of activating only on interactive elements.

Style ripple effect **with css**.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/themes/animation/ripple-animation-v1">
  </div>
</demo>

## Options
 
Here are the main **javascript options**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `debug:Boolean`                          | `false`        | Debug on console            |
| Option                    | `sizeInitial:Boolean`                          | `0.3`        | Initial size factor            |
| Option                    | `onlyInside:Query`                          | `'a, button, .xt-button'`        | Only if selector else query closest             |

</div>

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
let self = Xt.get({ name: 'xt-ripple', el: document.querySelector('.my-container') })
```

You can set **default options** for all components of the same type, with [Xt.options](/components/global/javascript#xt-options).

```js
Xt.options['xt-ripple'] = {
  debug: true,
}
```

## Listen

Listen to events, for listeners use [this guideline](/components/global/javascript#listeners).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.xt.ripple`       | `container` | Activation event (event `e.detail` is original event)             |
| Event                   | `off.xt.ripple`      | `container` | Deactivation event (event `e.detail` is original event)            |
| Event                   | `init.xt.ripple`           | `container` | Init or reinit event             |
| Event                   | `status.xt.ripple`           | `container` | Status event (enabled or disabled)             |
| Event                   | `destroy.xt.ripple`           | `container` | Destroy event             |

</div>

## Properties

Access properties by getting [self object](/components/global/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-ripple', el: document.querySelector('.my-container') })
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
| Property                   | `inner:Node`       | Inner node that contains the ripples             |
| Property                   | `targets:Array`       | Targets nodes            |
| Property                   | `size:Number`       | Initial size of ripple            |
| Property                   | `top:Number`       | Initial top position of ripple            |
| Property                   | `left:Number`       | Initial left position of ripple            |
| Property                   | `sizeFinal:Number`       | Final size of ripple            |
| Property                   | `scaleFinal:Number`       | Final scale of ripple            |

</div>

## Methods

Call methods by getting [self object](/components/global/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-ripple', el: document.querySelector('.my-container') })
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
