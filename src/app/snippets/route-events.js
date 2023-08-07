export const onRouteUpdate = ({ pathname, prevPathname }) => {
  const btn = document.querySelector('.docs_menu--button')
  // use demoHashChange instead of hashchange we control when page changes with no hash
  dispatchEvent(new CustomEvent('demoHashChange'))
  // keepSidebarScroll
  const overlay = document.querySelector('#docs_menu--overlay')
  const sidebar = document.querySelector('.docs_site-article_sidebar')
  if (overlay && sidebar) {
    window.keepSidebarScroll = overlay.scrollTop || sidebar.scrollTop
  }
  // if changing page
  if (prevPathname) {
    // if new page
    if (pathname !== prevPathname) {
      // switchDemos
      window.switchDemos = []
      // close demo full
      const demoFull = document.querySelector('#docs_open-full-trigger.on')
      if (demoFull) {
        demoFull.dispatchEvent(new CustomEvent('off.trigger.xt.overlay'))
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
