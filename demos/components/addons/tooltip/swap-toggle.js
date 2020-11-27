import { Xt } from 'xtendui'

Xt.mount.push({
  matches: '.demo--tooltip--swap-toggle',
  mount: object => {
    // vars

    const tooltip = object.parentNode.querySelector('.tooltip')

    // eventClick

    const eventClick = () => {
      // close tooltip
      tooltip.dispatchEvent(new CustomEvent('off.trigger.xt'))
      // swap tooltip
      let self = Xt.get('xt-tooltip', object)
      if (object.classList.contains('in')) {
        self.targets[0].style.display = 'none'
        self.targets[1].style.display = ''
      } else {
        self.targets[0].style.display = ''
        self.targets[1].style.display = 'none'
      }
      // open tooltip
      tooltip.dispatchEvent(new CustomEvent('on.trigger.xt'))
    }

    object.addEventListener('click', eventClick)
  },
})
