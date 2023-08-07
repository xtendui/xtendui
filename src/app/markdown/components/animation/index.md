---
type: "Components"
category: "Animation"
parent: "Animation"
title: "Animation"
description: "Animation is a component with animation setup and utils."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.animation` see [css customization](/components/global/preset#customization). Check [xtendui/src/animation.css.js](https://github.com/xtendui/xtendui/blob/master/src/animation.css.js) for default styles.

## Global Styles

Add to the `body` the class `xt-body` to have this features:

* **Prefers Reduced Motion**, **automatically disables duration** for css animation and transition when the the user has activated "Prefers Reduced Motion". You can disable this feature with `xt-optout-prm` and keep others `xt-body` features.

* **Initial component animations**, **automatically disables duration** for animation and transition on `initial` class used in components init and reinit. You can disable this feature with `xt-optout-initial` and keep others `xt-body` features.

## Setup

* **If you want custom easing** in gsap use this code with your custom easing.

```js
import gsap from 'gsap'

/* custom easing */

import bezierEasing from 'bezier-easing'

gsap.registerEase('in', progress => {
  const easing = bezierEasing(1, 0, 1, 0.5)
  return easing(progress)
})

gsap.registerEase('out', progress => {
  const easing = bezierEasing(0, 1, 0.5, 1)
  return easing(progress)
})

gsap.registerEase('inOut', progress => {
  const easing = bezierEasing(1, 0, 0, 1)
  return easing(progress)
})
```

* **Prefers Reduced Motion**, **can set up instant gsap animation and instant interactivity, and increase automatic time** when the the user has activated "Prefers Reduced Motion", use this script.

```js
import { Xt } from 'xtendui'
import gsap from 'gsap'

/* animation */

// accessibility

if (gsap.matchMedia('(prefers-reduced-motion: reduce), (update: slow)').matches) {
  // instant animations
  gsap.globalTimeline.timeScale(1000)
  // instant interactions
  Xt.durationTimescale = 1000
  // double auto time
  Xt.autoTimescale = 0.5
}
```

* **Global Duration Timescale**, **change javascript durations timescales**, for example set this variables `Xt.durationTimescale = 1.5` to have faster animations by an half.

* **Global Auto Timescale**, **change javascript auto duration timescales**, for example set this variables `Xt.autoTimescale = 0.5` to have double time on component auto changes.

You can play with gsap and Xtend UI settings, an **example setup** for for faster animation on mobile.

```js
import { Xt } from 'xtendui'
import gsap from 'gsap'

/* animation */

// faster on mobile

const animationResponsive = () => {
  // faster javascript animations on small screens
  if (Xt.durationTimescale !== 1000) {
    if (gsap.matchMedia('(max-width: 767px)').matches) {
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
