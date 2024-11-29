'use client'

import { useRef, useState, useEffect } from 'react'
import { Xt } from 'xtendui'

function DemoIframe(props) {
  const { slug } = props
  const src = slug.replace(/^\/|\/$/g, '') // replace leading and trailing slash if present
  const id = src.split('/').join('-')
  // vanilla
  let hasCss
  let hasJs
  let hasJsx
  try {
    // must be first try/catch or serve error
    require(`../../../public/${src}.js`).default
    // eslint-disable-next-line no-empty
  } catch (ex) {}
  try {
    hasCss = require.resolve(`../../../public/${src}.css`)
    // eslint-disable-next-line no-empty
  } catch (ex) {}
  try {
    // must be first try/catch or serve error
    hasJs = require.resolve(`../../../public/${src}.js`)
    // eslint-disable-next-line no-empty
  } catch (ex) {}
  try {
    // must be first try/catch or serve error
    hasJsx = require.resolve(`../../../public/${src}.jsx`)
    // eslint-disable-next-line no-empty
  } catch (ex) {}
  // react
  const Demo = hasJsx ? require(`../../../public/${src}.jsx`).default : null
  /* @TODO lazy
  const Demo = loadable(() => import('public/components/stickyflow/usage.jsx'))
  */
  // html
  const [object, setObject] = useState(0)
  const ref = useRef()
  useEffect(() => {
    // html
    setObject(require(`../../../public/${src}.html.js`).object)
    /* @TODO lazy
    loadable(
      import('public/components/stickyflow/usage.html.js').then(module => {
        setObject(module.object)
      })
    )
    */
  }, [src])
  useEffect(() => {
    // iframe
    if (typeof window !== 'undefined') {
      document.documentElement.classList.add('docs_iframe-inside')
      document.documentElement.setAttribute('id', id)
      if (object.container) {
        document.documentElement.classList.add('docs_iframe-container')
      }
      if (object.gradient) {
        document.documentElement.classList.add('docs_iframe-gradient')
      }
    }
    // switch demo
    const item = ref.current
    const switchDemo = init => {
      // needs raf or useLayout inside demos is executed before mutation observer Xt._mountCheck({ added })
      Xt.frame({
        el: item,
        func: () => {
          // populate
          if (window !== window.parent) {
            if (hasJsx) {
              window.parent.initIframe(src, null, `/${src}.jsx`, hasCss ? `/${src}.css` : null)
            } else {
              window.parent.initIframe(
                src,
                object.html,
                null,
                hasCss ? `/${src}.css` : null,
                hasJs ? `/${src}.js` : null,
              )
            }
            if (!init) {
              // close auto (e.g. overlay self when switching mode)
              dispatchEvent(new CustomEvent('closeauto.trigger.xt'))
            }
          }
        },
      })
    }
    if (window !== window.parent) {
      window.parent.switchDemos.push(switchDemo)
    }
    switchDemo(true)
  }, [object, src, hasCss, hasJs, hasJsx, id])

  return (
    <>
      {hasJsx ? (
        <div id="docs_body-inner" className="docs_demo_source--from relative min-h-screen min-h-[100svh]!">
          <Demo />
        </div>
      ) : (
        <div
          id="docs_body-inner"
          className="docs_demo_source--from relative min-h-screen min-h-[100svh]!"
          dangerouslySetInnerHTML={{ __html: object.html }}
        />
      )}
    </>
  )
}

export default DemoIframe
