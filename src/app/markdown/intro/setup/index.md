---
type: "Intro"
category: "Introduction"
parent: "Setup"
title: "Setup"
description: "Installation instructions."
---

**Check out [xtendui-boilerplate](https://github.com/xtendui/xtendui-boilerplate)** code for Weback Encore, Nextjs, Parcel, Vite, Webpack ready to go!

## Nodejs

Current tested **node version** is 18.

## Installation

Install **xtendui**.

```
npm install xtendui --save
```

## Css

**Setup compilation using any compiler** see [postcss usage](https://github.com/postcss/postcss#usage) or [Tailwind CSS installation](https://tailwindcss.com/docs/installation/framework-guides) or [xtendui-boilerplate](https://github.com/xtendui/xtendui-boilerplate).

Install **tailwindcss**, **xtendui**, **postcss import**, **postcss nested**.

```
npm install tailwindcss postcss postcss-import autoprefixer --save
```

Then in `postcss.config.js` set up compilation (more info in Tailwind CSS docs [Tailwind CSS postcss](https://tailwindcss.com/docs/using-with-preprocessors)).

```js
module.exports = {
  plugins: [require('postcss-import'), require('tailwindcss/nesting'), require('tailwindcss'), require('autoprefixer')],
};
```

For `nextjs` and other frameworks you might need to use this syntax instead.

```js
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

Create a `tailwind.config.js` and add **xtendui preset**, with this purge configuration.

```js
module.exports = {
  presets: [
    require('tailwindcss/defaultConfig'), require('xtendui/tailwind.preset'),
  ],
  // put other content e.g.: './src/**/*.{html,js}'
  content: ['./node_modules/xtendui/src/**/*.mjs'],
}
```

Create your css.

```css
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "./_custom.css"; /* custom css here */

@import "tailwindcss/utilities";
```

You can [customize components css](https://xtendui.com/components/global/preset#customization), more info in Tailwind CSS docs [Tailwind CSS theme](https://tailwindcss.com/docs/theme).

## Javascript

**Setup compilation using any compiler** see [xtendui-boilerplate](https://github.com/xtendui/xtendui-boilerplate).

You can import the **components you need** as described in the demos.

```js
import { Xt } from 'xtendui'
import 'xtendui/src/toggle'
```

> Some bundlers doesn't support `package.json#exports` if you get module not found use the extensions `.mjs` (e.g. `import 'xtendui/src/toggle.mjs'`).

#### Gsap

Xtend UI uses [gsap](https://github.com/greensock/GSAP) for javascript animations in some demos, but it's not included in the library.

```
npm install gsap --save
```

#### Polyfill

You need to install [@babel/core](https://www.npmjs.com/package/@babel/core), [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env), [core-js](https://www.npmjs.com/package/core-js).

```
npm install @babel/core @babel/preset-env core-js --save
```

Create on the root of the project `babel.config.js` with:

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: require('core-js/package.json').version
      },
    ],
  ],
}
```

Be sure to transpile `mjs` extension and exclude `node_modules` but include `xtendui`, for example with `babel-loader`:

```js
{
  test: /\.m?js$/,
  exclude: {
    and: [/node_modules/],
    not: [/node_modules\/xtendui/],
  },
  use: {
    loader: 'babel-loader',
  },
},
```

Create on the root of the project `.browserslistrc` with:

```
Chrome >= 84
Edge >= 84
Safari >= 14.1
Firefox >= 74
Opera >= 70
iOS >= 14.5
```

## Global Styles

Add to the `body` the class `xt-body` to setup [animations global styles](https://xtendui.com/components/animation#global-styles), [layout global styles](https://xtendui.com/components/global#global-styles), [typography global styles](https://xtendui.com/components/typography#global-styles).

Add to the `body` the class `xt-links-default` or `xt-links-inverse` to have [link global styles](https://xtendui.com/components/link#global-styles).

**If you use gsap** add [this javascript](https://xtendui.com/components/animation#setup) to setup animations.

## Unsupported browsers

If you want to show a warning on unsupported browser you can use [browser update](https://browser-update.org/) and target exactly [supported browsers](https://github.com/xtendui/xtendui/blob/master/.browserslistrc).

```html
<script>
  // put at the end of body tag https://browser-update.org/
  var $buoop = {required:{c:84,e:84,s:14.1,f:74,o:70},insecure:true,api:2023.12 }; 
  function $buo_f(){ 
  var e = document.createElement("script"); 
  e.src = "//browser-update.org/update.min.js";
  e.async = true;
  e.defer = true;
  document.body.appendChild(e);
  };
  try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
  catch(e){window.attachEvent("onload", $buo_f)}
</script>
```

Or you can include from npm and **prevent error logging for browsers not supported** (if you want for example **new relic console errors** without unsupported browsers).

```js
import browserUpdate from 'browser-update'

browserUpdate({
  required: { c: 84, e: 84, s: 14.1, f: 74, o: 70 },
  api: 2023.12,
  onshow: () => {
    // do not log errors on new relic when browser not supported
    window.addEventListener('error', e => {
      e.preventDefault()
    })
  },
})
```

## CDN

If you need to do a **fast installation** of css and js (for codepen or jsfiddle for example) use [xtendui CDN](https://unpkg.com/xtendui/), the css and js are inside the `dist/` folder.

The css CDN `dist/` includes only the styles used in the documentation demos.

The js CDN `dist/` files are large because they include all styles and components, **it's not representative of the sizes** you see when including Xtend UI as part of your build process.

