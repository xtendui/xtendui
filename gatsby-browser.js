/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

require("assets/icons-theme/style.css")
require("assets/styles/theme.less")

exports.onPreRouteUpdate = ({ location, prevLocation }) => {
  // autoClose xt
  window.dispatchEvent(new CustomEvent('autoClose.xt'));
}
