import React from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

interface INumberButtonProps {
  onMinus?: () => void
  onPlus?: () => void
}

export const NumberButton: React.FC<INumberButtonProps> = ({
  children,
  onMinus = () => {},
  onPlus = () => {}
}) => (
  <div className="btn btn-number">
    <button className="btn btn-icon" onClick={onMinus}>
      <FiMinus />
    </button>
    <p>{children}</p>
    <button className="btn btn-icon" onClick={onPlus}>
      <FiPlus />
    </button>
  </div>
)
