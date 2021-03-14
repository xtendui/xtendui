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
        <div
          className="xt-list xt-list-3 items-center"
          data-xt-toggle="{ min: 1, on: 'mouseenter', off: 'mouseleave', autoDisable: false, preventEvent: true }"
        >
          <a
            href="#toggle--prevent-event-1-hover"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Toggle 1 hover
          </a>

          <a
            href="#toggle--prevent-event-2-hover"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Toggle 2 hover
          </a>

          <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">Target 1 hover</div>

          <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">Target 2 hover</div>
        </div>
      </div>
    )
  }
}

export default Demo
