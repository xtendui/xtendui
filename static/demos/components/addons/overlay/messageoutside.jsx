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
        <div className="xt-list xt-list-3 items-center justify-center">
          <div data-xt-overlay>
            <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
              left
            </button>

            <div className="xt-overlay">
              <div className="xt-backdrop bg-black opacity-25"></div>
              <div
                className="demo--overlay-messageoutside fixed h-full right-0 hidden md:flex items-center justify-center pointer-events-none"
              >
                <div className="w-10/12 lg:w-8/12">
                  <div className="xt-card rounded-md text-black xt-links-default bg-gray-200 pointer-events-auto">
                    <div className="text-base py-8 px-9">
                      <div className="xt-h4">Lorem ipsum</div>
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                        suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                        augue, sagittis vitae magna eget, vehicula scelerisque elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">
                <div className="xt-overlay-inner">
                  <div className="xt-card xt-min-h-screen shadow-overlay text-black xt-links-default bg-white">
                    <button
                      type="button"
                      className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                      aria-label="Close"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <div className="text-base py-8 px-9">
                      <div className="xt-h3">Lorem ipsum</div>
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                        suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                        augue, sagittis vitae magna eget, vehicula scelerisque elit.
                      </p>
                      <p>
                        Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                        justo.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                        ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.
                      </p>
                      <p>
                        Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                        justo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data-xt-overlay>
            <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
              right
            </button>

            <div className="xt-overlay">
              <div className="xt-backdrop bg-black opacity-25"></div>
              <div
                className="demo--overlay-messageoutside fixed h-full left-0 hidden md:flex items-center justify-center pointer-events-none"
              >
                <div className="w-10/12 lg:w-8/12">
                  <div className="xt-card rounded-md text-black xt-links-default bg-gray-200 pointer-events-auto">
                    <div className="text-base py-8 px-9">
                      <div className="xt-h4">Lorem ipsum</div>
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                        suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                        augue, sagittis vitae magna eget, vehicula scelerisque elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xt-overlay-container p-0 w-screen max-w-md ml-auto mr-0">
                <div className="xt-overlay-inner">
                  <div className="xt-card xt-min-h-screen shadow-overlay text-black xt-links-default bg-white">
                    <button
                      type="button"
                      className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                      aria-label="Close"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <div className="text-base py-8 px-9 md:text-lg md:py-9 md:px-10">
                      <div className="xt-h3">Lorem ipsum</div>
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                        suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                        augue, sagittis vitae magna eget, vehicula scelerisque elit.
                      </p>
                      <p>
                        Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                        justo.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                        ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.
                      </p>
                      <p>
                        Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                        justo.
                      </p>
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
