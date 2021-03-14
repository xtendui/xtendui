import React from 'react'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.object = this.ref.current
  }

  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-list xt-list-3 items-center">
          <label className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Lorem ipsum
            <input
              type="checkbox"
              className="xt-check xt-checkbox top-auto ml-2 rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all"
              checked
              disabled
            />
          </label>

          <label className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Lorem ipsum
            <input type="checkbox" className="xt-check xt-checkbox top-auto ml-2 rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all" />
          </label>

          <label className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Lorem ipsum
            <input
              type="radio"
              className="xt-check xt-radio top-auto ml-2 rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
              name="radio-button"
              checked
            />
          </label>

          <label className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Lorem ipsum
            <input
              type="radio"
              className="xt-check xt-radio top-auto ml-2 rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
              name="radio-button"
            />
          </label>

          <label className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Lorem ipsum
            <input
              type="radio"
              className="xt-check xt-switch top-auto ml-2 rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
              name="switch-button"
              checked
            />
          </label>

          <label className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Lorem ipsum
            <input
              type="radio"
              className="xt-check xt-switch top-auto ml-2 rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
              name="switch-button"
            />
          </label>
        </div>
      </div>
    )
  }
}

export default Demo
