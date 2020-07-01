---
type: "Components"
category: "Core"
parent: "Structure"
title: "Other"
date: "2019-03-15"
---

## Events

For the `resize` and `scroll` events we use a special wrapper `Xt.eventDelay` that set the delay on which the resize gets triggered with `Xt.resizeDelay` and `Xt.scrollDelay`.

```js
addEventListener('resize', e => {
  Xt.eventDelay(e, document.documentElement, () => {
    // logic
  })
})

addEventListener('scroll', e => {
  Xt.eventDelay(e, document.documentElement, () => {
    // logic
  })
})
```

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `Xt.eventDelay(e, element, function, prefix = '', instant = false)`              |        | event delay wrapper                  |
| Option                  | `resizeDelay:Number|Boolean`              | `500`        | Milliseconds to trigger the resize event with `Xt.eventDelay`            |
| Option                  | `scrollDelay:Number|Boolean`              | `500`        | Milliseconds to trigger the resize event with `Xt.eventDelay`                 |

</div>

### Resize

When the `e.type = 'resize'`, `Xt.eventDelay` also calls the function **only if the height of the window changes**, to fix browsers bugs call on resize events when scrolling, and to not trigger the resize event on mobile when the address bar hides on scroll.

To **force** it also on **window width change** use `e.detail.force`:

```js
dispatchEvent(new CustomEvent('resize', { detail: { force: true } }))
```

You can also trigger the resize or scroll event with **custom delay**, for instant use `delay: 0`.

```js
dispatchEvent(new CustomEvent('resize', { detail: {delay: 0 } }))
```

### Container

You can trigger some components events only inside some **container node**, not possible normally for resize events, just use `e.detail.container`:

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
