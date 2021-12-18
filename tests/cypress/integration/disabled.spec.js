const url = '/hidden/test/disabled'

describe('demos/components/toggle/disabled', function () {
  let win
  let Xt
  let toggle
  let toggle1
  let self
  let self1

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-disabled').as('demo')
    cy.get('@demo').find('[data-xt-toggle]').as('toggle')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    toggle = this.toggle[0]
    self = Xt.get({ name: 'xt-toggle', el: toggle })
    toggle1 = this.toggle[1]
    self1 = Xt.get({ name: 'xt-toggle', el: toggle1 })
  })

  it('TEST nested check elements and targets length of nested parent components.', function () {
    expect(self.elements.length).to.equal(2)
    expect(self.targets.length).to.equal(2)
  })

  it('TEST nested should disable only parent and no interactions on disabled.', function () {
    expect(win.Xt.visible({ el: self.targets[0] })).to.equal(false)
    expect(self.targets[0].classList.contains('on')).to.equal(false)
    expect(self.targets[0].classList.contains('in')).to.equal(false)
    expect(win.Xt.visible({ el: self.targets[1] })).to.equal(true)
    expect(self.targets[1].classList.contains('on')).to.equal(true)
    expect(self.targets[1].classList.contains('in')).to.equal(true)
    cy.get(self.elements[0])
      .click()
      .then(() => {
        expect(win.Xt.visible({ el: self.targets[0] })).to.equal(false)
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[0].classList.contains('in')).to.equal(false)
        expect(win.Xt.visible({ el: self.targets[1] })).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('in')).to.equal(true)
        expect(win.Xt.visible({ el: self1.targets[0] })).to.equal(true)
        expect(self1.targets[0].classList.contains('on')).to.equal(true)
        expect(self1.targets[0].classList.contains('in')).to.equal(true)
        expect(win.Xt.visible({ el: self1.targets[1] })).to.equal(false)
        expect(self1.targets[1].classList.contains('on')).to.equal(false)
        expect(self1.targets[1].classList.contains('in')).to.equal(false)
        cy.get(self1.elements[1])
          .click()
          .then(() => {
            expect(win.Xt.visible({ el: self1.targets[0] })).to.equal(false)
            expect(self1.targets[0].classList.contains('on')).to.equal(false)
            expect(self1.targets[0].classList.contains('in')).to.equal(false)
            expect(win.Xt.visible({ el: self1.targets[1] })).to.equal(true)
            expect(self1.targets[1].classList.contains('on')).to.equal(true)
            expect(self1.targets[1].classList.contains('in')).to.equal(true)
          })
      })
  })
})

describe('demos/components/overlay/disabled', function () {
  let win
  let Xt
  let overlay
  let overlay1
  let self
  let self1

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--overlay-disable').as('demo')
    cy.get('@demo').find('[data-xt-overlay]').as('overlay')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    overlay = this.overlay[0]
    self = Xt.get({ name: 'xt-overlay', el: overlay })
    overlay1 = this.overlay[1]
    self1 = Xt.get({ name: 'xt-overlay', el: overlay1 })
  })

  it('TEST overlay nested classBody and desktop is disabled > resize mobile is enabled > open > resize desktop is disabled and closed.', function () {
    expect(win.Xt.visible({ el: self.targets[0] })).to.equal(true)
    expect(overlay.getAttribute('data-xt-overlay-disabled')).to.equal('')
    expect(win.Xt.visible({ el: self1.targets[0] })).to.equal(false)
    expect(overlay1.getAttribute('data-xt-overlay-disabled')).to.equal(null)
    cy.viewport('iphone-6')
      .get(self.elements[0])
      .click()
      .get(self1.elements[0])
      .click()
      .get(overlay)
      .should('have.not.attr', 'data-xt-overlay-disabled') // @RACECONDITION
      .frame()
      .then(() => {
        expect(overlay.getAttribute('data-xt-overlay-disabled')).to.equal(null)
        expect(overlay.closest('body')).to.have.class('xt-scrollbar-overlay')
        cy.get(self1.targets[0].querySelector('.xt-dismiss'))
          .click()
          .then(() => {
            expect(overlay.closest('body')).to.have.class('xt-scrollbar-overlay')
            cy.get(self.targets[0].querySelector('.xt-dismiss'))
              .click()
              .then(() => {
                expect(overlay.closest('body')).to.not.have.class('xt-scrollbar-overlay')
                cy.get(self.elements[0])
                  .click()
                  .viewport('macbook-13')
                  .get(overlay)
                  .should('have.attr', 'data-xt-overlay-disabled', '') // @RACECONDITION
                  .frame()
                  .then(() => {
                    expect(win.Xt.visible({ el: self.targets[0] })).to.equal(true)
                    expect(overlay.getAttribute('data-xt-overlay-disabled')).to.equal('')
                    expect(win.Xt.visible({ el: self1.targets[0] })).to.equal(false)
                    expect(overlay1.getAttribute('data-xt-overlay-disabled')).to.equal(null)
                    expect(overlay.closest('body')).to.not.have.class('xt-scrollbar-overlay')
                  })
              })
          })
      })
  })
})

describe('demos/components/slider/disabled', function () {
  let win
  let Xt
  let slider
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-disabled').as('demo')
    cy.get('@demo').find('[data-xt-slider]').as('slider')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    slider = this.slider[0]
    self = Xt.get({ name: 'xt-slider', el: slider })
  })

  it('TEST slider instant position and wrap on resize and activation on resize.', function () {
    expect(self.targets[4].getAttribute('data-xt-slider-disabled')).to.equal('')
    expect(self.targets[4].classList.contains('on')).to.equal(true)
    expect(self.targets[5].classList.contains('on')).to.equal(true)
    cy.then(() => {
      expect(self.targets[4].classList.contains('in')).to.equal(true)
      expect(self.targets[5].classList.contains('in')).to.equal(true)
      expect(slider.querySelector('.xt-slides').style.transform).to.equal('translateX(-1376px)')
      cy.viewport('iphone-6')
        .get(slider)
        .should('have.not.attr', 'data-xt-slider-disabled') // @RACECONDITION
        .frame()
        .then(() => {
          expect(self.targets[4].getAttribute('data-xt-slider-disabled')).to.equal(null)
          expect(self.targets[4].classList.contains('on')).to.equal(true)
          expect(self.targets[4].classList.contains('in')).to.equal(true)
          expect(self.targets[5].classList.contains('on')).to.equal(false)
          expect(self.targets[5].classList.contains('in')).to.equal(false)
          expect(slider.querySelector('.xt-slides').style.transform).to.equal('translateX(-733px)')
          cy.get(self.elements[6])
            .click()
            .then(() => {
              expect(self.targets[0].style.transform).to.equal('translateX(1313.5px)')
            })
        })
    })
  })
})

describe('demos/components/toggle/matches', function () {
  let win
  let Xt
  let toggle
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-matches').as('demo')
    cy.get('@demo').find('[data-xt-toggle]').as('toggle')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    toggle = this.toggle[0]
    self = Xt.get({ name: 'xt-toggle', el: toggle })
  })

  it.only('TEST slider instant position and wrap on resize and activation on resize.', function () {
    expect(win.Xt.visible({ el: self.targets[0] })).to.equal(true)
    expect(self.targets[0].classList.contains('on')).to.equal(true)
    expect(self.targets[0].classList.contains('in')).to.equal(true)
    expect(win.Xt.visible({ el: self.targets[1] })).to.equal(false)
    expect(self.targets[1].classList.contains('on')).to.equal(false)
    expect(self.targets[1].classList.contains('in')).to.equal(false)
    cy.get(self.elements[1])
      .click()
      .then(() => {
        expect(self.options.max).to.equal(2)
        expect(win.Xt.visible({ el: self.targets[0] })).to.equal(true)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('in')).to.equal(true)
        expect(win.Xt.visible({ el: self.targets[1] })).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('in')).to.equal(true)
        cy.viewport('iphone-6')
          .get(self.targets[1])
          .should('have.not.class', 'on') // @RACECONDITION
          .frame()
          .then(() => {
            expect(self.options.max).to.equal(1)
            expect(win.Xt.visible({ el: self.targets[0] })).to.equal(true)
            expect(self.targets[0].classList.contains('on')).to.equal(true)
            expect(self.targets[0].classList.contains('in')).to.equal(true)
            expect(win.Xt.visible({ el: self.targets[1] })).to.equal(false)
            expect(self.targets[1].classList.contains('on')).to.equal(false)
            expect(self.targets[1].classList.contains('in')).to.equal(false)
          })
      })
  })
})
