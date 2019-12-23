import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '#demo_toggle-events',
  mount: function(object) {
    // init

    let self = new Xt.Toggle(object, {
      min: 1
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

    // first

    const firstBtn = document.querySelector('#demo_toggle-events-first')

    const firstFnc = function() {
      logAdd('<strong>activate 1st</strong>')
      object.querySelector('button').dispatchEvent(new CustomEvent('on.xt'))
    }

    firstBtn.addEventListener('click', firstFnc)

    // add

    const addBtn = document.querySelector('#demo_toggle-events-add')

    const addFnc = function() {
      logAdd('<strong>add</strong>')
      const index = self.elements.length
      // element
      const el = '<button type="button" class="btn btn-default">Toggle ' + index + '</button>'
      self.elements[self.elements.length - 1].after(Xt.createElement(el))
      // target
      const tr = '<div class="note note-default note-background toggle-block">Target ' + index + '</div>'
      self.targets[self.targets.length - 1].after(Xt.createElement(tr))
      // reinit
      reinitFnc()
    }

    addBtn.addEventListener('click', addFnc)

    // remove

    const removeBtn = document.querySelector('#demo_toggle-events-remove')

    const removeFnc = function() {
      logAdd('<strong>remove</strong>')
      // element
      self.elements[self.elements.length - 1].remove()
      // element
      self.targets[self.targets.length - 1].remove()
      // reinit
      reinitFnc()
    }

    removeBtn.addEventListener('click', removeFnc)

    // reinit

    const reinitBtn = document.querySelector('#demo_toggle-events-reinit')

    const reinitFnc = function() {
      logAdd('<strong>reinit</strong>')
      self.reinit()
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
      if (!e.target.querySelector('*')) {
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
      firstBtn.removeEventListener('click', firstFnc)
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
