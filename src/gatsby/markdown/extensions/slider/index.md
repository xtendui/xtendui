---
type: "Extensions"
parent: "Slider"
title: "Slider"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["400-Presentation"]
---

##Usage

Use this markup to create a drop.

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

<div class="note note--primary note--background">
  `slider-pagination[data-xt-pag].xt-ignore` is essential to the functioning of the slider, so if you don't want to show it add `.display-none`.
</div>

You can initialize **slider** by javascript omitting `[data-xt-slider]`.

```jsx
let self = new Xt.Slider(document.querySelector('.my-slider'), {
});
```
