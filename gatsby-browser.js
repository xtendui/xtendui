window.keepSidebarScroll = 0
window.overlayOpen = false
window.currentDemos = []

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

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
  const btn = document.querySelector('.gatsby_button--overlay')
  const overlay = document.querySelector('#gatsby_menu--overlay')
  const sidebar = document.querySelector('.gatsby_site-article_sidebar')
  // instant animations
  document.querySelector('body').classList.remove('xt-ready')
  // keepSidebarScroll
  if (overlay && sidebar) {
    window.keepSidebarScroll = overlay.scrollTop || sidebar.scrollTop
  }
  // only if changing page
  if (prevLocation) {
    // only if new page
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
    }
  }
}

export const onRouteUpdate = ({ location, prevLocation }) => {
  const btn = document.querySelector('.gatsby_button--overlay')
  const overlay = document.querySelector('#gatsby_menu--overlay')
  const sidebar = document.querySelector('.gatsby_site-article_sidebar')
  // only if changing page
  if (prevLocation) {
    // only if new page
    if (location.pathname !== prevLocation.pathname) {
      // scroll page to top
      document.scrollingElement.scrollTop = 0
      // close fullscreen and others
      dispatchEvent(new CustomEvent('closeauto.trigger.xt'))
    } else {
      dispatchEvent(new CustomEvent('hashchange'))
    }
  }
  // instant animations
  requestAnimationFrame(() => {
    document.querySelector('body').classList.add('xt-ready')
  })
  // keepSidebarScroll
  if (overlay && sidebar) {
    // overlayOpen
    if (btn && !window.overlayOpen) {
      overlay.classList.remove('on')
    }
    // instant enable
    if (matchMedia('(max-width: 1023px)').matches) {
      overlay.classList.remove('xt-overlay-disabled')
      document.querySelector('.gatsby_site-header').classList.remove('xt-sticky-disabled')
    }
    // scroll
    overlay.scrollTop = window.keepSidebarScroll
    // contain
    gatsbySidebarContain()
  }
  /* ScrollToPlugin refresh on route update put after route update */
  ScrollTrigger.refresh()
}

export const shouldUpdateScroll = () => {
  // prevent scroll retention (e.g.: tooltip sidebar navigation) on href="#" or role="button"
  return false
}
