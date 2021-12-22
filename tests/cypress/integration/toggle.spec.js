const url = '/hidden/test/toggle'

describe('demos/components/overlay/usage-self', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit('/demos/components/overlay/usage-self').window().as('win')
    cy.get('.demo--overlay-usage-self').as('demo')
    cy.get('[data-xt-overlay]').as('container') // not .get('@demo') because [data-xt-overlay] is already appended to body
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

describe('demos/components/toggle/class', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-class').as('demo')
    cy.get('@demo').find('[data-xt-toggle]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    self = Xt.get({ name: 'xt-toggle', el: container })
  })

  it('TEST initial group activation, min max activation.', function () {
    expect(self.elements[0].classList.contains('on')).to.equal(true)
    expect(self.elements[0].classList.contains('in')).to.equal(true)
    expect(self.elements[1].classList.contains('on')).to.equal(false)
    expect(self.elements[1].classList.contains('in')).to.equal(false)
    expect(self.elements[2].classList.contains('on')).to.equal(true)
    expect(self.elements[2].classList.contains('in')).to.equal(true)
    expect(self.elements[3].classList.contains('on')).to.equal(true)
    expect(self.elements[3].classList.contains('in')).to.equal(true)
    expect(self.elements[4].classList.contains('on')).to.equal(false)
    expect(self.elements[4].classList.contains('in')).to.equal(false)
    expect(self.elements[5].classList.contains('on')).to.equal(false)
    expect(self.elements[5].classList.contains('in')).to.equal(false)
    expect(self.targets[0].classList.contains('on')).to.equal(false)
    expect(self.targets[0].classList.contains('in')).to.equal(false)
    expect(self.targets[1].classList.contains('on')).to.equal(true)
    expect(self.targets[1].classList.contains('in')).to.equal(true)
    expect(self.targets[2].classList.contains('on')).to.equal(false)
    expect(self.targets[2].classList.contains('in')).to.equal(false)
    expect(self.targets[3].classList.contains('on')).to.equal(false)
    expect(self.targets[3].classList.contains('in')).to.equal(false)
    expect(self.targets[4].classList.contains('on')).to.equal(true)
    expect(self.targets[4].classList.contains('in')).to.equal(true)
    expect(self.targets[5].classList.contains('on')).to.equal(true)
    expect(self.targets[5].classList.contains('in')).to.equal(true)
    cy.get(self.elements[1])
      .click()
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        expect(self.elements[0].classList.contains('in')).to.equal(true)
        expect(self.elements[1].classList.contains('on')).to.equal(true)
        expect(self.elements[1].classList.contains('in')).to.equal(true)
        expect(self.elements[2].classList.contains('on')).to.equal(true)
        expect(self.elements[2].classList.contains('in')).to.equal(true)
        expect(self.elements[3].classList.contains('on')).to.equal(false)
        expect(self.elements[3].classList.contains('in')).to.equal(false)
        expect(self.elements[4].classList.contains('on')).to.equal(false)
        expect(self.elements[4].classList.contains('in')).to.equal(false)
        expect(self.elements[5].classList.contains('on')).to.equal(false)
        expect(self.elements[5].classList.contains('in')).to.equal(false)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('in')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('in')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('in')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('in')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('in')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        expect(self.targets[5].classList.contains('in')).to.equal(true)
      })
  })
})

describe('demos/components/toggle/multiple-group', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-multiple-group').as('demo')
    cy.get('@demo').find('[data-xt-toggle]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    self = Xt.get({ name: 'xt-toggle', el: container })
  })

  it('TEST group activation.', function () {
    cy.get(self.elements[0])
      .click()
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        expect(self.elements[0].classList.contains('in')).to.equal(true)
        expect(self.elements[1].classList.contains('on')).to.equal(false)
        expect(self.elements[1].classList.contains('in')).to.equal(false)
        expect(self.elements[2].classList.contains('on')).to.equal(true)
        expect(self.elements[2].classList.contains('in')).to.equal(true)
        expect(self.elements[3].classList.contains('on')).to.equal(false)
        expect(self.elements[3].classList.contains('in')).to.equal(false)
        expect(self.elements[4].classList.contains('on')).to.equal(false)
        expect(self.elements[4].classList.contains('in')).to.equal(false)
        expect(self.elements[5].classList.contains('on')).to.equal(false)
        expect(self.elements[5].classList.contains('in')).to.equal(false)
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[0].classList.contains('in')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('in')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('in')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('in')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('in')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        expect(self.targets[5].classList.contains('in')).to.equal(true)
        cy.get(self.elements[5])
          .click()
          .then(() => {
            expect(self.elements[0].classList.contains('on')).to.equal(false)
            expect(self.elements[0].classList.contains('in')).to.equal(false)
            expect(self.elements[1].classList.contains('on')).to.equal(false)
            expect(self.elements[1].classList.contains('in')).to.equal(false)
            expect(self.elements[2].classList.contains('on')).to.equal(false)
            expect(self.elements[2].classList.contains('in')).to.equal(false)
            expect(self.elements[3].classList.contains('on')).to.equal(false)
            expect(self.elements[3].classList.contains('in')).to.equal(false)
            expect(self.elements[4].classList.contains('on')).to.equal(false)
            expect(self.elements[4].classList.contains('in')).to.equal(false)
            expect(self.elements[5].classList.contains('on')).to.equal(true)
            expect(self.elements[5].classList.contains('in')).to.equal(true)
            expect(self.targets[0].classList.contains('on')).to.equal(false)
            expect(self.targets[0].classList.contains('in')).to.equal(false)
            expect(self.targets[1].classList.contains('on')).to.equal(true)
            expect(self.targets[1].classList.contains('in')).to.equal(true)
            expect(self.targets[2].classList.contains('on')).to.equal(true)
            expect(self.targets[2].classList.contains('in')).to.equal(true)
            expect(self.targets[3].classList.contains('on')).to.equal(true)
            expect(self.targets[3].classList.contains('in')).to.equal(true)
            expect(self.targets[4].classList.contains('on')).to.equal(false)
            expect(self.targets[4].classList.contains('in')).to.equal(false)
            expect(self.targets[5].classList.contains('on')).to.equal(true)
            expect(self.targets[5].classList.contains('in')).to.equal(true)
          })
      })
  })
})

describe('demos/components/toggle/multiple-nogroupelements', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-multiple-nogroupelements').as('demo')
    cy.get('@demo').find('[data-xt-toggle]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    self = Xt.get({ name: 'xt-toggle', el: container })
  })

  it('TEST group activation.', function () {
    cy.get(self.elements[0])
      .click()
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        expect(self.elements[0].classList.contains('in')).to.equal(true)
        expect(self.elements[1].classList.contains('on')).to.equal(false)
        expect(self.elements[1].classList.contains('in')).to.equal(false)
        expect(self.elements[2].classList.contains('on')).to.equal(false)
        expect(self.elements[2].classList.contains('in')).to.equal(false)
        expect(self.elements[3].classList.contains('on')).to.equal(false)
        expect(self.elements[3].classList.contains('in')).to.equal(false)
        expect(self.elements[4].classList.contains('on')).to.equal(false)
        expect(self.elements[4].classList.contains('in')).to.equal(false)
        expect(self.elements[5].classList.contains('on')).to.equal(false)
        expect(self.elements[5].classList.contains('in')).to.equal(false)
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[0].classList.contains('in')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('in')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('in')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('in')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('in')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        expect(self.targets[5].classList.contains('in')).to.equal(true)
        cy.get(self.elements[5])
          .click()
          .then(() => {
            expect(self.elements[0].classList.contains('on')).to.equal(false)
            expect(self.elements[0].classList.contains('in')).to.equal(false)
            expect(self.elements[1].classList.contains('on')).to.equal(false)
            expect(self.elements[1].classList.contains('in')).to.equal(false)
            expect(self.elements[2].classList.contains('on')).to.equal(false)
            expect(self.elements[2].classList.contains('in')).to.equal(false)
            expect(self.elements[3].classList.contains('on')).to.equal(false)
            expect(self.elements[3].classList.contains('in')).to.equal(false)
            expect(self.elements[4].classList.contains('on')).to.equal(false)
            expect(self.elements[4].classList.contains('in')).to.equal(false)
            expect(self.elements[5].classList.contains('on')).to.equal(true)
            expect(self.elements[5].classList.contains('in')).to.equal(true)
            expect(self.targets[0].classList.contains('on')).to.equal(false)
            expect(self.targets[0].classList.contains('in')).to.equal(false)
            expect(self.targets[1].classList.contains('on')).to.equal(true)
            expect(self.targets[1].classList.contains('in')).to.equal(true)
            expect(self.targets[2].classList.contains('on')).to.equal(true)
            expect(self.targets[2].classList.contains('in')).to.equal(true)
            expect(self.targets[3].classList.contains('on')).to.equal(true)
            expect(self.targets[3].classList.contains('in')).to.equal(true)
            expect(self.targets[4].classList.contains('on')).to.equal(false)
            expect(self.targets[4].classList.contains('in')).to.equal(false)
            expect(self.targets[5].classList.contains('on')).to.equal(true)
            expect(self.targets[5].classList.contains('in')).to.equal(true)
          })
      })
  })
})
