describe('demos/hidden/test/mount-unmount', function () {
  beforeEach(function () {
    cy.visit('/hidden/test')
    cy.window().as('win')
    cy.get('.demo--mount-unmount').as('demo')
    cy.get('@demo').find('[data-xt-overlay]').as('overlay')
  })
  it('TEST INITIAL xtNamespace should be 1.', function () {
    const win = this.win
    const overlay = this.overlay[0]
    const self = win.Xt.get({ name: 'xt-overlay', el: overlay })
    const xtNamespace = win.Xt.dataStorage.get(self.ns, 'xtNamespace')
    expect(xtNamespace.length).to.equal(1)
  })
})
