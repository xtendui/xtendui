import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--parallax-multiple',
  mount: ({ object }) => {
    // vars

    const trigger0 = object.querySelector('.box-0')

    // translate and rotare

    const scrollTrigger0 = {
      trigger: trigger0,
      scrub: 1.5,
    }

    gsap
      .timeline({
        scrollTrigger: scrollTrigger0,
      })
      .to(trigger0, {
        x: '50vw',
      })

    gsap
      .timeline({
        scrollTrigger: scrollTrigger0,
      })
      .to(trigger0, {
        rotate: '180deg',
        ease: 'quint.inOut',
      })

    // scale

    const scrollTrigger1 = {
      trigger: trigger0,
      scrub: true,
    }

    gsap
      .timeline({
        scrollTrigger: scrollTrigger1,
      })
      .to(trigger0, {
        scale: 1.5,
        ease: 'quint.inOut',
      })
  },
})
