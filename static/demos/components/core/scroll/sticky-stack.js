import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--sticky-stack-top',
  mount: object => {
    // sticky

    gsap.to(object, {
      scrollTrigger: {
        trigger: object,
        start: 'top top',
        endTrigger: '.demo--sticky-stack-topsecond',
        end: () => {
          return `top ${object.offsetHeight}px`
        },
        pin: true,
        pinSpacing: false,
      },
    })
  },
})

Xt.mount.push({
  matches: '.demo--sticky-stack-topsecond',
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
  matches: '.demo--sticky-stack-topthird',
  mount: object => {
    // sticky

    gsap.to(object, {
      scrollTrigger: {
        trigger: object,
        start: () => {
          const el = document.querySelector('.demo--sticky-stack-topsecond')
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
  matches: '.demo--sticky-stack-bottom',
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
  matches: '.demo--sticky-stack-bottomsecond',
  mount: object => {
    // sticky

    gsap.to(object, {
      scrollTrigger: {
        trigger: object,
        start: () => {
          const el = document.querySelector('.demo--sticky-stack-bottom')
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
