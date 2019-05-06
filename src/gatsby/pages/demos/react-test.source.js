import React from "react"

import Xt from "xtend-library";

class Component extends React.Component {
  componentDidMount() {
    console.log('bbb', Xt, document, document.querySelectorAll('.drop--disable'))
  }

  render() {
    return (
      <div>
        <div className="drop_outer drop--disable" data-xt-drop>
          <button type="button" className="btn btn--primary">
            <span>Toggle</span>
          </button>
          <div className="drop">
            <div className="drop_inner">
              <div className="drop_design"></div>
              <div className="drop_content">
                <ul className="list list--drop">
                  <li>
                    <button type="button" className="btn">
                      <span>Lorem ipsum dolor</span>
                    </button>
                  </li>
                  <li>
                    <button type="button" className="btn">
                      <span>Dolor sit</span>
                    </button>
                  </li>
                  <li>
                    <button type="button" className="btn">
                      <span>Amet</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="drop_outer drop--disable-example" data-xt-drop>
          <button type="button" className="btn btn--primary">
            <span>Toggle</span>
          </button>
          <div className="drop">
            <div className="drop_inner">
              <div className="drop_design"></div>
              <div className="drop_content">
                <ul className="list list--drop">
                  <li>
                    <button type="button" className="btn">
                      <span>Lorem ipsum dolor</span>
                    </button>
                  </li>
                  <li>
                    <button type="button" className="btn">
                      <span>Dolor sit</span>
                    </button>
                  </li>
                  <li className="drop_outer event-limit" data-xt-drop>
                    <button type="button" className="btn">
                      <span>Toggle</span>
                    </button>
                    <div className="drop drop--primary drop--after drop--middle">
                      <div className="drop_inner">
                        <div className="drop_design"></div>
                        <div className="drop_content">
                          <ul className="list list--drop">
                            <li>
                              <button type="button" className="btn">
                                <span>Lorem ipsum dolor</span>
                              </button>
                            </li>
                            <li>
                              <button type="button" className="btn">
                                <span>Dolor sit</span>
                              </button>
                            </li>
                            <li className="drop_outer event-limit" data-xt-drop>
                              <button type="button" className="btn">
                                <span>Toggle</span>
                              </button>
                              <div className="drop drop--secondary drop--center drop--middle">
                                <div className="drop_inner">
                                  <div className="drop_design"></div>
                                  <div className="drop_content">
                                    <ul className="list list--drop">
                                      <li>
                                        <button type="button" className="btn">
                                          <span>Lorem ipsum dolor</span>
                                        </button>
                                      </li>
                                      <li>
                                        <button type="button" className="btn">
                                          <span>Dolor sit</span>
                                        </button>
                                      </li>
                                      <li>
                                        <button type="button" className="btn">
                                          <span>Amet</span>
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
      </div>
    )
  }
}

export default Component
