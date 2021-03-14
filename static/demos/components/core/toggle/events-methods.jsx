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
        <div className="xt-list xt-list-3 items-center mb-4">
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--toggle-events-first-element">
            1st element
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--toggle-events-first-target">
            1st target
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--toggle-events-autostart">
            Autostart
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--toggle-events-autostop">
            Autostop
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--toggle-events-add">
            Add
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--toggle-events-remove">
            Remove
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--toggle-events-reinit">
            Reinit
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--toggle-events-restart">
            Restart
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--toggle-events-destroy">
            Destroy
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--toggle-events-unmount">
            Unmount
          </button>
        </div>

        <div id="demo--toggle-events">
          <div className="xt-list xt-list-3 items-center mb-4" id="demo--toggle-events-elements">
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
              data-xt-group="0"
            >
              Toggle Group 0
            </button>
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
              data-xt-group="0"
            >
              Toggle Group 0
            </button>
            <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
              Toggle 1
            </button>
            <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
              Toggle 2
            </button>
          </div>

          <div className="xt-list xt-list-3 items-center" id="demo--toggle-events-targets">
            <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200" data-xt-group="0">Target Group 0</div>
            <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200" data-xt-group="0">Target Group 0</div>
            <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">Target 1</div>
            <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">Target 2</div>
          </div>
        </div>

        <div className="xt-card rounded-md text-black xt-links-default bg-gray-200 mt-6">
          <div
            className="text-sm py-6 px-7 overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56"
            id="demo--toggle-events-log"></div>
        </div>
      </div>
    )
  }
}

export default Demo
