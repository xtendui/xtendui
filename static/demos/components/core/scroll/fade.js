import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.CCC--fade',
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
      gsap.killTweensOf(batch)
      gsap.to(batch, {
        opacity: 1,
        duration: 0.5,
        ease: 'quart.out',
        stagger: 0.15,
      })
    },
  })

  // unmount

  return () => {}
}
