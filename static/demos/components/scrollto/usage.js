import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
Xt.registerPlugin({ name: 'ScrollTrigger', plugin: ScrollTrigger })
import 'xtendui/src/scrollto'

Xt.mount({
  matches: '.demo--scrollto',
  mount: ({ ref }) => {
    const unmountSticky = mountSticky({ ref })
    const unmountScrollto = mountScrollto({ ref })

    // unmount

    return () => {
      unmountSticky()
      unmountScrollto()
    }
  },
})

/* mountSticky */

const mountSticky = ({ ref }) => {
  /* sticky for demo purpose remove this */
  // vars

  const sticky = ref.querySelector('.xt-sticky')

  // sticky

  ScrollTrigger.create({
    trigger: sticky,
    start: 'top top',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })

  // unmount

  return () => {}
}

/* mountScrollto */

const mountScrollto = () => {
  // init

  /***/
  let self = new Xt.Scrollto(document.documentElement, {
    hash: true,
  })
  /***/

  // scrollto

  const scrollto = () => {
    // scroll
    gsap.killTweensOf(self.scroller)
    gsap.to(self.scroller, {
      scrollTo: self.position,
      duration: self.duration,
      ease: 'quint.out',
    })
  }

  self.container.addEventListener('scrollto.xt.scrollto', scrollto)

  // fix stop scroll animation on user interaction

  const stopScrolling = () => {
    gsap.killTweensOf(self.scroller)
  }

  addEventListener('touchstart', stopScrolling)
  addEventListener('wheel', stopScrolling)

  // custom

  const buttons = self.container.querySelectorAll('.button--custom')
  const custom = self.container.querySelector('#anchor-custom')

  const click = () => {
    custom.dispatchEvent(new CustomEvent('scrollto.trigger.xt.scrollto'))
  }

  for (const button of buttons) {
    button.addEventListener('click', click)
  }

  // unmount

  return () => {
    removeEventListener('touchstart', stopScrolling)
    removeEventListener('wheel', stopScrolling)
    self.container.removeEventListener('scrollto.xt.scrollto', scrollto)
    self.destroy()
    self = null
  }
}
