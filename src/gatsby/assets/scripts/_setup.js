import { Xt } from 'xtendui'
import 'xtendui/src/usability'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/* animation */

gsap.config({ force3D: false }) // smoother pixels animations

// accessibility

if (matchMedia('(prefers-reduced-motion: reduce), (update: slow)').matches) {
  // instant animations
  gsap.globalTimeline.timeScale(1000)
  // instant interactions
  Xt.durationTimescale = 1000
  // double auto time
  Xt.autoTimescale = 0.5
}

/* ScrollToPlugin fix stop scroll animation on user interaction */

const stopScrolling = () => {
  gsap.killTweensOf(document.scrollingElement)
}

addEventListener('touchstart', stopScrolling)
addEventListener('wheel', stopScrolling)

/* ScrollTrigger fix Xt.mount inside pin items and no refresh on vertical resize */

Xt.ready({
  func: () => {
    ScrollTrigger.config({
      // removed resize we trigger it manually
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    })
    addEventListener('resize', e => {
      Xt.eventDelay({
        event: e,
        ns: 'xtScrollTriggerRefresh',
        func: () => {
          ScrollTrigger.refresh()
        },
      })
    })
  },
})
