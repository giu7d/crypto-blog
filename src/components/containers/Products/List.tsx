import React from 'react'
import { useRouter } from 'next/dist/client/router'

import { ProductCard } from '@/components/fragments/cards/ProductCard'

const PRODUCTS = [
  {
    id: '123123',
    brand: 'sony',
    name: 'wh1000',
    price: '1099.99',
    imageSrc: '/images/sony-wh1000.png',
    thumbnailPrimaryColor: 'yellow'
  },
  {
    id: '123321',
    brand: 'amazon',
    name: 'echo dot',
    price: '199.99',
    imageSrc: '/images/amazon-echo-dot.png',
    thumbnailPrimaryColor: 'blue'
  }
]

export const ListProducts = () => {
  const router = useRouter()

  const handleNavigation = (id: string) => {
    router.push(`/products/${id}`)
  }

  return (
    <div className="flex flex-col gap-6">
      {PRODUCTS.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => handleNavigation(product.id)}
        />
      ))}
    </div>
  )
}
