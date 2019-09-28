---
path: "/core/overlay"
type: "core"
title: "Overlay"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["300-Interaction"]
parent: "Overlay"
---

##Usage

Use this markup to create a overlay.

<script type="text/plain" class="language-markup">
  <button type="button" data-xt-overlay="{ targets: '#overlay-custom' }">
    <!-- content -->
  </button>
  <div class="overlay_outer" id="overlay-custom">
    <div class="overlay">
      <div class="overlay_inner">
        <div class="overlay_design"></div>
        <button type="button" class="btn btn--close overlay_dismiss" aria-label="Close"></button>
        <div class="overlay_content">
          <!-- content -->
        </div>
      </div>
    </div>
  </div>
</script>

You can use this markup to create a overlay with **no id**.

<script type="text/plain" class="language-markup">
  <div data-xt-overlay>
    <button type="button">
      <!-- content -->
    </button>
    <div class="overlay_outer">
      <div class="overlay">
        <div class="overlay_inner">
          <div class="overlay_design"></div>
          <button type="button" class="btn btn--close overlay_dismiss" aria-label="Close"></button>
          <div class="overlay_content">
            <!-- content -->
          </div>
        </div>
      </div>
    </div>
  </div>
</script>

You can use this markup to create a overlay with **no toggle**.

<script type="text/plain" class="language-markup">
  <div class="overlay_outer active" data-xt-overlay>
    <div class="overlay">
      <div class="overlay_inner">
        <div class="overlay_design"></div>
        <button type="button" class="btn btn--close overlay_dismiss" aria-label="Close"></button>
        <div class="overlay_content">
          <!-- content -->
        </div>
      </div>
    </div>
  </div>
</script>

You can initialize **overlay** by javascript omitting `[data-xt-overlay]`.

```jsx
let self = new Xt.Overlay(document.querySelector('.my-overlay'), {
  // option
});
```

<div class="alert">
  <div class="alert_content">
    Overlays are moved to **body** to prevent **z-index** problems. Use `"appendTo": false` to prevent that.
  </div>
</div>
