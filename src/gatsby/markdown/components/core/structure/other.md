---
type: "Components"
category: "Core"
parent: "Structure"
title: "Other"
date: "2019-03-15"
---

## Resize

We use a special resize handler that manages `resize` **only if the height of the window changes**, to force it also on window width change use `e.detail.force`:

```js
dispatchEvent(new CustomEvent('resize', { detail: { force: true } }))
```

For the `resize` event you can also trigger it only inside some **container node**, not possible normally, just use `e.detail.container`:

```js
const checkResize = document.querySelector('.my-element')
const eventResize = function (e) {
  // triggering e.detail.container
  if (!e || !e.detail || !e.detail.container || e.detail.container.contains(checkResize)) {
    // logic
  }
}
document.querySelector.addEventListener(eventResize)

// triggering e.detail.container
dispatchEvent(new CustomEvent('resize', { detail: { force: true, container: document.querySelector('.my-container') } }))
```
