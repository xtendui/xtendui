---
type: "Core"
parent: "Overlay"
title: "Overlay"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["300-Interaction"]
---

##Usage

Use this markup to create a overlay.

<script type="text/plain" class="language-markup">
  <button type="button" data-xt-overlay="{ targets: '#overlay-custom' }">
    <!-- content -->
  </button>
  <div class="overlay overlay--default" id="overlay-custom">
    <div class="overlay-container">
      <div class="overlay-inner">
        <div class="overlay-design"></div>
          <div class="overlay-close xt-fixed--check">
            <div class="btn btn-close overlay-dismiss" aria-label="Close"></div>
          </div>
        <div class="overlay-content">
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
    <div class="overlay overlay--default">
      <div class="overlay-container">
        <div class="overlay-inner">
          <div class="overlay-design"></div>
          <div class="overlay-close xt-fixed--check">
            <div class="btn btn-close overlay-dismiss" aria-label="Close"></div>
          </div>
          <div class="overlay-content">
            <!-- content -->
          </div>
        </div>
      </div>
    </div>
  </div>
</script>

You can use this markup to create a overlay with **no toggle**.

<script type="text/plain" class="language-markup">
  <div class="overlay overlay--default active" data-xt-overlay>
    <div class="overlay-container">
      <div class="overlay-inner">
        <div class="overlay-design"></div>
          <div class="overlay-close xt-fixed--check">
            <div class="btn btn-close overlay-dismiss" aria-label="Close"></div>
          </div>
        <div class="overlay-content">
          <!-- content -->
        </div>
      </div>
    </div>
  </div>
</script>

You can initialize **overlay** by javascript omitting `[data-xt-overlay]`.

```jsx
let self = new Xt.Overlay(document.querySelector('.my-overlay'), {
});
```

<div class="alert">
  <div class="alert-content">
    Overlays are moved to **body** to prevent **z-index** problems. Use `"appendTo": false` to prevent that.
  </div>
</div>
