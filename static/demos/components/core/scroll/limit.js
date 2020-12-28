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
        endTrigger: '.demo--sticky-limit-topafter',
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
  matches: '.demo--sticky-limit-topafter',
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
  matches: '.demo--sticky-limit-bottom',
  mount: object => {
    // sticky

    gsap.to(object, {
      scrollTrigger: {
        trigger: object,
        start: 'bottom bottom',
        endTrigger: '.demo--sticky-limit-bottomafter',
        end: 'top bottom',
        pin: true,
        pinSpacing: false,
      },
    })
  },
})

Xt.mount.push({
  matches: '.demo--sticky-limit-bottomafter',
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
