import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import SEO from 'src/gatsby/templates/seo'
import LayoutDemo from 'src/gatsby/templates/layout-demo'
import { Xt } from 'xtendui'

function DemoIframe(props) {
  const { location } = props
  const src = location.pathname.replace(/^\/|\/$/g, '') // replace leading and trailing slash if present
  const id = src.split('/').join('-')
  // seo
  const seo = {}
  seo.title = src
  seo.description = seo.title
  // vanilla
  const object = require(`static/${src}.html.js`).object
  const html = object.html
  let hasCss
  let hasJs
  try {
    // must be first try/catch or yarn serve error
    require(`static/${src}.js`).default
    // eslint-disable-next-line no-empty
  } catch (ex) {}
  try {
    hasCss = require.resolve(`static/${src}.css`)
    // eslint-disable-next-line no-empty
  } catch (ex) {}
  try {
    hasJs = require.resolve(`static/${src}.js`)
    // eslint-disable-next-line no-empty
  } catch (ex) {}
  // react
  const Demo = require(`static/${src}.jsx`).default
  // iframe
  if (typeof window !== 'undefined') {
    document.documentElement.classList.add('gatsby_iframe-inside')
    document.documentElement.setAttribute('id', id)
    if (object.container) {
      document.documentElement.classList.add('gatsby_iframe-container')
    }
    if (object.gradient) {
      document.documentElement.classList.add('gatsby_iframe-gradient')
    }
  }
  // mode
  const [mode, setMode] = useState(0)
  const ref = useRef()
  useEffect(() => {
    const item = ref.current
    const switchDemo = mode => {
      // needs raf or useLayout inside demos is executed before mutation observer Xt._mountCheck({ added })
      Xt.frame({
        el: item,
        func: () => {
          setMode(mode)
          // populate
          if (window !== window.parent) {
            if (mode === 'react') {
              window.parent.initIframe(src, null, `/${src}.jsx`, hasCss ? `/${src}.css` : null)
            } else if (mode === 'html') {
              window.parent.initIframe(src, html, null, hasCss ? `/${src}.css` : null, hasJs ? `/${src}.js` : null)
            }
            // close auto (e.g. overlay self when switching mode)
            dispatchEvent(new CustomEvent('closeauto.trigger.xt'))
          }
        },
      })
    }
    if (window !== window.parent) {
      window.parent.switchDemos.push(switchDemo)
    }
    switchDemo(localStorage.getItem('mode'))
  }, [])

  return (
    <LayoutDemo>
      <SEO title={seo.title} description={seo.description} />
      <div id="body-outer">
        {mode === 'react' ? (
          <div id="gatsby_body-inner" className="gatsby_demo_source--from relative xt-h-screen">
            <Demo />
          </div>
        ) : mode === 'html' ? (
          <div
            id="gatsby_body-inner"
            className="gatsby_demo_source--from relative xt-h-screen"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : null}
      </div>
    </LayoutDemo>
  )
}

DemoIframe.propTypes = {
  location: PropTypes.object.isRequired,
}

export default DemoIframe
