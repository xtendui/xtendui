import React from 'react'
import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefaultInteractive = require('components/snippets/classes/card-default-interactive').default
const cardPrimaryInteractive = require('components/snippets/classes/card-primary-interactive').default
const btnDefaultDrop = require('components/snippets/classes/btn-default-drop').default
const btnCloseOutside = require('components/snippets/classes/btn-close-outside').default
const labelDefault = require('components/snippets/classes/label-default').default
const inputDefault = require('components/snippets/classes/input-default').default
const checkDefault = require('components/snippets/classes/form-check-default').default
const radioDefault = require('components/snippets/classes/form-radio-default').default
const iconX = require('components/snippets/icons').iconX
const cardDefault =
  ' text-black links-default bg-white shadow-lg transform ease-in-out-quint duration-700 delay-300 opacity-0 translate-y-full group-active:ease-out-quint group-active:delay-0 group-active:opacity-100 group-active:translate-y-0'
const cardItem =
  'transform ease-in-out-quint duration-700 delay-0 opacity-0 translate-y-1/2 group-active:ease-out-quint group-active:delay-300 group-active:opacity-100 group-active:translate-y-0'

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  full: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Button
</div>

<div class="list list-2 items-center">

  <button type="button" class="btn btn-md">
    btn
  </button>

  <button type="button" class="btn btn-md ${btnDefault()}">
    default
  </button>

  <button type="button" class="btn btn-md ${btnPrimary()}">
    primary
  </button>

  <button type="button" class="btn btn-md link">
    link
  </button>

  <button type="button" class="btn btn-md text-reset">
    text
  </button>

</div>

<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Drop
</div>

<div class="list list-2 items-center">

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      list
    </button>

    <div class="drop group duration-700"> <!-- needed for animation time, put max animation time -->
      <div class="drop-inner">
        <div class="w-64 py-3 rounded-md ${cardDefault}">
          <nav class="list flex-col ${cardItem}">
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
    </div>

  </div>

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      card
    </button>

    <div class="drop group duration-700"> <!-- needed for animation time, put max animation time -->
      <div class="drop-inner">
        <div class="card w-80 ${cardDefault}">
          <div class="btn btn-close p-5 text-xl" aria-label="Close">
            ${iconX()}
          </div>
          <div class="card-md ${cardItem}">
            <div class="h4">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
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
    <div class="overlay overlay-screen group duration-1000">  <!-- needed for animation time, put max animation time -->
      <div class="overlay-container">
        <div class="overlay-inner">

          <div class="card items-center justify-center ${cardDefault}">
            <div class="btn btn-close p-5 text-2xl fixed z-top" aria-label="Close">
              ${iconX()}
            </div>
            <div class="media-container ${cardItem} ratio-100">
              <div class="media-inner">
                <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
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

    <div class="overlay overlay-screen group duration-1000">  <!-- needed for animation time, put max animation time -->
      <div class="overlay-container max-w-md ml-0 mr-auto">
        <div class="overlay-inner">

          <div class="card ${cardDefault}">
            <div class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </div>
            <div class="list bg-accent-500 ${cardItem}">
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
            <div class="media-container ${cardItem} h-48">
              <div class="media-inner">
                <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
              </div>
            </div>
            <div class="card-md ${cardItem}">
              <div class="h4">Lorem ipsum</div>
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            </div>
            <div class="card-sm bg-gray-500 mt-auto ${cardItem}">
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

    <div class="overlay group duration-1000">  <!-- needed for animation time, put max animation time -->
      <div class="overlay-container max-w-5xl">
        <div class="overlay-inner">

          <div class="card rounded-md md:rounded-tr-none ${cardDefault}">
            <div class="btn btn-close p-5 text-2xl ${btnCloseOutside()} md:p-3 md:right-auto md:left-100" aria-label="Close">
              ${iconX()}
            </div>

            <div class="md:card-group ${cardItem}">

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
                      <input type="text" class="form-item ${inputDefault()}" aria-label="Name">
                    </div>

                    <div class="w-full md:w-6/12">
                      <label class="form-label mb-3 ${labelDefault()}">
                        Surname
                      </label>
                      <input type="text" class="form-item ${inputDefault()}" aria-label="Surname">
                    </div>

                    <div class="w-full md:w-6/12">
                      <label class="form-label mb-3 ${labelDefault()}">
                        Email
                      </label>
                      <input type="text" class="form-item ${inputDefault()}" aria-label="Email">
                    </div>

                    <div class="w-full md:w-6/12">
                      <label class="form-label mb-3 ${labelDefault()}">
                        Telephone
                      </label>
                      <input type="text" class="form-item ${inputDefault()}" aria-label="Telephone">
                    </div>

                    <div class="w-full">
                      <label class="form-label mb-3 ${labelDefault()}">
                        Subject
                      </label>
                      <select class="form-item form-select ${inputDefault()}" aria-label="Subject">
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
                      <textarea class="form-item ${inputDefault()} h-24 resize-vertical" aria-label="Message"></textarea>
                    </div>

                    <div class="w-full">
                      <label class="form-label-check">
                        <input type="checkbox" class="form-check form-checkbox ${checkDefault()}">
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
                <div class="card-md bg-gray-300 flex-full text-sm">
                  <p class="h5">
                    Didn't find what you was looking for?
                  </p>
                  <p>
                      Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at <a href="mailto:info@info.com">info@info.com</a>.
                  </p>
                </div>
                <div class="media-container rounded-b-md md:rounded-bl-none md:rounded-br-md h-32 lg:ratio-100">
                  <div class="media-inner">
                    <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                  </div>
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

    <div class="overlay group duration-1000">  <!-- needed for animation time, put max animation time -->
      <div class="overlay-container max-w-5xl">
        <div class="overlay-inner">

          <div class="card rounded-md md:rounded-tr-none ${cardDefault}">
            <div class="btn btn-close p-5 text-2xl ${btnCloseOutside()} md:p-3 md:right-auto md:left-100" aria-label="Close">
              ${iconX()}
            </div>

            <div class="md:card-group ${cardItem}">

              <div class="md:w-5/12 flex flex-col">
                <div class="media-container rounded-t-md md:rounded-tr-none h-48 lg:ratio-100 md:flex-full">
                  <div class="media-inner">
                    <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
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
                      <input type="text" class="form-item ${inputDefault()}" aria-label="Email">
                    </div>

                    <div class="w-full">

                      <label class="form-label mb-3 ${labelDefault()}">
                        Subject
                      </label>

                      <div class="row row-x-4 row-y-1">

                        <div class="w-full sm:w-auto">
                          <label class="form-label-check">
                            <input type="radio" class="form-check form-radio ${radioDefault()}" name="radio-usage" checked>
                            <span class="ml-3">
                              Option 1
                            </span>
                          </label>
                        </div>

                        <div class="w-full sm:w-auto">
                          <label class="form-label-check">
                            <input type="radio" class="form-check form-radio ${radioDefault()}" name="radio-usage">
                            <span class="ml-3">
                              Option 2
                            </span>
                          </label>
                        </div>

                        <div class="w-full sm:w-auto">
                          <label class="form-label-check">
                            <input type="radio" class="form-check form-radio ${radioDefault()}" name="radio-usage">
                            <span class="ml-3">
                              Option 3
                            </span>
                          </label>
                        </div>

                      </div>

                    </div>

                    <div class="w-full">
                      <label class="form-label-check">
                        <input type="checkbox" class="form-check form-checkbox ${checkDefault()}">
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
    <a role="button" class="card ${cardDefaultInteractive()}">
      <div class="card-md">
        <div class="h4">Default</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </a>
  </div>

  <div class="w-full md:w-6/12">
    <a role="button" class="card ${cardPrimaryInteractive()}">
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
