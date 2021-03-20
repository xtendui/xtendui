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
  matches: '.CCC-scrolltoanchor-overlay .xt-sticky',
  mount: ({ object }) => {
    // vars

    const overlay = object.closest('.xt-overlay')

    // sticky

    const initSticky = () => {
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
    }

    if (overlay) {
      overlay.addEventListener('on.xt.overlay', () => {
        initSticky()
      })
    } else {
      initSticky()
    }
  },
})

/**
 * scrolltoanchor
 */

Xt.mount.push({
  matches: '.CCC-scrolltoanchor-overlay body',
  mount: ({ object }) => {
    // init

    let self = new Xt.Scrolltoanchor(object, {
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
      const overlay = self.target.closest('.xt-overlay')
      const duration = overlay && !overlay.classList.contains('active') ? 0 : 1
      gsap.killTweensOf(self.scrollElement)
      gsap.to(self.scrollElement, {
        scrollTo: self.position,
        duration: duration,
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
