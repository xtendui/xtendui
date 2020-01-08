import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '.demo--toggle-timing-delay-fnc',
  mount: function(object) {
    // init

    let self = new Xt.Toggle(object, {
      delayOn: function(current) {
        return Math.min(current * 150, 300)
      },
      delayOff: function(current, total) {
        return Math.min((total - current) * 150, 300)
      },
    })

    // unmount

    const unmount = function() {
      self.destroy()
      self = null
    }
    return unmount
  },
})

Xt.mount.push({
  matches: '.demo--toggle-timing-delay-fnc--hover',
  mount: function(object) {
    // init

    let self = new Xt.Toggle(object, {
      on: 'mouseenter',
      off: 'mouseleave',
      delayOn: function(current) {
        return Math.min(current * 150, 300)
      },
      delayOff: function(current, total) {
        return Math.min((total - current) * 150, 300)
      },
    })

    // unmount

    const unmount = function() {
      self.destroy()
      self = null
    }
    return unmount
  },
})
