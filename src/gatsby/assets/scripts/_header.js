import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/* overlay mobile */

Xt.mount({
  matches: '.gatsby_button--overlay',
  mount: ({ ref }) => {
    // overlay

    new Xt.Overlay(ref, {
      targets: '#gatsby_menu--overlay',
      appendTo: false,
      disabled: true,
      matches: {
        '(max-width: 1023px)': {
          disabled: false,
        },
      },
    })
  },
})

/* sticky header */

Xt.mount({
  matches: '.gatsby_site-header',
  mount: ({ ref }) => {
    // match media

    ScrollTrigger.matchMedia({
      '(max-width: 1023px)': () => {
        // sticky

        ScrollTrigger.create({
          trigger: ref,
          start: 'top top',
          endTrigger: 'html',
          end: 'bottom top',
          pin: true,
          pinSpacing: false,
        })
      },
    })
  },
})
