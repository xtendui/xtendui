---
type: "Core"
parent: "Overlay"
title: "Overlay"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["300-Interaction"]
---

Overlay uses card to style it's content, refer to [card page](/core/card) for complete card's usage.

<div class="alert">
  <div class="alert-content">
    Overlays are moved to **body** to prevent **z-index** problems. Style overlay accordingly, don't style or query overlay's content from outside the overlay!
  </div>
</div>

##Usage

Use this markup to create a overlay.

<script type="text/plain" class="language-markup">
  <button type="button" data-xt-overlay="{ targets: '#overlay--custom' }">
    <!-- content -->
  </button>
  <div class="overlay" id="overlay--custom">
    <div class="overlay-container">
      <div class="overlay-inner">
        <!-- content -->
      </div>
    </div>
  </div>
</script>

You can use this markup to create a overlay with **no toggle**.

<script type="text/plain" class="language-markup">
  <div data-xt-overlay>
    <div class="overlay active" id="overlay--custom">
      <div class="overlay-container">
        <div class="overlay-inner">
          <!-- content -->
        </div>
      </div>
    </div>
  </div>
</script>

##Initialization

You can initialize **overlay** by javascript omitting `[data-xt-overlay]`.

```jsx
new Xt.Overlay(document.querySelector('.my-overlay'), {
  // options
});
```