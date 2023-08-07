import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* mountFade */

const mountFade = ({ ref }) => {
  // check if already done for content added dinamically

  const items = ref.querySelectorAll('.xt-card:not(.faded)')
  for (const item of items) {
    item.classList.add('faded')
  }

  // fade

  gsap.set(items, {
    y: 15,
  })

  /***/
  ScrollTrigger.batch(items, {
    start: 'top bottom-=10%',
    end: 'bottom top+=10%',
    onEnter: batch => {
      gsap.killTweensOf(batch)
      gsap.to(batch, {
        opacity: 1,
        y: 0,
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
        y: -15,
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
        y: 0,
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
        y: 15,
        duration: 0.5,
        ease: 'quart.out',
        stagger: index => {
          return Math.min(0.6, index * 0.15)
        },
      })
    },
  })
  /***/

  // unmount

  return () => {}
}

/* mount */

Xt.mount({
  matches: '.demo--fade-distance',
  mount: ({ ref }) => {
    const unmountFade = mountFade({ ref })

    // unmount

    return () => {
      unmountFade()
    }
  },
})
