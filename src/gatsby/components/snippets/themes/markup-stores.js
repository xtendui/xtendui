const img = require('components/snippets/img').default
const imgAlt = require('components/snippets/img').alt
const iconX = require('components/snippets/icons').iconX

export default () => {
  return `
<div class="listing">
  <div class="container">
    <div class="listing_inner">
      <div class="row">

        <div class="listing_col">
          <div class="listing_item">
            <div class="listing_item_inner">

              <div class="card listing_front">
                <div class="card-design"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="w-full">
                      ${img({})}
                    </div>
                    <div class="card-item listing_content">
                      <div class="h4">
                        Lorem Ipsum
                      </div>
                      <address class="listing_address">
                        Street lorem ipsum 42, 00134 City, Nation
                      </address>
                      <div class="listing_btns">
                        <a href="#" class="btn">
                          Take me here
                        </a>
                        <button type="button" class="btn btn-primary listing_action">
                            More info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card listing_back">
                <div class="card-design"></div>
                <div class="btn btn-close p-5 text-2xl" aria-label="Close">
                  ${iconX()}
                </div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-item listing_content">
                      <div class="listing_subtitle">
                        Contacts
                      </div>
                      <div class="listing_additional">
                        <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                        <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                      </div>
                      <div class="listing_subtitle">
                        Timetable
                      </div>
                      <div class="listing_additional">
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

        <div class="listing_col">
          <div class="listing_item">
            <div class="listing_item_inner">

              <div class="card listing_front">
                <div class="card-design"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="w-full">
                      ${imgAlt({})}
                    </div>
                    <div class="card-item listing_content">
                      <div class="h4">
                        Dolor sit amet
                      </div>
                      <address class="listing_address">
                        Street lorem ipsum 42, 00134 City, Nation
                      </address>
                      <div class="listing_btns">
                        <a href="#" class="btn">
                          Take me here
                        </a>
                        <button type="button" class="btn btn-primary listing_action">
                            More info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card listing_back">
                <div class="card-design"></div>
                <div class="btn btn-close p-5 text-2xl" aria-label="Close">
                  ${iconX()}
                </div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-item listing_content">
                      <div class="listing_subtitle">
                        Contacts
                      </div>
                      <div class="listing_additional">
                        <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                        <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                      </div>
                      <div class="listing_subtitle">
                        Timetable
                      </div>
                      <div class="listing_additional">
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

        <div class="listing_col">
          <div class="listing_item">
            <div class="listing_item_inner">

              <div class="card listing_front">
                <div class="card-design"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="w-full">
                      ${img({})}
                    </div>
                    <div class="card-item listing_content">
                      <div class="h4">
                        Consectetur adipiscing elit. Proin molestie diam nec euismod commodo
                      </div>
                      <address class="listing_address">
                        Street lorem ipsum 42, 00134 City, Nation
                      </address>
                      <div class="listing_btns">
                        <a href="#" class="btn">
                          Take me here
                        </a>
                        <button type="button" class="btn btn-primary listing_action">
                            More info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card listing_back">
                <div class="card-design"></div>
                <div class="btn btn-close p-5 text-2xl" aria-label="Close">
                  ${iconX()}
                </div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-item listing_content">
                      <div class="listing_subtitle">
                        Contacts
                      </div>
                      <div class="listing_additional">
                        <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                        <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                      </div>
                      <div class="listing_subtitle">
                        Timetable
                      </div>
                      <div class="listing_additional">
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

        <div class="listing_col">
          <div class="listing_item">
            <div class="listing_item_inner">

              <div class="card listing_front">
                <div class="card-design"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="w-full">
                      ${img({})}
                    </div>
                    <div class="card-item listing_content">
                      <div class="h4">
                        Lorem Ipsum
                      </div>
                      <address class="listing_address">
                        Street lorem ipsum 42, 00134 City, Nation
                      </address>
                      <div class="listing_btns">
                        <a href="#" class="btn">
                          Take me here
                        </a>
                        <button type="button" class="btn btn-primary listing_action">
                            More info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card listing_back">
                <div class="card-design"></div>
                <div class="btn btn-close p-5 text-2xl" aria-label="Close">
                  ${iconX()}
                </div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-item listing_content">
                      <div class="listing_subtitle">
                        Contacts
                      </div>
                      <div class="listing_additional">
                        <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                        <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                      </div>
                      <div class="listing_subtitle">
                        Timetable
                      </div>
                      <div class="listing_additional">
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

        <div class="listing_col">
          <div class="listing_item">
            <div class="listing_item_inner">

              <div class="card listing_front">
                <div class="card-design"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="w-full">
                      ${imgAlt({})}
                    </div>
                    <div class="card-item">
                      <div class="h4">
                        Dolor sit amet
                      </div>
                      <address class="listing_address">
                        Street lorem ipsum 42, 00134 City, Nation
                      </address>
                      <div class="listing_btns">
                        <a href="#" class="btn">
                          Take me here
                        </a>
                        <button type="button" class="btn btn-primary listing_action">
                            More info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card listing_back">
                <div class="card-design"></div>
                <div class="btn btn-close p-5 text-2xl" aria-label="Close">
                  ${iconX()}
                </div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-item">
                      <div class="listing_subtitle">
                        Contacts
                      </div>
                      <div class="listing_additional">
                        <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                        <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                      </div>
                      <div class="listing_subtitle">
                        Timetable
                      </div>
                      <div class="listing_additional">
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

        <div class="listing_col">
          <div class="listing_item">
            <div class="listing_item_inner">

              <div class="card listing_front">
                <div class="card-design"></div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="w-full">
                      ${img({})}
                    </div>
                    <div class="card-item">
                      <div class="h4">
                        Consectetur adipiscing elit. Proin molestie diam nec euismod commodo
                      </div>
                      <address class="listing_address">
                        Street lorem ipsum 42, 00134 City, Nation
                      </address>
                      <div class="listing_btns">
                        <a href="#" class="btn">
                          Take me here
                        </a>
                        <button type="button" class="btn btn-primary listing_action">
                            More info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card listing_back">
                <div class="card-design"></div>
                <div class="btn btn-close p-5 text-2xl" aria-label="Close">
                  ${iconX()}
                </div>
                <div class="card-inner">
                  <div class="card-content">
                    <div class="card-item">
                      <div class="listing_subtitle">
                        Contacts
                      </div>
                      <div class="listing_additional">
                        <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                        <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                      </div>
                      <div class="listing_subtitle">
                        Timetable
                      </div>
                      <div class="listing_additional">
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
