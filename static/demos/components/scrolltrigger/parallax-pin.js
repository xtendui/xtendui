import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

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

  // bottom

  const item0 = items[0]

  const scrollTrigger0 = {
    trigger: item0,
    start: 'bottom bottom',
    end: 'top top',
    pin: true,
    scrub: true,
  }

  gsap
    .timeline({
      scrollTrigger: scrollTrigger0,
    })
    .to(item0, {
      x: '50vw',
      ease: 'quint.inOut',
    })

  // top

  const item1 = items[1]

  const scrollTrigger1 = {
    trigger: item1,
    start: 'top top',
    end: () => `top -${window.innerHeight}`,
    pin: true,
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

  // center

  const item2 = items[2]

  const scrollTrigger2 = {
    trigger: item2,
    start: 'center center',
    end: `top -${window.innerHeight / 2}`,
    pin: true,
    scrub: true,
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
