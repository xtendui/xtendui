import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '.demo--scroll_container--delay',
  mount: function (object) {
    // init

    new Xt.Scroll(object, {
      elements: ':scope > *',
      delayOn: 'return Math.min(current * 75, 300)',
      delayOff: 'return Math.min((total - current) * 75, 300)',
      distance: '20%'
    })
  }
})
