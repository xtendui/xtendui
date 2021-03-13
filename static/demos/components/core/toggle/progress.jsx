import React from 'react'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.object = this.ref.current
  }

  componentWillUnmount() {}

  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-list xt-list-3 items-center demo--toggle-progress">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition in-toggle"
          >
            Toggle 0
            <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
              <span className="xt-filler absolute inset-0 m-auto text-primary-500">
                <span className="absolute bg-current opacity-25 w-full h-full"></span>
                <span className="absolute bg-current w-full"></span>
              </span>
            </span>
          </button>

          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
          >
            Toggle 1
            <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
              <span className="xt-filler absolute inset-0 m-auto text-primary-500">
                <span className="absolute bg-current opacity-25 w-full h-full"></span>
                <span className="absolute bg-current w-full"></span>
              </span>
            </span>
          </button>

          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
          >
            Toggle 2
            <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
              <span className="xt-filler absolute inset-0 m-auto text-primary-500">
                <span className="absolute bg-current opacity-25 w-full h-full"></span>
                <span className="absolute bg-current w-full"></span>
              </span>
            </span>
          </button>

          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
          >
            Toggle 3
            <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
              <span className="xt-filler absolute inset-0 m-auto text-primary-500">
                <span className="absolute bg-current opacity-25 w-full h-full"></span>
                <span className="absolute bg-current w-full"></span>
              </span>
            </span>
          </button>

          <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
            Target 0
            <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
              <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                <span className="absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                <span className="absolute bg-current h-full bottom-0 left-0"></span>
              </span>
            </span>
          </div>

          <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
            Target 1
            <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
              <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                <span className="absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                <span className="absolute bg-current h-full bottom-0 left-0"></span>
              </span>
            </span>
          </div>

          <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
            Target 2
            <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
              <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                <span className="absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                <span className="absolute bg-current h-full bottom-0 left-0"></span>
              </span>
            </span>
          </div>

          <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
            Target 3
            <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
              <span className="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
                <span className="absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
                <span className="absolute bg-current h-full bottom-0 left-0"></span>
              </span>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
