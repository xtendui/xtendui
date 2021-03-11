import React from 'react'
import path from 'path'

const animDesign =
  'overflow-hidden transform transition ease-in-out-quint duration-500 delay-200 opacity-0 translate-y-full group-active:ease-out-quint group-active:delay-0 group-active:opacity-100 group-active:translate-y-0'
const animItem =
  'transform transition ease-in-out-quint duration-500 opacity-0 translate-y-1/4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-y-0'
const animItemOpacity =
  'transition-opacity ease-in-out-quint duration-300 opacity-0 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100'

const animDesignLeft =
  'overflow-hidden transform ease-in-out-quint duration-500 delay-200 opacity-0 -translate-x-full group-active:ease-out-quint group-active:delay-0 group-active:opacity-100 group-active:translate-x-0'
const animItemLeft =
  'transform ease-in-out-quint duration-500 opacity-0 -translate-x-1/4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-x-0'

const buttonMd = require('components/snippets/classes').buttonMd
const tooltipMd = require('components/snippets/classes').tooltipMd
const cardSm = require('components/snippets/classes').cardSm
const cardMd = require('components/snippets/classes').cardMd

const buttonDefault = require('components/snippets/classes').buttonDefault
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const buttonText = require('components/snippets/classes').buttonText
const buttonDefaultDrop = require('components/snippets/classes').buttonDefaultDrop

const cardWhite = require('components/snippets/classes').cardWhite
const cardBlack = require('components/snippets/classes').cardBlack
const cardDefaultInteractive = require('components/snippets/classes').cardDefaultInteractive
const cardPrimaryInteractive = require('components/snippets/classes').cardPrimaryInteractive

const labelDefault = require('components/snippets/classes').labelDefault
const inputDefault = require('components/snippets/classes').inputDefault
const checkDefault = require('components/snippets/classes').checkDefault
const radioDefault = require('components/snippets/classes').radioDefault
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
  Button
</div>

<div class="xt-list xt-list-3 items-center">

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Gray
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
    Primary
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md text-black ${buttonText()}">
    Text
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md xt-link">
    Link
  </button>

</div>

<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Drop
</div>

<div class="xt-list xt-list-3 items-center">

  <div data-xt-drop>

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      list
    </button>

    <div class="xt-drop p-4 group" data-xt-duration="700">
      <div class="xt-card w-64 py-3.5 rounded-md shadow-drop ${cardWhite()} ${animDesign}">
        <nav class="xt-list flex-col rounded-md ${animItem}">
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
      <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white ${animItemOpacity}"></div>
    </div>

  </div>

  <div data-xt-drop>

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      card
    </button>

    <div class="xt-drop p-4 group" data-xt-duration="700">
      <div class="xt-card w-64 rounded-md shadow-drop ${cardWhite()} ${animDesign}">
        <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl" aria-label="Close">
          ${iconX()}
        </button>
        <div class="${cardSm()} rounded-md ${animItem}">
          <div class="xt-h5">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis.</p>
        </div>
      </div>
      <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white ${animItemOpacity}"></div>
    </div>

  </div>

</div>

<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Tooltip
</div>

<div class="xt-list xt-list-3 items-center">

  <div data-xt-tooltip>

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      tooltip
    </button>

    <div class="xt-tooltip p-2 group" data-xt-duration="700">
      <div class="relative ${tooltipMd()} rounded-md shadow-tooltip ${cardBlack()} ${animDesign}">
        <div class="${animItem}">
          Lorem ipsum dolor sit amet
        </div>
      </div>
      <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below ${animItemOpacity}"></div>
    </div>

  </div>

  <div data-xt-tooltip>

    <div class="xt-tooltip-item">

      <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
        list group
      </button>

      <div class="xt-tooltip p-2 group" data-xt-duration="700">
        <div class="rounded-md shadow-tooltip ${cardWhite()} ${animDesign}">
          <form class="text-sm">

            <div class="xt-list flex-nowrap max-w-sm ${animItem}">

              <div class="xt-list-inner flex-auto">
                <button type="button" class="xt-button ${buttonMd()} rounded-l-md ${buttonDefault()}">
                  ${iconSearch({ classes: 'text-xl -my-1' })}
                </button>
                <input type="text" class="xt-input ${inputDefault()}" aria-label="Search" placeholder="Seach Catalog" />
              </div>

              <button type="button" class="xt-button ${buttonMd()} rounded-r-md ${buttonPrimary()}">
                Search
              </button>

            </div>

          </form>
        </div>
        <div class="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below ${animItemOpacity}"></div>
      </div>

    </div>

  </div>

</div>

<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Overlay
</div>

<div class="xt-list xt-list-3 items-center">

  <div data-xt-overlay>
    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      screen full
    </button>
    <div class="xt-overlay group" data-xt-duration="700">
      <div class="xt-backdrop bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>
      <div class="xt-overlay-container p-0">
        <button type="button" class="xt-button xt-dismiss fixed z-last top-0 right-0 p-5 text-2xl ${animItem}" aria-label="Close">
          ${iconX()}
        </button>
        <div class="xt-overlay-inner">

          <div class="xt-card xt-min-h-screen items-center justify-center ${cardWhite()} ${animDesign}">
            <div class="xt-media-container bg-gray-200 ${animItem} xt-ratio-100">
              <div class="xt-media-inner">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div data-xt-overlay>

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      Menu
    </button>

    <div class="xt-overlay group" data-xt-duration="700">
      <div class="xt-backdrop bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>
      <div class="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">
        <div class="xt-overlay-inner">

          <div class="xt-card xt-min-h-screen ${cardWhite()} ${animDesignLeft}">
            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </button>
            <div class="xt-list bg-primary-500 ${animItemLeft}">
              <button type="button" class="xt-button ${buttonMd()} ${buttonPrimary()}">
                Menu
              </button>
              <button type="button" class="xt-button ${buttonMd()} ${buttonPrimary()}">
                Info
              </button>
              <button type="button" class="xt-button ${buttonMd()} ${buttonPrimary()}">
                Account
              </button>
            </div>
            <div class="xt-media-container bg-gray-200 h-48 ${animItemLeft}">
              <div class="xt-media-inner">
                <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">
              </div>
            </div>
            <div class="${cardMd()} ${animItemLeft}">
              <div class="xt-h4">Lorem ipsum</div>
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            </div>
            <div class="${cardSm()} bg-gray-300 mt-auto ${animItemLeft}">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

  <div data-xt-overlay>

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      contact
    </button>

    <div class="xt-overlay group" data-xt-duration="700">
      <div class="xt-backdrop bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>
      <div class="xt-overlay-container max-w-5xl">
        <div class="xt-overlay-inner">

          <div class="xt-card rounded-md shadow-overlay ${cardWhite()} ${animDesign}">
            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </button>

            <div class="md:xt-card-group rounded-md ${animItem}">

              <div class="${cardMd()} md:w-7/12">
                <div class="xt-h4">
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
                      <button type="submit" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
                        Send
                      </button>
                    </div>

                  </div>
                </form>
              </div>

              <div class="md:w-5/12 flex flex-col ${animItem}">
                <div class="xt-media-container bg-gray-200 h-48 md:xt-ratio-100">
                  <div class="xt-media-inner">
                    <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">
                  </div>
                </div>
                <div class="${cardMd()} bg-gray-300 rounded-b-md md:rounded-bl-none flex-full">
                  <p class="xt-h5">
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

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      newsletter
    </button>

    <div class="xt-overlay group" data-xt-duration="700">
      <div class="xt-backdrop bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>
      <div class="xt-overlay-container max-w-5xl">
        <div class="xt-overlay-inner">

          <div class="xt-card rounded-md shadow-overlay ${cardWhite()} ${animDesign}">
            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </button>

            <div class="md:xt-card-group rounded-md ${animItem}">

              <div class="md:w-5/12 flex flex-col">
                <div class="xt-media-container bg-gray-200 rounded-t-md md:rounded-tr-none h-48 lg:xt-ratio-100 md:flex-full">
                  <div class="xt-media-inner">
                    <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">
                  </div>
                </div>
              </div>

              <div class="${cardMd()} md:w-7/12">
                <div class="xt-h4">
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
                      <button type="submit" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
                        Subscribe
                      </button>
                    </div>

                  </div>
                </form>
              </div>

            </div>

            <div class="${cardSm()} rounded-b-md bg-gray-300 ${animItem}">
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

<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Card
</div>

<div class="xt-row xt-row-6">

  <div class="w-full md:w-6/12">
    <a role="button" class="xt-card rounded-md ${cardDefaultInteractive()}">
      <div class="${cardMd()}">
        <div class="xt-h4">Default</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </a>
  </div>

  <div class="w-full md:w-6/12">
    <a role="button" class="xt-card rounded-md ${cardPrimaryInteractive()}">
      <div class="${cardMd()}">
        <div class="xt-h4">Primary</div>
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
