import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container lg:max-w-screen-lg px-8 mx-auto">
      <Head>
        <title>Commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main />
    </div>
  )
}
