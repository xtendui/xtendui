// requestAnimationFrame

Cypress.Commands.add('raf', () => {
  return new Cypress.Promise(resolve => {
    requestAnimationFrame(resolve)
  })
})
