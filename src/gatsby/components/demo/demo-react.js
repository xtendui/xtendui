import path from 'path'
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { cssSource, jsSource, jsxSource } from 'assets/scripts/source'

class DemoReact extends React.Component {
  render() {
    const { children, src, name, mode } = this.props
    const dirs = path.dirname(src).split('/')
    const demo = {
      name: path.basename(src, '.jsx'),
      component: dirs.pop(),
      type: dirs.pop(),
    }
    demo.name = src.split('/').pop()
    demo.type = 'demos/' + demo.type
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
          <div className="gatsby_demo_item gatsby_demo_preview" data-name={name || demo.name.split('-').join(' ')} data-inline={src}>
            {children}
            <script type="text/plain">
              <demo.Component></demo.Component>
            </script>
            <div
              className={
                mode === 'grid'
                  ? 'gatsby_demo_source gatsby_demo_source--from gatsby_demo_source_populate gatsby_demo-cols'
                  : mode === 'grid-nested'
                  ? 'gatsby_demo_source gatsby_demo_source--from gatsby_demo_source_populate gatsby_demo-cols-nested'
                  : 'gatsby_demo_source gatsby_demo_source--from gatsby_demo_source_populate'
              }
            />
            {data.allFile.files
              .filter(x => x.file.relativePath === `${demo.type}/${demo.component}/${demo.name}.jsx`)
              .map((file, i) => (
                <div className="gatsby_demo_source xt-ignore" data-lang="jsx" dangerouslySetInnerHTML={{ __html: jsxSource(demo) }} key={i} />
              ))}
            {data.allFile.files
              .filter(x => x.file.relativePath === `${demo.type}/${demo.component}/${demo.name}.less`)
              .map((file, i) => (
                <div className="gatsby_demo_source xt-ignore" data-lang="less" dangerouslySetInnerHTML={{ __html: cssSource(demo) }} key={i} />
              ))}
          </div>
        )}
      />
    )
  }
}

export default DemoReact

DemoReact.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string.isRequired,
}
