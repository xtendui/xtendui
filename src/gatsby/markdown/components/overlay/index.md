---
type: "Components"
badge: "Core"
parent: "Overlay"
title: "Overlay"
description: "Component to create modals and menus that opens over the content, activable by interactions."
categories: ["100-Core"]
---

##Setup

To use this component import the **less** and **js** files accordingly:

```less
@import '~xtend-library/src/core/overlay/overlay.less';
```

```jsx
import 'xtend-library/src/core/overlay/overlay.js'
```

Or just [import core](/components/setup/#usage).

##Usage

Use this markup to create an **overlay**.

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

You can use this markup to create an **overlay** with **no toggle**.

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

[[noteError]]
| Overlays are moved to **body** to prevent **z-index** problems. Style and query overlay's content accordingly.

##Javascript

[[noteDefault]]
| Overlay uses toggle for logic, refer to [toggle page](/components/toggle#@TODO) for a complete **API**.

###Initialization

Initialize automatically within markup with `[data-xt-overlay]`.

Or initialize with javascript:

```jsx
new Xt.Overlay(document.querySelector('.my-overlay'), {
  // options
});
```

###Options

@TODO tables options

###Events

@TODO tables events
