---
type: "Components"
category: "Form"
parent: "TextareaAutosize"
title: "TextareaAutosize"
description: "TextareaAutosize is a plugin that manages automatic size on textarea."
---

## Javascript

Import the **javascript** file with `import 'xtendui/src/textareaautosize'`.

Initialize automatically **within markup** with `[data-xt-textareaautosize="{ <options> }"]`.

Initialize manually **within javascript** with `new Xt.Textareaautosize(document.querySelector('.my-container'), {/* options */})`.

## Usage

You can customize `min-height` and `max-height` of the textarea.

<demo>
  <demoinline src="demos/components/textarea-autosize/usage">
  </demoinline>
</demo>

## Util

You can get **self object from DOM node** on Xtend UI components with [Xt.get](/components/global/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-textareaautosize', el: document.querySelector('.my-container') })
```

## Match Media

You can add **additional options** that gets added on **match media query**. You can use different queries with different and nested options.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `matches:Object`                              | `false`                     | Add additional options on match media query           |

</div>

## Listen

Listen to events, for listeners use [this guideline](/components/global/javascript#listeners).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `init.xt.textareaautosize`           | `container` | Init or reinit event             |
| Event                   | `status.xt.textareaautosize`           | `container` | Status event (enabled or disabled)             |
| Event                   | `destroy.xt.textareaautosize`           | `container` | Destroy event             |

</div>

## Properties

Access properties by getting [self object](/components/global/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-textareaautosize', el: document.querySelector('.my-container') })
const container = self.container
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `initial:Boolean`       | If initial or reset activation             |
| Property                   | `disabled:Boolean`       | If component disabled            |
| Property                   | `container:Node`       | Container node             |
| Property                   | `form:Node`       | Form closest node             |

</div>

## Methods

Call methods by getting [self object](/components/global/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-textareaautosize', el: document.querySelector('.my-container') })
self.destroy()
self = null
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.reinit()`       | Reinit component             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>
