---
type: "Hidden"
category: "Hidden"
parent: "Future"
title: "Google Locator"
description: "Plug and play a google maps locator, with all the basic functionality and more."
---

## Javascript

Import the **javascript** file with `import 'xtendui/src/googlelocator'`.

Initialize with **javascript** with `new Xt.Googlelocator(document.querySelector('.my-object'), {/* options */})`.


## Usage

Use this code to create a **google locator**. Search for "New York" to see it in action.

[[noteDefault]]
| This component uses [loader](/components/loader) see documentation for more info.

[[notePrimary]]
| Needs google API key with **Maps Javascript API**, **Places API**.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/layout/googlelocator">
  </div>
</demo>

## Options

Here are the main **javascript options**. This component has complex options that are false by default see demo for custom values.

Additionally you have to pass functions to `options.formatData` to populate inside `options.itemsTemplate` with query `data-xt-populate="<FunctionName>"`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `initialLocate:Boolean`                          | `false`        | Automatic locate on page load (**needs https**)            |
| Option                    | `initialSearch:Boolean`                          | `false`        | Automatic search on page load            |
| Option                    | `seachMapBounds:Boolean`                          | `false`        | Map bounds of current map  when searching             |
| Option                    | `locateRadius:Number`                          | `false`        | Radius for locate            |
| Option                    | `locateText:String`                          | `false`        | Locate text for input            |
| Option                    | `elements.loader:Query`                          | `false`        | Object query for loader             |
| Option                    | `elements.searchInput:Query`                          | `false`        | Object query for searh input             |
| Option                    | `elements.searchBtn:Query`                          | `false`        | Object query for search button             |
| Option                    | `elements.map:Query`                          | `false`        | Object query for google map             |
| Option                    | `elements.itemsTemplate:Query`                          | `false`        | Object query for template cloned for maps items             |
| Option                    | `elements.itemsContainer:Query`                          | `false`        | Object query for items container to append items to             |
| Option                    | `elements.results:Query`                          | `false`        | Object query for results messages             |
| Option                    | `elements.resultsFounds:Query`                          | `false`        | Object query for results found             |
| Option                    | `elements.locateBtn:Query`                          | `false`        | Object query for locate button             |
| Option                    | `elements.repeatBtn:Query`                          | `false`        | Object query for repeat search button             |
| Option                    | `elements.formatData:Object`                          | `<Object>`        | Object for format data and filter functions             |


</div>

## Listen

Listen to events, for listeners use [this guideline](/components/javascript#listeners).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change.xt.googlelocator`           | `object` | Change event             |
| Event                   | `init.xt.googlelocator`           | `object` | Init or reinit event             |
| Event                   | `destroy.xt.googlelocator`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `initial:Boolean`       | If initial or reset activation             |
| Property                   | `locations:Array`       | Current found locations             |
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
