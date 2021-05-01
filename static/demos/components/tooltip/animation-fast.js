import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'

Xt.mount({
  matches: '.demo--tooltip-animation-fast',
  mount: ({ ref }) => {
    const unmountTooltip = mountTooltip({ ref })

    // unmount

    return () => {
      unmountTooltip()
    }
  },
})

/* mountTooltip */

const mountTooltip = ({ ref }) => {
  // vars

  const tooltips = ref.querySelectorAll('.xt-tooltip')

  for (const tooltip of tooltips) {
    // vars

    const object = tooltip.closest('[data-xt-tooltip]')
    const delayReset = 1000
    const durationFast = 0

    // fix only once when tooltip has multiple targets

    if (object.dataset.onlyOnceDone) return () => {}
    object.dataset.onlyOnceDone = 'true'

    // on

    const on = e => {
      // make other tooltips fast
      const tooltipsOther = Array.from(tooltips).filter(x => x !== e.target)
      for (const tooltipOther of tooltipsOther) {
        tooltipOther.dataset.defaultXtDuration = tooltipOther.getAttribute('data-xt-duration')
        tooltipOther.setAttribute('data-xt-duration', durationFast)
        const inner = tooltipOther.querySelector(':scope > *')
        inner.style.transitionDuration = `${durationFast}ms`
      }
      // make all tooltips normal
      clearTimeout(window.xtTooltipFastTimeout)
      window.xtTooltipFastTimeout = setTimeout(() => {
        for (const tooltipOther of tooltips) {
          tooltipOther.setAttribute('data-xt-duration', tooltipOther.dataset.defaultXtDuration)
          const inner = tooltipOther.querySelector(':scope > *')
          inner.style.transitionDuration = ''
        }
      }, delayReset)
    }

    tooltip.addEventListener('on.xt.tooltip', on)
  }

  // unmount

  return () => {}
}
