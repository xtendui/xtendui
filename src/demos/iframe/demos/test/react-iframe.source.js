import React from 'react'

class Component extends React.Component {
  componentDidMount() {
    console.log('react iframe loaded');
  }
  render() {
    return (
      <div className="drop_outer" data-xt-drop>
        <button type="button" className="btn btn--primary">
          <span>Toggle</span>
        </button>
        <div className="drop">
          <div className="drop_inner">
            <div className="drop_design"></div>
            <div className="drop_content">
              <ul className="list list--drop">
                <li>
                  <button type="button">
                    <span>Lorem ipsum dolor</span>
                  </button>
                </li>
                <li>
                  <button type="button">
                    <span>Dolor sit</span>
                  </button>
                </li>
                <li className="drop_outer event-limit" data-xt-drop>
                  <button type="button">
                    <span>Toggle</span>
                  </button>
                  <div className="drop drop--primary drop--after drop--middle">
                    <div className="drop_inner">
                      <div className="drop_design"></div>
                      <div className="drop_content">
                        <ul className="list list--drop">
                          <li>
                            <button type="button">
                              <span>Lorem ipsum dolor</span>
                            </button>
                          </li>
                          <li>
                            <button type="button">
                              <span>Dolor sit</span>
                            </button>
                          </li>
                          <li className="drop_outer event-limit" data-xt-drop>
                            <button type="button">
                              <span>Toggle</span>
                            </button>
                            <div className="drop drop--secondary drop--center drop--middle">
                              <div className="drop_inner">
                                <div className="drop_design"></div>
                                <div className="drop_content">
                                  <ul className="list list--drop">
                                    <li>
                                      <button type="button">
                                        <span>Lorem ipsum dolor</span>
                                      </button>
                                    </li>
                                    <li>
                                      <button type="button">
                                        <span>Dolor sit</span>
                                      </button>
                                    </li>
                                    <li>
                                      <button type="button">
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
    )
  }
}

export default Component
