import React from 'react'
const iconClose = require('components/snippets/icons').iconClose

class DocFullscreen extends React.Component {
  render() {
    return (
      <>
        <div id="gatsby_open-full-trigger"></div>
        <div id="gatsby_open-full" className="toggle">
          <div className="btn btn-close" aria-label="Close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div className="card-content" id="gatsby_open-full-content"></div>
        </div>
      </>
    )
  }
}

export default DocFullscreen
