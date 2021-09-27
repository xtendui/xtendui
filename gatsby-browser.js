window.keepSidebarScroll = 0
window.overlayOpen = false
window.switchDemos = []

export const shouldUpdateScroll = ({ routerProps: { location }, prevRouterProps }) => {
  const { location: prevLocation } = prevRouterProps ?? {}
  // if changing page
  if (prevLocation) {
    // if new page
    if (location.pathname !== prevLocation.pathname) {
      // prevent scroll retention (e.g.: tooltip sidebar navigation) on href="#" or role="button"
      document.scrollingElement.scrollTop = 0
    }
  }
  return false
}

export const onPreRouteUpdate = ({ location, prevLocation }) => {
  const btn = document.querySelector('.gatsby_menu--button')
  // demoHash
  dispatchEvent(new CustomEvent('demoHashChange'))
  // keepSidebarScroll
  const overlay = document.querySelector('#gatsby_menu--overlay')
  const sidebar = document.querySelector('.gatsby_site-article_sidebar')
  if (overlay && sidebar) {
    window.keepSidebarScroll = overlay.scrollTop || sidebar.scrollTop
  }
  // if changing page
  if (prevLocation) {
    // if new page
    if (location.pathname !== prevLocation.pathname) {
      // switchDemos
      window.switchDemos = []
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
