import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')

  const targetTimeOn = 0.5
  const targetEaseOn = 'quint.out'
  const targetXOn = 192
  const targetTimeOff = 0.5
  const targetEaseOff = 'quint.out'
  const targetXOff = 192

  // init

  /***/
  let self = new Xt.Slider(slider, {
    wrap: true,
    duration: 500,
  })
  /***/

  // setup

  /***/
  const init = () => {
    const trs = self.targets.filter(x => !self.hasCurrent({ el: x }))
    for (const tr of trs) {
      // content
      const content = tr.querySelector('[data-node-target-content]')
      gsap.set(content, {
        opacity: 0,
      })
    }
  }

  self.container.addEventListener('init.xt.slider', init, true) // useCapture event propagation
  /***/

  // on

  /***/
  const on = e => {
    const tr = e.target
    // useCapture event propagation check
    if (self.targets.includes(tr)) {
      // content
      const content = tr.querySelector('[data-node-target-content]')
      gsap.killTweensOf(content)
      gsap.set(content, {
        x: self.direction * targetXOn,
      })
      gsap.to(content, {
        x: 0,
        opacity: 1,
        duration: targetTimeOn,
        ease: targetEaseOn,
      })
    }
  }

  self.container.addEventListener('on.xt.slider', on, true) // useCapture event propagation
  /***/

  // off

  /***/
  const off = e => {
    const tr = e.target
    // useCapture event propagation check
    if (self.targets.includes(tr)) {
      // content
      const content = tr.querySelector('[data-node-target-content]')
      gsap.killTweensOf(content)
      gsap.to(content, {
        x: -self.direction * targetXOff,
        opacity: 0,
        duration: targetTimeOff,
        ease: targetEaseOff,
      })
    }
  }

  self.container.addEventListener('off.xt.slider', off, true) // useCapture event propagation
  /***/

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mount */

Xt.mount({
  matches: '.demo--slider-animation-js',
  mount: ({ ref }) => {
    const unmountSlider = mountSlider({ ref })

    // unmount

    return () => {
      unmountSlider()
    }
  },
})
