---
type: "Hidden"
category: "Hidden"
parent: "Future"
title: "Google Locator"
description: "Plug and play a google maps locator, with all the basic functionality and more."
---

## Javascript

Import the **javascript** file with `import 'xtendui/src/googlelocator'`.

Initialize manually **within javascript** with `new Xt.Googlelocator(document.querySelector('.my-container'), {/* options */})`.

## Usage

Use this code to create a **google locator**. Search for "New York" to see it in action.

[[noteDefault]]
| This component uses [loader](/components/loader) see documentation for more info.

[[notePrimary]]
| Needs google API key with **Maps Javascript API**, **Places API**.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/layout/googlelocator">
  </div>
</demo>

## Options

Here are the main **javascript options**. This component has complex options that are false by default see demo for custom values.

Additionally you have to pass functions to `options.formatData` to populate inside `options.itemsTemplate` with query `data-xt-populate="<FunctionName>"`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `debug:Boolean`                          | `false`        | Debug on console            |
| Option                    | `initialLocate:Boolean`                          | `false`        | Automatic locate on page load (**needs https**)            |
| Option                    | `initialSearch:Boolean`                          | `false`        | Automatic search on page load            |
| Option                    | `seachMapBounds:Boolean`                          | `false`        | Map bounds of current map  when searching             |
| Option                    | `locateRadius:Number`                          | `25000`        | Radius for locate            |
| Option                    | `locateText:String`                          | `'Locate'`        | Locate text for input            |
| Option                    | `elements.loader:Query`                          | `'[data-xt-googlelocator-loader]'`        | Container query for loader             |
| Option                    | `elements.searchInput:Query`                          | `'[data-xt-googlelocator-search-input]'`        | Container query for searh input             |
| Option                    | `elements.searchBtn:Query`                          | `'[data-xt-googlelocator-search-btn]'`        | Container query for search button             |
| Option                    | `elements.map:Query`                          | `'[data-xt-googlelocator-map]'`        | Container query for google map             |
| Option                    | `elements.itemsTemplate:Query`                          | `'[data-xt-googlelocator-items-template]'`        | Container query for template cloned for maps items             |
| Option                    | `elements.itemsContainer:Query`                          | `'[data-xt-googlelocator-items-container]'`        | Container query for items container to append items to             |
| Option                    | `elements.results:Query`                          | `'[data-xt-googlelocator-results]'`        | Container query for results messages             |
| Option                    | `elements.resultsFounds:Query`                          | `'[data-xt-googlelocator-results-found]'`        | Container query for results found             |
| Option                    | `elements.locateBtn:Query`                          | `'[data-xt-googlelocator-locate-btn]'`        | Container query for locate button             |
| Option                    | `elements.repeatBtn:Query`                          | `'[data-xt-googlelocator-repeat-btn]'`        | Container query for repeat search button             |
| Option                    | `elements.filter:Query`                          | `'[data-xt-googlelocator-filter]'`        | Container query for filter checkbox and radio             |
| Option                    | `elements.formatData:Object`                          | `<Object>`        | Object for format data and filter functions             |

</div>

Default google maps options as follow.

```js
// event
events: {
  animateMarkerClick: false,
  animateMarkerResultClick: false,
  infoWindowMarkerClick: true,
  infoWindowMarkerResultClick: false,
},
// map
map: {
  center: false,
  zoom: false,
  zoomMin: false,
  scrollwheel: false,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: true,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false,
  cluster: false,
},
// infoWindow
infoWindow: {},
```

## Match Media

You can add **additional options** that gets added on **match media query**. You can use different queries with different and nested options.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `matches:Object`                              | `false`                     | Add additional options on match media query           |

</div>

## Util

You can get **self object from DOM node** on Xtend UI components with [Xt.get](/components/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-googlelocator', el: document.querySelector('.my-container') })
```

You can set **default options** for Xtend UI components, with [Xt.options](/components/javascript#xt-options).

```js
Xt.options['xt-googlelocator'] = {
  debug: true,
}
```

## Listen

Listen to events, for listeners use [this guideline](/components/javascript#listeners).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change.xt.googlelocator`           | `container` | Change event             |
| Event                   | `init.xt.googlelocator`           | `container` | Init or reinit event             |
| Event                   | `status.xt.googlelocator`           | `container` | Status event (enabled or disabled)             |
| Event                   | `destroy.xt.googlelocator`           | `container` | Destroy event             |

</div>

## Properties

Access properties by getting [self object](/components/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-googlelocator', el: document.querySelector('.my-googlelocator') })
const container = self.container
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `initial:Boolean`       | If initial or reset activation             |
| Property                   | `disabled:Boolean`       | If component disabled            |
| Property                   | `container:Node`       | Container node             |
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

## Methods

Call methods by getting [self object](/components/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-googlelocator', el: document.querySelector('.my-container') })
self.destroy()
self = null
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.reinit()`       | Reinit component             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>
