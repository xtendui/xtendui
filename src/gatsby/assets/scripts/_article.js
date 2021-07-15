import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const classes = require('src/gatsby/templates/snippets/classes').classes

/* #gatsby_open-full-trigger */

Xt.mount({
  matches: '#gatsby_open-full-trigger',
  mount: ({ ref }) => {
    // init

    let self = new Xt.Toggle(ref, {
      targets: '#gatsby_open-full',
      closeDeep: ':scope > .xt-dismiss',
      closeauto: true,
      classBody: 'xt-scrollbar-overlay demo-full-open',
    })

    // tooltip

    const close = document.querySelector('#gatsby_open-full > .xt-dismiss')
    const closeUid = Xt.getuniqueId()
    document.querySelector('#gatsby_open-full').append(
      Xt.node({
        str: `
<div id="tooltip--close-${closeUid}" class="xt-tooltip xt-tooltip--gatsby p-2 group">
  <div class="relative ${classes.tooltipSm()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0">
    Close Fullscreen
  </div>
</div>`,
      })
    )
    new Xt.Tooltip(close, {
      targets: `#tooltip--close-${closeUid}`,
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
