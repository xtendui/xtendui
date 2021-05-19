import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount({
  matches: '.demo--fade-outside',
  mount: ({ ref }) => {
    const unmountFade = mountFade({ ref })

    // unmount

    return () => {
      unmountFade()
    }
  },
})

/* mountFade */

const mountFade = ({ ref }) => {
  // init

  fade({ ref })

  // unmount

  return () => {}
}

/* fade */

const fade = ({ ref }) => {
  // check if already done for content added dinamically

  const items = ref.querySelectorAll('.xt-card:not(.faded)')
  for (const item of items) {
    item.classList.add('faded')
  }

  // fade

  ScrollTrigger.batch(items, {
    once: true,
    onEnter: batch => {
      const triggers = batch.filter(x => x.dataset.fadesetup)
      gsap.killTweensOf(triggers)
      gsap.to(triggers, {
        opacity: 1,
        duration: 0.5,
        ease: 'quart.out',
        stagger: index => {
          return Math.min(index * 0.15, 0.6)
        },
      })
    },
    onRefresh: (batch, scrollTriggers) => {
      for (const self of scrollTriggers) {
        if (!self.trigger.dataset.fadesetup && self.progress === 0) {
          self.trigger.dataset.fadesetup = 'true'
          gsap.killTweensOf(self.trigger)
          gsap.set(self.trigger, {
            opacity: 0,
          })
        }
      }
    },
  })
}
