import { Xt } from 'xtendui'
import 'xtendui/src/scrolltoanchor'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount({
  matches: '.demo--scrolltoanchor',
  mount: ({ ref }) => {
    const unmountScrolltoanchor = mountScrolltoanchor()
    const unmountSticky = mountSticky({ ref })

    // unmount

    return () => {
      unmountScrolltoanchor()
      unmountSticky()
    }
  },
})

/* mountScrolltoanchor */

const mountScrolltoanchor = () => {
  // Scrolltoanchor

  let self = new Xt.Scrolltoanchor(document.documentElement, {
    hash: true,
    scrollSpace: ({ self }) => {
      let space = 0
      const spaceEls = self.scrollElement.querySelectorAll('.xt-sticky[style*="position: fixed"]')
      for (const spaceEl of spaceEls) {
        space += spaceEl.clientHeight
      }
      return space
    },
  })

  // change

  const change = () => {
    // scroll
    gsap.killTweensOf(self.scrollElement)
    gsap.to(self.scrollElement, {
      scrollTo: self.position,
      duration: 1,
      ease: 'quart.inOut',
    })
  }

  self.object.addEventListener('change.xt.scrolltoanchor', change)

  // unmount

  return () => {
    self.object.removeEventListener('change.xt.scrolltoanchor', change)
    self.destroy()
    self = null
  }
}

/* mountSticky */

const mountSticky = ({ ref }) => {
  ScrollTrigger.create({
    trigger: ref.querySelector('.xt-sticky'),
    start: 'top top',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })

  // unmount

  return () => {}
}
