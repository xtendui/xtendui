import React from 'react'
import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const btnDefault = require('components/snippets/classes/btn-default').default
const cardDefault = require('components/snippets/classes/card-default').default
const cardPrimary = require('components/snippets/classes/card-primary').default
const btnDefaultDrop = require('components/snippets/classes/btn-default-drop').default
const btnCloseOutside = require('components/snippets/classes/btn-close-outside').default
const labelDefault = require('components/snippets/classes/label-default').default
const inputDefault = require('components/snippets/classes/input-default').default
const checkDefault = require('components/snippets/classes/form-check-default').default
const radioDefault = require('components/snippets/classes/form-radio-default').default
const switchDefault = require('components/snippets/classes/form-switch-default').default
const iconX = require('components/snippets/icons').iconX

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

  <button type="button" class="btn btn-md transform ease-out-quint duration-500 hover:-translate-y-1 active:translate-y-0">
    btn
  </button>

  <button type="button" class="btn btn-md text-black links-default rounded-md bg-gray-200 border-transparent transform ease-out-quint duration-500 border hover:bg-gray-300 hover:border-gray-400 hover:shadow-lg hover:-translate-y-1 active:bg-gray-400 active:shadow-sm active:translate-y-0">
    default
  </button>

  <button type="button" class="btn btn-md text-white links-inverse rounded-md bg-accent-500 border-transparent transform ease-out-quint duration-500 border hover:bg-accent-600 hover:border-accent-700 hover:shadow-lg hover:-translate-y-1 active:bg-accent-700 active:shadow-sm active:translate-y-0">
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

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-md text-white links-inverse rounded-md bg-accent-500 border-transparent border-transparent transform ease-out-quint duration-500 border hover:bg-accent-600 hover:border-accent-700 hover:shadow-lg hover:-translate-y-1 active:bg-accent-700 active:shadow-sm active:translate-y-0">
      list
    </button>

    <div class="drop group duration-700">  <!-- needed for animation time, put max animation time -->
      <div class="drop-inner">
        <div class="design-setup rounded-md bg-white shadow-lg transform ease-out-quint duration-500 delay-200 opacity-0 scale-50 group-active:delay-0 group-active:opacity-100 group-active:scale-100"></div>
        <div class="w-64 py-3 text-black links-default transform ease-out-quint duration-500 delay-0 opacity-0 -translate-y-2 group-active:delay-300 group-active:opacity-100 group-active:translate-y-0">
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
    </div>

  </div>

  <div class="drop-container" data-xt-drop>

    <button type="button" class="btn btn-md text-white links-inverse rounded-md bg-accent-500 border-transparent transform ease-out-quint duration-500 border hover:bg-accent-600 hover:border-accent-700 hover:shadow-lg hover:-translate-y-1 active:bg-accent-700 active:shadow-sm active:translate-y-0">
      card
    </button>

    <div class="drop group duration-700">  <!-- needed for animation time, put max animation time -->
      <div class="drop-inner">
        <div class="design-setup rounded-md bg-white shadow-lg transform ease-out-quint duration-500 delay-200 opacity-0 scale-50 group-active:delay-0 group-active:opacity-100 group-active:scale-100"></div>
        <div class="card w-80 text-black links-default transform ease-out-quint duration-500 delay-0 opacity-0 -translate-y-2 group-active:delay-300 group-active:opacity-100 group-active:translate-y-0">
          <div class="btn btn-close p-5 text-xl" aria-label="Close">
            ${iconX()}
          </div>
          <div class="card-md">
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
    <button type="button" class="btn btn-md text-white links-inverse rounded-md bg-accent-500 border-transparent transform ease-out-quint duration-500 border hover:bg-accent-600 hover:border-accent-700 hover:shadow-lg hover:-translate-y-1 active:bg-accent-700 active:shadow-sm active:translate-y-0">
      screen image full
    </button>
    <div class="overlay overlay-screen group duration-700">  <!-- needed for animation time, put max animation time -->
      <div class="overlay-container">
        <div class="overlay-inner">

          <div class="design-setup rounded-md bg-white shadow-lg transform ease-out-quint duration-500 delay-200 opacity-0 scale-50 group-active:delay-0 group-active:opacity-100 group-active:scale-100"></div>

          <div class="card items-center justify-center text-black links-default transform ease-out-quint duration-500 delay-0 opacity-0 -translate-y-2 group-active:delay-300 group-active:opacity-100 group-active:translate-y-0">
            <div class="btn btn-close p-5 text-2xl fixed z-top" aria-label="Close">
              ${iconX()}
            </div>
            <div class="media-container" style="padding-bottom: 100%;">
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

    <button type="button" class="btn btn-md text-white links-inverse rounded-md bg-accent-500 border-transparent transform ease-out-quint duration-500 border hover:bg-accent-600 hover:border-accent-700 hover:shadow-lg hover:-translate-y-1 active:bg-accent-700 active:shadow-sm active:translate-y-0">
      left blocks
    </button>

    <div class="overlay overlay-screen group duration-700">  <!-- needed for animation time, put max animation time -->
      <div class="overlay-container max-w-md ml-0 mr-auto">
        <div class="overlay-inner">

          <div class="design-setup rounded-md bg-white shadow-lg transform ease-out-quint duration-500 delay-200 opacity-0 scale-50 group-active:delay-0 group-active:opacity-100 group-active:scale-100"></div>

          <div class="card text-black links-default transform ease-out-quint duration-500 delay-0 opacity-0 -translate-y-2 group-active:delay-300 group-active:opacity-100 group-active:translate-y-0">
            <div class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </div>
            <div class="bg-accent-500">
              <button type="button" class="btn btn-md text-white links-inverse bg-accent-500 border-transparent transform ease-out-quint duration-500 border hover:bg-accent-600 hover:border-accent-700 hover:shadow-lg hover:translate-y-1 active:bg-accent-700 active:shadow-sm active:translate-y-0">
                Menu
              </button>
              <button type="button" class="btn btn-md text-white links-inverse bg-accent-500 border-transparent transform ease-out-quint duration-500 border hover:bg-accent-600 hover:border-accent-700 hover:shadow-lg hover:translate-y-1 active:bg-accent-700 active:shadow-sm active:translate-y-0">
                Info
              </button>
              <button type="button" class="btn btn-md text-white links-inverse bg-accent-500 border-transparent transform ease-out-quint duration-500 border hover:bg-accent-600 hover:border-accent-700 hover:shadow-lg hover:translate-y-1 active:bg-accent-700 active:shadow-sm active:translate-y-0">
                Account
              </button>
            </div>
            <div class="media-container" style="padding-bottom: 37.5%;">
              <div class="media-inner">
                <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
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

    <button type="button" class="btn btn-md text-white links-inverse rounded-md bg-accent-500 border-transparent transform ease-out-quint duration-500 border hover:bg-accent-600 hover:border-accent-700 hover:shadow-lg hover:-translate-y-1 active:bg-accent-700 active:shadow-sm active:translate-y-0">
      contact
    </button>

    <div class="overlay group duration-700">  <!-- needed for animation time, put max animation time -->
      <div class="overlay-container max-w-5xl">
        <div class="overlay-inner">

          <div class="design-setup rounded-md bg-white shadow-lg transform ease-out-quint duration-500 delay-200 opacity-0 scale-50 group-active:delay-0 group-active:opacity-100 group-active:scale-100"></div>

          <div class="card text-black links-default transform ease-out-quint duration-500 delay-0 opacity-0 -translate-y-2 group-active:delay-300 group-active:opacity-100 group-active:translate-y-0">
            <div class="btn btn-close p-5 text-2xl ${btnCloseOutside()} md:p-3 md:right-auto md:left-100" aria-label="Close">
              ${iconX()}
            </div>

            <div class="lg:card-group">

              <div class="card-lg text-sm lg:w-7/12">
                <div class="h4">
                  Contact us
                </div>
                <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam.</p>
                <form class="text-lg">
                  <div class="row row-x-4 row-y-3">

                    <div class="w-full lg:w-6/12">
                      <label class="form-label mb-4 ${labelDefault()}">
                        Name
                      </label>
                      <input type="text" class="form-item ${inputDefault()}" placeholder="Input">
                    </div>

                    <div class="w-full lg:w-6/12">
                      <label class="form-label mb-4 ${labelDefault()}">
                        Surname
                      </label>
                      <input type="text" class="form-item ${inputDefault()}" placeholder="Input">
                    </div>

                    <div class="w-full lg:w-6/12">
                      <label class="form-label mb-4 ${labelDefault()}">
                        Email
                      </label>
                      <input type="text" class="form-item ${inputDefault()}" placeholder="Input">
                    </div>

                    <div class="w-full lg:w-6/12">
                      <label class="form-label mb-4 ${labelDefault()}">
                        Telephone
                      </label>
                      <input type="text" class="form-item ${inputDefault()}" placeholder="Input">
                    </div>

                    <div class="w-full">
                      <label class="form-label mb-4 ${labelDefault()}">
                        Subject
                      </label>
                      <select class="form-item form-select ${inputDefault()}">
                        <option selected value="">Select an option</option>
                        <option>Test</option>
                        <option>Test</option>
                        <option>Test</option>
                      </select>
                    </div>

                    <div class="w-full">
                      <label class="form-label mb-4 ${labelDefault()}">
                        Textarea
                      </label>
                      <textarea class="form-item ${inputDefault()} h-24 resize-vertical duration-150" placeholder="Textarea"></textarea>
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
                      <button type="submit" class="btn btn-md text-white links-inverse rounded-md bg-accent-500 border-transparent transform ease-out-quint duration-500 border hover:bg-accent-600 hover:border-accent-700 hover:shadow-lg hover:-translate-y-1 active:bg-accent-700 active:shadow-sm active:translate-y-0">
                        Send
                      </button>
                    </div>

                  </div>
                </form>
              </div>

              <div class="lg:w-5/12 flex flex-col">
                <div class="card-md bg-gray-300 flex-full text-sm">
                  <p class="h5">
                    Didn't find what you was looking for?
                  </p>
                  <p>
                      Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at <a href="mailto:info@info.com">info@info.com</a>.
                  </p>
                </div>
                <div class="media-container rounded-b-md lg:rounded-bl-none lg:rounded-br-md" style="padding-bottom: 100%;">
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

    <button type="button" class="btn btn-md text-white links-inverse rounded-md bg-accent-500 border-transparent transform ease-out-quint duration-500 border hover:bg-accent-600 hover:border-accent-700 hover:shadow-lg hover:-translate-y-1 active:bg-accent-700 active:shadow-sm active:translate-y-0">
      newsletter
    </button>

    <div class="overlay group duration-700">  <!-- needed for animation time, put max animation time -->
      <div class="overlay-container max-w-5xl">
        <div class="overlay-inner">

          <div class="design-setup rounded-md bg-white shadow-lg transform ease-out-quint duration-500 delay-200 opacity-0 scale-50 group-active:delay-0 group-active:opacity-100 group-active:scale-100"></div>

          <div class="card text-black links-default transform ease-out-quint duration-500 delay-0 opacity-0 -translate-y-2 group-active:delay-300 group-active:opacity-100 group-active:translate-y-0">
            <div class="btn btn-close p-5 text-2xl ${btnCloseOutside()} md:p-3 md:right-auto md:left-100" aria-label="Close">
              ${iconX()}
            </div>

            <div class="lg:card-group">

              <div class="lg:w-5/12 flex flex-col">
                <div class="media-container flex-full" style="padding-bottom: 100%;">
                  <div class="media-inner">
                    <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                  </div>
                </div>
              </div>

              <div class="card-lg text-sm lg:w-7/12">
                <div class="h4">
                  Subscribe to our newsletter
                </div>
                <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam.</p>
                <form class="text-lg">
                  <div class="row row-x-4 row-y-3">

                    <div class="w-full">
                      <label class="form-label mb-4 ${labelDefault()}">
                        Email
                      </label>
                      <input type="text" class="form-item ${inputDefault()}" placeholder="Input">
                    </div>

                    <div class="w-full">

                      <label class="form-label mb-4 ${labelDefault()}">
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
                      <button type="submit" class="btn btn-md text-white links-inverse rounded-md bg-accent-500 border-transparent transform ease-out-quint duration-500 border hover:bg-accent-600 hover:border-accent-700 hover:shadow-lg hover:-translate-y-1 active:bg-accent-700 active:shadow-sm active:translate-y-0">
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

  <div data-xt-overlay>
    <button type="button" class="btn btn-primary">
      overlay newsletter
    </button>
    <div class="overlay overlay-default overlay-size-sm">
      <div class="overlay-container max-w-5xl">
        <div class="overlay-inner">
          <div class="overlay-design"></div>

          <div class="card card-overlay"
            style="align-items: stretch;">
            <div class="card-design"></div>
            <div class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </div>
            <div class="card-inner">
              <div class="card-content">

                <div class="card-item-nested card-item card-group-sm">

                  <div class="card-item sm:w-5/12">
                    <div class="media-container full-y" style="padding-bottom: 37.5%;">
                      <div class="media-inner">
                        <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                      </div>
                    </div>
                  </div>

                  <div class="card-item">

                    <div class="h4">
                      Subscribe to our newsletter
                    </div>

                    <form>

                      <div class="form-group">
                        <label class="form-label">
                          Email
                        </label>
                        <input type="email" class="form-item" placeholder="Email" required>
                      </div>

                      <div class="form-group-inline">

                        <label class="form-label">
                          Select an option
                        </label>

                        <div class="form-group">
                          <input type="radio" id="radio-newsletter-0" name="radio-newsletter" required>
                          <label class="form-label" for="radio-newsletter-0">
                            Option 1
                          </label>
                        </div>

                        <div class="form-group">
                          <input type="radio" id="radio-newsletter-1" name="radio-newsletter" required>
                          <label class="form-label" for="radio-valinewsletterdation-1">
                            Option 2
                          </label>
                        </div>

                      </div>

                      <div class="form-group">
                        <input type="checkbox" id="check-newsletter" name="check-newsletter" required>
                        <label class="form-label" for="check-newsletter">
                        <span>
                          I <strong>read and accept</strong> the <a href="#" target="_blank">sales conditions</a> and the <a href="#" target="_blank">privacy policy</a>.
                        </label>
                      </div>

                      <button type="submit" class="btn btn-primary btn-wide">
                        Subscribe
                      </button>

                    </form>

                  </div>

                </div>

                <div class="card-item card-block-side card-sm">
                  <p>Receive <strong>free discount</strong> periodically on all our products.</p>
                </div>

              </div>
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
      <a role="button" class="card ${cardDefault()}">
        <div class="card-md">
          <div class="h4">Lorem ipsum dolor sit amet</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
      </a>
    </div>

    <div class="w-full md:w-6/12">
      <a role="button" class="card ${cardPrimary()}">
        <div class="card-md">
          <div class="h4">Lorem ipsum dolor sit amet</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
      </a>
    </div>

    <div class="w-full md:w-6/12">
      <div class="card ${cardDefault()}">
        <div class="card-md">
          <div class="h4">Lorem ipsum dolor sit amet</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          <button type="button" class="btn btn-md ${btnPrimary()}">
            primary
          </button>
        </div>
      </div>
    </div>

    <div class="w-full md:w-6/12">
      <div class="card ${cardPrimary()}">
        <div class="card-md">
          <div class="h4">Lorem ipsum dolor sit amet</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          <button type="button" class="btn btn-md ${btnDefault()}">
            default
          </button>
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
