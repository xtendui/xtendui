import React from 'react'
import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefault = require('components/snippets/classes/card-default').default
const iconX = require('components/snippets/icons').iconX

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  full: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="py-10">
  <div class="container">
    <div class="row row-3 row-stretch">

      <div class="w-full md:w-6/12 lg:w-4/12">
        <div class="listing-item w-full">
          <div class="listing-item_inner">

            <div class="listing-front card ${cardDefault()}">
              <div class="media-container flex-full rounded-t-md h-40">
                <div class="media-inner">
                  <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                </div>
              </div>
              <div class="card-sm h-full flex flex-col">
                <div class="h5">
                  Lorem Ipsum
                </div>
                <address class="p font-sm not-italic">
                  Street lorem ipsum 42, 00134 City, Nation
                </address>
                <div class="list list-2 mt-auto justify-end">
                  <button type="button" class="listing-action btn btn-md ${btnPrimary()}">
                      More info
                  </button>
                </div>
              </div>
            </div>

            <div class="listing-back h-full card ${cardDefault()}">
              <div class="btn btn-close p-5 text-xl" aria-label="Close">
                ${iconX()}
              </div>
              <div class="card-sm">
                <div class="h5">
                  Contacts
                </div>
                <div class="p font-sm">
                  <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                  <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                </div>
                <div class="h5">
                  Timetable
                </div>
                <div class="p font-sm">
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

      <div class="w-full md:w-6/12 lg:w-4/12">
        <div class="listing-item w-full">
          <div class="listing-item_inner">

            <div class="listing-front card ${cardDefault()}">
              <div class="media-container flex-full rounded-t-md h-40">
                <div class="media-inner">
                  <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
                </div>
              </div>
              <div class="card-sm h-full flex flex-col">
                <div class="h5">
                  Lorem Ipsum
                </div>
                <address class="p font-sm not-italic">
                  Street lorem ipsum 42, 00134 City, Nation
                </address>
                <div class="list list-2 mt-auto justify-end">
                  <button type="button" class="listing-action btn btn-md ${btnPrimary()}">
                      More info
                  </button>
                </div>
              </div>
            </div>

            <div class="listing-back h-full card ${cardDefault()}">
              <div class="btn btn-close p-5 text-xl" aria-label="Close">
                ${iconX()}
              </div>
              <div class="card-sm">
                <div class="h5">
                  Contacts
                </div>
                <div class="p font-sm">
                  <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                  <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="w-full md:w-6/12 lg:w-4/12">
        <div class="listing-item w-full">
          <div class="listing-item_inner">

            <div class="listing-front card ${cardDefault()}">
              <div class="media-container flex-full rounded-t-md h-40">
                <div class="media-inner">
                  <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                </div>
              </div>
              <div class="card-sm h-full flex flex-col">
                <div class="h5">
                  Lorem Ipsum
                </div>
                <address class="p font-sm not-italic">
                  Street lorem ipsum 42, 00134 City, Nation
                </address>
                <div class="list list-2 mt-auto justify-end">
                  <button type="button" class="listing-action btn btn-md ${btnPrimary()}">
                      More info
                  </button>
                </div>
              </div>
            </div>

            <div class="listing-back h-full card ${cardDefault()}">
              <div class="btn btn-close p-5 text-xl" aria-label="Close">
                ${iconX()}
              </div>
              <div class="card-sm">
                <div class="h5">
                  Contacts
                </div>
                <div class="p font-sm">
                  <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                  <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                </div>
                <div class="h5">
                  Timetable
                </div>
                <div class="p font-sm">
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

      <div class="w-full md:w-6/12 lg:w-4/12">
        <div class="listing-item w-full">
          <div class="listing-item_inner">

            <div class="listing-front card ${cardDefault()}">
              <div class="media-container flex-full rounded-t-md h-40">
                <div class="media-inner">
                  <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
                </div>
              </div>
              <div class="card-sm h-full flex flex-col">
                <div class="h5">
                  Lorem Ipsum
                </div>
                <address class="p font-sm not-italic">
                  Street lorem ipsum 42, 00134 City, Nation
                </address>
                <div class="list list-2 mt-auto justify-end">
                  <button type="button" class="listing-action btn btn-md ${btnPrimary()}">
                      More info
                  </button>
                </div>
              </div>
            </div>

            <div class="listing-back h-full card ${cardDefault()}">
              <div class="btn btn-close p-5 text-xl" aria-label="Close">
                ${iconX()}
              </div>
              <div class="card-sm">
                <div class="h5">
                  Contacts
                </div>
                <div class="p font-sm">
                  <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                  <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="w-full md:w-6/12 lg:w-4/12">
        <div class="listing-item w-full">
          <div class="listing-item_inner">

            <div class="listing-front card ${cardDefault()}">
              <div class="media-container flex-full rounded-t-md h-40">
                <div class="media-inner">
                  <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                </div>
              </div>
              <div class="card-sm h-full flex flex-col">
                <div class="h5">
                  Lorem Ipsum
                </div>
                <address class="p font-sm not-italic">
                  Street lorem ipsum 42, 00134 City, Nation
                </address>
                <div class="list list-2 mt-auto justify-end">
                  <button type="button" class="listing-action btn btn-md ${btnPrimary()}">
                      More info
                  </button>
                </div>
              </div>
            </div>

            <div class="listing-back h-full card ${cardDefault()}">
              <div class="btn btn-close p-5 text-xl" aria-label="Close">
                ${iconX()}
              </div>
              <div class="card-sm">
                <div class="h5">
                  Contacts
                </div>
                <div class="p font-sm">
                  <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                  <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                </div>
                <div class="h5">
                  Timetable
                </div>
                <div class="p font-sm">
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

      <div class="w-full md:w-6/12 lg:w-4/12">
        <div class="listing-item w-full">
          <div class="listing-item_inner">

            <div class="listing-front card ${cardDefault()}">
              <div class="media-container flex-full rounded-t-md h-40">
                <div class="media-inner">
                  <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
                </div>
              </div>
              <div class="card-sm h-full flex flex-col">
                <div class="h5">
                  Lorem Ipsum
                </div>
                <address class="p font-sm not-italic">
                  Street lorem ipsum 42, 00134 City, Nation
                </address>
                <div class="list list-2 mt-auto justify-end">
                  <button type="button" class="listing-action btn btn-md ${btnPrimary()}">
                      More info
                  </button>
                </div>
              </div>
            </div>

            <div class="listing-back h-full card ${cardDefault()}">
              <div class="btn btn-close p-5 text-xl" aria-label="Close">
                ${iconX()}
              </div>
              <div class="card-sm">
                <div class="h5">
                  Contacts
                </div>
                <div class="p font-sm">
                  <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                  <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
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
