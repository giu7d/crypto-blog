import React from 'react'
import Head from 'next/head'
import { Highlights } from '@/components/Highlights'
import { Article } from '@/components/Article'

export default function Home() {
  return (
    <div className="container lg:max-w-screen-lg px-8 mx-auto">
      <Head>
        <title>Bitcoin - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <h1 className="font-sans subpixel-antialiased text-4xl text-gray-800 font-bold">
          Learn crypto
        </h1>
        <button className="btn btn-outline" type="button">
          Login
        </button>
      </header>
      <nav className="nav">
        <button className="btn btn-solid btn-sm" type="button">
          All
        </button>
        <button className="btn btn-link btn-sm" type="button">
          Bitcoin
        </button>
        <button className="btn btn-link btn-sm" type="button">
          Blockchain
        </button>
        <button className="btn btn-link btn-sm" type="button">
          Tutorial
        </button>
      </nav>

      <main className="my-7 flex flex-col md:flex-row gap-16 md:justify-between items-start">
        <Highlights />
        <div className="flex flex-col gap-8 h-auto w-full">
          {[1, 2, 3, 4, 5, 6, 7].map(el => (
            <Article key={el} />
          ))}
        </div>
      </main>
    </div>
  )
}
