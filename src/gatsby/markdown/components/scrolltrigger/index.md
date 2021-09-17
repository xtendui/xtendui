---
type: "Components"
category: "Scroll"
parent: "Scrolltrigger"
title: "Scrolltrigger"
description: "Scrolltrigger component contains interactions for all sort of interaction on page scroll."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.scroll` see [css customization](/components/global/preset#customization). Check [xtendui/src/scrolltrigger.css.js](https://github.com/xtendui/xtendui/blob/beta/src/scrolltrigger.css.js) for default styles.

## Javascript

This demos use [Gsap ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger), follow [gsap setup](/intro/setup#javascript-gsap) to **install and use gsap**.

## Usage

Examples to do **fade animations on page scroll**. See [fade](/components/scrolltrigger/fade) for more info.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrolltrigger/fade"></div>
</demo>

Examples to do **sticky animations on page scroll**. See [sticky](/components/scrolltrigger/sticky) for more info.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrolltrigger/sticky"></div>
</demo>

Examples to do **parallax animations on page scroll**. See [parallax](/components/scrolltrigger/parallax) for more info.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrolltrigger/parallax"></div>
</demo>

## Fixes

- As in all the demos, if you use **ScrollTrigger** with `pin: true` and you have inside `data-xt-` components or [Xt.mount](/components/global/javascript#xt-mount), to fix infinite mount/unmount loop you need to register ScrollTrigger plugin with `Xt.registerPlugin({ name: 'ScrollTrigger', plugin: ScrollTrigger })`.

> Be sure to `registerPlugin` **before any other Xtendui javascript imports** or the order of execution of initialization can mismatch mount/unmount on pinned nodes.

```js
import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
Xt.registerPlugin({ name: 'ScrollTrigger', plugin: ScrollTrigger })
```

- If you **trigger DOM height changes** showing/hiding content or if you are initializing ScrollTrigger inside **inside an element with `display: none`** you need to refresh ScrollTrigger after the elements are visibile on the page.

```js
/*
here your custom code that trigger height change or show/hide elements
*/

// refresh ScrollTrigger DOM
ScrollTrigger.refresh()
```

- For proper resize and refresh ScrollTrigger positions, if you are using dynamic values inside `start` and `end` **remember to use functions** for `start: () => ` and `end: () => `. Also `invalidateOnRefresh: true` if you have dynamic values inside animations. See [Scrolltrigger faqs](https://greensock.com/st-mistakes/).
