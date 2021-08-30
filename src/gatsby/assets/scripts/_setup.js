import { Xt } from 'xtendui'
import 'xtendui/src/usability'
import gsap from 'gsap'

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
