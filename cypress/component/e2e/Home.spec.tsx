import { mount } from '@cypress/react'
import Home from '@/pages'

describe('Home page', () => {
  beforeEach(() => {
    mount(<Home />)
  })

  it('should select filter', () => {
    cy.then(() => cy.get('[data-cy=filter]'))
      .then(() => cy.contains('Tutorial'))
      .click()
      .then(() => cy.get('[data-cy=article]'))
      .should('have.length', 1)
  })
})
