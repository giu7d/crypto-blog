import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { SearchInput } from '../fragments/inputs/SearchInput'

export const Header = () => (
  <header>
    <SearchInput placeholder="Buscar" />
    <button type="button" className="btn btn-icon btn-outline">
      <FiShoppingCart />
    </button>
    <button type="button" className="btn btn-icon btn-primary">
      GS
    </button>
  </header>
)
