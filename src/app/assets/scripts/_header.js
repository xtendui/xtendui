import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* sticky header */

Xt.mount({
  matches: '.docs_site-header',
  mount: ({ ref }) => {
    // vars

    const sticky = ref

    // match media

    gsap.matchMedia().add('(max-width: 1023px)', () => {
      // sticky

      ScrollTrigger.create({
        trigger: sticky,
        start: 'top top',
        endTrigger: 'html',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
      })
    })
  },
})

/* menu overlay */

Xt.mount({
  matches: '.docs_menu--button',
  mount: ({ ref }) => {
    // vars

    const button = ref
    const sidebar = document.querySelector('.docs_site-article_sidebar')

    // overlay

    let self = new Xt.Overlay(button, {
      targets: '#docs_menu--overlay',
      duration: 500,
      matches: { '(min-width: 1024px)': { disabled: true } },
    })

    // sidebarContain

    const sidebarContain = () => {
      const sidebar = document.querySelector('.docs_site-article_sidebar')
      sidebar.scrollTop = window.keepSidebarScroll
      let sidebarActive = document.querySelector(
        '.docs_button-site_article_sidebar--sub.on, .docs_button-site_article_sidebar--sub.current'
      )
      if (sidebarActive) {
        const add = 25
        sidebarActive = sidebarActive.closest('.docs_site-header_item_container')
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

    // on

    const overlay = document.querySelector('#docs_menu--overlay')

    const on = () => {
      overlay.scrollTop = window.keepSidebarScroll
      if (sidebar) {
        sidebarContain()
      }
    }

    overlay.addEventListener('on.xt.overlay', on)
    on()

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})
