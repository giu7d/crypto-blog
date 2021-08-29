import React from 'react'
import Head from 'next/head'
import { FilterProducts } from '@/components/containers/Products/Filter'
import { Header } from '@/components/containers/Header'
import { OffersSection } from '@/components/fragments/sections/OffersSection'
import { ListProducts } from '@/components/containers/Products/List'

export default function Home() {
  return (
    <div className="container lg:max-w-screen-lg">
      <Head>
        <title>Commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="p-6">
        <OffersSection
          productName="Apple Watch"
          productImage="/images/apple-watch.png"
          off={15}
        />
        <FilterProducts />
        <ListProducts />
      </main>
    </div>
  )
}
