import { Xt } from 'xtendui'
import 'xtendui/src/addons/scrolltoanchor'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

Xt.mount.push({
  matches: '#iframe--scrolltoanchor body', // add your own selector instead of body to contain the code
  mount: object => {
    // init

    let self = new Xt.Scrolltoanchor(object, {
      scrollElements: [document.scrollingElement, object.querySelector('.demo--scrolltoanchor'), object.querySelector('#demo--overlay-scrolltoanchor')],
      scrollSpace: scrollingElement => {
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
      let pos = self.position - self.scrollSpace - self.scrollDistance
      const min = 0
      const max = self.scrollElement.scrollHeight - self.scrollElement.offsetHeight
      pos = pos < min ? min : pos
      pos = pos > max ? max : pos
      // scroll
      gsap.killTweensOf(self.scrollElement)
      gsap.to(self.scrollElement, { scrollTo: pos, duration: 1, ease: 'quart.inOut' })
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
