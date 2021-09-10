import { Xt } from 'xtendui'
import 'xtendui/src/overlay'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount({
  matches: '.demo--mount-unmount',
  mount: ({ ref }) => {
    const unmountTest = mountTest({ ref })

    // unmount

    return () => {
      unmountTest()
    }
  },
})

/* mountTest */

const mountTest = ({ ref }) => {
  // mount granularly

  Xt.mount({
    root: ref,
    raf: false,
    matches: '.xt-sticky',
    mount: ({ ref }) => {
      return mountSticky({ ref })
    },
  })

  // unmount

  return () => {}
}

/* mountSticky */

const mountSticky = ({ ref }) => {
  // vars

  const sticky = ref

  // matchmedia

  ScrollTrigger.matchMedia({
    '(max-width: 767px)': () => {
      // sticky

      ScrollTrigger.create({
        trigger: sticky,
        start: 'top top',
        endTrigger: 'html',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
      })
    },
  })
}
