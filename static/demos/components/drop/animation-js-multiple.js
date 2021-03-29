import { Xt } from 'xtendui'
import 'xtendui/src/drop'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--drop-animation-js-multiple',
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
  // vars

  const targetTimeOn = 0.5
  const targetEaseOn = 'quint.out'
  const targetTimeOff = 0.5
  const targetEaseOff = 'quint.out'

  // init

  let self = new Xt.Drop(object, {
    elements: '.xt-drop-item',
    targets: '.xt-drop',
    duration: 500,
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
    target.addEventListener('on.xt.drop', on)
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
    target.addEventListener('off.xt.drop', off)
  }

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}
