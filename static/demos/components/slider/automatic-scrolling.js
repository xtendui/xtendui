import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--slider-automaticscroll',
  mount: ({ ref }) => {
    const unmountSliders = mountSliders({ ref })

    // unmount

    return () => {
      unmountSliders()
    }
  },
})

/* mountSliders */

const mountSliders = ({ ref }) => {
  // vars

  const sliders = ref.querySelectorAll('.xt-slider')
  const unmounts = []

  for (const slider of sliders) {
    // vars

    const dragEase = 'linear'
    let distance
    let duration
    const timeScaleTimeOn = 0.75
    const timeScaleEaseOn = 'quint.in'
    const timeScaleTimeOff = 0.75
    const timeScaleEaseOff = 'quint.out'

    // slider

    /***/
    let self = new Xt.Slider(slider, {
      align: 'left',
      groupSame: false,
      dragposition: true,
      wrap: 0, // needed 0 to have wrap enabled on same available space as slider enable/disable
    })
    /***/

    // dragposition (set internal position to resume animation mid dragging)

    const dragposition = () => {
      // duration depending on distance
      distance = Math.abs(self.drag.position - self.drag.final)
      duration = self.initial || self.drag.instant ? 0 : Math.min(Math.log(1 + distance / 125), 1.5)
      // position animation to keep updated with animation
      gsap.killTweensOf(self.drag)
      gsap.to(self.drag, {
        position: self.drag.final,
        duration: duration,
        ease: dragEase,
      })
      // dragger animation
      gsap.killTweensOf(self.dragger)
      gsap
        .to(self.dragger, {
          x: self.drag.final,
          duration: duration,
          ease: dragEase,
        })
        .eventCallback('onComplete', () => {
          /***/
          // this is what makes the slider automatic
          // go to next slide
          self.goToNext()
          /***/
        })
    }

    self.dragger.addEventListener('dragposition.xt.slider', dragposition)

    // init

    const init = () => {
      /***/
      // this is what makes the slider automatic
      // start automatic on init
      self.goToNext()
      /***/
    }

    self.container.addEventListener('init.xt.slider', init)

    // pause

    const pause = () => {
      // pause tween
      const tweens = gsap.getTweensOf(self.dragger)
      for (const tween of tweens) {
        gsap.to(tween, {
          timeScale: 0,
          duration: timeScaleTimeOff,
          ease: timeScaleEaseOff,
        })
      }
    }

    self.container.addEventListener('mouseenter', pause, true)
    addEventListener('blur', pause)

    // resume

    const resume = () => {
      // resume tween
      const tweens = gsap.getTweensOf(self.dragger)
      for (const tween of tweens) {
        gsap.to(tween, {
          timeScale: 1,
          duration: timeScaleTimeOn,
          ease: timeScaleEaseOn,
        })
      }
    }

    self.container.addEventListener('mouseleave', resume, true)
    addEventListener('focus', resume)

    // unmount

    unmounts.push(() => {
      pause()
      removeEventListener('blur', pause)
      removeEventListener('focus', resume)
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
