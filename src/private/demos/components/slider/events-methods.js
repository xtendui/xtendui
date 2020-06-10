import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '#demo--slider-events',
  mount: object => {
    // init

    let self = new Xt.Slider(object, {
      auto: {
        time: 4000,
        initial: false,
      },
      align: 'center',
      drag: { wrap: true },
    })

    // log

    const log = document.querySelector('#demo--slider-events-log')

    const logAdd = text => {
      log.innerHTML += text + '<br/>'
      // scroll
      log.scrollTo(0, log.scrollHeight)
      // hr
      clearTimeout(window.logTimeout)
      window.logTimeout = setTimeout(() => {
        log.innerHTML += '<hr/>'
      }, 1000)
    }

    // first element

    const firstEl = document.querySelector('#demo--slider-events-first-element')

    const firstElFnc = () => {
      logAdd('<strong>1st element</strong>')
      const elements = self.elements.filter(x => !x.classList.contains('xt-wrap'))
      elements[0].dispatchEvent(new CustomEvent('on.trigger.xt'))
    }

    firstEl.addEventListener('click', firstElFnc)

    // first target

    const firstTr = document.querySelector('#demo--slider-events-first-target')

    const firstTrFnc = () => {
      logAdd('<strong>1st target</strong>')
      const targets = self.targets.filter(x => !x.classList.contains('xt-wrap'))
      targets[0].dispatchEvent(new CustomEvent('on.trigger.xt'))
    }

    firstTr.addEventListener('click', firstTrFnc)

    // autostart

    const autostartEl = document.querySelector('#demo--toggle-events-autostart')

    const autstartFnc = () => {
      logAdd('<strong>autostart</strong>')
      self.object.dispatchEvent(new CustomEvent('autostart.trigger.xt'))
    }

    autostartEl.addEventListener('click', autstartFnc)

    // autostop

    const autostopEl = document.querySelector('#demo--toggle-events-autostop')

    const autostopFnc = () => {
      logAdd('<strong>autostop</strong>')
      self.object.dispatchEvent(new CustomEvent('autostop.trigger.xt'))
    }

    autostopEl.addEventListener('click', autostopFnc)

    // add

    const addBtn = document.querySelector('#demo--slider-events-add')

    const addFnc = () => {
      clearTimeout(parseFloat(object.dataset.reinitTimeout))
      object.dataset.reinitTimeout = setTimeout(() => {
        logAdd('<strong>add</strong>')
        // targets
        const targets = self.targets.filter(x => !x.classList.contains('xt-wrap'))
        const indexTr = targets.length + 1
        const strTr = `
        <li class="slide col-6 col-4-sm">
          <div class="slide-inner">

            <div class="card card-slide">
              <div class="card-design"></div>
              <div class="card-inner">
                <div class="card-content">
                  <div class="card-block card-item">
                    <div class="card-title">${indexTr}</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </li>`
        document.querySelector('#demo--slider-events-targets').append(Xt.createElement(strTr))
        // reinit
        logAdd('<strong>reinit</strong>')
        self.reinit()
      }, 200).toString()
    }

    addBtn.addEventListener('click', addFnc)

    // remove

    const removeBtn = document.querySelector('#demo--slider-events-remove')

    const removeFnc = () => {
      clearTimeout(parseFloat(object.dataset.reinitTimeout))
      object.dataset.reinitTimeout = setTimeout(() => {
        logAdd('<strong>remove</strong>')
        // elements
        const elements = self.elements.filter(x => !x.classList.contains('xt-wrap'))
        elements[elements.length - 1].remove()
        // targets
        const targets = self.targets.filter(x => !x.classList.contains('xt-wrap'))
        targets[targets.length - 1].remove()
        // reinit
        logAdd('<strong>reinit</strong>')
        self.reinit()
    }, 200).toString()
    }

    removeBtn.addEventListener('click', removeFnc)

    // reinit

    const reinitBtn = document.querySelector('#demo--slider-events-reinit')

    const reinitFnc = () => {
      clearTimeout(parseFloat(object.dataset.reinitTimeout))
      object.dataset.reinitTimeout = setTimeout(() => {
        logAdd('<strong>reinit</strong>')
        self.reinit()
      }, 200).toString()
    }

    reinitBtn.addEventListener('click', reinitFnc)

    // restart

    const restartBtn = document.querySelector('#demo--slider-events-restart')

    const restartFnc = () => {
      logAdd('<strong>restart</strong>')
      self.restart()
    }

    restartBtn.addEventListener('click', restartFnc)

    // destroy

    const destroyBtn = document.querySelector('#demo--slider-events-destroy')

    const destroyFnc = () => {
      logAdd('<strong>destroy</strong>')
      self.destroy()
    }

    destroyBtn.addEventListener('click', destroyFnc)

    // unmount

    const unmountBtn = document.querySelector('#demo--slider-events-unmount')

    const unmountFnc = () => {
      logAdd('<strong>unmount</strong>')
      unmount()
    }

    unmountBtn.addEventListener('click', unmountFnc)

    // events

    const events = e => {
      let str = 'event <strong>' + e.type + '</strong>'
      if (e.target.getAttribute('title')) {
        str += ' from <strong>' + e.target.getAttribute('title') + '</strong>'
      } else if (e.target.querySelector('.card-title')) {
        str += ' from <strong> Target ' + e.target.querySelector('.card-title').innerHTML + '</strong>'
      } else if (!e.target.querySelector('*')) {
        str += ' from <strong>' + e.target.innerHTML + '</strong>'
      }
      logAdd(str)
    }

    object.addEventListener('init.xt', events)
    object.addEventListener('destroy.xt', events)
    document.addEventListener('on.xt', events, true)
    document.addEventListener('off.xt', events, true)

    // unmount

    const unmount = () => {
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
      document.removeEventListener('on.xt', events, true)
      document.removeEventListener('off.xt', events, true)
      self.destroy()
      self = null
    }
    return unmount
  },
})
