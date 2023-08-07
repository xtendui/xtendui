import { Xt } from 'xtendui'
import 'xtendui/src/usability'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

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

/* ScrollTrigger refresh fix */

Xt.scrolltriggerRerfreshFix({ ScrollTrigger })
