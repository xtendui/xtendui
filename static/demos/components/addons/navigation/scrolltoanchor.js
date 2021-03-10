import { Xt } from 'xtendui'
import 'xtendui/src/addons/scrolltoanchor'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

// you can remove this

import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '#iframe--scrolltoanchor .xt-sticky',
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
  matches: '#iframe--scrolltoanchor body',
  mount: ({ object }) => {
    // init

    let self = new Xt.Scrolltoanchor(object, {
      scrollSpace: () => {
        return object.querySelector('.xt-sticky').clientHeight
      },
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
