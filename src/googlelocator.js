/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/beta/LICENSE)
 */

/* global google MarkerClusterer */
import { Xt } from './xt'

/**
 * Googlelocator
 */
class Googlelocator {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    const self = this
    self.container = object
    self.optionsCustom = optionsCustom
    self.componentName = self.constructor.componentName
    self.componentNs = self.componentName.replace('-', '.')
    // init
    self.initVars()
    self.initLogic()
  }

  //
  // init
  //

  /**
   * init vars
   */
  initVars() {
    const self = this
    // options
    self.optionsDefault = Xt.merge([self.constructor.optionsDefault, Xt.options[self.componentName]])
    self.optionsInitial = self.options = Xt.merge([self.optionsDefault, self.optionsCustom])
  }

  /**
   * init logic
   */
  initLogic() {
    const self = this
    const options = self.options
    // set self
    Xt.set({ name: self.componentName, el: self.container, self })
    // namespace
    const uniqueId = Xt.dataStorage.get(self.container, 'xtUniqueId')
    Xt.dataStorage.set(self.container, 'xtUniqueId', uniqueId || Xt.getuniqueId())
    self.ns = `${self.componentName}-${Xt.dataStorage.get(self.container, 'xtUniqueId')}`
    // vars
    self.disabled = false
    // enable first for proper initial activation
    self.enable()
    // matches
    Xt.initMatches({ self })
    // vars
    self.initial = true
    self.locateCache = null
    self.loaderElement = self.container.querySelector(options.elements.loader)
    self.itemsTemplate = self.container.querySelector(options.elements.itemsTemplate)
    self.itemsContainer = self.container.querySelector(options.elements.itemsContainer)
    self.foundElement = self.container.querySelector(options.elements.resultsFound)
    // init
    self.mapElement = self.container.querySelector(options.elements.map)
    self.map = new google.maps.Map(self.mapElement, options.map)
    self.searchInput = self.container.querySelector(options.elements.searchInput)
    self.search = new google.maps.places.Autocomplete(self.searchInput)
    const searchHandler = Xt.dataStorage.put(self.searchInput, `keypress/${self.ns}`, self.searchSubmit.bind(self))
    self.searchInput.addEventListener('keypress', searchHandler)
    // submit triggers places autocomplete
    self.searchBtn = self.container.querySelector(options.elements.searchBtn)
    const submitHandler = Xt.dataStorage.put(self.searchBtn, `click/${self.ns}`, self.searchClick.bind(self))
    self.searchBtn.addEventListener('click', submitHandler)
    // minimum zoom
    if (options.map.zoomMin) {
      google.maps.event.addListener(self.map, 'zoom_changed', () => {
        google.maps.event.addListener(self.map, 'bounds_changed', () => {
          if (self.map.getZoom() > options.map.zoomMin) {
            self.map.setZoom(options.map.zoomMin)
          }
        })
      })
    }
    // search place
    google.maps.event.addListener(self.search, 'place_changed', self.placeChanged.bind(self))
    // submitCurrent
    if (options.elements.repeatBtn) {
      self.repeatElement = self.container.querySelector(options.elements.repeatBtn)
      if (self.repeatElement) {
        const repeatHandler = Xt.dataStorage.put(self.repeatElement, `click/${self.ns}`, self.submitCurrent.bind(self))
        self.repeatElement.addEventListener('click', repeatHandler)
      }
    }
    // locate
    if (options.elements.locateBtn) {
      self.locateElement = self.container.querySelector(options.elements.locateBtn)
      if (self.locateElement) {
        if (location.protocol === 'https:') {
          if (navigator.geolocation) {
            if (options.initialLocate) {
              self.locate({ initial: true })
            }
            const locateHandler = Xt.dataStorage.put(self.locateElement, `click/${self.ns}`, self.locate.bind(self))
            self.locateElement.addEventListener('click', locateHandler)
          } else {
            self.locateElement.style.display = 'none'
          }
        } else {
          self.locateElement.style.display = 'none'
        }
      }
    }
    // initial
    self.initStart()
    // init
    Xt.frame({
      el: self.container,
      ns: `${self.ns}Init`,
      func: () => {
        // initialized class
        self.container.setAttribute(`data-${self.componentName}-init`, '')
        // dispatch event
        self.container.dispatchEvent(new CustomEvent(`init.${self.componentNs}`))
        self.initial = false
        // debug
        if (options.debug) {
          // eslint-disable-next-line no-console
          console.log(`${self.componentName} init`, self)
        }
      },
    })
    // disable last for proper options.disableDeactivate
    if (self.options.disabled || self.disabledManual) {
      self.disable()
    }
  }

  /**
   * init start
   */
  initStart() {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // logic
    if (options.initialSearch) {
      google.maps.event.addListenerOnce(self.map, 'idle', () => {
        self.map.setCenter(options.map.center)
        self.map.setZoom(options.map.zoom)
        self.submitCurrent({ empty: true })
      })
    }
  }

  //
  // methods
  //

  /**
   * placeChanged
   */
  placeChanged() {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // search place
    let place = self.search.getPlace()
    if (place && place.name && place.name !== '') {
      if (place.geometry) {
        // place
        self.position = place.geometry.location
        self.viewport = place.geometry.viewport
        self.radius = options.searchRadius
        self.submit()
        return
      }
    }
    // locate prediction
    if (self.locateCache && self.locateCache.value === self.searchInput.value) {
      self.position = self.locateCache.position
      self.viewport = null
      self.radius = options.searchRadius
      self.submit()
      return
    }
    // cached prediction
    if (self.predictionCache && self.predictionCache.value === self.searchInput.value) {
      self.position = self.predictionCache.position
      self.viewport = self.predictionCache.viewport
      self.radius = options.searchRadius
      self.submit()
      return
    }
    // new prediction
    new google.maps.places.AutocompleteService().getPlacePredictions({ input: self.searchInput.value }, results => {
      if (results && results.length) {
        const placesPreview = document.createElement('div')
        placesPreview.classList.add('hidden')
        new google.maps.places.PlacesService(placesPreview).getDetails({ reference: results[0].reference }, results => {
          place = results
          self.searchInput.value = place.formatted_address
          self.position = place.geometry.location
          self.viewport = place.geometry.viewport
          self.radius = options.searchRadius
          self.predictionCache = {
            value: self.searchInput.value,
            position: self.position,
            viewport: self.viewport,
          }
          self.submit()
          placesPreview.remove()
        })
      } else {
        self.locations = []
        self.populateItems()
        self.container.classList.add('noplace')
        self.container.classList.remove('empty')
        self.container.classList.remove('found')
        self.container.classList.remove('error')
      }
    })
  }

  /**
   * searchSubmit
   * @param {Event} e
   */
  searchSubmit(e) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // prevent form submit on enter
    const key = e.which || e.keyCode
    if (key === 13) {
      e.preventDefault()
      // reset map and submit
      if (self.searchInput.value === '') {
        self.map.setCenter(options.map.center)
        self.map.setZoom(options.map.zoom)
        self.submitCurrent({ empty: true })
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
    // disabled
    if (self.disabled) {
      return
    }
    // prevent form submit
    e.preventDefault()
    // reset map and submit
    if (self.searchInput.value === '') {
      self.map.setCenter(options.map.center)
      self.map.setZoom(options.map.zoom)
      self.submitCurrent({ empty: true })
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
    // disabled
    if (self.disabled) {
      return
    }
    // fix .getBounds not ready
    if (!self.map.getBounds()) {
      google.maps.event.addListenerOnce(self.map, 'bounds_changed', () => {
        self.submit()
      })
      return false
    }
    // filter
    self.filters = self.container.querySelectorAll(options.elements.filter)
    // markers
    self.locations = []
    let index = 0
    const markers = options.markers
    const bounds = new google.maps.LatLngBounds()
    if (options.infoWindow) {
      self.info = new google.maps.InfoWindow(options.infoWindow)
    }
    //console.debug('xt-googlelocator viewport and radius', self.viewport, self.radius)
    for (const marker of markers) {
      if (!self.filters.length || self.filterMarker({ marker })) {
        const latLng = new google.maps.LatLng(
          options.formatData.lat ? options.formatData.lat(self, marker) : marker.lat,
          options.formatData.lng ? options.formatData.lng(self, marker) : marker.lng
        )
        const distance = google.maps.geometry.spherical.computeDistanceBetween(self.position, latLng)
        if (
          (!self.radius && !self.viewport) ||
          (self.radius && distance <= self.radius) ||
          (self.viewport && self.viewport.contains(latLng))
        ) {
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
          loc.addListener('click', () => {
            self.populateInfo({ loc, type: 'marker' })
          })
          index++
        }
      }
    }
    // assign index before sort
    for (const [i, loc] of self.locations.entries()) {
      loc.index = i
    }
    // order locations
    options.formatData.sort(self)
    // populate items after order
    self.populateItems()
    // markers
    if (options.map.cluster) {
      if (self.cluster) {
        self.cluster.clearMarkers()
      }
      self.cluster = new MarkerClusterer(self.map, self.locations, options.map.cluster)
    }
    // populate
    if (self.locations.length) {
      self.container.classList.remove('noplace')
      self.container.classList.remove('empty')
      self.container.classList.add('found')
      self.container.classList.remove('error')
      if (self.foundElement) {
        self.foundElement.innerHTML = self.locations.length
      }
      // map
      self.map.fitBounds(bounds)
      self.map.panToBounds(bounds)
    } else {
      self.container.classList.remove('noplace')
      self.container.classList.add('empty')
      self.container.classList.remove('found')
      self.container.classList.remove('error')
    }
    // eslint-disable-next-line no-console
    console.debug('xt-googlelocator locations', self.locations)
    // change
    Xt.frame({
      el: self.container,
      ns: `${self.ns}Change`,
      func: () => {
        // dispatch event
        self.container.dispatchEvent(new CustomEvent(`change.${self.componentNs}`))
      },
    })
  }

  /**
   * populateItems
   */
  populateItems() {
    const self = this
    // remove old
    const removes = self.container.querySelectorAll('.xt-googlelocator-clone')
    for (const remove of removes) {
      remove.remove()
    }
    // populateItem
    for (const loc of self.locations) {
      self.populateItem({ loc })
    }
  }

  /**
   * filterMarker
   * @param {Object} params
   * @param {Object} params.marker
   */
  filterMarker({ marker } = {}) {
    const self = this
    const options = self.options
    // filter
    return options.formatData.filter(self, marker, self.filters)
  }

  /**
   * populateItem
   * @param {Object} params
   * @param {Object} params.loc
   */
  populateItem({ loc } = {}) {
    const self = this
    const options = self.options
    // clone
    let cloned = document.createElement('div')
    cloned.innerHTML = self.itemsTemplate.innerHTML
    cloned = cloned.querySelector(':scope > *')
    cloned.classList.add('xt-googlelocator-clone')
    cloned.setAttribute('data-xt-index', loc.index.toString())
    // append clone
    self.itemsContainer.append(cloned)
    // populate clone
    const els = cloned.querySelectorAll('[data-xt-populate]')
    for (const el of els) {
      const func = options.formatData[el.getAttribute('data-xt-populate')]
      if (func) {
        func(self, loc, el)
      }
    }
    // info
    cloned.addEventListener('click', () => {
      self.populateInfo({ loc, type: 'result' })
    })
  }

  /**
   * populateInfo
   * @param {Object} params
   * @param {Object} params.loc
   * @param {String} params.type
   */
  populateInfo({ loc, type } = {}) {
    const self = this
    const options = self.options
    // stop animation
    if (self.animatingLoc) {
      self.animatingLoc.setAnimation(null)
      self.animatingLoc = null
    }
    // animation
    const anim =
      type === 'marker'
        ? options.events.animateMarkerClick
        : type === 'result'
        ? options.events.animateMarkerResultClick
        : null
    if (anim) {
      loc.setAnimation(anim)
      self.animatingLoc = loc
    }
    // activation
    const item = self.itemsContainer.querySelector(`[data-xt-index="${loc.index}"]`)
    const old = self.itemsContainer.querySelector('[data-xt-index].on')
    if (old) {
      Xt.off({ el: old })
    }
    if (type === 'marker') {
      if (item) {
        item.focus()
        Xt.on({ el: item })
      }
    }
    // infowindow
    if (options.infoWindow) {
      const info =
        type === 'marker'
          ? options.events.infoWindowMarkerClick
          : type === 'result'
          ? options.events.infoWindowMarkerResultClick
          : null
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
   * @param {Object} params
   * @param {Boolean} params.empty
   */
  submitCurrent({ empty = false } = {}) {
    const self = this
    const options = self.options
    // position
    self.searchInput.value = ''
    self.position = self.map.getCenter()
    self.viewport = null
    self.radius = options.searchRadius
    if (!empty || options.seachMapBounds) {
      self.radius = google.maps.geometry.spherical.computeDistanceBetween(
        self.position,
        self.map.getBounds().getNorthEast()
      )
    }
    self.submit()
  }

  /**
   * locate
   * @param {Object} params
   * @param {Boolean} params.initial
   */
  locate({ initial = false } = {}) {
    const self = this
    // disabled
    if (self.disabled) {
      return
    }
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
    const options = self.options
    // loader
    self.loaderHide()
    // position
    self.searchInput.value = options.locateText
    self.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude)
    self.viewport = null
    self.radius = options.searchRadius
    self.locateCache = {
      value: self.searchInput.value,
      position: self.position,
    }
    // eslint-disable-next-line no-console
    console.debug('xt-googlelocator locate', pos, self.position)
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
    console.error('Error: Xt.Googlelocator locate error', error)
  }

  /**
   * loaderShow
   */
  loaderShow() {
    const self = this
    Xt.on({ el: self.loaderElement })
  }

  /**
   * loaderHide
   */
  loaderHide() {
    const self = this
    Xt.off({ el: self.loaderElement })
  }

  //
  // status
  //

  /**
   * enable
   */
  enable() {
    const self = this
    if (self.disabled) {
      // enable
      self.disabled = false
      // dispatch event
      self.container.dispatchEvent(new CustomEvent(`status.${self.componentNs}`))
    }
  }

  /**
   * disable
   * @param {Object} params
   * @param {Boolean} params.skipEvent Skip dispatch event
   */
  disable({ skipEvent = false } = {}) {
    const self = this
    if (!self.disabled) {
      // disable
      self.disabled = true
      // dispatch event
      if (!skipEvent) {
        self.container.dispatchEvent(new CustomEvent(`status.${self.componentNs}`))
      }
    }
  }

  //
  // util
  //

  /**
   * reinit
   */
  reinit() {
    const self = this
    // reinit
    self.initLogic()
  }

  /**
   * destroy
   */
  destroy() {
    const self = this
    const options = self.options
    // events
    const searchHandler = Xt.dataStorage.get(self.searchInput, `keypress/${self.ns}`)
    self.searchInput.removeEventListener('keypress', searchHandler)
    const submitHandler = Xt.dataStorage.get(self.searchBtn, `click/${self.ns}`)
    self.searchBtn.removeEventListener('click', submitHandler)
    if (self.locateElement) {
      const locateHandler = Xt.dataStorage.get(self.locateElement, `click/${self.ns}`)
      self.locateElement.removeEventListener('click', locateHandler)
    }
    if (self.repeatElement) {
      const repeatHandler = Xt.dataStorage.get(self.repeatElement, `click/${self.ns}`)
      self.repeatElement.removeEventListener('click', repeatHandler)
    }
    // search place
    google.maps.event.removeListener(self.search, 'place_changed', self.placeChanged.bind(self))
    // locate
    if (options.elements.locateBtn) {
      self.locateElement = self.container.querySelector(options.elements.locateBtn)
      if (self.locateElement) {
        if (location.protocol === 'https:') {
          if (navigator.geolocation) {
            const locateHandler = Xt.dataStorage.put(self.locateElement, `click/${self.ns}`, self.locate.bind(self))
            self.locateElement.removeEventListener('click', locateHandler)
          }
        }
      }
    }
    // populate
    self.container.classList.remove('noplace')
    self.container.classList.remove('empty')
    self.container.classList.remove('found')
    self.container.classList.remove('error')
    // clone
    const removes = self.container.querySelectorAll('.xt-googlelocator-clone')
    for (const remove of removes) {
      remove.remove()
    }
    // initialized class
    self.container.removeAttribute(`data-${self.componentName}-init`)
    // set self
    Xt.remove({ name: self.componentName, el: self.container })
    // dispatch event
    self.container.dispatchEvent(new CustomEvent(`destroy.${self.componentNs}`))
    // delete
    delete this
  }
}

//
// option
//

Googlelocator.componentName = 'xt-googlelocator'
Googlelocator.optionsDefault = {
  debug: false,
  // setting
  initialLocate: false,
  initialSearch: false,
  seachMapBounds: false,
  searchRadius: 25000,
  locateText: 'Locate',
  // element
  elements: {
    loader: '[data-xt-googlelocator-loader]',
    searchInput: '[data-xt-googlelocator-search-input]',
    searchBtn: '[data-xt-googlelocator-search-btn]',
    map: '[data-xt-googlelocator-map]',
    itemsTemplate: '[data-xt-googlelocator-items-template]',
    itemsContainer: '[data-xt-googlelocator-items-container]',
    results: '[data-xt-googlelocator-results]',
    resultsFound: '[data-xt-googlelocator-results-found]',
    locateBtn: '[data-xt-googlelocator-locate-btn]',
    repeatBtn: '[data-xt-googlelocator-repeat-btn]',
    filter: '[data-xt-googlelocator-filter]',
  },
  // event
  events: {
    animateMarkerClick: false,
    animateMarkerResultClick: false,
    infoWindowMarkerClick: true,
    infoWindowMarkerResultClick: false,
  },
  // map
  map: {
    center: false,
    zoom: false,
    zoomMin: false,
    scrollwheel: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    cluster: false,
  },
  // infoWindow
  infoWindow: {},
  // format
  formatData: {
    lat: false,
    lng: false,
    sort: false,
    filter: false,
    name: false,
    address: false,
    additional: false,
    img: false,
    direction: false,
    distance: false,
    info: false,
  },
}

//
// export
//

Xt.Googlelocator = Googlelocator
