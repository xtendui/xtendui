---
type: "Components"
badge: "Extensions"
parent: "Slider"
title: "Slider"
description: "Customizable sliders with custom animation and interaction."
categories: ["400-Extensions"]
---

## Setup

To use this component import the **less** and **js** files accordingly:

```less
@import '/src/extensions/slider/slider.less';
```

```jsx
import 'xtend-library/src/extensions/slider/slider.js'
```

Or just import **extensions**:

```less
@import '/src/xtend-extensions.less';
```

```jsx
import 'xtend-library/src/xtend-extensions.js'
```

[[noteDefault]]
| To modify a **less** or **js** file add [webpack resolve](/introduction/setup#usage-webpack) and fork the file copying it in your project.

## Usage

Use this markup to create a **slider**.

<script type="text/plain" class="language-markup">
  <div class="slider" data-xt-slider>

    <div class="slides">
      <ul class="slides-inner">

        <li class="slide">
          <div class="slide-inner">
            <!-- content -->
          </div>
        </li>

        <li class="slide">
          <div class="slide-inner">
            <!-- content -->
          </div>
        </li>

      </ul>
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

Initialize automatically within markup with `[data-xt-slider="{ <options> }"]` on the **object**:

[[noteDefault]]
| **Object** is the DOM element you want to assign the component.

Or initialize with javascript:

```js
let self = new Xt.Slider(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer** (preferred method):

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
