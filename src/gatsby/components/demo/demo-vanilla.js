import React from 'react'
import PropTypes from 'prop-types'

export default class DemoVanilla extends React.Component {
  render() {
    const { src, children, name } = this.props
    const demo = require(`code/${src}.js`).demo
    const code = `demos/${demo.dirs.join('/')}/${demo.name}`.replace('/vanilla', '').replace('src/gatsby/code/', '')
    const html = require(`static/${code}.html`).default
    return (
      <div
        className={'gatsby_demo_item xt-toggle'}
        data-name={name || demo.name.split('-').join(' ')}
        data-file={code.split('-').join(' ')}
        data-inline={src}
      >
        {children}
        <script type="text/plain" data-lang="html" dangerouslySetInnerHTML={{ __html: html }} />
        <div className="gatsby_demo_source gatsby_demo_source--from gatsby_demo_source_populate" />
        <div className="gatsby_demo_source xt-ignore" data-lang="css" data-fetch={`/${code}.css`} />
        <div className="gatsby_demo_source xt-ignore" data-lang="js" data-fetch={`/${code}.js`} />
      </div>
    )
  }
}

DemoVanilla.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string,
}
