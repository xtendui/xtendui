/* global google */
import { Xt } from 'xtendui'
import 'xtendui/src/addons/googlelocator'

Xt.mount.push({
  matches: '#iframe--googlelocator .xt-googlelocator',
  mount: ({ object }) => {
    // add yout api key here

    Xt.addScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDSZt9TUgS20QyAbAAL-X3tJIKVLEaCrts&v=3&libraries=places,geometry&language=en&&region=US&callback=demoGooglelocator'
    )

    Xt.addScript('https://unpkg.com/@googlemaps/markerclustererplus/dist/index.min.js')

    // init

    window.demoGooglelocator = function () {
      new Xt.Googlelocator(object, {
        initialLocate: false,
        initialSearch: false,
        seachMapBounds: false,
        locateRadius: 25000,
        locateText: 'Locate',
        elements: {
          loader: '.xt-loader',
          searchInput: 'input[type="text"]',
          searchBtn: '.xt-button--search',
          map: '.xt-googlelocator-main-map',
          itemsTemplate: 'script[type="text/x-template"]',
          itemsContainer: '.xt-googlelocator-items',
          results: '.xt-googlelocator-aside-body',
          resultsFound: '.xt-googlelocator-result--found',
          locateBtn: '.xt-button--locate',
          repeatBtn: '.xt-button--repeat',
          filter: 'input[type="checkbox"], input[type="radio"]',
        },
        events: {
          animateMarkerResultClick: google.maps.Animation.BOUNCE,
          infoWindowMarkerClick: true,
        },
        map: {
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER,
          },
        },
        formatData: {
          filter: function (self, marker, filter) {
            return marker[filter] || (marker.type && marker.type.includes(filter))
          },
        },
      })
    }
  },
})
