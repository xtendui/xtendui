---
type: "Components"
category: "Globals"
parent: "Javascript"
title: "Javascript"
description: "Javascript utilities and animations usability improvements."
---

## Installation

Import the **component javascript** file.

```jsx
import { Xt } from 'xtendui'
```

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/layout.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/javascript.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      javascript: {
        component: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Animation

This library uses [gsap](https://github.com/greensock/GSAP) for javascript animations.

You can **opt out** some animations behaviour:

* **Flash of Unstyled Content (FOUC)**: Xtend UI **automatically disables page load duration** for animation and transition until javascript is loaded, add `body.no-js-fouc` to disable this behaviour.

* **Initial component animations**: Xtend UI **automatically disables duration** for animation and transition on `initial` class used in components init and reinit, add `body.no-js-initial` to disable this behaviour.

* **Prefers Reduced Motion**: Xtend UI **automatically disables duration** for animation and transition when the the user has activated "Prefers Reduced Motion" (needs also [gsap setup](/introduction/getting-started/setup#javascript)), add `body.no-js-prm` to disable this behaviour, also set this variables `Xt.durationTimescale = 1` and `Xt.autoTimescale = 1`.

* **Global Duration Timescale**: Xtend UI have an option to **change javascript durations timescales**, for example set this variables `Xt.durationTimescale = 1.5` to have faster animations by an half.

* **Global Auto Timescale**: Xtend UI have an option to **change javascript auto duration timescales**, for example set this variables `Xt.autoTimescale = 0.5` to have double time on component auto changes.

An **example setup** for accessibility and faster animation on mobile, used in this docs and demos is this:

```js
import gsap from 'gsap'

/**
 * animations setup
 */

gsap.config({ force3D: false })

if (Xt.durationTimescale === 1000) {
  // instant animations accessibility
  gsap.globalTimeline.timeScale(1000)
  // double auto time accessibility
  Xt.autoTimescale = 0.5
}

const animationResponsive = () => {
  // faster javascript animations on small screens
  if (Xt.durationTimescale !== 1000) {
    if (matchMedia('(max-width: 767px)').matches) {
      gsap.globalTimeline.timeScale(1.5)
      Xt.durationTimescale = 1.5
    } else {
      gsap.globalTimeline.timeScale(1)
      Xt.durationTimescale = 1
    }
  }
}
addEventListener('resize', animationResponsive)
animationResponsive()
```

## Utilities
#### Xt.debug

Xtend sends debug messages on `console.debug`, you can find them activating the **verbose console log**.

Set `NODE_ENV=development` to have **Xt.debug activated**. On Linux and mac globally with `export NODE_ENV = development`, on windows globally with `Add-Content -Path $Profile.CurrentUserAllHosts -Value '$Env:NODE_ENV = "development"'`.
#### Xt.ready

You can execute a function on DOM ready.

<div class="table-overflow">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Variable                  | `Xt.ready:Function`              | Execute a function on DOM ready              |

</div>

Or also have css respond to DOM ready with the selector `body.xt-ready`.

#### Xt.mount

You can add Javascript code as a **vanilla component** with `Xt.mount`.

To execute javascript code we use `Xt.mount` for two important reasons:

* Mount listens and execute the query with [Mutation Obsever](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver). So the **code gets executed also if the Node is added on the DOM asynchronously**.

* It create a **anonymous functions to encapsulate code** so **each block is self contained** and it behaves as a sort of **component for Vanilla Html and Js components**.

<div class="table-overflow">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Variable                  | `Xt.mount:Array`              | Array of **mount objects**              |
| Variable                  | `{ matches:String, mount:Function }`       | Example **mount object**                 |
| Variable                  | `{ object:Node, mount:Function, index:Number, matches:String }`       | Example **mount callback**                 |

</div>

Here's an example of **mounting a query component**, the **return function to unmount** is executed on DOM removal of the query nodes.

```js
Xt.mount.push({
  matches: '.my-query',
  mount: ({ object, mount, index, matches }) => {
    // logic

    console.debug('mounted', object)

    // unmount

    return () => {
      console.debug('unmounted', object)
    }
  },
})
```

By using `requestAnimationFrame` and `cancelAnimationFrame` you can **execute multiple object mounts** that happends at the same frame.

```js
Xt.mount.push({
  matches: '.my-query',
  mount: ({ object, mount, index, matches }) => {
    // multiple mount object with raf

    mount.objects = mount.objects ? mount.objects : []
    mount.objects.push(object)
    cancelAnimationFrame(mount.raf)
    mount.raf = requestAnimationFrame(() => {
      // reset mount object

      const objects = mount.objects
      mount.objects = []

      // logic

      console.debug(objects)
    })
  },
})
```

#### Viewport height

You have some utilities for viewport height that **changes only on horizontal resize**, useful to have **mobile viewport height that doesn't resize on vertical scroll**.

<div class="table-overflow">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Variable                  | `Xt.innerHeight:Number`              | Get window height without mobile resize on page scroll              |

</div>

Or also use css variables for viewport height `--vh`.

```css
.my-selector {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}
```

## Event Delay

For special events like the `resize` and `scroll` events we use a special wrapper `Xt.eventDelay` that set the delay on which the resize gets triggered. It's useful also if you need to **execute one time** a function **with multiple calls**.

```js
addEventListener('resize', e => {
  Xt.eventDelay({ event: e, element: document.documentElement, func: () => {
    // logic
  })
})

addEventListener('scroll', e => {
  Xt.eventDelay({ event: e, element: document.documentElement, func: () => {
    // logic
  })
})
```

<div class="table-overflow">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Function                  | `Xt.eventDelay:Function`              | `event:Event, element:Node, function:Function, prefix:String = '', instant:Boolean = false`       | event delay wrapper                  |
| Variable                  | `Xt.scrollDelay:Number|Boolean`              | `false`        | Delay for the `scroll` event with `Xt.eventDelay`                 |
| Variable                  | `Xt.resizeDelay:Number|Boolean`              | `250`        | Delay for the `resize` event with `Xt.eventDelay`            |
| Variable                  | `Xt.medialoadedDelay:Number|Boolean`              | `false`        | Delay for the `mediaLoaded` event with `Xt.eventDelay`            |

</div>

You can also manually override with a **custom delay on execution** passing to the **event object** a `detail.delay` value.

For example if you want to override the default delay with an instant one use `detail.delay: 0`.

```js
dispatchEvent(new CustomEvent('resize', { detail: { delay: 0 } }))
```

#### Resize Force

With `resize`, `Xt.eventDelay` also calls the function **only if the height of the window changes**, to not trigger the resize event on mobile when the address bar hides, and to fix multiple calls on sume browsers when scrolling.

To **force** `resize` event also on **window width change** use `e.detail.force`:

```js
dispatchEvent(new CustomEvent('resize', { detail: { force: true } }))
```

#### Resize Container

You can **trigger resize events only inside** some **container node**, not possible normally for resize events, just use `e.detail.container`.

```js
dispatchEvent(new CustomEvent('resize', { detail: { container: document.querySelector('.my-container') } }))
```

If you want to listen to it, this example explains the listener with a container check.

```js
const checkResize = document.querySelector('.my-element')
const eventResize = function (e) {
  if (!e || !e.detail || !e.detail.container || e.detail.container.contains(checkResize)) {
    // logic
  }
}
document.querySelector.addEventListener(eventResize)
```
