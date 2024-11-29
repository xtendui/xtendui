'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Xt } from 'xtendui'

function DemoInline(props) {
  const { src } = props
  const id = src.split('-').join(' ')
  const name = src.split('/').pop().split('.')[0]
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
    hasCss = require.resolve(`raw-loader!../../../public/${src}.css`)
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
  const Demo = loadable(() => import('public/demos/components/toggle/animation-noqueue.jsx'))
  */
  // html
  const [object, setObject] = useState(0)
  const ref = useRef()
  useEffect(() => {
    // html
    setObject(require(`../../../public/${src}.html.js`).object)
    /* @TODO lazy
    loadable(
      import('public/demos/components/toggle/animation-noqueue.html.js').then(module => {
        setObject(module.object)
      })
    )
    */
  }, [src])
  useEffect(() => {
    // switch demo
    const item = ref.current
    const switchDemo = () => {
      // needs raf or useLayout inside demos is executed before mutation observer Xt._mountCheck({ added })
      Xt.frame({
        el: item,
        func: () => {
          // populate
          require('src/app/assets/scripts/demo').populateItem(item)
        },
      })
    }
    window.switchDemos.push(switchDemo)
    switchDemo()
  }, [])

  return (
    <div ref={ref} className={'docs_demo_item'} data-name={name} data-id={id} data-inline={src}>
      {hasJsx ? (
        <div className={`docs_demo_item_body`}>
          <div
            className={`docs_demo_source docs_demo_source--from docs_demo_source--container ${
              object.overflow ? 'docs_demo_source--overflow' : ''
            }`}>
            <Demo />
          </div>
          <script
            type="text/plain"
            className="docs_demo_source xt-ignore hidden"
            data-lang="jsx"
            data-fetch={`/${src}.jsx`}
          />
          {hasCss ? (
            <script
              type="text/plain"
              className="docs_demo_source xt-ignore hidden"
              data-lang="css"
              data-fetch={`/${src}.css`}
            />
          ) : (
            ''
          )}
        </div>
      ) : (
        <div className={`docs_demo_item_body`}>
          <div
            className={`docs_demo_source docs_demo_source--from docs_demo_source--container ${
              object.overflow ? 'docs_demo_source--overflow' : ''
            }`}
            dangerouslySetInnerHTML={{ __html: object.html }}
          />
          <script type="text/plain" data-lang="html" dangerouslySetInnerHTML={{ __html: object.html }} />
          {hasCss ? (
            <script
              type="text/plain"
              className="docs_demo_source xt-ignore hidden"
              data-lang="css"
              data-fetch={`/${src}.css`}
            />
          ) : (
            ''
          )}
          {hasJs ? (
            <script
              type="text/plain"
              className="docs_demo_source xt-ignore hidden"
              data-lang="js"
              data-fetch={`/${src}.js`}
            />
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  )
}

export default DemoInline
