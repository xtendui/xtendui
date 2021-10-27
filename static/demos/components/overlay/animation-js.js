import { Xt } from 'xtendui'
import 'xtendui/src/overlay'
import gsap from 'gsap'

/* mountOverlay */

const mountOverlay = ({ ref }) => {
  // vars

  const overlay = ref

  const targetTimeOn = 0.5
  const targetEaseOn = 'quint.out'
  const targetYOn = 16
  const targetTimeOff = 0.5
  const targetEaseOff = 'quint.out'
  const targetYOff = 16

  // init

  /***/
  let self = new Xt.Overlay(overlay, {
    duration: 500,
  })
  /***/

  // on

  /***/
  const on = e => {
    const tr = e.target
    // useCapture event propagation check
    if (self.targets.includes(tr)) {
      // inner
      const inner = tr.querySelector('[data-xt-overlay-inner]')
      gsap.killTweensOf(inner)
      gsap.set(inner, {
        y: -self.direction * targetYOn,
        opacity: 0,
      })
      gsap.to(inner, {
        y: 0,
        opacity: 1,
        duration: targetTimeOn,
        ease: targetEaseOn,
      })
    }
  }

  for (const tr of self.targets) {
    tr.addEventListener('on.xt.overlay', on)
  }
  /***/

  // off

  /***/
  const off = e => {
    const tr = e.target
    // useCapture event propagation check
    if (self.targets.includes(tr)) {
      // inner
      const inner = tr.querySelector('[data-xt-overlay-inner]')
      gsap.killTweensOf(inner)
      gsap.to(inner, {
        y: self.direction * targetYOff,
        opacity: 0,
        duration: targetTimeOff,
        ease: targetEaseOff,
      })
    }
  }

  for (const tr of self.targets) {
    tr.addEventListener('off.xt.overlay', off)
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
  matches: '.demo--overlay-animation-js',
  mount: ({ ref }) => {
    const unmountOverlay = mountOverlay({ ref })

    // unmount

    return () => {
      unmountOverlay()
    }
  },
})
