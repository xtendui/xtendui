---
type: "Components"
category: "Addons"
parent: "Form"
title: "textarea-autosize"
description: "Textarea with dynamic height depending on content."
---

## Installation

Import the **component javascript** file.

## Usage

Use this code to create a **textarea autosize**. You can customize `min-height` and `max-height` of the textarea.

<demo>
  <demovanilla src="vanilla/components/addons/form/textarea-autosize">
  </demovanilla>
</demo>

## Listen

Listen to events on **DOM elements**.

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `init.xt.textareaautosize`           | `object` | Init event             |
| Event                   | `destroy.xt.textareaautosize`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

<div class="table-scroll">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `form:Node`       | Form closest node             |

</div>

## Initialization

Initialize automatically within markup with `[data-xt-textarea-autosize="{ <options> }"]` on the **object** (the DOM element you assigned the component).

Or initialize with **javascript**.

```js
let self = new Xt.TextareaAutosize(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

```js
Xt.mount.push({
  matches: '#my-object',
  mount: object => {
    // init

    let self = new Xt.TextareaAutosize(object, {
      // options
    })

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  }
})
```