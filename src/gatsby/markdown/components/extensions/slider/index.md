---
type: "Components"
category: "Extensions"
parent: "Slider"
title: "Slider"
description: "Customizable sliders with custom animation and interaction."
---

## Setup

Follow xtend's [installation instructions](/introduction/getting-started/setup) for extending tailwind.

#### Component

Import the component's **js** file.

```jsx
import '/src/extensions/slider/slider.js'
```

Or just import **extensions**.

```jsx
import '/src/xtend-extensions.js'
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
