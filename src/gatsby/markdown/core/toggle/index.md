---
type: "Core"
parent: "Toggle"
title: "Toggle"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["300-Interaction"]
---

##Usage

Use this markup to create a toggle.

<script type="text/plain" class="language-markup">
  <div data-xt-toggle>
    <button type="button">
      <!-- content -->
    </button>
    <div class="toggle--block">
      <!-- content -->
    </div>
  </div>
</script>

You can use this markup to create a toggle with **no targets**.

<script type="text/plain" class="language-markup">
  <button type="button" data-xt-toggle>
    <!-- content -->
  </button>
</script>

You can initialize **toggle** by javascript omitting `[data-xt-toggle]`.

```jsx
let self = new Xt.Toggle(document.querySelector('.my-toggle'), {
  // option
});
```

##Mode

<div class="alert">
  <div class="alert_content">
    For toggle utils classes read the documentation of <a href="{% link _docs/introduction/utils.html %}#toggle">toggle
    utils</a>.
  </div>
</div>

###Multiple

You can create a toggle with **mutiple** mode by assigning `[data-xt-toggle]` to a scope element, elements and targets must be inside the scope. Check @TODO toggle defatuls for the default elements and targets.

<div class="alert">
  <div class="alert_content">
    With **multiple mode** you **can't** specify targets with **#id**.
  </div>
</div>

With multiple **targets**, the ones activated is the one with the same index of the toggled **element**. Nested **targets** are filtered out.

<demo>
  <demovanilla src="demos/inline/demos/toggle/multiple-index">
  </demovanilla>
</demo>

Custom **elements** and **targets**.

<demo>
  <demovanilla src="demos/inline/demos/toggle/custom-options">
  </demovanilla>
</demo>

Any class that starts with `.toggle--` can be used as **toggle targets**.

###Unique

The **unique** mode is useful when triggering **targets outside the scope** of the toggle root.

When you don't specify **elements** the scope becomes global and the element becomes `[data-xt-toggle]` itself.

<div class="alert">
  <div class="alert_content">
    With **munique mode** you **need** to specify targets with **#id**.
  </div>
</div>

Toggle a single **element** with `[data-xt-toggle]`.

<demo>
  <demovanilla src="demos/inline/demos/toggle/unique-self">
  </demovanilla>
</demo>

Toggle a single **target** using `targets` with **#id**.

<demo>
  <demovanilla src="demos/inline/demos/toggle/unique-single">
  </demovanilla>
</demo>

Toggle same **targets** using `targets` with **#id**.

<demo>
  <demovanilla src="demos/inline/demos/toggle/unique-same">
  </demovanilla>
</demo>
