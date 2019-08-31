import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { cssSource, jsSource } from 'assets/scripts/source'

class DemoVanilla extends React.Component {
  render () {
    const { src, children } = this.props
    const demo = require('../' + src + '.js').demo
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
            <div className="demo_source demo_source--from" data-lang="html" dangerouslySetInnerHTML={{ __html: demo.htmlSource }}/>
            {data.allFile.files.filter(x => x.file.relativePath === `${demo.type}/${demo.component}/${demo.name}.less`).map((file, index) => (
              <div className="demo_source xt-ignore" data-lang="less" dangerouslySetInnerHTML={{ __html: cssSource(demo) }} key={index}/>
            ))}
            {data.allFile.files.filter(x => x.file.relativePath === `${demo.type}/${demo.component}/${demo.name}.js`).map((file, index) => (
              <div className="demo_source xt-ignore" data-lang="js" dangerouslySetInnerHTML={{ __html: jsSource(demo) }} key={index}/>
            ))}
          </div>
        )}
      />
    )
  }
}

export default DemoVanilla

DemoVanilla.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired
}
