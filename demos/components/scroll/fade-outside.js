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
  // fade

  const fade = ({ container }) => {
    // items inside container and not already faded
    const items = container.querySelectorAll('.xt-card:not(.faded)')
    for (const item of items) {
      item.classList.add('faded')
    }
    // fade
    ScrollTrigger.batch(items, {
      once: true,
      onEnter: batch => {
        const triggers = batch.filter(x => x.dataset.todo)
        gsap.killTweensOf(triggers)
        gsap.to(triggers, {
          opacity: 1,
          duration: 0.5,
          ease: 'quart.out',
          stagger: 0.15,
        })
      },
      onRefresh: (batch, scrollTriggers) => {
        for (const self of scrollTriggers) {
          if (self.progress === 0) {
            self.trigger.dataset.todo = 'true'
            gsap.killTweensOf(self.trigger)
            gsap.set(self.trigger, {
              opacity: 0,
            })
          }
        }
      },
    })
  }

  fade({ container: ref })

  // unmount

  return () => {}
}
