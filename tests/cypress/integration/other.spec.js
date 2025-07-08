const url = '/xtendui/hidden/test/other-test'

describe('xtendui/demos/hidden/test/mount-unmount', function () {
  let win
  let Xt
  let demo
  let container
  let doc
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
    doc = container.closest('html')
    cy.get(container)
      .closest('.docs_demo')
      .scrollIntoView({ offset: { top: 0, left: 0 } })
  })

  beforeEach(function () {
    return Xt.get({ name: 'xt-overlay', el: container }).then(selfPromise => {
      self = selfPromise
    })
  })

  it('TEST mount root once, this should be 1 on init, should remain 1 on deactivation.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-overlay-init', '') // racecondition
      .frame()
      .then(() => {
        expect(demo.getAttribute('data-test-mountroot')).to.equal('1')
        container.dispatchEvent(new CustomEvent('off.trigger.xt.overlay'))
        expect(demo.getAttribute('data-test-mountroot')).to.equal('1')
      })
  })

  it('TEST init xtNamespace, should be 1.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-overlay-init', '') // racecondition
      .then(() => {
        const xtNamespace = Xt.dataStorage.get(doc, `xtNamespace${self.ns}`)
        expect(xtNamespace.length).to.equal(1)
      })
  })

  it('TEST init classes and properties, should be `true true true true`.', function () {
    cy.get(demo)
      .should('have.attr', 'data-test-initial') // racecondition
      .then(() => {
        expect(demo.getAttribute('data-test-initial')).to.equal('true true true true')
      })
  })

  it('TEST after init classes and properties, should be `true true false false`.', function () {
    cy.frameDouble().then(() => {
      expect(container.getAttribute('data-xt-overlay-init')).to.equal('')
      expect(self.targets[0].classList.contains('on')).to.equal(true)
      expect(self.targets[0].classList.contains('in')).to.equal(true)
      expect(self.targets[0].classList.contains('initial')).to.equal(false)
      expect(self.initial).to.equal(false)
    })
  })

  it('TEST unmount, this should increase by one on changing page and resize.', function () {
    cy.visit('/xtendui/hidden/test')
      .go(-1)
      .get('.demo--mount-unmount')
      .as('demo')
      .should('be.visible') // racecondition
      .frame()
      .viewport('iphone-6')
      .frame()
      .viewport('macbook-13')
      .frame()
      .get('@demo')
      .should('have.attr', 'data-test-resize', '2')
  })

  it('TEST unmount should disable on deactivate, should remove from dom overlay.', function () {
    cy.frame().then(() => {
      demo.remove()
      cy.get(self.targets[0]).should('not.exist')
    })
  })

  it('TEST unmount, unmountArr should be the same, xtNamespace should be 0.', function () {
    const count = Xt._unmountArr.length
    expect(Xt.dataStorage.get(doc, `xtNamespace${self.ns}`).length).to.equal(1)
    demo.remove()
    cy.frame().then(() => {
      expect(Xt.dataStorage.get(doc, `xtNamespace${self.ns}`).length).to.equal(0)
      expect(Xt._unmountArr.length).to.equal(count - 2)
    })
  })
})

describe('xtendui/demos/hidden/test/scrolltrigger-matches', function () {
  let win
  let Xt
  let demo
  let container
  let doc
  let self

  beforeEach(function () {
    cy.visit('/xtendui/demos/hidden/test/scrolltrigger-matches').window().as('win')
    cy.get('.demo--scrolltrigger-matches').as('demo')
    cy.get('@demo').find('[data-xt-overlay]').as('container')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    demo = this.demo[0]
    container = this.container[0]
    doc = container.closest('html')
    cy.get(container).scrollIntoView({ offset: { top: 0, left: 0 } })
  })

  beforeEach(function () {
    return Xt.get({ name: 'xt-overlay', el: container }).then(selfPromise => {
      self = selfPromise
    })
  })

  it('TEST pin resize this should be called one time on resize and Xt._mountArr should not increase.', function () {
    cy.frame().then(() => {
      const count = Xt._mountArr.length
      cy.viewport('iphone-6')
        .frame()
        .then(() => {
          expect(Xt._mountArr.length).to.equal(count)
        })
        .get('@demo')
        .should('have.attr', 'data-test-refresh', '1')
        .viewport('macbook-13')
        .frame()
        .then(() => {
          expect(Xt._mountArr.length).to.equal(count)
        })
        .get('@demo')
        .should('have.attr', 'data-test-refresh', '2')
    })
  })

  it('TEST resize and open/close, pin unmount this should NOT be called on resize, xtNamespace should be 1, should be 0 on unmount.', function () {
    expect(Xt.dataStorage.get(doc, `xtNamespace${self.ns}`).length).to.equal(1)
    cy.get('@demo')
      .should('have.attr', 'data-test-mount', '1')
      .get(self.elements[0])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.targets[0].classList.contains('in')).to.equal(true)
        })
      })
      .viewport('iphone-6')
      .frame()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.targets[0].classList.contains('in')).to.equal(true)
        })
        expect(Xt.dataStorage.get(doc, `xtNamespace${self.ns}`).length).to.equal(1)
      })
      .get(self.targets[0].querySelector('.xt-dismiss'))
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        cy.frameDouble().then(() => {
          expect(self.targets[0].classList.contains('in')).to.equal(false)
        })
      })
      .get('@demo')
      .should('have.attr', 'data-test-mount', '1')
      .viewport('macbook-13')
      .frame()
      .then(() => {
        expect(Xt.dataStorage.get(doc, `xtNamespace${self.ns}`).length).to.equal(1)
      })
      .get(self.elements[0])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.targets[0].classList.contains('in')).to.equal(true)
        })
      })
      .get('@demo')
      .should('have.attr', 'data-test-mount', '1')
      .then(() => {
        demo.remove()
      })
      .frame()
      .then(() => {
        expect(Xt.dataStorage.get(doc, `xtNamespace${self.ns}`).length).to.equal(0)
      })
  })
})

describe('xtendui/demos/themes/navigation/megamenu-v1', function () {
  let win
  let Xt
  let container
  let self
  let backdrop

  beforeEach(function () {
    cy.visit('/xtendui/demos/themes/navigation/megamenu-v1').window().as('win')
    cy.get('.megamenu').as('container') // not .get('@demo')
    cy.get('@container').find('.xt-backdrop').as('backdrop')
  })

  beforeEach(function () {
    win = this.win
    Xt = win.Xt
    container = this.container[0]
    backdrop = this.backdrop[0]
    cy.get(container).scrollIntoView({ offset: { top: 0, left: 0 } })
  })

  beforeEach(function () {
    return Xt.get({ name: 'xt-drop', el: container }).then(selfPromise => {
      self = selfPromise
    })
  })

  it('TEST direction and zIndex sequential activation and zIndex reset.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-drop-init', '') // racecondition
      .get(self.elements[0])
      .trigger('mouseenter')
      .wait(200) // after delay
      .then(() => {
        expect(self.direction).to.equal(0)
        expect(self.targets[0].style.zIndex).to.equal('701')
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        cy.frameDouble().then(() => {
          expect(self.targets[0].classList.contains('in')).to.equal(true)
          expect(self.targets[1].classList.contains('in')).to.equal(false)
        })
      })
      .get(self.elements[1])
      .trigger('mouseenter')
      .wait(200) // after delay
      .then(() => {
        expect(self.direction).to.equal(1)
        expect(self.targets[1].style.zIndex).to.equal('702')
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.targets[0].classList.contains('in')).to.equal(false)
          expect(self.targets[1].classList.contains('in')).to.equal(true)
        })
      })
      .get(self.elements[0])
      .trigger('mouseenter')
      .wait(200) // after delay
      .then(() => {
        expect(self.direction).to.equal(-1)
        expect(self.targets[0].style.zIndex).to.equal('703')
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        cy.frameDouble().then(() => {
          expect(self.targets[0].classList.contains('in')).to.equal(true)
          expect(self.targets[1].classList.contains('in')).to.equal(false)
        })
      })
      .get(self.elements[0])
      .trigger('mouseleave')
      .wait(200) // after delay
      .wait(1000) // after animation
      .then(() => {
        expect(self.direction).to.equal(0)
        expect(self.targets[0].style.zIndex).to.equal('700')
        expect(self.targets[1].style.zIndex).to.equal('700')
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        cy.frameDouble().then(() => {
          expect(self.targets[0].classList.contains('in')).to.equal(false)
          expect(self.targets[1].classList.contains('in')).to.equal(false)
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
      })
      .get(self.elements[1])
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

describe('xtendui/demos/components/scrollto/usage', function () {
  let doc

  beforeEach(function () {
    cy.visit('/xtendui/demos/components/scrollto/usage#anchor-2').document().as('doc')
    cy.get('.demo--scrollto').as('demo')
    cy.get('a').as('links')
    cy.get('.button--custom').as('buttons')
  })

  beforeEach(function () {
    doc = this.doc
  })

  it('TEST activation classes and scroll position on page load and scroll and browser navigation, scroll position on click elements, scroll position on click elements custom.', function () {
    cy.get('@demo')
      .closest('html')
      .should('have.attr', 'data-xt-scrollto-init', '') // racecondition
      .then(() => {
        expect(this.links[0].classList.contains('on')).to.equal(false)
        expect(this.links[1].classList.contains('on')).to.equal(false)
        expect(this.links[2].classList.contains('on')).to.equal(true)
        expect(doc.scrollingElement.scrollTop).to.closeTo(1987, 150)
        doc.scrollingElement.scrollTo(0, 0)
      })
      .wait(500)
      .then(() => {
        expect(this.links[0].classList.contains('on')).to.equal(true)
        expect(this.links[1].classList.contains('on')).to.equal(false)
        expect(this.links[2].classList.contains('on')).to.equal(false)
      })
      .get(this.links[1])
      .click()
      .wait(1000) // after animation
      .then(() => {
        expect(this.links[0].classList.contains('on')).to.equal(false)
        expect(this.links[1].classList.contains('on')).to.equal(true)
        expect(this.links[2].classList.contains('on')).to.equal(false)
        expect(doc.scrollingElement.scrollTop).to.closeTo(801, 150)
      })
      .go(-1)
      .then(() => {
        expect(this.links[0].classList.contains('on')).to.equal(false)
        expect(this.links[1].classList.contains('on')).to.equal(false)
        expect(this.links[2].classList.contains('on')).to.equal(true)
        expect(doc.scrollingElement.scrollTop).to.closeTo(1987, 150)
      })
      .go(1)
      .wait(1000) // after animation
      .then(() => {
        expect(this.links[0].classList.contains('on')).to.equal(false)
        expect(this.links[1].classList.contains('on')).to.equal(true)
        expect(this.links[2].classList.contains('on')).to.equal(false)
        expect(doc.scrollingElement.scrollTop).to.closeTo(801, 150)
      })
      .get(this.buttons[0])
      .click()
      .wait(1000) // after animation
      .then(() => {
        expect(this.links[0].classList.contains('on')).to.equal(false)
        expect(this.links[1].classList.contains('on')).to.equal(true)
        expect(this.links[2].classList.contains('on')).to.equal(false)
        expect(doc.scrollingElement.scrollTop).to.closeTo(1633, 150)
      })
  })
})

describe('xtendui/demos/components/scrollto/overlay', function () {
  let win
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit('/xtendui/demos/components/scrollto/overlay#anchor-2').window().as('win')
    cy.get('.demo--scrollto-overlay').as('demo')
    cy.get('@demo').find('[data-xt-overlay]').as('container')
    cy.get('a').as('links')
    cy.get('.button--custom').as('buttons')
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

  it('TEST activation classes and scroll position on page load and scroll and browser navigation, scroll position on click elements, scroll position on click elements custom.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-overlay-init', '') // racecondition
      .closest('html')
      .should('have.attr', 'data-xt-scrollto-init', '') // racecondition
      .frameDouble() // racecondition xt-scrollto self._initStart()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(this.links[0].classList.contains('on')).to.equal(false)
        expect(this.links[1].classList.contains('on')).to.equal(false)
        expect(this.links[2].classList.contains('on')).to.equal(true)
        expect(self.targets[0].scrollTop).to.closeTo(1987, 150)
        self.targets[0].scrollTo(0, 0)
      })
      .wait(500)
      .then(() => {
        expect(this.links[0].classList.contains('on')).to.equal(true)
        expect(this.links[1].classList.contains('on')).to.equal(false)
        expect(this.links[2].classList.contains('on')).to.equal(false)
      })
      .get(this.links[4])
      .click()
      .wait(1000) // after animation
      .then(() => {
        expect(this.links[0].classList.contains('on')).to.equal(false)
        expect(this.links[1].classList.contains('on')).to.equal(true)
        expect(this.links[2].classList.contains('on')).to.equal(false)
        expect(self.targets[0].scrollTop).to.closeTo(801, 150)
      })
      .get(self.targets[0].querySelector('.xt-dismiss'))
      .click()
      .get(this.links[1])
      .click()
      .go(-1)
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(this.links[0].classList.contains('on')).to.equal(false)
        expect(this.links[1].classList.contains('on')).to.equal(false)
        expect(this.links[2].classList.contains('on')).to.equal(true)
        expect(self.targets[0].scrollTop).to.closeTo(1987, 150)
      })
      .get(self.targets[0].querySelector('.xt-dismiss'))
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(false)
      })
      .get(this.links[2])
      .click()
      .then(() => {
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(this.links[0].classList.contains('on')).to.equal(false)
        expect(this.links[1].classList.contains('on')).to.equal(false)
        expect(this.links[2].classList.contains('on')).to.equal(true)
        expect(self.targets[0].scrollTop).to.closeTo(1987, 150)
      })
      .get(this.buttons[1])
      .click()
      .wait(1000) // after animation
      .then(() => {
        expect(this.links[0].classList.contains('on')).to.equal(false)
        expect(this.links[1].classList.contains('on')).to.equal(true)
        expect(this.links[2].classList.contains('on')).to.equal(false)
        expect(self.targets[0].scrollTop).to.closeTo(1633, 150)
      })
  })
})

describe('xtendui/demos/components/scrollto/toggle', function () {
  let win
  let doc
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit('/xtendui/demos/components/scrollto/toggle#anchor-2').window().as('win').document().as('doc')
    cy.get('.demo--scrollto-toggle').as('demo')
    cy.get('@demo').find('[data-xt-toggle]').as('container')
  })

  beforeEach(function () {
    win = this.win
    doc = this.doc
    Xt = win.Xt
    container = this.container[0]
    cy.get(container).scrollIntoView({ offset: { top: 0, left: 0 } })
  })

  beforeEach(function () {
    return Xt.get({ name: 'xt-toggle', el: container }).then(selfPromise => {
      self = selfPromise
    })
  })

  it('TEST activation classes and scroll position on page load and scroll and browser navigation, scroll position on click elements.', function () {
    cy.get(container)
      .closest('html')
      .should('have.attr', 'data-xt-scrollto-init', '') // racecondition
      .then(() => {
        expect(doc.scrollingElement.scrollTop).to.closeTo(545, 150)
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.targets[0].classList.contains('in')).to.equal(false)
          expect(self.targets[1].classList.contains('in')).to.equal(false)
          expect(self.targets[2].classList.contains('in')).to.equal(true)
        })
        doc.scrollingElement.scrollTo(0, 0)
      })
      .wait(500)
      .get(self.elements[0])
      .click()
      .wait(1000) // after animation
      .then(() => {
        expect(doc.scrollingElement.scrollTop).to.closeTo(545, 150)
        expect(self.targets[0].classList.contains('on')).to.equal(true)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(false)
        cy.frameDouble().then(() => {
          expect(self.targets[0].classList.contains('in')).to.equal(true)
          expect(self.targets[1].classList.contains('in')).to.equal(false)
          expect(self.targets[2].classList.contains('in')).to.equal(false)
        })
      })
      .go(-1)
      .then(() => {
        expect(doc.scrollingElement.scrollTop).to.closeTo(545, 150)
        expect(self.targets[0].classList.contains('on')).to.equal(false)
        expect(self.targets[1].classList.contains('on')).to.equal(false)
        expect(self.targets[2].classList.contains('on')).to.equal(true)
        cy.frameDouble().then(() => {
          expect(self.targets[0].classList.contains('in')).to.equal(false)
          expect(self.targets[1].classList.contains('in')).to.equal(false)
          expect(self.targets[2].classList.contains('in')).to.equal(true)
        })
      })
      .go(1)
      .then(() => {
        expect(doc.scrollingElement.scrollTop).to.closeTo(545, 150)
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

describe('xtendui/demos/components/infinitescroll/usage', function () {
  let win
  let doc
  let Xt
  let container
  let self

  beforeEach(function () {
    cy.visit('/xtendui/demos/components/infinitescroll/usage?false=2').window().as('win').document().as('doc')
    cy.get('.demo--infinitescroll').as('demo')
    cy.get('@demo').find('.infinitescroll').as('container')
  })

  beforeEach(function () {
    win = this.win
    doc = this.doc
    Xt = win.Xt
    container = this.container[0]
    cy.get(container).scrollIntoView({ offset: { top: 0, left: 0 } })
  })

  beforeEach(function () {
    return Xt.get({ name: 'xt-infinitescroll', el: container }).then(selfPromise => {
      self = selfPromise
    })
  })

  it('TEST initial activation and scroll position, scroll activation, browser navigation.', function () {
    cy.get(container)
      .should('have.attr', 'data-xt-infinitescroll-init', '') // racecondition
      .then(() => {
        expect(self.paginations[0].innerText).to.equal('Page 2 of 4')
        expect(win.Xt.visible({ el: self.scrollUp[0] })).to.equal(true)
        expect(win.Xt.visible({ el: self.scrollDown[0] })).to.equal(true)
        cy.addEventListener(container, 'populate.xt.infinitescroll', () => {
          cy.frame()
            .then(() => {
              expect(self.paginations[0].innerText).to.equal('Page 3 of 4')
              expect(win.Xt.visible({ el: self.scrollUp[0] })).to.equal(true)
              expect(win.Xt.visible({ el: self.scrollDown[0] })).to.equal(true)
            })
            .visit(url)
            .then(() => {
              cy.go(-1)
                .get('[data-xt-infinitescroll-pagination]') // racecondition
                .document()
                .then(doc => {
                  //expect(doc.scrollingElement.scrollTop).to.closeTo(399, 150) // cypress bfcache doesn't work
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
        doc.scrollingElement.scrollTo(0, 1000)
        win.dispatchEvent(new Event('scroll'))
      })
  })
})
