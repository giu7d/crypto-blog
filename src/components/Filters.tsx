import React, { useEffect, useState } from 'react'

interface IFiltersProps {
  filters: { key: string; title: string }[]
  // eslint-disable-next-line no-unused-vars
  onChange?: (props: { key: string; title: string }) => void
}

export const Filters: React.FC<IFiltersProps> = ({
  filters,
  onChange = () => {}
}) => {
  const [selected, setSelected] = useState(filters[0])

  useEffect(() => {
    onChange(selected)
  }, [selected])

  const isSelected = (key: string) =>
    selected.key === key ? 'btn-solid' : 'btn-link'

  return (
    <nav className="nav">
      {filters.map(el => (
        <button
          key={el.key}
          className={`btn btn-sm ${isSelected(el.key)}`}
          onClick={() => setSelected(el)}
          type="button"
        >
          {el.title}
        </button>
      ))}
    </nav>
  )
}
