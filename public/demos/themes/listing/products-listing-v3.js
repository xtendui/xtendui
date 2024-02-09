import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}
import { CustomEase } from 'gsap/CustomEase'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(CustomEase)
}
import 'xtendui/src/slider'

/* CustomEase */

CustomEase.create('products-listing-v3-out', '0, 0.97, 0.43, 1')

/* mountFade */

const mountFade = ({ ref }) => {
  // vars

  const scrollScale = 1.1

  // check if already done for content added dinamically

  const items = ref.querySelectorAll('.xt-media:not(.faded)')
  for (const item of items) {
    item.classList.add('faded')
  }

  // fade

  /***/
  ScrollTrigger.batch(items, {
    start: () => `top bottom-=${window.innerHeight / 4}px`,
    end: () => `bottom top+=${window.innerHeight / 4}px`,
    once: true,
    onEnter: batch => {
      gsap.killTweensOf(batch)
      gsap.set(batch, {
        scale: scrollScale,
        opacity: 0,
      })
      gsap.to(batch, {
        scale: 1,
        opacity: 1,
        ease: 'products-listing-v3-out',
        duration: 2,
        stagger: index => {
          return Math.min(index * 0.1, 2)
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
  matches: '.demo--products-listing-v3',
  mount: ({ ref }) => {
    const unmountFade = mountFade({ ref })

    // unmount

    return () => {
      unmountFade()
    }
  },
})
