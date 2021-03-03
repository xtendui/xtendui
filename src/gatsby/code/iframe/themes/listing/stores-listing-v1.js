import React from 'react'
import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const cardSm = require('components/snippets/classes').cardSm
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const cardDefault = require('components/snippets/classes').cardDefault
const iconX = require('components/snippets/icons').iconX

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="listing py-10">
  <div class="container">
    <div class="xt-row xt-row-6 xt-row-stretch">

      <div class="w-full md:w-6/12 lg:w-4/12">
        <div class="listing-item block w-full">
          <div class="listing-item-inner">

            <div class="listing-item-front xt-card rounded-md ${cardDefault()}">
              <div class="xt-media-container bg-gray-200 w-full rounded-t-md h-40">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                </div>
              </div>
              <div class="${cardSm()}">
                <div class="xt-h5">
                  Lorem Ipsum
                </div>
                <address class="xt-p font-sm not-italic">
                  Street 42, 00134 City, Nation
                </address>
              </div>
              <div class="${cardSm()} mt-auto pt-0">
                <button type="button" class="listing-action xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
                  More info
                </button>
              </div>
            </div>

            <div class="listing-item-back h-full xt-card rounded-md ${cardDefault()}">
              <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl" aria-label="Close">
                ${iconX()}
              </button>
              <div class="${cardSm()}">
                <div class="xt-h5">
                  Contacts
                </div>
                <div class="xt-p font-sm">
                  <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                  <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                </div>
                <div class="xt-h5">
                  Timetable
                </div>
                <div class="xt-p font-sm">
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
        <div class="listing-item block w-full">
          <div class="listing-item-inner">

            <div class="listing-item-front xt-card rounded-md ${cardDefault()}">
              <div class="xt-media-container bg-gray-200 w-full rounded-t-md h-40">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
                </div>
              </div>
              <div class="${cardSm()}">
                <div class="xt-h5">
                  Lorem Ipsum
                </div>
                <address class="xt-p font-sm not-italic">
                  Street Lorem Ipsum 42, 00134 City, Nation
                </address>
              </div>
              <div class="${cardSm()} mt-auto pt-0">
                <button type="button" class="listing-action xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
                  More info
                </button>
              </div>
            </div>

            <div class="listing-item-back h-full xt-card rounded-md ${cardDefault()}">
              <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl" aria-label="Close">
                ${iconX()}
              </button>
              <div class="${cardSm()}">
                <div class="xt-h5">
                  Contacts
                </div>
                <div class="xt-p font-sm">
                  <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                  <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="w-full md:w-6/12 lg:w-4/12">
        <div class="listing-item block w-full">
          <div class="listing-item-inner">

            <div class="listing-item-front xt-card rounded-md ${cardDefault()}">
              <div class="xt-media-container bg-gray-200 w-full rounded-t-md h-40">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                </div>
              </div>
              <div class="${cardSm()}">
                <div class="xt-h5">
                  Lorem Ipsum
                </div>
                <address class="xt-p font-sm not-italic">
                  Street Lorem Ipsum 42, 00134 City, Nation
                </address>
              </div>
              <div class="${cardSm()} mt-auto pt-0">
                <button type="button" class="listing-action xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
                  More info
                </button>
              </div>
            </div>

            <div class="listing-item-back h-full xt-card rounded-md ${cardDefault()}">
              <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl" aria-label="Close">
                ${iconX()}
              </button>
              <div class="${cardSm()}">
                <div class="xt-h5">
                  Contacts
                </div>
                <div class="xt-p font-sm">
                  <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                  <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                </div>
                <div class="xt-h5">
                  Timetable
                </div>
                <div class="xt-p font-sm">
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
        <div class="listing-item block w-full">
          <div class="listing-item-inner">

            <div class="listing-item-front xt-card rounded-md ${cardDefault()}">
              <div class="xt-media-container bg-gray-200 w-full rounded-t-md h-40">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
                </div>
              </div>
              <div class="${cardSm()}">
                <div class="xt-h5">
                  Lorem Ipsum
                </div>
                <address class="xt-p font-sm not-italic">
                  Street Lorem Ipsum 42, 00134 City, Nation
                </address>
              </div>
              <div class="${cardSm()} mt-auto pt-0">
                <button type="button" class="listing-action xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
                  More info
                </button>
              </div>
            </div>

            <div class="listing-item-back h-full xt-card rounded-md ${cardDefault()}">
              <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl" aria-label="Close">
                ${iconX()}
              </button>
              <div class="${cardSm()}">
                <div class="xt-h5">
                  Contacts
                </div>
                <div class="xt-p font-sm">
                  <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                  <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="w-full md:w-6/12 lg:w-4/12">
        <div class="listing-item block w-full">
          <div class="listing-item-inner">

            <div class="listing-item-front xt-card rounded-md ${cardDefault()}">
              <div class="xt-media-container bg-gray-200 w-full rounded-t-md h-40">
                <div class="xt-media-inner">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                </div>
              </div>
              <div class="${cardSm()}">
                <div class="xt-h5">
                  Lorem Ipsum
                </div>
                <address class="xt-p font-sm not-italic">
                  Street Lorem Ipsum 42, 00134 City, Nation
                </address>
              </div>
              <div class="${cardSm()} mt-auto pt-0">
                <button type="button" class="listing-action xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
                  More info
                </button>
              </div>
            </div>

            <div class="listing-item-back h-full xt-card rounded-md ${cardDefault()}">
              <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl" aria-label="Close">
                ${iconX()}
              </button>
              <div class="${cardSm()}">
                <div class="xt-h5">
                  Contacts
                </div>
                <div class="xt-p font-sm">
                  <strong>Email:</strong> <a href="mailto:info@info.com">info@info.com</a><br/>
                  <strong>Phone:</strong> <a href="tel:+39333010101">+39 333 010101</a><br/>
                </div>
                <div class="xt-h5">
                  Timetable
                </div>
                <div class="xt-p font-sm">
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
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
