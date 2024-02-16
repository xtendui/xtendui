import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}
import 'xtendui/src/overlay'

Xt.mount({
  matches: '.demo--scrolltrigger-matches',
  mount: ({ ref }) => {
    // vars

    const sticky = ref.querySelector('.xt-sticky')
    const overlay = ref.querySelector('[data-xt-overlay]')

    let selfDestroy = () => {}
    Xt.get({ name: 'xt-overlay', el: overlay }).then(self => {
      // init

      const count = parseFloat(ref.getAttribute('data-test-mount') ?? 0) + 1
      ref.setAttribute('data-test-mount', count)
      // eslint-disable-next-line no-console
      console.log(
        'TEST pin mount this should NOT be called on resize and xtNamespace should be 1.',
        Xt.dataStorage.get(document.documentElement, `xtNamespace${self.ns}`).length,
      )

      // resize

      const refresh = () => {
        const count = parseFloat(ref.getAttribute('data-test-refresh') ?? 0) + 1
        ref.setAttribute('data-test-refresh', count)
        // eslint-disable-next-line no-console
        console.log(
          'TEST pin resize this should be called one time on resize and Xt._mountArr should not increase.',
          Xt._mountArr.length,
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

      // destroy

      selfDestroy = () => {
        // eslint-disable-next-line no-console
        console.log(
          'TEST resize and open/close, pin unmount this should NOT be called on resize, xtNamespace should be 1, should be 0 on unmount.',
          Xt.dataStorage.get(document.documentElement, `xtNamespace${self.ns}`).length,
        )
        ScrollTrigger.removeEventListener('refresh', refresh)
      }
    })

    // unmount

    return () => {
      selfDestroy()
    }
  },
})
