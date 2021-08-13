import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/* overlay mobile */

Xt.mount({
  matches: '.gatsby_menu--button',
  mount: ({ ref }) => {
    // vars

    const overlay = document.querySelector('#gatsby_menu--overlay')
    const sidebar = document.querySelector('.gatsby_site-article_sidebar')

    // overlay

    new Xt.Overlay(ref, {
      targets: '#gatsby_menu--overlay',
      appendTo: '.gatsby_site-wrapper',
      duration: 500,
      closeauto: false,
      matches: {
        '(min-width: 1024px)': {
          disabled: true,
        },
      },
    })

    if (overlay) {
      overlay.scrollTop = window.keepSidebarScroll
    }

    // sidebarContain

    const sidebarContain = () => {
      const sidebar = document.querySelector('.gatsby_site-article_sidebar')
      sidebar.scrollTop = window.keepSidebarScroll
      let sidebarActive = document.querySelector(
        '.gatsby_button-site_article_sidebar--sub.on, .gatsby_button-site_article_sidebar--sub.current'
      )
      if (sidebarActive) {
        const add = 25
        sidebarActive = sidebarActive.closest('.gatsby_site-header_item_container')
        const sidebarActiveTop = sidebarActive.getBoundingClientRect().top + sidebar.scrollTop
        const sidebarActiveBottom = sidebarActiveTop + sidebarActive.offsetHeight
        if (sidebar.scrollTop > sidebarActiveTop) {
          sidebar.scrollTop = sidebarActiveTop - add
        }
        if (sidebar.scrollTop + sidebar.offsetHeight < sidebarActiveBottom) {
          sidebar.scrollTop = sidebarActiveBottom - sidebar.offsetHeight + add
        }
      }
    }

    if (sidebar) {
      sidebarContain()
    }
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
