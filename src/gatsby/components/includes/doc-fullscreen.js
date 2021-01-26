import React from 'react'

const iconX = require('components/snippets/icons').iconX
export default class DocFullscreen extends React.Component {
  render() {
    return (
      <>
        <div id="gatsby_open-full-trigger"></div>
        <div id="gatsby_open-full" className="toggle">
          <div className="btn btn-close" aria-label="Close" dangerouslySetInnerHTML={{ __html: iconX() }}></div>
          <div className="card-content" id="gatsby_open-full-content"></div>
        </div>
      </>
    )
  }
}
