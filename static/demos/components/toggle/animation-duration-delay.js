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
    durationIn: ({ current, total, el }) => {
      const val = (total - current) * 300
      el.style.transitionDuration = `${val}ms`
      return val
    },
    delayIn: ({ current }) => {
      const val = current * 300
      return val
    },
    durationOut: ({ current, el }) => {
      const val = current * 150
      el.style.transitionDuration = `${val}ms`
      return val
    },
    delayOut: ({ current, total }) => {
      const val = (total - current) * 150
      return val
    },
  })
  /***/

  // unmount

  return () => {}
}
