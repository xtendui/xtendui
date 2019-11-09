---
type: "Components"
core: true
parent: "Drop"
title: "Drop"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["300-Interaction"]
---

##Setup

To use this component import the **less** and **js** files accordingly:

```less
@import '~xtend-library/src/core/drop/drop.less';
```

```jsx
import 'xtend-library/src/core/drop/drop.js'
```

Or just [import core](/core/setup/#@TODO).

##Usage

Use this markup to create a **drop**.

<script type="text/plain" class="language-markup">
  <div class="drop-container" data-xt-drop>
    <button type="button">
      <!-- content -->
    </button>
    <div class="drop drop--default">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <!-- content -->
        </div>
      </div>
    </div>
  </div>
</script>

##Javascript

[[noteDefault]]
| Drop uses toggle for logic, refer to [toggle page](/core/toggle#@TODO) for a complete **API**.

###Initialization

Initialize automatically within markup with `[data-xt-drop]`.

Or initialize with javascript:

```jsx
new Xt.Drop(document.querySelector('.my-drop'), {
  // options
});
```

###Options

@TODO tables options

###Events

@TODO tables events
