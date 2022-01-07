import './commands'
import 'cypress-axe'
import 'cypress-plugin-tab'

// set window variables

Cypress.on('window:before:load', win => {
  win.XtSetGlobal = true
})

// ignore xhr https://github.com/cypress-io/cypress/issues/7362
// Hide fetch/XHR requests

const app = window.top
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style')
  style.innerHTML = '.command-name-request, .command-name-xhr { display: none }'
  style.setAttribute('data-hide-command-log-request', '')
  app.document.head.appendChild(style)
}
