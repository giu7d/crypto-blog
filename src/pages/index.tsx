import React from 'react'
import Head from 'next/head'
import { Filter } from '@/components/containers/Filter'
import { Header } from '@/components/containers/Header'
import { OffersSection } from '@/components/fragments/sections/OffersSection'
import { Products } from '@/components/containers/Products'

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
        <Filter />
        <Products />
      </main>
    </div>
  )
}
