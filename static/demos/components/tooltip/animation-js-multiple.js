import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--tooltip-animation-js-multiple',
  mount: ({ ref }) => {
    const unmountTooltip = mountTooltip({ ref })

    // unmount

    return () => {
      unmountTooltip()
    }
  },
})

/* mountTooltips */

const mountTooltip = ({ ref }) => {
  // vars

  const targetTimeOn = 0.3
  const targetEaseOn = 'quint.out'
  const targetTimeOff = 0.3
  const targetEaseOff = 'quint.out'

  // init

  let self = new Xt.Tooltip(ref, {
    elements: '.xt-tooltip-item',
    targets: '.xt-tooltip',
    duration: 300,
    delay: 25,
  })

  // on

  const on = e => {
    const tr = e.target.querySelector(':scope > *')
    gsap.killTweensOf(tr)
    gsap.set(tr, {
      x: -self.direction * 15,
      opacity: 0,
    })
    gsap.to(tr, {
      x: 0,
      opacity: 1,
      duration: targetTimeOn,
      ease: targetEaseOn,
    })
  }

  for (const target of self.targets) {
    target.addEventListener('on.xt.tooltip', on)
  }

  // off

  const off = e => {
    const tr = e.target.querySelector(':scope > *')
    gsap.killTweensOf(tr)
    gsap.to(tr, {
      x: self.direction * 15,
      opacity: 0,
      duration: targetTimeOff,
      ease: targetEaseOff,
    })
  }

  for (const target of self.targets) {
    target.addEventListener('off.xt.tooltip', off)
  }

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}
