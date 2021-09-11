import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'

Xt.mount({
  matches: '.demo--tooltip-swap-click',
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
  }

  const swap = () => {
    // swap
    self.targets[0].classList.add('hidden')
    self.targets[1].classList.remove('hidden')
    // open
    tooltip.dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
    // swap back
    tooltip.addEventListener('offdone.xt.tooltip', swapBack, { once: true })
  }

  // resetTooltip: fix when swapping and moving away

  const resetTooltip = () => {
    // trigger our swap
    tooltip.dispatchEvent(new CustomEvent('offdone.xt.tooltip'))
    // trigger tooltip deactivation
    tooltip.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
  }

  tooltip.addEventListener('mouseleave', resetTooltip)

  // click

  const click = () => {
    // swap
    tooltip.addEventListener('offdone.xt.tooltip', swap, { once: true })
    tooltip.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
  }

  tooltip.addEventListener('click', click)

  // unmount

  return () => {}
}
