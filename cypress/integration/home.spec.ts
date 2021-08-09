const filters = [
  {
    key: '0',
    title: '0'
  },
  {
    key: '1',
    title: '1'
  },
  {
    key: '2',
    title: '2'
  }
]

const articles = [
  {
    id: '0',
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloremque inventore eum quaerat saepe, corrupti non quibusdam!',
    date: new Date(),
    category: '1'
  }
]

describe('Home page', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/filters', { body: { filters } })
    cy.intercept('GET', /\/api\/articles*/, { body: { articles: [] } })
    cy.intercept('GET', '/api/articles?filter=1', { body: { articles } })
  })

  it('should filter articles', () => {
    cy.visit(`/`)
      .then(() => cy.get('[data-cy=filter]'))
      .then(() => cy.contains(filters[1].title))
      .click()
      .then(() => cy.get('[data-cy=article]'))
      .should('have.length', 1)
  })
})
