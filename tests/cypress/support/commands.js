// requestAnimationFrame

Cypress.Commands.add('frame', () => {
  return new Cypress.Promise(resolve => {
    requestAnimationFrame(resolve)
  })
})

Cypress.Commands.add('emptyWindow', () => {
  cy.window().then(win => {
    win.location.href = 'about:blank'
  })
})
