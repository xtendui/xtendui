---
type: "Core"
parent: "Drop"
title: "Drop"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["300-Interaction"]
---

##Usage

Use this markup to create a drop.

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

You can initialize **drop** by javascript omitting `[data-xt-drop]`.

```jsx
let self = new Xt.Drop(document.querySelector('.my-drop'), {
});
```
