import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '.demo--toggle-timing-delay-fnc',
  mount: (object) => {
    // init

    let self = new Xt.Toggle(object, {
      delayOn: (current) => {
        return Math.min(current * 150, 300)
      },
      delayOff: (current, total) => {
        return Math.min((total - current) * 150, 300)
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

Xt.mount.push({
  matches: '.demo--toggle-timing-delay-fnc--hover',
  mount: (object) => {
    // init

    let self = new Xt.Toggle(object, {
      on: 'mouseenter',
      off: 'mouseleave',
      delayOn: (current) => {
        return Math.min(current * 150, 300)
      },
      delayOff: (current, total) => {
        return Math.min((total - current) * 150, 300)
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
