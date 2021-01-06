import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--parallax-range',
  mount: object => {
    // vars

    const trigger = object.querySelector('.box-0')

    // no scrub

    const scrollTrigger = {
      trigger: trigger,
      start: () => {
        // full range of animation also on top of the page
        const start = window.innerHeight - trigger.offsetTop
        return `top${start > 0 ? `+=${start}` : ''} bottom`
      },
      end: () => {
        // full range of animation also on bottom of the page
        const end = window.innerHeight - document.scrollingElement.scrollHeight + trigger.offsetTop + trigger.offsetHeight
        return `bottom${end > 0 ? `-=${end}` : ''} top`
      },
      scrub: 1.5,
      markers: true,
    }

    gsap
      .timeline({
        scrollTrigger: scrollTrigger,
      })
      .to(trigger, {
        x: '50vw',
        ease: 'quart.out',
      })
  },
})
