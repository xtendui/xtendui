import React from 'react'
import PropTypes from 'prop-types'
import SEO from 'src/gatsby/templates/seo'
import LayoutDemo from 'src/gatsby/templates/layout-demo'

export default class DemoIframe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'html',
    }
  }

  componentDidMount() {
    this.refresh()
    if (window !== window.parent) {
      // currentDemos
      window.parent.currentDemos.push(this)
    }
  }

  switchClean() {
    if (window !== window.parent) {
      // clean react conditional rendering and generated nodes
      window.parent.switchClean(null, this.src)
    }
  }

  refresh() {
    const currentMode = localStorage.getItem('mode')
    this.setState({ mode: currentMode })
    // populate
    if (window !== window.parent) {
      if (currentMode === 'react') {
        window.parent.initIframe(this.src, false, `/${this.src}.jsx`, `/${this.src}.css`)
      } else {
        window.parent.initIframe(this.src, this.html, false, `/${this.src}.css`, `/${this.src}.js`)
      }
      // close fullscreen and others
      dispatchEvent(new CustomEvent('closeauto.trigger.xt'))
    }
  }

  render() {
    const { location } = this.props
    this.src = location.pathname.replace(/^\/|\/$/g, '') // replace leading and trailing slash if present
    const id = this.src.split('/').join('-')
    // seo
    const seo = {}
    seo.title = this.src
    seo.description = seo.title
    // iframe
    if (typeof window !== 'undefined') {
      document.documentElement.classList.add('gatsby_iframe-inside')
      document.documentElement.setAttribute('id', id)
    }
    // vanilla
    const object = require(`static/${this.src}.html.js`).object
    this.html = object.html
    if (typeof window !== 'undefined') {
      if (object.container) {
        document.documentElement.classList.add('gatsby_iframe-container')
      }
      if (object.gradient) {
        document.documentElement.classList.add('gatsby_iframe-gradient')
      }
    }
    let Demo = null
    if (this.state.mode === 'react') {
      // react
      Demo = require(`static/${this.src}.jsx`).default
    } else {
      try {
        require(`static/${this.src}.js`).default
        // eslint-disable-next-line no-empty
      } catch (ex) {}
    }
    // render all
    return (
      <LayoutDemo>
        <SEO title={seo.title} description={seo.description} />
        <div id="body-outer">
          {this.state.mode === 'react' ? (
            <div id="gatsby_body-inner" className="gatsby_demo_source--from invisible relative xt-h-screen">
              <Demo />
            </div>
          ) : (
            <div
              id="gatsby_body-inner"
              className="gatsby_demo_source--from invisible relative xt-h-screen"
              dangerouslySetInnerHTML={{ __html: this.html }}
            />
          )}
        </div>
      </LayoutDemo>
    )
  }
}

DemoIframe.propTypes = {
  location: PropTypes.object.isRequired,
}
