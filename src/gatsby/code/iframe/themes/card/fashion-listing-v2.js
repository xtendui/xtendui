import React from 'react'
import path from 'path'
const img = require('components/snippets/img').default
const imgAlt = require('components/snippets/img').alt

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  full: false,
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="block-listing">
  <div class="container">
    <div class="block-listing_inner">
      <div class="row">

        <div class="block-listing_col">
          <div class="block-listing_item">
            <div class="block-listing_item_inner">
            
              <div class="block-listing_front">
                <div class="block-listing_img">
                  ${img({})}
                </div>
                <div class="block-listing_content">
                  <div class="block-listing_title">
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
              
              <div class="block-listing_back">
                <div class="btn btn-close" aria-label="Close"></div>
                <div class="block-listing_content">
                  <div class="block-listing_subtitle">
                    Contacts
                  </div>
                  <div class="block-listing_additional">
                    Email: <a href="mailto:info@info.com">info@info.com</a><br/>
                    Phone: <a href="tel:333010101">333 010101</a><br/>
                  </div>
                  <div class="block-listing_subtitle">
                    Timetable
                  </div>
                  <div class="block-listing_additional">
                    Monday: 15:30–19:30<br/>
                    Tuesday: 10:00–13:00, 15:30–19:30<br/>
                    Wednesday: 10:00–13:00, 15:30–19:30<br/>
                    Thursday: 10:00–13:00, 15:30–19:30<br/>
                    Friday: 10:00–13:00, 15:30–19:30<br/>
                    Saturday: 10:00–19:30<br/>
                    Sunday: 10:00–13:00, 15:30–19:30
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div class="block-listing_col">
          <div class="block-listing_item">
            <div class="block-listing_item_inner">
            
              <div class="block-listing_front">
                <div class="block-listing_img">
                  ${imgAlt({})}
                </div>
                <div class="block-listing_content">
                  <div class="block-listing_title">
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
              
              <div class="block-listing_back">
                <div class="btn btn-close" aria-label="Close"></div>
                <div class="block-listing_content">
                  <div class="block-listing_subtitle">
                    Contacts
                  </div>
                  <div class="block-listing_additional">
                    Email: <a href="mailto:info@info.com">info@info.com</a><br/>
                    Phone: <a href="tel:333010101">333 010101</a><br/>
                  </div>
                  <div class="block-listing_subtitle">
                    Timetable
                  </div>
                  <div class="block-listing_additional">
                    Monday: 15:30–19:30<br/>
                    Tuesday: 10:00–13:00, 15:30–19:30<br/>
                    Wednesday: 10:00–13:00, 15:30–19:30<br/>
                    Thursday: 10:00–13:00, 15:30–19:30<br/>
                    Friday: 10:00–13:00, 15:30–19:30<br/>
                    Saturday: 10:00–19:30<br/>
                    Sunday: 10:00–13:00, 15:30–19:30
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div class="block-listing_col">
          <div class="block-listing_item">
            <div class="block-listing_item_inner">
            
              <div class="block-listing_front">
                <div class="block-listing_img">
                  ${img({})}
                </div>
                <div class="block-listing_content">
                  <div class="block-listing_title">
                    Consectetur adipiscing elit
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
              
              <div class="block-listing_back">
                <div class="btn btn-close" aria-label="Close"></div>
                <div class="block-listing_content">
                  <div class="block-listing_subtitle">
                    Contacts
                  </div>
                  <div class="block-listing_additional">
                    Email: <a href="mailto:info@info.com">info@info.com</a><br/>
                    Phone: <a href="tel:333010101">333 010101</a><br/>
                  </div>
                  <div class="block-listing_subtitle">
                    Timetable
                  </div>
                  <div class="block-listing_additional">
                    Monday: 15:30–19:30<br/>
                    Tuesday: 10:00–13:00, 15:30–19:30<br/>
                    Wednesday: 10:00–13:00, 15:30–19:30<br/>
                    Thursday: 10:00–13:00, 15:30–19:30<br/>
                    Friday: 10:00–13:00, 15:30–19:30<br/>
                    Saturday: 10:00–19:30<br/>
                    Sunday: 10:00–13:00, 15:30–19:30
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div class="block-listing_col">
          <div class="block-listing_item">
            <div class="block-listing_item_inner">
            
              <div class="block-listing_front">
                <div class="block-listing_img">
                  ${img({})}
                </div>
                <div class="block-listing_content">
                  <div class="block-listing_title">
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
              
              <div class="block-listing_back">
                <div class="btn btn-close" aria-label="Close"></div>
                <div class="block-listing_content">
                  <div class="block-listing_subtitle">
                    Contacts
                  </div>
                  <div class="block-listing_additional">
                    Email: <a href="mailto:info@info.com">info@info.com</a><br/>
                    Phone: <a href="tel:333010101">333 010101</a><br/>
                  </div>
                  <div class="block-listing_subtitle">
                    Timetable
                  </div>
                  <div class="block-listing_additional">
                    Monday: 15:30–19:30<br/>
                    Tuesday: 10:00–13:00, 15:30–19:30<br/>
                    Wednesday: 10:00–13:00, 15:30–19:30<br/>
                    Thursday: 10:00–13:00, 15:30–19:30<br/>
                    Friday: 10:00–13:00, 15:30–19:30<br/>
                    Saturday: 10:00–19:30<br/>
                    Sunday: 10:00–13:00, 15:30–19:30
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div class="block-listing_col">
          <div class="block-listing_item">
            <div class="block-listing_item_inner">
            
              <div class="block-listing_front">
                <div class="block-listing_img">
                  ${imgAlt({})}
                </div>
                <div class="block-listing_content">
                  <div class="block-listing_title">
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
              
              <div class="block-listing_back">
                <div class="btn btn-close" aria-label="Close"></div>
                <div class="block-listing_content">
                  <div class="block-listing_subtitle">
                    Contacts
                  </div>
                  <div class="block-listing_additional">
                    Email: <a href="mailto:info@info.com">info@info.com</a><br/>
                    Phone: <a href="tel:333010101">333 010101</a><br/>
                  </div>
                  <div class="block-listing_subtitle">
                    Timetable
                  </div>
                  <div class="block-listing_additional">
                    Monday: 15:30–19:30<br/>
                    Tuesday: 10:00–13:00, 15:30–19:30<br/>
                    Wednesday: 10:00–13:00, 15:30–19:30<br/>
                    Thursday: 10:00–13:00, 15:30–19:30<br/>
                    Friday: 10:00–13:00, 15:30–19:30<br/>
                    Saturday: 10:00–19:30<br/>
                    Sunday: 10:00–13:00, 15:30–19:30
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div class="block-listing_col">
          <div class="block-listing_item">
            <div class="block-listing_item_inner">
            
              <div class="block-listing_front">
                <div class="block-listing_img">
                  ${img({})}
                </div>
                <div class="block-listing_content">
                  <div class="block-listing_title">
                    Consectetur adipiscing elit
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
              
              <div class="block-listing_back">
                <div class="btn btn-close" aria-label="Close"></div>
                <div class="block-listing_content">
                  <div class="block-listing_subtitle">
                    Contacts
                  </div>
                  <div class="block-listing_additional">
                    Email: <a href="mailto:info@info.com">info@info.com</a><br/>
                    Phone: <a href="tel:333010101">333 010101</a><br/>
                  </div>
                  <div class="block-listing_subtitle">
                    Timetable
                  </div>
                  <div class="block-listing_additional">
                    Monday: 15:30–19:30<br/>
                    Tuesday: 10:00–13:00, 15:30–19:30<br/>
                    Wednesday: 10:00–13:00, 15:30–19:30<br/>
                    Thursday: 10:00–13:00, 15:30–19:30<br/>
                    Friday: 10:00–13:00, 15:30–19:30<br/>
                    Saturday: 10:00–19:30<br/>
                    Sunday: 10:00–13:00, 15:30–19:30
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

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
