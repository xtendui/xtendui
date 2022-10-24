import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}
import 'xtendui/src/overlay'

/* mountTest */

const mountTest = ({ ref }) => {
  // vars

  const sticky = ref.querySelector('.xt-sticky')
  const overlay = ref.querySelector('[data-xt-overlay]')
  const self = Xt.get({ name: 'xt-overlay', el: overlay })

  // init

  const count = parseFloat(ref.getAttribute('data-test-mount') ?? 0) + 1
  ref.setAttribute('data-test-mount', count)
  // eslint-disable-next-line no-console
  console.log(
    'TEST pin mount this should NOT be called on resize and xtNamespace should be 1.',
    Xt.dataStorage.get(self.ns, 'xtNamespace').length
  )

  // resize

  const refresh = () => {
    const count = parseFloat(ref.getAttribute('data-test-refresh') ?? 0) + 1
    ref.setAttribute('data-test-refresh', count)
    // eslint-disable-next-line no-console
    console.log(
      'TEST pin resize this should be called one time on resize and Xt._mountArr should not increase.',
      Xt._mountArr.length
    )
  }

  ScrollTrigger.addEventListener('refresh', refresh)

  // matchmedia

  gsap.matchMedia().add('(max-width: 767px)', () => {
    // sticky

    ScrollTrigger.create({
      trigger: sticky,
      start: 'top top',
      endTrigger: 'html',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
    })
  })

  // unmount

  return () => {
    // eslint-disable-next-line no-console
    console.log(
      'TEST resize and open/close, pin unmount this should NOT be called on resize, xtNamespace should be 1, should be 0 on unmount.',
      Xt.dataStorage.get(self.ns, 'xtNamespace').length
    )
    ScrollTrigger.removeEventListener('refresh', refresh)
  }
}

/* mount */

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
