---
type: "Components"
category: "Core"
parent: "Structure"
title: "Javascript"
date: "2019-06-01"
---

## Vars

In `/src/vars.js` there are js variables. Import it when you need animation's or other's variables:

```jsx
import '/src/vars.js'
```

And access the variables with `Xt.vars.<property>`.

## Animation

For javascript animations we use [gsap](https://greensock.com/gsap/). If you import `/src/vars.js` you import also **gsap**, you need to install it with npm see [setup gsap](/components/core/setup#usage-gsap).

## Event Delay

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

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Function                  | `Xt.eventDelay:Function`              | `e:Event, element:Node, function:Function, prefix:String = '', instant:Boolean = false`       | event delay wrapper                  |
| Variable                  | `Xt.resizeDelay:Number|Boolean`              | `500`        | Delay for the `resize` event with `Xt.eventDelay`            |
| Variable                  | `Xt.scrollDelay:Number|Boolean`              | `500`        | Delay for the `scroll` event with `Xt.eventDelay`                 |

</div>

You can also manually specify a **custom delay**, for instant use `delay: 0`.

```js
dispatchEvent(new CustomEvent('resize', { detail: {delay: 0 } }))
```

#### Resize Force

With `resize`, `Xt.eventDelay` also calls the function **only if the height of the window changes**, to not trigger the resize event on mobile when the address bar hides, and to fix multiple calls on sume browsers when scrolling.

To **force** `resize` event also on **window width change** use `e.detail.force`:

```js
dispatchEvent(new CustomEvent('resize', { detail: { force: true } }))
```

#### Resize Container

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
