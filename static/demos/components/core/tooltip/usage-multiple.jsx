import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div data-xt-tooltip>
          Lorem ipsum
          <div className="xt-tooltip-item">
            <a href="#">dolor</a>

            <div className="xt-tooltip p-2">
              <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>
          sit
          <div className="xt-tooltip-item">
            <a href="#">amet</a>

            <div className="xt-tooltip p-2">
              <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
                Consectetur adipiscing elit
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
