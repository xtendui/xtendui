import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--tooltip-animation-js',
  mount: ({ object }) => {
    const unmountTooltip = mountTooltip({ object })

    // unmount

    return () => {
      unmountTooltip()
    }
  },
})

/* mountTooltip */

const mountTooltip = ({ object }) => {
  const tooltip = object.querySelector(':scope > .xt-list')

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
    const tr = e.target.querySelector(':scope > *')
    gsap.killTweensOf(tr)
    gsap.set(tr, {
      x: -15,
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
      x: 15,
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
