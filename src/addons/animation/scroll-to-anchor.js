import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js'

Xt.mount.push({
  matches: 'html',
  mount: function(object) {
    // vars

    let scrollCacheY = 0
    let scrollCacheX = 0

    // scroll

    const eventScroll = e => {
      // scroll position to reset automatic browser scroll to id
      scrollCacheX = document.scrollingElement.scrollLeft
      scrollCacheY = document.scrollingElement.scrollTop
    }

    addEventListener('scroll', eventScroll)
    Xt.ready(eventScroll)

    // hashchange

    const eventScrollfix = e => {
      // scroll position to reset automatic browser scroll to id
      document.scrollingElement.scrollTo(scrollCacheX, scrollCacheY)
    }

    const eventHashchange = e => {
      if (location.hash) {
        const target = document.querySelector(location.hash)
        if (target) {
          removeEventListener('scroll', eventScroll)
          addEventListener('scroll', eventScrollfix)
          eventScrollfix()
          // sticky space
          const stickys = document.querySelectorAll('.xt-sticky.xt-clone.active')
          let stickyHeight = 0
          for (const sticky of stickys) {
            stickyHeight += sticky.clientHeight
          }
          // scrollTo
          const posY = target.offsetTop - stickyHeight
          const durationY = Xt.vars.timeLarge
          gsap.to(window, { scrollTo: posY, duration: durationY, ease: 'penguin' }).eventCallback('onComplete', () => {
            addEventListener('scroll', eventScroll)
            removeEventListener('scroll', eventScrollfix)
            eventScroll()
          })
          // stop xt-smooth if present
          const self = Xt.get('xt-smooth', object)
          if (self) {
            self.eventWheelstop()
          }
        }
      }
    }

    addEventListener('hashchange', eventHashchange)
    addEventListener('popstate', eventHashchange) // @FIX when you click multiple times the same hash
    Xt.ready(eventHashchange)

    // unmount

    const unmount = function() {
      removeEventListener('scroll', eventScroll)
      removeEventListener('scroll', eventScrollfix)
      removeEventListener('hashchange', eventHashchange)
      removeEventListener('popstate', eventHashchange)
    }
    return unmount
  },
})
