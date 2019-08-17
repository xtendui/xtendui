---
path: "/docs/presentation/slider/navigation"
type: "docs"
date: "2019-04-15"
title: "Navigation"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["400-Presentation"]
parent: "Slider"
---

###Navigation

You can add navigation with `[data-xt-nav="+-Number"].xt-ignore` where `+-Number` is the amount to change the slider when clicked.

<script type="text/plain" class="language-markup">
  <button type="button" class="btn xt-ignore" data-xt-nav="-1" title="Previous slide">
    <span class="icon-xt--chevron-left"></span>
  </button>
  <button type="button" class="btn xt-ignore" data-xt-nav="1" title="Next slide">
    <span class="icon-xt--chevron-right"></span>
  </button>
</script>

<demo>
  <demovanilla src="demos/inline/demos/slider/navigation">
  </demovanilla>
</demo>
