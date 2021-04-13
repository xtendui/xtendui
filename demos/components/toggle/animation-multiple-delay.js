import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

Xt.mount({
  matches: '.demo--toggle-animation-multiple-delay',
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

  new Xt.Toggle(ref.querySelector(':scope > .xt-list'), {
    delayIn: current => {
      return Math.min(current * 150, 300)
    },
    delayOut: (current, total) => {
      return Math.min((total - current) * 150, 300)
    },
  })

  // unmount

  return () => {}
}
