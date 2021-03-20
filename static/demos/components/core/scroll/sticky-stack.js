import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.CCC--sticky-stack',
  mount: ({ object }) => {
    const unmountSticky = mountSticky({ object })

    // unmount

    return () => {
      unmountSticky()
    }
  },
})

/* mountSticky */

const mountSticky = ({ object }) => {
  ScrollTrigger.create({
    trigger: object.querySelector('.sticky--stack-top'),
    start: 'top top',
    endTrigger: '.sticky--stack-topsecond',
    end: () => `top ${object.offsetHeight}px`,
    pin: true,
    pinSpacing: false,
  })

  ScrollTrigger.create({
    trigger: object.querySelector('.sticky--stack-topsecond'),
    start: 'top top',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })

  ScrollTrigger.create({
    trigger: object.querySelector('.sticky--stack-topthird'),
    start: () => `top top+=${document.querySelector('.sticky--stack-topsecond').offsetHeight}px`,
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })

  ScrollTrigger.create({
    trigger: object.querySelector('.sticky--stack-bottom'),
    start: 'bottom bottom',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })

  ScrollTrigger.create({
    trigger: object.querySelector('.sticky--stack-bottomsecond'),
    start: () => `bottom bottom-=${document.querySelector('.sticky--stack-bottom').offsetHeight}px`,
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })

  // unmount

  return () => {}
}
