import React from 'react'

interface IBuyButtonProps {
  price: string
  onClick: () => void
}

export const BuyButton: React.VFC<IBuyButtonProps> = ({ price, onClick }) => {
  const [value, decimal] = price.split('.')

  return (
    <div className="btn btn-md btn-solid btn-primary" onClick={onClick}>
      <div className="price price-sm">
        <small>R$</small>
        <h5>
          {value}
          {decimal && <span>.{decimal}</span>}
        </h5>
      </div>
      <div className="divider" />
      Comprar
    </div>
  )
}
