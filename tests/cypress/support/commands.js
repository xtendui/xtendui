Cypress.Commands.add('emptyWindow', () => {
  cy.window().then(win => {
    win.location.href = 'about:blank'
  })
})

Cypress.Commands.add('frame', () => {
  return new Cypress.Promise(resolve => {
    requestAnimationFrame(resolve)
  })
})

Cypress.Commands.add('frameDouble', () => {
  return new Cypress.Promise(resolve => {
    requestAnimationFrame(() => requestAnimationFrame(resolve))
  })
})

Cypress.Commands.add('addEventListener', (container, event, func) => {
  return new Cypress.Promise(resolve => {
    const merge = () => {
      func()
      resolve()
    }
    container.addEventListener(event, merge)
  })
})
