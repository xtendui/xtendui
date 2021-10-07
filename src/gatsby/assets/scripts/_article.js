import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/* #gatsby_open-full-trigger */

Xt.mount({
  matches: '#gatsby_open-full-trigger',
  mount: ({ ref }) => {
    // init

    let self = new Xt.Toggle(ref, {
      targets: '#gatsby_open-full',
      closeDeep: '#gatsby_open-full_close',
      closeauto: true,
      classBody: 'xt-scrollbar-overlay demo-full-open',
    })

    // tooltip

    const close = document.querySelector('#gatsby_open-full_close')
    new Xt.Tooltip(close.parentNode, {
      position: 'bottom-end',
      duration: 300,
    })

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})

/* parallax hero */

Xt.mount({
  matches: '.gatsby_site-article_hero-inner',
  mount: ({ ref }) => {
    // sticky

    const heroParallax = {
      trigger: ref,
      start: 0,
      end: 'bottom top',
      scrub: true,
    }

    gsap.to(ref, {
      scrollTrigger: heroParallax,
      y: '50%',
    })
  },
})

/* video autoplay lazy */

Xt.mount({
  matches: '.gatsby_site-video',
  mount: ({ ref }) => {
    // vars

    const video = ref

    // observer

    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.intersectionRatio > 0 && video.paused) {
          video.play()
        } else if (entry.intersectionRatio == 0 && !video.paused) {
          video.pause()
        }
      }
    })
    observer.observe(video)

    // unmount

    return () => {
      observer.disconnect()
    }
  },
})
