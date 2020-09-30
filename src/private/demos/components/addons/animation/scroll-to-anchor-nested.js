import { Xt } from 'xtend-library'
import 'xtend-library/src/vars'
import 'xtend-library/src/addons/animation/scroll-to-anchor'
import gsap from 'gsap'
import 'gsap/ScrollToPlugin'

Xt.mount.push({
  matches: '#iframe--scroll-to-anchor-nested body #gatsby_body-inner', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    object = document.documentElement

    // init

    let self = new Xt.ScrollToAnchor(object, {
      scrollElements: [
        document.scrollingElement,
        object.querySelector('.demo--scroll-to-anchor-nested'),
        object.querySelector('#demo--overlay-scroll-to-anchor-nested'),
      ],
      scrollSpace: (self, scrollingElement) => {
        let scrollSpace = 0
        if (scrollingElement === document.scrollingElement) {
          const spaces = document.querySelectorAll('.xt-sticky.xt-clone')
          for (const space of spaces) {
            if (Xt.visible(space)) {
              scrollSpace += space.clientHeight
            }
          }
        }
        return scrollSpace
      },
    })

    // change

    const eventChange = () => {
      // val
      const scrollingElement = self.scrollElementCurrent
      let pos = self.position - self.scrollSpace - self.scrollDistance
      const min = 0
      const max = scrollingElement.scrollHeight - scrollingElement.offsetHeight
      pos = pos < min ? min : pos
      pos = pos > max ? max : pos
      // scroll
      gsap.to(scrollingElement, { scrollTo: pos, duration: Xt.vars.timeLarge, ease: 'quart.inOut' })
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
