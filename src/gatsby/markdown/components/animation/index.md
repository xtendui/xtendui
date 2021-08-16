---
type: "Components"
category: "Animation"
parent: "Animation"
title: "Animation"
description: "Animation is a component with animation setup and utils."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.animation` see [css customization](/components/global/preset#customization). Check [xtendui/src/animation.css.js](https://github.com/xtendui/xtendui/blob/beta/src/animation.css.js) for default styles.

## Global Styles

Add to the `body` the class `xt-body` to have this features:

* **Prefers Reduced Motion**, **automatically disables duration** for css animation and transition when the the user has activated "Prefers Reduced Motion". You can disable this feature with `xt-optout-prm` and keep others `xt-body` features.

* **Initial component animations**, **automatically disables duration** for animation and transition on `initial` class used in components init and reinit. You can disable this feature with `xt-optout-initial` and keep others `xt-body` features.

## Setup

* Set gsap `force3D: false` for smoother pixels animations.

```js
import gsap from 'gsap'

/* animation */

gsap.config({ force3D: false }) // smoother pixels animations
```

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

if (matchMedia('(prefers-reduced-motion: reduce), (update: slow)').matches) {
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

## Transition Delay

Added additional [transition-delay](https://tailwindcss.com/docs/transition-delay) `delay-0`.

## Transition Duration

Added additional [transition-duration](https://tailwindcss.com/docs/transition-duration) `duration-0`.

Default `transitionDuration` changed to `500ms`, all [transition properties](https://tailwindcss.com/docs/transition-property) now have this duration.

If you want to change the values or **restore tailwind defaults**, use this code inside `tailwind.config.js` setting `theme.extend.transitionDuration`.

```js
theme: {
  extend: {
    transitionDuration: {
      DEFAULT: '150ms',
    },
  },
},
```

## Timing Function

Default `transitionTimingFunction`, `ease-in`, `ease-out`, `ease-in-out` changed, all [transition properties](https://tailwindcss.com/docs/transition-property) now have this easing.

If you want to change the values or **restore tailwind defaults**, use this code inside `tailwind.config.js` setting `theme.extend.transitionDuration`.

```js
theme: {
  extend: {
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
},
```

Added additional easing for [tailwind timing functions](https://tailwindcss.com/docs/transition-timing-function).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.ease-in-sine`                     | `ease-in-sine`                | Ease in            |
| Component                  | `.ease-out-sine`                     | `ease-out-sine`                | Ease out            |
| Component                  | `.ease-in-out-sine`                     | `ease-in-out-sine`                | Ease in out            |
| Component                  | `.ease-in-quad`                     | `ease-in-quad`                | Ease in            |
| Component                  | `.ease-out-quad`                     | `ease-out-quad`                | Ease out            |
| Component                  | `.ease-in-out-quad`                     | `ease-in-out-quad`                | Ease in out            |
| Component                  | `.ease-in-cubic`                     | `ease-in-cubic`                | Ease in            |
| Component                  | `.ease-out-cubic`                     | `ease-out-cubic`                | Ease out            |
| Component                  | `.ease-in-out-cubic`                     | `ease-in-out-cubic`                | Ease in out            |
| Component                  | `.ease-in-quart`                     | `ease-in-quart`                | Ease in            |
| Component                  | `.ease-out-quart`                     | `ease-out-quart`                | Ease out            |
| Component                  | `.ease-in-out-quart`                     | `ease-in-out-quart`                | Ease in out            |
| Component                  | `.ease-in-quint`                     | `ease-in-quint`                | Ease in            |
| Component                  | `.ease-out-quint`                     | `ease-out-quint`                | Ease out            |
| Component                  | `.ease-in-out-quint`                     | `ease-in-out-quint`                | Ease in out            |
| Component                  | `.ease-in-expo`                     | `ease-in-expo`                | Ease in            |
| Component                  | `.ease-out-expo`                     | `ease-out-expo`                | Ease out            |
| Component                  | `.ease-in-out-expo`                     | `ease-in-out-expo`                | Ease in out            |
| Component                  | `.ease-in-circ`                     | `ease-in-circ`                | Ease in            |
| Component                  | `.ease-out-circ`                     | `ease-out-circ`                | Ease out            |
| Component                  | `.ease-in-out-circ`                     | `ease-in-out-circ`                | Ease in out            |
| Component                  | `.ease-in-back`                     | `ease-in-back`                | Ease in            |
| Component                  | `.ease-out-back`                     | `ease-out-back`                | Ease out            |
| Component                  | `.ease-in-out-back`                     | `ease-in-out-back`                | Ease in out            |

</div>

## Animation and Keyframes

We add in theme also additional keyframes on [tailwind animation](https://tailwindcss.com/docs/animation).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.animate-xt-spinner`                     | `animate-xt-spinner`                | Animation spinner            |
| Component                  | `.animate-xt-filler-x`                     | `animate-xt-filler-x`                | Animation xt-filler-x            |
| Component                  | `.animate-xt-filler-y`                     | `animate-xt-filler-y`                | Animation xt-filler-y            |

</div>

You can also use them inside css animation-

```css
animation: 'xt-spinner 1500ms infinite',
animation: 'xt-filler-x 1500ms infinite',
animation: 'xt-filler-y 1500ms infinite',
```
