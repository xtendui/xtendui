import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/toggle'
import 'xtendui/src/drop'
import 'xtendui/src/tooltip'
import gsap from 'gsap'

export default function Demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--electric-animation-v1-react" ref={ref}>
      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
        Button
      </div>

      <div className="xt-list xt-list-3 items-center">
        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 xt-links-default bg-gray-100">
          Gray
        </button>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white xt-links-inverse bg-primary-500">
          Primary
        </button>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase ">
          Text
        </button>

        <button type="button" className="xt-button py-2.5 px-3.5 text-sm rounded-md xt-link">
          Link
        </button>
      </div>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
        Toggle
      </div>

      <form className="text-sm">
        <div className="xt-list xt-list-3 items-center" data-xt-toggle="{ duration: 650 }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white xt-links-inverse bg-primary-500"
            data-xt-toggle-element>
            Group
          </button>

          <div className="*** off:hidden out:pointer-events-none group *** max-w-sm" data-xt-toggle-target>
            <div className="*** relative rounded-md ***">
              <div className="*** anim-border ***"></div>
              <div className="xt-list flex-nowrap *** transition ease-in-out opacity-0 group-in:opacity-100 group-out:delay-150 ***">
                <div className="inline-flex flex-auto">
                  <button
                    type="submit"
                    className="xt-button py-2.5 px-3.5 text-sm rounded-l-md text-gray-900 xt-links-default bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-xl -my-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </button>
                  <input
                    type="text"
                    className="block w-full py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                    aria-label="Search"
                    placeholder="Seach Catalog"
                  />
                </div>

                <button
                  type="submit"
                  className="xt-button py-2.5 px-3.5 text-sm rounded-r-md font-medium leading-snug tracking-wider uppercase text-white xt-links-inverse bg-primary-500">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
        Drop
      </div>

      <div className="xt-list xt-list-3 items-center">
        <div data-xt-drop="{ position: 'auto-end', duration: 650 }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white xt-links-inverse bg-primary-500"
            data-xt-drop-element>
            Nav
          </button>
          <div className="xt-drop p-3 *** group ***" data-xt-drop-target>
            <div className="*** relative rounded-md ***">
              <div className="*** anim-border anim-border--inverse ***"></div>
              <div className="xt-card w-60 text-white xt-links-inverse rounded-md shadow-lg bg-primary-500 *** transition ease-in-out opacity-0 group-in:opacity-100 group-out:delay-150 ***">
                <nav aria-label="Drop" className="xt-list flex-col p-3">
                  <a
                    href="/"
                    className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug justify-start text-left text-white bg-primary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-lg opacity-50 mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                      <polyline points="13 2 13 9 20 9"></polyline>
                    </svg>{' '}
                    Description
                  </a>
                  <a
                    href="/"
                    className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug justify-start text-left text-white bg-primary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-lg opacity-50 mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>{' '}
                    Features
                  </a>
                  <a
                    href="/"
                    className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug justify-start text-left text-white bg-primary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-lg opacity-50 mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>{' '}
                    Accessories
                  </a>
                  <a
                    href="/"
                    className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug justify-start text-left text-white bg-primary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-lg opacity-50 mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>{' '}
                    Manuals
                  </a>
                </nav>
              </div>
            </div>
            <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-primary-500 *** opacity-0 transition-opacity ease-in-out opacity-0 group-in:delay-150 group-in:opacity-100 group-in:opacity-100 ***"></div>
          </div>
        </div>

        <div data-xt-drop="{ position: 'auto-end', duration: 650 }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white xt-links-inverse bg-primary-500"
            data-xt-drop-element>
            Contact
          </button>
          <div className="xt-drop p-3 *** group ***" data-xt-drop-target>
            <div className="*** relative rounded-md ***">
              <div className="*** anim-border ***"></div>
              <div className="xt-card w-80 text-gray-900 xt-links-default rounded-md shadow-lg bg-white *** transition ease-in-out opacity-0 group-in:opacity-100 group-out:delay-150 ***">
                <nav aria-label="Navigation" className="xt-list xt-list-1 flex-col py-2">
                  <a href="/" className="xt-button py-1.5 px-3 text-sm ">
                    <div className="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap">
                      <div className="p-2 bg-primary-100 rounded-md text-white xt-links-inverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="xt-icon text-2xl text-primary-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Email Us</div>
                        <div className="text-xs opacity-50">We&apos;ll respond within 24 hours.</div>
                      </div>
                    </div>
                  </a>
                  <a href="/" className="xt-button py-1.5 px-3 text-sm ">
                    <div className="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap">
                      <div className="p-2 bg-primary-100 rounded-md text-white xt-links-inverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="xt-icon text-2xl text-primary-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Phone</div>
                        <div className="text-xs opacity-50">Contact us on 24/7 support line.</div>
                      </div>
                    </div>
                  </a>
                  <a href="/" className="xt-button py-1.5 px-3 text-sm ">
                    <div className="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap">
                      <div className="p-2 bg-primary-100 rounded-md text-white xt-links-inverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="xt-icon text-2xl text-primary-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Support</div>
                        <div className="text-xs opacity-50">Open a ticket on our support site.</div>
                      </div>
                    </div>
                  </a>
                </nav>
                <div className="p-5 text-xs rounded-b-md bg-primary-100 flex-auto">
                  <p className="mb-1 font-bold text-sm">Didn&apos;t find what you was looking for?</p>
                  <p>
                    Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at
                    <a href="mailto:info@info.com">info@info.com</a>.
                  </p>
                </div>
              </div>
            </div>
            <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-gray-200 *** opacity-0 transition-opacity ease-in-out opacity-0 group-in:delay-150 group-in:opacity-100 group-in:opacity-100 ***"></div>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
        Tooltip
      </div>

      <div data-xt-tooltip="{ mouseParent: true, duration: 650 }">
        Example tooltips
        <span>
          <a href="/" data-xt-tooltip-element>
            product informations
          </a>

          <div className="xt-tooltip p-3 *** group ***" data-xt-tooltip-target>
            <div className="*** relative rounded-md ***">
              <div className="*** anim-border anim-border--inverse ***"></div>
              <div className="xt-card w-80 text-white xt-links-inverse rounded-md shadow-md font-medium bg-black *** transition ease-in-out opacity-0 group-in:opacity-100 group-out:delay-150 ***">
                <div className="xt-list xt-list-1 flex-col py-2">
                  <div>
                    <div className="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap py-1.5 px-3 text-sm">
                      <div className="p-2 bg-primary-800 rounded-md text-white xt-links-inverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="xt-icon text-2xl text-primary-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Shipping Limits</div>
                        <div className="text-xs opacity-50">Delivery is EU and US only.</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap py-1.5 px-3 text-sm">
                      <div className="p-2 bg-primary-800 rounded-md text-white xt-links-inverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="xt-icon text-2xl text-primary-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                          <line x1="12" y1="9" x2="12" y2="13"></line>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">VAT Excluded</div>
                        <div className="text-xs opacity-50">The prices is excluding VAT.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black *** opacity-0 transition-opacity ease-in-out opacity-0 group-in:delay-150 group-in:opacity-100 group-in:opacity-100 ***"></div>
          </div>
        </span>
        and
        <span>
          <a href="/" data-xt-tooltip-element>
            credit card CVV
          </a>

          <div className="xt-tooltip p-3 *** group ***" data-xt-tooltip-target>
            <div className="*** relative rounded-md ***">
              <div className="*** anim-border ***"></div>
              <div className="xt-card w-80 text-gray-900 xt-links-default rounded-md shadow-md bg-white *** transition ease-in-out opacity-0 group-in:opacity-100 group-out:delay-150 ***">
                <div className="xt-media-container bg-gray-200 rounded-t-md h-32">
                  <img className="xt-media object-cover" src="/img.jpg" loading="lazy" alt="" />
                </div>
                <div>
                  <div className="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap py-1.5 px-3 text-sm">
                    <div className="p-2 bg-primary-100 rounded-md text-white xt-links-inverse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="xt-icon text-2xl text-primary-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                        <line x1="1" y1="10" x2="23" y2="10"></line>
                      </svg>
                    </div>
                    <div className="text-xs">
                      The card security code is the three-digit number at the back of your debit card.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-gray-200 *** opacity-0 transition-opacity ease-in-out opacity-0 group-in:delay-150 group-in:opacity-100 group-in:opacity-100 ***"></div>
          </div>
        </span>
        <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
          Card
        </div>
        <div className="xt-row xt-row-6">
          <div className="w-full md:w-6/12">
            <button type="button" className="xt-card rounded-2xl text-gray-900 xt-links-default bg-gray-100">
              <div className="p-7 sm:p-9 text-base">
                <div className="xt-h4">Default</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
                  tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
                  magna eget, vehicula scelerisque elit.
                </p>
              </div>
            </button>
          </div>

          <div className="w-full md:w-6/12">
            <button type="button" className="xt-card rounded-2xl text-white xt-links-inverse bg-primary-500">
              <div className="p-7 sm:p-9 text-base">
                <div className="xt-h4">Primary</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
                  tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
                  magna eget, vehicula scelerisque elit.
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* mask */

const animMask = ({ mask, inverse } = {}) => {
  if (inverse) {
    gsap.killTweensOf(mask)
    gsap.set(mask, {
      'clip-path': 'circle(0% at 100% 50%)',
    })
    gsap
      .to(mask, {
        keyframes: [
          { 'clip-path': 'circle(60% at 100% 50%)' },
          { 'clip-path': 'circle(60% at 50% 50%)' },
          { 'clip-path': 'circle(60% at 0% 50%)' },
          { 'clip-path': 'circle(0% at 0% 50%)' },
        ],
        ease: 'quint.inOut',
        duration: 0.65,
      })
      .timeline.duration()
  } else {
    gsap.killTweensOf(mask)
    gsap.set(mask, {
      'clip-path': 'circle(0% at 0% 50%)',
    })
    gsap
      .to(mask, {
        keyframes: [
          { 'clip-path': 'circle(60% at 0% 50%)' },
          { 'clip-path': 'circle(60% at 50% 50%)' },
          { 'clip-path': 'circle(60% at 100% 50%)' },
          { 'clip-path': 'circle(0% at 100% 50%)' },
        ],
        ease: 'quint.inOut',
        duration: 0.65,
      })
      .timeline.duration()
  }
}

/* mountDrop */

const mountDrop = ({ ref }) => {
  // vars

  const item = ref
  const border = item.querySelector('.anim-border')

  // on

  const on = () => {
    animMask({ mask: border })
  }

  item.addEventListener('on.xt.drop', on)

  // off

  const off = () => {
    animMask({ mask: border, inverse: true })
  }

  item.addEventListener('off.xt.drop', off)
}

/* mountTooltip */

const mountTooltip = ({ ref }) => {
  // vars

  const item = ref
  const border = item.querySelector('.anim-border')

  // on

  const on = () => {
    animMask({ mask: border })
  }

  item.addEventListener('on.xt.tooltip', on)

  // off

  const off = () => {
    animMask({ mask: border, inverse: true })
  }

  item.addEventListener('off.xt.tooltip', off)
}

/* mountToggle */

const mountToggle = ({ ref }) => {
  // vars

  const item = ref
  const border = item.querySelector('.anim-border')

  // on

  const on = () => {
    animMask({ mask: border })
  }

  item.addEventListener('on.xt.toggle', on)

  // off

  const off = () => {
    animMask({ mask: border, inverse: true })
  }

  item.addEventListener('off.xt.toggle', off)
}

/* mountButton */

const mountButton = ({ ref }) => {
  // vars

  const item = ref
  let border = item.querySelector('.anim-border')

  // inject

  if (!border) {
    item.prepend(Xt.node({ str: '<div class="anim-border"></div>' }))
    border = item.querySelector('.anim-border')
    gsap.set(border, {
      'clip-path': 'circle(0% at 100% 50%)',
    })
  }

  // enter

  const enter = () => {
    animMask({ mask: border })
  }

  item.addEventListener('mouseenter', enter)
}

/* mountInteraction */

const mountInteraction = ({ ref }) => {
  // mount granularly

  Xt.mount({
    root: ref,
    matches: '.xt-drop',
    mount: ({ ref }) => {
      return mountDrop({ ref })
    },
  })

  Xt.mount({
    root: ref,
    matches: '.xt-tooltip',
    mount: ({ ref }) => {
      return mountTooltip({ ref })
    },
  })

  Xt.mount({
    root: ref,
    matches: '[data-xt-toggle-target]',
    mount: ({ ref }) => {
      return mountToggle({ ref })
    },
  })

  Xt.mount({
    root: ref,
    matches: '.xt-button:not([class*=" z-"]), a.xt-card, button.xt-card',
    mount: ({ ref }) => {
      return mountButton({ ref })
    },
  })

  // unmount

  return () => {}
}

/* mount */

const mount = ({ ref }) => {
  const unmountInteraction = mountInteraction({ ref })

  // unmount

  return () => {
    unmountInteraction()
  }
}
