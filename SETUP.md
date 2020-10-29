
Install **xtendui**.

```sh
npm install xtendui --save
```

## Css

See Tailwind docs: [tailwind postcss](https://tailwindcss.com/docs/using-with-preprocessors), [tailwind theme](https://tailwindcss.com/docs/theme).

Install **tailwind**, **xtendui**, **postcss import**, **postcss nested**.

```sh
npm install tailwindcss xtendui --save
npm install postcss postcss-import postcss-nested --save-dev
```

Then in `postcss.config.js` set up compilation.

```jsx
module.exports = {
  plugins: [require(`postcss-import`), require(`tailwindcss`), require('postcss-nested')],
}
```

Create a `tailwind.config.js` and add **xtendui preset**.

```jsx
module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.css', './src/**/*.js'],
    options: {},
  },
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

## Javascript

You can import the **components you need** as described in the docs.

```jsx
import 'xtendui'
import 'xtendui/src/core/toggle'
```

#### Animations

This library in the demos uses [gsap](https://github.com/greensock/GSAP) for javascript animations. Install it.

```
npm install gsap --save
```

Then **setup gsap** this way. Also add the following **variables**.

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

## Customization

You can **customize theme** inside `tailwind.config.js`, check [xtendui/src/tailwind-config.js](https://github.com/minimit/xtendui/blob/master/src/tailwind-config.js) for default values.


```jsx
module.exports = {
  theme:{
    // only some tailwind colors
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: {
        50: '#FCFDFF',
        100: '#FAFCFF',
        200: '#F2F6FF',
        300: '#EAF1FF',
        400: '#DBE7FF',
        500: '#CBDCFF',
        600: '#B7C6E6',
        700: '#7A8499',
        800: '#5B6373',
        900: '#3D424D',
      },
    },
    extend: {
      colors: {
        // customize xtendui colors
        success: '#48bb78',
        error: '#f56565',
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
      // customize xtendui timing functions
      transitionTimingFunction: {
        in: 'cubic-bezier(.19,1,.22,1)',
        out: 'cubic-bezier(1,0,0,1)',
      },
    },
  },
}
```

You can **customize components** inside `tailwind.config.js`, check [xtendui/src/tailwind-xtend.js](https://github.com/minimit/xtendui/blob/master/src/tailwind-xtend.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      btn: { // put component name here
        variants: [],
        utility: theme => ({
          // modify utilities
        }),
        component: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Polyfill

You need to install [@babel/core](https://www.npmjs.com/package/@babel/core), [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env), [@babel/plugin-transform-runtime](https://www.npmjs.com/package/@babel/plugin-transform-runtime).

```sh
npm install @babel/core @babel/preset-env @babel/plugin-transform-runtime --save-dev
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
  ],
}
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

## CDN

If you need to do a **fast installation** of css and js use [xtendui CDN](https://unpkg.com/xtendui@1.x.x/), the css and js are inside the `dist/` folder.

The CDN `dist/` files are large because they include tailwindcss and all components / addons, **it's not representative of the sizes** you see when including Xtend UI as part of your build process.

Please note that many of the features that make Xtend UI great **are not available without incorporating Xtend UI into your build process**.
