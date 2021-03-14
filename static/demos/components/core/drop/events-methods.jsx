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
            id="demo--drop-events-first-element">
            1st element
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--drop-events-first-target">
            1st target
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--drop-events-add">
            Add
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--drop-events-remove">
            Remove
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--drop-events-reinit">
            Reinit
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--drop-events-restart">
            Restart
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--drop-events-destroy">
            Destroy
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--drop-events-unmount">
            Unmount
          </button>
        </div>

        <div className="xt-list xt-list-3 items-center" id="demo--drop-events" title="Object">
          <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            Drop 0
          </button>

          <div className="xt-drop p-4" title="Target 0">
            <div className="xt-card w-64 py-3.5 rounded-md shadow-drop text-black xt-links-default bg-white">
              <nav className="xt-list flex-col">
                <a href="#" className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </a>
                <button type="button" className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                  Dolor sit
                </button>
                <button type="button" className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">Amet</button>
              </nav>
            </div>
          </div>

          <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            Drop 1
          </button>

          <div className="xt-drop p-4" title="Target 1">
            <div className="xt-card w-64 py-3.5 rounded-md shadow-drop text-black xt-links-default bg-white">
              <nav className="xt-list flex-col">
                <a href="#" className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </a>
                <button type="button" className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                  Dolor sit
                </button>
                <button type="button" className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">Amet</button>
              </nav>
            </div>
          </div>
        </div>

        <div className="xt-card rounded-md text-black xt-links-default bg-gray-200 mt-6">
          <div
            className="text-sm py-6 px-7 overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56"
            id="demo--drop-events-log"></div>
        </div>
      </div>
    )
  }
}

export default Demo
