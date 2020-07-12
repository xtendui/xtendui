import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '.demo--scroll-delay',
  mount: (object) => {
    // init

    let self = new Xt.Scroll(object, {
      elements: '.card',
      delayOn: (current) => {
        return Math.min((current + 1) * 75, 300)
      },
      delayOff: (current, total) => {
        return Math.min((total - (current + 1)) * 75, 300)
      },
      distance: '20%',
    })

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
