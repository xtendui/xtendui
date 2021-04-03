import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'

Xt.mount({
  matches: '.demo--tooltip-activation-fast',
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
  const tooltips = ref.querySelectorAll('.xt-tooltip')

  for (const tooltip of tooltips) {
    // vars

    const object = tooltip.closest('[data-xt-tooltip]')
    let timeout
    const delay = 2000
    const duration = 75
    const durationDefault = 300

    // fix only once when tooltip has multiple targets

    if (object.dataset.onlyOnceDone) return
    object.dataset.onlyOnceDone = 'true'

    // on

    const on = e => {
      // make other tooltips fast
      const tooltipsOther = Array.from(tooltips).filter(x => x !== e.target)
      for (const tooltip of tooltipsOther) {
        tooltip.setAttribute('data-xt-duration', duration)
        const inner = tooltip.querySelector(':scope > *')
        inner.style.transitionDuration = `${duration}ms`
      }
      // make all tooltips normal
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        for (const tooltip of tooltips) {
          tooltip.setAttribute('data-xt-duration', durationDefault)
          const inner = tooltip.querySelector(':scope > *')
          inner.style.transitionDuration = ''
        }
      }, delay)
    }

    tooltip.addEventListener('on.xt.tooltip', on)
  }

  // unmount

  return () => {}
}
