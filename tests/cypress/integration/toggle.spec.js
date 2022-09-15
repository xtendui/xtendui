const url = '/hidden/test/toggle-test'

describe('demos/components/overlay/usage-self', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit('/demos/components/overlay/usage-self').window().as('win')
    cy.get('[data-xt-overlay]').as('container') // not .get('@demo')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-overlay', el: container })
  })

  it('TEST initial activation, overlay no close clicking inside with eventLimit, close on backdrop click, should close with event `off.xt.trigger.overlay`.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-overlay-init', '') // racecondition
      .then(() => {
        expect(win.Xt.visible({ el: self.elements[0] })).to.equal(true)
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(true)
        })
      })
      .get(container)
      .find('.xt-overlay-inner')
      .click()
      .then(() => {
        expect(win.Xt.visible({ el: self.elements[0] })).to.equal(true)
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(true)
        })
      })
      .get(container)
      .find('.xt-backdrop')
      .click({ force: true })
      .then(() => {
        expect(win.Xt.visible({ el: self.elements[0] })).to.equal(false)
        expect(self.elements[0].classList.contains('on')).to.equal(false)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(false)
          container.dispatchEvent(new CustomEvent('on.trigger.xt.overlay'))
        })
      })
      .frame()
      .then(() => {
        expect(win.Xt.visible({ el: self.elements[0] })).to.equal(true)
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(true)
          container.dispatchEvent(new CustomEvent('off.trigger.xt.overlay'))
        })
      })
      .frame()
      .then(() => {
        expect(win.Xt.visible({ el: self.elements[0] })).to.equal(false)
        expect(self.elements[0].classList.contains('on')).to.equal(false)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(false)
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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-toggle', el: container })
  })

  it('TEST initial group activation, min max activation.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-toggle-init', '') // racecondition
      .then(() => {
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
      })
      .get(self.elements[1])
      .click()
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        expect(self.elements[1].classList.contains('on')).to.equal(true)
        expect(self.elements[2].classList.contains('on')).to.equal(true)
        expect(self.elements[3].classList.contains('on')).to.equal(false)
        expect(self.elements[4].classList.contains('on')).to.equal(false)
        expect(self.elements[5].classList.contains('on')).to.equal(false)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(true)
          expect(self.elements[1].classList.contains('in')).to.equal(true)
          expect(self.elements[2].classList.contains('in')).to.equal(true)
          expect(self.elements[3].classList.contains('in')).to.equal(false)
          expect(self.elements[4].classList.contains('in')).to.equal(false)
          expect(self.elements[5].classList.contains('in')).to.equal(false)
          expect(self.targets[0].classList.contains('in')).to.equal(true)
          expect(self.targets[1].classList.contains('in')).to.equal(true)
          expect(self.targets[2].classList.contains('in')).to.equal(false)
          expect(self.targets[3].classList.contains('in')).to.equal(false)
          expect(self.targets[4].classList.contains('in')).to.equal(false)
          expect(self.targets[5].classList.contains('in')).to.equal(true)
        })
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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-toggle', el: container })
  })

  it('TEST group activation.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-toggle-init', '') // racecondition
      .get(self.elements[0])
      .click()
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        expect(self.elements[1].classList.contains('on')).to.equal(false)
        expect(self.elements[2].classList.contains('on')).to.equal(true)
        expect(self.elements[3].classList.contains('on')).to.equal(false)
        expect(self.elements[4].classList.contains('on')).to.equal(false)
        expect(self.elements[5].classList.contains('on')).to.equal(false)
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(true)
          expect(self.elements[1].classList.contains('in')).to.equal(false)
          expect(self.elements[2].classList.contains('in')).to.equal(true)
          expect(self.elements[3].classList.contains('in')).to.equal(false)
          expect(self.elements[4].classList.contains('in')).to.equal(false)
          expect(self.elements[5].classList.contains('in')).to.equal(false)
          expect(self.targets[0].classList.contains('in')).to.equal(false)
          expect(self.targets[1].classList.contains('in')).to.equal(true)
          expect(self.targets[2].classList.contains('in')).to.equal(false)
          expect(self.targets[3].classList.contains('in')).to.equal(false)
          expect(self.targets[4].classList.contains('in')).to.equal(false)
          expect(self.targets[5].classList.contains('in')).to.equal(true)
        })
      })
      .get(self.elements[5])
      .click()
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(false)
        expect(self.elements[1].classList.contains('on')).to.equal(false)
        expect(self.elements[2].classList.contains('on')).to.equal(false)
        expect(self.elements[3].classList.contains('on')).to.equal(false)
        expect(self.elements[4].classList.contains('on')).to.equal(false)
        expect(self.elements[5].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(true)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(false)
          expect(self.elements[1].classList.contains('in')).to.equal(false)
          expect(self.elements[2].classList.contains('in')).to.equal(false)
          expect(self.elements[3].classList.contains('in')).to.equal(false)
          expect(self.elements[4].classList.contains('in')).to.equal(false)
          expect(self.elements[5].classList.contains('in')).to.equal(true)
          expect(self.targets[0].classList.contains('in')).to.equal(false)
          expect(self.targets[1].classList.contains('in')).to.equal(true)
          expect(self.targets[2].classList.contains('in')).to.equal(true)
          expect(self.targets[3].classList.contains('in')).to.equal(true)
          expect(self.targets[4].classList.contains('in')).to.equal(false)
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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-toggle', el: container })
  })

  it('TEST group activation.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-toggle-init', '') // racecondition
      .get(self.elements[0])
      .click()
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        expect(self.elements[1].classList.contains('on')).to.equal(false)
        expect(self.elements[2].classList.contains('on')).to.equal(false)
        expect(self.elements[3].classList.contains('on')).to.equal(false)
        expect(self.elements[4].classList.contains('on')).to.equal(false)
        expect(self.elements[5].classList.contains('on')).to.equal(false)
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(true)
          expect(self.elements[1].classList.contains('in')).to.equal(false)
          expect(self.elements[2].classList.contains('in')).to.equal(false)
          expect(self.elements[3].classList.contains('in')).to.equal(false)
          expect(self.elements[4].classList.contains('in')).to.equal(false)
          expect(self.elements[5].classList.contains('in')).to.equal(false)
          expect(self.targets[0].classList.contains('in')).to.equal(false)
          expect(self.targets[1].classList.contains('in')).to.equal(true)
          expect(self.targets[2].classList.contains('in')).to.equal(false)
          expect(self.targets[3].classList.contains('in')).to.equal(false)
          expect(self.targets[4].classList.contains('in')).to.equal(false)
          expect(self.targets[5].classList.contains('in')).to.equal(true)
        })
      })
      .get(self.elements[5])
      .click()
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(false)
        expect(self.elements[1].classList.contains('on')).to.equal(false)
        expect(self.elements[2].classList.contains('on')).to.equal(false)
        expect(self.elements[3].classList.contains('on')).to.equal(false)
        expect(self.elements[4].classList.contains('on')).to.equal(false)
        expect(self.elements[5].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(true)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(false)
          expect(self.elements[1].classList.contains('in')).to.equal(false)
          expect(self.elements[2].classList.contains('in')).to.equal(false)
          expect(self.elements[3].classList.contains('in')).to.equal(false)
          expect(self.elements[4].classList.contains('in')).to.equal(false)
          expect(self.elements[5].classList.contains('in')).to.equal(true)
          expect(self.targets[0].classList.contains('in')).to.equal(false)
          expect(self.targets[1].classList.contains('in')).to.equal(true)
          expect(self.targets[2].classList.contains('in')).to.equal(true)
          expect(self.targets[3].classList.contains('in')).to.equal(true)
          expect(self.targets[4].classList.contains('in')).to.equal(false)
          expect(self.targets[5].classList.contains('in')).to.equal(true)
        })
      })
  })
})

describe('demos/components/toggle/event', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-event').as('demo')
    cy.get('@demo').find('[data-xt-toggle]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-toggle', el: container })
  })

  it('TEST should not close when mouseenter > click or mouseleave > mouseenter active elements.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-toggle-init', '') // racecondition
      .get(self.elements[0])
      .trigger('mouseenter')
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(true)
          expect(self.targets[0].classList.contains('in')).to.equal(true)
        })
      })
      .get(self.elements[0])
      .trigger('click')
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(true)
          expect(self.targets[0].classList.contains('in')).to.equal(true)
        })
      })
      .get(self.elements[0])
      .trigger('mouseleave')
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(true)
          expect(self.targets[0].classList.contains('in')).to.equal(true)
        })
      })
      .get(self.elements[0])
      .trigger('mouseenter')
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(true)
          expect(self.targets[0].classList.contains('in')).to.equal(true)
        })
      })
  })
})

describe('demos/components/drop/event', function () {
  let win
  let Xt
  let container
  let container1
  let self
  let self1

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--drop-event').as('demo')
    cy.get('@demo').find('[data-xt-drop]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    cy.get(container).scrollIntoView()
    container1 = this.container[1]
    self = Xt.get({ name: 'xt-drop', el: container })
    self1 = Xt.get({ name: 'xt-drop', el: container1 })
  })

  it('TEST open and close nested.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-drop-init', '') // racecondition
      .get(self.elements[0])
      .trigger('mouseenter')
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self1.elements[0].classList.contains('on')).to.equal(false)
        expect(self1.targets[0].classList.contains('on')).to.equal(false)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(true)
          expect(self.targets[0].classList.contains('in')).to.equal(true)
          expect(self1.elements[0].classList.contains('in')).to.equal(false)
          expect(self1.targets[0].classList.contains('in')).to.equal(false)
        })
      })
      .get(self1.elements[0])
      .trigger('mouseenter')
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self1.elements[0].classList.contains('on')).to.equal(true)
        expect(self1.targets[0].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(true)
          expect(self.targets[0].classList.contains('in')).to.equal(true)
          expect(self1.elements[0].classList.contains('in')).to.equal(true)
          expect(self1.targets[0].classList.contains('in')).to.equal(true)
        })
      })
      .get(self1.elements[0])
      .trigger('mouseleave')
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self1.elements[0].classList.contains('on')).to.equal(false)
        expect(self1.targets[0].classList.contains('on')).to.equal(false)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(true)
          expect(self.targets[0].classList.contains('in')).to.equal(true)
          expect(self1.elements[0].classList.contains('in')).to.equal(false)
          expect(self1.targets[0].classList.contains('in')).to.equal(false)
        })
      })
      .get(self.elements[0])
      .trigger('mouseleave')
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(false)
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self1.elements[0].classList.contains('on')).to.equal(false)
        expect(self1.targets[0].classList.contains('on')).to.equal(false)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(false)
          expect(self.targets[0].classList.contains('in')).to.equal(false)
          expect(self1.elements[0].classList.contains('in')).to.equal(false)
          expect(self1.targets[0].classList.contains('in')).to.equal(false)
        })
      })
  })
})

describe('demos/components/toggle/prevent-event', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-prevent-event').as('demo')
    cy.get('@demo').find('[data-xt-toggle]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-toggle', el: container })
  })

  it('TEST prevent event.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-toggle-init', '') // racecondition
      .get(self.elements[1])
      .click()
      .then(() => {
        expect(self.elements[1].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.elements[1].classList.contains('in')).to.equal(true)
          expect(self.targets[1].classList.contains('in')).to.equal(true)
        })
      })
      .get(self.elements[1])
      .click()
      .url()
      .should('not.include', url)
  })
})

describe('demos/components/toggle/hash', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit('demos/components/toggle/hash').window().as('win')
    cy.get('[data-xt-toggle]').as('container') // not .get('@demo')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-toggle', el: container })
  })

  it('TEST no hash must not add hash initial activation.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-toggle-init', '') // racecondition
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(false)
        expect(self.elements[1].classList.contains('on')).to.equal(false)
        expect(self.elements[2].classList.contains('on')).to.equal(false)
        expect(self.elements[3].classList.contains('on')).to.equal(true)
        expect(self.elements[4].classList.contains('on')).to.equal(false)
        expect(self.elements[5].classList.contains('on')).to.equal(false)
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(true)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(false)
          expect(self.elements[1].classList.contains('in')).to.equal(false)
          expect(self.elements[2].classList.contains('in')).to.equal(false)
          expect(self.elements[3].classList.contains('in')).to.equal(true)
          expect(self.elements[4].classList.contains('in')).to.equal(false)
          expect(self.elements[5].classList.contains('in')).to.equal(false)
          expect(self.targets[0].classList.contains('in')).to.equal(false)
          expect(self.targets[1].classList.contains('in')).to.equal(false)
          expect(self.targets[2].classList.contains('in')).to.equal(false)
          expect(self.targets[3].classList.contains('in')).to.equal(false)
          expect(self.targets[4].classList.contains('in')).to.equal(true)
          expect(self.targets[5].classList.contains('in')).to.equal(false)
        })
      })
  })
})

describe('demos/components/toggle/hash', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit('demos/components/toggle/hash#demo--toggle-hash-group-1').window().as('win')
    cy.get('[data-xt-toggle]').as('container') // not .get('@demo')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-toggle', el: container })
  })

  it('TEST initial activation, hash activation, browser navigation.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-toggle-init', '') // racecondition
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(false)
        expect(self.elements[0].classList.contains('in')).to.equal(false)
        expect(self.elements[1].classList.contains('on')).to.equal(false)
        expect(self.elements[1].classList.contains('in')).to.equal(false)
        expect(self.elements[2].classList.contains('on')).to.equal(false)
        expect(self.elements[2].classList.contains('in')).to.equal(false)
        expect(self.elements[3].classList.contains('on')).to.equal(false)
        expect(self.elements[3].classList.contains('in')).to.equal(false)
        expect(self.elements[4].classList.contains('on')).to.equal(true)
        expect(self.elements[4].classList.contains('in')).to.equal(true)
        expect(self.elements[5].classList.contains('on')).to.equal(false)
        expect(self.elements[5].classList.contains('in')).to.equal(false)
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[0].classList.contains('in')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('in')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('in')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('in')).to.equal(true)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('in')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        expect(self.targets[5].classList.contains('in')).to.equal(true)
      })
      .get(self.elements[1])
      .click()
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(false)
        expect(self.elements[1].classList.contains('on')).to.equal(true)
        expect(self.elements[2].classList.contains('on')).to.equal(false)
        expect(self.elements[3].classList.contains('on')).to.equal(false)
        expect(self.elements[4].classList.contains('on')).to.equal(false)
        expect(self.elements[5].classList.contains('on')).to.equal(false)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(false)
          expect(self.elements[1].classList.contains('in')).to.equal(true)
          expect(self.elements[2].classList.contains('in')).to.equal(false)
          expect(self.elements[3].classList.contains('in')).to.equal(false)
          expect(self.elements[4].classList.contains('in')).to.equal(false)
          expect(self.elements[5].classList.contains('in')).to.equal(false)
          expect(self.targets[0].classList.contains('in')).to.equal(true)
          expect(self.targets[1].classList.contains('in')).to.equal(false)
          expect(self.targets[2].classList.contains('in')).to.equal(false)
          expect(self.targets[3].classList.contains('in')).to.equal(false)
          expect(self.targets[4].classList.contains('in')).to.equal(false)
          expect(self.targets[5].classList.contains('in')).to.equal(false)
        })
      })
      .go(-1)
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(false)
        expect(self.elements[1].classList.contains('on')).to.equal(false)
        expect(self.elements[2].classList.contains('on')).to.equal(false)
        expect(self.elements[3].classList.contains('on')).to.equal(false)
        expect(self.elements[4].classList.contains('on')).to.equal(true)
        expect(self.elements[5].classList.contains('on')).to.equal(false)
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(true)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(false)
          expect(self.elements[1].classList.contains('in')).to.equal(false)
          expect(self.elements[2].classList.contains('in')).to.equal(false)
          expect(self.elements[3].classList.contains('in')).to.equal(false)
          expect(self.elements[4].classList.contains('in')).to.equal(true)
          expect(self.elements[5].classList.contains('in')).to.equal(false)
          expect(self.targets[0].classList.contains('in')).to.equal(false)
          expect(self.targets[1].classList.contains('in')).to.equal(false)
          expect(self.targets[2].classList.contains('in')).to.equal(true)
          expect(self.targets[3].classList.contains('in')).to.equal(true)
          expect(self.targets[4].classList.contains('in')).to.equal(false)
          expect(self.targets[5].classList.contains('in')).to.equal(true)
        })
      })
      .go(1)
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(false)
        expect(self.elements[1].classList.contains('on')).to.equal(true)
        expect(self.elements[2].classList.contains('on')).to.equal(false)
        expect(self.elements[3].classList.contains('on')).to.equal(false)
        expect(self.elements[4].classList.contains('on')).to.equal(false)
        expect(self.elements[5].classList.contains('on')).to.equal(false)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(false)
          expect(self.elements[1].classList.contains('in')).to.equal(true)
          expect(self.elements[2].classList.contains('in')).to.equal(false)
          expect(self.elements[3].classList.contains('in')).to.equal(false)
          expect(self.elements[4].classList.contains('in')).to.equal(false)
          expect(self.elements[5].classList.contains('in')).to.equal(false)
          expect(self.targets[0].classList.contains('in')).to.equal(true)
          expect(self.targets[1].classList.contains('in')).to.equal(false)
          expect(self.targets[2].classList.contains('in')).to.equal(false)
          expect(self.targets[3].classList.contains('in')).to.equal(false)
          expect(self.targets[4].classList.contains('in')).to.equal(false)
          expect(self.targets[5].classList.contains('in')).to.equal(false)
        })
      })
  })
})

describe('demos/components/overlay/hash', function () {
  let win
  let Xt
  let container
  let container1
  let self
  let self1

  beforeEach(function () {
    cy.visit('demos/components/overlay/hash#demo--overlay-hash').window().as('win')
    cy.get('[data-xt-overlay]').as('container') // not .get('@demo')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    cy.get(container).scrollIntoView()
    container1 = this.container[1]
    self = Xt.get({ name: 'xt-overlay', el: container })
    self1 = Xt.get({ name: 'xt-overlay', el: container1 })
  })

  it('TEST opened with hash on page load, closing it should not block page interaction (bug with multiple elements same target), should reopen on change page browser navigation.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-overlay-init', '') // racecondition
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        expect(self.elements[0].classList.contains('in')).to.equal(true)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('in')).to.equal(true)
      })
      .get(self.targets[0].querySelector('.xt-dismiss'))
      .click()
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(false)
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(false)
          expect(self.targets[0].classList.contains('in')).to.equal(false)
        })
      })
      .get(self1.elements[0])
      .click()
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(true)
          expect(self.targets[0].classList.contains('in')).to.equal(true)
        })
      })
      .get(self.targets[0].querySelector('.xt-dismiss'))
      .click()
      .go(-1)
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.elements[0].classList.contains('in')).to.equal(true)
          expect(self.targets[0].classList.contains('in')).to.equal(true)
        })
      })
      .location()
      .then(loc => {
        expect(loc.hash).to.equal('#demo--overlay-hash')
      })
  })
})

describe('demos/components/slider/hash', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit('demos/components/slider/hash#demo--slider-hash-4').window().as('win')
    cy.get('[data-xt-slider]').as('container') // not .get('@demo')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
  })

  it('TEST initial activation, hash activation, browser navigation.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[0].classList.contains('in')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('in')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('in')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('in')).to.equal(true)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('in')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('in')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('in')).to.equal(false)
      })
      .get(self.elements[1])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        cy.frameDouble().then(() => {
          expect(self.targets[0].classList.contains('in')).to.equal(false)
          expect(self.targets[1].classList.contains('in')).to.equal(true)
          expect(self.targets[2].classList.contains('in')).to.equal(true)
          expect(self.targets[3].classList.contains('in')).to.equal(false)
          expect(self.targets[4].classList.contains('in')).to.equal(false)
          expect(self.targets[5].classList.contains('in')).to.equal(false)
          expect(self.targets[6].classList.contains('in')).to.equal(false)
        })
      })
      .go(-1)
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(true)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        cy.frameDouble().then(() => {
          expect(self.targets[0].classList.contains('in')).to.equal(false)
          expect(self.targets[1].classList.contains('in')).to.equal(false)
          expect(self.targets[2].classList.contains('in')).to.equal(false)
          expect(self.targets[3].classList.contains('in')).to.equal(true)
          expect(self.targets[4].classList.contains('in')).to.equal(false)
          expect(self.targets[5].classList.contains('in')).to.equal(false)
          expect(self.targets[6].classList.contains('in')).to.equal(false)
        })
      })
      .go(1)
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        cy.frameDouble().then(() => {
          expect(self.targets[0].classList.contains('in')).to.equal(false)
          expect(self.targets[1].classList.contains('in')).to.equal(true)
          expect(self.targets[2].classList.contains('in')).to.equal(true)
          expect(self.targets[3].classList.contains('in')).to.equal(false)
          expect(self.targets[4].classList.contains('in')).to.equal(false)
          expect(self.targets[5].classList.contains('in')).to.equal(false)
          expect(self.targets[6].classList.contains('in')).to.equal(false)
        })
      })
  })
})

describe('demos/components/drop/backdrop', function () {
  let win
  let Xt
  let container
  let container1
  let self
  let self1

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--drop-backdrop').as('demo')
    cy.get('@demo').find('[data-xt-drop]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    cy.get(container).scrollIntoView()
    container1 = this.container[1]
    self = Xt.get({ name: 'xt-drop', el: container })
    self1 = Xt.get({ name: 'xt-drop', el: container1 })
  })

  it('TEST backdrop.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-drop-init', '') // racecondition
      .get(self.elements[0])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('in')).to.equal(true)
      })
      .get(self.targets[0])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('in')).to.equal(true)
      })
      .get(self.targets[0])
      .find('.xt-backdrop')
      .click({ force: true })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[0].classList.contains('in')).to.equal(false)
      })
  })

  it('TEST backdrop hover.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-drop-init', '') // racecondition
      .get(self1.elements[0])
      .trigger('mouseenter')
      .then(() => {
        expect(self1.targets[0].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self1.targets[0].classList.contains('in')).to.equal(true)
        })
      })
      .get(self1.targets[0])
      .click()
      .then(() => {
        expect(self1.targets[0].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self1.targets[0].classList.contains('in')).to.equal(true)
        })
      })
      .get(self1.targets[0])
      .find('.xt-backdrop')
      .click({ force: true })
      .then(() => {
        expect(self1.targets[0].classList.contains('on')).to.equal(false)
        cy.frameDouble().then(() => {
          expect(self1.targets[0].classList.contains('in')).to.equal(false)
        })
      })
  })
})

describe('demos/components/tooltip/swap-click', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--tooltip-swap-click').as('demo')
    cy.get('@demo').find('[data-xt-tooltip]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-tooltip', el: container })
  })

  it('TEST no empty frame when switching from off to reset.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-tooltip-init', '') // racecondition
      .get(self.elements[0])
      .trigger('mouseenter')
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('hidden')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('hidden')).to.equal(true)
      })
      .get(self.elements[0])
      .click()
      .wait(750) // after animation
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('hidden')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('hidden')).to.equal(false)
      })
      .get(self.elements[0])
      .click()
      .wait(750) // after animation
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('hidden')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('hidden')).to.equal(false)
      })
      .get(self.elements[0])
      .trigger('mouseleave')
      .frame()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[0].classList.contains('hidden')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('hidden')).to.equal(true)
      })
  })
})

describe('demos/components/tooltip/swap-toggle', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--tooltip-swap-toggle').as('demo')
    cy.get('@demo').find('[data-xt-tooltip]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-tooltip', el: container })
  })

  it('TEST no empty frame when switching from off to reset.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-tooltip-init', '') // racecondition
      .get(self.elements[0])
      .trigger('mouseenter')
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('hidden')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('hidden')).to.equal(true)
      })
      .get(self.elements[0])
      .click()
      .wait(750) // after animation
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('hidden')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('hidden')).to.equal(false)
      })
      .get(self.elements[0])
      .click()
      .wait(750) // after animation
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('hidden')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('hidden')).to.equal(true)
      })
      .get(self.elements[0])
      .trigger('mouseleave')
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[0].classList.contains('hidden')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('hidden')).to.equal(true)
      })
  })
})

describe('demos/components/tooltip/prevent-overflow', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--tooltip-prevent-overflow').as('demo')
    cy.get('@demo').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-tooltip', el: container })
  })

  it('TEST position inside boundary on first element for proper merge of popperjs options, arrow position.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-tooltip-init', '') // racecondition
      .get(self.elements[0])
      .trigger('mouseenter')
      .then(() => {
        expect(self.targets[0].offsetWidth).to.be.closeTo(189, 10)
        expect(self.targets[0].offsetHeight).to.be.closeTo(44, 10)
        expect(parseFloat(self.targets[0].querySelector('.xt-arrow').style.left)).to.closeTo(61, 10)
      })
  })
})

describe('demos/components/overlay/animation-noqueue', function () {
  let win
  let doc
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win').document().as('doc')
    cy.get('.demo--overlay-animation-noqueue').as('demo')
    cy.get('@demo').find('[data-xt-overlay]').as('container')
  })

  beforeEach(function () {
    win = this.win
    doc = this.doc
    Xt = win.Xt
    container = this.container[0]
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-overlay', el: container })
  })

  beforeEach(function () {
    win = this.win
    cy.spy(win.console, 'error').as('consoleError')
  })

  afterEach(() => {
    cy.get('@consoleError').should('not.be.called')
  })

  it('TEST focustrap should work, no console error, navigation tabs.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-overlay-init', '') // racecondition
      .get(self.elements[0])
      .click()
      .get('body')
      .tab()
      .then(() => {
        expect(self.targets[0].querySelector('.xt-dismiss')).to.equal(doc.activeElement)
      })
      .tab()
      .tab()
      .tab()
      .then(() => {
        expect(self.elements[4]).to.equal(doc.activeElement)
      })
      .get(self.elements[4])
      .click()
      .wait(500) // after animation
      .get('body')
      .tab()
      .then(() => {
        expect(self.targets[1].querySelector('.xt-dismiss')).to.equal(doc.activeElement)
      })
  })
})

describe('demos/components/drop/reset-to-current', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--drop-reset-to-current').as('demo')
    cy.get('@demo').find('[data-xt-drop]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-drop', el: container })
  })

  it('TEST no empty frame when switching from off to reset.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-drop-init', '') // racecondition
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[0].classList.contains('in')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('in')).to.equal(true)
      })
      .get(self.elements[0])
      .trigger('mouseenter')
      .frame()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        cy.frameDouble().then(() => {
          expect(self.targets[0].classList.contains('in')).to.equal(true)
          expect(self.targets[1].classList.contains('in')).to.equal(false)
        })
      })
      .get(self.elements[0])
      .trigger('mouseleave')
      .frame()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.targets[0].classList.contains('in')).to.equal(false)
          expect(self.targets[1].classList.contains('in')).to.equal(true)
        })
      })
  })
})
