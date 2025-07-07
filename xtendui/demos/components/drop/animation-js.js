import { Xt } from 'xtendui'
import 'xtendui/src/drop'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--drop-animation-js > .xt-list',
  mount: ({ ref }) => {
    // vars

    const drop = ref

    const targetTimeOn = 0.5
    const targetEaseOn = 'quint.out'
    const targetXOn = 16
    const targetTimeOff = 0.5
    const targetEaseOff = 'quint.out'
    const targetXOff = 16

    // init

    let selfDestroy = () => {}
    new Xt.Drop(drop, {
      mouseParent: true,
      duration: 500,
    }).then(self => {
      // on

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
        tr.addEventListener('on.xt.drop', on)
      }

      // off

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
  },
})
