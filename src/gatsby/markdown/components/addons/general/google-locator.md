---
type: "Components"
category: "Addons"
parent: "General"
title: "google-locator"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Setup

#### Javascript

Follow the [javascript installation](/introduction/getting-started/setup#javascript-installation) instructions and **import the component javascript** file.

```jsx
import 'xtend-ui/src/addons/google-locator'
```

Install also `@google/markerclusterer`.

```Shell
npm install @google/markerclusterer --save
```

## Usage

Use this code to create a **google locator**.

[[notePrimary]]
| Needs google API key with **Maps Javascript API**, **Places API**.

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/addons/google-locator">
  </div>
</demo>

## Options

For advanced options see javascript file source code `xtend-ui/src/addons/google-locator.js`.

## Listen

Listen to events on **DOM elements**.

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change.xt.googlelocator`           | `object` | Change event             |
| Event                   | `init.xt.googlelocator`           | `object` | Init event             |
| Event                   | `destroy.xt.googlelocator`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

<div class="table-scroll">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `locateCache:Object`       | Locate cache object             |
| Property                   | `loaderElement:Node`       | Loader node             |
| Property                   | `itemsTemplate:Node`       | Items template node             |
| Property                   | `itemsContainer:Node`       | Items container node             |
| Property                   | `resultElement:Node`       | Result node             |
| Property                   | `foundElement:Node`       | Found node             |
| Property                   | `mapElement:Node`       | Map node             |
| Property                   | `map:Object`       | Map object             |
| Property                   | `searchInput:Node`       | Search input node             |
| Property                   | `search:Object`       | Search object             |
| Property                   | `searchBtn:Node`       | Search button node             |

</div>

## Initialization

Initialize automatically within markup with `[data-xt-google-locator="{ <options> }"]` on the **object** (the DOM element you assigned the component).

Or initialize with **javascript**.

```js
let self = new Xt.GoogleLocator(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

```js
Xt.mount.push({
  matches: '#my-object',
  mount: object => {
    // init

    let self = new Xt.GoogleLocator(object, {
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
