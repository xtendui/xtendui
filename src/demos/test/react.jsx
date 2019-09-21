import React from 'react'

class Component extends React.Component {
  render() {
    return (
      <div className="drop_outer" data-xt-drop>
        <button type="button" className="btn btn--primary">
          Toggle
        </button>
        <div className="drop">
          <div className="drop_inner">
            <div className="drop_design"></div>
            <div className="drop_content">
              <ul className="list list--drop">
                <li>
                  <button type="button" className="btn">
                    Lorem ipsum dolor
                  </button>
                </li>
                <li>
                  <button type="button" className="btn">
                    Dolor sit
                  </button>
                </li>
                <li className="drop_outer event-limit" data-xt-drop>
                  <button type="button" className="btn">
                    Toggle
                  </button>
                  <div className="drop drop--primary drop--after drop--middle">
                    <div className="drop_inner">
                      <div className="drop_design"></div>
                      <div className="drop_content">
                        <ul className="list list--drop">
                          <li>
                            <button type="button" className="btn">
                              Lorem ipsum dolor
                            </button>
                          </li>
                          <li>
                            <button type="button" className="btn">
                              Dolor sit
                            </button>
                          </li>
                          <li className="drop_outer event-limit" data-xt-drop>
                            <button type="button" className="btn">
                              Toggle
                            </button>
                            <div className="drop drop--secondary drop--center drop--middle">
                              <div className="drop_inner">
                                <div className="drop_design"></div>
                                <div className="drop_content">
                                  <ul className="list list--drop">
                                    <li>
                                      <button type="button" className="btn">
                                        Lorem ipsum dolor
                                      </button>
                                    </li>
                                    <li>
                                      <button type="button" className="btn">
                                        Dolor sit
                                      </button>
                                    </li>
                                    <li>
                                      <button type="button" className="btn">
                                        Amet
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Component
