import { Xt } from 'xtendui'
import 'xtendui/src/scrollto'

/* mountScrollto */

const mountScrollto = () => {
  // init

  /***/
  let selfDestroy = () => {}
  new Xt.Scrollto(document.documentElement, {
    hash: true,
  }).then(self => {
    // scrollto

    const scrollto = () => {
      // scroll
      self.scroller.scrollTo(0, self.position)
    }

    self.container.addEventListener('scrollto.xt.scrollto', scrollto)

    // destroy

    selfDestroy = () => {
      self.container.removeEventListener('scrollto.xt.scrollto', scrollto)
      self.destroy()
      self = null
    }
  })
  /***/

  // unmount

  return () => {
    selfDestroy()
  }
}

/* mount */

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
