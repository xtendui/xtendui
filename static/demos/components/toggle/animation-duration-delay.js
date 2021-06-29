import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

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

/* mountToggle */

const mountToggle = ({ ref }) => {
  // init

  /***/
  new Xt.Toggle(ref.querySelector(':scope > .xt-list'), {
    elements: ':scope > .xt-button',
    targets: ':scope > .xt-toggle',
    durationIn: ({ current, total, el, self }) => {
      if (self.elements.includes(el)) return
      const val = (total - current) * 300
      el.style.transitionDuration = `${val}ms`
      return val
    },
    delayIn: ({ current, el, self }) => {
      if (self.elements.includes(el)) return
      const val = current * 300
      return val
    },
    durationOut: ({ current, el, self }) => {
      if (self.elements.includes(el)) return
      const val = current * 150
      el.style.transitionDuration = `${val}ms`
      return val
    },
    delayOut: ({ current, total, el, self }) => {
      if (self.elements.includes(el)) return
      const val = (total - current) * 150
      return val
    },
  })
  /***/

  // unmount

  return () => {}
}
