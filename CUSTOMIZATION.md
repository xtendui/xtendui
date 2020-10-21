
## Css

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
      typography: {
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
