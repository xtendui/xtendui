import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--tooltip-animation-js',
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

  const tooltips = ref.querySelectorAll('.xt-tooltip-item')
  const unmounts = []

  for (const tooltip of tooltips) {
    // vars
    const targetTimeOn = 0.3
    const targetEaseOn = 'quint.out'
    const targetTimeOff = 0.3
    const targetEaseOff = 'quint.out'

    // init

    let self = new Xt.Tooltip(tooltip, {
      duration: 300,
    })

    // on

    const on = e => {
      const tr = e.target
      // check because of event propagation
      if (self.targets.includes(tr)) {
        const inner = tr.querySelector(':scope > *')
        gsap.killTweensOf(inner)
        gsap.set(inner, {
          x: -15,
          opacity: 0,
        })
        gsap.to(inner, {
          x: 0,
          opacity: 1,
          duration: targetTimeOn,
          ease: targetEaseOn,
        })
      }
    }

    for (const target of self.targets) {
      target.addEventListener('on.xt.tooltip', on)
    }

    // off

    const off = e => {
      const tr = e.target
      // check because of event propagation
      if (self.targets.includes(tr)) {
        const inner = tr.querySelector(':scope > *')
        gsap.killTweensOf(inner)
        gsap.to(inner, {
          x: 15,
          opacity: 0,
          duration: targetTimeOff,
          ease: targetEaseOff,
        })
      }
    }

    for (const target of self.targets) {
      target.addEventListener('off.xt.tooltip', off)
    }

    // unmount

    unmounts.push(() => {
      self.destroy()
      self = null
    })
  }

  // unmount

  return () => {
    for (const unmount of unmounts) {
      unmount()
    }
  }
}
