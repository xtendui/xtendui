const img = require('components/snippets/img').default
const imgAlt = require('components/snippets/img').alt

export default () => {
  return `
<div class="block-listing">
  <div class="container">
    <div class="block-listing_inner">
      <div class="row">

        <div class="block-listing_col">
          <div class="block-listing_item">
            <div class="block-listing_item_inner">

              <div class="card block-listing_front">
                <div class="card-design"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-asset">
                      ${img({})}
                    </div>
                    <div class="card-block card-item">
                      <div class="card-title">
                        Lorem Ipsum
                      </div>
                      <address class="block-listing_address">
                        Street lorem ipsum 42, 00134 City, Nation
                      </address>
                      <div class="block-listing_btns">
                        <a href="#" class="btn btn-text">
                          Take me here
                        </a>
                        <button type="button" class="btn btn-primary block-listing_action">
                            More info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card block-listing_back">
                <div class="card-design"></div>
                <div class="btn btn-close" aria-label="Close"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-block card-item">
                      <div class="block-listing_subtitle">
                        Contacts
                      </div>
                      <div class="block-listing_additional">
                        <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                        <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                      </div>
                      <div class="block-listing_subtitle">
                        Timetable
                      </div>
                      <div class="block-listing_additional">
                        <strong>Monday:</strong> 15:30–19:30<br/>
                        <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Friday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Saturday:</strong> 10:00–19:30<br/>
                        <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="block-listing_col">
          <div class="block-listing_item">
            <div class="block-listing_item_inner">

              <div class="card block-listing_front">
                <div class="card-design"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-asset">
                      ${imgAlt({})}
                    </div>
                    <div class="card-block card-item">
                      <div class="card-title">
                        Dolor sit amet
                      </div>
                      <address class="block-listing_address">
                        Street lorem ipsum 42, 00134 City, Nation
                      </address>
                      <div class="block-listing_btns">
                        <a href="#" class="btn btn-text">
                          Take me here
                        </a>
                        <button type="button" class="btn btn-primary block-listing_action">
                            More info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card block-listing_back">
                <div class="card-design"></div>
                <div class="btn btn-close" aria-label="Close"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-block card-item">
                      <div class="block-listing_subtitle">
                        Contacts
                      </div>
                      <div class="block-listing_additional">
                        <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                        <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                      </div>
                      <div class="block-listing_subtitle">
                        Timetable
                      </div>
                      <div class="block-listing_additional">
                        <strong>Monday:</strong> 15:30–19:30<br/>
                        <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Friday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Saturday:</strong> 10:00–19:30<br/>
                        <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="block-listing_col">
          <div class="block-listing_item">
            <div class="block-listing_item_inner">

              <div class="card block-listing_front">
                <div class="card-design"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-asset">
                      ${img({})}
                    </div>
                    <div class="card-block card-item">
                      <div class="card-title">
                        Consectetur adipiscing elit. Proin molestie diam nec euismod commodo
                      </div>
                      <address class="block-listing_address">
                        Street lorem ipsum 42, 00134 City, Nation
                      </address>
                      <div class="block-listing_btns">
                        <a href="#" class="btn btn-text">
                          Take me here
                        </a>
                        <button type="button" class="btn btn-primary block-listing_action">
                            More info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card block-listing_back">
                <div class="card-design"></div>
                <div class="btn btn-close" aria-label="Close"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-block card-item">
                      <div class="block-listing_subtitle">
                        Contacts
                      </div>
                      <div class="block-listing_additional">
                        <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                        <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                      </div>
                      <div class="block-listing_subtitle">
                        Timetable
                      </div>
                      <div class="block-listing_additional">
                        <strong>Monday:</strong> 15:30–19:30<br/>
                        <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Friday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Saturday:</strong> 10:00–19:30<br/>
                        <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="block-listing_col">
          <div class="block-listing_item">
            <div class="block-listing_item_inner">

              <div class="card block-listing_front">
                <div class="card-design"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-asset">
                      ${img({})}
                    </div>
                    <div class="card-block card-item">
                      <div class="card-title">
                        Lorem Ipsum
                      </div>
                      <address class="block-listing_address">
                        Street lorem ipsum 42, 00134 City, Nation
                      </address>
                      <div class="block-listing_btns">
                        <a href="#" class="btn btn-text">
                          Take me here
                        </a>
                        <button type="button" class="btn btn-primary block-listing_action">
                            More info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card block-listing_back">
                <div class="card-design"></div>
                <div class="btn btn-close" aria-label="Close"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-block card-item">
                      <div class="block-listing_subtitle">
                        Contacts
                      </div>
                      <div class="block-listing_additional">
                        <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                        <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                      </div>
                      <div class="block-listing_subtitle">
                        Timetable
                      </div>
                      <div class="block-listing_additional">
                        <strong>Monday:</strong> 15:30–19:30<br/>
                        <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Friday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Saturday:</strong> 10:00–19:30<br/>
                        <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="block-listing_col">
          <div class="block-listing_item">
            <div class="block-listing_item_inner">

              <div class="card block-listing_front">
                <div class="card-design"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-asset">
                      ${imgAlt({})}
                    </div>
                    <div class="card-block card-item">
                      <div class="card-title">
                        Dolor sit amet
                      </div>
                      <address class="block-listing_address">
                        Street lorem ipsum 42, 00134 City, Nation
                      </address>
                      <div class="block-listing_btns">
                        <a href="#" class="btn btn-text">
                          Take me here
                        </a>
                        <button type="button" class="btn btn-primary block-listing_action">
                            More info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card block-listing_back">
                <div class="card-design"></div>
                <div class="btn btn-close" aria-label="Close"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-block card-item">
                      <div class="block-listing_subtitle">
                        Contacts
                      </div>
                      <div class="block-listing_additional">
                        <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                        <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                      </div>
                      <div class="block-listing_subtitle">
                        Timetable
                      </div>
                      <div class="block-listing_additional">
                        <strong>Monday:</strong> 15:30–19:30<br/>
                        <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Friday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Saturday:</strong> 10:00–19:30<br/>
                        <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="block-listing_col">
          <div class="block-listing_item">
            <div class="block-listing_item_inner">

              <div class="card block-listing_front">
                <div class="card-design"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-asset">
                      ${img({})}
                    </div>
                    <div class="card-block card-item">
                      <div class="card-title">
                        Consectetur adipiscing elit. Proin molestie diam nec euismod commodo
                      </div>
                      <address class="block-listing_address">
                        Street lorem ipsum 42, 00134 City, Nation
                      </address>
                      <div class="block-listing_btns">
                        <a href="#" class="btn btn-text">
                          Take me here
                        </a>
                        <button type="button" class="btn btn-primary block-listing_action">
                            More info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card block-listing_back">
                <div class="card-design"></div>
                <div class="btn btn-close" aria-label="Close"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-block card-item">
                      <div class="block-listing_subtitle">
                        Contacts
                      </div>
                      <div class="block-listing_additional">
                        <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                        <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                      </div>
                      <div class="block-listing_subtitle">
                        Timetable
                      </div>
                      <div class="block-listing_additional">
                        <strong>Monday:</strong> 15:30–19:30<br/>
                        <strong>Tuesday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Wednesday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Thursday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Friday:</strong> 10:00–13:00, 15:30–19:30<br/>
                        <strong>Saturday:</strong> 10:00–19:30<br/>
                        <strong>Sunday:</strong> 10:00–13:00, 15:30–19:30
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
`
}
