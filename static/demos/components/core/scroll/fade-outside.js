import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--fade-inside',
  mount: object => {
    // fade

    ScrollTrigger.batch(object.querySelectorAll('.card'), {
      once: true,
      onEnter: batch => {
        gsap.killTweensOf(batch)
        gsap.to(batch, { opacity: 1, duration: 0.5, ease: 'quart.out', stagger: 0.15 })
      },
      onRefresh: (batch, scrollTriggers) => {
        for (const self of scrollTriggers) {
          if (self.progress !== 0) {
            // needs https://github.com/greensock/GSAP/issues/429
            // self.onEnter()
          }
        }
      },
    })
  },
})
