import React from 'react'
import { FiSearch } from 'react-icons/fi'

export const SearchInput: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = props => (
  <div className="search-input">
    <FiSearch />
    <input type="text" {...props} />
  </div>
)
