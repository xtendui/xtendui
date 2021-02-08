import React from 'react'
import path from 'path'

const animDesign =
  'h-0 overflow-hidden transform ease-in-out-quint duration-500 delay-200 -translate-y-4 group-active:ease-out-quint group-active:delay-0 group-active:translate-y-0'
const animItem =
  'transform ease-in-out-quint duration-500 opacity-0 -translate-y-4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-y-0'
const listCollapse =
  'w-0 overflow-hidden transform ease-in-out-quint duration-700 -translate-x-4 active:ease-out-quint active:translate-x-0'

const btnDefault = require('components/snippets/classes/btn-default').default
const btnPrimary = require('components/snippets/classes/btn-primary').default
const btnDefaultDrop = require('components/snippets/classes/btn-default-drop').default

const cardWhite = require('components/snippets/classes/card-white').default
const cardBlack = require('components/snippets/classes/card-black').default

const labelDefault = require('components/snippets/classes/label-default').default
const inputDefault = require('components/snippets/classes/input-default').default
const checkDefault = require('components/snippets/classes/form-check-default').default
const radioDefault = require('components/snippets/classes/form-radio-default').default
const iconX = require('components/snippets/icons').iconX
const iconSearch = require('components/snippets/icons').iconSearch

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="h5 h-block rounded-md text-black bg-gray-200 text-center">
  List Group
</div>

<form data-xt-toggle="{ elements: '.w-full > .btn', targets: '.w-full > .list', instant: true, collapseWidth: 'targets' }">

  <div class="row row-x-3 row-y-2">

    <div class="w-full md:w-auto">
      <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
        List group
      </button>
    </div>

    <div class="w-full md:w-auto">
      <div class="list flex-nowrap max-w-sm ${listCollapse}">

        <div class="list-inner flex-auto">
          <button type="button" class="btn text-xs py-2 px-3.5 rounded-l-md ${btnDefault()}">
            ${iconSearch({ classes: 'text-xl -my-1' })}
          </button>
          <input type="text" class="form-item ${inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
        </div>

        <button type="button" class="btn text-xs py-2 px-3.5 rounded-r-md ${btnPrimary()}">
          Search
        </button>

      </div>
    </div>

  </div>

</form>

<div class="h5 h-block rounded-md text-black bg-gray-200 text-center">
  Drop
</div>

<div class="list list-2 items-center">

  <div data-xt-drop="{ targetsInner: '.drop-inner', instant: true, collapseHeight: 'targetsInner' }">

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      list
    </button>

    <div class="drop group" data-xt-duration="700">
      <div class="drop-inner rounded-md shadow-drop ${animDesign}">
        <div class="card w-64 py-3 rounded-md ${cardWhite()} ">
          <nav class="list flex-col rounded-md${animItem}">
            <a href="#" class="btn text-2xs py-1.5 px-2.5 ${btnDefaultDrop()}">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </a>
            <button type="button" class="btn text-2xs py-1.5 px-2.5 ${btnDefaultDrop()}">
              Dolor sit
            </button>
            <button type="button" class="btn text-2xs py-1.5 px-2.5 ${btnDefaultDrop()}">
              Amet
            </button>
          </nav>
        </div>
      </div>
      <div class="drop-arrow ${animItem} group-active:delay-500" data-arrow></div>
    </div>

  </div>

  <div data-xt-drop="{ targetsInner: '.drop-inner', instant: true, collapseHeight: 'targetsInner' }">

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      card
    </button>

    <div class="drop group" data-xt-duration="700">
      <div class="drop-inner rounded-md shadow-drop ${animDesign}">
        <div class="card w-80 rounded-md ${cardWhite()}">
          <div class="btn btn-close p-5 text-xl ${animItem}" aria-label="Close">
            ${iconX()}
          </div>
          <div class="card-md rounded-md ${animItem}">
            <div class="h4">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
      <div class="drop-arrow ${animItem} group-active:delay-500" data-arrow></div>
    </div>

  </div>

</div>

<div class="h5 h-block rounded-md text-black bg-gray-200 text-center">
  Tooltip
</div>

<div class="list list-2 items-center">

  <div data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button', targetsInner: '.tooltip-inner', instant: true, collapseHeight: 'targetsInner' }">

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      tooltip
    </button>

    <div class="tooltip group" data-xt-duration="700">
      <div class="tooltip-inner ${animDesign}">
        <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
          <div class="${animItem}">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
      <div class="tooltip-arrow ${animItem} group-active:delay-500" data-arrow></div>
    </div>

  </div>

  <div data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button', targetsInner: '.tooltip-inner', instant: true, collapseHeight: 'targetsInner' }">

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      list group
    </button>

    <div class="tooltip group" data-xt-duration="700">
      <div class="tooltip-inner rounded-md shadow-tooltip text-black bg-white ${animDesign}">
        <form>

          <div class="list flex-nowrap max-w-sm ${animItem}">

            <div class="list-inner flex-auto">
              <button type="button" class="btn text-xs py-2 px-3.5 rounded-l-md ${btnDefault()}">
                ${iconSearch({ classes: 'text-xl -my-1' })}
              </button>
              <input type="text" class="form-item ${inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
            </div>

            <button type="button" class="btn text-xs py-2 px-3.5 rounded-r-md ${btnPrimary()}">
              Search
            </button>

          </div>

        </form>
      </div>
      <div class="tooltip-arrow ${animItem} group-active:delay-500" data-arrow></div>
    </div>

  </div>

</div>

<div class="h5 h-block rounded-md text-black bg-gray-200 text-center">
  Overlay
</div>

<div class="list list-2 items-center">

  <div data-xt-overlay="{ targetsInner: ':scope > .overlay-container > .overlay-inner', instant: true, collapseHeight: 'targetsInner' }">
    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      screen full
    </button>
    <div class="overlay group" data-xt-duration="700">
      <div class="overlay-container p-0">
        <div class="btn btn-close p-5 text-2xl fixed z-last mr-2 ${animItem}" aria-label="Close">
          ${iconX()}
        </div>
        <div class="overlay-inner ${animDesign}">

          <div class="card min-h-screen items-center justify-center ${cardWhite()}">
            <div class="media-container bg-gray-700 ratio-100 ${animItem}">
              <div class="media-inner">
                <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div data-xt-overlay="{ targetsInner: ':scope > .overlay-container > .overlay-inner', instant: true, collapseHeight: 'targetsInner' }">

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      left blocks
    </button>

    <div class="overlay group" data-xt-duration="700">
      <div class="overlay-container p-0 w-screen max-w-md ml-0 mr-auto">
        <div class="overlay-inner ${animDesign}">

          <div class="card min-h-screen ${cardWhite()}">
            <div class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </div>
            <div class="list bg-accent-500 ${animItem}">
              <button type="button" class="btn text-xs py-2 px-3.5 ${btnPrimary()}">
                Menu
              </button>
              <button type="button" class="btn text-xs py-2 px-3.5 ${btnPrimary()}">
                Info
              </button>
              <button type="button" class="btn text-xs py-2 px-3.5 ${btnPrimary()}">
                Account
              </button>
            </div>
            <div class="media-container bg-gray-700 h-48 ${animItem}">
              <div class="media-inner">
                <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
              </div>
            </div>
            <div class="card-md ${animItem}">
              <div class="h4">Lorem ipsum</div>
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            </div>
            <div class="card-sm bg-gray-500 mt-auto ${animItem}">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

  <div data-xt-overlay="{ targetsInner: ':scope > .overlay-container > .overlay-inner', instant: true, collapseHeight: 'targetsInner' }">

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      contact
    </button>

    <div class="overlay group" data-xt-duration="700">
      <div class="overlay-container max-w-5xl">
        <div class="overlay-inner rounded-md shadow-overlay ${animDesign}">

          <div class="card rounded-md ${cardWhite()}">
            <div class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </div>

            <div class="md:card-group rounded-md ${animItem}">

              <div class="card-md md:card-lg md:w-7/12">
                <div class="h4">
                  Contact us
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>
                <form class="text-lg">
                  <div class="row row-x-3 row-y-2">

                    <div class="w-full md:w-6/12">
                      <label class="form-label mb-3 ${labelDefault()}">
                        Name
                      </label>
                      <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Name">
                    </div>

                    <div class="w-full md:w-6/12">
                      <label class="form-label mb-3 ${labelDefault()}">
                        Surname
                      </label>
                      <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Surname">
                    </div>

                    <div class="w-full md:w-6/12">
                      <label class="form-label mb-3 ${labelDefault()}">
                        Email
                      </label>
                      <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Email">
                    </div>

                    <div class="w-full md:w-6/12">
                      <label class="form-label mb-3 ${labelDefault()}">
                        Telephone
                      </label>
                      <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Telephone">
                    </div>

                    <div class="w-full">
                      <label class="form-label mb-3 ${labelDefault()}">
                        Subject
                      </label>
                      <select class="form-item form-select rounded-md ${inputDefault()}" aria-label="Subject">
                        <option selected value="">Select an option</option>
                        <option>Test</option>
                        <option>Test</option>
                        <option>Test</option>
                      </select>
                    </div>

                    <div class="w-full">
                      <label class="form-label mb-3 ${labelDefault()}">
                        Message
                      </label>
                      <textarea class="form-item rounded-md ${inputDefault()} h-24 resize-vertical" aria-label="Message"></textarea>
                    </div>

                    <div class="w-full">
                      <label class="form-label-check">
                        <input type="checkbox" class="form-check form-checkbox rounded-md ${checkDefault()}">
                        <span class="ml-3">
                          I <strong>read and accept</strong> the <a href="#" target="_blank" rel="noopener">sales conditions</a> and the <a href="#" target="_blank" rel="noopener">privacy policy</a>.
                        </span>
                      </label>
                    </div>

                    <div class="w-full">
                      <button type="submit" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
                        Send
                      </button>
                    </div>

                  </div>
                </form>
              </div>

              <div class="md:w-5/12 flex flex-col ${animItem}">
                <div class="media-container bg-gray-700 rounded-b-md md:rounded-bl-none md:rounded-br-md h-48 md:ratio-100">
                  <div class="media-inner">
                    <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
                  </div>
                </div>
                <div class="card-md bg-gray-300 flex-full text-sm">
                  <p class="h5">
                    Didn't find what you was looking for?
                  </p>
                  <p>
                      Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at <a href="mailto:info@info.com">info@info.com</a>.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>

  </div>

  <div data-xt-overlay="{ targetsInner: ':scope > .overlay-container > .overlay-inner', instant: true, collapseHeight: 'targetsInner' }">

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      newsletter
    </button>

    <div class="overlay group" data-xt-duration="700">
      <div class="overlay-container max-w-5xl">
        <div class="overlay-inner rounded-md shadow-overlay ${animDesign}">

          <div class="card rounded-md ${cardWhite()}">
            <div class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </div>

            <div class="md:card-group rounded-md ${animItem}">

              <div class="md:w-5/12 flex flex-col">
                <div class="media-container bg-gray-700 rounded-t-md md:rounded-tr-none h-48 lg:ratio-100 md:flex-full">
                  <div class="media-inner">
                    <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
                  </div>
                </div>
              </div>

              <div class="card-md md:card-lg md:w-7/12">
                <div class="h4">
                  Subscribe to our newsletter
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>
                <form class="text-lg">
                  <div class="row row-x-3 row-y-2">

                    <div class="w-full">
                      <label class="form-label mb-3 ${labelDefault()}">
                        Email
                      </label>
                      <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Email">
                    </div>

                    <div class="w-full">

                      <label class="form-label mb-3 ${labelDefault()}">
                        Subject
                      </label>

                      <div class="row row-x-4 row-y-1">

                        <div class="w-full sm:w-auto">
                          <label class="form-label-check">
                            <input type="radio" class="form-check form-radio rounded-full ${radioDefault()}" name="radio-usage" checked>
                            <span class="ml-3">
                              Option 1
                            </span>
                          </label>
                        </div>

                        <div class="w-full sm:w-auto">
                          <label class="form-label-check">
                            <input type="radio" class="form-check form-radio rounded-full ${radioDefault()}" name="radio-usage">
                            <span class="ml-3">
                              Option 2
                            </span>
                          </label>
                        </div>

                        <div class="w-full sm:w-auto">
                          <label class="form-label-check">
                            <input type="radio" class="form-check form-radio rounded-full ${radioDefault()}" name="radio-usage">
                            <span class="ml-3">
                              Option 3
                            </span>
                          </label>
                        </div>

                      </div>

                    </div>

                    <div class="w-full">
                      <label class="form-label-check">
                        <input type="checkbox" class="form-check form-checkbox rounded-md ${checkDefault()}">
                        <span class="ml-3">
                          I <strong>read and accept</strong> the <a href="#" target="_blank" rel="noopener">sales conditions</a> and the <a href="#" target="_blank" rel="noopener">privacy policy</a>.
                        </span>
                      </label>
                    </div>

                    <div class="w-full">
                      <button type="submit" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
                        Subscribe
                      </button>
                    </div>

                  </div>
                </form>
              </div>

            </div>

            <div class="card-sm rounded-b-md bg-gray-300 text-xs ${animItem}">
              <p>
                Receive <strong>free discount</strong> periodically on all our products.
              </p>
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
