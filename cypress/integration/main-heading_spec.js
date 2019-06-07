describe('Test generated DOM on page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9889')
  })
  it('The "h1" tag was generated with the correct content', () => {
    // https://on.cypress.io/should
    cy.get('.main-heading')
      .should('have.text', 'Yo!')
  })
})
