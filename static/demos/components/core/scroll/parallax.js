import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--parallax',
  mount: ({ object }) => {
    // vars

    const trigger0 = object.querySelector('.box-0')
    const trigger1 = object.querySelector('.box-1')
    const trigger2 = object.querySelector('.box-2')

    // no scrub

    const scrollTrigger0 = {
      trigger: trigger0,
    }

    gsap
      .timeline({
        scrollTrigger: scrollTrigger0,
      })
      .to(trigger0, {
        x: '50vw',
        ease: 'quart.out',
      })

    // scrub

    const scrollTrigger1 = {
      trigger: trigger1,
      scrub: true,
    }

    gsap
      .timeline({
        scrollTrigger: scrollTrigger1,
      })
      .to(trigger1, {
        x: '50vw',
        ease: 'quart.out',
      })

    // scrub value

    const scrollTrigger2 = {
      trigger: trigger2,
      scrub: 1.5,
    }

    gsap
      .timeline({
        scrollTrigger: scrollTrigger2,
      })
      .to(trigger2, {
        x: '50vw',
        ease: 'quart.out',
      })
  },
})
