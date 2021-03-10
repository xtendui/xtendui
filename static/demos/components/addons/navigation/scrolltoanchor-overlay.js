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

    const overlay = document.querySelector('#demo--overlay-scrolltoanchor')

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
    // init

    let self = new Xt.Scrolltoanchor(object, {
      scrollSpace: () => {
        return object.querySelector('.xt-sticky').clientHeight
      },
    })

    // change

    const eventChange = function () {
      const selfChange = this
      // val
      let pos = selfChange.position - selfChange.scrollSpace - selfChange.scrollDistance
      const min = 0
      const max = selfChange.scrollElement.scrollHeight - selfChange.scrollElement.clientHeight
      pos = pos < min ? min : pos
      pos = pos > max ? max : pos
      // scroll
      gsap.killTweensOf(selfChange.scrollElement)
      gsap.to(selfChange.scrollElement, {
        scrollTo: pos,
        duration: 1,
        ease: 'quart.inOut',
      })
    }

    self.object.addEventListener('change.xt.scrolltoanchor', eventChange.bind(self))

    // init overlays

    const selfsOverlay = []
    const overlays = document.querySelectorAll('.xt-overlay')

    for (const overlay of overlays) {
      // init

      let selfOverlay = new Xt.Scrolltoanchor(overlay, {
        scrollElements: [overlay],
        preventHash: true,
        scrollSpace: () => {
          return overlay.querySelector('.xt-sticky').clientHeight
        },
      })

      selfsOverlay.push(selfOverlay)

      // refresh

      overlay.addEventListener('on.xt.overlay', () => {
        overlay.dispatchEvent(new CustomEvent('scroll.trigger.xt.scrolltoanchor'))
      })

      // eventChange

      selfOverlay.object.addEventListener('change.xt.scrolltoanchor', eventChange.bind(selfOverlay))
    }

    // unmount

    return () => {
      self.object.removeEventListener('change.xt.scrolltoanchor', eventChange)
      self.destroy()
      self = null
      for (let selfOverlay of selfsOverlay) {
        selfOverlay.object.removeEventListener('change.xt.scrolltoanchor', eventChange.bind(selfOverlay))
        selfOverlay.destroy()
        selfOverlay = null
      }
    }
  },
})
