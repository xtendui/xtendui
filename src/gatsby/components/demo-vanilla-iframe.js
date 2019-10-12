import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import SEO from 'components/seo'
import Layout from 'components/layout-demo'

import { cssSource, jsSource } from 'assets/scripts/source'

class DemoVanillaIframe extends React.Component {
  render () {
    const { demo } = this.props
    const seo = {}
    seo.title = demo.name
    seo.description = 'Demo'
    demo.type = demo.type === 'core' ? 'demo' : demo.type
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
              {data.allFile.files.filter(x => x.file.relativePath === `${demo.type}/${demo.component}/${demo.name}.less`).map((file, index) => (
                demo.cssSource = cssSource(demo)
              )) && <div/> // @FIX react render string
              }
              {data.allFile.files.filter(x => x.file.relativePath === `${demo.type}/${demo.component}/${demo.name}.js`).map((file, index) => (
                demo.jsSource = jsSource(demo)
              )) && <div/> // @FIX react render string
              }
              <div id="gatsby_body-inner" className="gatbsy_demo_source--from" dangerouslySetInnerHTML={{ __html: demo.htmlSource }}/>
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
    full: PropTypes.bool
  }).isRequired
}
