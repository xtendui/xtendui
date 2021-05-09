import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount({
  matches: '.demo--sticky-stack',
  mount: ({ ref }) => {
    const unmountSticky = mountSticky({ ref })

    // unmount

    return () => {
      unmountSticky()
    }
  },
})

/* mountSticky */

const mountSticky = ({ ref }) => {
  ScrollTrigger.create({
    trigger: ref.querySelector('.sticky--stack-top'),
    start: 'top top',
    endTrigger: '.sticky--stack-topsecond',
    end: () => `top ${document.querySelector('.sticky--stack-topsecond').offsetHeight}px`,
    pin: true,
    pinSpacing: false,
  })

  ScrollTrigger.create({
    trigger: ref.querySelector('.sticky--stack-topsecond'),
    start: 'top top',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
    toggleClass: 'on',
  })

  ScrollTrigger.create({
    trigger: ref.querySelector('.sticky--stack-topthird'),
    start: () => `top top+=${document.querySelector('.sticky--stack-topsecond').offsetHeight}px`,
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
    onToggle: scrollTrigger => {
      // refresh because height start changes
      scrollTrigger.refresh()
    },
  })

  ScrollTrigger.create({
    trigger: ref.querySelector('.sticky--stack-bottom'),
    start: 'bottom bottom',
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })

  ScrollTrigger.create({
    trigger: ref.querySelector('.sticky--stack-bottomsecond'),
    start: () => `bottom bottom-=${document.querySelector('.sticky--stack-bottom').offsetHeight}px`,
    endTrigger: 'html',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
  })

  // unmount

  return () => {}
}
