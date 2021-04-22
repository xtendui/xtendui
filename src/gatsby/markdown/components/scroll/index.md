---
type: "Components"
category: "Interaction"
parent: "Scroll"
title: "Scroll"
description: "Content interactions and animations when you scroll the page, sticky pinned elements, fade elements, parallax."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.scroll`.

Check [xtendui/src/scroll.css.js](https://github.com/minimit/xtendui/blob/beta/src/scroll.css.js) for default styles.

## Javascript

This component uses [Gsap ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger), follow [gsap setup](/introduction/setup#javascript-gsap) to **install and use gsap**.

## Usage

Use this code to create a **fade**.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/fade"></div>
</demo>

Use this code to create a **sticky**.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/sticky"></div>
</demo>

Use this code to create a **parallax**.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/parallax"></div>
</demo>

Check subpage to [scroll fade](/components/scroll/fade) and [scroll sticky](/components/scroll/sticky) and [scroll parallax](/components/scroll/parallax).

## Fixes

- If you **trigger DOM height changes** showing/hiding content you need to refresh ScrollTrigger this way.

```js
// refresh ScrollTrigger DOM height changes
ScrollTrigger.refresh(true)
```

- If you are initializing ScrollTrigger inside **inside an element with** `display: none` (e.g.: [overlay](/components/overlay)) you need to refresh ScrollTrigger to recalculate positions.

```js
const overlay = document.querySelector('#my-overlay')

overlay.addEventListener('on.xt.overlay', () => {
  ScrollTrigger.refresh()
})
```

- If you have strange behaviours on resize, you can force ScrollTrigger to refresh on resize with [Xt.eventDelay](/components/javascript#xt-eventdelay).

```js
/* ScrollTrigger fix resize pin items */

addEventListener('resize', e => {
  Xt.eventDelay({
    event: e,
    prefix: 'xtScrollTriggerRefresh',
    func: () => {
      ScrollTrigger.refresh()
    },
  })
})
```

- If you are initializing **sticky inside** [Xt.mount](/introduction/javascript#xt-mount) you need to **add and remove `.xt-ignore` on refresh** to prevent **child multiple mount and unmount** because pinned elements are moved by ScrollTrigger.

```js
/* ScrollTrigger fix pin items with Xt.mount */

ScrollTrigger.addEventListener('refresh', () => {
  const stickys = document.querySelectorAll('.xt-sticky')
  for (const sticky of stickys) {
    sticky.classList.add('xt-ignore')
  }
  requestAnimationFrame(() => {
    for (const sticky of stickys) {
      sticky.classList.remove('xt-ignore')
    }
  })
})
```
