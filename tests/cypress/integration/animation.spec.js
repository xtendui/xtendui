const url = '/hidden/test/animation'

describe('demos/components/toggle/animation-queue', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-animation-queue').as('demo')
    cy.get('@demo').find('[data-xt-toggle]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    self = Xt.get({ name: 'xt-toggle', el: container })
  })

  it('TEST queue activations and should not jump page.', function () {
    cy.get(self.elements[0])
      .click()
      .then(() => {
        expect(win.Xt.visible({ el: self.targets[0] })).to.equal(true)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('in')).to.equal(true)
        cy.get(self.elements[1])
          .wait(500) // after animation
          .click()
          .then(() => {
            expect(win.Xt.visible({ el: self.targets[0] })).to.equal(true)
            expect(self.targets[0].classList.contains('on')).to.equal(false)
            expect(self.targets[0].classList.contains('in')).to.equal(false)
            expect(self.targets[0].classList.contains('out')).to.equal(true)
            expect(win.Xt.visible({ el: self.targets[1] })).to.equal(false)
            expect(self.targets[1].classList.contains('on')).to.equal(false)
            expect(self.targets[1].classList.contains('in')).to.equal(false)
          })
          .wait(500) // after animation
          .then(() => {
            expect(win.Xt.visible({ el: self.targets[0] })).to.equal(false)
            expect(self.targets[0].classList.contains('out')).to.equal(false)
            expect(win.Xt.visible({ el: self.targets[1] })).to.equal(true)
            expect(self.targets[1].classList.contains('on')).to.equal(true)
            // needs TWO raf or sequential off/on flickr (e.g. backdrop megamenu)
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                expect(self.targets[1].classList.contains('in')).to.equal(true)
              })
            })
          })
      })
  })
})

describe('demos/components/toggle/animation-noqueue', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-animation-noqueue').as('demo')
    cy.get('@demo').find('[data-xt-toggle]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    self = Xt.get({ name: 'xt-toggle', el: container })
  })

  it('TEST noqueue activations and should not jump page.', function () {
    cy.get(self.elements[0])
      .click()
      .then(() => {
        expect(win.Xt.visible({ el: self.targets[0] })).to.equal(true)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('in')).to.equal(true)
        cy.get(self.elements[1])
          .click()
          .then(() => {
            expect(self.targets[0].classList.contains('on')).to.equal(false)
            expect(self.targets[0].classList.contains('in')).to.equal(false)
            expect(self.targets[0].classList.contains('out')).to.equal(true)
            expect(win.Xt.visible({ el: self.targets[1] })).to.equal(true)
            expect(self.targets[1].classList.contains('on')).to.equal(true)
            expect(self.targets[1].classList.contains('in')).to.equal(true)
          })
          .wait(500) // after animation
          .then(() => {
            expect(win.Xt.visible({ el: self.targets[0] })).to.equal(false)
            expect(self.targets[0].classList.contains('out')).to.equal(false)
          })
      })
  })
})

describe('demos/components/toggle/animation-inverse', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-animation-animation-inverse').as('demo')
    cy.get('@demo').find('[data-xt-toggle]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    self = Xt.get({ name: 'xt-toggle', el: container })
  })

  it('TEST inverse activations and should not jump page.', function () {
    expect(win.Xt.visible({ el: self.targets[0] })).to.equal(true)
    cy.get(self.elements[0])
      .click()
      .wait(500) // after animation
      .then(() => {
        expect(win.Xt.visible({ el: self.targets[0] })).to.equal(false)
        expect(self.targets[0].classList.contains('done')).to.equal(true)
        expect(win.Xt.visible({ el: self.targets[1] })).to.equal(false)
        cy.get(self.elements[1])
          .click()
          .then(() => {
            expect(win.Xt.visible({ el: self.targets[0] })).to.equal(true)
            expect(self.targets[0].classList.contains('done')).to.equal(false)
            expect(win.Xt.visible({ el: self.targets[1] })).to.equal(true)
          })
      })
  })
})

describe('demos/components/toggle/animation-duration-delay', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-animation-duration-delay').as('demo')
    cy.get('@demo').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    self = Xt.get({ name: 'xt-toggle', el: container })
  })

  it.only('TEST duration and delay.', function () {
    cy.get(self.elements[0])
      .click()
      .then(() => {
        expect(win.Xt.visible({ el: self.targets[0] })).to.equal(true)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('in')).to.equal(true)
        cy.get(self.elements[1])
          .click()
          .wait(750) // after animation
          .then(() => {
            expect(win.Xt.visible({ el: self.targets[0] })).to.equal(false)
            expect(self.targets[3].classList.contains('on')).to.equal(false)
            expect(self.targets[3].classList.contains('in')).to.equal(false)
            expect(win.Xt.visible({ el: self.targets[4] })).to.equal(true)
            expect(self.targets[4].classList.contains('on')).to.equal(true)
            expect(self.targets[4].classList.contains('in')).to.equal(true)
            cy.get(self.elements[0])
              .click()
              .wait(750) // after animation
              .then(() => {
                expect(win.Xt.visible({ el: self.targets[0] })).to.equal(true)
                expect(self.targets[0].classList.contains('on')).to.equal(true)
                expect(self.targets[0].classList.contains('in')).to.equal(true)
                expect(win.Xt.visible({ el: self.targets[4] })).to.equal(false)
                expect(self.targets[7].classList.contains('on')).to.equal(false)
                expect(self.targets[7].classList.contains('in')).to.equal(false)
                cy.get(self.elements[0])
                  .click()
                  .wait(750) // after animation
                  .then(() => {
                    expect(win.Xt.visible({ el: self.targets[0] })).to.equal(false)
                    expect(self.targets[0].classList.contains('on')).to.equal(false)
                    expect(self.targets[0].classList.contains('in')).to.equal(false)
                    expect(self.targets[3].classList.contains('on')).to.equal(false)
                    expect(self.targets[3].classList.contains('in')).to.equal(false)
                    expect(win.Xt.visible({ el: self.targets[4] })).to.equal(false)
                    expect(self.targets[4].classList.contains('on')).to.equal(false)
                    expect(self.targets[4].classList.contains('in')).to.equal(false)
                    expect(self.targets[7].classList.contains('on')).to.equal(false)
                    expect(self.targets[7].classList.contains('in')).to.equal(false)
                  })
              })
          })
      })
  })
})

describe('demos/components/toggle/animation-css', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-animation-css').as('demo')
    cy.get('@demo').find('[data-xt-toggle]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    self = Xt.get({ name: 'xt-toggle', el: container })
  })

  it('TEST activation and direction.', function () {
    cy.get(self.elements[0])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('in')).to.equal(true)
        expect(self.targets[0].classList.contains('dir-before')).to.equal(false)
        expect(self.targets[0].classList.contains('dir-after')).to.equal(false)
        cy.get(self.elements[1])
          .click()
          .wait(1000) // after animation
          .then(() => {
            expect(self.targets[0].classList.contains('on')).to.equal(false)
            expect(self.targets[0].classList.contains('in')).to.equal(false)
            expect(self.targets[0].classList.contains('dir-before')).to.equal(false)
            expect(self.targets[0].classList.contains('dir-after')).to.equal(true)
            expect(self.targets[1].classList.contains('on')).to.equal(true)
            expect(self.targets[1].classList.contains('in')).to.equal(true)
            expect(self.targets[1].classList.contains('dir-before')).to.equal(false)
            expect(self.targets[1].classList.contains('dir-after')).to.equal(true)
            cy.get(self.elements[0])
              .click()
              .wait(1000) // after animation
              .then(() => {
                expect(self.targets[0].classList.contains('on')).to.equal(true)
                expect(self.targets[0].classList.contains('in')).to.equal(true)
                expect(self.targets[0].classList.contains('dir-before')).to.equal(true)
                expect(self.targets[0].classList.contains('dir-after')).to.equal(false)
                expect(self.targets[1].classList.contains('on')).to.equal(false)
                expect(self.targets[1].classList.contains('in')).to.equal(false)
                expect(self.targets[1].classList.contains('dir-before')).to.equal(true)
                expect(self.targets[1].classList.contains('dir-after')).to.equal(false)
              })
          })
      })
  })
})

describe('demos/components/slider/animation-css', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-animation-css').as('demo')
    cy.get('@demo').find('[data-xt-slider]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    self = Xt.get({ name: 'xt-slider', el: container })
  })

  it('TEST slider should not deactivate and reactivate.', function () {
    expect(self.targets[1].classList.contains('on')).to.equal(true)
    cy.frame().then(() => {
      expect(self.targets[1].classList.contains('in')).to.equal(true)
    })
    cy.get(self.elements[1])
      .click()
      .then(() => {
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('in')).to.equal(true)
        expect(self.targets[1].classList.contains('out')).to.equal(false)
      })
      .frame()
      .then(() => {
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('in')).to.equal(true)
        expect(self.targets[1].classList.contains('out')).to.equal(false)
      })
  })
})

describe('demos/components/toggle/animation-js', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-animation-js').as('demo')
    cy.get('@demo').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    self = Xt.get({ name: 'xt-toggle', el: container })
  })

  it('TEST activation and direction.', function () {
    cy.get(self.elements[0])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('in')).to.equal(true)
        expect(self.direction).to.equal(0)
        cy.get(self.elements[1])
          .click()
          .wait(1000) // after animation
          .then(() => {
            expect(self.targets[0].classList.contains('on')).to.equal(false)
            expect(self.targets[0].classList.contains('in')).to.equal(false)
            expect(self.direction).to.equal(1)
            expect(self.targets[1].classList.contains('on')).to.equal(true)
            expect(self.targets[1].classList.contains('in')).to.equal(true)
            cy.get(self.elements[0])
              .click()
              .wait(1000) // after animation
              .then(() => {
                expect(self.targets[0].classList.contains('on')).to.equal(true)
                expect(self.targets[0].classList.contains('in')).to.equal(true)
                expect(self.direction).to.equal(-1)
                expect(self.targets[1].classList.contains('on')).to.equal(false)
                expect(self.targets[1].classList.contains('in')).to.equal(false)
              })
          })
      })
  })
})

describe('demos/components/slider/animation-js', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-animation-js').as('demo')
    cy.get('@demo').find('.xt-slider').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    self = Xt.get({ name: 'xt-slider', el: container })
  })

  it('TEST slider should not deactivate and reactivate.', function () {
    cy.wait(500) // after animation
      .then(() => {
        expect(self.targets[1].querySelector('[data-node-target-content]').style.transform).to.equal(
          'translate(0px, 0px)'
        )
      })
    cy.get(self.elements[1])
      .click()
      .then(() => {
        expect(self.targets[1].querySelector('[data-node-target-content]').style.transform).to.equal(
          'translate(0px, 0px)'
        )
      })
      .frame()
      .then(() => {
        expect(self.targets[1].querySelector('[data-node-target-content]').style.transform).to.equal(
          'translate(0px, 0px)'
        )
      })
  })
})

describe('demos/components/toggle/animation-collapse-initial', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--collapse-initial').as('demo')
    cy.get('@demo').find('[data-xt-toggle]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    self = Xt.get({ name: 'xt-toggle', el: container })
  })

  it('TEST height and maxHeight styles on activation and deactivation.', function () {
    cy.get(self.elements[0])
      .click()
      .then(() => {
        expect(self.targets[0].style.height).to.contains('px')
        expect(self.targets[0].style.maxHeight).to.equal('none')
        cy.wait(500) // after animation
          .then(() => {
            expect(self.targets[0].style.height).to.equal('inherit')
            expect(self.targets[0].style.maxHeight).to.equal('none')
          })
          .get(self.elements[0])
          .click()
          .then(() => {
            expect(self.targets[0].style.height).to.contains('px')
            expect(self.targets[0].style.maxHeight).to.equal('none')
            cy.wait(500) // after animation
              .then(() => {
                expect(self.targets[0].style.height).to.equal('')
                expect(self.targets[0].style.maxHeight).to.equal('')
              })
          })
      })
  })
})
