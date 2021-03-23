import { Xt } from 'xtendui'
import 'xtendui/src/core/drop'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--drop-animation-js',
  mount: ({ object }) => {
    const unmountDrops = mountDrops({ object })

    // unmount

    return () => {
      unmountDrops()
    }
  },
})

/* mountDrops */

const mountDrops = ({ object }) => {
  const drops = object.querySelectorAll('.xt-drop-item')
  const unmounts = []

  for (const drop of drops) {
    // vars

    const targetTimeOn = 0.5
    const targetEaseOn = 'quint.out'
    const targetTimeOff = 0.5
    const targetEaseOff = 'quint.out'

    // init

    let self = new Xt.Drop(drop, {
      duration: 500,
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
      target.addEventListener('on.xt.drop', on)
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
      target.addEventListener('off.xt.drop', off)
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
