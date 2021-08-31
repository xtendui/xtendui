import { Xt } from 'xtendui'
import 'xtendui/src/scrollto'

Xt.mount({
  matches: '.demo--scrollto-simple',
  mount: ({ ref }) => {
    const unmountScrollto = mountScrollto({ ref })

    // unmount

    return () => {
      unmountScrollto()
    }
  },
})

/* mountScrollto */

const mountScrollto = () => {
  // init

  /***/
  let self = new Xt.Scrollto(document.documentElement, {
    hash: true,
  })
  /***/

  // scrollto

  const scrollto = () => {
    // scroll
    self.scroller.scrollTo(0, self.position)
  }

  self.container.addEventListener('scrollto.xt.scrollto', scrollto)

  // unmount

  return () => {
    self.container.removeEventListener('scrollto.xt.scrollto', scrollto)
    self.destroy()
    self = null
  }
}
