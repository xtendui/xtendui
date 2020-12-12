/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

let keepSidebarScroll = 0
let menuOpen = false

exports.onPreRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation) {
    if (location.pathname !== prevLocation.pathname) {
      const menu = document.querySelector('#gatsby_menu--overlay')
      const sidebarArticle = document.querySelector('.gatsby_site_article_sidebar')
      // close demo full
      const demoFull = document.querySelector('#gatsby_open-full-trigger.in')
      if (demoFull) {
        demoFull.dispatchEvent(new CustomEvent('off.trigger.xt.toggle'))
      }
      // fix demo index when changing page
      document.documentElement.setAttribute('data-demo-index', '0')
      // menuOpen
      if (menu) {
        menuOpen = menu.classList.contains('in')
      }
      // keepSidebarScroll
      if (menu && sidebarArticle) {
        keepSidebarScroll = menu.scrollTop || sidebarArticle.scrollTop
      }
    }
  }
}

exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation) {
    if (location.pathname !== prevLocation.pathname) {
      const menu = document.querySelector('#gatsby_menu--overlay')
      const sidebarArticle = document.querySelector('.gatsby_site_article_sidebar')
      // scroll top
      document.scrollingElement.scrollTop = 0
      // menuOpen
      if (menu && menuOpen) {
        menu.classList.add('in', 'active')
      }
      // keepSidebarScroll
      if (menu && sidebarArticle) {
        menu.scrollTop = keepSidebarScroll
        sidebarArticle.scrollTop = keepSidebarScroll
      }
      // scrollSidebarToContent
      require('assets/scripts/gatsby.js').gatsbySidebarContain()
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
