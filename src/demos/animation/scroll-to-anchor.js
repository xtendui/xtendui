import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js'

Xt.mount.push({
  matches: 'a[href*="#"]',
  mount: function(object) {
    // click

    const eventClick = e => {
      const loc = new URL(object.getAttribute('href'), location)
      if (loc.hash && loc.pathname === location.pathname) {
        const target = document.querySelector(object.hash)
        if (target) {
          // prevent location.hash
          e.preventDefault()
          // no location.hash or page scrolls
          history.pushState({}, '', loc.hash)
          // stop xt-smooth if present
          const self = Xt.get('xt-smooth', document)
          if (self) {
            self.eventWheelstop()
          }
          // sticky space
          const stickys = document.querySelectorAll('.xt-sticky.xt-clone.active')
          let stickyHeight = 0
          for (const sticky of stickys) {
            stickyHeight += sticky.clientHeight
          }
          // scrollTo
          const distanceY = 0
          const posY = target.offsetTop - stickyHeight - distanceY
          const durationY = Xt.vars.timeLarge
          gsap.to(window, { scrollTo: posY, duration: durationY, ease: 'penguin' })
        }
      }
    }

    object.addEventListener('click', eventClick)
  },
})
