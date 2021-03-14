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
          className="multilevel relative demo--multilevel"
          data-xt-toggle="{
          elements: '.multilevel-reset, .multilevel-list > button',
          targets: ':scope > .xt-toggle',
          min: 1,
          duration: 500,
          queue: false
        }"
        >
          <nav
            className="xt-toggle xt-toggle-absolute transform ease-out duration-500 -translate-x-10 opacity-0 active:ease-out active:delay-200 active:translate-x-0 active:opacity-100"
            data-xt-group="initial"
          >
            <div className="xt-h5  flex items-center justify-between">
              <div>Menu</div>
              <button type="button" className="hidden multilevel-reset" data-xt-group="initial">Back</button>
            </div>

            <nav className="xt-list flex-col multilevel-list">
              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
                data-xt-group="cat-0"
              >
                Category 0
              </button>
              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
                data-xt-group="cat-1"
              >
                Category 1
              </button>
              <a href="#" className="xt-button text-xs py-2 px-3.5 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"> Link 0 </a>
              <a href="#" className="xt-button text-xs py-2 px-3.5 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"> Link 1 </a>
            </nav>
          </nav>

          <nav
            className="xt-toggle xt-toggle-absolute transform ease-out duration-500 -translate-x-10 opacity-0 active:ease-out active:delay-200 active:translate-x-0 active:opacity-100"
            data-xt-group="cat-0"
          >
            <div className="xt-h5  flex items-center justify-between">
              <div>Category 0</div>
              <button
                type="button"
                className="xt-button text-3xs py-1.5 px-2.5 text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition multilevel-reset"
                data-xt-group="initial"
              >
                Back
              </button>
            </div>

            <nav className="xt-list flex-col multilevel-list">
              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
                data-xt-group="cat-0a"
              >
                Category 0a
              </button>
              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
                data-xt-group="cat-0b"
              >
                Category 0b
              </button>
              <a href="#" className="xt-button text-xs py-2 px-3.5 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"> Link 0 </a>
              <a href="#" className="xt-button text-xs py-2 px-3.5 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"> Link 1 </a>
            </nav>
          </nav>

          <nav className="xt-toggle xt-toggle-absolute" data-xt-group="cat-0a">
            <div className="xt-h5  flex items-center justify-between">
              <div>Category 0a</div>
              <button
                type="button"
                className="xt-button text-3xs py-1.5 px-2.5 text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition multilevel-reset"
                data-xt-group="cat-0"
              >
                Back
              </button>
            </div>

            <nav className="xt-list flex-col multilevel-list">
              <a href="#" className="xt-button text-xs py-2 px-3.5 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"> Link 0 </a>
              <a href="#" className="xt-button text-xs py-2 px-3.5 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"> Link 1 </a>
            </nav>
          </nav>

          <nav
            className="xt-toggle xt-toggle-absolute transform ease-out duration-500 -translate-x-10 opacity-0 active:ease-out active:delay-200 active:translate-x-0 active:opacity-100"
            data-xt-group="cat-0b"
          >
            <div className="xt-h5  flex items-center justify-between">
              <div>Category 0b</div>
              <button
                type="button"
                className="xt-button text-3xs py-1.5 px-2.5 text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition multilevel-reset"
                data-xt-group="cat-0"
              >
                Back
              </button>
            </div>

            <nav className="xt-list flex-col multilevel-list">
              <a href="#" className="xt-button text-xs py-2 px-3.5 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"> Link 0 </a>
              <a href="#" className="xt-button text-xs py-2 px-3.5 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"> Link 1 </a>
            </nav>
          </nav>

          <nav
            className="xt-toggle xt-toggle-absolute transform ease-out duration-500 -translate-x-10 opacity-0 active:ease-out active:delay-200 active:translate-x-0 active:opacity-100"
            data-xt-group="cat-1"
          >
            <div className="xt-h5  flex items-center justify-between">
              <div>Category 1</div>
              <button
                type="button"
                className="xt-button text-3xs py-1.5 px-2.5 text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition multilevel-reset"
                data-xt-group="initial"
              >
                Back
              </button>
            </div>

            <nav className="xt-list flex-col multilevel-list">
              <a href="#" className="xt-button text-xs py-2 px-3.5 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"> Link 0 </a>
              <a href="#" className="xt-button text-xs py-2 px-3.5 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"> Link 1 </a>
            </nav>
          </nav>
        </div>
      </div>
    )
  }
}

export default Demo
