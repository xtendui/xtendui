---
type: "Components"
category: "Interaction"
parent: "Scroll"
title: "Scroll"
description: "Content interactions and animations when you scroll the page, sticky pinned elements, fade elements, parallax."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.scroll` see [preset customization](/components/tailwind-preset#customization). Check [xtendui/src/scroll.css.js](https://github.com/minimit/xtendui/blob/beta/src/scroll.css.js) for default styles.

## Javascript

This component uses [Gsap ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger), follow [gsap setup](/components/setup#javascript-gsap) to **install and use gsap**.

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

## Fixes

- If you **trigger DOM height changes** showing/hiding content or if you are initializing ScrollTrigger inside **inside an element with `display: none`** you need to refresh ScrollTrigger after the elements are visibile on the page.

```js
/*
here your custom code that trigger height change or show/hide elements
*/

// refresh ScrollTrigger DOM
Xt.ready(() => {
  ScrollTrigger.refresh()
})
```

- For proper resize and refresh ScrollTrigger positions, if you are using dynamic values inside `start` and `end` **remember to use functions** for `start: () => ` and `end: () => `. Also `invalidateOnRefresh: true` if you have dynamic values inside animations. See [Scrolltrigger faqs](https://greensock.com/st-mistakes/).

- If you are using **single page app or route update** you have to refresh scrolltrigger on route update.

```js
/* ScrollToPlugin refresh on route update */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.refresh()
```

- If you have strange behaviours on resize and **ScrollTrigger seems not to refresh**, disable ScrollTrigger resize in `autoRefreshEvents` and refresh instead with [Xt.eventDelay](/components/javascript/api#xt-eventdelay) (`Xt.eventDelay` also fixes resize on status bar show/hide on mobile devices).

Just need this code one time in the project.

```js
/* ScrollTrigger fix Xt.mount inside pin items and no refresh on vertical resize */

ScrollTrigger.config({
  // removed resize we trigger it manually
  autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
})

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

- If you are initializing **sticky inside** [Xt.mount](/components/javascript/api#xt-mount) you need to **add and remove `.xt-ignore` on refresh** to prevent **child multiple mount and unmount** because pinned elements are moved by ScrollTrigger.

Just need this code one time in the project.

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

- If you want **ScrollToPlugin to stop animation when user interact with the document scroll**, just use this code.

Just need this code one time in the project.

```js
/* ScrollToPlugin fix stop scroll animation on user interaction */

const stopScrolling = () => {
  gsap.killTweensOf(document.scrollingElement)
}

addEventListener('touchstart', stopScrolling)
addEventListener('wheel', stopScrolling)
```
