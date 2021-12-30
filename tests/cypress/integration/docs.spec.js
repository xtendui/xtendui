const url = '/hidden/test/docs'

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
      .get('.gatsby_menu--button')
      .should('have.attr', 'data-xt-overlay-init', '') // racecondition
      .click()
      .should('have.class', 'done') // racecondition
      .frame()
      .then(() => {
        cy.get('.gatsby_button-site-header_link')
          .eq(0)
          .click()
          .url()
          .should('include', '/intro')
          .frame()
          .then(() => {
            cy.get('.gatsby_button-site-header_link')
              .eq(1)
              .click()
              .url()
              .should('include', '/components')
              .frame()
              .then(() => {
                cy.get('.gatsby_button-site-header_link')
                  .eq(0)
                  .click()
                  .url()
                  .should('include', '/intro')
                  .frame()
                  .then(() => {
                    cy.get('#gatsby_menu--overlay')
                      .as('overlay')
                      .then(() => {
                        expect(this.overlay.length).to.equal(1)
                        expect(this.overlay[0].classList.contains('on')).to.equal(true)
                        expect(this.overlay[0].classList.contains('in')).to.equal(true)
                        expect(this.overlay[0].parentNode.tagName).to.equal('BODY')
                        expect(this.overlay[0].parentNode).to.have.class('xt-scrollbar-overlay')
                        cy.viewport('macbook-13')
                          .get('@overlay')
                          .should('have.attr', 'data-xt-overlay-disabled', '') // racecondition
                          .frame()
                          .then(() => {
                            expect(this.overlay[0].parentNode.tagName).to.not.equal('BODY')
                            expect(this.overlay[0].closest('body')).to.not.have.class('xt-scrollbar-overlay')
                          })
                      })
                  })
              })
          })
      })
  })

  it('TEST open code from demos should show code, switching mode should change code, copying code should be without highlight.', function () {
    cy.get('.button--show-code').eq(0).click()
    cy.get('.gatsby_demo_code_tabs_left')
      .eq(0)
      .find('button')
      .as('button')
      .should('have.length', 2)
      .then(() => {
        expect(this.button[0]).to.have.text('html')
      })
    cy.get('.button--switch-react').eq(0).click()
    cy.get('.button--show-code').eq(0).click()
    cy.get('.gatsby_demo_code_tabs_left')
      .eq(0)
      .find('button')
      .as('button')
      .should('have.length', 1)
      .then(() => {
        expect(this.button[0]).to.have.text('jsx')
      })
    cy.get('.gatsby_demo')
      .as('demo')
      .find('.button--clipboard')
      .eq(0)
      .click()
      .then(() => {
        cy.get('@demo')
          .find('.gatsby_demo_code_body_item.on pre')
          .as('pre')
          .then(() => {
            const clipboard = win.Xt.dataStorage.get(this.pre[0], 'sourceCode')
            expect(clipboard).to.not.match(/\*\*\*/)
          })
      })
  })

  it('TEST demos demos changing demo should change hash, browser navigation should change demo, initial activation on page load.', function () {
    cy.get('.gatsby_demo_tabs_left button').eq(1).click()
    cy.get('.button--open-full').eq(0).click()
    cy.hash().should('eq', '#demos-components-toggle-animation-noqueue')
    cy.get('#gatsby_open-full').find('.gatsby_demo_tabs_left button').eq(0).click()
    cy.hash().should('eq', '#demos-components-toggle-animation-queue')
    cy.go(-1)
    cy.hash().should('eq', '#demos-components-toggle-animation-noqueue')
    cy.reload()
    cy.get('#gatsby_open-full')
      .as('full')
      .should('be.visible') // racecondition
      .frame()
      .then(() => {
        const full = this.full[0]
        expect(full.classList.contains('on')).to.equal(true)
        expect(full.classList.contains('in')).to.equal(true)
      })
  })
})
