describe('My First Test visit', () => {
  it('Visits test', () => {
    cy.visit('/hidden/test')
  })
})

/*

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('My First Test visit', () => {
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click().debug()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
  })
})
*/
