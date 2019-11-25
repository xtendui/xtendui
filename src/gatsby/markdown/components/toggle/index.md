---
type: "Components"
badge: "Core"
parent: "Toggle"
title: "Toggle"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["300-Interaction"]
---

##Setup

To use this component import the **js** files accordingly:

```jsx
import 'xtend-library/src/core/toggle/toggle.js'
```

Or just [import core](/components/setup/#@TODO).

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

##Javascript

###Initialization

Initialize automatically within markup with `[data-xt-toggle]`.

Or initialize with javascript:

```jsx
new Xt.Toggle(document.querySelector('.my-toggle'), {
  // options
});
```

###Options

@TODO tables options

###Events

@TODO tables events

You can animate with javascript instead of css, just use [toggle events](/components/toggle/@TODO) and remember to set `durationOn: Milliseconds` and `durationOff: Milliseconds`.

<demo>
  <demovanilla src="vanilla/components/toggle/javascript">
  </demovanilla>
</demo>
