import { mount } from '@cypress/react'
import { Filters } from '@/components/Filters'

const filters = [
  {
    key: '1',
    title: '1'
  },
  {
    key: '2',
    title: '2'
  },
  {
    key: '3',
    title: '3'
  },
  {
    key: '4',
    title: '4'
  }
]

describe('Filters component', () => {
  it('should load filters', () => {
    mount(<Filters filters={filters} />)
      .then(() => cy.get('[data-cy=filter]'))
      .should('have.length', filters.length)
  })

  it('should emit selected filter', () => {
    const onChange = cy.stub()

    mount(<Filters filters={filters} onChange={onChange} />)
      .then(() => cy.get('[data-cy=filter]'))
      .then(() => cy.contains(filters[0].title))
      .click()
      .then(() =>
        expect(onChange).to.have.always.been.calledWithExactly(filters[0])
      )
  })
})
