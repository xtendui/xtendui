import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--sticky-matchmedia',
  mount: ({ object }) => {
    // match media

    ScrollTrigger.matchMedia({
      '(max-width: 639px)': () => {
        // sticky

        ScrollTrigger.create({
          trigger: object,
          start: 'top top',
          endTrigger: 'html',
          end: 'bottom top',
          pin: true,
          pinSpacing: false,
        })
      },
    })
  },
})
