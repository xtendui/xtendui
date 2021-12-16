const url = '/hidden/test/animation'

describe('demos/components/toggle/animation-queue', function () {
  let win
  let Xt
  let toggle
  let self
  let els
  let trs

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-animation-queue').as('demo')
    cy.get('@demo').find('[data-xt-toggle]').as('toggle')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    toggle = this.toggle[0]
    self = Xt.get({ name: 'xt-toggle', el: toggle })
    els = self.elements
    trs = self.targets
  })

  it('TEST queue activations and should not jump page.', function () {
    cy.get(els[0])
      .click()
      .then(() => {
        expect(win.Xt.visible({ el: trs[0] })).to.equal(true)
        expect(trs[0].classList.contains('on')).to.equal(true)
        expect(trs[0].classList.contains('in')).to.equal(true)
        cy.get(els[1])
          .wait(500) // after animation
          .click()
          .then(() => {
            expect(win.Xt.visible({ el: trs[0] })).to.equal(true)
            expect(trs[0].classList.contains('on')).to.equal(false)
            expect(trs[0].classList.contains('in')).to.equal(false)
            expect(trs[0].classList.contains('out')).to.equal(true)
            expect(win.Xt.visible({ el: trs[1] })).to.equal(false)
            expect(trs[1].classList.contains('on')).to.equal(false)
            expect(trs[1].classList.contains('in')).to.equal(false)
          })
          .wait(500) // after animation
          .then(() => {
            expect(win.Xt.visible({ el: trs[0] })).to.equal(false)
            expect(trs[0].classList.contains('out')).to.equal(false)
            expect(win.Xt.visible({ el: trs[1] })).to.equal(true)
            expect(trs[1].classList.contains('on')).to.equal(true)
            // needs TWO raf or sequential off/on flickr (e.g. backdrop megamenu)
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                expect(trs[1].classList.contains('in')).to.equal(true)
              })
            })
          })
      })
  })
})

describe('demos/components/toggle/animation-noqueue', function () {
  let win
  let Xt
  let toggle
  let self
  let els
  let trs

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-animation-noqueue').as('demo')
    cy.get('@demo').find('[data-xt-toggle]').as('toggle')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    toggle = this.toggle[0]
    self = Xt.get({ name: 'xt-toggle', el: toggle })
    els = self.elements
    trs = self.targets
  })

  it('TEST noqueue activations and should not jump page.', function () {
    cy.get(els[0])
      .click()
      .then(() => {
        expect(win.Xt.visible({ el: trs[0] })).to.equal(true)
        expect(trs[0].classList.contains('on')).to.equal(true)
        expect(trs[0].classList.contains('in')).to.equal(true)
        cy.get(els[1])
          .click()
          .then(() => {
            expect(trs[0].classList.contains('on')).to.equal(false)
            expect(trs[0].classList.contains('in')).to.equal(false)
            expect(trs[0].classList.contains('out')).to.equal(true)
            expect(win.Xt.visible({ el: trs[1] })).to.equal(true)
            expect(trs[1].classList.contains('on')).to.equal(true)
            expect(trs[1].classList.contains('in')).to.equal(true)
          })
          .wait(500) // after animation
          .then(() => {
            expect(win.Xt.visible({ el: trs[0] })).to.equal(false)
            expect(trs[0].classList.contains('out')).to.equal(false)
          })
      })
  })
})

describe('demos/components/toggle/animation-inverse', function () {
  let win
  let Xt
  let toggle
  let self
  let els
  let trs

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-animation-animation-inverse').as('demo')
    cy.get('@demo').find('[data-xt-toggle]').as('toggle')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    toggle = this.toggle[0]
    self = Xt.get({ name: 'xt-toggle', el: toggle })
    els = self.elements
    trs = self.targets
  })

  it('TEST inverse activations and should not jump page.', function () {
    expect(win.Xt.visible({ el: trs[0] })).to.equal(true)
    cy.get(els[0])
      .click()
      .wait(500) // after animation
      .then(() => {
        expect(win.Xt.visible({ el: trs[0] })).to.equal(false)
        expect(trs[0].classList.contains('done')).to.equal(true)
        expect(win.Xt.visible({ el: trs[1] })).to.equal(false)
        cy.get(els[1])
          .click()
          .then(() => {
            expect(win.Xt.visible({ el: trs[0] })).to.equal(true)
            expect(trs[0].classList.contains('done')).to.equal(false)
            expect(win.Xt.visible({ el: trs[1] })).to.equal(true)
          })
      })
  })
})

describe('demos/components/toggle/animation-duration-delay', function () {
  let win
  let Xt
  let toggle
  let self
  let els
  let trs

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-animation-duration-delay').as('demo')
    cy.get('@demo').as('toggle')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    toggle = this.toggle[0]
    self = Xt.get({ name: 'xt-toggle', el: toggle })
    els = self.elements
    trs = self.targets
  })

  it('TEST duration and delay.', function () {
    cy.get(els[0])
      .click()
      .get(els[1])
      .click()
      .wait(800) // after animation
      .then(() => {
        expect(win.Xt.visible({ el: trs[0] })).to.equal(false)
        expect(trs[0].classList.contains('on')).to.equal(false)
        expect(trs[0].classList.contains('in')).to.equal(false)
        expect(trs[3].classList.contains('on')).to.equal(false)
        expect(trs[3].classList.contains('in')).to.equal(false)
        expect(win.Xt.visible({ el: trs[4] })).to.equal(true)
        expect(trs[4].classList.contains('on')).to.equal(true)
        expect(trs[4].classList.contains('in')).to.equal(true)
        expect(trs[7].classList.contains('on')).to.equal(false)
        expect(trs[7].classList.contains('in')).to.equal(false)
        cy.get(els[0])
          .click()
          .wait(800) // after animation
          .then(() => {
            expect(win.Xt.visible({ el: trs[0] })).to.equal(true)
            expect(trs[0].classList.contains('on')).to.equal(true)
            expect(trs[0].classList.contains('in')).to.equal(true)
            expect(trs[3].classList.contains('on')).to.equal(false)
            expect(trs[3].classList.contains('in')).to.equal(false)
            expect(win.Xt.visible({ el: trs[4] })).to.equal(false)
            expect(trs[4].classList.contains('on')).to.equal(false)
            expect(trs[4].classList.contains('in')).to.equal(false)
            expect(trs[7].classList.contains('on')).to.equal(false)
            expect(trs[7].classList.contains('in')).to.equal(false)
            cy.get(els[0])
              .click()
              .wait(800) // after animation
              .then(() => {
                expect(win.Xt.visible({ el: trs[0] })).to.equal(false)
                expect(trs[0].classList.contains('on')).to.equal(false)
                expect(trs[0].classList.contains('in')).to.equal(false)
                expect(trs[3].classList.contains('on')).to.equal(false)
                expect(trs[3].classList.contains('in')).to.equal(false)
                expect(win.Xt.visible({ el: trs[4] })).to.equal(false)
                expect(trs[4].classList.contains('on')).to.equal(false)
                expect(trs[4].classList.contains('in')).to.equal(false)
                expect(trs[7].classList.contains('on')).to.equal(false)
                expect(trs[7].classList.contains('in')).to.equal(false)
              })
          })
      })
  })
})

describe('demos/components/toggle/animation-css', function () {
  let win
  let Xt
  let toggle
  let self
  let els
  let trs

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-animation-css').as('demo')
    cy.get('@demo').find('[data-xt-toggle]').as('toggle')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    toggle = this.toggle[0]
    self = Xt.get({ name: 'xt-toggle', el: toggle })
    els = self.elements
    trs = self.targets
  })

  it('TEST direction.', function () {
    cy.get(els[0])
      .click()
      .wait(500) // after animation
      .then(() => {
        expect(trs[0].classList.contains('on')).to.equal(true)
        expect(trs[0].classList.contains('in')).to.equal(true)
        expect(trs[0].classList.contains('dir-before')).to.equal(false)
        expect(trs[0].classList.contains('dir-after')).to.equal(false)
        cy.get(els[1])
          .click()
          .wait(500) // after animation
          .then(() => {
            expect(trs[0].classList.contains('on')).to.equal(false)
            expect(trs[0].classList.contains('in')).to.equal(false)
            expect(trs[0].classList.contains('dir-before')).to.equal(false)
            expect(trs[0].classList.contains('dir-after')).to.equal(true)
            expect(trs[1].classList.contains('on')).to.equal(true)
            expect(trs[1].classList.contains('in')).to.equal(true)
            expect(trs[1].classList.contains('dir-before')).to.equal(false)
            expect(trs[1].classList.contains('dir-after')).to.equal(true)
            cy.get(els[0])
              .click()
              .wait(1000) // after animation
              .then(() => {
                expect(trs[0].classList.contains('on')).to.equal(true)
                expect(trs[0].classList.contains('in')).to.equal(true)
                expect(trs[0].classList.contains('dir-before')).to.equal(true)
                expect(trs[0].classList.contains('dir-after')).to.equal(false)
                expect(trs[1].classList.contains('on')).to.equal(false)
                expect(trs[1].classList.contains('in')).to.equal(false)
                expect(trs[1].classList.contains('dir-before')).to.equal(true)
                expect(trs[1].classList.contains('dir-after')).to.equal(false)
              })
          })
      })
  })
})

describe('demos/components/toggle/animation-js', function () {
  let win
  let Xt
  let toggle
  let self
  let els
  let trs

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-animation-js').as('demo')
    cy.get('@demo').as('toggle')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    toggle = this.toggle[0]
    self = Xt.get({ name: 'xt-toggle', el: toggle })
    els = self.elements
    trs = self.targets
  })

  it('TEST direction.', function () {
    cy.get(els[0])
      .click()
      .wait(500) // after animation
      .then(() => {
        expect(trs[0].classList.contains('on')).to.equal(true)
        expect(trs[0].classList.contains('in')).to.equal(true)
        expect(self.direction).to.equal(0)
        cy.get(els[1])
          .click()
          .wait(500) // after animation
          .then(() => {
            expect(trs[0].classList.contains('on')).to.equal(false)
            expect(trs[0].classList.contains('in')).to.equal(false)
            expect(self.direction).to.equal(1)
            expect(trs[1].classList.contains('on')).to.equal(true)
            expect(trs[1].classList.contains('in')).to.equal(true)
            cy.get(els[0])
              .click()
              .wait(1000) // after animation
              .then(() => {
                expect(trs[0].classList.contains('on')).to.equal(true)
                expect(trs[0].classList.contains('in')).to.equal(true)
                expect(self.direction).to.equal(-1)
                expect(trs[1].classList.contains('on')).to.equal(false)
                expect(trs[1].classList.contains('in')).to.equal(false)
              })
          })
      })
  })
})
