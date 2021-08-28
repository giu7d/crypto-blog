import React from 'react'
import Image from 'next/image'

interface IOffersSectionProps {
  off: number
  productName: string
  productImage: string
}

export const OffersSection: React.VFC<IOffersSectionProps> = ({
  productName,
  productImage,
  off
}) => (
  <div className="highlight">
    <div className="highlight-context">
      <h2>Oferta</h2>
      <h3>{productName}</h3>
      <h4>
        -{off}
        <span>%</span>
      </h4>
    </div>
    <div className="highlight-image">
      <Image src={{ src: productImage, width: 200, height: 200 }} />
    </div>
  </div>
)
