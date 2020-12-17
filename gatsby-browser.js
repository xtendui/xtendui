/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

window.keepSidebarScroll = 0
window.menuOpen = false

exports.onPreRouteUpdate = ({ location, prevLocation }) => {
  const menu = document.querySelector('.gatsby_site_header_menu_link [data-xt-overlay]')
  const overlay = document.querySelector('#gatsby_menu--overlay')
  const sidebar = document.querySelector('.gatsby_site_article_sidebar')
  // keepSidebarScroll
  if (overlay && sidebar) {
    window.keepSidebarScroll = overlay.scrollTop || sidebar.scrollTop
  }
  // only if changing page
  if (prevLocation) {
    if (location.pathname !== prevLocation.pathname) {
      // close demo full
      const demoFull = document.querySelector('#gatsby_open-full-trigger.in')
      if (demoFull) {
        demoFull.dispatchEvent(new CustomEvent('off.trigger.xt.toggle'))
      }
      // fix demo index when changing page
      document.documentElement.setAttribute('data-demo-index', '0')
      // menuOpen
      if (menu) {
        window.menuOpen = menu.classList.contains('in')
      }
    }
  }
}

exports.onRouteUpdate = ({ location, prevLocation }) => {
  const menu = document.querySelector('.gatsby_site_header_menu_link [data-xt-overlay]')
  const overlay = document.querySelector('#gatsby_menu--overlay')
  const sidebar = document.querySelector('.gatsby_site_article_sidebar')
  // scroll top
  document.scrollingElement.scrollTop = 0
  // menuOpen
  if (menu && !window.menuOpen) {
    overlay.classList.remove('in', 'active')
  }
  // keepSidebarScroll
  if (overlay && sidebar) {
    if (matchMedia('(max-width: 767px)').matches) {
      overlay.classList.remove('xt-overlay-disabled')
    }
    overlay.scrollTop = window.keepSidebarScroll
    require('assets/scripts/gatsby.js').gatsbySidebarContain()
  }
  // only if changing page
  if (prevLocation) {
    if (location.pathname !== prevLocation.pathname) {
      // @FIX popstate #gatsby_open-full
      for (const link of document.querySelectorAll('.gatsby_btn-site_article_sidebar.active')) {
        link.addEventListener('click', e => {
          e.preventDefault()
          // no location.hash or page scroll to top
          history.pushState({}, '', '#')
          document.querySelector('#gatsby_open-full-trigger').dispatchEvent(new CustomEvent('off.trigger.xt.toggle'))
        })
      }
    } else if (location.hash === '') {
      // close if clicking the active link in the sidebar
      dispatchEvent(new CustomEvent('closeauto.trigger.xt'))
    }
  }
}

exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  // prevent scroll on href="#" or role="button"
  return location.href !== window.location.href
}
