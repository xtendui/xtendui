---
path: "/docs/presentation/slider"
type: "docs"
date: "2000-02-01"
title: "Slider"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["400-Presentation"]
parent: "Slider"
---

##Usage

Use this markup to create a drop.

<script type="text/plain" class="language-markup">
  <div class="slider" data-xt-slider>

    <div class="slides">
      <ul class="slides_inner">

        <li class="slide">
          <div class="slide_inner">
            <!-- content -->
          </div>
        </li>

        <li class="slide">
          <div class="slide_inner">
            <!-- content -->
          </div>
        </li>

      </ul>
    </div>

    <nav class="slider_pagination">
      <button type="button" class="xt-ignore" data-xt-pag>
        <span></span>
      </button>
    </nav>

  </div>
</script>

You can initialize **slider** by javascript omitting `[data-xt-slider]`.

```jsx
let self = Xt.init('xt-slider', document.querySelector('.my-slider'), {
  // option
});
```