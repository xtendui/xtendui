---
type: "Components"
badge: "Core"
parent: "Toggle"
title: "Toggle"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["100-Core"]
---

##Setup

To use this component import the **js** files accordingly:

```jsx
import 'xtend-library/src/core/toggle/toggle.js'
```

Or just import **core**:

```jsx
import 'xtend-library/src/xtend-core.js'
```

##Usage

Use this markup to create a **toggle**.

<script type="text/plain" class="language-markup">
  <div data-xt-toggle>
    <button type="button">
      <!-- content -->
    </button>
    <div class="toggle-block">
      <!-- content -->
    </div>
  </div>
</script>

You can use this markup to create a **toggle** with **no targets**.

<script type="text/plain" class="language-markup">
  <button type="button" data-xt-toggle>
    <!-- content -->
  </button>
</script>

##Initialization

Initialize automatically within markup with `[data-xt-toggle="{ <options> }"]`.

Or initialize with javascript:

```jsx
new Xt.Toggle(document.querySelector('.my-toggle'), {
  // options
});
```

For options and events visit the [api page](/components/toggle/api).
