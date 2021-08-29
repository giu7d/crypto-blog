import React from 'react'

import { Header } from '@/components/containers/Header'
import { BuyProduct } from '@/components/containers/Product/Buy'
import { ProductSection } from '@/components/fragments/sections/ProductSection'
import { ParagraphSection } from '@/components/fragments/sections/ParagraphSection'

const PRODUCT = {
  id: '123123',
  brand: 'sony',
  name: 'wh1000',
  price: '1099.99',
  imageSrc: '/images/sony-wh1000.png',
  thumbnailPrimaryColor: 'yellow'
}

export default function ShowProduct() {
  // const router = useRouter()
  // console.log(router.query.id)

  return (
    <div className="container lg:max-w-screen-lg">
      <Header />
      <div className="flex flex-col gap-6 p-6">
        <ProductSection product={PRODUCT} />
        <ParagraphSection title="Descrição">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ratione,
          voluptatum minima, quibusdam rem animi non cumque maiores omnis sit
          accusamus repellendus nihil ea pariatur similique labore fuga.
          Ducimus, maiores.
        </ParagraphSection>
      </div>
      <BuyProduct />
    </div>
  )
}
