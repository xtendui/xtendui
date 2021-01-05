import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--parallax',
  mount: object => {
    // vars

    const triggers = object.querySelectorAll('.card')

    // parallax

    for (const trigger of triggers) {
      // setup

      gsap.set(trigger, { opacity: 0 })

      // leave

      const scrollTriggerLeave = {
        trigger: trigger,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.75,
      }

      gsap
        .timeline({
          scrollTrigger: scrollTriggerLeave,
        })
        .set(trigger, { y: 0, opacity: 1 })
        .to(trigger, {
          opacity: 0,
          y: -30,
          duration: 0.75,
          ease: 'quart.out',
        })

      // enter

      const scrollTriggerEnter = {
        trigger: trigger,
        start: 'top bottom-=50px',
        end: 'bottom bottom-=50px',
        scrub: 0.75,
      }

      gsap
        .timeline({
          scrollTrigger: scrollTriggerEnter,
        })
        .set(trigger, { y: 30, opacity: 0 })
        .to(trigger, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'quart.out',
        })
    }
  },
})
