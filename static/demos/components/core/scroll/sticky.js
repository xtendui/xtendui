import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--sticky-position-top',
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
  matches: '.demo--sticky-position-bottom',
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
