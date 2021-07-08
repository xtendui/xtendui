window.keepSidebarScroll = 0
window.overlayOpen = false
window.currentDemos = []

import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const shouldUpdateScroll = () => {
  // prevent scroll retention (e.g.: tooltip sidebar navigation) on href="#" or role="button"
  return false
}

const gatsbySidebarContain = () => {
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

export const onPreRouteUpdate = ({ location, prevLocation }) => {
  const btn = document.querySelector('.gatsby_menu--button')
  const overlay = document.querySelector('#gatsby_menu--overlay')
  const sidebar = document.querySelector('.gatsby_site-article_sidebar')
  // keepSidebarScroll
  if (overlay && sidebar) {
    window.keepSidebarScroll = overlay.scrollTop || sidebar.scrollTop
  }
  // if changing page
  if (prevLocation) {
    // if new page
    if (location.pathname !== prevLocation.pathname) {
      // currentDemos
      window.currentDemos = []
      // close demo full
      const demoFull = document.querySelector('#gatsby_open-full-trigger.on')
      if (demoFull) {
        demoFull.dispatchEvent(new CustomEvent('off.trigger.xt.toggle'))
      }
      // fix demo index when changing page
      document.documentElement.setAttribute('data-demo-index', '0')
      // overlayOpen
      if (btn) {
        window.overlayOpen = btn.classList.contains('on')
      }
      // close fullscreen and others
      dispatchEvent(new CustomEvent('closeauto.trigger.xt'))
    }
  }
}

export const onRouteUpdate = ({ location, prevLocation }) => {
  const overlay = document.querySelector('#gatsby_menu--overlay')
  const sidebar = document.querySelector('.gatsby_site-article_sidebar')
  // init
  Xt.init()
  // keepSidebarScroll
  if (overlay && sidebar) {
    overlay.scrollTop = window.keepSidebarScroll
    gatsbySidebarContain()
  }
  // if changing page
  if (prevLocation) {
    // if new page
    if (location.pathname !== prevLocation.pathname) {
      // scroll page to top
      document.scrollingElement.scrollTop = 0
      /* ScrollToPlugin refresh on route update */
      ScrollTrigger.refresh()
    }
  }
}
