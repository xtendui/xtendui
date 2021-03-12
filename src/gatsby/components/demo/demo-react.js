import React from 'react'
import PropTypes from 'prop-types'

export default class DemoReact extends React.Component {
  render() {
    const { src, name } = this.props
    const demo = require(`code/${src}.js`).demo
    const code = `demos/${demo.dirs.join('/')}/${demo.name}`.replace('/vanilla', '').replace('src/gatsby/code/', '')
    const Demo = require(`static/${code}.jsx`).default
    const jsx = require(`!!raw-loader!static/${code}.jsx`).default
    return (
      <div
        className={'gatsby_demo_item xt-toggle'}
        data-name={name || demo.name.split('-').join(' ')}
        data-file={code.split('-').join(' ')}
        data-inline={src}
      >
        <div className="gatsby_demo_source gatsby_demo_source--from">
          <Demo />
        </div>
        <script type="text/plain" data-lang="jsx" dangerouslySetInnerHTML={{ __html: jsx }} />
        <div className="gatsby_demo_source xt-ignore" data-lang="css" data-fetch={`${code}.css`} />
      </div>
    )
  }
}

DemoReact.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string,
}
