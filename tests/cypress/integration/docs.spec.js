const url = '/xtendui/hidden/test/docs-test'

describe('home', function () {
  let win

  beforeEach(function () {
    cy.visit('/xtendui/').window().as('win')
  })

  beforeEach(function () {
    win = this.win
    cy.spy(win.console, 'error').as('consoleError')
  })

  afterEach(() => {
    cy.get('@consoleError').should('not.be.called')
  })

  it('TEST homepage scroll all and no console errors.', function () {
    cy.scrollTo('center').scrollTo('bottom')
  })
})

describe('docs', function () {
  let win

  beforeEach(function () {
    cy.visit(url).window().as('win')
  })

  beforeEach(function () {
    win = this.win
    cy.spy(win.console, 'error').as('consoleError')
  })

  afterEach(() => {
    cy.get('@consoleError').should('not.be.called')
  })

  it('TEST on change page menu mobile docs should not flickr, should be visible, should be unique, to desktop should disable overlay.', function () {
    cy.viewport('iphone-6')
      .get('.docs_menu--button')
      .should('have.attr', 'data-xt-overlay-init', '') // racecondition
      .click()
      .should('have.class', 'done') // racecondition
      .frame()
      .get('.docs_button-site-header_link')
      .eq(0)
      .click()
      .url()
      .should('include', '/intro')
      .frame()
      .get('.docs_button-site-header_link')
      .eq(1)
      .click()
      .url()
      .should('include', '/components')
      .frame()
      .get('.docs_button-site-header_link')
      .eq(0)
      .click()
      .url()
      .should('include', '/intro')
      .frame()
      .get('#docs_menu--overlay')
      .as('overlay')
      .then(() => {
        expect(this.overlay.length).to.equal(1)
        expect(this.overlay[0].classList.contains('on')).to.equal(true)
        expect(this.overlay[0].classList.contains('in')).to.equal(true)
        expect(this.overlay[0].parentNode.tagName).to.equal('BODY')
        expect(this.overlay[0].parentNode).to.have.class('xt-scrollbar-overlay')
      })
      .viewport('macbook-13')
      .get('@overlay')
      .should('have.attr', 'data-xt-overlay-disabled', '') // racecondition
      .frame()
      .then(() => {
        expect(this.overlay[0].parentNode.tagName).to.not.equal('BODY')
        expect(this.overlay[0].closest('body')).to.not.have.class('xt-scrollbar-overlay')
      })
  })

  it('TEST open code from demos should show code, copying code should be without highlight.', function () {
    cy.get('.docs_demo_inner')
      .should('have.attr', 'data-xt-toggle-init', '') // racecondition
      .get('.button--show-code')
      .eq(0)
      .click()
      .get('.docs_demo')
      .as('demo')
      .find('.button--clipboard')
      .eq(0)
      .click()
      .get('@demo')
      .find('.docs_demo_code_body_item.on pre')
      .as('pre')
      .then(() => {
        const clipboard = win.Xt.dataStorage.get(this.pre[0], 'sourceCode')
        expect(clipboard).to.not.match(/\*\*\*/)
        expect(clipboard.length).be.gte(1000)
      })
      .get('.button--open-full')
      .eq(0)
      .click()
      .then(() => {
        const clipboard = win.Xt.dataStorage.get(this.pre[0], 'sourceCode')
        expect(clipboard).to.not.match(/\*\*\*/)
        expect(clipboard.length).be.gte(1000)
      })
      .get('@demo')
      .get('.docs_demo_code_tabs_left button')
      .eq(1)
      .click()
      .get('@demo')
      .find('.docs_demo_code_body_item.on pre')
      .as('pre')
      .then(() => {
        const clipboard = win.Xt.dataStorage.get(this.pre[0], 'sourceCode')
        expect(clipboard).to.not.match(/\*\*\*/)
        expect(clipboard.length).be.equal(44)
      })
  })

  it('TEST demos demos changing demo should change hash, browser navigation should change demo, initial activation on page load.', function () {
    cy.get('.docs_demo_inner')
      .should('have.attr', 'data-xt-toggle-init', '') // racecondition
      .get('.docs_demo_tabs_left button')
      .eq(1)
      .click()
      .get('.button--open-full')
      .eq(0)
      .click()
      .hash()
      .should('eq', '#demos-components-toggle-animation-noqueue')
      .get('#docs_open-full')
      .find('.docs_demo_tabs_left button')
      .eq(0)
      .click()
      .hash()
      .should('eq', '#demos-components-toggle-animation-queue')
      .go(-1)
      .hash()
      .should('eq', '#demos-components-toggle-animation-noqueue')
      .reload()
      .get('#docs_open-full')
      .as('full')
      .should('be.visible') // racecondition
      .get('.docs_demo_inner')
      .should('have.attr', 'data-xt-toggle-init', '') // racecondition
      .frame()
      .then(() => {
        const full = this.full[0]
        expect(full.classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(full.classList.contains('in')).to.equal(true)
        })
      })
  })
})
