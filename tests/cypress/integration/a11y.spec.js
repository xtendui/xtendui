const url = '/xtendui/hidden/test/a-11-y-test'

describe('a11y', function () {
  it('TEST a11y.', function () {
    cy.visit(url)
      .wait(1000) // after animation
      .injectAxe()
      .checkA11y()
  })

  it('TEST a11y home.', function () {
    cy.visit('/xtendui/')
      .wait(1000) // after animation
      .injectAxe()
      .checkA11y()
  })
})
