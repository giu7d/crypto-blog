describe('Home page', () => {
  it('should filter articles', () => {
    cy.visit(`/`)
      .then(() => cy.get('[data-cy=filter]'))
      .then(() => cy.contains('Tutorial'))
      .click()
      .then(() => cy.get('[data-cy=article]'))
      .should('have.length', 1)
  })
})
