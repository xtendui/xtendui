import { Xt } from 'xtendui'
import 'xtendui/src/addons/scrolltoanchor'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

// you can remove this

import 'xtendui/src/core/overlay'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '#iframe--scrolltoanchor-overlay .xt-sticky',
  mount: ({ object }) => {
    // vars

    const overlay = document.querySelector('#demo--overlay-scrolltoanchor')

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

    // refresh

    overlay.addEventListener('on.xt.overlay', () => {
      ScrollTrigger.refresh()
    })
  },
})

/**
 * scrolltoanchor
 */

Xt.mount.push({
  matches: '#iframe--scrolltoanchor-overlay body',
  mount: ({ object }) => {
    // vars

    const overlay = document.querySelector('#demo--overlay-scrolltoanchor')

    // init

    let self = new Xt.Scrolltoanchor(object, {
      scrollElements: [overlay],
      scrollSpace: () => {
        return object.querySelector('.xt-sticky').clientHeight
      },
    })

    // refresh

    overlay.addEventListener('on.xt.overlay', () => {
      overlay.dispatchEvent(new CustomEvent('scroll.trigger.xt.scrolltoanchor'))
    })

    // change

    const eventChange = () => {
      // val
      let pos = self.position - self.scrollSpace - self.scrollDistance
      const min = 0
      const max = self.scrollElement.scrollHeight - self.scrollElement.clientHeight
      pos = pos < min ? min : pos
      pos = pos > max ? max : pos
      // scroll
      gsap.killTweensOf(self.scrollElement)
      gsap.to(self.scrollElement, {
        scrollTo: pos,
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
