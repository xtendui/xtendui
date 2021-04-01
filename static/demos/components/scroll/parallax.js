import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount({
  matches: '.demo--parallax',
  mount: ({ ref }) => {
    const unmountParallax = mountParallax({ ref })

    // unmount

    return () => {
      unmountParallax()
    }
  },
})

/* mountParallax */

const mountParallax = ({ ref }) => {
  // vars

  const trigger0 = ref.querySelector('.box-0')
  const trigger1 = ref.querySelector('.box-1')
  const trigger2 = ref.querySelector('.box-2')

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
      ease: 'quint.inOut',
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
      ease: 'quint.inOut',
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
      ease: 'quint.inOut',
    })

  // unmount

  return () => {}
}
