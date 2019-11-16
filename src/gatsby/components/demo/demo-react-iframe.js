import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import SEO from 'components/seo'
import Layout from 'components/layout-demo'

import { cssSource, jsSource, jsxSource } from 'assets/scripts/source'

class DemoReactIframe extends React.Component {
  render() {
    const { demo, vanilla } = this.props
    const seo = {}
    seo.title = demo.name
    seo.description = 'Demo'
    demo.type = demo.type === 'core' ? 'demos' : demo.type
    demo.Component = require(`xtend-library/src/${demo.type}/${demo.component}/${demo.name}.jsx`).default
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
            <SEO title={seo.title + ' — ' + seo.description} />
            <div id="body-outer">
              <div id="gatsby_body-inner" className="gatsby_demo_source--from">
                {data.allFile.files
                  .filter(x => x.file.relativePath === `${demo.type}/${demo.component}/${demo.name}.jsx`)
                  .map((file, index) => (demo.jsxSource = jsxSource(demo))) && <div /> // @FIX react render string
                }
                {data.allFile.files
                  .filter(x => x.file.relativePath === `${demo.type}/${demo.component}/${demo.name}.less`)
                  .map((file, index) => (demo.cssSource = cssSource(demo))) && <div /> // @FIX react render string
                }
                {data.allFile.files
                  .filter(x => x.file.relativePath === `${demo.type}/${demo.component}/${vanilla ? vanilla : demo.name}.js`)
                  .map((file, index) => (demo.jsSource = jsSource(demo, vanilla))) && <div /> // @FIX react render string
                }
                <demo.Component></demo.Component>
              </div>
            </div>
          </Layout>
        )}
      />
    )
  }
}

export default DemoReactIframe

DemoReactIframe.propTypes = {
  demo: PropTypes.shape({
    container: PropTypes.bool.isRequired,
    full: PropTypes.bool.isRequired,
  }).isRequired,
}
