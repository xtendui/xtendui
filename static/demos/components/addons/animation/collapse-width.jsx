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
        <div data-xt-toggle="{ elements: '.xt-button', targets: '.xt-toggle', collapseWidth: 'targets' }">
          <div className="xt-list xt-list-3 items-center mb-4">
            <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
              Toggle 0
            </button>

            <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
              Toggle 1
            </button>
          </div>

          <div className="xt-row xt-row-6">
            <div className="w-full md:w-6/12">
              <div className="xt-card rounded-md text-black xt-links-default bg-gray-200">
                <div className="xt-media-container bg-gray-200 rounded-md xt-ratio-37.5">
                  <div className="xt-media-inner xt-toggle overflow-hidden transition-all duration-500" data-xt-duration="500">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12">
              <div className="xt-card rounded-md text-black xt-links-default bg-gray-200">
                <div className="xt-media-container bg-gray-200 rounded-md xt-ratio-37.5">
                  <div className="xt-media-inner xt-toggle overflow-hidden transition-all duration-500" data-xt-duration="500">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
