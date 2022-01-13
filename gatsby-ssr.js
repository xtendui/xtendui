// https://github.com/gatsbyjs/gatsby/issues/1526
// replace inline css with links

exports.onPreRenderHTML = ({ getHeadComponents }) => {
  if (process.env.NODE_ENV !== 'production') {
    return
  }

  const hc = getHeadComponents()
  hc.forEach(el => {
    if (el.type === 'style') {
      el.type = 'link'
      el.props.href = el.props['data-href']
      el.props.rel = 'stylesheet'
      el.props.type = 'text/css'

      delete el.props['data-href']
      delete el.props.dangerouslySetInnerHTML
    }
  })
}
