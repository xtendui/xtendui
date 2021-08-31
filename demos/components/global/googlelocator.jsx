import React, { useRef, useEffect } from 'react'
/* global google */
import { Xt } from 'xtendui'
import 'xtendui/src/googlelocator'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--googlelocator-react" ref={ref}>
      <div className="flex flex-wrap flex-auto flex-col md:flex-row md:min-h-screen">
        <div className="flex flex-col w-full relative z-10 md:shadow-md md:min-h-full md:w-[20rem] lg:w-[25rem] xl:w-[30rem]">
          <div className="relative p-6 border-b border-gray-100">
            <form className="text-sm">
              <div className="xt-row xt-row-x-6 xt-row-y-4">
                <div className="w-full">
                  <div className="xt-list flex-nowrap">
                    <div className="inline-flex flex-auto">
                      <input
                        type="text"
                        className="block w-full rounded-l-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                        aria-label="Search"
                        placeholder="Search"
                        data-xt-googlelocator-search-input
                      />
                      <button
                        type="button"
                        className="xt-button py-2.5 px-3.5 text-sm font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
                        data-xt-googlelocator-locate-btn>
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
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="xt-button py-2.5 px-3.5 text-sm rounded-r-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
                        data-xt-googlelocator-search-btn>
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
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <label className="cursor-pointer inline-flex items-baseline">
                    <input
                      type="radio"
                      className="xt-check xt-radio rounded-full text-primary-500 bg-gray-200 border border-transparent transition-all"
                      name="type-options"
                      defaultValue=""
                      data-xt-googlelocator-filter
                      defaultChecked
                    />
                    <span className="ml-4">All types</span>
                  </label>
                </div>

                <div className="w-full">
                  <label className="cursor-pointer inline-flex items-baseline">
                    <input
                      type="radio"
                      className="xt-check xt-radio rounded-full text-primary-500 bg-gray-200 border border-transparent transition-all"
                      name="type-options"
                      defaultValue="restaurant"
                      data-xt-googlelocator-filter
                    />
                    <span className="ml-4">Restaurant</span>
                  </label>
                </div>

                <div className="w-full">
                  <label className="cursor-pointer inline-flex items-baseline">
                    <input
                      type="radio"
                      className="xt-check xt-radio rounded-full text-primary-500 bg-gray-200 border border-transparent transition-all"
                      name="type-options"
                      defaultValue="school"
                      data-xt-googlelocator-filter
                    />
                    <span className="ml-4">School</span>
                  </label>
                </div>

                <div className="w-full">
                  <label className="cursor-pointer inline-flex items-baseline">
                    <input
                      type="checkbox"
                      className="xt-check xt-switch rounded-full text-primary-500 bg-gray-200 border border-transparent transition-all"
                      name="type-fav"
                      defaultValue="fav"
                      data-xt-googlelocator-filter
                    />
                    <span className="ml-4">Favourite</span>
                  </label>
                </div>
              </div>
            </form>
          </div>

          <div
            className="relative w-full p-6 xt-overflow-sub overflow-y-scroll md:flex-1"
            data-xt-googlelocator-results>
            <div className="*** googlelocator-result googlelocator-result--initial *** text-xs pb-4 border-b border-gray-100">
              Insert your position and find a place near you
            </div>

            <div className="*** googlelocator-result googlelocator-result--error *** text-xs pb-4 border-b border-gray-100">
              Request timed out, retry
            </div>

            <div className="*** googlelocator-result googlelocator-result--noplace *** text-xs pb-4 border-b border-gray-100">
              Not a valid place
            </div>

            <div className="*** googlelocator-result googlelocator-result--empty *** text-xs pb-4 border-b border-gray-100">
              No place found
            </div>

            <div className="*** googlelocator-result googlelocator-result--founds *** text-xs pb-4 border-b border-gray-100">
              <span data-xt-googlelocator-results-found></span>
              places found
            </div>

            <div data-xt-googlelocator-items-container>
              <script type="text/x-template" data-xt-googlelocator-items-template>
                <div
                  className="py-4 cursor-pointer border-b border-gray-100 transition in:border-gray-500"
                  tabIndex="-1">
                  <div className="xt-list xt-list-2 flex-nowrap items-center justify-between">
                    <div className="*** googlelocator-item-content *** text-xs leading-relaxed">
                      <div
                        className="mb-2 xt-mb-auto font-bold leading-none tracking-tight text-xl"
                        data-xt-populate="name"></div>
                      <address className="not-italic" data-xt-populate="address"></address>
                      <div data-xt-populate="additional"></div>
                    </div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener"
                      className="text-2xs uppercase xt-list xt-list-2 flex-col items-center"
                      title="directions"
                      data-xt-populate="direction">
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
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span data-xt-populate="distance"></span>
                    </a>
                  </div>
                </div>
              </script>
            </div>
          </div>
        </div>

        <div className="relative flex-auto min-h-full md:absolute md:inset-0 pointer-events-none invisible md:pointer-events-auto md:visible md:pl-[20rem] lg:pl-[25rem] xl:pl-[30rem]">
          <div className="relative w-full h-full">
            <div className="w-full h-full" data-xt-googlelocator-map></div>

            <button
              type="button"
              className="absolute z-10 top-4 left-4 xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
              data-xt-googlelocator-repeat-btn>
              Search in this area
            </button>
          </div>
        </div>

        <div
          className="xt-loader absolute z-content inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75 off:hidden out:pointer-events-none z-10"
          data-xt-googlelocator-loader>
          <span className="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
            <svg viewBox="0 0 240 240" className="absolute" preserveAspectRatio="xMinYMin meet">
              <circle
                className="stroke-current origin-center opacity-25"
                fill="none"
                strokeWidth="30"
                cx="120"
                cy="120"
                r="100"
                strokeDasharray="628"
                strokeDashoffset="0"
                pathLength="628"
              />
            </svg>
            <svg viewBox="0 0 240 240">
              <circle
                className="stroke-current origin-center relativext-icon animate-xt-spinner"
                fill="none"
                strokeWidth="30"
                cx="120"
                cy="120"
                r="100"
                strokeDasharray="628"
                strokeDashoffset="628"
                pathLength="628"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountGooglelocator = mountGooglelocator({ ref })

  // unmount

  return () => {
    unmountGooglelocator()
  }
}

/* initGooglelocator */

const initGooglelocator = ({ ref }) => {
  // vars

  const googlelocator = ref

  // init

  /***/
  const self = new Xt.Googlelocator(googlelocator, {
    events: {
      animateMarkerResultClick: google.maps.Animation.BOUNCE,
    },
    map: {
      center: { lat: 40, lng: -74 },
      zoom: 2.5,
      zoomMin: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER,
      },
      cluster: {
        minimumClusterSize: 5,
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
      },
    },
    formatData: {
      lat: (self, marker) => {
        return marker.lat
      },
      lng: (self, marker) => {
        return marker.lng
      },
      sort: self => {
        if (self.searchInput.value === '') {
          self.locations.sort((a, b) => {
            const aName = a.marker.name.toUpperCase()
            const bName = b.marker.name.toUpperCase()
            if (aName > bName) {
              return 1
            }
            if (aName < bName) {
              return -1
            }
            return 0
          })
        } else {
          self.locations.sort((a, b) => {
            return a.distance - b.distance
          })
        }
      },
      filter: (self, marker, filters) => {
        let passed = true
        for (const filter of filters) {
          // if filter is checked
          if (filter.checked) {
            const val = filter.value
            const check = marker[val] || (marker.type && marker.type.includes(val))
            // if not checked and not '' (filter all)
            if (!check && val !== '') {
              // filter out
              passed = false
            }
          }
        }
        // if passed filter in
        return passed
      },
      name: (self, loc, el) => {
        let str = ''
        if (loc.marker.name) {
          str += `${loc.marker.name}`
        }
        if (!str || str === '') {
          el.remove()
        } else {
          el.innerHTML = str
        }
      },
      address: (self, loc, el) => {
        let str = ''
        if (loc.marker.address) {
          str += `${loc.marker.address}`
        }
        if (!str || str === '') {
          el.remove()
        } else {
          el.innerHTML = str
        }
      },
      additional: (self, loc, el) => {
        let str = ''
        if (loc.marker.additional) {
          str += `${loc.marker.additional}`
        }
        if (!str || str === '') {
          el.remove()
        } else {
          el.innerHTML = str
        }
      },
      direction: (self, loc, el) => {
        let str = 'https://www.google.com/maps/dir/?api=1&destination='
        if (loc.marker.name) {
          str += `${loc.marker.name}`
        }
        if (loc.marker.address) {
          str += `,+${loc.marker.address}`
        }
        el.setAttribute('href', encodeURI(str))
      },
      distance: (self, loc, el) => {
        let distance
        if (loc.distance > 1000) {
          distance = `${Math.round(loc.distance / 1000)} Km`
        } else {
          distance = `${Math.round(loc.distance)} m`
        }
        el.innerHTML = distance
      },
      info: (self, loc, el) => {
        return el.outerHTML
      },
    },
    markers: [
      {
        lat: 40.724165,
        lng: -73.983883,
        name: 'School 2',
        address: 'Via Foo, 19 - 35141 City PD',
        additional:
          '<a href="tel:+39333010101">+39 333 010101</a><br/><a href="mailto:info@info.com">info@info.com</a>',
        type: ['school'],
        fav: false,
      },
      {
        lat: 40.721819,
        lng: -73.991358,
        name: 'Restaurant 2',
        address: 'Via Foo, 19 - 35141 City PD',
        additional:
          '<a href="tel:+39333010101">+39 333 010101</a><br/><a href="mailto:info@info.com">info@info.com</a>',
        type: ['restaurant'],
        fav: false,
      },
      {
        lat: 40.72308,
        lng: -73.98434,
        name: 'Restaurant 1',
        address: 'Via Foo, 19 - 35141 City PD',
        additional:
          '<a href="tel:+39333010101">+39 333 010101</a><br/><a href="mailto:info@info.com">info@info.com</a>',
        type: ['restaurant'],
        fav: true,
      },
      {
        lat: 40.724705,
        lng: -73.986611,
        name: 'School 1',
        address: 'Via Foo, 19 - 35141 City PD',
        additional:
          '<a href="tel:+39333010101">+39 333 010101</a><br/><a href="mailto:info@info.com">info@info.com</a>',
        type: ['school'],
        fav: true,
      },
      {
        lat: 40.732056,
        lng: -73.998683,
        name: 'School 3',
        address: 'Via Foo, 19 - 35141 City PD',
        additional:
          '<a href="tel:+39333010101">+39 333 010101</a><br/><a href="mailto:info@info.com">info@info.com</a>',
        type: ['school'],
        fav: false,
      },
    ],
  })
  /***/

  // change

  const change = () => {
    //console.debug(self.locations)
  }

  self.container.addEventListener('change.xt.googlelocator', change)
}

/* mountGooglelocator */

const mountGooglelocator = ({ ref }) => {
  // init

  window.demoGooglelocator = () => {
    initGooglelocator({ ref })
  }

  // add yout api key here

  const lang = document.documentElement.getAttribute('lang')
  Xt.script({
    url: `https://maps.googleapis.com/maps/api/js?key=AIzaSyDSZt9TUgS20QyAbAAL-X3tJIKVLEaCrts&v=3&libraries=places,geometry&language=${lang}&&region=US&callback=demoGooglelocator`,
  })

  Xt.script({ url: 'https://unpkg.com/@googlemaps/markerclustererplus/dist/index.min.js' })

  // unmount

  return () => {}
}
