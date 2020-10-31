import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { cssSource, jsSource } from 'assets/scripts/source'

export default class DemoVanilla extends React.Component {
  render() {
    const { src, children, name } = this.props
    const demo = require(`../../code/${src}.js`).demo
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
        render={data => (
          <div
            className={'gatsby_demo_item toggle gatsby_demo_preview'}
            data-name={name || demo.name.split('-').join(' ')}
            data-file={demo.path.split('-').join(' ')}
            data-inline={src}
          >
            {children}
            <script type="text/plain" data-lang="html" dangerouslySetInnerHTML={{ __html: demo.htmlSource }} />
            <div className="gatsby_demo_source gatsby_demo_source--from gatsby_demo_source_populate" />
            {data.allFile.files
              .filter(x => x.file.relativePath === `${demo.path}.css`)
              .map((file, i) => (
                <div className="gatsby_demo_source xt-ignore" data-lang="css" dangerouslySetInnerHTML={{ __html: cssSource(demo) }} key={i} />
              ))}
            {data.allFile.files
              .filter(x => x.file.relativePath === `${demo.path}.js`)
              .map((file, i) => (
                <div className="gatsby_demo_source xt-ignore" data-lang="js" dangerouslySetInnerHTML={{ __html: jsSource(demo) }} key={i} />
              ))}
          </div>
        )}
      />
    )
  }
}

DemoVanilla.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string,
  mode: PropTypes.string,
}
