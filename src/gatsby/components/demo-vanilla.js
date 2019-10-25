import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { cssSource, jsSource } from 'assets/scripts/source'

class DemoVanilla extends React.Component {
  render () {
    const { src, children, name } = this.props
    const demo = require('../code/' + src + '.js').demo
    demo.type = demo.type === 'core' ? 'demos' : demo.type
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
          <div className="gatsby_demo_item gatsby_demo_preview" data-name={name || demo.name.split('-').pop()} data-inline={src}>
            {children}
            <div className="gatsby_demo_source gatsby_demo_source--from" data-lang="html" dangerouslySetInnerHTML={{ __html: demo.htmlSource }}/>
            {data.allFile.files.filter(x => x.file.relativePath === `${demo.type}/${demo.component}/${demo.name}.less`).map((file, i) => (
              <div className="gatsby_demo_source xt-ignore" data-lang="less" dangerouslySetInnerHTML={{ __html: cssSource(demo) }} key={i}/>
            ))}
            {data.allFile.files.filter(x => x.file.relativePath === `${demo.type}/${demo.component}/${demo.name}.js`).map((file, i) => (
              <div className="gatsby_demo_source xt-ignore" data-lang="js" dangerouslySetInnerHTML={{ __html: jsSource(demo) }} key={i}/>
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
