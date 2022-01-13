import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

/* mountToggle */

const mountToggle = ({ ref }) => {
  // vars

  const toggle = ref

  // init

  /***/
  new Xt.Toggle(toggle, {
    durationIn: ({ current, total, el, self }) => {
      if (self.elements.includes(el)) return
      const val = (total - current) * 200
      el.style.transitionDuration = `${val}ms`
      return val
    },
    delayIn: ({ current, el, self }) => {
      if (self.elements.includes(el)) return
      const val = current * 200
      return val
    },
    durationOut: ({ current, el, self }) => {
      if (self.elements.includes(el)) return
      const val = current * 100
      el.style.transitionDuration = `${val}ms`
      return val
    },
    delayOut: ({ current, total, el, self }) => {
      if (self.elements.includes(el)) return
      const val = (total - current) * 100
      return val
    },
  })
  /***/

  // unmount

  return () => {}
}

/* mount */

Xt.mount({
  matches: '.demo--toggle-animation-duration-delay',
  mount: ({ ref }) => {
    const unmountToggle = mountToggle({ ref })

    // unmount

    return () => {
      unmountToggle()
    }
  },
})
