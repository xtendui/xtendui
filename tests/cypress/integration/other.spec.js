const url = '/hidden/test/other'

describe('demos/hidden/test/mount-unmount', function () {
  let win
  let Xt
  let demo
  let overlay
  let self
  let tr

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--mount-unmount').as('demo')
    cy.get('@demo').find('[data-xt-overlay]').as('overlay')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    demo = this.demo[0]
    overlay = this.overlay[0]
    self = Xt.get({ name: 'xt-overlay', el: overlay })
    tr = self.targets[0]
  })

  it('TEST mount root once, this should be 1 on init and should remain 1 on deactivation.', function () {
    expect(demo.getAttribute('data-test-mountroot')).to.equal('1')
    overlay.dispatchEvent(new CustomEvent('off.trigger.xt.overlay'))
    expect(demo.getAttribute('data-test-mountroot')).to.equal('1')
  })

  it('TEST init xtNamespace, should be 1.', function () {
    const xtNamespace = Xt.dataStorage.get(self.ns, 'xtNamespace')
    expect(xtNamespace.length).to.equal(1)
  })

  it('TEST init classes and properties, should be `true true true true`.', { retries: 3 }, function () {
    expect(overlay.getAttribute('data-xt-overlay-init')).to.equal(null)
    expect(tr.classList.contains('on')).to.equal(true)
    expect(tr.classList.contains('in')).to.equal(true)
    expect(tr.classList.contains('initial')).to.equal(true)
    expect(self.initial).to.equal(true)
  })

  it('TEST after init classes and properties, should be `true true false false`.', function () {
    cy.raf().then(() => {
      expect(overlay.getAttribute('data-xt-overlay-init')).to.equal('')
      expect(tr.classList.contains('on')).to.equal(true)
      expect(tr.classList.contains('in')).to.equal(true)
      expect(tr.classList.contains('initial')).to.equal(false)
      expect(self.initial).to.equal(false)
    })
  })

  it('TEST unmount, this should increase by one on changing page and resize.', function () {
    cy.visit('/hidden/test')
      .go(-1)
      .get('.demo--mount-unmount')
      .as('demo')
      .should('be.visible') // @RACECONDITION
      .raf()
      .then(() => {
        cy.viewport('iphone-6')
          .raf()
          .then(() => {
            cy.viewport('macbook-13')
              .raf()
              .then(() => {
                cy.get('@demo').should('have.attr', 'data-test-resize', '2')
              })
          })
      })
  })

  it('TEST unmount should disable on deactivate and should remove from dom overlay.', function () {
    cy.raf().then(() => {
      demo.remove()
      cy.get(tr).should('not.exist')
    })
  })

  it('TEST unmount, unmountArr should be the same and xtNamespace should be 0.', function () {
    const count = Xt._unmountArr.length
    expect(Xt.dataStorage.get(self.ns, 'xtNamespace').length).to.equal(1)
    demo.remove()
    cy.raf().then(() => {
      expect(Xt.dataStorage.get(self.ns, 'xtNamespace').length).to.equal(0)
      expect(Xt._unmountArr.length).to.equal(count - 2)
    })
  })
})
