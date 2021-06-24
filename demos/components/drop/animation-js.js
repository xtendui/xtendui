import { Xt } from 'xtendui'
import 'xtendui/src/drop'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--drop-animation-js',
  mount: ({ ref }) => {
    const unmountDrops = mountDrops({ ref })

    // unmount

    return () => {
      unmountDrops()
    }
  },
})

/* mountDrops */

const mountDrops = ({ ref }) => {
  // vars

  const drop = ref.querySelector(':scope > .xt-list')

  const targetTimeOn = 0.5
  const targetEaseOn = 'quint.out'
  const targetTimeOff = 0.5
  const targetEaseOff = 'quint.out'

  // init

  /***/
  let self = new Xt.Drop(drop, {
    elements: ':scope > .xt-drop-item',
    targets: ':scope > .xt-drop-item > .xt-drop',
    duration: 500,
  })
  /***/

  // on

  const on = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      const inner = tr.querySelector(':scope > *')
      gsap.killTweensOf(inner)
      gsap.set(inner, {
        x: -self.direction * 15,
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

  for (const tr of self.targets) {
    tr.addEventListener('on.xt.drop', on)
  }

  // off

  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      const inner = tr.querySelector(':scope > *')
      gsap.killTweensOf(inner)
      gsap.to(inner, {
        x: self.direction * 15,
        opacity: 0,
        duration: targetTimeOff,
        ease: targetEaseOff,
      })
    }
  }

  for (const tr of self.targets) {
    tr.addEventListener('off.xt.drop', off)
  }

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}
