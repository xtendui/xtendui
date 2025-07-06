const url = '/xtendui/hidden/test/api-test'

describe('xtendui/demos/components/toggle/disabled', function () {
  let win
  let Xt
  let container
  let container1
  let self
  let self1

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-disabled').as('demo')
    cy.get('@demo').find('[data-xt-toggle]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    container1 = this.container[1]
    cy.get(container)
      .closest('.docs_demo')
      .scrollIntoView({ offset: { top: 0, left: 0 } })
  })

  beforeEach(function () {
    return Xt.get({ name: 'xt-toggle', el: container }).then(selfPromise => {
      self = selfPromise
      return Xt.get({ name: 'xt-toggle', el: container1 }).then(self1Promise => {
        self1 = self1Promise
      })
    })
  })

  it('TEST nested check elements, targets length of nested parent components.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-toggle-init', '') // racecondition
      .then(() => {
        expect(self.elements.length).to.equal(2)
        expect(self.targets.length).to.equal(2)
      })
  })

  it('TEST nested should disable only parent, no interactions on disabled.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-toggle-init', '') // racecondition
      .get(self.targets[1])
      .should('be.visible') // racecondition slider
      .then(() => {
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
            expect(win.Xt.visible({ el: self.targets[1] })).to.equal(true)
            expect(self.targets[1].classList.contains('on')).to.equal(true)
            expect(win.Xt.visible({ el: self1.targets[0] })).to.equal(true)
            expect(self1.targets[0].classList.contains('on')).to.equal(true)
            expect(win.Xt.visible({ el: self1.targets[1] })).to.equal(false)
            expect(self1.targets[1].classList.contains('on')).to.equal(false)
            cy.frameDouble().then(() => {
              expect(self.targets[0].classList.contains('in')).to.equal(false)
              expect(self.targets[1].classList.contains('in')).to.equal(true)
              expect(self1.targets[0].classList.contains('in')).to.equal(true)
              expect(self1.targets[1].classList.contains('in')).to.equal(false)
            })
          })
          .get(self1.elements[1])
          .click()
          .then(() => {
            expect(win.Xt.visible({ el: self1.targets[0] })).to.equal(false)
            expect(self1.targets[0].classList.contains('on')).to.equal(false)
            expect(win.Xt.visible({ el: self1.targets[1] })).to.equal(true)
            expect(self1.targets[1].classList.contains('on')).to.equal(true)
            cy.frameDouble().then(() => {
              expect(self1.targets[0].classList.contains('in')).to.equal(false)
              expect(self1.targets[1].classList.contains('in')).to.equal(true)
            })
          })
      })
  })
})

describe('xtendui/demos/components/overlay/disabled', function () {
  let win
  let Xt
  let container
  let container1
  let self
  let self1

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--overlay-disable').as('demo')
    cy.get('@demo').find('[data-xt-overlay]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    container1 = this.container[1]
    cy.get(container)
      .closest('.docs_demo')
      .scrollIntoView({ offset: { top: 0, left: 0 } })
  })

  beforeEach(function () {
    return Xt.get({ name: 'xt-overlay', el: container }).then(selfPromise => {
      self = selfPromise
      return Xt.get({ name: 'xt-overlay', el: container1 }).then(self1Promise => {
        self1 = self1Promise
      })
    })
  })

  it('TEST overlay nested classBody, desktop is disabled > resize mobile is enabled > open > resize desktop is disabled and closed.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-overlay-init', '') // racecondition
      .then(() => {
        expect(win.Xt.visible({ el: self.targets[0] })).to.equal(true)
        expect(container.getAttribute('data-xt-overlay-disabled')).to.equal('')
        expect(win.Xt.visible({ el: self1.targets[0] })).to.equal(false)
        expect(container1.getAttribute('data-xt-overlay-disabled')).to.equal(null)
        cy.viewport('iphone-6')
          .get(self.elements[0])
          .click()
          .get(self1.elements[0])
          .click()
          .get(container)
          .should('have.not.attr', 'data-xt-overlay-disabled') // racecondition
          .frame()
          .then(() => {
            expect(container.getAttribute('data-xt-overlay-disabled')).to.equal(null)
            expect(container.closest('body')).to.have.class('xt-scrollbar-overlay')
          })
          .get(self1.targets[0].querySelector('.xt-dismiss'))
          .click()
          .then(() => {
            expect(container.closest('body')).to.have.class('xt-scrollbar-overlay')
          })
          .get(self.targets[0].querySelector('.xt-dismiss'))
          .click()
          .then(() => {
            expect(container.closest('body')).to.not.have.class('xt-scrollbar-overlay')
          })
          .get(self.elements[0])
          .click()
          .viewport('macbook-13')
          .get(container)
          .should('have.attr', 'data-xt-overlay-disabled', '') // racecondition
          .frame()
          .then(() => {
            expect(win.Xt.visible({ el: self.targets[0] })).to.equal(true)
            expect(container.getAttribute('data-xt-overlay-disabled')).to.equal('')
            expect(win.Xt.visible({ el: self1.targets[0] })).to.equal(false)
            expect(container1.getAttribute('data-xt-overlay-disabled')).to.equal(null)
            expect(container.closest('body')).to.not.have.class('xt-scrollbar-overlay')
          })
      })
  })
})

describe('xtendui/demos/components/slider/disabled', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-disabled').as('demo')
    cy.get('@demo').find('[data-xt-slider]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    cy.get(container)
      .closest('.docs_demo')
      .scrollIntoView({ offset: { top: 0, left: 0 } })
  })

  beforeEach(function () {
    return Xt.get({ name: 'xt-slider', el: container }).then(selfPromise => {
      self = selfPromise
    })
  })

  it('TEST slider instant position, wrap on resize and activation on resize.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(self.targets[4].getAttribute('data-xt-slider-disabled')).to.equal('')
        expect(self.targets[4].classList.contains('on')).to.equal(true)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        cy.frameDouble()
          .then(() => {
            expect(self.targets[4].classList.contains('in')).to.equal(true)
            expect(self.targets[5].classList.contains('in')).to.equal(true)
            expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal(
              'translateX(-1367.03px)',
            )
          })
          .viewport('iphone-6')
          .get(container)
          .should('have.not.attr', 'data-xt-slider-disabled') // racecondition
          .frame()
          .then(() => {
            expect(self.targets[4].getAttribute('data-xt-slider-disabled')).to.equal(null)
            expect(self.targets[4].classList.contains('on')).to.equal(true)
            expect(self.targets[5].classList.contains('on')).to.equal(false)
            expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal(
              'translateX(-720.156px)',
            )
            cy.frameDouble().then(() => {
              expect(self.targets[4].classList.contains('in')).to.equal(true)
              expect(self.targets[5].classList.contains('in')).to.equal(false)
            })
          })
          .wait(500)
          .get('[data-xt-slider-element]')
          .eq(6)
          .click()
          .then(() => {
            expect(self.targets[0].style.transform).to.equal('translateX(1291.31px)')
          })
      })
  })
})

describe('xtendui/demos/components/toggle/matches', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--toggle-matches').as('demo')
    cy.get('@demo').find('[data-xt-toggle]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    cy.get(container)
      .closest('.docs_demo')
      .scrollIntoView({ offset: { top: 0, left: 0 } })
  })

  beforeEach(function () {
    return Xt.get({ name: 'xt-toggle', el: container }).then(selfPromise => {
      self = selfPromise
    })
  })

  it('TEST matches.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-toggle-init', '') // racecondition
      .get(self.targets[0])
      .should('be.visible') // racecondition special
      .then(() => {
        expect(win.Xt.visible({ el: self.targets[0] })).to.equal(true)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(win.Xt.visible({ el: self.targets[1] })).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        cy.get(self.elements[1])
          .click()
          .then(() => {
            expect(self.options.max).to.equal(2)
            expect(win.Xt.visible({ el: self.targets[0] })).to.equal(true)
            expect(self.targets[0].classList.contains('on')).to.equal(true)
            expect(win.Xt.visible({ el: self.targets[1] })).to.equal(true)
            expect(self.targets[1].classList.contains('on')).to.equal(true)
          })
          .viewport('iphone-6')
          .get(self.targets[1])
          .should('have.not.class', 'on') // racecondition
          .frame()
          .then(() => {
            expect(self.options.max).to.equal(1)
            expect(win.Xt.visible({ el: self.targets[0] })).to.equal(true)
            expect(self.targets[0].classList.contains('on')).to.equal(true)
            expect(win.Xt.visible({ el: self.targets[1] })).to.equal(false)
            expect(self.targets[1].classList.contains('on')).to.equal(false)
          })
      })
  })
})

describe('xtendui/demos/components/toggle/api', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit('/xtendui/demos/components/toggle/api').window().as('win')
    cy.get('#toggle--eventmethods').as('container') // not .get('@demo')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    cy.get(container).scrollIntoView({ offset: { top: 0, left: 0 } })
  })

  beforeEach(function () {
    return Xt.get({ name: 'xt-toggle', el: container }).then(selfPromise => {
      self = selfPromise
    })
  })

  it('TEST on init event, add and remove, activated on change > reinit > change > restart, activated on change > destroy > reinit, destroy remove all interactions.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-toggle-init', '') // racecondition
      .get('#button--toggle-api-add')
      .click()
      .then(() => {
        cy.get(self.elements[4])
          .click()
          .then(() => {
            expect(self.targets[0].classList.contains('on')).to.equal(false)
            expect(self.targets[1].classList.contains('on')).to.equal(false)
            expect(self.targets[2].classList.contains('on')).to.equal(false)
            expect(self.targets[3].classList.contains('on')).to.equal(false)
            expect(self.targets[4].classList.contains('on')).to.equal(true)
          })
      })
      .get('#button--toggle-api-remove')
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4]).to.equal(undefined)
      })
      .get(self.elements[2])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
      })
      .get('#button--toggle-api-restart')
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
      })
      .get(self.elements[2])
      .click()
      .get('#button--toggle-api-reinit')
      .click()
      .get(self.elements[0])
      .click()
      .get('#button--toggle-api-restart')
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
      })
      .get('#button--toggle-api-destroy')
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
      })
      .get(self.elements[0])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
      })
      .get('#button--toggle-api-reinit')
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
      })
  })
})

describe('xtendui/demos/components/overlay/api', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit('/xtendui/demos/components/overlay/api').window().as('win')
    cy.get('#overlay--eventmethods').as('container') // not .get('@demo')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    cy.get(container).scrollIntoView({ offset: { top: 0, left: 0 } })
  })

  beforeEach(function () {
    return Xt.get({ name: 'xt-overlay', el: container }).then(selfPromise => {
      self = selfPromise
    })
  })

  it('TEST one destroy and reinit and trigger 1st, reinit multiple times and interaction should trigger once.', function () {
    cy.get('#button--overlay-api-reinit')
      .click()
      .click()
      .get(self.elements[0])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('in')).to.equal(true)
      })
      .get(self.targets[0].querySelector('.xt-dismiss'))
      .click()
      .get('#button--overlay-api-destroy')
      .click()
      .get('#button--overlay-api-reinit')
      .click()
      .get('#button--overlay-api-first-target')
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('in')).to.equal(true)
      })
  })
})

describe('xtendui/demos/components/slider/api', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit('/xtendui/demos/components/slider/api').window().as('win')
    cy.get('#slider--eventmethods').as('container') // not .get('@demo')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    cy.get(container).scrollIntoView({ offset: { top: 0, left: 0 } })
  })

  beforeEach(function () {
    return Xt.get({ name: 'xt-slider', el: container }).then(selfPromise => {
      self = selfPromise
    })
  })

  it('TEST initial dragger position instant with no transition, initial wrap position, remove until 0 targets should not give errors.', function () {
    expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(-2383.28px)')
    expect(self.targets[0].style.transform).to.equal('translateX(3448.16px)')
    expect(self.targets[6].style.transform).to.equal('translateX(0px)')
    cy.get('#button--slider-api-remove')
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .get('#button--slider-api-add')
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .then(() => {
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[6].style.transform).to.equal('translateX(-2129.75px)')
      })
  })
})
