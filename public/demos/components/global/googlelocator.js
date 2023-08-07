/* global google */
import { Xt } from 'xtendui'
import 'xtendui/src/googlelocator'

/* initGooglelocator */

const initGooglelocator = ({ ref }) => {
  // vars

  const googlelocator = ref

  // init

  /***/
  new Xt.Googlelocator(googlelocator, {
    initialSearch: true,
    events: {
      animateMarkerResultClick: google.maps.Animation.BOUNCE,
    },
    autocompleteOptions: { types: ['(regions)'] }, // search autocomplete also with postal code
    autocompleteServiceOptions: { types: ['(regions)'] }, // search autocomplete prediction also with postal code
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
}

/* mountGooglelocator */

const mountGooglelocator = ({ ref }) => {
  // init

  const init = () => {
    initGooglelocator({ ref })
  }

  window.googlelocatorGmapsLoaded = () => {
    Xt.script({
      url: 'https://unpkg.com/@googlemaps/markerclustererplus/dist/index.min.js',
      callback: init,
    })
  }

  // add yout api key here

  const lang = document.documentElement.getAttribute('lang')
  Xt.script({
    url: `https://maps.googleapis.com/maps/api/js?key=AIzaSyDSZt9TUgS20QyAbAAL-X3tJIKVLEaCrts&v=3&libraries=places,geometry&language=${lang}&&region=US&callback=googlelocatorGmapsLoaded`,
  })

  // unmount

  return () => {}
}

/* mount */

Xt.mount({
  matches: '.demo--googlelocator',
  mount: ({ ref }) => {
    const unmountGooglelocator = mountGooglelocator({ ref })

    // unmount

    return () => {
      unmountGooglelocator()
    }
  },
})
