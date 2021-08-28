import React from 'react'
import Image from 'next/image'

import { Product } from '@/models/Product'
import { FiInfo, FiPlus } from 'react-icons/fi'

interface IProductCardProps {
  product: Product
  onSave?: () => void
  onClick?: () => void
}

export const ProductCard: React.VFC<IProductCardProps> = ({
  product,
  onSave = () => {},
  onClick = () => {}
}) => (
  <div className="card" onClick={onClick}>
    <div className={`card-cover bg-${product.thumbnailPrimaryColor}-50`}>
      <Image
        src={{
          src: product.imageSrc,
          width: 200,
          height: 200
        }}
      />
    </div>
    <div className="card-content product-card-content">
      <div>
        <small className="product-brand">{product.brand}</small>
        <h4 className="product-name">{product.name}</h4>
      </div>
      <div className="product-price">
        <small>R$</small>
        <h5>
          {product.price}
          <span>.99</span>
        </h5>
      </div>
    </div>
    <div className="card-actions">
      <button type="button" className="btn btn-md btn-outline">
        <FiInfo />
        Mais
      </button>
      <button type="button" className="btn btn-md btn-primary" onClick={onSave}>
        <FiPlus />
        Adicionar
      </button>
    </div>
  </div>
)
