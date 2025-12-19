/*!
 * Xtend UI (https://xtendui.github.io/xtendui/)
 * @copyright (c) 2017-2026 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

/* global google */
import { Xt } from '../xt.mjs'
import { MarkerClusterer } from '@googlemaps/markerclusterer'

/**
 * GooglelocatorInit
 */
export class GooglelocatorInit {
  //
  // init
  //

  /**
   * init
   */
  _init() {
    const self = this
    // init
    self._initVars()
    self._initLogic()
  }

  /**
   * init vars
   */
  _initVars() {
    const self = this
    // options
    self._optionsDefault = Xt.merge([self.constructor.optionsDefault, Xt.options[self.componentName]])
    self._optionsInitial = self.options = Xt.merge([self._optionsDefault, self._optionsCustom])
  }

  /**
   * init logic
   */
  _initLogic() {
    const self = this
    const options = self.options
    // namespace
    self.ns = self.ns ?? Xt.uniqueId()
    // enable first for proper initial activation
    self.enable()
    // matches
    Xt._initMatches({ self, optionsInitial: self._optionsInitial })
    // vars
    self.initial = true
    self.loaderElement = self.container.querySelector(options.elements.loader)
    self.itemsTemplate = self.container.querySelector(options.elements.itemsTemplate)
    self.itemsContainer = self.container.querySelector(options.elements.itemsContainer)
    self.foundElement = self.container.querySelector(options.elements.resultsFound)
    // init
    self.mapElement = self.container.querySelector(options.elements.map)
    self.map = new google.maps.Map(self.mapElement, options.map)
    self.autosuggestContainer = self.container.querySelector(options.elements.autosuggestContainer)
    self.autosuggestTemplate = self.container.querySelector(options.elements.autosuggestTemplate)
    self.searchInput = self.container.querySelector(options.elements.searchInput)
    const searchHandler = Xt.dataStorage.put(
      self.searchInput,
      `keypress/${self.ns}`,
      self._searchKeyboardEvent.bind(self),
    )
    self.searchInput.addEventListener('keypress', searchHandler)
    const searchChangeHandler = Xt.dataStorage.put(
      self.searchInput,
      `input focus/${self.ns}`,
      self._searchAutocompleteOn.bind(self),
    )
    self.searchInput.addEventListener('input', searchChangeHandler)
    self.searchInput.addEventListener('focus', searchChangeHandler)
    if (self.autosuggestContainer) {
      const searchOutHandler = Xt.dataStorage.put(self.container, `focusout/${self.ns}`, self._searchClose.bind(self))
      self.container.addEventListener('focusout', searchOutHandler)
    }
    // submit triggers places autocomplete
    self.searchBtn = self.container.querySelector(options.elements.searchBtn)
    const submitHandler = Xt.dataStorage.put(self.searchBtn, `click/${self.ns}`, self._searchClickEvent.bind(self))
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
    // info
    if (options.infoWindow) {
      self.info = new google.maps.InfoWindow(options.infoWindow)
      google.maps.event.addListener(self.info, 'closeclick', self._infoClose.bind(self))
    }
    // submitCurrent
    if (options.elements.repeatBtn) {
      self.repeatElement = self.container.querySelector(options.elements.repeatBtn)
      if (self.repeatElement) {
        const repeatHandler = Xt.dataStorage.put(self.repeatElement, `click/${self.ns}`, self._submitCurrent.bind(self))
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
              self._locate({ initial: true })
            }
            const locateHandler = Xt.dataStorage.put(self.locateElement, `click/${self.ns}`, self._locate.bind(self))
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
    self._initStart()
    // setup
    // dispatch event
    self.container.dispatchEvent(new CustomEvent(`setup.${self._componentNs}`))
    // needs frameDouble after ondone
    Xt.frameDouble({
      el: self.container,
      ns: `${self.ns}Init`,
      func: () => {
        // initialized class
        self.container.setAttribute(`data-${self.componentName}-init`, '')
        // dispatch event
        self.container.dispatchEvent(new CustomEvent(`init.${self._componentNs}`))
        self.initial = false
        // debug
        if (options.debug) {
          // eslint-disable-next-line no-console
          console.debug(`${self.componentName} init`, self)
        }
      },
    })
    // disable last for proper options.disableDeactivate
    if (self.options.disabled) {
      self.disable()
    }
  }

  /**
   * init start
   */
  _initStart() {
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
        self._submitCurrent()
      })
    }
  }

  //
  // methods
  //

  /**
   * _searchAutocompleteOn
   */
  async _searchAutocompleteOn() {
    const self = this
    const options = self.options
    // logic
    if (self._controller) self._controller.abort() // cancel previous fetch
    self._controller = new AbortController()
    if (!self._sessionToken) {
      self._sessionToken = new google.maps.places.AutocompleteSessionToken()
    }
    if (self.searchInput.value.trim() === '') {
      self._searchAutocompleteOff()
      return
    }
    const { suggestions } = await google.maps.places.AutocompleteSuggestion.fetchAutocompleteSuggestions({
      input: self.searchInput.value,
      sessionToken: self._sessionToken,
      ...self.options.autocompleteOptions,
    })
    if (suggestions.length) {
      self.autosuggestContainer.innerHTML = ''
      self._searchAutocompleteOff()
      Xt.on({
        el: self.autosuggestContainer,
      })
      suggestions.forEach(suggestion => {
        if (suggestion.placePrediction) {
          const el = Xt.node({ str: self.autosuggestTemplate.innerHTML })
          options.formatData.autosuggest(self, suggestion, el)
          self.autosuggestContainer.append(el)
          // click event
          el.querySelector(options.elements.autosuggestAction).addEventListener('click', () => {
            self._searchAutocompleteOff()
            self._searchSubmit({ suggestion })
          })
          // a11y
          const documentKeydownHandler = Xt.dataStorage.put(
            document,
            `keydown/ariakeyboard/document/${self.ns}`,
            self._eventA11yDocumentKeydown.bind(self),
          )
          document.removeEventListener('keydown', documentKeydownHandler)
          document.addEventListener('keydown', documentKeydownHandler)
        }
      })
    } else {
      self._searchAutocompleteOff()
    }
  }

  /**
   * _searchAutocompleteOff
   */
  _searchAutocompleteOff() {
    const self = this
    // logic
    Xt.off({
      el: self.autosuggestContainer,
    })
    // a11y
    const documentKeydownHandler = Xt.dataStorage.get(document, `keydown/ariakeyboard/document/${self.ns}`)
    document.removeEventListener('keydown', documentKeydownHandler)
  }

  /**
   * _searchSubmit
   * @param {Object} params
   * @param {Object} params.suggestion
   */
  async _searchSubmit({ suggestion } = {}) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // logic
    const { place } = await suggestion.placePrediction.toPlace().fetchFields({
      fields: ['displayName', 'location', 'viewport', 'formattedAddress'],
    })
    self.searchInput.value = suggestion.placePrediction.text.text
    // search place
    if (place && place.displayName && place.displayName !== '') {
      if (place.location) {
        self.position = place.location
        self.viewport = place.viewport
        self.radius = options.searchRadius
        self.submit()
      }
    }
  }

  /**
   * _searchClose
   * @param {Event} e
   */
  _searchClose(e) {
    const self = this
    // logic
    setTimeout(() => {
      if (!e?.relatedTarget || !self.container.contains(e.relatedTarget)) {
        self._searchAutocompleteOff()
      }
    }, 0)
  }

  /**
   * _searchKeyboardEvent
   * @param {Event} e
   */
  _searchKeyboardEvent(e) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // on enter
    const key = e.key
    if (key === 'Enter') {
      // prevent form submit
      e.preventDefault()
      // blur input
      self.searchInput.blur()
      // reset map and submit
      if (self.searchInput.value === '') {
        self.map.setCenter(options.map.center)
        self.map.setZoom(options.map.zoom)
        self._submitCurrent({ empty: true })
      } else {
        self._searchFirst()
      }
    }
  }

  /**
   * _searchClickEvent
   * @param {Event} e
   */
  _searchClickEvent(e) {
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
      self._submitCurrent({ empty: true })
    } else {
      self._searchFirst()
    }
  }

  /**
   * _searchFirst
   */
  _searchFirst() {
    const self = this
    const options = self.options
    // logic
    self._searchClose()
    const firstResult = self.autosuggestContainer.querySelector(options.elements.autosuggestAction)
    if (firstResult) {
      firstResult.click()
      return
    }
    // locate prediction
    if (self._locateCache && self._locateCache.value === self.searchInput.value) {
      self.position = self._locateCache.position
      self.viewport = null
      self.radius = options.searchRadius
      self.submit()
      return
    }
    // no results
    self.locations = []
    self._populateItems()
    self.container.classList.add('noplace')
    self.container.classList.remove('empty')
    self.container.classList.remove('found')
    self.container.classList.remove('error')
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
    // loader
    self._loaderShow()
    setTimeout(self.submitDeferred.bind(self), options.submitDelay)
  }

  /**
   * submitDeferred
   */
  submitDeferred() {
    const self = this
    const options = self.options
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
    for (const marker of markers) {
      if (!self.filters.length || self._filterMarker({ marker })) {
        const latLng = new google.maps.LatLng(
          options.formatData.lat ? options.formatData.lat(self, marker) : marker.lat,
          options.formatData.lng ? options.formatData.lng(self, marker) : marker.lng,
        )
        const distance = google.maps.geometry.spherical.computeDistanceBetween(self.position, latLng)
        if (
          (!self.radius && !self.viewport) ||
          (self.radius && distance <= self.radius) ||
          (self.viewport && self.viewport.contains(latLng))
        ) {
          const customIcon = marker.icon || options.map.icon
          let customIconImg
          if (customIcon) {
            customIconImg = document.createElement('img')
            customIconImg.src = customIcon
          }
          const loc = new google.maps.marker.AdvancedMarkerElement({
            map: self.map,
            position: latLng,
            title: marker.name,
            content: customIconImg,
          })
          loc.animation = marker.animation || options.map.animation
          loc.distance = distance
          loc.marker = marker
          loc.index = index
          bounds.extend(latLng)
          self.locations.push(loc)
          loc.addListener('click', () => {
            self._populateInfo({ loc, type: 'marker' })
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
    self._populateItems()
    // markers
    if (options.map.cluster) {
      if (self.cluster) {
        self.cluster.clearMarkers()
      }
      self.cluster = new MarkerClusterer({ map: self.map, markers: self.locations, ...options.map.cluster })
    }
    // loader
    self._loaderHide()
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
      if (self.viewport) {
        self.map.fitBounds(self.viewport)
        self.map.panToBounds(self.viewport)
      }
    }
    if (options.debug) {
      // eslint-disable-next-line no-console
      console.debug('xt-googlelocator locations', self.locations)
    }
    // change
    Xt.frame({
      el: self.container,
      ns: `${self.ns}Change`,
      func: () => {
        // dispatch event
        self.container.dispatchEvent(new CustomEvent(`change.${self._componentNs}`))
      },
    })
  }

  /**
   * populateItems
   */
  _populateItems() {
    const self = this
    // remove old
    const removes = self.container.querySelectorAll('.xt-googlelocator-clone')
    for (const remove of removes) {
      remove.remove()
    }
    // populateItem
    for (const loc of self.locations) {
      self._populateItem({ loc })
    }
  }

  /**
   * filterMarker
   * @param {Object} params
   * @param {Object} params.marker
   */
  _filterMarker({ marker } = {}) {
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
  _populateItem({ loc } = {}) {
    const self = this
    const options = self.options
    // clone
    let cloned = document.createElement('div')
    cloned.innerHTML = Xt.sanitize(self.itemsTemplate.innerHTML)
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
      self._populateInfo({ loc, type: 'result' })
    })
  }

  /**
   * populateInfo
   * @param {Object} params
   * @param {Object} params.loc
   * @param {String} params.type
   */
  _populateInfo({ loc, type } = {}) {
    const self = this
    const options = self.options
    // stop animation
    if (self._animatingLoc) {
      self._animatingLoc.setAnimation(null)
      self._animatingLoc = null
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
      self._animatingLoc = loc
    }
    // activation
    const item = self.itemsContainer.querySelector(`[data-xt-index="${loc.index}"]`)
    self._infoClose()
    if (item) {
      item.focus()
      Xt.on({ el: item })
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
   * infoClose
   */
  _infoClose() {
    const self = this
    // logic
    const old = self.itemsContainer.querySelector('[data-xt-index].on')
    if (old) {
      Xt.off({ el: old })
    }
  }

  /**
   * submitCurrent
   * @param {Object} params
   * @param {Boolean} params.empty
   */
  _submitCurrent({ empty = false } = {}) {
    const self = this
    const options = self.options
    // position
    self.searchInput.value = ''
    self.position = self.map.getCenter()
    self.viewport = null
    if (!empty || options.seachMapBounds) {
      self.radius = google.maps.geometry.spherical.computeDistanceBetween(
        self.position,
        self.map.getBounds().getNorthEast(),
      )
    }
    self.submit()
  }

  /**
   * locate
   * @param {Object} params
   * @param {Boolean} params.initial
   */
  _locate({ initial = false } = {}) {
    const self = this
    // disabled
    if (self.disabled) {
      return
    }
    // loader
    if (!initial) {
      self._loaderShow()
    }
    // locate
    window.navigator.geolocation.getCurrentPosition(self._locateSuccess.bind(self), self._locateError.bind(self))
  }

  /**
   * locateSuccess
   * @param {Object} pos
   */
  _locateSuccess(pos) {
    const self = this
    const options = self.options
    // loader
    self._loaderHide()
    // position
    self.searchInput.value = options.locateText
    self.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude)
    self.viewport = null
    self.radius = options.searchRadius
    self._locateCache = {
      value: self.searchInput.value,
      position: self.position,
    }
    if (options.debug) {
      // eslint-disable-next-line no-console
      console.debug('xt-googlelocator locate', pos, self.position)
    }
    // submit on zoom only one time
    self.map.setCenter(self.position)
    self.submit()
  }

  /**
   * locateError
   * @param {String} error
   */
  _locateError(error) {
    const self = this
    // loader
    self._loaderHide()
    // error
    console.error('Error: Xt.Googlelocator locate error', error)
  }

  /**
   * loaderShow
   */
  _loaderShow() {
    const self = this
    Xt.on({ el: self.loaderElement })
  }

  /**
   * loaderHide
   */
  _loaderHide() {
    const self = this
    Xt.off({ el: self.loaderElement })
  }

  //
  // a11y
  //

  /**
   * _eventA11yDocumentKeydown
   */
  _eventA11yDocumentKeydown(e) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // logic
    const key = e.key
    const prevKey = options.a11y.vertical ? 'ArrowLeft' : 'ArrowUp'
    const nextKey = options.a11y.vertical ? 'ArrowRight' : 'ArrowDown'
    // navigate items
    if (options.a11y.items) {
      let item
      const items = []
      items.push(...self.autosuggestContainer.querySelectorAll(options.a11y.items))
      if (items.length) {
        const current = items.indexOf(document.activeElement)
        if (key === prevKey) {
          if (current === -1) {
            item = items[items.length - 1]
          } else {
            const prev = (current - 1 + items.length) % items.length
            item = items[prev]
          }
          // prevent page scroll
          e.preventDefault()
        } else if (key === nextKey) {
          if (current === -1) {
            item = items[0]
          } else {
            const next = (current + 1) % items.length
            item = items[next]
          }
          // prevent page scroll
          e.preventDefault()
        }
        if (item) {
          // focus
          item.focus()
          return
        }
      }
    }
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
      self.container.dispatchEvent(new CustomEvent(`status.${self._componentNs}`))
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
        self.container.dispatchEvent(new CustomEvent(`status.${self._componentNs}`))
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
    self._initLogic()
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
    const searchChangeHandler = Xt.dataStorage.get(self.searchInput, `input focus/${self.ns}`)
    self.searchInput.removeEventListener('input', searchChangeHandler)
    self.searchInput.removeEventListener('focus', searchChangeHandler)
    const searchOutHandler = Xt.dataStorage.get(self.container, `focusout/${self.ns}`)
    self.container.removeEventListener('focusout', searchOutHandler)
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
    // info
    if (options.infoWindow) {
      google.maps.event.removeListener(self.info, 'closeclick', self._infoClose.bind(self))
    }
    // locate
    if (options.elements.locateBtn) {
      self.locateElement = self.container.querySelector(options.elements.locateBtn)
      if (self.locateElement) {
        if (location.protocol === 'https:') {
          if (navigator.geolocation) {
            const locateHandler = Xt.dataStorage.put(self.locateElement, `click/${self.ns}`, self._locate.bind(self))
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
    Xt._remove({ name: self.componentName, el: self.container })
    // dispatch event
    self.container.dispatchEvent(new CustomEvent(`destroy.${self._componentNs}`))
    // delete
    delete this
  }
}
