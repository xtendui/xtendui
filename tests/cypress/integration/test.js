describe('demos/hidden/test/mount-unmount', () => {
  beforeEach(() => {
    cy.visit('/hidden/test')
  })

  it('TEST INITIAL xtNamespace should be 1.', () => {
    cy.window()
      .its('Xt')
      .then(Xt => {
        const demo = cy.get('.demo--mount-unmount')
        demo.find('[data-xt-overlay]').then(overlay => {
          const self = Xt.get({ name: 'xt-overlay', el: overlay[0] })
          const xtNamespace = Xt.dataStorage.get(self.ns, 'xtNamespace')
          expect(xtNamespace.length).to.equal(1)
        })
      })
  })
})
