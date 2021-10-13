import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Xt } from 'xtendui'

function DemoInline(props) {
  const { src } = props
  const id = src.split('-').join(' ')
  const name = src.split('/').pop().split('.')[0]
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
  // mode
  const [mode, setMode] = useState(0)
  const ref = useRef()
  useEffect(() => {
    const item = ref.current
    const switchDemo = mode => {
      // needs raf or useLayout inside demos is executed before mutation observer Xt.mountCheck({ added })
      Xt.frame({
        el: item,
        func: () => {
          setMode(mode)
          // populate
          require('src/gatsby/assets/scripts/demo').populateItem(item)
        },
      })
    }
    window.switchDemos.push(switchDemo)
    switchDemo(localStorage.getItem('mode'))
  }, [])

  return (
    <div ref={ref} className={'gatsby_demo_item'} data-name={name} data-id={id} data-inline={src}>
      {mode === 'react' ? (
        <div className={`gatsby_demo_item_body`}>
          <div
            className={`gatsby_demo_source gatsby_demo_source--from gatsby_demo_source--container ${
              object.overflow ? 'gatsby_demo_source--overflow' : ''
            }`}>
            <Demo />
          </div>
          <script
            type="text/plain"
            className="gatsby_demo_source xt-ignore hidden"
            data-lang="jsx"
            data-fetch={`/${src}.jsx`}
          />
          {hasCss ? (
            <script
              type="text/plain"
              className="gatsby_demo_source xt-ignore hidden"
              data-lang="css"
              data-fetch={`/${src}.css`}
            />
          ) : (
            ''
          )}
        </div>
      ) : mode === 'html' ? (
        <div className={`gatsby_demo_item_body`}>
          <div
            className={`gatsby_demo_source gatsby_demo_source--from gatsby_demo_source--container ${
              object.overflow ? 'gatsby_demo_source--overflow' : ''
            }`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <script type="text/plain" data-lang="html" dangerouslySetInnerHTML={{ __html: html }} />
          {hasCss ? (
            <script
              type="text/plain"
              className="gatsby_demo_source xt-ignore hidden"
              data-lang="css"
              data-fetch={`/${src}.css`}
            />
          ) : (
            ''
          )}
          {hasJs ? (
            <script
              type="text/plain"
              className="gatsby_demo_source xt-ignore hidden"
              data-lang="js"
              data-fetch={`/${src}.js`}
            />
          ) : (
            ''
          )}
        </div>
      ) : null}
    </div>
  )
}

DemoInline.propTypes = {
  src: PropTypes.string.isRequired,
}

export default DemoInline
