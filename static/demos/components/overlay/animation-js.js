import { Xt } from 'xtendui'
import 'xtendui/src/overlay'
import gsap from 'gsap'

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

/* mountOverlay */

const mountOverlay = ({ ref }) => {
  // vars

  const overlay = ref.querySelector(':scope > .xt-list')

  const targetTimeOn = 0.5
  const targetEaseOn = 'quint.out'
  const targetTimeOff = 0.5
  const targetEaseOff = 'quint.out'

  // init

  /***/
  let self = new Xt.Overlay(overlay, {
    elements: ':scope > .xt-button, .xt-list > .xt-button',
    targets: ':scope > .xt-overlay',
    duration: 500,
  })
  /***/

  // on

  const on = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // inner
      const inner = tr.querySelector('.xt-overlay-inner')
      gsap.killTweensOf(inner)
      gsap.set(inner, {
        y: -self.direction * 15,
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

  for (const target of self.targets) {
    target.addEventListener('on.xt.overlay', on)
  }

  // off

  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // inner
      const inner = tr.querySelector('.xt-overlay-inner')
      gsap.killTweensOf(inner)
      gsap.to(inner, {
        y: self.direction * 15,
        opacity: 0,
        duration: targetTimeOff,
        ease: targetEaseOff,
      })
    }
  }

  for (const target of self.targets) {
    target.addEventListener('off.xt.overlay', off)
  }

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}
