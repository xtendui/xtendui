const url = '/hidden/test'

describe('demos/hidden/test', function () {
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

  it('TEST on change page menu mobile docs should not flickr and should be visible and should be scrollable and should be unique and to desktop should disable overlay.', function () {
    cy.viewport('iphone-6')
      .get('.gatsby_menu--button')
      .should('have.attr', 'data-xt-overlay-init', '') // @RACECONDITION
      .click()
      .should('have.class', 'done') // @RACECONDITION
      .then(() => {
        cy.get('.gatsby_button-site-header_link')
          .eq(0)
          .click()
          .then(() => {
            cy.get('.gatsby_button-site-header_link')
              .eq(1)
              .click()
              .then(() => {
                cy.get('.gatsby_button-site-header_link')
                  .eq(0)
                  .click()
                  .then(() => {
                    cy.get('.xt-overlay.on')
                      .as('overlay')
                      .then(() => {
                        const overlay = this.overlay[0]
                        expect(overlay.classList.contains('on')).to.equal(true)
                        expect(overlay.classList.contains('in')).to.equal(true)
                        expect(overlay.parentNode.tagName).to.equal('BODY')
                        expect(overlay.parentNode).to.have.class('xt-scrollbar-overlay')
                        expect(this.overlay.length).to.equal(1)
                        cy.viewport('macbook-13')
                          .get('@overlay')
                          .should('have.attr', 'data-xt-overlay-disabled', '') // @RACECONDITION
                          .raf()
                          .then(() => {
                            expect(overlay.parentNode.tagName).to.not.equal('BODY')
                            expect(overlay.closest('body')).to.not.have.class('xt-scrollbar-overlay')
                          })
                      })
                  })
              })
          })
      })
  })

  it('TEST open code from demos should show code and switching mode should change code and copying code should be without highlight.', function () {
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

  it('TEST demos demos changing demo should change hash and browser location prev next should change demo and initial activation on page load.', function () {
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
      .should('be.visible') // @RACECONDITION
      .then(() => {
        const full = this.full[0]
        expect(full.classList.contains('on')).to.equal(true)
        expect(full.classList.contains('in')).to.equal(true)
      })
  })
})
