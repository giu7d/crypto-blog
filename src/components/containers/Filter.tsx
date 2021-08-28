import React from 'react'
import { FilterButton } from '../fragments/buttons/FilterButton'

export const Filter = () => (
  <nav className="filters mt-10">
    <FilterButton selected>Todos</FilterButton>
    <FilterButton>Smart Phone</FilterButton>
    <FilterButton>Smart Home</FilterButton>
    <FilterButton>TV</FilterButton>
  </nav>
)
