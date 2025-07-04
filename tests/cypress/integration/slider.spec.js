const url = '/hidden/test/slider-test'

describe('demos/components/slider/align-center', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-align-center').as('demo')
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

  it('TEST grouping and activation.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(0px)')
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
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(-158.953px)')
      })
  })
})

describe('demos/components/slider/align-left', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-align-left').as('demo')
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

  it('TEST grouping and activation.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(0px)')
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
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(-190.75px)')
      })
  })
})

describe('demos/components/slider/align-right', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-align-right').as('demo')
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

  it('TEST grouping and activation.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(0px)')
      })
      .get(self.elements[1])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(true)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(-699.406px)')
      })
  })
})

describe('demos/components/slider/contain-false-center', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-contain-false-center').as('demo')
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

  it('TEST grouping and activation.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(286.125px)')
      })
      .get(self.elements[1])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(95.375px)')
      })
  })
})

describe('demos/components/slider/contain-false-left', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-contain-false-left').as('demo')
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

  it('TEST grouping and activation.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(0px)')
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
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(-190.75px)')
      })
  })
})

describe('demos/components/slider/contain-false-right', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-contain-false-right').as('demo')
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

  it('TEST grouping and activation.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(572.25px)')
      })
      .get(self.elements[1])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(381.5px)')
      })
  })
})

describe('demos/components/slider/wrap-nospace', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-wrap-nospace').as('demo')
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

  it('TEST grouping and activation, no wrap.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(0px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('')
      })
      .get(self.elements[2])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(true)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(-699.406px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('')
      })
  })
})

describe('demos/components/slider/wrap-center', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-wrap-center').as('demo')
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

  it('TEST grouping and activation, wrap position, performance slider.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .wait(750) // racecondition special
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(true)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(286.125px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('')
        expect(self.targets[4].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[5].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[6].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[0].style.width).to.equal('')
        expect(self.targets[1].style.width).to.equal('')
        expect(self.targets[2].style.width).to.equal('')
        expect(self.targets[3].style.width).to.equal('763px')
        expect(self.targets[4].style.width).to.equal('317.906px')
        expect(self.targets[5].style.width).to.equal('')
        expect(self.targets[0].style.height).to.equal('')
        expect(self.targets[1].style.height).to.equal('')
        expect(self.targets[2].style.height).to.equal('')
        expect(self.targets[3].style.height).to.equal('116.5px')
        expect(self.targets[4].style.height).to.equal('116.5px')
        expect(self.targets[5].style.height).to.equal('')
        expect(self.targets[0].style.contentVisibility).to.equal('')
        expect(self.targets[1].style.contentVisibility).to.equal('')
        expect(self.targets[2].style.contentVisibility).to.equal('')
        expect(self.targets[3].style.contentVisibility).to.equal('hidden')
        expect(self.targets[4].style.contentVisibility).to.equal('hidden')
        expect(self.targets[5].style.contentVisibility).to.equal('')
      })
      .get(self.elements[4])
      .click()
      .wait(750) // racecondition special
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(true)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(921.953px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[4].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[5].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[6].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[0].style.width).to.equal('190.75px')
        expect(self.targets[1].style.width).to.equal('190.75px')
        expect(self.targets[2].style.width).to.equal('317.906px')
        expect(self.targets[3].style.width).to.equal('')
        expect(self.targets[4].style.width).to.equal('')
        expect(self.targets[5].style.width).to.equal('')
        expect(self.targets[6].style.width).to.equal('')
        expect(self.targets[0].style.height).to.equal('116.5px')
        expect(self.targets[1].style.height).to.equal('116.5px')
        expect(self.targets[2].style.height).to.equal('116.5px')
        expect(self.targets[3].style.height).to.equal('')
        expect(self.targets[4].style.height).to.equal('')
        expect(self.targets[5].style.height).to.equal('')
        expect(self.targets[6].style.height).to.equal('')
        expect(self.targets[0].style.contentVisibility).to.equal('hidden')
        expect(self.targets[1].style.contentVisibility).to.equal('hidden')
        expect(self.targets[2].style.contentVisibility).to.equal('hidden')
        expect(self.targets[3].style.contentVisibility).to.equal('')
        expect(self.targets[4].style.contentVisibility).to.equal('')
        expect(self.targets[5].style.contentVisibility).to.equal('')
        expect(self.targets[6].style.contentVisibility).to.equal('')
      })
  })
})

describe('demos/components/slider/wrap-left', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-wrap-left').as('demo')
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

  it('TEST grouping and activation, wrap position.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(0px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('')
        expect(self.targets[4].style.transform).to.equal('')
        expect(self.targets[5].style.transform).to.equal('')
        expect(self.targets[6].style.transform).to.equal('translateX(-2161.81px)')
      })
      .get(self.elements[6])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(true)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(190.75px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('')
        expect(self.targets[4].style.transform).to.equal('')
        expect(self.targets[5].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[6].style.transform).to.equal('translateX(-2161.81px)')
      })
  })
})

describe('demos/components/slider/wrap-right', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-wrap-right').as('demo')
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

  it('TEST grouping and activation, wrap position.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        expect(self.targets[6].classList.contains('on')).to.equal(true)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(572.25px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('')
        expect(self.targets[4].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[5].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[6].style.transform).to.equal('translateX(-2161.81px)')
      })
      .get(self.elements[6])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(true)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        expect(self.targets[6].classList.contains('on')).to.equal(true)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(763px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[4].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[5].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[6].style.transform).to.equal('translateX(-2161.81px)')
      })
  })
})

describe('demos/components/slider/group', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-group').as('demo')
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

  it('TEST group responsive.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(true)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(190.75px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('')
        expect(self.targets[4].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[5].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[6].style.transform).to.equal('translateX(-2161.81px)')
      })
      .viewport('iphone-6')

      .get(self.targets[6])
      .should('have.not.class', 'on') // racecondition
      .frame()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(0px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('')
        expect(self.targets[4].style.transform).to.equal('')
        expect(self.targets[5].style.transform).to.equal('translateX(-1291.31px)')
        expect(self.targets[6].style.transform).to.equal('translateX(-1291.31px)')
      })
      .viewport('macbook-13')

      .get(self.targets[6])
      .should('have.class', 'on') // racecondition
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(true)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(190.75px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('')
        expect(self.targets[4].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[5].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[6].style.transform).to.equal('translateX(-2161.81px)')
      })
  })
})

describe('demos/components/slider/group-same-false', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-group-same-false').as('demo')
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

  it('TEST group.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(286.125px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('')
        expect(self.targets[4].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[5].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[6].style.transform).to.equal('translateX(-2161.81px)')
      })
      .get(self.elements[6])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(true)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(476.875px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('')
        expect(self.targets[4].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[5].style.transform).to.equal('translateX(-2161.81px)')
        expect(self.targets[6].style.transform).to.equal('translateX(-2161.81px)')
      })
  })
})

describe('demos/components/slider/exclude', function () {
  let win
  let Xt
  let container
  let containerToggle
  let self
  let toggles
  let slides

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-exclude').as('demo')
    cy.get('@demo').find('[data-xt-slider]').as('container')
    cy.get('@demo').find('[data-xt-toggle-element]').as('toggles')
    cy.get('@demo').find('[data-xt-slider-target]').as('slides')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    containerToggle = this.demo[0]
    toggles = this.toggles
    slides = this.slides
    cy.get(container)
      .closest('.docs_demo')
      .scrollIntoView({ offset: { top: 0, left: 0 } })
  })

  beforeEach(function () {
    return Xt.get({ name: 'xt-toggle', el: containerToggle }).then(() => {
      return Xt.get({ name: 'xt-slider', el: container }).then(selfPromise => {
        self = selfPromise
      })
    })
  })

  it('TEST activation exclude.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .get(containerToggle)
      .should('have.attr', 'data-xt-toggle-init', '') // racecondition
      .then(() => {
        expect(self.targets.length).to.equal(5)
        expect(slides[0].classList.contains('on')).to.equal(true)
        expect(slides[1].classList.contains('on')).to.equal(true)
        expect(slides[2].classList.contains('on')).to.equal(false)
        expect(slides[3].classList.contains('on')).to.equal(false)
        expect(slides[4].classList.contains('on')).to.equal(false)
        expect(slides[5].classList.contains('on')).to.equal(false)
        expect(slides[6].classList.contains('on')).to.equal(false)
        expect(slides[0].classList.contains('hidden')).to.equal(false)
        expect(slides[1].classList.contains('hidden')).to.equal(false)
        expect(slides[2].classList.contains('hidden')).to.equal(true)
        expect(slides[3].classList.contains('hidden')).to.equal(false)
        expect(slides[4].classList.contains('hidden')).to.equal(true)
        expect(slides[5].classList.contains('hidden')).to.equal(false)
        expect(slides[6].classList.contains('hidden')).to.equal(false)
      })
      .get(toggles[0])
      .click()
      .then(() => {
        expect(self.targets.length).to.equal(4)
        expect(slides[0].classList.contains('on')).to.equal(true)
        expect(slides[1].classList.contains('on')).to.equal(true)
        expect(slides[2].classList.contains('on')).to.equal(true)
        expect(slides[3].classList.contains('on')).to.equal(false)
        expect(slides[4].classList.contains('on')).to.equal(false)
        expect(slides[5].classList.contains('on')).to.equal(false)
        expect(slides[6].classList.contains('on')).to.equal(false)
        expect(slides[0].classList.contains('hidden')).to.equal(true)
        expect(slides[1].classList.contains('hidden')).to.equal(false)
        expect(slides[2].classList.contains('hidden')).to.equal(false)
        expect(slides[3].classList.contains('hidden')).to.equal(true)
        expect(slides[4].classList.contains('hidden')).to.equal(false)
        expect(slides[5].classList.contains('hidden')).to.equal(false)
        expect(slides[6].classList.contains('hidden')).to.equal(true)
      })
  })
})

describe('demos/components/slider/navigation', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-navigation').as('demo')
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

  it('TEST loop navigation, loop dragging beyond.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .get('[data-xt-nav="-1"]')
      .first()
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(true)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        expect(self.targets[6].classList.contains('on')).to.equal(true)
      })
      .get('[data-xt-nav="1"]')
      .last()
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
      })

      .get(self.targets[0])
      .trigger('mousedown', { clientX: 0, clientY: 0, which: 1 })
      .trigger('mousemove', { clientX: 400, clientY: 0 })
      .wait(100)
      .trigger('mouseup', { force: true })
      .wait(750) // after animation
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(true)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        expect(self.targets[6].classList.contains('on')).to.equal(true)
      })

      .get(self.targets[6])
      .trigger('mousedown', { clientX: 0, clientY: 0, which: 1 })
      .trigger('mousemove', { clientX: -400, clientY: 0 })
      .wait(100)
      .trigger('mouseup', { force: true })
      .wait(750) // after animation
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
      })
  })
})

describe('demos/components/slider/pagination', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-pagination').as('demo')
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

  it('TEST pagination elements activation also on init, interaction deactivation and activation with pointer-events-none, scroll lock.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .get(self.targets[0])
      .should('be.visible') // racecondition slider
      .then(() => {
        expect(self.elements.length).to.equal(40)
        expect(self.elements[0].classList.contains('on')).to.equal(true)
        expect(self.elements[1].classList.contains('on')).to.equal(false)
        expect(self.elements[2].classList.contains('on')).to.equal(false)
        expect(self.elements[3].classList.contains('on')).to.equal(false)
        expect(self.elements[4].classList.contains('on')).to.equal(false)
        expect(self.elements[5].classList.contains('on')).to.equal(true)
        expect(self.elements[6].classList.contains('on')).to.equal(false)
        expect(self.elements[7].classList.contains('on')).to.equal(false)
        expect(self.elements[8].classList.contains('on')).to.equal(false)
        expect(self.elements[9].classList.contains('on')).to.equal(false)
        expect(self.elements[10].classList.contains('on')).to.equal(true)
        expect(self.elements[11].classList.contains('on')).to.equal(false)
        expect(self.elements[12].classList.contains('on')).to.equal(false)
        expect(self.elements[13].classList.contains('on')).to.equal(false)
        expect(self.elements[14].classList.contains('on')).to.equal(false)
        expect(self.elements[15].classList.contains('on')).to.equal(true)
        expect(self.elements[16].classList.contains('on')).to.equal(false)
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
        expect(self.elements[6].classList.contains('on')).to.equal(true)
        expect(self.elements[7].classList.contains('on')).to.equal(false)
        expect(self.elements[8].classList.contains('on')).to.equal(false)
        expect(self.elements[9].classList.contains('on')).to.equal(false)
        expect(self.elements[10].classList.contains('on')).to.equal(false)
        expect(self.elements[11].classList.contains('on')).to.equal(true)
        expect(self.elements[12].classList.contains('on')).to.equal(false)
        expect(self.elements[13].classList.contains('on')).to.equal(false)
        expect(self.elements[14].classList.contains('on')).to.equal(false)
        expect(self.elements[15].classList.contains('on')).to.equal(false)
        expect(self.elements[16].classList.contains('on')).to.equal(true)
      })

      .get(self.elements[6])
      .trigger('touchstart', { clientX: undefined, clientY: undefined, touches: [{ clientX: 0, clientY: 0 }] })
      .trigger('touchmove', { clientX: undefined, clientY: undefined, touches: [{ clientX: 0, clientY: 200 }] })
      .then(() => {
        expect(self.elements[6].closest('.pointer-events-none')).to.equal(null)
      })
      .trigger('touchmove', {
        clientX: undefined,
        clientY: undefined,
        touches: [{ clientX: 200, clientY: 0 }],
        force: true,
      })
      .wait(100)
      .trigger('touchend', { force: true })
      .wait(750) // after animation
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(false)
        expect(self.elements[1].classList.contains('on')).to.equal(true)
        expect(self.elements[2].classList.contains('on')).to.equal(false)
        expect(self.elements[3].classList.contains('on')).to.equal(false)
        expect(self.elements[4].classList.contains('on')).to.equal(false)
        expect(self.elements[5].classList.contains('on')).to.equal(false)
        expect(self.elements[6].classList.contains('on')).to.equal(true)
        expect(self.elements[7].classList.contains('on')).to.equal(false)
        expect(self.elements[8].classList.contains('on')).to.equal(false)
        expect(self.elements[9].classList.contains('on')).to.equal(false)
        expect(self.elements[10].classList.contains('on')).to.equal(false)
        expect(self.elements[11].classList.contains('on')).to.equal(true)
        expect(self.elements[12].classList.contains('on')).to.equal(false)
        expect(self.elements[13].classList.contains('on')).to.equal(false)
        expect(self.elements[14].classList.contains('on')).to.equal(false)
        expect(self.elements[15].classList.contains('on')).to.equal(false)
        expect(self.elements[16].classList.contains('on')).to.equal(true)
      })

      .get(self.elements[6])
      .trigger('touchstart', { clientX: undefined, clientY: undefined, touches: [{ clientX: 0, clientY: 0 }] })
      .trigger('touchmove', { clientX: undefined, clientY: undefined, touches: [{ clientX: -200, clientY: 0 }] })
      .then(() => {
        expect(self.elements[6].closest('.pointer-events-none')).to.not.equal(null)
      })
      .trigger('touchmove', {
        clientX: undefined,
        clientY: undefined,
        touches: [{ clientX: 0, clientY: 200 }],
        force: true,
      })
      .wait(100)
      .trigger('touchend', { force: true })
      .wait(750) // after animation
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(false)
        expect(self.elements[1].classList.contains('on')).to.equal(false)
        expect(self.elements[2].classList.contains('on')).to.equal(true)
        expect(self.elements[3].classList.contains('on')).to.equal(false)
        expect(self.elements[4].classList.contains('on')).to.equal(false)
        expect(self.elements[5].classList.contains('on')).to.equal(false)
        expect(self.elements[6].classList.contains('on')).to.equal(false)
        expect(self.elements[7].classList.contains('on')).to.equal(true)
        expect(self.elements[8].classList.contains('on')).to.equal(false)
        expect(self.elements[9].classList.contains('on')).to.equal(false)
        expect(self.elements[10].classList.contains('on')).to.equal(false)
        expect(self.elements[11].classList.contains('on')).to.equal(false)
        expect(self.elements[12].classList.contains('on')).to.equal(true)
        expect(self.elements[13].classList.contains('on')).to.equal(false)
        expect(self.elements[14].classList.contains('on')).to.equal(false)
        expect(self.elements[15].classList.contains('on')).to.equal(false)
        expect(self.elements[16].classList.contains('on')).to.equal(false)
        expect(self.elements[17].classList.contains('on')).to.equal(true)
      })

      .get(self.elements[18])
      .trigger('touchstart', { clientX: undefined, clientY: undefined, touches: [{ clientX: 0, clientY: 0 }] })
      .trigger('touchmove', { clientX: undefined, clientY: undefined, touches: [{ clientX: -20, clientY: 0 }] })
      .then(() => {
        expect(self.elements[6].closest('.pointer-events-none')).to.equal(null)
      })
      .wait(100)
      .trigger('click')
      .trigger('touchend', { force: true })
      .wait(750) // after animation
      .then(() => {
        expect(self.elements[0].classList.contains('on')).to.equal(false)
        expect(self.elements[1].classList.contains('on')).to.equal(false)
        expect(self.elements[2].classList.contains('on')).to.equal(false)
        expect(self.elements[3].classList.contains('on')).to.equal(true)
        expect(self.elements[4].classList.contains('on')).to.equal(false)
        expect(self.elements[5].classList.contains('on')).to.equal(false)
        expect(self.elements[6].classList.contains('on')).to.equal(false)
        expect(self.elements[7].classList.contains('on')).to.equal(false)
        expect(self.elements[8].classList.contains('on')).to.equal(true)
        expect(self.elements[9].classList.contains('on')).to.equal(false)
        expect(self.elements[10].classList.contains('on')).to.equal(false)
        expect(self.elements[11].classList.contains('on')).to.equal(false)
        expect(self.elements[12].classList.contains('on')).to.equal(false)
        expect(self.elements[13].classList.contains('on')).to.equal(true)
        expect(self.elements[14].classList.contains('on')).to.equal(false)
        expect(self.elements[15].classList.contains('on')).to.equal(false)
        expect(self.elements[16].classList.contains('on')).to.equal(false)
        expect(self.elements[17].classList.contains('on')).to.equal(false)
      })
  })
})

describe('demos/components/slider/jump', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-jump').as('demo')
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

  it('TEST jump and not jump click.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition

      .get(self.targets[2])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
      })

      .get(self.targets[3])
      .click('left', { force: true })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(true)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
      })

      .get(self.targets[2])
      .click('right', { force: true })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
      })
  })
})

describe('demos/components/slider/autoheight', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-autoheight').as('demo')
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

  it('TEST autoheight.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(parseFloat(container.querySelector('[data-xt-slider-autoheight]').style.height)).to.closeTo(101, 10)
      })
      .get(self.elements[2])
      .click()
      .then(() => {
        expect(parseFloat(container.querySelector('[data-xt-slider-autoheight]').style.height)).to.closeTo(128, 10)
      })
  })
})

describe('demos/components/slider/progress', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-progress').as('demo')
    cy.get('@demo').find('.xt-slider').as('container')
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

  it('TEST auto on change.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .window()
      .trigger('blur')
      .window()
      .trigger('focus')
      .wait(4250)
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
      })
      .get(self.elements[2])
      .click()
      .wait(4250)
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(true)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
      })
      .get(self.targets[3])
      .click()
      .wait(4250)
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(true)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
      })
  })
})

describe('demos/components/slider/nooverflow', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-nooverflow').as('demo')
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

  it('TEST deactivation and position, activation on resize.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(container.getAttribute('data-xt-slider-disabled')).to.equal('')
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(190.75px)')
      })
      .viewport('iphone-6')
      .get(container)
      .should('have.not.attr', 'data-xt-slider-disabled') // racecondition
      .frame()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(0px)')
      })
  })
})

describe('demos/components/slider/nooverflow-false', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-nooverflow-false').as('demo')
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

  it('TEST on resize grouping and wrap.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(container.getAttribute('data-xt-slider-disabled')).to.equal(null)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(286.125px)')
      })
      .viewport('iphone-6')

      .get(self.targets[1])
      .should('have.not.class', 'on') // racecondition
      .frame()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(0px)')
      })
      .get(container)
      .find('[data-xt-slider-element]')
      .eq(2)
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(-596px)')
      })
  })
})

describe('demos/components/slider/media-loaded', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-media-loaded').as('demo')
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

  it('TEST activation and position on change.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .find('[data-xt-slider-element]')
      .eq(5)
      .should('have.class', 'xt-medialoaded') // racecondition
      .click({ force: true })
      .get(container)
      .find('[data-xt-slider-target]')
      .eq(5)
      .should('have.class', 'xt-medialoaded') // racecondition
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.be.oneOf([
          'translateX(-2835px)',
          'translateX(-2849px)',
          'translateX(-3815px)',
        ])
      })
  })
})

describe('demos/components/slider/dragposition-js', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-dragposition-js').as('demo')
    cy.get('@demo').find('.xt-slider').as('container')
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

  it('TEST activation and drag activation.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translate(0px, 0px)')
      })

      .get(self.targets[0])
      .trigger('mousedown', { clientX: 0, clientY: 0, which: 1 })
      .trigger('mousemove', { clientX: -400, clientY: 0 })
      .wait(100)
      .trigger('mouseup', { force: true })
      .wait(750) // after animation
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(true)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal(
          'translate(-699.406px, 0px)',
        )
      })
      .get(self.elements[1])
      .click()
      .wait(750) // after animation
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal(
          'translate(-158.953px, 0px)',
        )
      })
  })
})

describe('demos/themes/hero/slider-hero-v2', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit('/demos/themes/hero/slider-hero-v2').window().as('win')
    cy.get('.demo--slider-hero-v2').as('demo')
    cy.get('@demo').find('.xt-slider').as('container')
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

  it('TEST activation and drag activation.', function () {
    const translateMoving = 635
    const translateStill = 1265
    const delta = 600
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
      .get(self.elements[1])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[0].querySelector('.hero-cover') })[0])).to.closeTo(
          -translateMoving,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[1].querySelector('.hero-cover') })[0])).to.closeTo(
          translateStill,
          0,
        )
      })
      .get(self.elements[2])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[1].querySelector('.hero-cover') })[0])).to.closeTo(
          -translateMoving,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[2].querySelector('.hero-cover') })[0])).to.closeTo(
          translateStill,
          0,
        )
      })
      .get(self.elements[3])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[2].querySelector('.hero-cover') })[0])).to.closeTo(
          -translateMoving,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[3].querySelector('.hero-cover') })[0])).to.closeTo(
          translateStill,
          0,
        )
      })
      .get(self.elements[0])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[3].querySelector('.hero-cover') })[0])).to.closeTo(
          translateMoving,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[0].querySelector('.hero-cover') })[0])).to.closeTo(
          -translateStill,
          0,
        )
      })
      .get(self.elements[1])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[0].querySelector('.hero-cover') })[0])).to.closeTo(
          -translateMoving,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[1].querySelector('.hero-cover') })[0])).to.closeTo(
          -translateStill,
          0,
        )
      })
      .get(self.elements[2])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[1].querySelector('.hero-cover') })[0])).to.closeTo(
          -translateMoving,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[2].querySelector('.hero-cover') })[0])).to.closeTo(
          -translateStill,
          0,
        )
      })
      .get(self.elements[3])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[2].querySelector('.hero-cover') })[0])).to.closeTo(
          -translateMoving,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[3].querySelector('.hero-cover') })[0])).to.closeTo(
          translateStill,
          0,
        )
      })
  })
})

describe('demos/themes/hero/slider-hero-v1', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit('/demos/themes/hero/slider-hero-v1').window().as('win')
    cy.get('.demo--slider-hero-v1').as('demo')
    cy.get('@demo').find('.xt-slider').as('container')
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

  it('TEST drag looping going back and forth between first and last, pagination looping first and second to last, drag sx then drag 2 times dx, pagination looping last and second to first, pagination jump combinations, multiple click should not change slide, click after drag should not stop animation.', function () {
    const translateOut = 850
    const translateIn = 400
    const delta = 350

    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })

      .get(self.targets[0])
      .click() // multiple click should not change slide
      .wait(200) // after some animation
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
      // drag looping going back and forth between first and last

      .get(self.targets[0])
      .trigger('mousedown', { clientX: 0, clientY: 0, which: 1 }) // not working without client positions
      .trigger('mousemove', { clientX: 400, clientY: 0 })
      .wait(100)
      .trigger('mouseup', { force: true })
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[0].querySelector('.hero') })[0])).to.closeTo(
          translateOut,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[5].querySelector('.hero') })[0])).to.closeTo(
          -translateIn,
          delta,
        )
      })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })

      .get(self.targets[5])
      .trigger('mousedown', { clientX: 0, clientY: 0, which: 1 }) // not working without client positions
      .trigger('mousemove', { clientX: -400, clientY: 0 })
      .wait(100)
      .trigger('mouseup', { force: true })
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[5].querySelector('.hero') })[0])).to.closeTo(
          -translateOut,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[0].querySelector('.hero') })[0])).to.closeTo(
          translateIn,
          delta,
        )
      })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
      // pagination looping first and second to last
      .get(self.elements[4])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[0].querySelector('.hero') })[0])).to.closeTo(
          -translateOut,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[4].querySelector('.hero') })[0])).to.closeTo(
          translateIn,
          delta,
        )
      })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(true)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
      .get(self.elements[0])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[4].querySelector('.hero') })[0])).to.closeTo(
          translateOut,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[0].querySelector('.hero') })[0])).to.closeTo(
          -translateIn,
          delta,
        )
      })

      .get(self.targets[0])
      .click() // multiple click should not change slide
      .wait(200) // after some animation
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
      // drag sx then drag 2 times dx
      .get(self.elements[2])
      .click()
      .wait(200) // after some animation

      .get(self.targets[2])
      .trigger('mousedown', { clientX: 0, clientY: 0, which: 1 }) // not working without client positions
      .trigger('mousemove', { clientX: 400, clientY: 0 })
      .wait(100)
      .trigger('mouseup', { force: true })
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[2].querySelector('.hero') })[0])).to.closeTo(
          translateOut,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[1].querySelector('.hero') })[0])).to.closeTo(
          -translateIn,
          delta,
        )
      })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })

      .get(self.targets[1])
      .trigger('mousedown', { clientX: 0, clientY: 0, which: 1 }) // not working without client positions
      .trigger('mousemove', { clientX: -400, clientY: 0 })
      .wait(100)
      .trigger('mouseup', { force: true })
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[1].querySelector('.hero') })[0])).to.closeTo(
          -translateOut,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[2].querySelector('.hero') })[0])).to.closeTo(
          translateIn,
          delta,
        )
      })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })

      .get(self.targets[2])
      .trigger('mousedown', { clientX: 0, clientY: 0, which: 1 }) // not working without client positions
      .trigger('mousemove', { clientX: -400, clientY: 0 })
      .wait(100)
      .trigger('mouseup', { force: true })
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[2].querySelector('.hero') })[0])).to.closeTo(
          -translateOut,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[3].querySelector('.hero') })[0])).to.closeTo(
          translateIn,
          delta,
        )
      })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(true)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
      // 2 > 5 > 3 > 1
      .get(self.elements[1])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[3].querySelector('.hero') })[0])).to.closeTo(
          translateOut,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[1].querySelector('.hero') })[0])).to.closeTo(
          -translateIn,
          delta,
        )
      })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
      .get(self.elements[5])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[1].querySelector('.hero') })[0])).to.closeTo(
          -translateOut,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[5].querySelector('.hero') })[0])).to.closeTo(
          translateIn,
          delta,
        )
      })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
      .get(self.elements[3])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[5].querySelector('.hero') })[0])).to.closeTo(
          translateOut,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[3].querySelector('.hero') })[0])).to.closeTo(
          -translateIn,
          delta,
        )
      })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(true)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
      .get(self.elements[1])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[3].querySelector('.hero') })[0])).to.closeTo(
          translateOut,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[1].querySelector('.hero') })[0])).to.closeTo(
          -translateIn,
          delta,
        )
      })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
      // 5 > 1 > 5 > 1
      .get(self.elements[4])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[1].querySelector('.hero') })[0])).to.closeTo(
          -translateOut,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[4].querySelector('.hero') })[0])).to.closeTo(
          translateIn,
          delta,
        )
      })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(true)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
      .get(self.elements[1])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[4].querySelector('.hero') })[0])).to.closeTo(
          translateOut,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[1].querySelector('.hero') })[0])).to.closeTo(
          -translateIn,
          delta,
        )
      })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
      .get(self.elements[4])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[1].querySelector('.hero') })[0])).to.closeTo(
          -translateOut,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[4].querySelector('.hero') })[0])).to.closeTo(
          translateIn,
          delta,
        )
      })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(true)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
      .get(self.elements[1])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[4].querySelector('.hero') })[0])).to.closeTo(
          translateOut,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[1].querySelector('.hero') })[0])).to.closeTo(
          -translateIn,
          delta,
        )
      })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
      // 2 > 5 > 3 > 1
      .get(self.elements[5])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[1].querySelector('.hero') })[0])).to.closeTo(
          -translateOut,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[5].querySelector('.hero') })[0])).to.closeTo(
          translateIn,
          delta,
        )
      })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
      .get(self.elements[3])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[5].querySelector('.hero') })[0])).to.closeTo(
          translateOut,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[3].querySelector('.hero') })[0])).to.closeTo(
          -translateIn,
          delta,
        )
      })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(true)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
      .get(self.elements[1])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[3].querySelector('.hero') })[0])).to.closeTo(
          translateOut,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[1].querySelector('.hero') })[0])).to.closeTo(
          -translateIn,
          delta,
        )
      })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
      // 2 > 3 > 1
      .get(self.elements[4])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[1].querySelector('.hero') })[0])).to.closeTo(
          -translateOut,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[4].querySelector('.hero') })[0])).to.closeTo(
          translateIn,
          delta,
        )
      })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(true)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
      .get(self.elements[1])
      .click()
      .wait(200) // after some animation
      .then(() => {
        expect(parseFloat(Xt.getTranslate({ el: self.targets[4].querySelector('.hero') })[0])).to.closeTo(
          translateOut,
          delta,
        )
        expect(parseFloat(Xt.getTranslate({ el: self.targets[1].querySelector('.hero') })[0])).to.closeTo(
          -translateIn,
          delta,
        )
      })
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
      // click after drag should not stop animation.

      .get(self.targets[1])
      .trigger('mousedown', { clientX: 0, clientY: 0, which: 1 }) // not working without client positions
      .trigger('mousemove', { clientX: 400, clientY: 0 })
      .wait(100)
      .trigger('mouseup', { force: true })
      .wait(200) // after some animation

      .get(self.targets[1])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('')
      })
  })
})
