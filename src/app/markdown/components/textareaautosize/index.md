---
type: "Components"
category: "Form"
parent: "Textareaautosize"
title: "Textareaautosize"
description: "Textareaautosize is a plugin that manages automatic size on textarea."
---

## Javascript

Import the **javascript** file with `import 'xtendui/src/textareaautosize'`.

Initialize automatically **within markup** with `[data-xt-textareaautosize="{ <options> }"]`.

Initialize manually **within javascript** with `new Xt.Textareaautosize(document.querySelector('.my-container'), {/* options */})`.

## Usage

You can customize `min-height` and `max-height` of the textarea.

<demo>
  <demoinline src="demos/components/textareaautosize/usage">
  </demoinline>
</demo>

## Util

You can get **self object** on Xtend UI components with **the constructor** or [Xt.get](/xtendui/components/global/javascript#xt-get).

```js
new Xt.Textareaautosize(document.querySelector('.my-container'), {}).then(self => {})

// or

Xt.get({ name: 'xt-textareaautosize', el: document.querySelector('.my-container') }).then(self => {})
```

By default components are **loaded and initialized only when inside viewport** or instantly if `self.container` is not visible (`display: none`).

You can force [global observer options](/xtendui/components/global/javascript/#xt-observe-globals) or **singular component observer options** passing this option.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `observer:Boolean\|null`                          | `null`        | Force enable or disable intersection observer            |

</div>

## Match Media

You can add **additional options** that gets added on **match media query**. You can use different queries with different and nested options.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `matches:Object`                              | `false`                     | Add additional options on match media query           |

</div>

## Listen

Listen to events, for listeners use [this guideline](/xtendui/components/global/javascript#listeners).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `setup.xt.textareaautosize`           | `container` | Setup event             |
| Event                   | `init.xt.textareaautosize`           | `container` | Init or reinit event             |
| Event                   | `status.xt.textareaautosize`           | `container` | Status event (enabled or disabled)             |
| Event                   | `destroy.xt.textareaautosize`           | `container` | Destroy event             |

</div>

## Properties

Access properties by getting [self object](/xtendui/components/textareaautosize/#util).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `self.componentName:String`       | Component name (used in `Xt.get`)             |
| Property                   | `self.options:Object`       | Final options             |
| Property                   | `self.initial:Boolean`       | If initial or reset activation             |
| Property                   | `self.disabled:Boolean`       | If component disabled            |
| Property                   | `self.container:Node`       | Container node             |
| Property                   | `self.form:Node`       | Form closest node             |

</div>

## Methods

Call methods by getting [self object](/xtendui/components/textareaautosize/#util).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.reinit()`       | Reinit component             |
| Method                  | `self.disable()`                          | Disable component             |
| Method                  | `self.enable()`                          | Enable component             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>
