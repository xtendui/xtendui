import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/* mountFade */

const mountFade = ({ ref }) => {
  // check if already done for content added dinamically

  const items = ref.querySelectorAll('.xt-card:not(.faded)')
  for (const item of items) {
    item.classList.add('faded')
  }

  // fade

  /***/
  ScrollTrigger.batch(items, {
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
    onLeave: batch => {
      gsap.killTweensOf(batch)
      gsap.to(batch, {
        opacity: 0,
        duration: 0.5,
        ease: 'quart.out',
        stagger: index => {
          return Math.min(0.6, index * 0.15)
        },
      })
    },
    onEnterBack: batch => {
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
    onLeaveBack: batch => {
      gsap.killTweensOf(batch)
      gsap.to(batch, {
        opacity: 0,
        duration: 0.5,
        ease: 'quart.out',
        stagger: index => {
          return Math.min(0.6, index * 0.15)
        },
      })
    },
    onRefresh: (batch, scrollTriggers) => {
      for (const self of scrollTriggers) {
        if (self.progress !== 0) {
          gsap.killTweensOf(self.trigger)
          gsap.set(self.trigger, {
            opacity: 1,
          })
        } else {
          gsap.killTweensOf(self.trigger)
          gsap.set(self.trigger, {
            opacity: 0,
          })
        }
      }
    },
  })
  /***/

  // unmount

  return () => {}
}

/* mount */

Xt.mount({
  matches: '.demo--fade-outside-infinite',
  mount: ({ ref }) => {
    const unmountFade = mountFade({ ref })

    // unmount

    return () => {
      unmountFade()
    }
  },
})
