---
type: "Introduction"
category: "Getting Started"
parent: "Installation"
title: "Installation"
description: "Installation instructions, css and js setup."
date: "2050-10-10"
---

## Css Installation

See Tailwind docs: [tailwind postcss](https://tailwindcss.com/docs/using-with-preprocessors), [tailwind purgecss](https://tailwindcss.com/docs/controlling-file-size), [tailwind theme](https://tailwindcss.com/docs/theme).

Install **tailwind**, **xtendui**, **postcss import**, **postcss nested** and **postcss purgecss**.

```sh
npm install tailwindcss xtendui --save
npm install postcss postcss-import postcss-nested postcss-purgecss --save-dev
```

Then in `postcss.config.js` set up compilation.

```jsx
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./src/**/*.html', './src/**/*.js'],
  defaultExtractor: content => {
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
    return broadMatches.concat(innerMatches)
  },
})

module.exports = {
  plugins: [require(`postcss-import`), require(`tailwindcss`), require('postcss-nested'), ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])],
}
```

Create a `tailwind.config.js` and add **xtendui preset**.

```jsx
module.exports = {
  presets: [require('tailwindcss/defaultConfig'), require('xtendui/src/tailwind-preset')],
  theme: {
    // add here your theme settings
    extend: {
      // add here your theme extend settings
    },
  },
}
```

Then you can use css with tailwind.

```css
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "./custom.css"; /* custom css here */

@import "tailwindcss/utilities";
```

#### Customization

You can **customize xtendui** inside `tailwind.config.js`.

```jsx
module.exports = {
  theme:{
    // extend theme in node_modules/xtendui/src/tailwind-config.js
    extend: {
      colors: {
        accent: {
          50: '#F8F7FF',
          100: '#F1F0FE',
          200: '#DDD9FD',
          300: '#C8C2FC',
          400: '#9E95FA',
          500: '#7567F8',
          600: '#695DDF',
          700: '#463E95',
          800: '#352E70',
          900: '#231F4A',
        },
      },
      transitionTimingFunction: {
        in: 'cubic-bezier(.19,1,.22,1)',
        out: 'cubic-bezier(1,0,0,1)',
      },
    },
    // xtend utilities and components in node_modules/xtendui/src/tailwind-xtend.js
    xtend: theme => ({
      utilities: {
        core: {
          // disable utility
          utilityName: false,
          // modify utility
          utilityName: {
            '.selector': {
              myStyle: 'myStyleValue',
            },
          },
        },
      },
      components: {
        core: {
          // disable core component
          componentName: false,
          // modify core component
          componentName: {
            '.selector': {
              myStyle: 'myStyleValue',
            },
          },
        },
        addons: {
          // disable addon component
          addonName: false,
          // modify addon component
          addonName: {
            '.selector': {
              myStyle: 'myStyleValue',
            },
          },
        },
      },
    }),
  },
}
```

To **see the default values** see the source code of `node_modules/xtendui/src/tailwind-xtend.js`.

## Javascript Installation

#### Babel and Corejs

You need to install [corejs](https://www.npmjs.com/package/core-js), [@babel/core](https://www.npmjs.com/package/@babel/core), [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env), [@babel/plugin-transform-runtime](https://www.npmjs.com/package/@babel/plugin-transform-runtime), [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver).

```sh
npm install core-js@3 @babel/core @babel/preset-env @babel/plugin-transform-runtime babel-plugin-module-resolver --save-dev
```

Then in the root of your project set up polyfills with `babel.config.js`.

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
    [require.resolve('@babel/plugin-transform-runtime')],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          // if you want to fork javascript file add a local path.resolve as first in array
          'xtendui': [path.resolve(__dirname, './node_modules/xtendui')],
        },
      },
    ],
  ],
}
```

Then import the **corejs**.

```jsx
import 'core-js'
```

You need also to set a `.browserslistrc` in the root of your project.

```
Chrome >= 38
Safari >= 10
iOS >= 10
Firefox >= 38
Edge >= 12
Opera >= 25
```

#### Xtend

Install **xtendui**.

```sh
npm install xtendui --save
```

Then import the **xtendui main file**.

```jsx
import { Xt } from 'xtendui'
```

Then you can import the **components you need** as described in the docs.

```jsx
import 'xtendui/src/core/toggle'
import 'xtendui/src/core/slider'
```

#### Animations

This library in the demos uses [gsap](https://github.com/greensock/GSAP) for javascript animations. Install it.

```
npm install gsap --save
```

Then **setup gsap** this way. Also add the following **xtendui variables**.

```jsx
/**
 * gsap setup
 */

import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.defaults({
  overwrite: 'auto',
})

gsap.config({
  force3D: false,
})

gsap.globalTimeline.timeScale(1000) // milliseconds instead of seconds

gsap.registerPlugin(ScrollToPlugin)

/**
 * Xt.vars
 */

Xt.vars = {
  timeMicro: 50,
  timeMini: 100,
  timeTiny: 250,
  timeSmall: 500,
  timeMedium: 750,
  timeLarge: 1000,
  timeBig: 1500,
  timeGiant: 2000,
  timeHuge: 3000,
}

// instant animations accessibility

if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce), (update: slow)').matches) {
  Xt.vars.timeMicro = 0
  Xt.vars.timeMini = 0
  Xt.vars.timeTiny = 0
  Xt.vars.timeSmall = 0
  Xt.vars.timeMedium = 0
  Xt.vars.timeLarge = 0
  Xt.vars.timeBig = 0
  Xt.vars.timeGiant = 0
  Xt.vars.timeHuge = 0
}
```

## CDN Installation

If you need to do a **fast installation** of css and js use [core-js CDN](https://cdnjs.com/libraries/core-js) and [xtendui CDN](https://unpkg.com/xtendui/), the css and js are inside the `dist/` folder.

The CDN `dist/` files are large because they include tailwindcss and all components / addons, **it's not representative of the sizes** you see when including Xtend UI as part of your build process.

Please note that many of the features that make Xtend UI great **are not available without incorporating Xtend UI into your build process**.
