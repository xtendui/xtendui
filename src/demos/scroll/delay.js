import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '.demo--scroll-container--delay',
  mount: function (object) {
    // init

    let self = new Xt.Scroll(object, {
      elements: ':scope > *',
      delayOn: function (current) {
        return Math.min(current * 75, 300)
      },
      delayOff: function (current, total) {
        return Math.min((total - current) * 75, 300)
      },
      distance: '20%'
    })

    // unmount

    return function unmount () {
      self.destroy()
      self = null
    }
  }
})
