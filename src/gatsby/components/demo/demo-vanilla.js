import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { cssSource, jsSource } from 'assets/scripts/source'

class DemoVanilla extends React.Component {
  render() {
    const { src, children, name, mode } = this.props
    const demo = require('../../code/' + src + '.js').demo
    demo.path = `private/demos/${demo.dirs.join('/')}/${demo.name}`.replace('/vanilla', '').replace('src/gatsby/code/', '')
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
        render={(data) => (
          <div
            className={'gatsby_demo_item gatsby_demo_preview'}
            data-name={name || demo.name.split('-').join(' ')}
            data-file={demo.path.split('-').join(' ')}
            data-inline={src}
          >
            {children}
            <script type="text/plain" data-lang="html" dangerouslySetInnerHTML={{ __html: demo.htmlSource }} />
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
              .filter((x) => x.file.relativePath === `${demo.path}.less`)
              .map((file, i) => (
                <div className="gatsby_demo_source xt-ignore" data-lang="less" dangerouslySetInnerHTML={{ __html: cssSource(demo) }} key={i} />
              ))}
            {data.allFile.files
              .filter((x) => x.file.relativePath === `${demo.path}.js`)
              .map((file, i) => (
                <div className="gatsby_demo_source xt-ignore" data-lang="js" dangerouslySetInnerHTML={{ __html: jsSource(demo) }} key={i} />
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
  src: PropTypes.string.isRequired,
  name: PropTypes.string,
  mode: PropTypes.string,
}
