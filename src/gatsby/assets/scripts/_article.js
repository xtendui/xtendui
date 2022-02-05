import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* #gatsby_jumptocontent */

Xt.mount({
  matches: '#gatsby_jumptocontent',
  mount: ({ ref }) => {
    // vars

    const jumptocontent = ref

    // focusIn

    const focusIn = e => {
      const active = jumptocontent.contains(e.target)
      if (active) {
        Xt.on({ el: jumptocontent })
      } else {
        Xt.off({ el: jumptocontent })
      }
    }

    document.addEventListener('focusin', focusIn)

    // unmount

    return () => {
      document.removeEventListener('focusin', focusIn)
    }
  },
})

/* #gatsby_open-full-trigger */

Xt.mount({
  matches: '#gatsby_open-full-trigger',
  mount: ({ ref }) => {
    // init

    let self = new Xt.Overlay(ref, {
      targets: '#gatsby_open-full',
      closeDeep: '#gatsby_open-full_close',
      closeauto: true,
      closeInside: false,
      classBody: 'xt-scrollbar-overlay demo-full-open',
      appendTo: false,
      focusLimit: false,
      a11y: false,
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
    let paused = true
    let playing = false
    let timeout

    // observer

    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.intersectionRatio > 0 && paused) {
          clearTimeout(timeout)
          // fix safari doesn't play video when changing page
          timeout = setTimeout(() => {
            paused = false
            playing = video.play()
          }, 50)
        } else if (entry.intersectionRatio == 0 && !paused && playing) {
          paused = true
          playing.then(() => {
            // play is async need to check it before pause
            video.pause()
            playing = false
          })
          clearTimeout(timeout)
        }
      }
    })

    observer.observe(video)

    // unmount

    return () => {
      clearTimeout(timeout)
      observer.disconnect()
    }
  },
})
