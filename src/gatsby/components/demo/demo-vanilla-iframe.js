import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import SEO from 'components/seo'
import Layout from 'components/layout-demo'

import { cssSource, jsSource } from 'assets/scripts/source'

class DemoVanillaIframe extends React.Component {
  render() {
    const { demo } = this.props
    const seo = {}
    seo.title = demo.name
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
          <Layout seo={seo} demo={demo}>
            <SEO title={seo.title} />
            <div id="body-outer">
              {
                data.allFile.files.filter(x => x.file.relativePath === `${demo.path}.less`).map((file, index) => (demo.cssSource = cssSource(demo))) && <div /> // @FIX react render string
              }
              {
                data.allFile.files.filter(x => x.file.relativePath === `${demo.path}.js`).map((file, index) => (demo.jsSource = jsSource(demo))) && <div /> // @FIX react render string
              }
              <div id="gatsby_body-inner" className="gatsby_demo_source--from" dangerouslySetInnerHTML={{ __html: demo.htmlSource }} />
            </div>
          </Layout>
        )}
      />
    )
  }
}

export default DemoVanillaIframe

DemoVanillaIframe.propTypes = {
  demo: PropTypes.shape({
    container: PropTypes.bool.isRequired,
    full: PropTypes.bool.isRequired,
  }).isRequired,
}
