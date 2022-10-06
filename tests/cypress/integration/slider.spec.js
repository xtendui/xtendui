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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
  })

  it('TEST grouping and drag activation.', function () {
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
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(-160px)')
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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
  })

  it('TEST grouping and drag activation.', function () {
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
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(-192px)')
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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
  })

  it('TEST grouping and drag activation.', function () {
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
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(-704px)')
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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
  })

  it('TEST grouping and drag activation.', function () {
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
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(288px)')
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
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(96px)')
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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
  })

  it('TEST grouping and drag activation.', function () {
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
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(-192px)')
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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
  })

  it('TEST grouping and drag activation.', function () {
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
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(576px)')
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
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(384px)')
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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
  })

  it('TEST grouping and drag activation, wrap position.', function () {
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
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(288px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('')
        expect(self.targets[4].style.transform).to.equal('translateX(-2176px)')
        expect(self.targets[5].style.transform).to.equal('translateX(-2176px)')
        expect(self.targets[6].style.transform).to.equal('translateX(-2176px)')
      })
      .get(self.elements[6])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        expect(self.targets[6].classList.contains('on')).to.equal(true)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(480px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('')
        expect(self.targets[4].style.transform).to.equal('translateX(-2176px)')
        expect(self.targets[5].style.transform).to.equal('translateX(-2176px)')
        expect(self.targets[6].style.transform).to.equal('translateX(-2176px)')
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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
  })

  it('TEST grouping and drag activation, wrap position.', function () {
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
        expect(self.targets[6].style.transform).to.equal('translateX(-2176px)')
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
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(192px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('')
        expect(self.targets[4].style.transform).to.equal('')
        expect(self.targets[5].style.transform).to.equal('translateX(-2176px)')
        expect(self.targets[6].style.transform).to.equal('translateX(-2176px)')
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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
  })

  it('TEST grouping and drag activation, wrap position.', function () {
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
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(576px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('')
        expect(self.targets[4].style.transform).to.equal('translateX(-2176px)')
        expect(self.targets[5].style.transform).to.equal('translateX(-2176px)')
        expect(self.targets[6].style.transform).to.equal('translateX(-2176px)')
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
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(768px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('translateX(-2176px)')
        expect(self.targets[4].style.transform).to.equal('translateX(-2176px)')
        expect(self.targets[5].style.transform).to.equal('translateX(-2176px)')
        expect(self.targets[6].style.transform).to.equal('translateX(-2176px)')
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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
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
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(192px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('')
        expect(self.targets[4].style.transform).to.equal('translateX(-2176px)')
        expect(self.targets[5].style.transform).to.equal('translateX(-2176px)')
        expect(self.targets[6].style.transform).to.equal('translateX(-2176px)')
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
        expect(self.targets[5].style.transform).to.equal('translateX(-1313px)')
        expect(self.targets[6].style.transform).to.equal('translateX(-1313px)')
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
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(192px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('')
        expect(self.targets[4].style.transform).to.equal('translateX(-2176px)')
        expect(self.targets[5].style.transform).to.equal('translateX(-2176px)')
        expect(self.targets[6].style.transform).to.equal('translateX(-2176px)')
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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
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
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(288px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('')
        expect(self.targets[4].style.transform).to.equal('translateX(-2176px)')
        expect(self.targets[5].style.transform).to.equal('translateX(-2176px)')
        expect(self.targets[6].style.transform).to.equal('translateX(-2176px)')
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
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(480px)')
        expect(self.targets[0].style.transform).to.equal('')
        expect(self.targets[1].style.transform).to.equal('')
        expect(self.targets[2].style.transform).to.equal('')
        expect(self.targets[3].style.transform).to.equal('')
        expect(self.targets[4].style.transform).to.equal('translateX(-2176px)')
        expect(self.targets[5].style.transform).to.equal('translateX(-2176px)')
        expect(self.targets[6].style.transform).to.equal('translateX(-2176px)')
      })
  })
})

describe('demos/components/slider/exclude', function () {
  let win
  let Xt
  let container
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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
    toggles = this.toggles
    slides = this.slides
  })

  it('TEST activation exclude.', function () {
    cy.get('@demo')
      .should('have.attr', 'data-xt-toggle-init', '') // racecondition
      .then(() => {
        expect(self.targets.length).to.equal(5)
        expect(slides[0].classList.contains('on')).to.equal(true)
        expect(slides[1].classList.contains('on')).to.equal(true)
        expect(slides[2].classList.contains('on')).to.equal(true)
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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
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
  let toggles

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--slider-pagination').as('demo')
    cy.get('@demo').find('[data-xt-slider]').as('container')
    cy.get('@demo').find('[data-xt-slider-element]').as('toggles')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
    toggles = this.toggles
  })

  it('TEST pagination elements activation also on init, interaction deactivation and activation with pointer-events-none.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(self.elements.length).to.equal(40)
        expect(toggles[0].classList.contains('on')).to.equal(true)
        expect(toggles[1].classList.contains('on')).to.equal(false)
        expect(toggles[2].classList.contains('on')).to.equal(false)
        expect(toggles[3].classList.contains('on')).to.equal(false)
        expect(toggles[4].classList.contains('on')).to.equal(false)
        expect(toggles[5].classList.contains('on')).to.equal(false)
        expect(toggles[6].classList.contains('on')).to.equal(true)
        expect(toggles[7].classList.contains('on')).to.equal(false)
        expect(toggles[8].classList.contains('on')).to.equal(false)
        expect(toggles[9].classList.contains('on')).to.equal(false)
        expect(toggles[10].classList.contains('on')).to.equal(false)
        expect(toggles[11].classList.contains('on')).to.equal(false)
        expect(toggles[12].classList.contains('on')).to.equal(true)
        expect(toggles[13].classList.contains('on')).to.equal(false)
        expect(toggles[14].classList.contains('on')).to.equal(false)
        expect(toggles[15].classList.contains('on')).to.equal(false)
        expect(toggles[16].classList.contains('on')).to.equal(false)
        expect(toggles[17].classList.contains('on')).to.equal(false)
      })
      .get(toggles[1])
      .click()
      .then(() => {
        expect(toggles[0].classList.contains('on')).to.equal(false)
        expect(toggles[1].classList.contains('on')).to.equal(true)
        expect(toggles[2].classList.contains('on')).to.equal(false)
        expect(toggles[3].classList.contains('on')).to.equal(false)
        expect(toggles[4].classList.contains('on')).to.equal(false)
        expect(toggles[5].classList.contains('on')).to.equal(false)
        expect(toggles[6].classList.contains('on')).to.equal(false)
        expect(toggles[7].classList.contains('on')).to.equal(true)
        expect(toggles[8].classList.contains('on')).to.equal(false)
        expect(toggles[9].classList.contains('on')).to.equal(false)
        expect(toggles[10].classList.contains('on')).to.equal(false)
        expect(toggles[11].classList.contains('on')).to.equal(false)
        expect(toggles[12].classList.contains('on')).to.equal(false)
        expect(toggles[13].classList.contains('on')).to.equal(true)
        expect(toggles[14].classList.contains('on')).to.equal(false)
        expect(toggles[15].classList.contains('on')).to.equal(false)
        expect(toggles[16].classList.contains('on')).to.equal(false)
        expect(toggles[17].classList.contains('on')).to.equal(false)
      })
      .get(toggles[6])
      .trigger('touchstart', { clientX: 0, clientY: 0, which: 1 })
      .trigger('touchmove', { clientX: -200, clientY: 0 })
      .then(() => {
        expect(toggles[6].closest('.pointer-events-none')).to.not.equal(null)
      })
      .wait(100)
      .trigger('touchend', { force: true })
      .wait(750) // after animation
      .then(() => {
        expect(toggles[0].classList.contains('on')).to.equal(false)
        expect(toggles[1].classList.contains('on')).to.equal(false)
        expect(toggles[2].classList.contains('on')).to.equal(true)
        expect(toggles[3].classList.contains('on')).to.equal(false)
        expect(toggles[4].classList.contains('on')).to.equal(false)
        expect(toggles[5].classList.contains('on')).to.equal(false)
        expect(toggles[6].classList.contains('on')).to.equal(false)
        expect(toggles[7].classList.contains('on')).to.equal(false)
        expect(toggles[8].classList.contains('on')).to.equal(true)
        expect(toggles[9].classList.contains('on')).to.equal(false)
        expect(toggles[10].classList.contains('on')).to.equal(false)
        expect(toggles[11].classList.contains('on')).to.equal(false)
        expect(toggles[12].classList.contains('on')).to.equal(false)
        expect(toggles[13].classList.contains('on')).to.equal(false)
        expect(toggles[14].classList.contains('on')).to.equal(true)
        expect(toggles[15].classList.contains('on')).to.equal(false)
        expect(toggles[16].classList.contains('on')).to.equal(false)
        expect(toggles[17].classList.contains('on')).to.equal(false)
      })
      .get(toggles[18])
      .trigger('touchstart', { clientX: 0, clientY: 0, which: 1 })
      .trigger('touchmove', { clientX: -20, clientY: 0 })
      .then(() => {
        expect(toggles[6].closest('.pointer-events-none')).to.equal(null)
      })
      .wait(100)
      .trigger('click')
      .trigger('touchend', { force: true })
      .wait(750) // after animation
      .then(() => {
        expect(toggles[0].classList.contains('on')).to.equal(true)
        expect(toggles[1].classList.contains('on')).to.equal(false)
        expect(toggles[2].classList.contains('on')).to.equal(false)
        expect(toggles[3].classList.contains('on')).to.equal(false)
        expect(toggles[4].classList.contains('on')).to.equal(false)
        expect(toggles[5].classList.contains('on')).to.equal(false)
        expect(toggles[6].classList.contains('on')).to.equal(true)
        expect(toggles[7].classList.contains('on')).to.equal(false)
        expect(toggles[8].classList.contains('on')).to.equal(false)
        expect(toggles[9].classList.contains('on')).to.equal(false)
        expect(toggles[10].classList.contains('on')).to.equal(false)
        expect(toggles[11].classList.contains('on')).to.equal(false)
        expect(toggles[12].classList.contains('on')).to.equal(true)
        expect(toggles[13].classList.contains('on')).to.equal(false)
        expect(toggles[14].classList.contains('on')).to.equal(false)
        expect(toggles[15].classList.contains('on')).to.equal(false)
        expect(toggles[16].classList.contains('on')).to.equal(false)
        expect(toggles[17].classList.contains('on')).to.equal(false)
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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
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
    cy.get(container).scrollIntoView()
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
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
      .get(self.elements[4])
      .click()
      .wait(4250)
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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
  })

  it('TEST deactivation and position, activation on resize.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(container.getAttribute('data-xt-slider-disabled')).to.equal('')
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(192px)')
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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
  })

  it('TEST on resize grouping and wrap.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .then(() => {
        expect(container.getAttribute('data-xt-slider-disabled')).to.equal(null)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(288px)')
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
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(303px)')
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
    cy.get(container).scrollIntoView()
    self = Xt.get({ name: 'xt-slider', el: container })
  })
  it('TEST activation and position on change.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-slider-init', '') // racecondition
      .find('[data-xt-slider-element]')
      .should('have.class', 'xt-medialoaded') // racecondition
      .eq(5)
      .click({ force: true })
      .get(container)
      .find('[data-xt-slider-target]')
      .eq(5)
      .should('have.class', 'xt-medialoaded') // racecondition
      .wait(1000)
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        expect(self.targets[3].classList.contains('on')).to.equal(false)
        expect(self.targets[4].classList.contains('on')).to.equal(false)
        expect(self.targets[5].classList.contains('on')).to.equal(true)
        expect(self.targets[6].classList.contains('on')).to.equal(false)
        expect(container.querySelector('[data-xt-slider-dragger]').style.transform).to.equal('translateX(-2833px)')
      })
  })
})
