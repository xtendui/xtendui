---
type: "Components"
category: "Extensions"
parent: "Slider"
title: "Slider"
description: "Customizable sliders with custom animation and interaction."
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/setup#css-installation) instructions.

To customize this component in your `tailwind.config.js` file, as described in [css customization](/introduction/getting-started/setup#css-customization) instructions, use the keys like below.

```jsx
module.exports = {
  theme: require('xtend-library/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtend-library/src/tailwind-xtend.js
    xtend: theme => ({
      utilities: {
        slider: {
          // modify utility
        },
      },
      components: {
        slider: {
          // modify component
        },
      },
    }),
  })
}
```

#### Javascript

Follow the [js installation](/introduction/getting-started/setup#js-installation) instructions.

Import the component's **js** file.

```jsx
import 'xtend-library/src/extensions/slider/slider.js'
```

Or just import **extensions**.

```jsx
import 'xtend-library/src/xtend-extensions.js'
```

## Usage

Use this markup to create a **slider**.

<script type="text/plain" class="language-markup">
  <div class="slider" data-xt-slider>

    <div class="slides">
      <nav class="slides-inner">

        <div class="slide">
          <div class="slide-inner">
            <!-- content -->
          </div>
        </div>

        <div class="slide">
          <div class="slide-inner">
            <!-- content -->
          </div>
        </div>

      </nav>
    </div>

    <nav class="slider-pagination">
      <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
      </button>
    </nav>

  </div>
</script>

[[notePrimary]]
| `slider-pagination[data-xt-pag].xt-ignore` is essential to the functioning of the slider, so if you don't want to show it add `.display-none`.

## Initialization

Initialize automatically within markup with `[data-xt-slider="{ <options> }"]` on the **object**.

[[noteDefault]]
| **Object** is the DOM element you want to assign the component to.

Or initialize with **javascript**.

```js
let self = new Xt.Slider(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

```js
Xt.mount.push({
  matches: '#my-object',
  mount: object => {
    // init

    let self = new Xt.Slider(object, {
      // options
    })

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  }
})
```
