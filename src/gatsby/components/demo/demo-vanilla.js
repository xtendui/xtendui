import React from 'react'
import PropTypes from 'prop-types'
import path from 'path'

export default class DemoVanilla extends React.Component {
  render() {
    const { src } = this.props
    const id = src.split('-').join(' ')
    const name = path.basename(src, '.js')
    const html = require(`static/${src}.html`).default
    const css = `/${src}.css`
    const js = `/${src}.js`
    try {
      require(`static/${src}.css`).default
      // eslint-disable-next-line no-empty
    } catch (ex) {}
    try {
      require(`static/${src}.js`).default
      // eslint-disable-next-line no-empty
    } catch (ex) {}
    return (
      <div
        className={'gatsby_demo_item xt-toggle'}
        data-name={name}
        data-id={id}
        data-inline={src}
      >
        <script type="text/plain" data-lang="html" dangerouslySetInnerHTML={{ __html: html }} />
        <div className="gatsby_demo_source gatsby_demo_source--from gatsby_demo_source_populate" />
        <div className="gatsby_demo_source xt-ignore" data-lang="css" data-fetch={css} />
        <div className="gatsby_demo_source xt-ignore" data-lang="js" data-fetch={js} />
      </div>
    )
  }
}

DemoVanilla.propTypes = {
  src: PropTypes.string.isRequired,
}
