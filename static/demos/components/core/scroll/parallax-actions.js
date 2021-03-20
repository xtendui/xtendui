import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.CCC--parallax-actions',
  mount: ({ object }) => {
    const unmountParallax = mountParallax({ object })

    // unmount

    return () => {
      unmountParallax()
    }
  },
})

/* mountParallax */

const mountParallax = ({ object }) => {
  // vars

  const trigger0 = object.querySelector('.box-0')
  const trigger1 = object.querySelector('.box-1')
  const trigger2 = object.querySelector('.box-2')

  // play pause reverse pause

  const scrollTrigger0 = {
    trigger: trigger0,
    toggleActions: 'play pause reverse pause',
  }

  gsap
    .timeline({
      scrollTrigger: scrollTrigger0,
    })
    .to(trigger0, {
      x: '50vw',
      ease: 'quart.out',
    })

  // play restart resume restart

  const scrollTrigger1 = {
    trigger: trigger1,
    toggleActions: 'play reset restart reset',
  }

  gsap
    .timeline({
      scrollTrigger: scrollTrigger1,
    })
    .to(trigger1, {
      x: '50vw',
      ease: 'quart.out',
    })

  // play pause resume reset

  const scrollTrigger2 = {
    trigger: trigger2,
    toggleActions: 'play pause resume reset',
  }

  gsap
    .timeline({
      scrollTrigger: scrollTrigger2,
    })
    .to(trigger2, {
      x: '50vw',
      ease: 'quart.out',
    })

  // unmount

  return () => {}
}
