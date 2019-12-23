import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '#demo_toggle-events',
  mount: function(object) {
    // init

    let self = new Xt.Toggle(object, {})

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
      logAdd('<strong>first</strong>')
      object.querySelector('button').dispatchEvent(new CustomEvent('on.xt'))
    }

    firstBtn.addEventListener('click', firstFnc)

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
