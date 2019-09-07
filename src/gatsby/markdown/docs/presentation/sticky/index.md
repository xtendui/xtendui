---
path: "/docs/sticky"
type: "docs"
date: "2000-04-01"
title: "Sticky"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["400-Presentation"]
parent: "Sticky"
---

##Usage

Use this markup to create a sticky.

<script type="text/plain" class="language-markup">
  <div data-xt-xticky>
    <div>
      <!-- content -->
    </div>
  </div>
</script>

You can initialize **sticky** by javascript omitting `[data-xt-sticky]`.


```jsx
let self = new Xt.Sticky(document.querySelector('.my-sticky'), {
  // option
});
```

<div class="alert">
  <div class="alert_content">
    It's recomended to style and animate a inner div <code>[data-xt-xticky] > div</code> when using <strong>sticky
    component</strong>.
  </div>
</div>
