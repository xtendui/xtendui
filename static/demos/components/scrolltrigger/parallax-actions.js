import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
Xt.registerPlugin({ name: 'ScrollTrigger', plugin: ScrollTrigger })

Xt.mount({
  matches: '.demo--parallax-actions',
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

  // play pause reverse pause

  const item0 = items[0]

  const scrollTrigger0 = {
    trigger: item0,
    toggleActions: 'play pause reverse pause',
  }

  gsap
    .timeline({
      scrollTrigger: scrollTrigger0,
    })
    .to(item0, {
      x: '50vw',
      ease: 'quart.out',
    })

  // play restart resume restart

  const item1 = items[1]

  const scrollTrigger1 = {
    trigger: item1,
    toggleActions: 'play reset restart reset',
  }

  gsap
    .timeline({
      scrollTrigger: scrollTrigger1,
    })
    .to(item1, {
      x: '50vw',
      ease: 'quart.out',
    })

  // play pause resume reset

  const item2 = items[2]

  const scrollTrigger2 = {
    trigger: item2,
    toggleActions: 'play pause resume reset',
  }

  gsap
    .timeline({
      scrollTrigger: scrollTrigger2,
    })
    .to(item2, {
      x: '50vw',
      ease: 'quart.out',
    })
}
