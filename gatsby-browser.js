/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.onPreRouteUpdate = ({ location, prevLocation }) => {
  window.dispatchEvent(new CustomEvent('autoClose.xt')) // autoClose xt
}
