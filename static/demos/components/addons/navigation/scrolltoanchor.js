import { Xt } from 'xtendui'
import 'xtendui/src/addons/scrolltoanchor'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

// you can remove this

import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.CCC-scrolltoanchor .xt-sticky',
  mount: ({ object }) => {
    // sticky

    const sticky = ScrollTrigger.create({
      trigger: object,
      start: 'top top',
      endTrigger: 'html',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
    })

    ScrollTrigger.addEventListener('refresh', () => {
      // @FIX ScrollTrigger pin mount ignore
      sticky.pin.classList.add('xt-ignore')
      requestAnimationFrame(() => {
        sticky.pin.classList.remove('xt-ignore')
      })
    })
  },
})

/**
 * scrolltoanchor
 */

Xt.mount.push({
  matches: '.CCC-scrolltoanchor body',
  mount: ({ object }) => {
    // init

    let self = new Xt.Scrolltoanchor(object, {
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

    const eventChange = () => {
      // scroll
      gsap.killTweensOf(self.scrollElement)
      gsap.to(self.scrollElement, {
        scrollTo: self.position,
        duration: 1,
        ease: 'quart.inOut',
      })
    }

    self.object.addEventListener('change.xt.scrolltoanchor', eventChange)

    // unmount

    return () => {
      self.object.removeEventListener('change.xt.scrolltoanchor', eventChange)
      self.destroy()
      self = null
    }
  },
})
