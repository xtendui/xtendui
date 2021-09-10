import { Xt } from 'xtendui'
import 'xtendui/src/groupnumber'

Xt.mount({
  matches: '.demo--groupnumber',
  mount: ({ ref }) => {
    const unmountGroupnumberCustom = mountGroupnumberCustom({ ref })

    // unmount

    return () => {
      unmountGroupnumberCustom()
    }
  },
})

/* mountGroupnumberCustom */

const mountGroupnumberCustom = ({ ref }) => {
  // vars

  const groupnumber = ref.querySelector('[data-node-groupnumber-custom]')

  // init

  /***/
  let self = new Xt.Groupnumber(groupnumber, {
    validate: ({ val, step }) => {
      if (step && val % step) {
        return Math.ceil(val / step) * step
      }
      return val
    },
  })
  /***/

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}
