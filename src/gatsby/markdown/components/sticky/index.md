---
type: "Components"
badge: "Extensions"
parent: "Sticky"
title: "Sticky"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["400-Extensions"]
---

##Setup

To use this component import the **less** and **js** files accordingly:

```less
@import '~xtend-library/src/extensions/sticky/sticky.less';
```

```jsx
import 'xtend-library/src/extensions/sticky/sticky.js'
```

Or just [import extensions](/components/setup/#@TODO).

##Usage

Use this markup to create a **sticky**.

<script type="text/plain" class="language-markup">
  <div data-xt-xticky>
    <div>
      <!-- content -->
    </div>
  </div>
</script>

[[noteDefault]]
| It's recomended to style and animate a inner div <code>[data-xt-xticky] > div</code> when using <strong>sticky component</strong>.

##Javascript

@TODO

###Initialization

Initialize automatically within markup with `[data-xt-sticky]`.

Or initialize with javascript:

```jsx
new Xt.Sticky(document.querySelector('.my-sticky'), {
  // options
});
```

###Options

@TODO tables options

###Events

@TODO tables events
