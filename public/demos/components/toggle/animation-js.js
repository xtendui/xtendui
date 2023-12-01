import { Xt } from 'xtendui'
import 'xtendui/src/toggle'
import gsap from 'gsap'

/* mountToggle */

const mountToggle = ({ ref }) => {
  // vars

  const toggle = ref
  const targetTimeOn = 0.5
  const targetEaseOn = 'quint.out'
  const targetXOn = 16
  const targetTimeOff = 0.5
  const targetEaseOff = 'quint.out'
  const targetXOff = 16

  // init

  let selfDestroy = () => {}
  new Xt.Toggle(toggle, {
    duration: 500,
  }).then(self => {
    // on

    /***/
    const on = e => {
      const tr = e.target
      gsap.killTweensOf(tr)
      gsap.set(tr, {
        x: -self.direction * targetXOn,
        opacity: 0,
      })
      gsap.to(tr, {
        x: 0,
        opacity: 1,
        duration: targetTimeOn,
        ease: targetEaseOn,
      })
    }

    for (const tr of self.targets) {
      tr.addEventListener('on.xt.toggle', on)
    }
    /***/

    // off

    /***/
    const off = e => {
      const tr = e.target
      gsap.killTweensOf(tr)
      gsap.to(tr, {
        x: self.direction * targetXOff,
        opacity: 0,
        duration: targetTimeOff,
        ease: targetEaseOff,
      })
    }

    for (const tr of self.targets) {
      tr.addEventListener('off.xt.toggle', off)
    }
    /***/

    // destroy

    selfDestroy = () => {
      self.destroy()
      self = null
    }
  })

  // unmount

  return () => {
    selfDestroy()
  }
}

/* mount */

Xt.mount({
  matches: '.demo--toggle-animation-js',
  mount: ({ ref }) => {
    const unmountToggle = mountToggle({ ref })

    // unmount

    return () => {
      unmountToggle()
    }
  },
})
