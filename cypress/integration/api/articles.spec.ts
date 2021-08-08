describe('Articles route', () => {
  it('should list all articles', () => {
    cy.request('/api/articles').then(res => {
      expect(res.body).to.have.property('articles')
      expect(res.body.articles).to.have.length(7)
    })
  })

  it('should list only articles with match category', () => {
    const filter = 'bitcoin'

    cy.request(`/api/articles?filter=${filter}`).then(res => {
      expect(res.body).to.have.property('articles')
      expect(res.body.articles).to.have.length(3)
    })
  })

  it('should be an empty array if no match was found', () => {
    const filter = 'not-exists'

    cy.request(`/api/articles?filter=${filter}`).then(res => {
      expect(res.body).to.have.property('articles')
      expect(res.body.articles).to.have.length(0)
    })
  })
})
