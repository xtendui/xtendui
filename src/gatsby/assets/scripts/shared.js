import { Xt } from 'xtendui'
import 'xtendui/build/xtend-core'
import 'xtendui/build/xtend-addons'
import 'xtendui/build/xtend-future'
import 'xtendui/build/xtend-demos'
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

/**
 * favicon
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
