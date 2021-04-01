import React from 'react'
import PropTypes from 'prop-types'

export default class DemoInline extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.container = this.ref.current
    if (this.overflowHidden) {
      this.container.classList.add('overflow-hidden')
    }
  }

  render() {
    const { src } = this.props
    const id = src.split('-').join(' ')
    const name = src.split('/').pop().split('.')[0]
    const mode = typeof window !== 'undefined' ? localStorage.getItem('mode') : null
    // vanilla
    const object = require(`static/${src}.html.js`).object
    const html = object.html
    this.overflowHidden = object.overflowHidden
    try {
      require(`static/${src}.js`).default
      // eslint-disable-next-line no-empty
    } catch (ex) {}
    // react
    const Demo = require(`static/${src}.jsx`).default
    // render with all
    return (
      <div ref={this.ref} className={'gatsby_demo_item xt-toggle'} data-name={name} data-id={id} data-inline={src}>
        {mode === 'react' ? (
          <div>
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
        ) : (
          <div>
            <script type="text/plain" data-lang="html" dangerouslySetInnerHTML={{ __html: html }} />
            <div className="gatsby_demo_source gatsby_demo_source--from gatsby_demo_source_populate" />
            <div className="gatsby_demo_source xt-ignore" data-lang="css" data-fetch={`/${src}.css`} />
            <div className="gatsby_demo_source xt-ignore" data-lang="js" data-fetch={`/${src}.js`} />
          </div>
        )}
      </div>
    )
  }
}

DemoInline.propTypes = {
  src: PropTypes.string.isRequired,
}
