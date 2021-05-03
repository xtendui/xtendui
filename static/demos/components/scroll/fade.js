import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount({
  matches: '.demo--fade',
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
    // check if already faded for content added dynamically
    const items = container.querySelectorAll('.xt-card:not(.faded)')
    for (const item of items) {
      item.classList.add('faded')
    }
    // fade
    ScrollTrigger.batch(items, {
      once: true,
      onEnter: batch => {
        gsap.killTweensOf(batch)
        gsap.to(batch, {
          opacity: 1,
          duration: 0.5,
          ease: 'quart.out',
          stagger: index => {
            return Math.min(index * 0.15, 0.6)
          },
        })
      },
    })
  }

  fade({ container: ref })

  // unmount

  return () => {}
}
