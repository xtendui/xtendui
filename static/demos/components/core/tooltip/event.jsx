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
        <div data-xt-tooltip="{ on: 'click', off: 'click' }">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          >
            click
          </button>

          <div className="xt-tooltip p-2">
            <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum dolor sit amet
              <div className="inline-block" data-xt-tooltip="{ on: 'click', off: 'click', position: 'auto' }">
                <a href="#">nested</a>

                <div className="xt-tooltip p-2">
                  <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
                    Consectetur adipiscing elit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form className="text-sm mt-4">
          <div data-xt-tooltip="{ elements: ':scope > input', on: 'focus', off: 'blur' }">
            <input
              type="text"
              className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
              aria-label="Focus"
              placeholder="Focus"
            />

            <div className="xt-tooltip p-2">
              <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Demo
