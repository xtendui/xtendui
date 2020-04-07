import { Xt } from 'xtend-library'
import 'xtend-library/src/addons/utils/google-locator.js'

Xt.addScript(
  'https://maps.googleapis.com/maps/api/js?key=AIzaSyDSZt9TUgS20QyAbAAL-X3tJIKVLEaCrts&v=3&libraries=places,geometry&language=en&&region=US&callback=demoGooglelocator'
)

window.demoGooglelocator = function() {
  Xt.mount.push({
    matches: '.googlelocator',
    mount: object => {
      // init

      let self = new Xt.Googlelocator(object, {
        map: {
          icon: '/assets/shop/assets/images/googlemaps/icon.png',
          cluster: {
            minimumClusterSize: 5,
            imagePath: '/assets/shop/assets/images/googlemaps/m',
          },
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER,
          },
        },
        formatData: {
          sort: function(self, locations) {
            if (self.searchInput.value === '') {
              locations.sort((a, b) => {
                if (a.marker.storeSign > b.marker.storeSign) {
                  return 1
                }
                if (b.marker.storeSign > a.marker.storeSign) {
                  return -1
                }
                return 0
              })
            } else {
              locations.sort((a, b) => a.distance - b.distance)
            }
          },
          filter: function(self, marker, filter) {
            return marker[filter] || (marker.retailerServices && marker.retailerServices.includes(filter))
          },
          name: function(self, location, el) {
            let str = ''
            str += location.marker.storeSign
            if (!str || str === '') {
              el.remove()
            } else {
              el.innerHTML = str
            }
          },
          address: function(self, location, el) {
            let str = ''
            str += location.marker.street + ' - ' + location.marker.postcode + ' ' + location.marker.city
            if (!str || str === '') {
              el.remove()
            } else {
              el.innerHTML = str
            }
          },
          additional: function(self, location, el) {
            let str = ''
            if (location.marker.phoneNumber) {
              str += '<a href="tel:' + location.marker.phoneNumber + '">' + location.marker.phoneNumber + '</a>'
            }
            if (!str || str === '') {
              el.remove()
            } else {
              el.innerHTML = str
            }
          },
          direction: function(self, location, el) {
            let str = 'https://www.google.com/maps/dir/?api=1&destination='
            str += location.marker.storeSign.split(' ').join('+')
            str += '+' + location.marker.street.split(' ').join('+')
            str += '+' + location.marker.postcode.split(' ').join('+')
            str += '+' + location.marker.city.split(' ').join('+')
            el.setAttribute('href', str)
          },
          radio: function(self, location, el) {
            const items = el.closest('.googlelocator_items').querySelectorAll('.googlelocator_item')
            el.setAttribute('id', 'googlelocator_radio_' + items.length)
            el.setAttribute('data-marker', JSON.stringify(location.marker))
          },
          label: function(self, location, el) {
            const items = el.closest('.googlelocator_items').querySelectorAll('.googlelocator_item')
            el.setAttribute('for', 'googlelocator_radio_' + items.length)
          },
        },
      })

      // unmount

      const unmount = () => {
        self.destroy()
        self = null
      }
      return unmount
    },
  })
}
