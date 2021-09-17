import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
Xt.registerPlugin({ name: 'ScrollTrigger', plugin: ScrollTrigger })
import 'xtendui/src/overlay'

Xt.mount({
  matches: '.demo--scrolltrigger-matches',
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
  const overlay = ref.querySelector('[data-xt-overlay]')
  const self = Xt.get({ name: 'xt-overlay', el: overlay })

  // init

  // eslint-disable-next-line no-console
  console.log(
    'TEST PIN MOUNT this should NOT be called on resize and xtNamespace should be 1.',
    Xt.dataStorage.get(self.ns, 'xtNamespace').length
  )

  // resize

  const refresh = () => {
    // eslint-disable-next-line no-console
    console.log(
      'TEST PIN RESIZE this should be called one time on resize and Xt.mountArr should not increase.',
      Xt.mountArr.length
    )
  }

  ScrollTrigger.addEventListener('refresh', refresh)

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

  // unmount

  return () => {
    // eslint-disable-next-line no-console
    console.log(
      'TEST PIN UNMOUNT this should NOT be called on resize and xtNamespace should be 0 on unmount.',
      Xt.dataStorage.get(self.ns, 'xtNamespace').length
    )
    ScrollTrigger.removeEventListener('refresh', refresh)
  }
}
