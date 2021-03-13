import React from 'react'
import PropTypes from 'prop-types'
import path from 'path'

export default class DemoReact extends React.Component {
  render() {
    const { src } = this.props
    const name = path.basename(src, '.js')
    const Demo = require(`static/${src}.jsx`).default
    try {
      require(`static/${src}.css`).default
      // eslint-disable-next-line no-empty
    } catch (ex) {}
    return (
      <div
        className={'gatsby_demo_item xt-toggle'}
        data-name={name || name.split('-').join(' ')}
        data-id={src.split('-').join(' ')}
        data-inline={src}
      >
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
  }
}

DemoReact.propTypes = {
  src: PropTypes.string.isRequired,
}
