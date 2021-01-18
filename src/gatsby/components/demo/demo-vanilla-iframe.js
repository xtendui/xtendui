import React from 'react'
import PropTypes from 'prop-types'

import SEO from 'components/seo'
import Layout from 'components/layout-demo'

export default class DemoVanillaIframe extends React.Component {
  render() {
    const { demo } = this.props
    const seo = {}
    seo.title = 'Demo'
    seo.description = 'Demo'
    demo.path = `/demos/${demo.dirs.join('/')}/${demo.name}`.replace('/iframe', '').replace('src/gatsby/code/', '')
    demo.cssSource = `${demo.path}.css`
    demo.jsSource = `${demo.path}.js`
    return (
      <Layout demo={demo}>
        <SEO title={seo.title} description={seo.description} />
        <div id="body-outer">
          <div
            id="gatsby_body-inner"
            className="gatsby_demo_source--from"
            dangerouslySetInnerHTML={{ __html: demo.htmlSource }}
          />
        </div>
      </Layout>
    )
  }
}

DemoVanillaIframe.propTypes = {
  demo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    dirs: PropTypes.array,
    path: PropTypes.string,
    htmlSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    jsxSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    jsSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    cssSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  }),
}
