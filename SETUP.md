**Check out [xtendui-boilerplate](https://github.com/xtendui/xtendui-boilerplate)** code for Encore, Gulp, Parcel, Snowpack, Vite, Webpack ready to go!

## Installation

Install **xtendui**.

```sh
npm install xtendui --save
```

## Css

**Setup compilation using any compiler** see [postcss usage](https://github.com/postcss/postcss#usage) or [tailwind installation](https://tailwindcss.com/docs/installation/framework-guides) or [xtendui-boilerplate](https://github.com/xtendui/xtendui-boilerplate).

Install **tailwind**, **xtendui**, **postcss import**, **postcss nested**.

```sh
npm install tailwindcss --save
npm install postcss postcss-import autoprefixer --save-dev
```

Then in `postcss.config.js` set up compilation (more info in Tailwind docs [tailwind postcss](https://tailwindcss.com/docs/using-with-preprocessors)).

```jsx
module.exports = {
  plugins: [require('postcss-import'), require('tailwindcss/nesting'), require('tailwindcss'), require('autoprefixer')],
};
```

For `nextjs` and other frameworks you might need to use this syntax instead.

```jsx
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

```jsx
module.exports = {
  presets: [
    require('tailwindcss/defaultConfig'), require('xtendui/tailwind.preset'),
  ],
  // put other content e.g.: './src/**/*.{html,js}'
  content: ['./node_modules/xtendui/src/*.mjs'],
}
```

Create your css.

```css
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "./_custom.css"; /* custom css here */

@import "tailwindcss/utilities";
```

You can [customize components css](https://xtendui.com/components/global/preset#customization), more info in Tailwind docs [tailwind theme](https://tailwindcss.com/docs/theme).

## Javascript

**Setup compilation using any compiler** see [xtendui-boilerplate](https://github.com/xtendui/xtendui-boilerplate).

You can import the **components you need** as described in the demos.

```jsx
import { Xt } from 'xtendui'
import 'xtendui/src/toggle'
```

> Some bundlers doesn't support `package.json#exports` if you get module not found use the extensions `.mjs` (e.g. `import 'xtendui/src/toggle.mjs'`).

#### Gsap

Xtend UI uses [gsap](https://github.com/greensock/GSAP) for javascript animations in some demos, but it's not included in the library.

```sh
npm install gsap --save
```

#### Polyfill

You need to install [@babel/core](https://www.npmjs.com/package/@babel/core), [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env), [core-js](https://www.npmjs.com/package/core-js), [regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime).

```sh
npm install @babel/core @babel/preset-env core-js regenerator-runtime --save-dev
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
> 1%
not ie 11
not edge <= 18
not op_mini all
Edge >= 79
Firefox >= 67
Chrome >= 63
Safari >= 11.1
Opera >= 50
iOS >= 11
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
  var $buoop = {required:{e:79,f:67,o:50,s:11.1,c:63},api:2021.03 };
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

## CDN

If you need to do a **fast installation** of css and js use [xtendui CDN](https://unpkg.com/xtendui/), the css and js are inside the `dist/` folder.

The css CDN `dist/` includes only the styles used in the documentation demos.

The js CDN `dist/` files are large because they include all styles and components, **it's not representative of the sizes** you see when including Xtend UI as part of your build process.

