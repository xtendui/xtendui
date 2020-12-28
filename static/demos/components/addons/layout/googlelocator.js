/* global google */
import { Xt } from 'xtendui'
import 'xtendui/src/addons/googlelocator'

Xt.mount.push({
  matches: '#iframe--googlelocator body .googlelocator', // add your own selector instead of body to contain the code
  mount: object => {
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
          loader: '.loader',
          searchInput: 'input[type="text"]',
          searchBtn: '.btn-search',
          map: '.googlelocator-main-map',
          itemsTemplate: 'script[type="text/x-template"]',
          itemsContainer: '.googlelocator-items',
          results: '.googlelocator-aside-body',
          resultsFound: '.googlelocator-result-found',
          locateBtn: '.btn-locate',
          repeatBtn: '.btn-repeat',
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
