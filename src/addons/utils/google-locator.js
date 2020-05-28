import { Xt } from 'xtend-library'
import MarkerClusterer from '@google/markerclusterer'

class Googlelocator {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  constructor(object, optionsJs = {}) {
    const self = this
    self.object = object
    self.optionsJs = optionsJs
    // @FIX multiple initializations
    const alreadyDefinedInstance = Xt.get(self.componentName, self.object)
    if (!alreadyDefinedInstance) {
      // set
      Xt.set(self.componentName, self.object, self)
      // init
      self.init()
    } else {
      return alreadyDefinedInstance
    }
  }

  //
  // init
  //

  /**
   * init
   */
  init() {
    const self = this
    // js options
    self.options = Xt.merge([self.constructor.optionsDefault, self.optionsJs])
    // vars
    self.locateCache = null
    self.loaderElement = self.object.querySelector(self.options.elements.loader)
    self.itemsTemplate = self.object.querySelector(self.options.elements.itemsTemplate)
    self.itemsContainer = self.object.querySelector(self.options.elements.itemsContainer)
    self.resultElement = self.object.querySelector(self.options.elements.results)
    self.foundElement = self.object.querySelector(self.options.elements.founds)
    // init
    const options = self.options
    self.mapElement = self.object.querySelector(self.options.elements.map)
    self.map = new google.maps.Map(self.mapElement, options.map)
    self.searchInput = self.object.querySelector(self.options.elements.searchInput)
    self.search = new google.maps.places.Autocomplete(self.searchInput)
    self.searchInput.addEventListener('keypress', self.searchSubmit.bind(self))
    // submit triggers places autocomplete
    self.searchBtn = self.object.querySelector(self.options.elements.searchBtn)
    self.searchBtn.addEventListener('click', self.searchClick.bind(self))
    // minimum zoom
    if (options.map.zoomMin) {
      google.maps.event.addListener(self.map, 'zoom_changed', function() {
        google.maps.event.addListener(self.map, 'bounds_changed', function() {
          if (self.map.getZoom() > options.map.zoomMin) {
            self.map.setZoom(options.map.zoomMin)
          }
        })
      })
    }
    // search place
    google.maps.event.addListener(self.search, 'place_changed', function() {
      let place = self.search.getPlace()
      if (place && place.name && place.name !== '') {
        if (place.geometry) {
          // place
          self.position = place.geometry.location
          self.viewport = place.geometry.viewport
          self.radius = null
          self.submit()
          return
        }
      }
      // locate prediction
      if (self.locateCache && self.locateCache.value === self.searchInput.value) {
        self.position = self.locateCache.position
        self.viewport = null
        self.radius = null
        self.submit()
        return
      }
      // cached prediction
      if (self.predictionCache && self.predictionCache.value === self.searchInput.value) {
        self.position = self.predictionCache.position
        self.viewport = self.predictionCache.viewport
        self.radius = null
        self.submit()
        return
      }
      // new prediction
      new google.maps.places.AutocompleteService().getPlacePredictions({ input: self.searchInput.value }, function(results) {
        if (results && results.length) {
          const placesPreview = document.createElement('div')
          placesPreview.classList.add('display--none')
          new google.maps.places.PlacesService(placesPreview).getDetails({ reference: results[0].reference }, function(results) {
            place = results
            self.searchInput.value = place.formatted_address
            self.position = place.geometry.location
            self.viewport = place.geometry.viewport
            self.radius = null
            self.predictionCache = { value: self.searchInput.value, position: self.position, viewport: self.viewport }
            self.submit()
            placesPreview.remove()
          })
        } else {
          self.locations = []
          self.populateItems()
          self.resultElement.classList.add('noplace')
          self.resultElement.classList.remove('empty')
          self.resultElement.classList.remove('found')
          self.resultElement.classList.remove('error')
        }
      })
    })
    // submitCurrent
    if (options.elements.repeat) {
      self.repeatElement = self.object.querySelector(options.elements.repeat)
      if (self.repeatElement) {
        self.repeatElement.addEventListener('click', self.submitCurrent.bind(self).bind(self, false))
      }
    }
    // initialSearch
    if (options.initialSearch) {
      google.maps.event.addListenerOnce(self.map, 'idle', function() {
        self.map.setCenter(options.map.center)
        self.map.setZoom(options.map.zoom)
        self.submitCurrent(true)
      })
    }
    // locate
    if (self.options.elements.locate) {
      self.locateElement = self.object.querySelector(options.elements.locate)
      if (self.locateElement) {
        if (location.protocol === 'https:') {
          if (navigator.geolocation) {
            if (options.initialLocate) {
              self.locate(true)
            }
            self.locateElement.addEventListener('click', self.locate.bind(self))
          } else {
            self.locateElement.style.display = 'none'
          }
        } else {
          self.locateElement.style.display = 'none'
        }
      }
    }
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('init.xt.googlelocator'))
  }

  //
  // methods
  //

  /**
   * searchSubmit
   * @param {Event} e
   */
  searchSubmit(e) {
    const self = this
    const options = self.options
    // prevent form submit on enter
    const key = e.which || e.keyCode
    if (key === 13) {
      e.preventDefault()
      // reset map and submit
      if (self.searchInput.value === '') {
        self.map.setCenter(options.map.center)
        self.map.setZoom(options.map.zoom)
        self.submitCurrent(true)
      }
    }
  }

  /**
   * searchClick
   * @param {Event} e
   */
  searchClick(e) {
    const self = this
    const options = self.options
    // prevent form submit
    e.preventDefault()
    // reset map and submit
    if (self.searchInput.value === '') {
      self.map.setCenter(options.map.center)
      self.map.setZoom(options.map.zoom)
      self.submitCurrent(true)
    } else {
      // submit triggers places autocomplete
      google.maps.event.trigger(self.search, 'place_changed')
    }
  }

  /**
   * submit
   */
  submit() {
    const self = this
    const options = self.options
    // fix .getBounds not ready
    if (!self.map.getBounds()) {
      google.maps.event.addListenerOnce(self.map, 'bounds_changed', function() {
        self.submit()
      })
      return false
    }
    // filter
    self.filters = []
    if (options.elements.filter) {
      const filterElements = self.object.querySelectorAll(options.elements.filter)
      for (const filterElement of filterElements) {
        if (filterElement.checked) {
          self.filters.push(filterElement.value)
        }
      }
    }
    // markers
    self.locations = []
    let index = 0
    let markers = options.markers
    const bounds = new google.maps.LatLngBounds()
    if (options.infoWindow) {
      self.info = new google.maps.InfoWindow(options.infoWindow)
    }
    if (Xt.debug === true) {
      console.debug('Xt.debug: xt-googlelocator viewport and radius.', self.viewport, self.radius)
    }
    for (const marker of markers) {
      if (!self.filters.length || self.filterMarker(marker)) {
        const latLng = new google.maps.LatLng(
          options.formatData.lat ? options.formatData.lat(self, marker) : marker.lat,
          options.formatData.lng ? options.formatData.lng(self, marker) : marker.lng
        )
        const distance = google.maps.geometry.spherical.computeDistanceBetween(self.position, latLng)
        if ((!self.viewport || self.viewport.contains(latLng)) && (!self.radius || distance <= self.radius)) {
          const loc = new google.maps.Marker({
            map: self.map,
            position: latLng,
            title: marker.name,
            icon: marker.icon || options.map.icon,
            animation: marker.animation || options.map.animation,
            distance: distance,
            marker: marker,
            index: index,
          })
          bounds.extend(latLng)
          self.locations.push(loc)
          loc.addListener('click', function() {
            self.populateInfo(loc, 'marker')
          })
          index++
        }
      }
    }
    // populate items for infowindow BEFORE sort order locations
    self.populateItems()
    // order locations
    options.formatData.sort(self, self.locations)
    // markers
    if (options.map.cluster) {
      if (self.cluster) {
        self.cluster.clearMarkers()
      }
      self.cluster = new MarkerClusterer(self.map, self.locations, options.map.cluster)
    }
    // populate
    if (self.locations.length) {
      if (self.resultElement) {
        self.resultElement.classList.remove('noplace')
        self.resultElement.classList.remove('empty')
        self.resultElement.classList.add('found')
        self.resultElement.classList.remove('error')
      }
      if (self.foundElement) {
        self.foundElement.innerHTML = self.locations.length
      }
      // map
      self.map.fitBounds(bounds)
      self.map.panToBounds(bounds)
    } else {
      if (self.resultElement) {
        self.resultElement.classList.remove('noplace')
        self.resultElement.classList.add('empty')
        self.resultElement.classList.remove('found')
        self.resultElement.classList.remove('error')
      }
    }
    // debug
    if (Xt.debug === true) {
      console.debug('Xt.debug: xt-googlelocator locations.', self.locations)
    }
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('change.xt.googlelocator'))
  }

  /**
   * populateItems
   */
  populateItems() {
    const self = this
    // remove old
    const removes = self.object.querySelectorAll('.xt-googlelocator-clone')
    for (const remove of removes) {
      remove.remove()
    }
    // populateItem
    for (const [i, loc] of self.locations.entries()) {
      self.populateItem(loc, i)
    }
  }

  /**
   * filterMarker
   * @param {Object} marker
   */
  filterMarker(marker) {
    const self = this
    const options = self.options
    // filter
    let passed = true
    for (const filter of self.filters) {
      const check = options.formatData.filter(self, marker, filter)
      if (!check && filter !== '') {
        // '' is filter all
        passed = false
      }
    }
    return passed
  }

  /**
   * populateItem
   * @param {Object} loc
   * @param {Number} index
   */
  populateItem(loc, index) {
    const self = this
    const options = self.options
    // clone
    let cloned = document.createElement('div')
    cloned.innerHTML = self.itemsTemplate.innerHTML
    cloned = cloned.querySelector(':scope > *')
    cloned.classList.add('xt-googlelocator-clone')
    cloned.setAttribute('data-xt-googlelocator-index', index.toString())
    // append clone
    self.itemsContainer.append(cloned)
    // populate clone
    const els = cloned.querySelectorAll('[data-xt-googlelocator-data]')
    for (const el of els) {
      const fnc = options.formatData[el.getAttribute('data-xt-googlelocator-data')]
      if (fnc) {
        fnc(self, loc, el)
      }
    }
    // info
    cloned.addEventListener('click', function() {
      self.populateInfo(loc, 'result')
    })
  }

  /**
   * populateInfo
   * @param {Object} loc
   * @param {String} type
   */
  populateInfo(loc, type) {
    const self = this
    const options = self.options
    // stop animation
    if (self.animatingLoc) {
      self.animatingLoc.setAnimation(null)
      self.animatingLoc = null
    }
    // animation
    const anim = type === 'marker' ? options.events.animateMarkerClick : type === 'result' ? options.events.animateMarkerResultClick : null
    if (anim) {
      loc.setAnimation(anim)
      self.animatingLoc = loc
    }
    // activation
    const item = self.itemsContainer.querySelector('[data-xt-googlelocator-index="' + loc.index + '"]')
    const old = self.itemsContainer.querySelector('[data-xt-googlelocator-index].active')
    if (old) {
      old.classList.remove('active')
    }
    if (type === 'marker') {
      if (item) {
        item.focus()
        item.classList.add('active')
      }
    }
    // infowindow
    if (options.infoWindow) {
      const info = type === 'marker' ? options.events.infoWindowMarkerClick : type === 'result' ? options.events.infoWindowMarkerResultClick : null
      if (info) {
        if (item) {
          const content = options.formatData.info(self, loc, item)
          if (content) {
            self.info.setContent(content)
            self.info.open(self.map, loc)
          }
        }
      } else {
        self.info.close(self.map)
      }
    }
  }

  /**
   * submitCurrent
   * @param {Event} e
   * @param {Boolean} empty
   */
  submitCurrent(empty = false, e = null) {
    const self = this
    const options = self.options
    // position
    self.searchInput.value = ''
    self.position = self.map.getCenter()
    self.viewport = null
    self.radius = null
    if (!empty || options.seachMapBounds) {
      self.radius = google.maps.geometry.spherical.computeDistanceBetween(self.position, self.map.getBounds().getNorthEast())
    }
    self.submit()
  }

  /**
   * locate
   * @param {Boolean} initial
   */
  locate(initial = false) {
    const self = this
    // loader
    if (!initial) {
      self.loaderShow()
    }
    // locate
    window.navigator.geolocation.getCurrentPosition(self.locateSuccess.bind(self), self.locateError.bind(self))
  }

  /**
   * locateSuccess
   * @param {Object} pos
   */
  locateSuccess(pos) {
    const self = this
    // loader
    self.loaderHide()
    // position
    self.searchInput.value = self.locateElement.getAttribute('data-xt-googlelocator-locate-btn')
    self.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude)
    self.viewport = null
    self.radius = null
    self.locateCache = { value: self.searchInput.value, position: self.position }
    if (Xt.debug === true) {
      console.debug('Xt.debug: xt-googlelocator locate.', pos, self.position)
    }
    // submit on zoom only one time
    self.map.setCenter(self.position)
    self.submit()
  }

  /**
   * locateError
   * @param {String} error
   */
  locateError(error) {
    const self = this
    // loader
    self.loaderHide()
    // error
    console.error('Error: xt-googlelocator locate error', error)
  }

  /**
   * loaderShow
   */
  loaderShow() {
    const self = this
    Xt.animOn(self.loaderElement)
  }

  /**
   * loaderHide
   */
  loaderHide() {
    const self = this
    Xt.animOff(self.loaderElement)
  }

  //
  // destroy
  //

  /**
   * destroy
   */
  destroy() {
    const self = this
    // remove old
    const removes = self.object.querySelectorAll('.xt-googlelocator-clone')
    for (const remove of removes) {
      remove.remove()
    }
    // events
    self.searchBtn.removeEventListener('click', self.searchClick.bind(self))
    self.searchInput.removeEventListener('keypress', self.searchSubmit.bind(self))
    if (self.locateElement) {
      self.locateElement.removeEventListener('click', self.locate.bind(self))
    }
    if (self.repeatElement) {
      self.repeatElement.removeEventListener('click', self.submitCurrent.bind(self).bind(self, false))
    }
    // set self
    Xt.remove(self.componentName, self.object)
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('destroy.xt'))
  }
}

//
// option
//

Googlelocator.componentName = 'xt-googlelocator'
Googlelocator.optionsDefault = {
  initialLocate: false,
  initialSearch: false,
  seachMapBounds: false,
  events: {
    animateMarkerClick: false,
    animateMarkerResultClick: false,
    infoWindowMarkerClick: true,
    infoWindowMarkerResultClick: false,
  },
  markers: [
    {
      lat: 40.72308,
      lng: -73.98434,
      name: 'Restaurant 1',
      address: 'Via Foo, 19 - 35141 City PD',
      additional: '<a href="tel:000000000">000000000</a><br/><a href="mailto:test@test.com">test@test.com</a>',
      type: ['restaurant'],
      fav: true,
    },
    {
      lat: 40.724705,
      lng: -73.986611,
      name: 'School 1',
      address: 'Via Foo, 19 - 35141 City PD',
      additional: '<a href="tel:000000000">000000000</a><br/><a href="mailto:test@test.com">test@test.com</a>',
      type: ['school'],
      fav: true,
    },
    {
      lat: 40.724165,
      lng: -73.983883,
      name: 'School 2',
      address: 'Via Foo, 19 - 35141 City PD',
      additional: '<a href="tel:000000000">000000000</a><br/><a href="mailto:test@test.com">test@test.com</a>',
      type: ['school'],
      fav: false,
    },
    {
      lat: 40.721819,
      lng: -73.991358,
      name: 'Restaurant 2',
      address: 'Via Foo, 19 - 35141 City PD',
      additional: '<a href="tel:000000000">000000000</a><br/><a href="mailto:test@test.com">test@test.com</a>',
      type: ['restaurant'],
      fav: false,
    },
    {
      lat: 40.732056,
      lng: -73.998683,
      name: 'School 3',
      address: 'Via Foo, 19 - 35141 City PD',
      additional: '<a href="tel:000000000">000000000</a><br/><a href="mailto:test@test.com">test@test.com</a>',
      type: ['school'],
      fav: false,
    },
  ],
  map: {
    center: { lat: 0, lng: 0 },
    zoom: 2.5,
    zoomMin: 14,
    scrollwheel: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    cluster: {
      minimumClusterSize: 5,
      imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    },
  },
  infoWindow: {},
  elements: {
    loader: '[data-xt-googlelocator-loader]',
    searchInput: '[data-xt-googlelocator-search-input]',
    searchBtn: '[data-xt-googlelocator-search-btn]',
    map: '[data-xt-googlelocator-map]',
    itemsTemplate: 'script[type="text/x-template"]',
    itemsContainer: '[data-xt-googlelocator-items]',
    results: '[data-xt-googlelocator-results]',
    founds: '[data-xt-googlelocator-result-found]',
    locate: '[data-xt-googlelocator-locate-btn]',
    repeat: '[data-xt-googlelocator-repeat]',
    filter: '[data-xt-googlelocator-option]',
  },
  formatData: {
    lat: function(self, marker) {
      return marker.lat
    },
    lng: function(self, marker) {
      return marker.lng
    },
    sort: function(self, locations) {
      if (self.searchInput.value === '') {
        locations.sort((a, b) => {
          if (a.marker.name > b.marker.name) {
            return 1
          }
          if (b.marker.name > a.marker.name) {
            return -1
          }
          return 0
        })
      } else {
        locations.sort((a, b) => a.distance - b.distance)
      }
    },
    filter: function(self, marker, filter) {
      return marker[filter]
    },
    name: function(self, loc, el) {
      let str = loc.marker.name
      if (!str || str === '') {
        el.remove()
      } else {
        el.innerHTML = str
      }
    },
    address: function(self, loc, el) {
      let str = loc.marker.address
      if (!str || str === '') {
        el.remove()
      } else {
        el.innerHTML = str
      }
    },
    additional: function(self, loc, el) {
      let str = loc.marker.additional
      if (!str || str === '') {
        el.remove()
      } else {
        el.innerHTML = str
      }
    },
    img: function(self, loc, el) {
      let str = loc.marker.img
      if (!str || str === '') {
        el.remove()
      } else {
        el.setAttribute('src', str)
      }
    },
    direction: function(self, loc, el) {
      let str = 'https://www.google.com/maps/dir/?api=1&destination='
      str += loc.marker.name
      str += '+' + loc.marker.address
      el.setAttribute('href', encodeURI(str))
    },
    distance: function(self, loc, el) {
      let distance
      if (loc.distance > 1000) {
        distance = Math.round(loc.distance / 1000) + ' Km'
      } else {
        distance = Math.round(loc.distance) + ' m'
      }
      el.innerHTML = distance
      if (self.searchInput.value === '') {
        el.remove()
      }
    },
    info: function(self, loc, el) {
      return el.outerHTML
    },
  },
}

//
// export
//

Xt.Googlelocator = Googlelocator
