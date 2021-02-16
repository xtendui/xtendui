import React from 'react'

const iconX = require('components/snippets/icons').iconX
export default class DocFullscreen extends React.Component {
  render() {
    return (
      <>
        <div id="gatsby_open-full-trigger"></div>
        <div id="gatsby_open-full" className="xt-toggle">
          <div className="xt-button xt-dismiss absolute z-last top-0 right-0" aria-label="Close" dangerouslySetInnerHTML={{ __html: iconX() }}></div>
          <div className="xt-card-content" id="gatsby_open-full-content"></div>
        </div>
      </>
    )
  }
}
