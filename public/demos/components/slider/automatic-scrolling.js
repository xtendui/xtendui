import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

/* mountSliders */

const mountSliders = ({ ref }) => {
  // mount granularly

  Xt.mount({
    root: ref,
    matches: '.xt-slider',
    mount: ({ ref }) => {
      return mountSlider({ ref })
    },
  })

  // unmount

  return () => {}
}

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref
  let dragDuration
  let dragEase
  let isAutomatic = false
  const dragEaseNormal = 'quart.out'
  const dragEaseAutomatic = 'linear'
  const timeScaleTimeOn = 0.75
  const timeScaleEaseOn = 'quint.in'
  const timeScaleTimeOff = 0.75
  const timeScaleEaseOff = 'quint.out'

  // slider

  let selfDestroy
  new Xt.Slider(slider, {
    duration: () => dragDuration * 1000,
    align: 'left',
    wrap: 0, // needed 0 to have wrap enabled on same available space as slider enable/disable
    groupSame: false,
    dragposition: true,
  }).then(self => {
    /***/
    // automaticNext

    const automaticNext = () => {
      // go to next slide when animation completes
      isAutomatic = true
      self.goToNext()
      isAutomatic = false
    }
    /***/

    // dragposition (set internal position to resume animation mid dragging)

    const dragposition = () => {
      // duration depending on instant and dragger size
      dragDuration = self.drag._instant ? 0 : Math.max(0.5, Math.min(1, Math.log(self.drag.size / 400)))
      /***/
      // duration and ease depending on isAutomatic
      const speedFactor = 3
      dragDuration = !self.drag._dragging && isAutomatic ? (self.drag.sizeContent * speedFactor) / 1000 : dragDuration
      dragEase = isAutomatic ? dragEaseAutomatic : dragEaseNormal
      /***/
      // position animation to keep updated with animation
      gsap.killTweensOf(self.drag)
      gsap.to(self.drag, {
        _position: self.drag._final,
        duration: dragDuration,
        ease: dragEase,
      })
      // dragger animation
      gsap.killTweensOf(self.dragger)
      gsap
        .to(self.dragger, {
          x: self.drag._final,
          duration: self.drag._dragging ? 0.5 : dragDuration,
          ease: dragEase,
        })
        .eventCallback('onComplete', () => {
          /***/
          // go to next slide when animation completes
          automaticNext()
          /***/
        })
    }

    self.dragger.addEventListener('dragposition.xt.slider', dragposition)

    // init

    const init = () => {
      /***/
      // start automatic on init after a raf when self.initial becomes false
      requestAnimationFrame(() => {
        automaticNext()
      })
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

    self.container.addEventListener('mouseenter', pause)
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

    self.container.addEventListener('mouseleave', resume)
    addEventListener('focus', resume)

    // destroy

    selfDestroy = () => {
      gsap.killTweensOf(self.dragger)
      removeEventListener('blur', pause)
      removeEventListener('focus', resume)
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
  matches: '.demo--slider-automatic-scrolling',
  mount: ({ ref }) => {
    const unmountSliders = mountSliders({ ref })

    // unmount

    return () => {
      unmountSliders()
    }
  },
})
