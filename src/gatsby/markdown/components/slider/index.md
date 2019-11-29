---
type: "Components"
badge: "Extensions"
parent: "Slider"
title: "Slider"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["400-Extensions"]
---

##Setup

To use this component import the **less** and **js** files accordingly:

```less
@import '~xtend-library/src/extensions/slider/slider.less';
```

```jsx
import 'xtend-library/src/extensions/slider/slider.js'
```

Or just import **extensions**:

```less
@import '~xtend-library/src/xtend-extensions.less';
```

```jsx
import 'xtend-library/src/xtend-extensions.js'
```

##Usage

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
      <button type="button" class="btn btn--default xt-ignore" data-xt-pag title="Slide xt-num">
      </button>
    </nav>

  </div>
</script>

[[noteDefault]]
| `slider-pagination[data-xt-pag].xt-ignore` is essential to the functioning of the slider, so if you don't want to show it add `.display-none`.

##Initialization

Initialize automatically within markup with `[data-xt-slider="{ <options> }"]`.

Or initialize with javascript:

```jsx
new Xt.Slider(document.querySelector('.my-slider'), {
  // options
});
```

For options and events visit the [api page](/components/slider/api).
