---
type: "Components"
badge: "Extensions"
parent: "Loader"
title: "Loader"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["400-Presentation"]
---

##Setup

To use this component import the **less** and **js** files accordingly:

```less
@import '~xtend-library/src/extensions/loader/loader.less';
```

Or just [import extensions](/components/setup/#@TODO).

##Usage

Use this markup to create a **spinner loader**.

<script type="text/plain" class="language-markup">
  <div class="loader loader--spinner">
    <div class="spinner">
      <svg viewBox="0 0 250 250"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628"/></svg><svg viewBox="0 0 250 250" preserveAspectRatio="xMinYMin meet"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628"/></svg>
    </div>
  </div>
</script>

Use this markup to create a **filler loader**.

<script type="text/plain" class="language-markup">
  <span class="loader loader--x">
    <span class="filler">
      <span></span><span></span>
    </span>
  </span>
</script>
