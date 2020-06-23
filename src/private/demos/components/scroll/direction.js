import { Xt } from 'xtend-library/src/xt.js'

Xt.mount.push({
  matches: '.demo--scroll-container--direction',
  mount: object => {
    // init

    let self = new Xt.Scroll(object, {
      elements: ':scope > *',
      delayOn: current => {
        return Math.min((current + 1) * 75, 300)
      },
      delayOff: (current, total) => {
        return Math.min((total - (current + 1)) * 75, 300)
      },
    })

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
