/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

let sidebarArticleScrolltop = 0

exports.onPreRouteUpdate = () => {
  // autoClose
  window.dispatchEvent(new CustomEvent('autoClose.xt')) // autoClose xt
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
