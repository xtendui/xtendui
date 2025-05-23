---
type: "Components"
category: "Global"
parent: "Global"
title: "Javascript"
date: "2030-05-05"
---

## Javascript

Import the **javascript** file with `import { Xt } from 'xtendui'`.

## Usability

Activate usability logs with `import 'xtendui/src/usability'`. Xtend UI will sends **warning messages with website usability suggestions**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Variable                  | `Xt.usabilityHostnames:Boolean\|String`              | `'127.0.0.1 localhost'`       | Enable usability checks **on hostnames separated by space**                  |
| Variable                  | `Xt.usabilityIgnore:String`              | `'.sf-toolbar, .gm-style'`       | Disable usability checks **inside this query**                  |

</div>

## Xt.ready

You can execute a function on Document.readyState, **by default it listens when document is ready**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Variable                  | `Xt.ready:Function`              | `{ func:Function, state:String = 'interactive complete', raf:Boolean = false }`       | **Execute a function on Document.readyState**, states separated by space, can be `'loading'` `'interactive'` `'complete'`                  |

</div>

## Xt.mount

You can add Javascript code as a **vanilla component** with `Xt.mount`.

Mount listens and execute the query with [Mutation Observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver). So the **code gets executed also if the Node is added on the DOM asynchronously**.

You can return a function to execute when **the Node is removed from the DOM**.

You can also use the class `.xt-ignore` when moving objects **to prevent mount and unmount**.

> `Xt.mount` **doesn't unmount/remount nodes not removed from `html`** (e.g. when moving nodes inside DOM).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `matches:Query`                          | `null`        | Query to match for mount            |
| Option                    | `root:Node`                          | `null`        | Only if added nodes are inside a root node            |
| Option                    | `raf:Boolean`                          | `false`        | Use requestAnimationFrame for mount as with `Xt.ready`            |
| Option                    | `ignoreMount:Query\|false`                          | `'.xt-ignore'`        | Ignore mount on nodes with closest this query.            |
| Option                    | `ignoreUnmount:Query\|false`                          | `'.xt-ignore'`        | Ignore unmount on nodes with closest this query.            |
| Option                    | `mount:Function`                          | `null`        | Function to execute on mount, returned function will be executed on unmount             |

</div>

Here's **mount function arguments**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Variable                  | `ref:Node`       | Mounted node                 |
| Variable                  | `obj:Object`       | Mounted object                 |
| Variable                  | `index:Number`       | Mounted index on the same mount                 |

</div>

```js
Xt.mount({
  matches: '.my-query',
  mount: ({ ref, obj, index }) => {
    // logic

    console.debug('mounted', ref, obj, index)

    // unmount

    return () => {
      console.debug('unmounted', ref)
    }
  },
})
```

## Xt.observe

You can execute Javascript code only when **a container** is inside **inside viewport** with `Xt.observe`.

Observe listens and execute the query with [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver). So it's **executed asynchronously**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `container:Node`                          | `null`        | Resolve the promise only when this node is inside viewport             |
| Option                    | `promise:Promise\|null`                          | `null`        | Promise to resolve when container is inside viewport            |
| Option                    | `func:Function\|null`                          | `null`        | Function to resolve when container is inside viewport             |
| Option                    | `observer:Boolean\|null`                          | `null`        | Force enable or disable intersection observer, by default only if container is **visible** (not `display: none`)            |
| Option                    | `id:String\|null`                          | `null`        | Id for observer removal            |

</div>

And here's a example usage of Intersection Observer that **resolves only one time than disconnects**.

```js
Xt.observe({
  container: el,
  observer: true,
}).then(() => {
  // code to execute when element is inside viewport only 1 time
})
```

And here's a example usage of Intersection Observer that execute code on entering and **leaving the viewport and doesn't disconnect**.

```js
Xt.observe({
  container: el,
  id: 'my-id',
  func: intersecting => {
    if (intersecting) {
      // code to execute when element is inside viewport
    } else {
      // code to execute when element leave viewport
    }
  },
})
```

And here's the example of removing the observe above.

```js
Xt.unobserve({
  container: el,
  id: 'my-id',
})
```

#### Globals

You can change this method and all the components default options of `Xt.observer` and `Xt.observerCheck`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `Xt.observer:Boolean\|null`                          | `null`        | Global force enable or disable intersection observer             |
| Option                    | `Xt.observerCheck:Function`                          | `entry => { return entry.intersectionRatio > 0 }`        | Global intersection observer entry check            |

</div>

## Xt.on and Xt.off

To **show/hide and animate nodes** we use **custom Tailwind CSS variants that react to classes**.

Use `off:hidden out:pointer-events-none` to hide with `display: none;` the node when **not activated or animating**.

Alternatively you can use your own custom style, for example `off:invisible off:pointer-events-none out:pointer-events-none`.

Use `absolute top-0 left-0 right-0 on:relative` to position the node in absolute mode when **not activated**.

You can **toggle activations with javascript**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `Xt.on({ el:Node, ns:String = '', duration:Number\|null = null, raf:Boolean = true, initial:Boolean = false, callback:Function\|null })`                          | Activate node with `.on` `.in` `.out` `.done`, set initial for instant animations             |
| Method                  | `Xt.off({ el:Node, ns:String = '', duration:Number\|null = null, raf:Boolean = true, initial:Boolean = false, callback:Function\|null })`                          | Dectivate node with `.on` `.in` `.out` `.done`, set initial for instant animations             |

</div>

You can also **assign duration on single nodes** with `data-xt-duration="Milliseconds"` or `data-xt-duration-in="Milliseconds"` and `data-xt-duration-out="Milliseconds"`

Use **Tailwind CSS variants** `off:`, `group-off:`, `on:`, `group-on:`, `in:`, `group-in:`, `out:`, `group-out:` to assign animations.

You can use also **css animations**, just add them with **class names** `.on`, `.in`, `.out`, `.done`, `.dir-before` and `.dir-after`.

<demo>
  <demoinline src="demos/components/global/animation">
  </demoinline>
  <demoinline src="demos/components/global/animation-css">
  </demoinline>
  <demoinline src="demos/components/global/animation-js">
  </demoinline>
</demo>

## Xt.get

You can get **self object from DOM node** on Xtend UI components.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `Xt.get({ name:String, el:Node })`                          | Get a promise with **self object** on DOM node for that component name (e.g. `'xt-toggle'`)             |

</div>

For example if you want to **get the drop object** on a particular node.

```js
Xt.get({ name: 'xt-drop', el: document.querySelector('.my-container') }).then(self => {})
```

> The components initialization of `data-xt-` or `Xt.mount` **is ready after document ready**, so if you use react use `useLayoutEffect` hook or `Xt.ready` or `Xt.mount` or `init.xt.` event to access the data after document ready.

## Xt.options

You can set **default options** for all components of the same type, they get **applied after default options and before custom options**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Variable                  | `Xt.options:Object`              | Set default options for that component name (e.g. `'xt-toggle'`)             |

</div>

For example if you want **all drops to have a duration of 500**.

```js
Xt.options['xt-drop'] = {
  duration: 500,
}
```

## Xt.node

You can create **DOM node from string** with this method. The string is automatically sanitized with `Xt.sanitize`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `Xt.node({ str:String, sanitize:Boolean = true })`                          | Create DOM node from string, returns `Node`             |
| Method                  | `Xt.nodes({ str:String, sanitize:Boolean = true })`                          | Create DOM nodes from string, returns `NodeList`             |

</div>

You can **sanitize a html strings** added with `Xt.node` or internally by Xtend UI setting a function as `Xt.sanitizeFnc`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `Xt.sanitizeFnc(str:String)`                          | Sanitize strings, returns `String`             |

</div>

## Xt.visible

You can **check if node is visible with `display`** with this method.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `Xt.visible({ el:Node })`                          | Check if node is visible with `display`, returns `Boolean`             |

</div>

## Xt.script

You can **add external scripts to document** with this method that gets executed immediately.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `Xt.script({ url:String, callback:Function = null, defer:Boolean = true, async:Boolean = true })`                          | Add script to body             |

</div>

## Xt.queryAll

You can **query multiple nodes at once** with this method.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `Xt.queryAll({ els:NodeList|Array, query:String })`                          | Query multiple nodes at once, returns `NodeList`             |

</div>

## Xt.getTranslate

You can get **translate values** with this method.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `Xt.getTranslate({ el:Node })`                          | Get `[x, y]` translate values on a DOM node, returns `Array`             |

</div>

## Xt.innerHeight

You have some utilities for viewport height that **changes only on horizontal resize**, useful to have **mobile viewport height that doesn't resize on vertical scroll**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Variable                  | `Xt.innerHeight:Number`              | Get window height without mobile resize on page scroll              |

</div>

## resize.xt

For `resize` event we use a special event `resize.xt` that gets **triggered only once after a delay**. Also **fixes interaction jumping on mobile devices** because it doesn't trigger on vertical scroll/resize on mobile when viewport width doesn't change and `matchMedia('(hover: none)').matches`.

To force the `resize.xt` event you can dispatch `resize` event with `detail.force = true`.

```js
dispatchEvent(new CustomEvent('resize', { detail: { force: true } }))
```

You can customize the delay of **resize** and **medialoaded** events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Variable                  | `Xt.resizeSkip:Function`              | `() => matchMedia('(hover: none), (pointer: coarse)').matches`        | **Skip trigger `resize.xt`** on **vertical only resize** if this condition is met            |
| Variable                  | `Xt.resizeDelay:Number\|false`              | `200`        | Delay for the `resize.xt` event            |
| Variable                  | `Xt.medialoadedDelay:Number\|false`              | `false`        | Delay for the `mediaLoaded` event            |

</div>

## Globals

If you need to access `Xt` variable in the global `window` use `window.XtSetGlobal` in a `script` tag before the main application or in your testing environment.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Variable                  | `window.XtSetGlobal:Boolean\|String`              | `null`       | Enable `window.Xt` global variable                  |

</div>

## Listeners

Listen to events on a **single Node**.

```js
const node = document.querySelector('.my-node')

const on = e => {
  // logic
}

node.addEventListener('eventname.xt.componentname', on)
```

Listen to events on **multiple Nodes**.

```js
for (const node of document.querySelectorAll('.my-node')) {
  const on = e => {
    // logic
  }

  node.addEventListener('eventname.xt.componentname', on)
}
```

Listen to events on **multiple Nodes** with **events delegation useCapture**.

This method is useful to **capture events also if child nodes gets added in future**.

```js
const container = document.querySelector('.my-container')

Xt.get({ name: 'xt-componentname', el: container }).then(self => {
  const on = e => {
    const tr = e.target
    // useCapture event propagation check
    if (self.targets.includes(tr)) {
      // logic
    }
  }

  self.container.addEventListener('eventname.xt.componentname', on, true) // useCapture event propagation
})
```
