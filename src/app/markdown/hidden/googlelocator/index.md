---
type: "Hidden"
category: "Future"
parent: "Googlelocator"
title: "Googlelocator"
description: "Googlelocator is a plugin that manages google places and maps and markers."
---

## Javascript

Import the **javascript** file with `import 'xtendui/src/googlelocator'`.

Initialize manually **within javascript** with `new Xt.Googlelocator(document.querySelector('.my-container'), {/* options */})`.

## Usage

Search for "New York" to see it in action.

> This demos use [loader](/components/loader) see documentation for more info.

> Needs google API key with **Maps Javascript API**, **Places API**.

<demo>
  <div class="docs_demo_item" data-iframe="demos/components/global/googlelocator">
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
| Option                    | `searchRadius:Number`                          | `25000`        | Radius for locate and minimum radius for search (search uses location viewport given by google)            |
| Option                    | `locateText:String`                          | `'Locate'`        | Locate text for input            |
| Option                    | `submitDelay:Number`                          | `250`        | Delay before each submit to show loader before js loop stops the render            |
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
// autocomplete
autocompleteOptions: false,
autocompleteServiceOptions: false,
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

You can get **self object** on Xtend UI components with **the constructor** or [Xt.get](/components/global/javascript#xt-get).

```js
new Xt.Googlelocator(document.querySelector('.my-container'), {}).then(self => {})

// or

Xt.get({ name: 'xt-googlelocator', el: document.querySelector('.my-container') }).then(self => {})
```

You can set **default options** for all components of the same type, with [Xt.options](/components/global/javascript#xt-options).

```js
Xt.options['xt-googlelocator'] = {
  debug: true,
}
```

By default components are **loaded and initialized only when inside viewport** or instantly if `self.container` is not visible (`display: none`).

You can force [global observer options](/components/global/javascript/#xt-observe-globals) or **singular component observer options** passing this option.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `observer:Boolean\|null`                          | `null`        | Force enable or disable intersection observer            |

</div>

## Listen

Listen to events, for listeners use [this guideline](/components/global/javascript#listeners).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change.xt.googlelocator`           | `container` | Change event             |
| Event                   | `setup.xt.googlelocator`           | `container` | Setup event             |
| Event                   | `init.xt.googlelocator`           | `container` | Init or reinit event             |
| Event                   | `status.xt.googlelocator`           | `container` | Status event (enabled or disabled)             |
| Event                   | `destroy.xt.googlelocator`           | `container` | Destroy event             |

</div>

## Properties

Access properties by getting [self object](/hidden/googlelocator/#util).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `self.componentName:String`       | Component name (used in `Xt.get`)             |
| Property                   | `self.options:Object`       | Final options             |
| Property                   | `self.initial:Boolean`       | If initial or reset activation             |
| Property                   | `self.disabled:Boolean`       | If component disabled            |
| Property                   | `self.container:Node`       | Container node             |
| Property                   | `self.locations:Array`       | Current found locations             |
| Property                   | `self.loaderElement:Node`       | Loader node             |
| Property                   | `self.itemsTemplate:Node`       | Items template node             |
| Property                   | `self.itemsContainer:Node`       | Items container node             |
| Property                   | `self.resultElement:Node`       | Result node             |
| Property                   | `self.foundElement:Node`       | Found node             |
| Property                   | `self.mapElement:Node`       | Map node             |
| Property                   | `self.map:Object`       | Map object             |
| Property                   | `self.info:Object`       | InfoWindow object             |
| Property                   | `self.cluster:Object`       | MarkerClusterer object             |
| Property                   | `self.searchInput:Node`       | Search input node             |
| Property                   | `self.search:Object`       | Search object             |
| Property                   | `self.searchBtn:Node`       | Search button node             |
| Property                   | `self.filters:Node`       | Filter nodes             |
| Property                   | `self.position:Object`       | Current map position             |
| Property                   | `self.viewport:Object`       | Current map viewport             |
| Property                   | `self.radius:Number`       | Current map radius             |

</div>

## Methods

Call methods by getting [self object](/hidden/googlelocator/#util).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.reinit()`       | Reinit component             |
| Method                  | `self.disable()`                          | Disable component             |
| Method                  | `self.enable()`                          | Enable component             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>

If you want to add markers dynamically override `self.submit` and call `self.submitDeferred()` when done:

```js
self.submit = async () => {
  self.options.markers = await queryByLatLng(self.position.lat(), self.position.lng(), self.map.getZoom())
  self.submitDeferred()
}
```
