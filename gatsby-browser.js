/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

let keepSidebarScroll = 0

exports.onPreRouteUpdate = () => {
  // fix demo index when changing page
  document.documentElement.setAttribute('data-demo-index', '0')
  // autoclose
  dispatchEvent(new CustomEvent('autoclose.trigger.xt'))
  // keepSidebarScroll
  const sidebarArticle = document.querySelector('.gatsby_site_article_sidebar')
  if (sidebarArticle) {
    keepSidebarScroll = sidebarArticle.scrollTop
  }
}

exports.onRouteUpdate = () => {
  // keepSidebarScroll
  const sidebarArticle = document.querySelector('.gatsby_site_article_sidebar')
  if (sidebarArticle) {
    sidebarArticle.scrollTop = keepSidebarScroll
  }
  // @FIX popstate #gatbsy_open-full
  for (const link of document.querySelectorAll('.gatsby_btn-site_article_sidebar.active')) {
    link.addEventListener('click', e => {
      e.preventDefault()
      // no location.hash or page scroll to top
      history.pushState({}, '', '#')
      document.querySelector('#gatbsy_open-full-trigger').dispatchEvent(new CustomEvent('off.trigger.xt'))
    })
  }
}

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  // prevent scroll on href="#" or role="button"
  if (location.href === window.location.href) {
    return false
  }
  return true
}
