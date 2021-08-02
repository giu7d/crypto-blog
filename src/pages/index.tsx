import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tailwind Studies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Hello World</h1>
      </header>
      <main />
    </div>
  )
}
