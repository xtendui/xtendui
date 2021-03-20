import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.CCC--fade-inside',
  mount: ({ object }) => {
    const unmountFade = mountFade({ object })

    // unmount

    return () => {
      unmountFade()
    }
  },
})

/* mountFade */

const mountFade = ({ object }) => {
  const items = object.querySelectorAll('.xt-card')

  // fade

  ScrollTrigger.batch(items, {
    once: true,
    onEnter: batch => {
      const triggers = batch.filter(x => !x.dataset.animated)
      if (triggers.length) {
        gsap.killTweensOf(triggers)
        gsap.to(triggers, {
          opacity: 1,
          duration: 0.5,
          ease: 'quart.out',
          stagger: 0.15,
        })
      }
    },
    onRefresh: (batch, scrollTriggers) => {
      for (const self of scrollTriggers) {
        if (self.progress === 0) {
          self.trigger.dataset.animated = 'true'
          gsap.killTweensOf(self.trigger)
          gsap.set(self.trigger, { opacity: 1 })
        }
      }
    },
  })

  // unmount

  return () => {}
}
