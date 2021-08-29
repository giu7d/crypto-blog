import React, { useState } from 'react'

import { BuyButton } from '@/components/fragments/buttons/BuyButton'
import { NumberButton } from '@/components/fragments/buttons/NumberButton'

export const BuyProduct = () => {
  const [quantity, setQuantity] = useState(1)

  const handleQuantity = (value: number) => {
    if (quantity + value < 0) return
    return setQuantity(state => state + value)
  }

  const handleAddToCart = () => {
    console.log('Add to cart')
  }

  return (
    <div className="product-buy-card">
      <NumberButton
        onMinus={() => handleQuantity(-1)}
        onPlus={() => handleQuantity(1)}
      >
        {quantity}
      </NumberButton>
      <BuyButton price="1999.00" onClick={handleAddToCart} />
    </div>
  )
}
