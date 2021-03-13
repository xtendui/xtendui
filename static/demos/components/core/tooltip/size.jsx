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
          <div data-xt-tooltip>
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            >
              small
            </button>

            <div className="xt-tooltip p-2">
              <div className="relative text-3xs py-1 px-2 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>

          <div data-xt-tooltip>
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            >
              medium
            </button>

            <div className="xt-tooltip p-2">
              <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>

          <div data-xt-tooltip>
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            >
              large
            </button>

            <div className="xt-tooltip p-2">
              <div className="relative text-base py-2.5 px-4 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>

          <div data-xt-tooltip>
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            >
              max-width
            </button>

            <div className="xt-tooltip p-2">
              <div className="relative text-xs py-2 px-3.5 max-w-lg rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc
                ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium
                metus egestas congue.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
