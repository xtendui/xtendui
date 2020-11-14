import React from 'react'
import path from 'path'

const classesDefault =
  'text-black links-default rounded-md bg-gray-200 border-transparent transform ease-out-quint duration-500 border hover:bg-gray-300 hover:border-gray-400 hover:-translate-y-1 active:bg-gray-400 active:translate-y-0'
const classesPrimary =
  'text-white links-inverse rounded-md bg-accent-500 border-transparent transform ease-out-quint duration-500 border hover:bg-accent-600 hover:border-accent-700 hover:-translate-y-1 active:bg-accent-700 active:translate-y-0'
const animDesign =
  'transform ease-in-out-quint duration-500 delay-200 opacity-0 scale-50 group-active:ease-out-quint group-active:delay-0 group-active:opacity-100 group-active:scale-100'
const animItem =
  'transform ease-in-out-quint duration-500 opacity-0 -translate-y-2 group-active:ease-out-quint group-active:delay-300 group-active:opacity-100 group-active:translate-y-0'

const btnDefault = () => `${classesDefault} hover:shadow-lg active:shadow-sm`
const btnPrimary = () => `${classesPrimary} hover:shadow-lg active:shadow-sm`
const btnDefaultDrop = require('components/snippets/classes/btn-default-drop').default
const btnCloseOutside = require('components/snippets/classes/btn-close-outside').default

const cardWhite = () => 'text-black links-default'
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
<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Button
</div>

<div class="list list-2 items-center">

  <button type="button" class="btn btn-md transform ease-out-quint duration-500 hover:-translate-y-1 active:translate-y-0">
    btn
  </button>

  <button type="button" class="btn btn-md ${btnDefault()}">
    default
  </button>

  <button type="button" class="btn btn-md ${btnPrimary()}">
    primary
  </button>

  <button type="button" class="btn btn-md link transform ease-out-quint duration-500 hover:-translate-y-1 active:translate-y-0">
    link
  </button>

  <button type="button" class="btn btn-md text-reset transform ease-out-quint duration-500 hover:-translate-y-1 active:translate-y-0">
    text
  </button>

</div>

<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Drop
</div>

<div class="list list-2 items-center">

  <div data-xt-drop>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      list
    </button>

    <div class="drop group duration-700"> <!-- needed for animation time, put max time with delay -->
      <div class="drop-inner">
        <div class="design-setup rounded-md shadow-drop bg-white ${animDesign}"></div>
        <div class="w-64 py-3 rounded-md ${cardWhite()} ${animItem}">
          <nav class="list flex-col">
            <a href="#" class="btn btn-sm ${btnDefaultDrop()}">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </a>
            <button type="button" class="btn btn-sm ${btnDefaultDrop()}">
              Dolor sit
            </button>
            <button type="button" class="btn btn-sm ${btnDefaultDrop()}">
              Amet
            </button>
          </nav>
        </div>
      </div>
      <div class="drop-arrow ${cardWhite()} ${animItem} group-active:delay-300" data-arrow></div>
    </div>

  </div>

  <div data-xt-drop>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      card
    </button>

    <div class="drop group duration-700"> <!-- needed for animation time, put max time with delay -->
      <div class="drop-inner">
        <div class="design-setup rounded-md shadow-drop bg-white ${animDesign}"></div>
        <div class="card w-80 rounded-md ${cardWhite()} ${animItem}">
          <div class="btn btn-close p-5 text-xl" aria-label="Close">
            ${iconX()}
          </div>
          <div class="card-md">
            <div class="h4">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
      <div class="drop-arrow ${cardWhite()} ${animItem} group-active:delay-300" data-arrow></div>
    </div>

  </div>

</div>

<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Tooltip
</div>

<div class="list list-2 items-center">

  <div data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button' }">

    <button type="button" class="btn btn-md ${btnPrimary()}">
      tooltip
    </button>

    <div class="tooltip group duration-700"> <!-- needed for animation time, put max time with delay -->
      <div class="tooltip-md rounded shadow-tooltip ${cardBlack()} ${animDesign}">
        <div class="${animItem}">
          Lorem ipsum dolor sit amet
        </div>
      </div>
      <div class="tooltip-arrow ${animItem} group-active:delay-300" data-arrow></div>
    </div>

  </div>

  <div data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button' }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      list group
    </button>

    <div class="tooltip group duration-700"> <!-- needed for animation time, put max time with delay -->
      <div class="rounded-md shadow-tooltip text-black links-default bg-white ${animDesign}">
        <form>

          <div class="list flex-nowrap max-w-sm ${cardWhite()} ${animItem}">

            <div class="list-inner flex-auto">
              <button type="button" class="btn btn-md rounded-l-md ${btnDefault()}">
                ${iconSearch({ classes: 'icon-lg' })}
              </button>
              <input type="text" class="form-item ${inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
            </div>

            <button type="button" class="btn btn-md rounded-r-md ${btnPrimary()}">
              Search
            </button>

          </div>

        </form>
      </div>
      <div class="tooltip-arrow ${animItem} group-active:delay-300" data-arrow></div>
    </div>

  </div>

</div>

<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Overlay
</div>

<div class="list list-2 items-center">

  <div data-xt-overlay>
    <button type="button" class="btn btn-md ${btnPrimary()}">
      screen full
    </button>
    <div class="overlay group duration-700"> <!-- needed for animation time, put max time with delay -->
      <div class="overlay-container p-0">
        <div class="btn btn-close p-5 text-2xl fixed z-last mr-2 ${cardWhite()} ${animItem}" aria-label="Close">
          ${iconX()}
        </div>
        <div class="overlay-inner">

          <div class="design-setup rounded-md bg-white ${animDesign}"></div>

          <div class="card min-h-screen items-center justify-center rounded-md ${cardWhite()} ${animItem}">
            <div class="media-container ratio-100">
              <div class="media-inner">
                <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div data-xt-overlay>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      left blocks
    </button>

    <div class="overlay group duration-700"> <!-- needed for animation time, put max time with delay -->
      <div class="overlay-container p-0 max-w-md ml-0 mr-auto">
        <div class="overlay-inner">

          <div class="design-setup bg-white ${animDesign}"></div>

          <div class="card min-h-screen ${cardWhite()} ${animItem}">
            <div class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </div>
            <div class="list bg-accent-500">
              <button type="button" class="btn btn-md ${btnPrimary()}">
                Menu
              </button>
              <button type="button" class="btn btn-md ${btnPrimary()}">
                Info
              </button>
              <button type="button" class="btn btn-md ${btnPrimary()}">
                Account
              </button>
            </div>
            <div class="media-container h-48">
              <div class="media-inner">
                <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
              </div>
            </div>
            <div class="card-md">
              <div class="h4">Lorem ipsum</div>
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            </div>
            <div class="card-sm bg-gray-500 mt-auto">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

  <div data-xt-overlay>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      contact
    </button>

    <div class="overlay group duration-700"> <!-- needed for animation time, put max time with delay -->
      <div class="overlay-container max-w-5xl">
        <div class="overlay-inner">

          <div class="design-setup rounded-md md:rounded-tr-none rounded-md shadow-overlay bg-white ${animDesign}"></div>

          <div class="card rounded-md ${cardWhite()} ${animItem}">
            <div class="btn btn-close p-5 text-2xl ${btnCloseOutside()} md:p-3 md:right-auto md:left-100" aria-label="Close">
              ${iconX()}
            </div>

            <div class="md:card-group">

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
                      <button type="submit" class="btn btn-md ${btnPrimary()}">
                        Send
                      </button>
                    </div>

                  </div>
                </form>
              </div>

              <div class="md:w-5/12 flex flex-col">
                <div class="media-container rounded-b-md md:rounded-bl-none md:rounded-br-md h-48 md:ratio-100">
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

  <div data-xt-overlay>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      newsletter
    </button>

    <div class="overlay group duration-700"> <!-- needed for animation time, put max time with delay -->
      <div class="overlay-container max-w-5xl">
        <div class="overlay-inner">

          <div class="design-setup rounded-md md:rounded-tr-none rounded-md shadow-overlay bg-white ${animDesign}"></div>

          <div class="card rounded-md ${cardWhite()} ${animItem}">
            <div class="btn btn-close p-5 text-2xl ${btnCloseOutside()} md:p-3 md:right-auto md:left-100" aria-label="Close">
              ${iconX()}
            </div>

            <div class="md:card-group">

              <div class="md:w-5/12 flex flex-col">
                <div class="media-container rounded-t-md md:rounded-tr-none h-48 lg:ratio-100 md:flex-full">
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
                      <button type="submit" class="btn btn-md ${btnPrimary()}">
                        Subscribe
                      </button>
                    </div>

                  </div>
                </form>
              </div>

            </div>

            <div class="card-sm rounded-b-md bg-gray-300 text-xs">
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

<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Card
</div>

<div class="row row-3">

  <div class="w-full md:w-6/12">
    <a role="button" class="card ${classesDefault} hover:shadow-xl active:shadow-md">
      <div class="card-md">
        <div class="h4">Default</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </a>
  </div>

  <div class="w-full md:w-6/12">
    <a role="button" class="card ${classesPrimary} hover:shadow-xl active:shadow-md">
      <div class="card-md">
        <div class="h4">Primary</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </a>
  </div>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
