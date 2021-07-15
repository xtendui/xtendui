---
type: "Components"
category: "Global"
parent: "Javascript"
title: "Javascript"
description: "Javascript utilities and animations usability improvements."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.javascript` see [preset customization](/components/preset#customization). Check [xtendui/src/javascript.css.js](https://github.com/xtendui/xtendui/blob/beta/src/javascript.css.js) for default styles.

## Javascript

Import the **javascript** file with `import { Xt } from 'xtendui'`.

## Usability and Seo

Activate usability logs with `import 'xtendui/src/usability'`. Xtend UI will sends **warning messages with website usability suggestions**.

## Listeners

We always check for `e.target` because **events propagate** and we want to listen to **only events originated in the same target we listen for Xtend UI components**.

Listen to events on a **single Node**.

```js
const node = document.querySelector('.my-node')

const on = e => {
  // check because of event propagation
  if (e.target === node) {
    // logic
  }
}

node.addEventListener('eventname.xt.componentname', on)
```

Listen to events on **multiple Nodes**.

```js
for (const node of document.querySelectorAll('.my-node')) {
  const on = e => {
    // check because of event propagation
    if (e.target === node) {
      // logic
    }
  }

  node.addEventListener('eventname.xt.componentname', on)
}
```

Listen to events on **multiple Nodes** with **events delegation useCapture**.

This method is useful to capture events also if child nodes gets added in future.

```js
const container = document.querySelector('.my-container')

let self = Xt.get({ name: 'xt-componentname', el: container })

const on = e => {
  const tr = e.target
  // check because of event propagation
  if (self.targets.includes(tr)) {
    // logic
  }
}

container.addEventListener('eventname.xt.componentname', on, true)
```

## Xt.ready

You can execute a function on DOM ready.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Function                  | `Xt.ready:Function`              | `func:Function`       | Execute a function on DOM ready                  |

</div>

## Xt.mount

You can add Javascript code as a **vanilla component** with `Xt.mount`.

Mount listens and execute the query with [Mutation Obsever](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver). So the **code gets executed also if the Node is added on the DOM asynchronously**.

You can return a function to execute when **the Node is removed from the DOM**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `matches:Query`                          | `false`        | Query to match for mount            |
| Option                    | `mount:Function`                          | `false`        | Function to execute on mount, returned function will be executed on unmount             |
| Option                    | `ignore:Query|false`                          | `'.xt-ignore'`        | Ignore mount when this query matches closest (ref or parent of ref)             |

</div>

Here's **mount function arguments**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Variable                  | `ref:Node`       | Mounted node                 |
| Variable                  | `obj:Object`       | Mounted object                 |
| Variable                  | `index:Number`       | Mounted index on the same mount                 |

</div>

[[notePrimary]]
| Remember to **use `.xt-ignore` when moving object** to prevent **child multiple mount and unmount**. If you want to automatically remove the `.xt-ignore` class when done use `.xt-ignore.xt-ignore-once`.

```js
Xt.mount({
  matches: '.my-query',
  mount: ({ ref, obj, index }) => {
    // logic

    console.debug('mounted', ref)

    // unmount

    return () => {
      console.debug('unmounted', ref)
    }
  },
})
```

## Xt.on and Xt.off

You can **toggle activations with javascript**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `Xt.on({ el, ns = '', duration = null, raf: true })`                          | Activate node with `.on` `.in` `.out` `.done`             |
| Method                  | `Xt.off({ el, ns = '', duration = null, raf: true })`                          | Dectivate node with `.on` `.in` `.out` `.done`             |

</div>

You can also **assign duration on single nodes** with `data-xt-duration="Milliseconds"` or `data-xt-duration-in="Milliseconds"` and `data-xt-duration-out="Milliseconds"`

Use **tailwind variants** `off:`, `group-off:`, `on:`, `group-on:`, `in:`, `group-in:`, `out:`, `group-out:` to assign animations.

You can use also **css animations**, just add them with **class names** `.on`, `.in`, `.out`, `.done`.

#### Display

To show and hide nodes we use **custom tailwind variants** attached to classes used by the component.

Use `off:hidden out:pointer-events-none` to hide with `display: none;` the node when **not activated or animating**.

Alternatively you can use your own custom style, for example `off:visibility-hidden off:pointer-events-none out:pointer-events-none`.

Use `absolute top-0 left-0 right-0 on:relative` to position the node in absolute mode when **not activated**.

## Xt.get

You can get **self object from DOM element** on Xtend UI components.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `Xt.get({ name, el })`                          | Get **self object** on DOM element for that component name (e.g. `'xt-toggle'`)             |

</div>

For example if you want to **get the drop object** on a particular node.

```js
let self = Xt.get({ name: 'xt-drop', el: document.querySelector('.my-container') })
const container = self.container
```

## Xt.options

You can set **default options** for Xtend UI components, they get **applied after default options and before custom options**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Variable                  | `Xt.options:Object`              | Set default options for that component name (e.g. `'xt-toggle'`)             |

</div>

For example if you want **all drops to have a duration of 500**.

```js
Xt.options['xt-drop'] = {
  duration: 500
}
```

## Xt.innerHeight

You have some utilities for viewport height that **changes only on horizontal resize**, useful to have **mobile viewport height that doesn't resize on vertical scroll**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

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

## Xt.eventDelay

For special events like the `resize` and `scroll` events we use a special wrapper `Xt.eventDelay` that set the delay on which the resize gets triggered. It's useful also if you need to **execute one time** a function **with multiple calls**.

```js
addEventListener('resize', e => {
  Xt.eventDelay({
    event: e,
    element: document.documentElement,
    func: () => {
      // logic
    },
  })
})

addEventListener('scroll', e => {
  Xt.eventDelay({
    event: e,
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
| Function                  | `Xt.eventDelay:Function`              | `{ event, element, func = null, ns = '', duration = null }`       | event delay wrapper                  |
| Variable                  | `Xt.scrollDelay:Number|false`              | `false`        | Delay for the `scroll` event with `Xt.eventDelay`                 |
| Variable                  | `Xt.resizeDelay:Number|false`              | `75`        | Delay for the `resize` event with `Xt.eventDelay`            |
| Variable                  | `Xt.medialoadedDelay:Number|false`              | `false`        | Delay for the `mediaLoaded` event with `Xt.eventDelay`            |

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
