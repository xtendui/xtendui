import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '#demo_toggle-events',
  mount: function(object) {
    // init

    const self = new Xt.Toggle(object, {
      min: 1,
    })

    // log

    let logTimeout
    const log = document.querySelector('#demo_toggle-events-log')

    const logAdd = function(text) {
      log.innerHTML += text + '<br/>'
      // scroll
      log.scrollTo(0, log.scrollHeight)
      // hr
      clearTimeout(logTimeout)
      logTimeout = setTimeout(function() {
        log.innerHTML += '<hr/>'
      }, 1000)
    }

    // first element

    const firstEl = document.querySelector('#demo_toggle-events-first-element')

    const firstElFnc = function() {
      logAdd('<strong>1st element</strong>')
      const elements = self.elements
      elements[0].dispatchEvent(new CustomEvent('on.xt'))
    }

    firstEl.addEventListener('click', firstElFnc)

    // first target

    const firstTr = document.querySelector('#demo_toggle-events-first-target')

    const firstTrFnc = function() {
      logAdd('<strong>1st target</strong>')
      const targets = self.targets
      targets[0].dispatchEvent(new CustomEvent('on.xt'))
    }

    firstTr.addEventListener('click', firstTrFnc)

    // add

    const addBtn = document.querySelector('#demo_toggle-events-add')

    const addFnc = function() {
      clearTimeout(parseFloat(object.dataset.reinitTimeout))
      object.dataset.reinitTimeout = setTimeout(function() {
        logAdd('<strong>add</strong>')
        // elements
        const elements = self.elements
        const elIndex = elements.length
        const el = `<button type="button" class="btn btn-default">Toggle ${elIndex}</button>`
        elements[elements.length - 1].after(Xt.createElement(el))
        // targets
        const targets = self.targets
        const trIndex = targets.length
        const tr = `<div class="note note-default note-background toggle-block">Target ${trIndex}</div>`
        targets[targets.length - 1].after(Xt.createElement(tr))
        // reinit
        logAdd('<strong>reinit</strong>')
        self.reinit()
      }, 1000).toString()
    }

    addBtn.addEventListener('click', addFnc)

    // remove

    const removeBtn = document.querySelector('#demo_toggle-events-remove')

    const removeFnc = function() {
      clearTimeout(parseFloat(object.dataset.reinitTimeout))
      object.dataset.reinitTimeout = setTimeout(function() {
        if (self.elements.length > 1 && self.targets.length > 1) {
          logAdd('<strong>remove</strong>')
          // element
          const elements = self.elements
          elements[elements.length - 1].remove()
          // element
          const targets = self.targets
          targets[targets.length - 1].remove()
          // reinit
          logAdd('<strong>reinit</strong>')
          self.reinit()
        }
      }, 1000).toString()
    }

    removeBtn.addEventListener('click', removeFnc)

    // reinit

    const reinitBtn = document.querySelector('#demo_toggle-events-reinit')

    const reinitFnc = function() {
      clearTimeout(parseFloat(object.dataset.reinitTimeout))
      object.dataset.reinitTimeout = setTimeout(function() {
        logAdd('<strong>reinit</strong>')
        self.reinit()
      }, 1000).toString()
    }

    reinitBtn.addEventListener('click', reinitFnc)

    // restart

    const restartBtn = document.querySelector('#demo_toggle-events-restart')

    const restartFnc = function() {
      logAdd('<strong>restart</strong>')
      self.restart()
    }

    restartBtn.addEventListener('click', restartFnc)

    // destroy

    const destroyBtn = document.querySelector('#demo_toggle-events-destroy')

    const destroyFnc = function() {
      logAdd('<strong>destroy</strong>')
      self.destroy()
    }

    destroyBtn.addEventListener('click', destroyFnc)

    // unmount

    const unmountBtn = document.querySelector('#demo_toggle-events-unmount')

    const unmountFnc = function() {
      logAdd('<strong>unmount</strong>')
      unmount()
    }

    unmountBtn.addEventListener('click', unmountFnc)

    // events

    const events = function(e) {
      let str = 'event <strong>' + e.type + '</strong>'
      if (e.target.getAttribute('title')) {
        str += ' from <strong>' + e.target.getAttribute('title') + '</strong>'
      } else if (e.target.querySelector('.card-title')) {
        str += ' from <strong>' + e.target.querySelector('.card-title').innerHTML + '</strong>'
      } else if (!e.target.querySelector('*')) {
        str += ' from <strong>' + e.target.innerHTML + '</strong>'
      }
      logAdd(str)
    }

    object.addEventListener('init.xt', events)
    object.addEventListener('destroy.xt', events)
    object.addEventListener('on.xt', events)
    object.addEventListener('off.xt', events)

    // unmount

    const unmount = function unmount() {
      firstEl.removeEventListener('click', firstElFnc)
      firstTr.removeEventListener('click', firstTrFnc)
      addBtn.removeEventListener('click', addFnc)
      removeBtn.removeEventListener('click', removeFnc)
      reinitBtn.removeEventListener('click', reinitFnc)
      restartBtn.removeEventListener('click', restartFnc)
      destroyBtn.removeEventListener('click', destroyFnc)
      unmountBtn.removeEventListener('click', unmountFnc)
      object.removeEventListener('init.xt', events)
      object.removeEventListener('destroy.xt', events)
      object.removeEventListener('on.xt', events)
      object.removeEventListener('off.xt', events)
      self.destroy()
      self = null
    }
    return unmount
  },
})
