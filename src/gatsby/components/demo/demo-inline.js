import React from 'react'
import PropTypes from 'prop-types'
import path from 'path'

export default class DemoInline extends React.Component {
  /* @TODO demos in react

  window.currentDemos = []

  <div ref={this.refDemo}>

  constructor(props) {
    super(props)
    this.refDemo = React.createRef()
    if (typeof window !== 'undefined') {
      this.state = {
        mode: localStorage.getItem('mode'),
      }
    }
  }

  componentDidMount() {
    this.container = this.refDemo.current
    if (typeof window !== 'undefined') {
      window.currentDemos.push(this)
      this.populateDemo = require('src/gatsby/assets/scripts/demo').populateDemo
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.currentDemos.filter(x => x !== this)
    }
  }

  setMode(mode) {
    this.setState({
      mode: mode,
    })
    this.populateDemo(this.container.closest('.gatsby_demo'))
  }
  */
  render() {
    const { src } = this.props
    const id = src.split('-').join(' ')
    const name = path.basename(src, '.js')
    const mode = typeof window !== 'undefined' ? localStorage.getItem('mode') : null
    // vanilla
    const html = require(`static/${src}.html.js`).object.html
    try {
      require(`static/${src}.js`).default
      // eslint-disable-next-line no-empty
    } catch (ex) {}
    // react
    const Demo = require(`static/${src}.jsx`).default
    // render with all
    return (
      <div className={'gatsby_demo_item xt-toggle'} data-name={name} data-id={id} data-inline={src}>
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
