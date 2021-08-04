import React, { useState } from 'react'
import Head from 'next/head'

import { Highlights } from '@/components/Highlights'
import { Filters } from '@/components/Filters'
import { Header } from '@/components/Header'
import { Articles } from '@/components/Articles'

const ARTICLES = [
  {
    id: '0x1',
    title: 'Leverage tokens now',
    description: 'Good things come in 3s. Get 3x Leveraged tokens now!',
    date: new Date(),
    category: 'bitcoin'
  },
  {
    id: '0x2',
    title: 'Leverage tokens now',
    description: 'Good things come in 3s. Get 3x Leveraged tokens now!',
    date: new Date(),
    category: ''
  },
  {
    id: '0x3',
    title: 'Leverage tokens now',
    description: 'Good things come in 3s. Get 3x Leveraged tokens now!',
    date: new Date(),
    category: 'bitcoin'
  },
  {
    id: '0x4',
    title: 'Leverage tokens now',
    description: 'Good things come in 3s. Get 3x Leveraged tokens now!',
    date: new Date(),
    category: 'tutorial'
  },
  {
    id: '1x1',
    title: 'Leverage tokens now',
    description: 'Good things come in 3s. Get 3x Leveraged tokens now!',
    date: new Date(),
    category: 'blockchain'
  },
  {
    id: '2x1',
    title: 'Leverage tokens now',
    description: 'Good things come in 3s. Get 3x Leveraged tokens now!',
    date: new Date(),
    category: 'blockchain'
  },
  {
    id: '3x1',
    title: 'Leverage tokens now',
    description: 'Good things come in 3s. Get 3x Leveraged tokens now!',
    date: new Date(),
    category: 'bitcoin'
  }
]

const FILTERS = [
  {
    key: 'all',
    title: 'All'
  },
  {
    key: 'bitcoin',
    title: 'Bitcoin'
  },
  {
    key: 'blockchain',
    title: 'Blockchain'
  },
  {
    key: 'tutorial',
    title: 'Tutorial'
  }
]

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all')

  return (
    <div className="container lg:max-w-screen-lg px-8 mx-auto">
      <Head>
        <title>Bitcoin - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Filters filters={FILTERS} onChange={el => setSelectedFilter(el.key)} />
      <main className="my-7 flex flex-col md:flex-row gap-16 md:justify-between items-start">
        {selectedFilter === 'all' && <Highlights />}
        <Articles articles={ARTICLES} filter={selectedFilter} />
      </main>
    </div>
  )
}
