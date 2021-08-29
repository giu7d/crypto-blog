import React from 'react'
import Image from 'next/image'

import { Product } from '@/models/Product'

interface IProductSectionProps {
  product: Product
}

export const ProductSection: React.VFC<IProductSectionProps> = ({
  product
}) => (
  <>
    <div className="product-cover">
      <Image src={{ src: product.imageSrc, width: 300, height: 300 }} />
    </div>
    <div className="flex flex-col items-center">
      <h3 className="text-lg uppercase text-gray-500 font-semibold">
        {product.brand}
      </h3>
      <h2 className="text-3xl uppercase  text-gray-800 font-bold">
        {product.name}
      </h2>
    </div>
  </>
)
