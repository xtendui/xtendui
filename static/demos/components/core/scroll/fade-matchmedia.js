import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--fade-matchmedia .card', // add here all fade selectors css and js
  mount: ({ object, mount }) => {
    // multiple mount object with raf

    mount.triggers = mount.triggers ? mount.triggers : []
    mount.triggers.push(object)
    cancelAnimationFrame(mount.raf)
    mount.raf = requestAnimationFrame(() => {
      // reset mount object

      const triggers = mount.triggers
      mount.triggers = []

      // match media

      ScrollTrigger.matchMedia({
        '(max-width: 639px)': () => {
          // fade

          ScrollTrigger.batch(triggers, {
            onEnter: batch => {
              gsap.killTweensOf(batch)
              gsap.set(batch, { opacity: 0 })
              gsap.to(batch, {
                opacity: 1,
                duration: 0.5,
                ease: 'quart.out',
                stagger: 0.15,
              })
            },
            onLeave: batch => {
              gsap.killTweensOf(batch)
              gsap.to(batch, {
                opacity: 0,
                duration: 0.5,
                ease: 'quart.out',
                stagger: 0.15,
              })
            },
            onEnterBack: batch => {
              gsap.killTweensOf(batch)
              gsap.set(batch, { opacity: 0 })
              gsap.to(batch, {
                opacity: 1,
                duration: 0.5,
                ease: 'quart.out',
                stagger: 0.15,
              })
            },
            onLeaveBack: batch => {
              gsap.killTweensOf(batch)
              gsap.to(batch, {
                opacity: 0,
                duration: 0.5,
                ease: 'quart.out',
                stagger: 0.15,
              })
            },
          })
        },
        '(min-width: 640px)': () => {
          // fade

          for (const trigger of triggers) {
            gsap.set(trigger, { opacity: 1 })
          }
        },
      })
    })
  },
})
