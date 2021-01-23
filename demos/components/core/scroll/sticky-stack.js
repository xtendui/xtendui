import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--sticky-stack-top',
  mount: ({ object }) => {
    // sticky

    ScrollTrigger.create({
      trigger: object,
      start: 'top top',
      endTrigger: '.demo--sticky-stack-topsecond',
      end: () => `top ${object.offsetHeight}px`,
      pin: true,
      pinSpacing: false,
    })
  },
})

Xt.mount.push({
  matches: '.demo--sticky-stack-topsecond',
  mount: ({ object }) => {
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
  matches: '.demo--sticky-stack-topthird',
  mount: ({ object }) => {
    // sticky

    ScrollTrigger.create({
      trigger: object,
      start: () => `top top+=${document.querySelector('.demo--sticky-stack-topsecond').offsetHeight}px`,
      endTrigger: 'html',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
    })
  },
})

Xt.mount.push({
  matches: '.demo--sticky-stack-bottom',
  mount: ({ object }) => {
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

Xt.mount.push({
  matches: '.demo--sticky-stack-bottomsecond',
  mount: ({ object }) => {
    // sticky

    ScrollTrigger.create({
      trigger: object,
      start: () => `bottom bottom-=${document.querySelector('.demo--sticky-stack-bottom').offsetHeight}px`,
      endTrigger: 'html',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
    })
  },
})
