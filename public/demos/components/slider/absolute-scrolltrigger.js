import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')
  let dragDuration
  const dragEase = 'quart.out'

  const maskPercent = 100
  const maskInnerPercent = 100
  const maskInnerOpacity = 0.65

  // slider

  let selfDestroy
  new Xt.Slider(slider, {
    duration: () => dragDuration * 1000,
    mode: 'absolute',
    loop: true,
    free: true,
  }).then(self => {
    // Scroll

    const scrollTrigger = ScrollTrigger.create({
      trigger: slider,
      start: 'bottom bottom',
      end: 'top top',
      pin: true,
      pinSpacing: true,
      onUpdate: selfScrolltrigger => {
        const first = self._groups[self.drag._wrapFirst].target
        const last = self._groups[self.drag._wrapLast].target
        const min = Xt.dataStorage.get(first, `${self.ns}GroupLeft`)
        const max = Xt.dataStorage.get(last, `${self.ns}GroupLeft`)
        const maxCheck = Xt.dataStorage.get(first, `${self.ns}GroupWidth`)
        //console.log(min, max)
        /*
        self.dragstart({ clientX: deltaY })
        self.dragmove({ clientX }, { keepActivated: true, setup: false })
        self.dragend({ clientX })
        deltaY = clientX
        */
        const clientX = max * selfScrolltrigger.progress
        //console.log(selfScrolltrigger.progress)
        //self.wheelEvent({}, { deltaY: clientX })
        // val
        self.drag._final = clientX
        // set direction
        self.direction = Math.sign(self.drag._initial - self.drag._final)
        self._inverse = self.direction < 0
        // ratio
        self.drag._ratio = Math.abs(self.drag._final - self.drag._initial) / Math.abs(maxCheck - min)
        self.drag._ratioInverse = 1 - self.drag._ratio
        // dispatch event
        self.drag._instant = true
        self.drag._dragging = true
        self.dragger.dispatchEvent(new CustomEvent(`dragposition.xt.slider`))
        self._logicDragposition()
        self.dragger.dispatchEvent(new CustomEvent(`drag.xt.slider`))
        // ??? non funzia
        self.dragend({ clientX })
      },
    })

    // dragposition (set internal position to resume animation mid dragging)

    const dragposition = () => {
      // duration depending on instant and dragger size
      dragDuration = self.drag._instant ? 0 : Math.max(0.5, Math.min(1, Math.log(self.drag.size / 400)))
      // duration only when wheeling
      dragDuration = self.drag._dragging && self.wheel._wheeling ? 0.5 : dragDuration
      // position animation to keep updated with animation
      gsap.killTweensOf(self.drag)
      gsap.to(self.drag, {
        _position: self.drag._final,
        duration: dragDuration,
        ease: dragEase,
      })
    }

    self.dragger.addEventListener('dragposition.xt.slider', dragposition)

    // drag (set drag frame on drag and initial position on activation)

    const drag = () => {
      const tr = self.targets.filter(x => self.hasCurrent({ el: x }))[0]
      // mask
      const mask = tr.querySelector('.hero')
      gsap.killTweensOf(mask)
      gsap.to(mask, {
        x: `${-maskPercent * self.drag._ratio * self.direction}%`,
        duration: dragDuration,
        ease: dragEase,
      })
      const maskInner = mask.querySelector('.hero-inner')
      gsap.killTweensOf(maskInner)
      gsap.to(maskInner, {
        x: `${maskInnerPercent * self.drag._ratio * self.direction}%`,
        opacity: 1 - maskInnerOpacity * self.drag._ratio,
        duration: dragDuration,
        ease: dragEase,
      })
      // incomings
      for (const incoming of self.targets.filter(x => x.classList.contains('incoming'))) {
        incoming.classList.remove('incoming', '!block')
      }
      const incomings =
        self.direction < 0 ? self.getTargets({ el: self.getPrev() }) : self.getTargets({ el: self.getNext() })
      for (const incoming of incomings) {
        incoming.classList.add('incoming', '!block')
        // mask
        const mask = incoming.querySelector('.hero')
        gsap.killTweensOf(mask)
        gsap.to(mask, {
          x: `${maskPercent * self.drag._ratioInverse * self.direction}%`,
          duration: dragDuration,
          ease: dragEase,
        })
        const maskInner = mask.querySelector('.hero-inner')
        gsap.killTweensOf(maskInner)
        gsap.to(maskInner, {
          x: `${-maskInnerPercent * self.drag._ratioInverse * self.direction}%`,
          opacity: 1 - maskInnerOpacity * self.drag._ratioInverse,
          duration: dragDuration,
          ease: dragEase,
        })
      }
    }

    self.dragger.addEventListener('drag.xt.slider', drag)

    // dragreset (set animation on drag reset, when dragging opposite position from initial dragging)

    const dragreset = () => {
      const tr = self.targets.filter(x => self.hasCurrent({ el: x }))[0]
      off({ target: tr })
      on({ target: tr })
    }

    self.dragger.addEventListener('dragreset.xt.slider', dragreset)

    // on

    const on = e => {
      const tr = e.target
      // useCapture event propagation check
      if (self.targets.includes(tr) && !self.initial) {
        // incomings
        tr.classList.remove('!block')
        // mask
        const mask = tr.querySelector('.hero')
        gsap.killTweensOf(mask)
        gsap.set(mask, {
          x: `${maskPercent * self.drag._ratioInverse * self.direction}%`,
        })
        gsap.to(mask, {
          x: 0,
          duration: dragDuration,
          ease: dragEase,
        })
        const maskInner = mask.querySelector('.hero-inner')
        gsap.killTweensOf(maskInner)
        gsap.set(maskInner, {
          x: `${-maskInnerPercent * self.drag._ratioInverse * self.direction}%`,
          opacity: 1 - maskInnerOpacity * self.drag._ratioInverse,
        })
        gsap.to(maskInner, {
          x: 0,
          opacity: 1,
          duration: dragDuration,
          ease: dragEase,
        })
      }
    }

    self.container.addEventListener('on.xt.slider', on, true) // useCapture event propagation

    // off

    const off = e => {
      const tr = e.target
      // useCapture event propagation check
      if (self.targets.includes(tr)) {
        // mask
        const mask = tr.querySelector('.hero')
        gsap.killTweensOf(mask)
        gsap.to(mask, {
          x: `${-maskPercent * self.direction}%`,
          duration: dragDuration,
          ease: dragEase,
        })
        const maskInner = mask.querySelector('.hero-inner')
        gsap.killTweensOf(maskInner)
        gsap.to(maskInner, {
          x: `${maskInnerPercent * self.direction}%`,
          opacity: 1 - maskInnerOpacity,
          duration: dragDuration,
          ease: dragEase,
        })
        // incomings
        const incomings = self.targets.filter(x => x.classList.contains('incoming'))
        for (const incoming of incomings) {
          incoming.classList.remove('incoming')
          // mask
          const mask = incoming.querySelector('.hero')
          gsap.killTweensOf(mask)
          gsap
            .to(mask, {
              x: `${-maskPercent * self.direction}%`,
              duration: dragDuration,
              ease: dragEase,
            })
            .eventCallback('onComplete', () => {
              incoming.classList.remove('!block')
            })
          const maskInner = mask.querySelector('.hero-inner')
          gsap.killTweensOf(maskInner)
          gsap.to(maskInner, {
            x: `${maskInnerPercent * self.direction}%`,
            opacity: 1 - maskInnerOpacity,
            duration: dragDuration,
            ease: dragEase,
          })
        }
      }
    }

    self.container.addEventListener('off.xt.slider', off, true) // useCapture event propagation

    // destroy

    selfDestroy = () => {
      scrollTrigger.kill()
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
  matches: '.demo--slider-absolute-scrolltrigger',
  mount: ({ ref }) => {
    const unmountSlider = mountSlider({ ref })

    // unmount

    return () => {
      unmountSlider()
    }
  },
})
