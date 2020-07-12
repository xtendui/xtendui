import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/addons/animation/scroll-to-anchor.js'
import gsap from 'gsap'
import 'gsap/ScrollToPlugin.js'

Xt.mount.push({
  matches: '#iframe--scroll-to-anchor body #gatsby_body-inner', // add your own selector instead of body to contain the code
  mount: (object) => {
    // init

    let self = new Xt.ScrollToAnchor(object, {
      scrollSpace: () => {
        let scrollSpace = 0
        // sticky
        const stickys = document.querySelectorAll('.xt-sticky.xt-clone.active')
        for (const sticky of stickys) {
          if (Xt.visible(sticky)) {
            scrollSpace += sticky.clientHeight
          }
        }
        return scrollSpace
      },
    })

    // change

    const eventChange = () => {
      // scroll
      const scrollingElement = document.scrollingElement
      const rect = self.target.getBoundingClientRect()
      const top = rect.top
      const scrollSpace = self.options.scrollSpace()
      const scrollDistance = self.options.scrollDistance()
      let pos = top + scrollingElement.scrollTop - scrollSpace - scrollDistance
      const min = 0
      const max = scrollingElement.scrollHeight - window.innerHeight
      pos = pos < min ? min : pos
      pos = pos > max ? max : pos
      gsap.to(window, { scrollTo: pos, duration: Xt.vars.timeLarge, ease: 'quart.inOut' })
    }

    self.object.addEventListener('change.xt.scrolltoanchor', eventChange)

    // unmount

    const unmount = () => {
      self.object.removeEventListener('change.xt.scrolltoanchor', eventChange)
      self.destroy()
      self = null
    }
    return unmount
  },
})
