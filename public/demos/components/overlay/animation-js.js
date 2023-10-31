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
  let selfDestroy
  new Xt.Overlay(overlay, {
    duration: 500,
  }).then(self => {
    // on

    const on = e => {
      const tr = e.target
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

    for (const tr of self.targets) {
      tr.addEventListener('on.xt.overlay', on)
    }

    // off

    const off = e => {
      const tr = e.target
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

    for (const tr of self.targets) {
      tr.addEventListener('off.xt.overlay', off)
    }

    // destroy

    selfDestroy = () => {
      self.destroy()
      self = null
    }
  })
  /***/

  // unmount

  return () => {
    selfDestroy()
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
