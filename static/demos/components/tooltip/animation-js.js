import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'
import gsap from 'gsap'

/* mountTooltips */

const mountTooltip = ({ ref }) => {
  // vars

  const tooltip = ref

  const targetTimeOn = 0.3
  const targetEaseOn = 'quint.out'
  const targetXOn = 16
  const targetTimeOff = 0.3
  const targetEaseOff = 'quint.out'
  const targetXOff = 16

  // init

  /***/
  let self = new Xt.Tooltip(tooltip, {
    duration: 300,
    delay: 50,
  })
  /***/

  // on

  /***/
  const on = e => {
    const tr = e.target
    const target = tr.querySelector(':scope > *')
    gsap.killTweensOf(target)
    gsap.set(target, {
      x: -self.direction * targetXOn,
      opacity: 0,
    })
    gsap.to(target, {
      x: 0,
      opacity: 1,
      duration: targetTimeOn,
      ease: targetEaseOn,
    })
  }

  for (const tr of self.targets) {
    tr.addEventListener('on.xt.tooltip', on)
  }
  /***/

  // off

  /***/
  const off = e => {
    const tr = e.target
    const target = tr.querySelector(':scope > *')
    gsap.killTweensOf(target)
    gsap.to(target, {
      x: self.direction * targetXOff,
      opacity: 0,
      duration: targetTimeOff,
      ease: targetEaseOff,
    })
  }

  for (const tr of self.targets) {
    tr.addEventListener('off.xt.tooltip', off)
  }
  /***/

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mount */

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
