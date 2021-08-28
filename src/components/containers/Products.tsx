import React from 'react'
import { ProductCard } from '../fragments/cards/ProductCard'

export const Products = () => (
  <div className="flex flex-col gap-6">
    <ProductCard
      product={{
        id: '123123',
        brand: 'sony',
        name: 'wh1000',
        price: '1099.99',
        imageSrc: '/images/sony-wh1000.png',
        thumbnailPrimaryColor: 'yellow'
      }}
    />
    <ProductCard
      product={{
        id: '123321',
        brand: 'amazon',
        name: 'echo dot',
        price: '199.99',
        imageSrc: '/images/amazon-echo-dot.png',
        thumbnailPrimaryColor: 'blue'
      }}
    />
  </div>
)
