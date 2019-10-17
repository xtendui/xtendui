---
type: "Extension"
parent: "Slider"
title: "Navigation"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

###Navigation

You can add navigation with `[data-xt-nav="+-Number"].xt-ignore` where `+-Number` is the amount to change the slider when clicked.

<script type="text/plain" class="language-markup">
  <button type="button" class="btn btn--default xt-ignore" data-xt-nav="-1" title="Previous slide">
    <span class="icon-xt-chevron-left"></span>
  </button>
  <button type="button" class="btn btn--default xt-ignore" data-xt-nav="1" title="Next slide">
    <span class="icon-xt-chevron-right"></span>
  </button>
</script>

<demo>
  <demovanilla src="inline/demo/slider/navigation">
  </demovanilla>
</demo>
