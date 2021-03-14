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
        <form className="text-sm">
          <div className="xt-row xt-row-x-6 xt-row-y-4">
            <div className="w-full">
              <label className="xt-label mb-3 text-black text-opacity-75 font-semibold">
                Lorem ipsum
                <div className="ml-4">
                  <div className="xt-list xt-list-3 items-center">
                    <a href="#" className="xt-button xt-link"> link #1 </a>
                    <a href="#" className="xt-button xt-link"> link #2 </a>
                  </div>
                </div>
              </label>
              <input type="text" className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition" aria-label="Lorem ipsum" />
            </div>

            <div className="w-full">
              <label className="xt-label mb-3 text-black text-opacity-75 font-semibold">
                Dolor sit amet
                <div className="ml-auto">
                  <div className="xt-list xt-list-3 items-center">
                    <a href="#" className="xt-button xt-link"> link #1 </a>
                    <a href="#" className="xt-button xt-link"> link #2 </a>
                  </div>
                </div>
              </label>
              <input type="text" className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition" aria-label="Dolor sit amet" />
            </div>

            <div className="w-full">
              <div className="xt-row xt-row-x-6 xt-row-y-4">
                <div className="w-full md:w-2/12 md:self-center">
                  <label className="xt-label flex-col text-black text-opacity-75 font-semibold">
                    Lorem ipsum
                    <div className="mt-2">
                      <div className="xt-list xt-list-3 items-center">
                        <a href="#" className="xt-button xt-link"> link #1 </a>
                        <a href="#" className="xt-button xt-link"> link #2 </a>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="w-full md:w-10/12">
                  <input type="text" className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition" aria-label="Lorem ipsum" />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="xt-row xt-row-x-6 xt-row-y-4">
                <div className="w-full md:w-2/12 md:self-center">
                  <label className="xt-label flex-col text-black text-opacity-75 font-semibold">
                    Dolor sit amet
                    <div className="mt-auto">
                      <div className="xt-list xt-list-3 items-center">
                        <a href="#" className="xt-button xt-link"> link #1 </a>
                        <a href="#" className="xt-button xt-link"> link #2 </a>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="w-full md:w-10/12">
                  <input type="text" className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition" aria-label="Dolor sit amet" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Demo
