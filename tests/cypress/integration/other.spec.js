const url = '/hidden/test/other'

describe('demos/hidden/test/mount-unmount', function () {
  let win
  let Xt
  let demo
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--mount-unmount').as('demo')
    cy.get('@demo').find('[data-xt-overlay]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    demo = this.demo[0]
    container = this.container[0]
    self = Xt.get({ name: 'xt-overlay', el: container })
  })

  it('TEST mount root once, this should be 1 on init, should remain 1 on deactivation.', function () {
    expect(demo.getAttribute('data-test-mountroot')).to.equal('1')
    container.dispatchEvent(new CustomEvent('off.trigger.xt.overlay'))
    expect(demo.getAttribute('data-test-mountroot')).to.equal('1')
  })

  it('TEST init xtNamespace, should be 1.', function () {
    const xtNamespace = Xt.dataStorage.get(self.ns, 'xtNamespace')
    expect(xtNamespace.length).to.equal(1)
  })

  it('TEST init classes and properties, should be `true true true true`.', { retries: 5 }, function () {
    expect(container.getAttribute('data-xt-overlay-init')).to.equal(null)
    expect(self.targets[0].classList.contains('on')).to.equal(true)
    expect(self.targets[0].classList.contains('in')).to.equal(true)
    expect(self.targets[0].classList.contains('initial')).to.equal(true)
    expect(self.initial).to.equal(true)
  })

  it('TEST after init classes and properties, should be `true true false false`.', function () {
    cy.frame().then(() => {
      expect(container.getAttribute('data-xt-overlay-init')).to.equal('')
      expect(self.targets[0].classList.contains('on')).to.equal(true)
      expect(self.targets[0].classList.contains('in')).to.equal(true)
      expect(self.targets[0].classList.contains('initial')).to.equal(false)
      expect(self.initial).to.equal(false)
    })
  })

  it('TEST unmount, this should increase by one on changing page and resize.', function () {
    cy.visit('/hidden/test')
      .go(-1)
      .get('.demo--mount-unmount')
      .as('demo')
      .should('be.visible') // @RACECONDITION
      .frame()
      .then(() => {
        cy.viewport('iphone-6')
          .frame()
          .then(() => {
            cy.viewport('macbook-13')
              .frame()
              .then(() => {
                cy.get('@demo').should('have.attr', 'data-test-resize', '2')
              })
          })
      })
  })

  it('TEST unmount should disable on deactivate, should remove from dom overlay.', function () {
    cy.frame().then(() => {
      demo.remove()
      cy.get(self.targets[0]).should('not.exist')
    })
  })

  it('TEST unmount, unmountArr should be the same, xtNamespace should be 0.', function () {
    const count = Xt._unmountArr.length
    expect(Xt.dataStorage.get(self.ns, 'xtNamespace').length).to.equal(1)
    demo.remove()
    cy.frame().then(() => {
      expect(Xt.dataStorage.get(self.ns, 'xtNamespace').length).to.equal(0)
      expect(Xt._unmountArr.length).to.equal(count - 2)
    })
  })
})
