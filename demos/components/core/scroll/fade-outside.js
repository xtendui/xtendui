import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--fade-outside .card', // add here all fade selectors css and js
  mount: ({ object, mount }) => {
    // multiple mount object with raf

    mount.triggers = mount.triggers ? mount.triggers : []
    mount.triggers.push(object)
    cancelAnimationFrame(mount.raf)
    mount.raf = requestAnimationFrame(() => {
      // reset mount object

      const triggers = mount.triggers
      mount.triggers = []

      // fade

      ScrollTrigger.batch(triggers, {
        once: true,
        onEnter: batch => {
          const triggers = batch.filter(x => x.dataset.todo)
          gsap.killTweensOf(triggers)
          gsap.to(triggers, { opacity: 1, duration: 0.5, ease: 'quart.out', stagger: 0.15 })
        },
        onRefresh: (batch, scrollTriggers) => {
          for (const self of scrollTriggers) {
            if (self.progress === 0) {
              self.trigger.dataset.todo = 'true'
              gsap.killTweensOf(self.trigger)
              gsap.set(self.trigger, { opacity: 0 })
            }
          }
        },
      })
    })
  },
})
