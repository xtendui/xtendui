import React, { useRef, useCallback } from 'react'
/* global google */
import { Xt } from 'xtendui'
import 'xtendui/src/googlelocator'

export default function component() {
  const nodeRef = useRef(null)
  let unmount
  const ref = useCallback(ref => {
    if (nodeRef.current) {
      unmount(nodeRef.current)
    }
    nodeRef.current = ref
    if (ref !== null) {
      unmount = mount({ ref })
    }
  }, [])

  return (
    <div className="demo--googlelocator-react" ref={ref}>
      <div className="flex flex-wrap flex-auto flex-col md:flex-row md:min-h-screen">
        <div className="googlelocator-aside relative z-10">
          <div className="relative p-6 border-b border-gray-200">
            <form className="text-sm">
              <div className="xt-row xt-row-x-6 xt-row-y-4">
                <div className="w-full">
                  <div className="xt-list flex-nowrap">
                    <div className="xt-list-inner flex-auto">
                      <input
                        type="text"
                        className="xt-input rounded-l-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
                        aria-label="Search"
                        placeholder="Search"
                      />
                      <button
                        type="button"
                        className="button--locate xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
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
                        className="button--search xt-button text-xs py-2 px-3.5 rounded-r-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
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
                  <label className="xt-label-check">
                    <input
                      type="radio"
                      className="xt-check xt-radio rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                      name="type-options"
                      defaultValue=""
                      defaultChecked
                    />
                    <span className="xt-check-content">All types</span>
                  </label>
                </div>

                <div className="w-full">
                  <label className="xt-label-check">
                    <input
                      type="radio"
                      className="xt-check xt-radio rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                      name="type-options"
                      defaultValue="restaurant"
                    />
                    <span className="xt-check-content">Restaurant</span>
                  </label>
                </div>

                <div className="w-full">
                  <label className="xt-label-check">
                    <input
                      type="radio"
                      className="xt-check xt-radio rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                      name="type-options"
                      defaultValue="school"
                    />
                    <span className="xt-check-content">School</span>
                  </label>
                </div>

                <div className="w-full">
                  <label className="xt-label-check">
                    <input
                      type="checkbox"
                      className="xt-check xt-switch rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                      name="googlelocator-fav"
                      defaultValue="fav"
                    />
                    <span className="xt-check-content">Favourite</span>
                  </label>
                </div>
              </div>
            </form>
          </div>

          <div className="googlelocator-aside-body relative p-6">
            <div className="googlelocator-result googlelocator-result--initial text-xs pb-4 border-b border-gray-200">
              Insert your position and find a place near you
            </div>

            <div className="googlelocator-result googlelocator-result--error text-xs pb-4 border-b border-gray-200">
              Request timed out, retry
            </div>

            <div className="googlelocator-result googlelocator-result--noplace text-xs pb-4 border-b border-gray-200">
              Not a valid place
            </div>

            <div className="googlelocator-result googlelocator-result--empty text-xs pb-4 border-b border-gray-200">
              No place found
            </div>

            <div className="googlelocator-result googlelocator-result--founds text-xs pb-4 border-b border-gray-200">
              <span className="googlelocator-result--found"></span>
              places found
            </div>

            <div className="googlelocator-items mt-4">
              <script type="text/x-template">
                <div
                  className="googlelocator-item py-4 cursor-pointer border-b border-gray-200 transition active:border-gray-600"
                  tabIndex="-1">
                  <div className="xt-list xt-list-2 flex-nowrap items-center justify-between">
                    <div className="googlelocator-item-content">
                      <div
                        className="mt-5 mb-3 xt-my-auto font-sans font-bold leading-none tracking-tight text-xl"
                        data-xt-populate="name"></div>
                      <address className="text-sm uppercase not-italic" data-xt-populate="address"></address>
                      <div className="text-sm uppercase" data-xt-populate="additional"></div>
                    </div>
                    <a
                      href="#"
                      target="_blank"
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

        <div className="googlelocator-main relative flex-auto min-h-full md:fixed md:inset-0">
          <div className="relative w-full h-full">
            <div className="googlelocator-main-map w-full h-full"></div>

            <button
              type="button"
              className="button--repeat absolute z-10 top-4 left-4 xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
              Search in this area
            </button>
          </div>
        </div>

        <div className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75 xt-toggle">
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
                className="stroke-current origin-center relative animate-xt-spinner"
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

/* mountGooglelocator */

const mountGooglelocator = ({ ref }) => {
  // add yout api key here

  Xt.addScript(
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyDSZt9TUgS20QyAbAAL-X3tJIKVLEaCrts&v=3&libraries=places,geometry&language=en&&region=US&callback=demoGooglelocator'
  )

  Xt.addScript('https://unpkg.com/@googlemaps/markerclustererplus/dist/index.min.js')

  // init

  window.demoGooglelocator = function () {
    new Xt.Googlelocator(ref, {
      initialLocate: false,
      initialSearch: false,
      seachMapBounds: false,
      locateRadius: 25000,
      locateText: 'Locate',
      elements: {
        loader: '.xt-loader',
        searchInput: 'input[type="text"]',
        searchBtn: '.button--search',
        map: '.googlelocator-main-map',
        itemsTemplate: 'script[type="text/x-template"]',
        itemsContainer: '.googlelocator-items',
        results: '.googlelocator-aside-body',
        resultsFound: '.googlelocator-result--found',
        locateBtn: '.button--locate',
        repeatBtn: '.button--repeat',
        filter: 'input[type="checkbox"], input[type="radio"]',
      },
      events: {
        animateMarkerResultClick: google.maps.Animation.BOUNCE,
        infoWindowMarkerClick: true,
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
        lat: function (self, marker) {
          return marker.lat
        },
        lng: function (self, marker) {
          return marker.lng
        },
        sort: function (self) {
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
        filter: function (self, marker, filter) {
          return marker[filter] || (marker.type && marker.type.includes(filter))
        },
        name: function (self, loc, el) {
          const str = loc.marker.name
          if (!str || str === '') {
            el.remove()
          } else {
            el.innerHTML = str
          }
        },
        address: function (self, loc, el) {
          const str = loc.marker.address
          if (!str || str === '') {
            el.remove()
          } else {
            el.innerHTML = str
          }
        },
        additional: function (self, loc, el) {
          const str = loc.marker.additional
          if (!str || str === '') {
            el.remove()
          } else {
            el.innerHTML = str
          }
        },
        img: function (self, loc, el) {
          const str = loc.marker.img
          if (!str || str === '') {
            el.remove()
          } else {
            el.setAttribute('src', str)
          }
        },
        direction: function (self, loc, el) {
          let str = 'https://www.google.com/maps/dir/?api=1&destination='
          str += loc.marker.name
          str += `+${loc.marker.address}`
          el.setAttribute('href', encodeURI(str))
        },
        distance: function (self, loc, el) {
          let distance
          if (loc.distance > 1000) {
            distance = `${Math.round(loc.distance / 1000)} Km`
          } else {
            distance = `${Math.round(loc.distance)} m`
          }
          el.innerHTML = distance
        },
        info: function (self, loc, el) {
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
  }

  // unmount

  return () => {}
}
