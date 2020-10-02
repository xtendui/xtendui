---
type: "Components"
category: "Addons"
parent: "Form"
title: "textarea-autosize"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Setup

#### Javascript

Follow the [javascript installation](/introduction/getting-started/setup#javascript-installation) instructions and **import the component javascript** file.

```jsx
import 'xtend-library/src/addons/form/textarea-autosize'
```

## Usage

Use this code to create a **textarea autosize**.

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

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  }
})
```
