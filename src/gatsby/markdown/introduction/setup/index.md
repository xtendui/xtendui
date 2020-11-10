---
type: "Introduction"
category: "Getting Started"
parent: "Setup"
title: "Setup"
description: "Installation instructions, css and js setup."
date: "2050-09-10"
---

## Boilerplate

If you want we have some boilerplate projects to start a project all ready to go! Check out [xtendui-boilerplate](https://github.com/minimit/xtendui-boilerplate).

## Installation

Install **xtendui**.

```sh
npm install xtendui --save
```

## Css

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
  presets: [require('tailwindcss/defaultConfig'), require('xtendui/tailwind.preset')],
  purge: {
    content: ['./src/**/*.html', './src/**/*.css', './src/**/*.js'], // put your purge content
    options: {
      safelist: {
        greedy: [
          // popperjs
          /^data-popper-/,
       ],
      },
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

More info in Tailwind docs [tailwind postcss](https://tailwindcss.com/docs/using-with-preprocessors), [tailwind theme](https://tailwindcss.com/docs/theme).

#### Customization

You can **customize theme** inside `tailwind.config.js`, check [xtendui/tailwind.preset.js](https://github.com/minimit/xtendui/blob/master/tailwind.preset.js) for default values.

```jsx
module.exports = {
  theme:{
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
    },
  },
}
```

You can **customize components** inside `tailwind.config.js`, check [xtendui/tailwind.xtend.js](https://github.com/minimit/xtendui/blob/master/tailwind.xtend.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      layout: { // layout component
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

## Javascript

You can import the **components you need** as described in the docs.

```jsx
import { Xt } from 'xtendui'
import 'xtendui/src/core/toggle'
```

#### Animations

This library in the demos uses [gsap](https://github.com/greensock/GSAP) for javascript animations.

Install it and use as described in the docs.

```
npm install gsap --save
```

#### Polyfill

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
Edge >= 13
Opera >= 25
```

## CDN

If you need to do a **fast installation** of css and js use [xtendui CDN](https://unpkg.com/xtendui/), the css and js are inside the `dist/` folder.

The CDN `dist/` files are large because they include tailwindcss and all components / addons, **it's not representative of the sizes** you see when including Xtend UI as part of your build process.

Please note that many of the features that make Xtend UI great **are not available without incorporating Xtend UI into your build process**.
