---
path: "/core/slider/pagination"
type: "core"
date: "2019-04-20"
title: "Pagination"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["400-Presentation"]
parent: "Slider"
---

###Pagination

You can add pagination with `[data-xt-pag].xt-ignore` it gets cloned inside the closest `.slider_pagination`.

Inside it you can use this strings that gets populated with variables:

- `xt-num` replaced with pagination's number slide
- `xt-tot` replaced with pagination's total slides
- `xt-content` replaced with slide's `.slide_pagination_content` **innerHTML**.

<script type="text/plain" class="language-markup">
  <nav class="slider_pagination">
    <button type="button" class="btn xt-ignore" data-xt-pag title="Slide xt-num">
      <span>xt-num of xt-tot</span>
    </button>
  </nav>
</script>

<div class="alert">
  <div class="alert_content">
    `slider_pagination[data-xt-pag].xt-ignore` is essential to the functioning of the slider, so if you don't want to show it add `.display--none`.
  </div>
</div>

<demo>
  <demovanilla src="demos/inline/demos/slider/pagination">
  </demovanilla>
</demo>
