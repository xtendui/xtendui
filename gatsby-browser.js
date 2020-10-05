/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

let keepSidebarScroll = 0

exports.onPreRouteUpdate = () => {
  // fix demo index when changing page
  document.documentElement.setAttribute('data-demo-index', '0')
  // closeauto
  dispatchEvent(new CustomEvent('closeauto.trigger.xt'))
  // keepSidebarScroll
  const sidebarArticle = document.querySelector('.gatsby_site_article_sidebar')
  if (sidebarArticle) {
    keepSidebarScroll = sidebarArticle.scrollTop
  }
}

exports.onRouteUpdate = () => {
  // scroll top
  document.scrollingElement.scrollTop = 0
  // keepSidebarScroll
  const sidebarArticle = document.querySelector('.gatsby_site_article_sidebar')
  if (sidebarArticle) {
    sidebarArticle.scrollTop = keepSidebarScroll
  }
  // scrollSidebarToContent
  require('assets/scripts/gatsby.js').gatsbySidebar()
  // @FIX popstate #gatsby_open-full
  for (const link of document.querySelectorAll('.gatsby_btn-site_article_sidebar.active')) {
    link.addEventListener('click', e => {
      e.preventDefault()
      // no location.hash or page scroll to top
      history.pushState({}, '', '#')
      document.querySelector('#gatsby_open-full-trigger').dispatchEvent(new CustomEvent('off.trigger.xt'))
    })
  }
}

exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  // prevent scroll on href="#" or role="button"
  return location.href !== window.location.href
}
