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
        <nav className="nav">
          <div className="xt-list flex-col max-w-sm">
            <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-t-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
              Lorem ipsum
            </button>

            <button type="button" className="xt-button text-xs py-2 px-3.5 active text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
              dolor sit amet
            </button>

            <button type="button" className="xt-button text-xs py-2 px-3.5 text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
              consectetur adipiscing elit
            </button>

            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 disabled text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
              aria-disabled="true"
            >
              Lorem ipsum
            </button>

            <button type="button" className="xt-button text-xs py-2 px-3.5 text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">dolor sit amet</button>

            <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-b-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
            </button>
          </div>
        </nav>
      </div>
    )
  }
}

export default Demo
