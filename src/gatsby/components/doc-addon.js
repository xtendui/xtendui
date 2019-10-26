import React from 'react'

class DocAddon extends React.Component {
  render () {
    return (
      <>
        <div className="overlay overlay-screen overlay--full" id="overlay--open-full"
          data-xt-overlay="{ appendTo: false }">
          <div className="overlay-container">
            <div className="overlay-inner">

              <div className="card card--overlay">
                <div className="card-design"></div>
                <div className="card-inner">
                  <div className="btn btn-close" aria-label="Close"></div>
                  <div className="card-content" id="overlay--open-full-content">
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </>
    )
  }
}

export default DocAddon
