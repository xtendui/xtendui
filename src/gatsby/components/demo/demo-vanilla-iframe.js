import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import SEO from 'components/seo'
import Layout from 'components/layout-demo'

import { cssSource, jsSource } from 'assets/scripts/source'

export default class DemoVanillaIframe extends React.Component {
  render() {
    const { demo } = this.props
    const seo = {}
    seo.title = 'Demo'
    seo.description = 'Demo'
    demo.path = `private/demos/${demo.dirs.join('/')}/${demo.name}`.replace('/iframe', '').replace('src/gatsby/code/', '')
    return (
      <StaticQuery
        query={graphql`
          query {
            allFile {
              files: edges {
                file: node {
                  relativePath
                }
              }
            }
          }
        `}
        render={data => (
          <Layout demo={demo}>
            <SEO title={seo.title} description={seo.description} />
            <div id="body-outer">
              {
                data.allFile.files.filter(x => x.file.relativePath === `${demo.path}.css`).map(() => (demo.cssSource = cssSource(demo))) && <div /> // @FIX react render string
              }
              {
                data.allFile.files.filter(x => x.file.relativePath === `${demo.path}.js`).map(() => (demo.jsSource = jsSource(demo))) && <div /> // @FIX react render string
              }
              <div id="gatsby_body-inner" className="gatsby_demo_source--from" dangerouslySetInnerHTML={{ __html: demo.htmlSource }} />
            </div>
          </Layout>
        )}
      />
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
