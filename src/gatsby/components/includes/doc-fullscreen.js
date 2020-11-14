import React from 'react'

const cardBlack = require('components/snippets/classes/card-black').default

export default class DocFullscreen extends React.Component {
  render() {
    return (
      <>
        <div id="gatsby_open-full-trigger"></div>
        <div id="gatsby_open-full" className="toggle">
          <div className="btn btn-close" aria-label="Close" data-xt-tooltip="{ targets: '#gatsby_open-full-tooltip', position: 'bottom-end' }">
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
        <div
          className="tooltip transform transition duration-300 opacity-0 translate-y-2 active:opacity-100 active:translate-y-0"
          id="gatsby_open-full-tooltip"
        >
          <div className={`tooltip-sm rounded shadow-tooltip ${cardBlack()}`}>Close Fullscreen</div>
        </div>
      </>
    )
  }
}
