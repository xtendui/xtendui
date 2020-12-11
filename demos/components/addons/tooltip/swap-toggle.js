import { Xt } from 'xtendui'

Xt.mount.push({
  matches: '.demo--tooltip--swap-toggle',
  mount: object => {
    // vars

    const tooltip = object.parentNode.querySelector('.tooltip')

    // eventOn

    const eventOn = () => {
      // close tooltip
      tooltip.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
      // swap tooltip
      let self = Xt.get('xt-tooltip', object)
      if (self) {
        self.targets[0].style.display = 'none'
        self.targets[1].style.display = ''
        // open tooltip
        tooltip.dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
      }
    }

    object.addEventListener('on.xt.toggle', eventOn, true)

    // eventOff

    const eventOff = () => {
      // close tooltip
      tooltip.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
      // swap tooltip
      let self = Xt.get('xt-tooltip', object)
      if (self) {
        self.targets[0].style.display = ''
        self.targets[1].style.display = 'none'
        // open tooltip
        tooltip.dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
      }
    }

    object.addEventListener('off.xt.toggle', eventOff, true)
  },
})
