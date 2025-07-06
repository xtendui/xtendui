import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

Xt.mount({
  matches: '.demo--sticky-hide-direction-sub [data-node-sticky-hide]',
  mount: ({ ref }) => {
    // vars

    const sticky = ref

    // hide depending on inner (always before pin or bugs)

    ScrollTrigger.create({
      trigger: sticky,
      start: -1, // needs -1 because start trigger is sticky
      end: () => `top top-=${sticky.offsetHeight}`,
      onUpdate: self => {
        if (self.isActive && self.direction < 0 && sticky.classList.contains('scrolling-hide')) {
          sticky.classList.remove('scrolling-hide')
          gsap.killTweensOf(sticky)
          gsap.to(sticky, {
            y: 0,
            duration: 0.5,
            ease: 'quint.out',
          })
        } else if (!self.isActive && self.direction > 0 && !sticky.classList.contains('scrolling-hide')) {
          sticky.classList.add('scrolling-hide')
        }
      },
    })

    // sticky

    ScrollTrigger.create({
      trigger: sticky,
      start: 'top top',
      endTrigger: 'html',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      onUpdate: self => {
        // scrolling-down depending on scroll direction
        if (!self.getVelocity()) return // skip on initial
        if (
          sticky.classList.contains('scrolling-down') &&
          sticky.classList.contains('scrolling-hide') &&
          self.direction < 0
        ) {
          sticky.classList.remove('scrolling-down')
          gsap.killTweensOf(sticky)
          gsap.to(sticky, {
            y: 0,
            duration: 0.5,
            ease: 'quint.out',
          })
        } else if (
          !sticky.classList.contains('scrolling-down') &&
          sticky.classList.contains('scrolling-hide') &&
          self.direction > 0
        ) {
          sticky.classList.add('scrolling-down')
          gsap.killTweensOf(sticky)
          gsap.to(sticky, {
            y: -(sticky.offsetTop + sticky.offsetHeight),
            duration: 0.5,
            ease: 'quint.out',
          })
        }
      },
    })
  },
})

Xt.mount({
  matches: '.demo--sticky-hide-direction-sub [data-node-sticky-hide-sub]',
  mount: ({ ref }) => {
    // vars

    const sticky = ref
    const main = document.querySelector('[data-node-sticky-hide]')
    if (!main) return

    /***/
    // sticky

    ScrollTrigger.create({
      trigger: sticky,
      start: () => `top ${main.offsetTop + main.offsetHeight}px`,
      endTrigger: 'html',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      onUpdate: self => {
        // scrolling-down depending on scroll direction
        if (!self.getVelocity()) return // skip on initial
        if (
          !main.classList.contains('scrolling-down') &&
          main.classList.contains('scrolling-hide') &&
          self.direction < 0
        ) {
          gsap.killTweensOf(sticky)
          gsap.to(sticky, {
            y: 0,
            duration: 0.5,
            ease: 'quint.out',
          })
        } else if (
          main.classList.contains('scrolling-down') &&
          main.classList.contains('scrolling-hide') &&
          self.direction > 0
        ) {
          gsap.killTweensOf(sticky)
          gsap.to(sticky, {
            y: -(main.offsetTop + main.offsetHeight),
            duration: 0.5,
            ease: 'quint.out',
          })
        }
      },
    })
    /***/
  },
})
