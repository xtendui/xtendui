describe('demos/hidden/test/mount-unmount', function () {
  let win
  let Xt
  let demo
  let overlay
  let self

  beforeEach(function () {
    cy.visit('/hidden/test/other')
    cy.window().as('win')
    cy.get('.demo--mount-unmount').as('demo')
    cy.get('@demo').find('[data-xt-overlay]').as('overlay')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    demo = this.demo[0]
    overlay = this.overlay[0]
    self = Xt.get({ name: 'xt-overlay', el: overlay })
  })

  it('TEST mount root once this should be 1 on init and should remain 1 on deactivation.', function () {
    expect(demo.getAttribute('data-test-mountroot')).to.equal('1')
    overlay.dispatchEvent(new CustomEvent('off.trigger.xt.overlay'))
    expect(demo.getAttribute('data-test-mountroot')).to.equal('1')
  })

  it('TEST init xtNamespace should be 1.', function () {
    const xtNamespace = Xt.dataStorage.get(self.ns, 'xtNamespace')
    expect(xtNamespace.length).to.equal(1)
  })

  it('TEST init classes and properties should be `true true true true`.', function () {
    for (const tr of self.targets.filter(x => self.hasCurrent({ el: x }))) {
      expect(tr.classList.contains('on')).to.equal(true)
      expect(tr.classList.contains('in')).to.equal(true)
      expect(tr.classList.contains('initial')).to.equal(true)
    }
    expect(self.initial).to.equal(true)
  })

  it('TEST after init classes and properties should be `true true false false`.', function () {
    requestAnimationFrame(() => {
      for (const tr of self.targets.filter(x => self.hasCurrent({ el: x }))) {
        expect(tr.classList.contains('on')).to.equal(true)
        expect(tr.classList.contains('in')).to.equal(true)
        expect(tr.classList.contains('initial')).to.equal(false)
      }
      expect(self.initial).to.equal(false)
    })
  })
})
