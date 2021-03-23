import { Xt } from 'xtendui'
import 'xtendui/src/core/overlay'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--overlay-animation-js',
  mount: ({ object }) => {
    const unmountOverlay = mountOverlay({ object })

    // unmount

    return () => {
      unmountOverlay()
    }
  },
})

/* mountOverlay */

const mountOverlay = ({ object }) => {
  // vars

  const targetTimeOn = 0.5
  const targetEaseOn = 'quint.out'
  const targetTimeOff = 0.5
  const targetEaseOff = 'quint.out'

  // init

  let self = new Xt.Overlay(object, {
    duration: 500,
  })

  // on

  const on = e => {
    const tr = e.target
    // inner
    const inner = tr.querySelector('.xt-overlay-inner')
    gsap.killTweensOf(inner)
    gsap.set(inner, {
      y: 15,
      opacity: 0,
    })
    gsap.to(inner, {
      y: 0,
      opacity: 1,
      duration: targetTimeOn,
      ease: targetEaseOn,
    })
    // backdrop
    const backdrop = tr.querySelector('.xt-backdrop')
    gsap.killTweensOf(backdrop)
    gsap.set(backdrop, {
      opacity: 0,
    })
    gsap.to(backdrop, {
      opacity: 0.25,
      duration: targetTimeOn,
      ease: targetEaseOn,
    })
  }

  for (const target of self.targets) {
    target.addEventListener('on.xt.overlay', on)
  }

  // off

  const off = e => {
    const tr = e.target
    // inner
    const inner = tr.querySelector('.xt-overlay-inner')
    gsap.killTweensOf(inner)
    gsap.to(inner, {
      y: -15,
      opacity: 0,
      duration: targetTimeOff,
      ease: targetEaseOff,
    })
    // backdrop
    const backdrop = tr.querySelector('.xt-backdrop')
    gsap.killTweensOf(backdrop)
    gsap.to(backdrop, {
      opacity: 0,
      duration: targetTimeOn,
      ease: targetEaseOn,
    })
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
