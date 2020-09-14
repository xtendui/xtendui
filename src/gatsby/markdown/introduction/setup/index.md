---
type: "Introduction"
category: "Getting Started"
parent: "Setup"
title: "Setup"
description: "Setup and compilation instructions."
date: "2050-01-01"
---

## Css Installation

This is the setup procedure for styles and javascript.

If you want we have some boilerplate projects to start a project all ready to go!

* [xtend-theme-vanilla](https://github.com/minimit/xtend-theme-vanilla)

#### Postcss

Install **postcss** and **tailwind**.

```Shell
npm install postcss-import postcss-nesting tailwindcss --save-dev
```

Then in `postcss.config.js` set up compilation.

```jsx
const postcssImport = require(`postcss-import`)
const postcssNesting = require('postcss-nesting')
const tailwindcss = require(`tailwindcss`)

module.exports = {
  map: true,
  plugins: [postcssImport(), tailwindcss(), postcssNesting()],
}
```

#### Tailwind

Install **xtend**.

```Shell
npm install xtend-library --save
```

Then add **xtend** plugins and variables inside `tailwind.config.js`.

```jsx
module.exports = {
  purge: [],
  theme: {
    extend: {
      zIndex: {
        base: '0',
        active: '5',
        top: '50',
        indicator: '51',
        backdrop: '500',
        drop: '600',
        sticky: '800', // same as javascript and decreses with sequential sticky
        overlay: '900',
        last: '1000',
      },
      transitionTimingFunction: {
        in: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        out: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
      },
    },
  },
  variants: {
    backgroundColor: ({ after }) => after(['active'], 'hover'),
    gradientColorStops: ({ after }) => after(['active'], 'hover'),
    backgroundOpacity: ({ after }) => after(['active'], 'hover'),
    borderColor: ({ after }) => after(['active'], 'hover'),
    borderOpacity: ({ after }) => after(['active'], 'hover'),
    boxShadow: ({ after }) => after(['active'], 'hover'),
    opacity: ({ after }) => after(['active'], 'hover'),
    textColor: ({ after }) => after(['active'], 'hover'),
    textOpacity: ({ after }) => after(['active'], 'hover'),
    textDecoration: ({ after }) => after(['active'], 'hover'),
    scale: ({ after }) => after(['active'], 'hover'),
    rotate: ({ after }) => after(['active'], 'hover'),
    translate: ({ after }) => after(['active'], 'hover'),
    skew: ({ after }) => after(['active'], 'hover'),
  },
  plugins: [require('xtend-library')],
  experimental: {
    applyComplexClasses: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    removeDeprecatedGapUtilities: true,
  },
}

```

## Js Installation

You need to install [json5](https://www.npmjs.com/package/json5), [core-js](https://www.npmjs.com/package/core-js), [@babel/core](https://www.npmjs.com/package/@babel/core), [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env), [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver).

```Shell
npm install json5 --save
npm install core-js@3 @babel/core @babel/preset-env babel-plugin-module-resolver --save-dev
```

Then in `babel.config.js` set up polyfills.

```jsx
const path = require('path')

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
  ],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          // if you want to fork javascript file add a local path.resolve as first in array
          'xtend-library': [path.resolve(__dirname, './node_modules/xtend-library')],
        },
      },
    ],
  ],
}
```

#### Gsap

This library in the demos uses [gsap](https://github.com/greensock/GSAP) and [bezier-easing](https://github.com/gre/bezier-easing) for javascript animations.

```
npm install gsap bezier-easing --save
```

#### Usage

You need to import the **polyfills** and the **main js** file.

```jsx
import 'core-js'
import 'xtend-library/src/xt.js'
```

Then you can import the **components you need** as described in the docs:

```jsx
import 'xtend-library/src/xtend-core.js'
import 'xtend-library/src/extensions/slider/slider.js'
```

## Css Customization

To **modify or disable default styles** of utilities and components, use `xtend` object inside **tailwind's theme** and set your custom styles, or set to `false`.

To **know what to modify** see the source code of `node_modules/xtend-library/src/tailwind-css.js`.

```jsx
module.exports = {
  theme: {
    extend: {
      xtend: theme => ({
        utilities: {
          // disable utility
          utility: false,
          // modify utility
          utility: {
            '.selector': {
              myStyle: 'myStyleValue',
            },
          },
        },
        components: {
          // disable component
          component: false,
          // modify component
          component: {
            '.selector': {
              myStyle: 'myStyleValue',
            },
          },
        },
      }),
    },
  },
}
```

## Browser support

Supported browsers are as follow: **explorer 12**, **firefox 38**, **opera 25**, **safari 10**, **chrome 38**.

## Documentation

We use [gatsby](https://www.npmjs.com/package/gatsby) to serve the docs:

* Install required npm packages with `npm install`
* Use `npm run build` to build the docs in `/public`
* Use `npm run dev` to serve a develop version
* Use `npm run serve`to serve a production version

## Copyright

Licensed under [MIT license](https://github.com/minimit/xtend-library/blob/master/LICENSE).
Docs licensed under [CC BY 3.0](https://github.com/minimit/xtend-library/blob/master/LICENSE-DOCS).
