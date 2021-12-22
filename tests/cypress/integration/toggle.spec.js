const url = '/hidden/test/toggle'

describe('demos/components/overlay/usage-self', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit('/demos/components/overlay/usage-self').window().as('win')
    cy.get('.demo--overlay-usage-self').as('demo')
    cy.get('[data-xt-overlay]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    self = Xt.get({ name: 'xt-overlay', el: container })
  })

  it('TEST initial activation and overlay no close clicking inside with eventLimit, close on backdrop click, should close with event `off.xt.trigger.overlay`.', function () {
    expect(win.Xt.visible({ el: self.elements[0] })).to.equal(true)
    expect(self.elements[0].classList.contains('on')).to.equal(true)
    expect(self.elements[0].classList.contains('in')).to.equal(true)
    cy.get(container)
      .find('.xt-overlay-inner')
      .click()
      .then(() => {
        expect(win.Xt.visible({ el: self.elements[0] })).to.equal(true)
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        expect(self.elements[0].classList.contains('in')).to.equal(true)
        cy.get(container)
          .find('.xt-backdrop')
          .click({ force: true })
          .then(() => {
            expect(win.Xt.visible({ el: self.elements[0] })).to.equal(false)
            expect(self.elements[0].classList.contains('on')).to.equal(false)
            expect(self.elements[0].classList.contains('in')).to.equal(false)
            container.dispatchEvent(new CustomEvent('on.trigger.xt.overlay'))
            cy.frame().then(() => {
              expect(win.Xt.visible({ el: self.elements[0] })).to.equal(true)
              expect(self.elements[0].classList.contains('on')).to.equal(true)
              expect(self.elements[0].classList.contains('in')).to.equal(true)
              container.dispatchEvent(new CustomEvent('off.trigger.xt.overlay'))
              cy.frame().then(() => {
                expect(win.Xt.visible({ el: self.elements[0] })).to.equal(false)
                expect(self.elements[0].classList.contains('on')).to.equal(false)
                expect(self.elements[0].classList.contains('in')).to.equal(false)
              })
            })
          })
      })
  })
})
