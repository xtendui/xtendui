---
type: "Components"
badge: "Extensions"
parent: "Scroll"
title: "Scroll"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["400-Extensions"]
---

##Setup

To use this component import the **less** and **js** files accordingly:

```less
@import '~xtend-library/src/extensions/scroll/scroll.less';
```

```jsx
import 'xtend-library/src/extensions/scroll/scroll.js'
```

Or just import **extensions**:

```less
@import '~xtend-library/src/xtend-extensions.less';
```

```jsx
import 'xtend-library/src/xtend-extensions.js'
```

##Usage

@TODO

[[noteDefault]]
| It's recomended to animate the scroll elements with <code>animation</code> instead of <code>transition</code> because of <a href="{% link faq.html %}#browsers-bugs-fixed-position">this bug</a>.

##Initialization

Initialize automatically within markup with `[data-xt-scroll="{ <options> }"]`.

Or initialize with javascript:

```jsx
new Xt.Scroll(document.querySelector('.my-scroll'), {
  // options
});
```

For options and events visit the [api page](/components/scroll/api).
