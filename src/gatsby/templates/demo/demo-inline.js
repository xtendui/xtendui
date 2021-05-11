import React from 'react'
import PropTypes from 'prop-types'

export default class DemoInline extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.state = {
      mode: 'html',
    }
  }

  componentDidMount() {
    this.item = this.ref.current
    this.container = this.item.closest('.gatsby_demo')
    // currentDemos
    window.currentDemos.push(this)
    // raf because initial render not switched already because of localStorage
    requestAnimationFrame(() => {
      this.refresh()
    })
  }

  switchClean() {
    // clean react conditional rendering and generated nodes
    window.switchClean(this.item)
  }

  refresh() {
    this.setState({ mode: localStorage.getItem('mode') })
    // populate
    require('src/gatsby/assets/scripts/demo').populateItem(this.item)
  }

  render() {
    const { src } = this.props
    const id = src.split('-').join(' ')
    const name = src.split('/').pop().split('.')[0]
    // vanilla
    const object = require(`static/${src}.html.js`).object
    const html = object.html
    try {
      require(`static/${src}.js`).default
      // eslint-disable-next-line no-empty
    } catch (ex) {}
    // react
    const Demo = require(`static/${src}.jsx`).default
    // render all
    return (
      <div ref={this.ref} className={'gatsby_demo_item xt-toggle'} data-name={name} data-id={id} data-inline={src}>
        {this.state.mode === 'react' ? (
          <div
            className={`gatsby_demo_item_switch ${
              this.state.mode === 'react' ? 'gatsby_demo_item--current' : 'hidden'
            }`}>
            <div
              className={`gatsby_demo_source gatsby_demo_source--from ${
                object.overflow ? 'gatsby_demo_source--overflow' : ''
              } relative p-4 md:p-6 lg:p-8`}>
              <Demo />
            </div>
            <div className="gatsby_demo_source xt-ignore hidden" data-lang="jsx" data-fetch={`/${src}.jsx`} />
            <div className="gatsby_demo_source xt-ignore hidden" data-lang="css" data-fetch={`/${src}.css`} />
          </div>
        ) : (
          <div
            className={`gatsby_demo_item_switch ${
              this.state.mode === 'html' ? 'gatsby_demo_item--current' : 'hidden'
            }`}>
            <div
              className={`gatsby_demo_source gatsby_demo_source--from gatsby_demo_source_populate ${
                object.overflow ? 'gatsby_demo_source--overflow' : ''
              } relative p-4 md:p-6 lg:p-8`}
            />
            <script type="text/plain" data-lang="html" dangerouslySetInnerHTML={{ __html: html }} />
            <div className="gatsby_demo_source xt-ignore hidden" data-lang="css" data-fetch={`/${src}.css`} />
            <div className="gatsby_demo_source xt-ignore hidden" data-lang="js" data-fetch={`/${src}.js`} />
          </div>
        )}
      </div>
    )
  }
}

DemoInline.propTypes = {
  src: PropTypes.string.isRequired,
}
