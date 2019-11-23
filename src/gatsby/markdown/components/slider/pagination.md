---
type: "Components"
badge: "Extensions"
parent: "Slider"
title: "Pagination"
---

###Pagination

You can add pagination with `[data-xt-pag].xt-ignore` it gets cloned inside the closest `.slider-pagination`.

Inside it you can use this strings that gets populated with variables:

- `xt-num` replaced with pagination's number slide
- `xt-tot` replaced with pagination's total slides
- `xt-content` replaced with slide's `.slide-pagination-content` **innerHTML**.

<script type="text/plain" class="language-markup">
  <nav class="slider-pagination">
    <button type="button" class="btn btn--default xt-ignore" data-xt-pag title="Slide xt-num">
      xt-num of xt-tot
    </button>
  </nav>
</script>

[[noteDefault]]
| `slider-pagination[data-xt-pag].xt-ignore` is essential to the functioning of the slider, so if you don't want to show it add `.display-none`.

<demo>
  <demovanilla src="vanilla/components/slider/pagination">
  </demovanilla>
</demo>
