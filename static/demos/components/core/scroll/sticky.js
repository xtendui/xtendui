import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--sticky-top',
  mount: object => {
    // sticky

    ScrollTrigger.create({
      trigger: object,
      start: 'top top',
      endTrigger: 'html',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
    })
  },
})

Xt.mount.push({
  matches: '.demo--sticky-bottom',
  mount: object => {
    // sticky

    ScrollTrigger.create({
      trigger: object,
      start: 'bottom bottom',
      endTrigger: 'html',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
    })
  },
})
