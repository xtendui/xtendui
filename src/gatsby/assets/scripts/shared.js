import { Xt } from 'xtendui'
import 'xtendui/build/xtend-core'
import 'xtendui/build/xtend-addons'
import 'xtendui/build/xtend-future'
//import 'xtendui/build/xtend-demos'
import gsap from 'gsap'
gsap.config({ force3D: false }) // smoother pixels animations

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

/**
 * favicon dark
 */

const changeMq = () => {
  const colorSchemeMq = matchMedia('(prefers-color-scheme: dark)')
  const favicon = document.querySelector('link[rel="icon"]')
  if (favicon) {
    favicon.remove()
  }
  if (colorSchemeMq.matches) {
    const icon = Xt.createElement('<link rel="icon" href="/favicon-dark.png">')
    document.head.append(icon)
  } else {
    const icon = Xt.createElement('<link rel="icon" href="/favicon.png">')
    document.head.append(icon)
  }
}

changeMq()
