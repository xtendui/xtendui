---
type: "Hidden"
category: "Future"
parent: "Future"
title: "Future"
---

## Utilities Styles

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.xt-h-screen`       | `xt-h-screen`                | `responsive`                | Height `100vh` and retain height on vertical scroll/resize on mobile           |
| Utility                  | `.xt-min-h-screen`       | `xt-min-h-screen`                | `responsive`                | Min height `100vh` and retain height on vertical scroll/resize on mobile           |
| Utility                  | `.xt-max-h-screen`       | `xt-max-h-screen`                | `responsive`                | Max height `100vh` and retain height on vertical scroll/resize on mobile           |

</div>

## Xt.eventDelay

For special events like the `resize` and `scroll` events we use a special wrapper `Xt.eventDelay` that set the delay on which the resize gets triggered. It's useful also if you need to **execute one time** a function **with multiple calls**.

```js
addEventListener('resize', e => {
  Xt.eventDelay({
    e,
    element: document.documentElement,
    func: () => {
      // logic
    },
  })
})

addEventListener('scroll', e => {
  Xt.eventDelay({
    e,
    element: document.documentElement,
    func: () => {
      // logic
    },
  })
})
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Variable                  | `Xt.eventDelay:Function`              | `{ e:Event|Object, el:Node, ns:String = '', duration:Number\|null = null, func:Function\|null = null }`       | event delay wrapper                  |
| Variable                  | `Xt.scrollDelay:Number\|false`              | `false`        | Delay for the `scroll` event with `Xt.eventDelay`                 |
| Variable                  | `Xt.resizeDelay:Number\|false`              | `75`        | Delay for the `resize` event with `Xt.eventDelay`            |
| Variable                  | `Xt.medialoadedDelay:Number\|false`              | `false`        | Delay for the `mediaLoaded` event with `Xt.eventDelay`            |

</div>

You can also manually override with a **custom delay on execution** passing to the **event object** a `detail.delay` value.

For example if you want to override the default delay with an instant one use `detail.delay: 0`.

```js
dispatchEvent(new CustomEvent('resize', { detail: { delay: 0 } }))
```

With `resize`, `Xt.eventDelay` also calls the function **only if the height of the window changes**, to not trigger the resize event on mobile when the address bar hides, and to fix multiple calls on sume browsers when scrolling.

To **force** `resize` event also on **window width change** use `e.detail.force`.

```js
dispatchEvent(new CustomEvent('resize', { detail: { force: true } }))
```

You can **trigger resize events only inside** some **container node**, not possible normally for resize events, just use `e.detail.container`.

```js
dispatchEvent(new CustomEvent('resize', { detail: { container: document.querySelector('.my-container') } }))
```

If you want to listen to it, this example explains the listener with a container check.

```js
const resizeCheck = document.querySelector('.my-element')

const resize = function (e) {
  if (!e?.detail?.container || e.detail.container.contains(resizeCheck)) {
    // logic
  }
}

document.querySelector.addEventListener(resize)
```
