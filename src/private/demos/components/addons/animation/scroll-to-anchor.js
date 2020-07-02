import { Xt } from 'xtend-library/src/xt.js'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/addons/animation/scroll-to-anchor.js'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js'

Xt.mount.push({
  matches: '#iframe--scroll-to-anchor body main', // add your own selector instead of body to contain the code
  mount: object => {
    // init

    const self = new Xt.ScrollToAnchor(object, {
      scrollDistance: () => {
        return 0
      },
    })

    // change

    const eventChange = e => {
      // stop xt-smooth
      const smooth = Xt.get('xt-smooth', self.object)
      if (smooth) {
        smooth.eventWheelstop()
      }
      // scroll
      const scrollSpace = self.options.scrollSpace()
      const scrollDistance = self.options.scrollDistance()
      const posY = self.target.offsetTop - scrollSpace - scrollDistance
      gsap.to(window, { scrollTo: posY, duration: Xt.vars.timeLarge, ease: 'quart.inOut' })
    }

    self.object.addEventListener('change.xt.scrolltoanchor', eventChange)
  },
})
