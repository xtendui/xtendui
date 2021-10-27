import { Xt } from 'xtendui'
import 'xtendui/src/drop'
import gsap from 'gsap'

/* mountDrops */

const mountDrops = ({ ref }) => {
  // vars

  const drop = ref.querySelector(':scope > .xt-list')

  const targetTimeOn = 0.5
  const targetEaseOn = 'quint.out'
  const targetXOn = 16
  const targetTimeOff = 0.5
  const targetEaseOff = 'quint.out'
  const targetXOff = 16

  // init

  /***/
  let self = new Xt.Drop(drop, {
    duration: 500,
  })
  /***/

  // on

  /***/
  const on = e => {
    const tr = e.target
    // useCapture event propagation check
    if (self.targets.includes(tr)) {
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
  }

  for (const tr of self.targets) {
    tr.addEventListener('on.xt.drop', on)
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
    tr.addEventListener('off.xt.drop', off)
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
  matches: '.demo--drop-animation-js',
  mount: ({ ref }) => {
    const unmountDrops = mountDrops({ ref })

    // unmount

    return () => {
      unmountDrops()
    }
  },
})
