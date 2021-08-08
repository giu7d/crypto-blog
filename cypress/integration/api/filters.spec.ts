describe('Filters route', () => {
  it('should list all filters', () => {
    cy.request('/api/filters').then(res => {
      expect(res.body).to.have.property('filters')
      expect(res.body.filters).to.have.length(4)
    })
  })

  it('should always have an all filter', () => {
    cy.request('/api/filters').then(res => {
      expect(res.body).to.have.property('filters')
      console.log(res.body)
      expect(
        res.body.filters.filter((el: any) => el.key === 'all')
      ).to.have.length(1)
    })
  })
})
