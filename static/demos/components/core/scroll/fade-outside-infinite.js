import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--fade-outside-infinite',
  mount: object => {
    // vars

    const triggers = object.querySelectorAll('.card')

    // fade

    ScrollTrigger.batch(triggers, {
      onEnter: batch => {
        gsap.killTweensOf(batch)
        gsap.to(batch, { opacity: 1, duration: 0.5, ease: 'quart.out', stagger: 0.15 })
      },
      onLeave: batch => {
        gsap.killTweensOf(batch)
        gsap.to(batch, { opacity: 0, duration: 0.5, ease: 'quart.out', stagger: 0.15 })
      },
      onEnterBack: batch => {
        gsap.killTweensOf(batch)
        gsap.to(batch, { opacity: 1, duration: 0.5, ease: 'quart.out', stagger: 0.15 })
      },
      onLeaveBack: batch => {
        gsap.killTweensOf(batch)
        gsap.to(batch, { opacity: 0, duration: 0.5, ease: 'quart.out', stagger: 0.15 })
      },
      onRefresh: (batch, scrollTriggers) => {
        for (const self of scrollTriggers) {
          if (self.progress !== 0) {
            gsap.set(self.trigger, { opacity: 1 })
          } else {
            gsap.set(self.trigger, { opacity: 0 })
          }
        }
      },
    })
  },
})