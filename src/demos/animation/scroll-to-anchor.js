import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/addons/animation/scroll-to-anchor.js'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js'

Xt.mount.push({
  matches: 'a[href*="#"]',
  mount: object => {
    // init

    let self = new Xt.ScrollToAnchor(object, {})

    // change

    const eventChange = e => {
      const distanceY = 0
      const posY = self.target.offsetTop - self.scrollAdd - distanceY
      const durationY = Xt.vars.timeLarge
      gsap.to(window, { scrollTo: posY, duration: durationY, ease: 'penguin' })
    }

    self.object.addEventListener('change.xt.scrolltoanchor', eventChange)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
