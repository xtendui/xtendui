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
        <div className="py-10">
          <div className="xt-slider slider--listing" data-xt-slider="{ contain: true, jumpOverflow: true }">
            <div className="xt-slides">
              <div className="container">
                <div className="xt-h2 mb-8">Latest Products</div>

                <div className="xt-slides-inner xt-row xt-row-4">
                  <div className="xt-slide w-6/12 md:w-4/12">
                    <a href="#" className="listing-item block">
                      <div className="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                        <div className="xt-media-inner">
                          <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                        </div>
                        <div className="absolute top-0 left-0 py-2 px-4 bg-black bg-opacity-50 text-white">
                          <div className="xt-list xt-list-3 items-center flex-nowrap">
                            <div className="text-xl font-semibold">-35%</div>
                            <div className="max-w-xs text-xs leading-tight uppercase opacity-50">
                              For Exhibition<br />Renewal
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="listing-item-content py-4">
                        <div className="xt-h5">Lorem ipsum</div>
                        <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                      </div>
                    </a>
                  </div>

                  <div className="xt-slide w-6/12 md:w-4/12">
                    <a href="#" className="listing-item block">
                      <div className="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                        <div className="xt-media-inner">
                          <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                        </div>
                        <div className="absolute top-0 left-0 py-2 px-4 bg-black bg-opacity-50 text-white">
                          <div className="xt-list xt-list-3 items-center flex-nowrap">
                            <div className="text-xl font-semibold">-40%</div>
                            <div className="max-w-xs text-xs leading-tight uppercase opacity-50">Black<br />Friday</div>
                          </div>
                        </div>
                      </div>
                      <div className="listing-item-content py-4">
                        <div className="xt-h5">Dolor sit amet</div>
                        <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                      </div>
                    </a>
                  </div>

                  <div className="xt-slide w-6/12 md:w-4/12">
                    <a href="#" className="listing-item block">
                      <div className="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                        <div className="xt-media-inner">
                          <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                        </div>
                      </div>
                      <div className="listing-item-content py-4">
                        <div className="xt-h5">Lorem ipsum</div>
                        <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                      </div>
                    </a>
                  </div>

                  <div className="xt-slide w-6/12 md:w-4/12">
                    <a href="#" className="listing-item block">
                      <div className="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                        <div className="xt-media-inner">
                          <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                        </div>
                      </div>
                      <div className="listing-item-content py-4">
                        <div className="xt-h5">Dolor sit amet</div>
                        <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                      </div>
                    </a>
                  </div>

                  <div className="xt-slide w-6/12 md:w-4/12">
                    <a href="#" className="listing-item block">
                      <div className="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                        <div className="xt-media-inner">
                          <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                        </div>
                      </div>
                      <div className="listing-item-content py-4">
                        <div className="xt-h5">Lorem ipsum</div>
                        <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                      </div>
                    </a>
                  </div>

                  <div className="xt-slide w-6/12 md:w-4/12">
                    <a href="#" className="listing-item block">
                      <div className="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                        <div className="xt-media-inner">
                          <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                        </div>
                      </div>
                      <div className="listing-item-content py-4">
                        <div className="xt-h5">Dolor sit amet</div>
                        <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                      </div>
                    </a>
                  </div>

                  <div className="xt-slide w-6/12 md:w-4/12">
                    <a href="#" className="listing-item block">
                      <div className="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                        <div className="xt-media-inner">
                          <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                        </div>
                      </div>
                      <div className="listing-item-content py-4">
                        <div className="xt-h5">Lorem ipsum</div>
                        <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                      </div>
                    </a>
                  </div>

                  <div className="xt-slide w-6/12 md:w-4/12">
                    <a href="#" className="listing-item block">
                      <div className="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                        <div className="xt-media-inner">
                          <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                        </div>
                      </div>
                      <div className="listing-item-content py-4">
                        <div className="xt-h5">Dolor sit amet</div>
                        <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                      </div>
                    </a>
                  </div>
                </div>

                <nav className="xt-slider-pagination">
                  <button
                    type="button"
                    className="xt-button button-default xt-ignore"
                    data-xt-pag
                    title="Slide xt-num"
                  ></button>
                </nav>
              </div>
            </div>
          </div>

          <div className="listing">
            <div className="container">
              <div className="xt-h2 mb-8">Category</div>

              <div className="xt-row xt-row-6">
                <div className="w-6/12 md:w-4/12">
                  <a href="#" className="listing-item block">
                    <div className="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                      </div>
                      <div className="absolute top-0 left-0 py-2 px-4 bg-black bg-opacity-50 text-white">
                        <div className="xt-list xt-list-3 items-center flex-nowrap">
                          <div className="text-xl font-semibold">-35%</div>
                          <div className="max-w-xs text-xs leading-tight uppercase opacity-50">For Exhibition<br />Renewal</div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-item-content py-4">
                      <div className="xt-h5">Lorem ipsum</div>
                      <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                    </div>
                  </a>
                </div>

                <div className="w-6/12 md:w-4/12">
                  <a href="#" className="listing-item block">
                    <div className="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                      </div>
                      <div className="absolute top-0 left-0 py-2 px-4 bg-black bg-opacity-50 text-white">
                        <div className="xt-list xt-list-3 items-center flex-nowrap">
                          <div className="text-xl font-semibold">-40%</div>
                          <div className="max-w-xs text-xs leading-tight uppercase opacity-50">Black<br />Friday</div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-item-content py-4">
                      <div className="xt-h5">Dolor sit amet</div>
                      <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                    </div>
                  </a>
                </div>

                <div className="w-6/12 md:w-4/12">
                  <a href="#" className="listing-item block">
                    <div className="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                      </div>
                    </div>
                    <div className="listing-item-content py-4">
                      <div className="xt-h5">Lorem ipsum</div>
                      <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                    </div>
                  </a>
                </div>

                <div className="w-6/12 md:w-4/12">
                  <a href="#" className="listing-item block">
                    <div className="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                      </div>
                    </div>
                    <div className="listing-item-content py-4">
                      <div className="xt-h5">Dolor sit amet</div>
                      <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                    </div>
                  </a>
                </div>

                <div className="w-6/12 md:w-4/12">
                  <a href="#" className="listing-item block">
                    <div className="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                      </div>
                    </div>
                    <div className="listing-item-content py-4">
                      <div className="xt-h5">Lorem Ipsum</div>
                      <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                    </div>
                  </a>
                </div>

                <div className="w-6/12 md:w-4/12">
                  <a href="#" className="listing-item block">
                    <div className="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                      </div>
                    </div>
                    <div className="listing-item-content py-4">
                      <div className="xt-h5">Dolor sit amet</div>
                      <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                    </div>
                  </a>
                </div>

                <div className="w-6/12 md:w-4/12">
                  <a href="#" className="listing-item block">
                    <div className="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                      </div>
                    </div>
                    <div className="listing-item-content py-4">
                      <div className="xt-h5">Lorem ipsum</div>
                      <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                    </div>
                  </a>
                </div>

                <div className="w-6/12 md:w-4/12">
                  <a href="#" className="listing-item block">
                    <div className="xt-media-container bg-gray-200 overflow-hidden xt-ratio-75">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                      </div>
                    </div>
                    <div className="listing-item-content py-4">
                      <div className="xt-h5">Dolor sit amet</div>
                      <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                    </div>
                  </a>
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
