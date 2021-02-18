import React from 'react'
import path from 'path'

const animDesign =
  'h-0 overflow-hidden transform ease-in-out-quint duration-500 delay-200 -translate-y-4 group-active:ease-out-quint group-active:delay-0 group-active:translate-y-0'
const animItem =
  'transform ease-in-out-quint duration-500 opacity-0 -translate-y-4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-y-0'
const listCollapse =
  'w-0 overflow-hidden transform ease-in-out-quint duration-700 -translate-x-4 active:ease-out-quint active:translate-x-0'

const buttonDefault = require('components/snippets/classes/button-default').default
const buttonPrimary = require('components/snippets/classes/button-primary').default
const buttonDefaultDrop = require('components/snippets/classes/button-default-drop').default

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
<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  List Group
</div>

<form class="text-xs" data-xt-toggle="{ elements: '.w-full > .xt-button', targets: '.w-full > .xt-list', instant: true, collapseWidth: 'targets' }">

  <div class="xt-row xt-row-x-6 xt-row-y-4">

    <div class="w-full md:w-auto">
      <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
        List group
      </button>
    </div>

    <div class="w-full md:w-auto">
      <div class="xt-list flex-nowrap max-w-sm ${listCollapse}">

        <div class="xt-list-inner flex-auto">
          <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-l-md ${buttonDefault()}">
            ${iconSearch({ classes: 'text-xl -my-1' })}
          </button>
          <input type="text" class="xt-input ${inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
        </div>

        <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-r-md ${buttonPrimary()}">
          Search
        </button>

      </div>
    </div>

  </div>

</form>

<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Drop
</div>

<div class="xt-list xt-list-3 items-center">

  <div data-xt-drop="{ targetsInner: '.xt-drop-inner', instant: true, collapseHeight: 'targetsInner' }">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      list
    </button>

    <div class="xt-drop p-4 group" data-xt-duration="700">
      <div class="xt-drop-inner rounded-md shadow-drop ${animDesign}">
        <div class="xt-card w-64 py-3 rounded-md ${cardWhite()} ">
          <nav class="xt-list flex-col rounded-md${animItem}">
            <a href="#" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </a>
            <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
              Dolor sit
            </button>
            <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
              Amet
            </button>
          </nav>
        </div>
      </div>
      <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white ${animItem} group-active:delay-500"></div>
    </div>

  </div>

  <div data-xt-drop="{ targetsInner: '.xt-drop-inner', instant: true, collapseHeight: 'targetsInner' }">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      card
    </button>

    <div class="xt-drop p-4 group" data-xt-duration="700">
      <div class="xt-drop-inner rounded-md shadow-drop ${animDesign}">
        <div class="xt-card w-80 rounded-md ${cardWhite()}">
          <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl ${animItem}" aria-label="Close">
            ${iconX()}
          </button>
          <div class="text-base p-8 rounded-md ${animItem}">
            <div class="xt-h4 ">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
      <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white ${animItem} group-active:delay-500"></div>
    </div>

  </div>

</div>

<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Tooltip
</div>

<div class="xt-list xt-list-3 items-center">

  <div data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button', targetsInner: '.xt-tooltip-inner', instant: true, collapseHeight: 'targetsInner' }">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      tooltip
    </button>

    <div class="xt-tooltip p-2 group" data-xt-duration="700">
      <div class="xt-tooltip-inner ${animDesign}">
        <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
          <div class="${animItem}">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
      <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black ${animItem} group-active:delay-500"></div>
    </div>

  </div>

  <div data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button', targetsInner: '.xt-tooltip-inner', instant: true, collapseHeight: 'targetsInner' }">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      list group
    </button>

    <div class="xt-tooltip p-2 group" data-xt-duration="700">
      <div class="xt-tooltip-inner rounded-md shadow-tooltip text-black bg-white ${animDesign}">
        <form class="text-sm">

          <div class="xt-list flex-nowrap max-w-sm ${animItem}">

            <div class="xt-list-inner flex-auto">
              <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-l-md ${buttonDefault()}">
                ${iconSearch({ classes: 'text-xl -my-1' })}
              </button>
              <input type="text" class="xt-input ${inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
            </div>

            <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-r-md ${buttonPrimary()}">
              Search
            </button>

          </div>

        </form>
      </div>
      <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black ${animItem} group-active:delay-500"></div>
    </div>

  </div>

</div>

<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Overlay
</div>

<div class="xt-list xt-list-3 items-center">

  <div data-xt-overlay="{ targetsInner: ':scope > .xt-overlay-container > .xt-overlay-inner', instant: true, collapseHeight: 'targetsInner' }">
    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      screen full
    </button>
    <div class="xt-overlay group" data-xt-duration="700">
      <div class="xt-overlay-container p-0">
        <button type="button" class="xt-button xt-dismiss fixed z-last mr-2 top-0 right-0 p-5 text-2xl ${animItem}" aria-label="Close">
          ${iconX()}
        </button>
        <div class="xt-overlay-inner ${animDesign}">

          <div class="xt-card xt-min-h-screen items-center justify-center ${cardWhite()}">
            <div class="xt-media-container bg-gray-700 xt-ratio-100 ${animItem}">
              <div class="xt-media-inner">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div data-xt-overlay="{ targetsInner: ':scope > .xt-overlay-container > .xt-overlay-inner', instant: true, collapseHeight: 'targetsInner' }">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      left blocks
    </button>

    <div class="xt-overlay group" data-xt-duration="700">
      <div class="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">
        <div class="xt-overlay-inner ${animDesign}">

          <div class="xt-card xt-min-h-screen ${cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </button>
            <div class="xt-list bg-primary-500 ${animItem}">
              <button type="button" class="xt-button text-xs py-2 px-3.5 ${buttonPrimary()}">
                Menu
              </button>
              <button type="button" class="xt-button text-xs py-2 px-3.5 ${buttonPrimary()}">
                Info
              </button>
              <button type="button" class="xt-button text-xs py-2 px-3.5 ${buttonPrimary()}">
                Account
              </button>
            </div>
            <div class="xt-media-container bg-gray-700 h-48 ${animItem}">
              <div class="xt-media-inner">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">
              </div>
            </div>
            <div class="text-base p-8 ${animItem}">
              <div class="xt-h4 ">Lorem ipsum</div>
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            </div>
            <div class="text-sm p-6 bg-gray-500 mt-auto ${animItem}">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

  <div data-xt-overlay="{ targetsInner: ':scope > .xt-overlay-container > .xt-overlay-inner', instant: true, collapseHeight: 'targetsInner' }">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      contact
    </button>

    <div class="xt-overlay group" data-xt-duration="700">
      <div class="xt-overlay-container max-w-5xl">
        <div class="xt-overlay-inner rounded-md shadow-overlay ${animDesign}">

          <div class="xt-card rounded-md ${cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </button>

            <div class="md:xt-card-group rounded-md ${animItem}">

              <div class="text-base p-8 md:w-7/12">
                <div class="xt-h4 ">
                  Contact us
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>
                <form class="text-sm">
                  <div class="xt-row xt-row-x-6 xt-row-y-4">

                    <div class="w-full md:w-6/12">
                      <label class="xt-label mb-3 ${labelDefault()}">
                        Name
                      </label>
                      <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Name">
                    </div>

                    <div class="w-full md:w-6/12">
                      <label class="xt-label mb-3 ${labelDefault()}">
                        Surname
                      </label>
                      <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Surname">
                    </div>

                    <div class="w-full md:w-6/12">
                      <label class="xt-label mb-3 ${labelDefault()}">
                        Email
                      </label>
                      <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Email">
                    </div>

                    <div class="w-full md:w-6/12">
                      <label class="xt-label mb-3 ${labelDefault()}">
                        Telephone
                      </label>
                      <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Telephone">
                    </div>

                    <div class="w-full">
                      <label class="xt-label mb-3 ${labelDefault()}">
                        Subject
                      </label>
                      <select class="xt-input xt-select rounded-md ${inputDefault()}" aria-label="Subject">
                        <option selected value="">Select an option</option>
                        <option>Test</option>
                        <option>Test</option>
                        <option>Test</option>
                      </select>
                    </div>

                    <div class="w-full">
                      <label class="xt-label mb-3 ${labelDefault()}">
                        Message
                      </label>
                      <textarea class="xt-input xt-textarea rounded-md ${inputDefault()} h-24 resize-vertical" aria-label="Message"></textarea>
                    </div>

                    <div class="w-full">
                      <label class="xt-label-check">
                        <input type="checkbox" class="xt-check xt-checkbox rounded-md ${checkDefault()}">
                        <span class="xt-check-content">
                          I <strong>read and accept</strong> the <a href="#" target="_blank" rel="noopener">sales conditions</a> and the <a href="#" target="_blank" rel="noopener">privacy policy</a>.
                        </span>
                      </label>
                    </div>

                    <div class="w-full">
                      <button type="submit" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
                        Send
                      </button>
                    </div>

                  </div>
                </form>
              </div>

              <div class="md:w-5/12 flex flex-col ${animItem}">
                <div class="xt-media-container bg-gray-700 md:rounded-tr-md h-48 md:xt-ratio-100">
                  <div class="xt-media-inner">
                    <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">
                  </div>
                </div>
                <div class="text-base p-8 bg-gray-300 rounded-b-md md:rounded-bl-none flex-full">
                  <p class="xt-h5 ">
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

  <div data-xt-overlay="{ targetsInner: ':scope > .xt-overlay-container > .xt-overlay-inner', instant: true, collapseHeight: 'targetsInner' }">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      newsletter
    </button>

    <div class="xt-overlay group" data-xt-duration="700">
      <div class="xt-overlay-container max-w-5xl">
        <div class="xt-overlay-inner rounded-md shadow-overlay ${animDesign}">

          <div class="xt-card rounded-md ${cardWhite()}">
            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </button>

            <div class="md:xt-card-group rounded-md ${animItem}">

              <div class="md:w-5/12 flex flex-col">
                <div class="xt-media-container bg-gray-700 rounded-t-md md:rounded-tr-none h-48 lg:xt-ratio-100 md:flex-full">
                  <div class="xt-media-inner">
                    <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">
                  </div>
                </div>
              </div>

              <div class="text-base p-8 md:w-7/12">
                <div class="xt-h4 ">
                  Subscribe to our newsletter
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>
                <form class="text-sm">
                  <div class="xt-row xt-row-x-6 xt-row-y-4">

                    <div class="w-full">
                      <label class="xt-label mb-3 ${labelDefault()}">
                        Email
                      </label>
                      <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Email">
                    </div>

                    <div class="w-full">

                      <label class="xt-label mb-3 ${labelDefault()}">
                        Subject
                      </label>

                      <div class="xt-row xt-row-x-8 xt-row-y-2">

                        <div class="w-full sm:w-auto">
                          <label class="xt-label-check">
                            <input type="radio" class="xt-check xt-radio rounded-full ${radioDefault()}" name="radio-usage" checked>
                            <span class="xt-check-content">
                              Option 1
                            </span>
                          </label>
                        </div>

                        <div class="w-full sm:w-auto">
                          <label class="xt-label-check">
                            <input type="radio" class="xt-check xt-radio rounded-full ${radioDefault()}" name="radio-usage">
                            <span class="xt-check-content">
                              Option 2
                            </span>
                          </label>
                        </div>

                        <div class="w-full sm:w-auto">
                          <label class="xt-label-check">
                            <input type="radio" class="xt-check xt-radio rounded-full ${radioDefault()}" name="radio-usage">
                            <span class="xt-check-content">
                              Option 3
                            </span>
                          </label>
                        </div>

                      </div>

                    </div>

                    <div class="w-full">
                      <label class="xt-label-check">
                        <input type="checkbox" class="xt-check xt-checkbox rounded-md ${checkDefault()}">
                        <span class="xt-check-content">
                          I <strong>read and accept</strong> the <a href="#" target="_blank" rel="noopener">sales conditions</a> and the <a href="#" target="_blank" rel="noopener">privacy policy</a>.
                        </span>
                      </label>
                    </div>

                    <div class="w-full">
                      <button type="submit" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
                        Subscribe
                      </button>
                    </div>

                  </div>
                </form>
              </div>

            </div>

            <div class="text-sm p-6 rounded-b-md bg-gray-300 ${animItem}">
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
