---
type: "Components"
category: "Addons"
parent: "Layout"
title: "Google Locator"
description: "Plug and play a google maps locator, with all the basic functionality and more."
---

## Installation

Import the **component javascript** file.

```jsx
import 'xtendui/src/addons/googlelocator'
```

## Usage

Use this code to create a **google locator**. Search for "New York" to see it in action.

[[notePrimary]]
| Needs google API key with **Maps Javascript API**, **Places API**.

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/addons/layout/googlelocator">
  </div>
</demo>

## Options

Here are the main **javascript options**.

Additionally you can pass functions to `options.formatData` to populate inside `options.itemsTemplate` with query `data-xt-populate="<FunctionName>"`, see javascript file source code `xtendui/src/addons/googlelocator.js`.

For advanced options see javascript file source code `xtendui/src/addons/googlelocator.js`.

<div class="table-overflow">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `initialLocate:Boolean`                          | `false`        | Automatic locate on page load (**needs https**)            |
| Option                    | `initialSearch:Boolean`                          | `false`        | Automatic search on page load            |
| Option                    | `seachMapBounds:Boolean`                          | `false`        | Map bounds of current map  when searching             |
| Option                    | `locateRadius:Number`                          | `25000`        | Radius for locate            |
| Option                    | `elements.loader:Query`                          | `'.loader'`        | Object query for loader             |
| Option                    | `elements.searchInput:Query`                          | `'input[type="text"]'`        | Object query for searh input             |
| Option                    | `elements.searchBtn:Query`                          | `'.btn-search'`        | Object query for search button             |
| Option                    | `elements.map:Query`                          | `'.googlelocator-main-map'`        | Object query for google map             |
| Option                    | `elements.itemsTemplate:Query`                          | `'script[type="text/x-template"]'`        | Object query for template cloned for maps items             |
| Option                    | `elements.itemsContainer:Query`                          | `'.googlelocator-items'`        | Object query for items container to append items to             |
| Option                    | `elements.results:Query`                          | `'.googlelocator-aside-body'`        | Object query for results messages             |
| Option                    | `elements.resultsFounds:Query`                          | `'.googlelocator-result-found'`        | Object query for results found             |
| Option                    | `elements.locateBtn:Query`                          | `'.btn-locate'`        | Object query for             |
| Option                    | `elements.repeatBtn:Query`                          | `'.btn-repeat'`        | Object query for repeat search             |
| Option                    | `elements.filter:Query`                          | `'input[type="checkbox"], input[type="radio"]'`        | Object query for             |

</div>

## Listen

Listen to events on **DOM elements**.

<div class="table-overflow">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change.xt.googlelocator`           | `object` | Change event             |
| Event                   | `init.xt.googlelocator`           | `object` | Init event             |
| Event                   | `destroy.xt.googlelocator`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

<div class="table-overflow">

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

Initialize with **javascript**.

```js
let self = new Xt.Googlelocator(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

```js
Xt.mount.push({
  matches: '#my-object',
  mount: object => {
    // init

    let self = new Xt.Googlelocator(object, {
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