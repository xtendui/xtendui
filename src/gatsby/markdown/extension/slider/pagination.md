---
type: "Extension"
parent: "Slider"
title: "Pagination"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

###Pagination

You can add pagination with `[data-xt-pag].xt-ignore` it gets cloned inside the closest `.slider-pagination`.

Inside it you can use this strings that gets populated with variables:

- `xt-num` replaced with pagination's number slide
- `xt-tot` replaced with pagination's total slides
- `xt-content` replaced with slide's `.slide_pagination-content` **innerHTML**.

<script type="text/plain" class="language-markup">
  <nav class="slider-pagination">
    <button type="button" class="btn btn--default xt-ignore" data-xt-pag title="Slide xt-num">
      xt-num of xt-tot
    </button>
  </nav>
</script>

<div class="alert">
  <div class="alert-content">
    `slider-pagination[data-xt-pag].xt-ignore` is essential to the functioning of the slider, so if you don't want to show it add `.display--none`.
  </div>
</div>

<demo>
  <demovanilla src="inline/core/slider/pagination">
  </demovanilla>
</demo>
