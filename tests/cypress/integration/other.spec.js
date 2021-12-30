const url = '/hidden/test/other'

describe('demos/hidden/test/mount-unmount', function () {
  let win
  let Xt
  let demo
  let container
  let self

  beforeEach(function () {
    cy.visit(url).window().as('win')
    cy.get('.demo--mount-unmount').as('demo')
    cy.get('@demo').find('[data-xt-overlay]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    demo = this.demo[0]
    container = this.container[0]
    self = Xt.get({ name: 'xt-overlay', el: container })
  })

  it('TEST mount root once, this should be 1 on init, should remain 1 on deactivation.', function () {
    expect(demo.getAttribute('data-test-mountroot')).to.equal('1')
    container.dispatchEvent(new CustomEvent('off.trigger.xt.overlay'))
    expect(demo.getAttribute('data-test-mountroot')).to.equal('1')
  })

  it('TEST init xtNamespace, should be 1.', function () {
    const xtNamespace = Xt.dataStorage.get(self.ns, 'xtNamespace')
    expect(xtNamespace.length).to.equal(1)
  })

  it('TEST init classes and properties, should be `true true true true`.', { retries: 5 }, function () {
    expect(container.getAttribute('data-xt-overlay-init')).to.equal(null)
    expect(self.targets[0].classList.contains('on')).to.equal(true)
    expect(self.targets[0].classList.contains('in')).to.equal(true)
    expect(self.targets[0].classList.contains('initial')).to.equal(true)
    expect(self.initial).to.equal(true)
  })

  it('TEST after init classes and properties, should be `true true false false`.', function () {
    cy.frame().then(() => {
      expect(container.getAttribute('data-xt-overlay-init')).to.equal('')
      expect(self.targets[0].classList.contains('on')).to.equal(true)
      expect(self.targets[0].classList.contains('in')).to.equal(true)
      expect(self.targets[0].classList.contains('initial')).to.equal(false)
      expect(self.initial).to.equal(false)
    })
  })

  it('TEST unmount, this should increase by one on changing page and resize.', function () {
    cy.visit('/hidden/test/other')
      .go(-1)
      .get('.demo--mount-unmount')
      .as('demo')
      .should('be.visible') // racecondition
      .frame()
      .then(() => {
        cy.viewport('iphone-6')
          .frame()
          .then(() => {
            cy.viewport('macbook-13')
              .frame()
              .then(() => {
                cy.get('@demo').should('have.attr', 'data-test-resize', '2')
              })
          })
      })
  })

  it('TEST unmount should disable on deactivate, should remove from dom overlay.', function () {
    cy.frame().then(() => {
      demo.remove()
      cy.get(self.targets[0]).should('not.exist')
    })
  })

  it('TEST unmount, unmountArr should be the same, xtNamespace should be 0.', function () {
    const count = Xt._unmountArr.length
    expect(Xt.dataStorage.get(self.ns, 'xtNamespace').length).to.equal(1)
    demo.remove()
    cy.frame().then(() => {
      expect(Xt.dataStorage.get(self.ns, 'xtNamespace').length).to.equal(0)
      expect(Xt._unmountArr.length).to.equal(count - 2)
    })
  })
})

describe('demos/hidden/test/scrolltrigger-matches', function () {
  let win
  let Xt
  let demo
  let container
  let self

  beforeEach(function () {
    cy.visit('/demos/hidden/test/scrolltrigger-matches').window().as('win')
    cy.get('.demo--scrolltrigger-matches').as('demo')
    cy.get('@demo').find('[data-xt-overlay]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    demo = this.demo[0]
    container = this.container[0]
    self = Xt.get({ name: 'xt-overlay', el: container })
  })

  it('TEST pin resize this should be called one time on resize and Xt._mountArr should not increase.', function () {
    expect(Xt._mountArr.length).to.equal(6)
    cy.viewport('iphone-6')
      .frame()
      .then(() => {
        expect(Xt._mountArr.length).to.equal(6)
        cy.get('@demo')
          .should('have.attr', 'data-test-refresh', '1')
          .then(() => {
            cy.viewport('macbook-13')
              .frame()
              .then(() => {
                expect(Xt._mountArr.length).to.equal(6)
                cy.get('@demo').should('have.attr', 'data-test-refresh', '2')
              })
          })
      })
  })

  it('TEST resize and open/close, pin unmount this should NOT be called on resize, xtNamespace should be 1, should be 0 on unmount.', function () {
    expect(Xt.dataStorage.get(self.ns, 'xtNamespace').length).to.equal(1)
    cy.get('@demo')
      .should('have.attr', 'data-test-mount', '1')
      .get(self.elements[0])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[0].classList.contains('in')).to.equal(true)
        cy.viewport('iphone-6')
          .frame()
          .then(() => {
            expect(self.targets[0].classList.contains('on')).to.equal(true)
            expect(self.targets[0].classList.contains('in')).to.equal(true)
            expect(Xt.dataStorage.get(self.ns, 'xtNamespace').length).to.equal(1)
            cy.get(self.targets[0].querySelector('.xt-dismiss'))
              .click()
              .then(() => {
                expect(self.targets[0].classList.contains('on')).to.equal(false)
                expect(self.targets[0].classList.contains('in')).to.equal(false)
                cy.get('@demo')
                  .should('have.attr', 'data-test-mount', '1')
                  .then(() => {
                    cy.viewport('macbook-13')
                      .frame()
                      .then(() => {
                        expect(Xt.dataStorage.get(self.ns, 'xtNamespace').length).to.equal(1)
                        cy.get(self.elements[0])
                          .click()
                          .then(() => {
                            expect(self.targets[0].classList.contains('on')).to.equal(true)
                            expect(self.targets[0].classList.contains('in')).to.equal(true)
                            cy.get('@demo')
                              .should('have.attr', 'data-test-mount', '1')
                              .then(() => {
                                demo.remove()
                                cy.frame().then(() => {
                                  expect(Xt.dataStorage.get(self.ns, 'xtNamespace').length).to.equal(0)
                                })
                              })
                          })
                      })
                  })
              })
          })
      })
  })
})

describe('demos/themes/navigation/megamenu-v1', function () {
  let win
  let Xt
  let container
  let self
  let backdrop

  beforeEach(function () {
    cy.visit('/demos/themes/navigation/megamenu-v1').window().as('win')
    cy.get('.megamenu').as('container') // not .get('@demo')
    cy.get('@container').find('.xt-backdrop').as('backdrop')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    self = Xt.get({ name: 'xt-drop', el: container })
    backdrop = this.backdrop[0]
  })

  it('TEST direction and zIndex sequential activation and zIndex reset.', function () {
    cy.get(self.elements[0])
      .trigger('mouseenter')
      .wait(150) // after delay
      .then(() => {
        expect(self.targets[0].style.zIndex).to.equal('399')
        expect(self.direction).to.equal(0)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        cy.frameDouble().then(() => {
          expect(self.targets[0].classList.contains('in')).to.equal(true)
          expect(self.targets[1].classList.contains('in')).to.equal(false)
        })
        cy.get(self.elements[1])
          .trigger('mouseenter')
          .wait(150) // after delay
          .then(() => {
            expect(self.targets[1].style.zIndex).to.equal('398')
            expect(self.direction).to.equal(1)
            expect(self.targets[0].classList.contains('on')).to.equal(false)
            expect(self.targets[1].classList.contains('on')).to.equal(true)
            cy.frameDouble().then(() => {
              expect(self.targets[0].classList.contains('in')).to.equal(false)
              expect(self.targets[1].classList.contains('in')).to.equal(true)
            })
            cy.get(self.elements[0])
              .trigger('mouseenter')
              .wait(150) // after delay
              .then(() => {
                expect(self.targets[0].style.zIndex).to.equal('397')
                expect(self.direction).to.equal(-1)
                expect(self.targets[0].classList.contains('on')).to.equal(true)
                expect(self.targets[1].classList.contains('on')).to.equal(false)
                cy.frameDouble().then(() => {
                  expect(self.targets[0].classList.contains('in')).to.equal(true)
                  expect(self.targets[1].classList.contains('in')).to.equal(false)
                })
                cy.get(self.elements[0])
                  .trigger('mouseleave')
                  .wait(150) // after delay
                  .wait(750) // after animation
                  .then(() => {
                    expect(self.targets[0].style.zIndex).to.equal('400')
                    expect(self.targets[1].style.zIndex).to.equal('400')
                    expect(self.direction).to.equal(0)
                    expect(self.targets[0].classList.contains('on')).to.equal(false)
                    expect(self.targets[1].classList.contains('on')).to.equal(false)
                    cy.frameDouble().then(() => {
                      expect(self.targets[0].classList.contains('in')).to.equal(false)
                      expect(self.targets[1].classList.contains('in')).to.equal(false)
                    })
                  })
              })
          })
      })
  })

  it('TEST move slightly over other and then target should not change with delay, backdrop should not flickr.', function () {
    cy.get(self.elements[0])
      .trigger('mouseenter')
      .wait(150) // after delay
      .then(() => {
        expect(self.direction).to.equal(0)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.targets[0].classList.contains('in')).to.equal(true)
          expect(backdrop.classList.contains('on')).to.equal(true)
          cy.frameDouble().then(() => {
            expect(backdrop.classList.contains('in')).to.equal(true)
          })
        })
        cy.get(self.elements[1])
          .trigger('mouseenter')
          .then(() => {
            cy.frameDouble().then(() => {
              expect(backdrop.classList.contains('on')).to.equal(true)
              cy.frameDouble().then(() => {
                expect(backdrop.classList.contains('in')).to.equal(true)
              })
            })
          })
          .get(self.elements[0])
          .trigger('mouseenter')
          .then(() => {
            expect(self.direction).to.equal(-1)
            expect(self.targets[0].classList.contains('on')).to.equal(true)
            expect(self.targets[1].classList.contains('on')).to.equal(false)
            cy.frameDouble().then(() => {
              expect(self.targets[0].classList.contains('in')).to.equal(true)
              expect(self.targets[1].classList.contains('in')).to.equal(false)
              expect(backdrop.classList.contains('on')).to.equal(true)
              cy.frameDouble().then(() => {
                expect(backdrop.classList.contains('in')).to.equal(true)
              })
            })
          })
      })
  })
})

describe('demos/components/scrollto/usage', function () {
  let doc

  beforeEach(function () {
    cy.visit('/demos/components/scrollto/usage#anchor-2').document().as('doc')
    cy.get('.demo--scrollto').as('demo')
    cy.get('a').as('links')
    cy.get('.button--custom').as('buttons')
  })

  beforeEach(function () {
    doc = this.doc
  })

  it('TEST activation classes and scroll position on page load and scroll and browser navigation, scroll position on click elements, scroll position on click elements custom.', function () {
    cy.frameDouble().then(() => {
      expect(this.links[0].classList.contains('on')).to.equal(false)
      expect(this.links[1].classList.contains('on')).to.equal(false)
      expect(this.links[2].classList.contains('on')).to.equal(true)
      expect(doc.scrollingElement.scrollTop).to.closeTo(1987, 10)
      doc.scrollingElement.scrollTo(0, 0)
      cy.wait(500).then(() => {
        expect(this.links[0].classList.contains('on')).to.equal(true)
        expect(this.links[1].classList.contains('on')).to.equal(false)
        expect(this.links[2].classList.contains('on')).to.equal(false)
        cy.get(this.links[1])
          .click()
          .wait(1000) // after animation
          .then(() => {
            expect(this.links[0].classList.contains('on')).to.equal(false)
            expect(this.links[1].classList.contains('on')).to.equal(true)
            expect(this.links[2].classList.contains('on')).to.equal(false)
            expect(doc.scrollingElement.scrollTop).to.closeTo(801, 10)
            cy.go(-1).then(() => {
              expect(this.links[0].classList.contains('on')).to.equal(false)
              expect(this.links[1].classList.contains('on')).to.equal(false)
              expect(this.links[2].classList.contains('on')).to.equal(true)
              expect(doc.scrollingElement.scrollTop).to.closeTo(1987, 10)
              cy.go(1).then(() => {
                expect(this.links[0].classList.contains('on')).to.equal(false)
                expect(this.links[1].classList.contains('on')).to.equal(true)
                expect(this.links[2].classList.contains('on')).to.equal(false)
                expect(doc.scrollingElement.scrollTop).to.closeTo(801, 10)
                cy.get(this.buttons[0])
                  .click()
                  .wait(1000) // after animation
                  .then(() => {
                    expect(this.links[0].classList.contains('on')).to.equal(false)
                    expect(this.links[1].classList.contains('on')).to.equal(true)
                    expect(this.links[2].classList.contains('on')).to.equal(false)
                    expect(doc.scrollingElement.scrollTop).to.closeTo(1633, 10)
                  })
              })
            })
          })
      })
    })
  })
})

describe('demos/components/scrollto/overlay', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit('/demos/components/scrollto/overlay#anchor-2').window().as('win')
    cy.get('.demo--scrollto-overlay').as('demo')
    cy.get('@demo').find('[data-xt-overlay]').as('container')
    cy.get('a').as('links')
    cy.get('.button--custom').as('buttons')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    self = Xt.get({ name: 'xt-overlay', el: container })
  })

  it('TEST activation classes and scroll position on page load and scroll and browser navigation, scroll position on click elements, scroll position on click elements custom.', function () {
    cy.frameDouble().then(() => {
      expect(self.targets[0].classList.contains('on')).to.equal(true)
      cy.frameDouble().then(() => {
        expect(self.targets[0].classList.contains('in')).to.equal(true)
      })
      expect(this.links[0].classList.contains('on')).to.equal(false)
      expect(this.links[1].classList.contains('on')).to.equal(false)
      expect(this.links[2].classList.contains('on')).to.equal(true)
      expect(self.targets[0].scrollTop).to.closeTo(1987, 10)
      self.targets[0].scrollTo(0, 0)
      cy.wait(500).then(() => {
        expect(this.links[0].classList.contains('on')).to.equal(true)
        expect(this.links[1].classList.contains('on')).to.equal(false)
        expect(this.links[2].classList.contains('on')).to.equal(false)
        cy.get(this.links[4])
          .click()
          .wait(1000) // after animation
          .then(() => {
            expect(this.links[0].classList.contains('on')).to.equal(false)
            expect(this.links[1].classList.contains('on')).to.equal(true)
            expect(this.links[2].classList.contains('on')).to.equal(false)
            expect(self.targets[0].scrollTop).to.closeTo(801, 10)
            cy.get(self.targets[0].querySelector('.xt-dismiss'))
              .click()
              .then(() => {
                cy.visit('/demos/components/scrollto/overlay#').then(() => {
                  cy.go(-1).then(() => {
                    expect(self.targets[0].classList.contains('on')).to.equal(true)
                    cy.frameDouble().then(() => {
                      expect(self.targets[0].classList.contains('in')).to.equal(true)
                    })
                    expect(this.links[0].classList.contains('on')).to.equal(false)
                    expect(this.links[1].classList.contains('on')).to.equal(false)
                    expect(this.links[2].classList.contains('on')).to.equal(true)
                    expect(self.targets[0].scrollTop).to.closeTo(1987, 10)
                    cy.get(self.targets[0].querySelector('.xt-dismiss'))
                      .click()
                      .then(() => {
                        expect(self.targets[0].classList.contains('on')).to.equal(false)
                        cy.frameDouble().then(() => {
                          expect(self.targets[0].classList.contains('in')).to.equal(false)
                        })
                        cy.get(this.links[2])
                          .click()
                          .then(() => {
                            expect(self.targets[0].classList.contains('on')).to.equal(true)
                            cy.frameDouble().then(() => {
                              expect(self.targets[0].classList.contains('in')).to.equal(true)
                            })
                            expect(this.links[0].classList.contains('on')).to.equal(false)
                            expect(this.links[1].classList.contains('on')).to.equal(false)
                            expect(this.links[2].classList.contains('on')).to.equal(true)
                            expect(self.targets[0].scrollTop).to.closeTo(1987, 10)
                            cy.get(this.buttons[1])
                              .click()
                              .wait(1000) // after animation
                              .then(() => {
                                expect(this.links[0].classList.contains('on')).to.equal(false)
                                expect(this.links[1].classList.contains('on')).to.equal(true)
                                expect(this.links[2].classList.contains('on')).to.equal(false)
                                expect(self.targets[0].scrollTop).to.closeTo(1633, 10)
                              })
                          })
                      })
                  })
                })
              })
          })
      })
    })
  })
})

describe('demos/components/scrollto/toggle', function () {
  let win
  let doc
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit('/demos/components/scrollto/toggle#anchor-2').window().as('win').document().as('doc')
    cy.get('.demo--scrollto-toggle').as('demo')
    cy.get('@demo').find('[data-xt-toggle]').as('container')
  })

  beforeEach(function () {
    win = this.win
    doc = this.doc
    Xt = win.Xt
    container = this.container[0]
    self = Xt.get({ name: 'xt-toggle', el: container })
  })

  it('TEST activation classes and scroll position on page load and scroll and browser navigation, scroll position on click elements.', function () {
    cy.frameDouble().then(() => {
      expect(doc.scrollingElement.scrollTop).to.closeTo(545, 10)
      expect(self.targets[0].classList.contains('on')).to.equal(false)
      expect(self.targets[1].classList.contains('on')).to.equal(false)
      expect(self.targets[2].classList.contains('on')).to.equal(true)
      cy.frameDouble().then(() => {
        expect(self.targets[0].classList.contains('in')).to.equal(false)
        expect(self.targets[1].classList.contains('in')).to.equal(false)
        expect(self.targets[2].classList.contains('in')).to.equal(true)
      })
      doc.scrollingElement.scrollTo(0, 0)
      cy.wait(500).then(() => {
        cy.get(self.elements[0])
          .click()
          .wait(1000) // after animation
          .then(() => {
            expect(doc.scrollingElement.scrollTop).to.closeTo(545, 10)
            expect(self.targets[0].classList.contains('on')).to.equal(true)
            expect(self.targets[1].classList.contains('on')).to.equal(false)
            expect(self.targets[2].classList.contains('on')).to.equal(false)
            cy.frameDouble().then(() => {
              expect(self.targets[0].classList.contains('in')).to.equal(true)
              expect(self.targets[1].classList.contains('in')).to.equal(false)
              expect(self.targets[2].classList.contains('in')).to.equal(false)
            })
            cy.go(-1).then(() => {
              expect(doc.scrollingElement.scrollTop).to.closeTo(545, 10)
              expect(self.targets[0].classList.contains('on')).to.equal(false)
              expect(self.targets[1].classList.contains('on')).to.equal(false)
              expect(self.targets[2].classList.contains('on')).to.equal(true)
              cy.frameDouble().then(() => {
                expect(self.targets[0].classList.contains('in')).to.equal(false)
                expect(self.targets[1].classList.contains('in')).to.equal(false)
                expect(self.targets[2].classList.contains('in')).to.equal(true)
              })
              cy.go(1).then(() => {
                expect(doc.scrollingElement.scrollTop).to.closeTo(545, 10)
                expect(self.targets[0].classList.contains('on')).to.equal(true)
                expect(self.targets[1].classList.contains('on')).to.equal(false)
                expect(self.targets[2].classList.contains('on')).to.equal(false)
                cy.frameDouble().then(() => {
                  expect(self.targets[0].classList.contains('in')).to.equal(true)
                  expect(self.targets[1].classList.contains('in')).to.equal(false)
                  expect(self.targets[2].classList.contains('in')).to.equal(false)
                })
              })
            })
          })
      })
    })
  })
})

describe('demos/components/listing/infinitescroll', function () {
  let win
  let doc
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit('/demos/components/listing/infinitescroll?false=2').window().as('win').document().as('doc')
    cy.get('.demo--infinitescroll').as('demo')
    cy.get('@demo').find('.infinitescroll').as('container')
  })

  beforeEach(function () {
    win = this.win
    doc = this.doc
    Xt = win.Xt
    container = this.container[0]
    self = Xt.get({ name: 'xt-infinitescroll', el: container })
  })

  it.only('TEST initial activation and scroll position, scroll activation, browser navigation.', function () {
    expect(self.paginations[0].innerText).to.equal('Page 2 of 4')
    expect(win.Xt.visible({ el: self.scrollUp[0] })).to.equal(true)
    expect(win.Xt.visible({ el: self.scrollDown[0] })).to.equal(true)
    doc.scrollingElement.scrollTo(0, 1000)
    cy.wait(500).then(() => {
      win.dispatchEvent(new Event('scroll'))
      cy.addEventListener(container, 'populate.xt.infinitescroll', () => {
        cy.frame().then(() => {
          expect(self.paginations[0].innerText).to.equal('Page 3 of 4')
          expect(win.Xt.visible({ el: self.scrollUp[0] })).to.equal(true)
          expect(win.Xt.visible({ el: self.scrollDown[0] })).to.equal(true)
          cy.visit(url).then(() => {
            cy.go(-1)
              .get('[data-xt-infinitescroll-pagination]') // racecondition
              .document()
              .then(doc => {
                expect(doc.scrollingElement.scrollTop).to.closeTo(399, 10)
                doc.scrollingElement.scrollTo(0, 0)
                cy.wait(500).then(() => {
                  win.dispatchEvent(new Event('scroll'))
                  expect(doc.querySelector('[data-xt-infinitescroll-pagination]').innerText).to.equal('Page 2 of 4')
                  expect(win.Xt.visible({ el: doc.querySelector('[data-xt-infinitescroll-up]') })).to.equal(true)
                  expect(win.Xt.visible({ el: doc.querySelector('[data-xt-infinitescroll-down]') })).to.equal(true)
                })
              })
          })
        })
      })
    })
  })
})
