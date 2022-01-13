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

    // scrollTrigger

    const scrollTrigger = {
      trigger: item,
      start: () => {
        // full range of animation also on top of the page
        const start = window.innerHeight - item.offsetTop
        return `top${start > 0 ? `+=${start}` : ''} bottom`
      },
      end: () => {
        // full range of animation also on bottom of the page
        const end = window.innerHeight - document.scrollingElement.scrollHeight + item.offsetTop + item.offsetHeight
        return `bottom${end > 0 ? `-=${end}` : ''} top`
      },
      scrub: 1,
      markers: true,
    }

    gsap
      .timeline({
        scrollTrigger: scrollTrigger,
      })
      .to(item, {
        x: '50vw',
        ease: 'quint.inOut',
      })
  }
}

/* mount */

Xt.mount({
  matches: '.demo--parallax-range',
  mount: ({ ref }) => {
    const unmountParallax = mountParallax({ ref })

    // unmount

    return () => {
      unmountParallax()
    }
  },
})
