import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--fade-stagger',
  mount: object => {
    // vars

    const triggers = object.querySelectorAll('.card')

    // fade

    ScrollTrigger.batch(triggers, {
      start: 'top bottom-=10%',
      end: 'bottom top+=10%',
      onEnter: (batch, scrollTriggers) => {
        const direction = scrollTriggers[0].direction
        const y = direction > 0 ? -15 : 15
        gsap.killTweensOf(batch)
        gsap.set(batch, { y: y })
        gsap.to(batch, { opacity: 1, y: 0, duration: 0.5, ease: 'quart.out', stagger: 0.15 })
      },
      onLeave: (batch, scrollTriggers) => {
        const direction = scrollTriggers[0].direction
        const y = direction > 0 ? 15 : -15
        gsap.killTweensOf(batch)
        gsap.to(batch, { opacity: 0, y: y, duration: 0.5, ease: 'quart.out', stagger: 0.15 })
      },
      onEnterBack: (batch, scrollTriggers) => {
        const direction = scrollTriggers[0].direction
        const y = direction > 0 ? -15 : 15
        gsap.killTweensOf(batch)
        gsap.set(batch, { y: y })
        gsap.to(batch, { opacity: 1, y: 0, duration: 0.5, ease: 'quart.out', stagger: 0.15 })
      },
      onLeaveBack: (batch, scrollTriggers) => {
        const direction = scrollTriggers[0].direction
        const y = direction > 0 ? 15 : -15
        gsap.killTweensOf(batch)
        gsap.to(batch, { opacity: 0, y: y, duration: 0.5, ease: 'quart.out', stagger: 0.15 })
      },
    })
  },
})
