import React from 'react'

class Component extends React.Component {
  render() {
    return (
      <div className="drop_outer" data-xt-drop>
        <button type="button" className="btn btn--primary">
          Toggle
        </button>
        <div className="drop">
          <div className="drop_inner">
            <div className="drop_design"></div>
            <div className="drop_content">
              <ul className="list list--drop">
                <li>
                  <button type="button" className="btn">
                    Lorem ipsum dolor
                  </button>
                </li>
                <li>
                  <button type="button" className="btn">
                    Dolor sit
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Component
