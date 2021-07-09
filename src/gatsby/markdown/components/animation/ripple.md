---
type: "Components"
category: "Global"
parent: "Animation"
title: "Ripple"
description: "Material ripple effect on user interaction."
date: "1900-10-10"
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.ripple` see [preset customization](/components/preset#customization). Check [xtendui/src/ripple.css.js](https://github.com/xtendui/xtendui/blob/beta/src/ripple.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/ripple'`.

Initialize manually **within javascript** with `new Xt.Ripple(document.querySelector('.my-container'), {/* options */})`.

## Usage

Use this code to create a **ripple**.

Initialize with javascript **on the selectors you want the ripple effect on**, `options.onlyInside` takes care of activating only on interactive elements.

Style ripple effect **with css**.

<demo>
  <demoinline src="demos/components/animation/ripple">
  </demoinline>
</demo>

## Themes

Check out [animation themes](/themes/animation) for **advanced animations**.

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

## Listen

Listen to events, for listeners use [this guideline](/components/javascript#listeners).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.xt.ripple`       | `container` | Activation event             |
| Event                   | `off.xt.ripple`      | `container` | Deactivation event            |
| Event                   | `init.xt.ripple`           | `container` | Init or reinit event             |
| Event                   | `destroy.xt.ripple`           | `container` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

```js
let self = Xt.get('xt-ripple', document.querySelector('.my-container'))
const container = self.container
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `container:Node`       | Object node             |
| Property                   | `container:Node`       | Container node             |
| Property                   | `targets:Array`       | Targets nodes            |

</div>

## Methods

Call methods by getting component object.

```js
let self = Xt.get('xt-ripple', document.querySelector('.my-container'))
self.destroy()
self = null
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.reinit()`       | Reinit component             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>
