import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'

Xt.mount({
  matches: '.demo--tooltip-swap-toggle',
  mount: ({ ref }) => {
    const unmountTooltips = mountTooltips({ ref })

    // unmount

    return () => {
      unmountTooltips()
    }
  },
})

/* mountTooltips */

const mountTooltips = ({ ref }) => {
  // mount granularly

  Xt.mount({
    root: ref,
    raf: false,
    matches: '[data-xt-tooltip]',
    mount: ({ ref }) => {
      return mountTooltip({ ref })
    },
  })

  // unmount

  return () => {}
}

/* mountTooltip */

const mountTooltip = ({ ref }) => {
  // vars

  const tooltip = ref
  let self
  const target = tooltip.parentNode.querySelector('.xt-tooltip')

  // init

  const init = () => {
    self = Xt.get({ name: 'xt-tooltip', el: tooltip })
  }

  tooltip.addEventListener('init.xt.tooltip', init)

  // swap

  const swapBack = () => {
    // swap tooltip
    self.targets[0].classList.remove('hidden')
    self.targets[1].classList.add('hidden')
    // open
    target.dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
  }

  const swap = () => {
    // swap
    self.targets[0].classList.add('hidden')
    self.targets[1].classList.remove('hidden')
    // open
    target.dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
  }

  // resetTooltip: fix when swapping and moving away

  const resetTooltip = () => {
    // trigger our swap
    target.dispatchEvent(new CustomEvent('offdone.xt.tooltip'))
    // trigger tooltip deactivation
    target.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
    // remove our listeners
    target.removeEventListener('offdone.xt.tooltip', swap)
    target.removeEventListener('offdone.xt.tooltip', swapBack)
  }

  tooltip.addEventListener('mouseleave', resetTooltip)

  // on

  const on = () => {
    // swap
    target.addEventListener('offdone.xt.tooltip', swap, { once: true })
    target.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
  }

  tooltip.addEventListener('on.xt.toggle', on)

  // off

  const off = () => {
    // swap back
    target.addEventListener('offdone.xt.tooltip', swapBack, { once: true })
    target.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
  }

  tooltip.addEventListener('off.xt.toggle', off)

  // unmount

  return () => {}
}
