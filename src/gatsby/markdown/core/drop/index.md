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
  <div class="drop_outer" data-xt-drop>
    <button type="button">
      <!-- content -->
    </button>
    <div class="drop">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <!-- content -->
        </div>
      </div>
    </div>
  </div>
</script>

You can initialize **drop** by javascript omitting `[data-xt-drop]`.

```jsx
let self = new Xt.Drop(document.querySelector('.my-drop'), {
  // option
});
```

###Drop of anything

You can use drop to make a dropdown with inside anything.

<demo>
  <demovanilla src="demos/inline/demos/drop/usage-card">
  </demovanilla>
</demo>

###Drop of lists

<demo>
  <demovanilla src="demos/inline/demos/drop/usage-list">
  </demovanilla>
</demo>

`.list.list--drop` to override buttons use `li.custom`

<demo>
  <demovanilla src="demos/inline/demos/drop/usage-list-drop">
  </demovanilla>
</demo>
