import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--sticky-limit-top',
  mount: object => {
    // sticky

    gsap.to(object, {
      scrollTrigger: {
        trigger: object,
        start: 'top top',
        endTrigger: '.demo--sticky-limit-topsecond',
        end: self => {
          return `top ${self.trigger.offsetHeight}px`
        },
        pin: true,
        pinSpacing: false,
      },
    })
  },
})

Xt.mount.push({
  matches: '.demo--sticky-limit-topsecond',
  mount: object => {
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
  },
})

Xt.mount.push({
  matches: '.demo--sticky-limit-topthird',
  mount: object => {
    // sticky

    gsap.to(object, {
      scrollTrigger: {
        trigger: object,
        start: () => {
          const el = document.querySelector('.demo--sticky-limit-topsecond')
          return `top top+=${el.offsetHeight}px`
        },
        endTrigger: 'html',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
      },
    })
  },
})

Xt.mount.push({
  matches: '.demo--sticky-limit-bottom',
  mount: object => {
    // sticky

    gsap.to(object, {
      scrollTrigger: {
        trigger: object,
        start: 'bottom bottom',
        endTrigger: 'html',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
      },
    })
  },
})

Xt.mount.push({
  matches: '.demo--sticky-limit-bottomsecond',
  mount: object => {
    // sticky

    gsap.to(object, {
      scrollTrigger: {
        trigger: object,
        start: () => {
          const el = document.querySelector('.demo--sticky-limit-bottom')
          return `bottom bottom-=${el.offsetHeight}px`
        },
        endTrigger: 'html',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
      },
    })
  },
})
