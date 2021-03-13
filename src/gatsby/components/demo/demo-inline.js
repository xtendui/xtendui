import React from 'react'
import PropTypes from 'prop-types'
import path from 'path'

export default class DemoInline extends React.Component {
  render() {
    const { src } = this.props
    const id = src.split('-').join(' ')
    const name = path.basename(src, '.js')
    // css
    try {
      require(`static/${src}.css`).default
      // eslint-disable-next-line no-empty
    } catch (ex) {}
    // switch
    const mode = typeof window !== 'undefined' ? localStorage.getItem('mode') : null
    if (mode === 'react') {
      // react
      const Demo = require(`static/${src}.jsx`).default
      return (
        <div className={'gatsby_demo_item xt-toggle'} data-name={name} data-id={id} data-inline={src}>
          <div className="gatsby_demo_source gatsby_demo_source--from">
            <Demo />
          </div>
          <script
            className="gatsby_demo_source xt-ignore"
            type="text/plain"
            data-lang="jsx"
            data-fetch={`/${src}.jsx`}
          />
          <div className="gatsby_demo_source xt-ignore" data-lang="css" data-fetch={`/${src}.css`} />
        </div>
      )
    } else {
      // vanilla
      const html = require(`static/${src}.html.js`).object.html
      try {
        require(`static/${src}.js`).default
        // eslint-disable-next-line no-empty
      } catch (ex) {}
      return (
        <div className={'gatsby_demo_item xt-toggle'} data-name={name} data-id={id} data-inline={src}>
          <script type="text/plain" data-lang="html" dangerouslySetInnerHTML={{ __html: html }} />
          <div className="gatsby_demo_source gatsby_demo_source--from gatsby_demo_source_populate" />
          <div className="gatsby_demo_source xt-ignore" data-lang="css" data-fetch={`/${src}.css`} />
          <div className="gatsby_demo_source xt-ignore" data-lang="js" data-fetch={`/${src}.js`} />
        </div>
      )
    }
  }
}

DemoInline.propTypes = {
  src: PropTypes.string.isRequired,
}
