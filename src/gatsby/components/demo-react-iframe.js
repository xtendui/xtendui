import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import SEO from 'components/seo'
import Layout from 'components/layout-demo'

import { cssSource, jsSource } from 'assets/scripts/source'

class DemoReactIframe extends React.Component {
  render () {
    const { demo } = this.props
    const seo = {}
    seo.title = demo.name
    seo.description = 'Demo'
    demo.type = demo.type === 'core' ? 'demo' : demo.type
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
            <SEO title={seo.title + ' — ' + seo.description}/>
            <div id="body-outer">
              <div id="body-inner" className="demo_source--from">
                {data.allFile.files.filter(x => x.file.relativePath === `${demo.type}/${demo.component}/${demo.name}.jsx`).map((file, index) => (
                  demo.jsSource = jsSource(demo, '.jsx')
                )) && <div/> // @FIX react render string
                }
                {data.allFile.files.filter(x => x.file.relativePath === `${demo.type}/${demo.component}/${demo.name}.less`).map((file, index) => (
                  demo.cssSource = cssSource(demo)
                )) && <div/> // @FIX react render string
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
    full: PropTypes.bool
  }).isRequired
}
