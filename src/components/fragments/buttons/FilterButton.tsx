import React from 'react'

interface IFilterButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  selected?: boolean
}

export const FilterButton: React.FC<IFilterButtonProps> = ({
  children,
  selected = false,
  type = 'button',
  ...props
}) => (
  <button
    className={`btn btn-sm ${selected ? 'btn-solid' : 'btn-outline'}`}
    type={type}
    {...props}
  >
    {children}
  </button>
)
