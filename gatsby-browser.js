/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

let sidebarArticleScrolltop = 0

exports.onPreRouteUpdate = () => {
  // fix demo index when changing page
  document.documentElement.setAttribute('data-demo-index', '0')
  // autoclose
  dispatchEvent(new CustomEvent('autoclose.trigger.xt'))
  // sidebarArticleScrolltop
  const sidebarArticle = document.querySelector('.gatsby_site_article_sidebar')
  if (sidebarArticle) {
    sidebarArticleScrolltop = sidebarArticle.scrollTop
  }
}

exports.onRouteUpdate = () => {
  // sidebarArticleScrolltop
  const sidebarArticle = document.querySelector('.gatsby_site_article_sidebar')
  if (sidebarArticle) {
    sidebarArticle.scrollTop = sidebarArticleScrolltop
  }
}
