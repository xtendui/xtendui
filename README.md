# PORTED TO TAILWIND [xtend-ui](https://github.com/minimit/xtend-ui)

## Installation

```Shell
npm install xtend-library --save
```

## Usage

We have some boilerplate setup projects to start a project:

* [vanilla boilerplate](https://github.com/minimit/xtend-theme-vanilla)

### Css Resolve

Add this to **less options** to resolve less urls with `xtend-library/`:

```jsx
// resolve xtend-library import less
paths: [path.resolve(__dirname, './dist'), path.resolve(__dirname, './node_modules')],
```

### Js Resolve

Add this to **babel options** to resolve js urls with `xtend-library/`:

```jsx
const path = require('path')

module.exports = {
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          // resolve xtend-library import js
          'xtend-library': [path.resolve(__dirname, './dist/assets/xtend-library'), path.resolve(__dirname, './node_modules/xtend-library')],
        },
      },
    ],
  ],
}
```

#### Css

You need to import the **reset** file as first import:

```less
@import '/src/xtend-reset.less'; // always first loaded
```

Then you can import the **components you need** as described in the docs:

```less
@import (reference) '/src/xtend-core.less'; // be sure to import the library as reference first
@import '/src/extensions/slider/slider.less';
```

Or just import **all core** and **extensions** and **addons** needed (preferred method):

```less
@import '/src/xtend-core.less';
@import '/src/extensions/slider/slider.less';
```

To modify a **less** or **js** file add [webpack resolve](/introduction/setup#usage-webpack) and fork the file copying it in your project.

#### Js

You need to install [relaxed-json](https://www.npmjs.com/package/relaxed-json):

```Shell
npm install --save relaxed-json
```

You need to install and import [core-js](https://github.com/zloirock/core-js):

```Shell
npm install --save core-js@2
```

```jsx
import 'core-js'
```

You need to import the **polyfills** files and the **main** js:

```jsx
import '/src/polyfill.js'
import { Xt } from '/src/xt.js'
```

Then you can import the **components you need** as described in the docs:

```jsx
import '/src/extensions/slider/slider.js'
```

Or just import **all core** and **extensions** and **addons** needed (preferred method):

```jsx
import '/src/xtend-core.js'
import '/src/extensions/slider/slider.js'
```

To modify a **less** or **js** file add [webpack resolve](/introduction/setup#usage-webpack) and fork the file copying it in your project.

#### Gsap

This library in the demos uses [gsap](https://github.com/greensock/GSAP) and [bezier-easing](https://github.com/gre/bezier-easing) for javascript animations.

```
npm install --save gsap bezier-easing
```

## Browser support

Supported browsers are as follow: **explorer 12**, **firefox 38**, **opera 25**, **safari 10**, **chrome 38**.

If you want to support old browsers since Internet Explorer 11, import the polyfills:

## Documentation

We use gatsby to serve the docs:

* Install required npm packages with `npm install`
* Use `npm run build` to build the docs in `/public`
* Use `npm run dev` to serve a develop version
* Use `npm run serve`to serve a production version

## Acknowledgements

* Icons with [feather icons](https://github.com/feathericons/feather)

## Copyright

Xtand and demos licensed under [MIT license](https://github.com/minimit/xtend-library/blob/master/LICENSE).
Docs licensed under [CC BY 3.0](https://github.com/minimit/xtend-library/blob/master/LICENSE-DOCS).
