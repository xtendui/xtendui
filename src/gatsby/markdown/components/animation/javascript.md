---
type: "Components"
category: "Global"
parent: "Animation"
title: "Javascript"
date: "2050-10-10"
---

## Settings

This library uses [gsap](https://github.com/greensock/GSAP) for javascript animations.

```js
import gsap from 'gsap'
gsap.config({ force3D: false }) // smoother pixels animations
```

You can **opt out** some animations behaviour:

* **Flash of Unstyled Content (FOUC)**: Xtend UI **automatically disables page load duration** for animation and transition until javascript is loaded, add `body.xt-nojs-fouc` to disable this behaviour.

* **Initial component animations**: Xtend UI **automatically disables duration** for animation and transition on `initial` class used in components init and reinit, add `body.xt-nojs-initial` to disable this behaviour.

* **Prefers Reduced Motion**: Xtend UI **automatically disables duration** for css animation and transition when the the user has activated "Prefers Reduced Motion", add `body.xt-nojs-prm` to disable this behaviour.

* **Prefers Reduced Motion**: Xtend UI **can set up instant gsap animation and instant interactivity, and increase automatic time** when the the user has activated "Prefers Reduced Motion", use this script:

```js
/**
 * animation
 */

// accessibility

if (matchMedia('(prefers-reduced-motion: reduce), (update: slow)').matches) {
  // instant animations
  gsap.globalTimeline.timeScale(1000)
  // instant interactions
  Xt.durationTimescale = 1000
  // double auto time
  Xt.autoTimescale = 0.5
}
```

* **Global Duration Timescale**: Xtend UI have an option to **change javascript durations timescales**, for example set this variables `Xt.durationTimescale = 1.5` to have faster animations by an half.

* **Global Auto Timescale**: Xtend UI have an option to **change javascript auto duration timescales**, for example set this variables `Xt.autoTimescale = 0.5` to have double time on component auto changes.

You can play gsap and XtendUI settings, an **example setup** for for faster animation on mobile.

```js
/**
 * animation
 */

// faster on mobile

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
