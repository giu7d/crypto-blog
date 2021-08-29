import React, { useState } from 'react'

import { FilterButton } from '@/components/fragments/buttons/FilterButton'

const FILTERS = [
  {
    key: 'all',
    name: 'Todos'
  },
  {
    key: 'smart-phones',
    name: 'Smart Phones'
  },
  {
    key: 'smart-home',
    name: 'Smart Home'
  },
  {
    key: 'headphones',
    name: 'Headphones'
  }
]

export const FilterProducts = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')

  return (
    <nav className="filters mt-10">
      {FILTERS.map(filter => (
        <FilterButton
          key={filter.key}
          selected={filter.key === selectedFilter}
          onClick={() => setSelectedFilter(filter.key)}
        >
          {filter.name}
        </FilterButton>
      ))}
    </nav>
  )
}
