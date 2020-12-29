import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--sticky-hide-top',
  mount: object => {
    // vars

    const stickyInner = object.querySelector('.demo--sticky-hide-top-main')

    // sticky

    gsap.to(object, {
      scrollTrigger: {
        trigger: object,
        start: 'top top',
        endTrigger: 'html',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
      },
    })

    // scrolling-down depending on scroll direction

    gsap.to(object, {
      scrollTrigger: {
        trigger: object,
        start: -1,
        endTrigger: 'html',
        end: 'bottom top',
        onUpdate: self => {
          if (!self.getVelocity()) return // skip on initial
          if (object.classList.contains('scrolling-down') && object.classList.contains('hide') && self.direction < 0) {
            object.classList.remove('scrolling-down')
            gsap.killTweensOf(object)
            gsap.to(object, { y: 0, duration: 0.5, ease: 'quart.out' })
          } else if (!object.classList.contains('scrolling-down') && object.classList.contains('hide') && self.direction > 0) {
            object.classList.add('scrolling-down')
            gsap.killTweensOf(object)
            gsap.to(object, { y: -stickyInner.offsetHeight, duration: 0.5, ease: 'quart.out' })
          }
        },
      },
    })

    // hide depending on .demo--sticky-hide-content

    gsap.to(object, {
      scrollTrigger: {
        trigger: object,
        start: -1,
        endTrigger: document.querySelector('.demo--sticky-hide-content'),
        end: `bottom top+=${stickyInner.offsetHeight}`,
        onUpdate: self => {
          if (self.isActive && object.classList.contains('hide')) {
            object.classList.remove('hide')
            gsap.killTweensOf(object)
            gsap.to(object, { y: 0, duration: 0.5, ease: 'quart.out' })
          } else if (!self.isActive && !object.classList.contains('hide')) {
            object.classList.add('hide')
          }
        },
      },
    })
  },
})
