/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

window.keepSidebarScroll = 0
window.overlayOpen = false

exports.onPreRouteUpdate = ({ location, prevLocation }) => {
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
    if (location.pathname !== prevLocation.pathname) {
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

exports.onRouteUpdate = ({ location, prevLocation }) => {
  const btn = document.querySelector('.gatsby_button--overlay')
  const overlay = document.querySelector('#gatsby_menu--overlay')
  const sidebar = document.querySelector('.gatsby_site-article_sidebar')
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
    require('src/gatsby/assets/scripts/gatsby.js').gatsbySidebarContain()
  }
  // only if changing page
  if (prevLocation) {
    if (location.pathname !== prevLocation.pathname) {
      // scroll top
      document.scrollingElement.scrollTop = 0
      // fix popstate #gatsby_open-full
      for (const link of document.querySelectorAll('.gatsby_button-site_article_sidebar.on')) {
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
