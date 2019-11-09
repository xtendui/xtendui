/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

let sidebarArticleScrolltop = 0

exports.onPreRouteUpdate = ({ location, prevLocation }) => {
  // autoclose
  window.dispatchEvent(new CustomEvent('autoclose.xt')) // autoclose xt
  // sidebarArticleScrolltop
  const sidebarArticle = document.querySelector('.gatsby_site_article_sidebar');
  if (sidebarArticle) {
    sidebarArticleScrolltop = sidebarArticle.scrollTop
  }
}

exports.onRouteUpdate = ({ location, prevLocation }) => {
  // sidebarArticleScrolltop
  const sidebarArticle = document.querySelector('.gatsby_site_article_sidebar');
  if (sidebarArticle) {
    sidebarArticle.scrollTop = sidebarArticleScrolltop
  }
}
