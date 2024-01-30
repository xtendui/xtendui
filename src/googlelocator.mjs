/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2024 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from './xt.mjs'

/**
 * Googlelocator
 */
class Googlelocator {
  /**
   * fields
   */
  static loaded = {}
  _optionsCustom
  _optionsDefault
  _optionsInitial
  _componentNs
  _locateCache
  _predictionCache
  _animatingLoc
  componentName
  ns
  options
  initial
  disabled = false
  container
  locations
  loaderElement
  itemsTemplate
  itemsContainer
  resultElement
  foundElement
  mapElement
  map
  info
  cluster
  searchInput
  search
  searchBtn
  filters
  position
  viewport
  radius

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    const self = this
    self.container = object
    self._optionsCustom = optionsCustom
    self.constructorName = self.constructor.constructorName
    self.componentName = self.constructor.componentName
    self._componentNs = self.componentName.replace('-', '.')
    // load
    const selfPromise = Xt._load({
      container: self.container,
      name: self.constructorName,
      suffix: 'Init',
      observer: self._optionsCustom.observer,
    }).then(() => {
      // this is the order: Xt._set before self._init and Xt.get listen to setup.xt to have self variables ready
      Xt._set({ name: self.componentName, el: self.container, selfPromise })
      self._init()
      return self
    })
    return selfPromise
  }
}

//
// option
//

Googlelocator.constructorName = 'Googlelocator'
Googlelocator.componentName = 'xt-googlelocator'
Googlelocator.optionsDefault = {
  debug: false,
  // setting
  initialLocate: false,
  initialSearch: false,
  seachMapBounds: false,
  searchRadius: 25000,
  locateText: 'Locate',
  submitDelay: 250,
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
  // autocomplete
  autocompleteOptions: false,
  autocompleteServiceOptions: false,
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
