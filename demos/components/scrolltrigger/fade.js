import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

Xt.mount({
  matches: '.demo--fade',
  mount: ({ ref }) => {
    // check if already done for content added dinamically

    const items = ref.querySelectorAll('.xt-card:not(.faded)')
    for (const item of items) {
      item.classList.add('faded')
    }

    // fade

    /***/
    ScrollTrigger.batch(items, {
      once: true,
      onEnter: batch => {
        gsap.killTweensOf(batch)
        gsap.to(batch, {
          opacity: 1,
          duration: 0.5,
          ease: 'quart.out',
          stagger: index => {
            return Math.min(0.6, index * 0.15)
          },
        })
      },
    })
    /***/
  },
})
