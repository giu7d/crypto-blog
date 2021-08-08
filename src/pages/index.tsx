import React, { useState } from 'react'
import Head from 'next/head'

import { useArticles, useFilters } from '@/hooks/useData'
import { Highlights } from '@/components/Highlights'
import { Filters } from '@/components/Filters'
import { Header } from '@/components/Header'
import { Articles } from '@/components/Articles'

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const articles = useArticles(selectedFilter)
  const filters = useFilters()

  if (
    filters.isLoading ||
    filters.isError ||
    articles.isLoading ||
    articles.isError
  )
    return <div></div>

  return (
    <div className="container lg:max-w-screen-lg px-8 mx-auto">
      <Head>
        <title>Bitcoin - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Filters
        filters={filters.data}
        onChange={el => setSelectedFilter(el.key)}
      />
      <main className="my-7 flex flex-col md:flex-row gap-16 md:justify-between items-start">
        {selectedFilter === 'all' && <Highlights />}
        <Articles articles={articles.data} />
      </main>
    </div>
  )
}
