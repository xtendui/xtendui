import path from 'path'
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { cssSource, jsSource } from 'assets/scripts/source'

class DemoReact extends React.Component {
  render () {
    const { children, src } = this.props
    const dirs = path.dirname(src).split('/')
    const demo = {
      name: path.basename(src, '.jsx'),
      component: dirs.pop(),
      type: dirs.pop()
    }
    demo.name = src.split('/').pop()
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
          <div className="demo_item demo_preview" data-name={demo.name}>
            {children}
            <div className="demo_source demo_source--from">
              <demo.Component></demo.Component>
            </div>
            {data.allFile.files.filter(x => x.file.relativePath === `${demo.type}/${demo.component}/${demo.name}.jsx`).map((file, index) => (
              <div className="demo_source xt-ignore" data-lang="js" dangerouslySetInnerHTML={{ __html: jsSource(demo, '.jsx') }} key={index}/>
            ))}
            {data.allFile.files.filter(x => x.file.relativePath === `${demo.type}/${demo.component}/${demo.name}.less`).map((file, index) => (
              <div className="demo_source xt-ignore" data-lang="less" dangerouslySetInnerHTML={{ __html: cssSource(demo) }} key={index}/>
            ))}
          </div>
        )}
      />
    )
  }
}

export default DemoReact

DemoReact.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired
}
