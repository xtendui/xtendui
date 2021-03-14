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
        <div className="listing py-10">
          <div className="container">
            <div className="xt-row xt-row-6 xt-row-stretch">
              <div className="w-full md:w-6/12 lg:w-4/12">
                <div className="listing-item block relative overflow-hidden w-full">
                  <div className="listing-item-front absolute inset-0 xt-card rounded-md text-black xt-links-default">
                    <div className="xt-media-container bg-gray-200 h-40">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col">
                      <div className="xt-card text-sm py-6 px-7 flex-initial py-0 border-l border-gray-300">
                        <div className="xt-h5">Lorem Ipsum</div>
                        <address className="xt-p font-sm not-italic">Street 42, 00134 City, Nation</address>
                      </div>
                    </div>
                  </div>

                  <div className="listing-item-back h-full xt-card rounded-md text-black xt-links-default">
                    <button
                      type="button"
                      className="xt-button xt-dismiss absolute z-last top-0 right-0 text-xl"
                      aria-label="Close"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <div className="xt-card text-sm py-6 px-7 flex-initial py-0 border-l border-gray-300">
                      <div className="xt-h5">Contacts</div>
                      <div className="xt-p font-sm">
                        <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br />
                        <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br />
                      </div>
                      <div className="xt-h5">Timetable</div>
                      <div className="xt-p font-sm">
                        <strong>Monday:</strong> 15:30–19:30<br />
                        <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30<br />
                        <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30<br />
                        <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30<br />
                        <strong>Friday:</strong> 10:00–13:00, 15:30–19:30<br />
                        <strong>Saturday:</strong> 10:00–19:30<br />
                        <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-4/12">
                <div className="listing-item block relative overflow-hidden w-full">
                  <div className="listing-item-front absolute inset-0 xt-card rounded-md text-black xt-links-default">
                    <div className="xt-media-container bg-gray-200 h-40">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col">
                      <div className="xt-card text-sm py-6 px-7 flex-initial py-0 border-l border-gray-300">
                        <div className="xt-h5">Lorem Ipsum</div>
                        <address className="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                      </div>
                    </div>
                  </div>

                  <div className="listing-item-back h-full xt-card rounded-md text-black xt-links-default">
                    <button
                      type="button"
                      className="xt-button xt-dismiss absolute z-last top-0 right-0 text-xl"
                      aria-label="Close"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <div className="xt-card text-sm py-6 px-7 flex-initial py-0 border-l border-gray-300">
                      <div className="xt-h5">Contacts</div>
                      <div className="xt-p font-sm">
                        <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br />
                        <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-4/12">
                <div className="listing-item block relative overflow-hidden w-full">
                  <div className="listing-item-front absolute inset-0 xt-card rounded-md text-black xt-links-default">
                    <div className="xt-media-container bg-gray-200 h-40">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col">
                      <div className="xt-card text-sm py-6 px-7 flex-initial py-0 border-l border-gray-300">
                        <div className="xt-h5">Lorem Ipsum</div>
                        <address className="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                      </div>
                    </div>
                  </div>

                  <div className="listing-item-back h-full xt-card rounded-md text-black xt-links-default">
                    <button
                      type="button"
                      className="xt-button xt-dismiss absolute z-last top-0 right-0 text-xl"
                      aria-label="Close"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <div className="xt-card text-sm py-6 px-7 flex-initial py-0 border-l border-gray-300">
                      <div className="xt-h5">Contacts</div>
                      <div className="xt-p font-sm">
                        <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br />
                        <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br />
                      </div>
                      <div className="xt-h5">Timetable</div>
                      <div className="xt-p font-sm">
                        <strong>Monday:</strong> 15:30–19:30<br />
                        <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30<br />
                        <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30<br />
                        <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30<br />
                        <strong>Friday:</strong> 10:00–13:00, 15:30–19:30<br />
                        <strong>Saturday:</strong> 10:00–19:30<br />
                        <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-4/12">
                <div className="listing-item block relative overflow-hidden w-full">
                  <div className="listing-item-front absolute inset-0 xt-card rounded-md text-black xt-links-default">
                    <div className="xt-media-container bg-gray-200 h-40">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col">
                      <div className="xt-card text-sm py-6 px-7 flex-initial py-0 border-l border-gray-300">
                        <div className="xt-h5">Lorem Ipsum</div>
                        <address className="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                      </div>
                    </div>
                  </div>

                  <div className="listing-item-back h-full xt-card rounded-md text-black xt-links-default">
                    <button
                      type="button"
                      className="xt-button xt-dismiss absolute z-last top-0 right-0 text-xl"
                      aria-label="Close"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <div className="xt-card text-sm py-6 px-7 flex-initial py-0 border-l border-gray-300">
                      <div className="xt-h5">Contacts</div>
                      <div className="xt-p font-sm">
                        <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br />
                        <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-4/12">
                <div className="listing-item block relative overflow-hidden w-full">
                  <div className="listing-item-front absolute inset-0 xt-card rounded-md text-black xt-links-default">
                    <div className="xt-media-container bg-gray-200 h-40">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col">
                      <div className="xt-card text-sm py-6 px-7 flex-initial py-0 border-l border-gray-300">
                        <div className="xt-h5">Lorem Ipsum</div>
                        <address className="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                      </div>
                    </div>
                  </div>

                  <div className="listing-item-back h-full xt-card rounded-md text-black xt-links-default">
                    <button
                      type="button"
                      className="xt-button xt-dismiss absolute z-last top-0 right-0 text-xl"
                      aria-label="Close"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <div className="xt-card text-sm py-6 px-7 flex-initial py-0 border-l border-gray-300">
                      <div className="xt-h5">Contacts</div>
                      <div className="xt-p font-sm">
                        <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br />
                        <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br />
                      </div>
                      <div className="xt-h5">Timetable</div>
                      <div className="xt-p font-sm">
                        <strong>Monday:</strong> 15:30–19:30<br />
                        <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30<br />
                        <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30<br />
                        <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30<br />
                        <strong>Friday:</strong> 10:00–13:00, 15:30–19:30<br />
                        <strong>Saturday:</strong> 10:00–19:30<br />
                        <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-4/12">
                <div className="listing-item block relative overflow-hidden w-full">
                  <div className="listing-item-front absolute inset-0 xt-card rounded-md text-black xt-links-default">
                    <div className="xt-media-container bg-gray-200 h-40">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col">
                      <div className="xt-card text-sm py-6 px-7 flex-initial py-0 border-l border-gray-300">
                        <div className="xt-h5">Lorem Ipsum</div>
                        <address className="xt-p font-sm not-italic">Street Lorem Ipsum 42, 00134 City, Nation</address>
                      </div>
                    </div>
                  </div>

                  <div className="listing-item-back h-full xt-card rounded-md text-black xt-links-default">
                    <button
                      type="button"
                      className="xt-button xt-dismiss absolute z-last top-0 right-0 text-xl"
                      aria-label="Close"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <div className="xt-card text-sm py-6 px-7 flex-initial py-0 border-l border-gray-300">
                      <div className="xt-h5">Contacts</div>
                      <div className="xt-p font-sm">
                        <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br />
                        <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br />
                      </div>
                    </div>
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
