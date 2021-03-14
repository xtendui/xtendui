import React from 'react'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.object = this.ref.current
  }

  componentWillUnmount() {
  }


  render() {
    return (
      <div ref={this.ref}>
        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition demo--tooltip--swap-click"
          data-xt-tooltip="{ targets: '#tooltip--swap-click, #tooltip--swap-click-swap' }"
        >
          Swap click
        </button>

        <div className="xt-tooltip p-2 group" id="tooltip--swap-click" data-xt-duration="300">
          <div
            className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black transform transition duration-300 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0"
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>

        <div className="xt-tooltip p-2 group" id="tooltip--swap-click-swap" style="display: none" data-xt-duration="300">
          <div
            className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black transform transition duration-300 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0"
          >
            Clicked!
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
