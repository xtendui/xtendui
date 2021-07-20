import { Xt } from 'xtendui'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--javascript-animation-js',
  mount: ({ ref }) => {
    const unmountActivation = mountActivation({ ref })

    // unmount

    return () => {
      unmountActivation()
    }
  },
})

/* mountActivation */

const mountActivation = ({ ref }) => {
  // vars

  const tr = ref.querySelector('[data-target]')
  const targetTimeOn = 0.5
  const targetEaseOn = 'quint.out'
  const targetXOn = 16
  const targetTimeOff = 0.5
  const targetEaseOff = 'quint.out'
  const targetXOff = 16

  // init

  const timeout = () => {
    if (!tr.classList.contains('on')) {
      Xt.on({ el: tr })
      // animation
      gsap.killTweensOf(tr)
      gsap.set(tr, {
        x: -targetXOn,
        opacity: 0,
      })
      gsap.to(tr, {
        x: 0,
        opacity: 1,
        duration: targetTimeOn,
        ease: targetEaseOn,
      })
    } else {
      Xt.off({ el: tr })
      // animation
      gsap.killTweensOf(tr)
      gsap.to(tr, {
        x: targetXOff,
        opacity: 0,
        duration: targetTimeOff,
        ease: targetEaseOff,
      })
    }
  }

  tr.dataset.interval = setInterval(timeout, 2000)

  // unmount

  return () => {
    clearTimeout(tr.dataset.interval)
  }
}
