---
type: "Components"
parent: "Setup"
title: "Setup"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["000-Intro"]
date: "2000-01-01"
---

## Installation

You can install with one of the following:
* download: [latest release](https://github.com/minimit/xtend-library/releases/latest)
* [npm](https://www.npmjs.com/): `npm install --save xtend-library`
* clone: `git clone https://github.com/minimit/xtend-library.git`

## Usage

We have some boilerplate setup projects to start a project:

* [vanilla boilerplate](https://github.com/minimit/xtend-theme-vanilla)

### Webpack

This library is made to be used by [webpack](https://github.com/webpack). In essence you have to setup webpack's resolve to be able to import the scripts and styles from the `node_modules/xtend-library` or from your custom folder if present (`./dist/xtend-library` in this case).

```jsx
  resolve: {
    alias: {
      // resolve xtend-library js and less
      'xtend-library': [
        path.resolve(__dirname, './dist/xtend-library'),
        path.resolve(__dirname, './node_modules/xtend-library'),
      ],
    },
  },
  module: {
    unsafeCache: false,
```

With this setup you can **fork** css and js files inside `./dist/xtend-library` and the webpack resolver will load files from it or fallback to `./node_modules/xtend-library`.

### Css

You need to import the **reset** file as first import:

```less
@import '~xtend-library/src/xtend-reset.less'; // always first loaded
```

Then you can import the components you need as described in the docs, just be sure to import the library as reference first: `@import (reference) '~xtend-library/src/xtend-core.less';`.

Or just import all core/extensions/addons as needed:

```less
@import '~xtend-library/src/xtend-core.less';
@import '~xtend-library/src/xtend-extensions.less';
@import '~xtend-library/src/xtend-addons.less';
```

### Js

You need to import [core-js](https://github.com/zloirock/core-js):

```Shell
npm install --save core-js regenerator-runtime
```

```jsx
import 'core-js'
import 'regenerator-runtime/runtime'
```

You need to import the **polyfills** files and the **main** js:

```jsx
import 'xtend-library/src/polyfill.js'
import { Xt } from 'xtend-library'
```

Then you can import the components you need as described in the docs.

Or just import all core/extensions/addons as needed:

```jsx
import 'xtend-library/src/xtend-core.js'
import 'xtend-library/src/xtend-extensions.js'
import 'xtend-library/src/xtend-addons.js'
```

### Gsap

This library in the demos uses [gsap](https://github.com/greensock/GreenSock-JS) and [bezier-easing](https://github.com/gre/bezier-easing) for javascript animations.

With npm install and import [gsap](https://www.npmjs.com/package/gsap) and [bezier-easing](https://www.npmjs.com/package/bezier-easing):

```
$ npm install --save gsap
$ npm install --save bezier-easing
```

And import them:

```
import gsap from 'gsap'
import 'bezier-easing';
```

## Script

If you prefer to import the library from script tag (**not recommended**)

Include [core-js](https://cdnjs.com/libraries/core-js) and [cdn](https://cdnjs.com/libraries/gsap) and [bezier-easing](https://www.jsdelivr.com/package/npm/bezier-easing).

Copy the `/dist` folder in your project and add the required styles to your html:

<pre class="language-markup">
<code class="language-markup">
<link rel="stylesheet" href="dist/xtend.min.css"/>
</code>
</pre>

Add the required scripts to your html

<pre class="language-markup">
<code class="language-markup">
<script src="dist/xtend-core.js"></script>
<!-- or <script src="dist/xtend-core-extensions.js"></script> -->
<!-- or <script src="dist/xtend-core-extensions-addons.js"></script> -->
</code>
</pre>

## Browser support

Supported browsers are as follow: **explorer 12**, **firefox 38**, **opera 25**, **safari 10**, **chrome 38**.

If you want to support old browsers since Internet Explorer 11, import the polyfills:

```jsx
import 'xtend-library/src/polyfill-old.js'
```

And add this browser list:

```Shell
IE 11
```

## Documentation

We use gatsby to serve the docs:

* Install required npm packages with `npm install`
* Use `npm run build` to build the docs in `/public`
* Use `npm run dev` to serve a develop version
* Use `npm run serve`to serve a production version

## Acknowledgements

* Icons with [feather icons](https://github.com/feathericons/feather)

## Copyright

Licensed under [MIT license](https://github.com/minimit/xtend-library/blob/master/LICENSE).
Docs licensed under [CC BY 3.0](https://github.com/minimit/xtend-library/blob/master/LICENSE-DOCS).
