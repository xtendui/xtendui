---
type: "Components"
badge: "Extensions"
parent: "Scroll"
title: "Scroll"
description: "Content animation when you scroll the page, fade in elements, parallax."
categories: ["400-Extensions"]
---

## Setup

To use this component import the **less** and **js** files accordingly:

```less
@import '/src/extensions/scroll/scroll.less';
```

```jsx
import 'xtend-library/src/extensions/scroll/scroll.js'
```

Or just import **extensions**:

```less
@import '/src/xtend-extensions.less';
```

```jsx
import 'xtend-library/src/xtend-extensions.js'
```

[[noteDefault]]
| To modify a **less** or **js** file add [webpack resolve](/introduction/setup#usage-webpack) and fork the file copying it in your project.

## Usage

@TODO

[[notePrimary]]
| It's recomended to animate the scroll elements with <code>animation</code> instead of <code>transition</code> because of <a href="{% link faq.html %}#browsers-bugs-fixed-position">this bug</a>.

## Initialization

Initialize automatically within markup with `[data-xt-scroll="{ <options> }"]` on the **object**:

[[noteDefault]]
| **Object** is the DOM element you want to assign the component.

Or initialize with javascript:

```js
let self = new Xt.Scroll(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer** (preferred method):

```js
Xt.mount.push({
  matches: '#my-object',
  mount: object => {
    // init

    let self = new Xt.Scroll(object, {
      // options
    })

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  }
})
```
