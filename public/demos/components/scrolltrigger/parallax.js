import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* mountParallax */

const mountParallax = ({ ref }) => {
  // init

  parallax({ ref })

  // unmount

  return () => {}
}

/* parallax */

const parallax = ({ ref }) => {
  // check if already done for content added dinamically

  const items = ref.querySelectorAll('.box:not(.parallaxed)')
  for (const item of items) {
    item.classList.add('parallaxed')
  }

  // no scrub

  const item0 = items[0]

  const scrollTrigger0 = {
    trigger: item0,
  }

  gsap
    .timeline({
      scrollTrigger: scrollTrigger0,
    })
    .to(item0, {
      x: '50vw',
      ease: 'quint.inOut',
    })

  // scrub

  const item1 = items[1]

  const scrollTrigger1 = {
    trigger: item1,
    scrub: true,
  }

  gsap
    .timeline({
      scrollTrigger: scrollTrigger1,
    })
    .to(item1, {
      x: '50vw',
      ease: 'quint.inOut',
    })

  // scrub value

  const item2 = items[2]

  const scrollTrigger2 = {
    trigger: item2,
    scrub: 1,
  }

  gsap
    .timeline({
      scrollTrigger: scrollTrigger2,
    })
    .to(item2, {
      x: '50vw',
      ease: 'quint.inOut',
    })
}

/* mount */

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
