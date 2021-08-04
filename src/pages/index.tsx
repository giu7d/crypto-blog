import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container my-8 mx-auto">
      <Head>
        <title>Bitcoin - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex flex-col gap-9 p-6 ">
        <div className="flex flex-row justify-between items-start">
          <h1 className="font-sans subpixel-antialiased text-5xl text-gray-800 font-bold">
            Learn crypto
          </h1>
          <button
            className="flex justify-center flex-shrink-1 flex-grow-0 items-center px-4 py-2 border-2 border-gray-200 rounded-full bg-white text-gray-900 font-bold"
            type="button"
          >
            View more
          </button>
        </div>
        <nav className="flex flex-row gap-8">
          <button
            className="px-3 py-1 rounded-full text-sm font-bold bg-gray-800 text-white"
            type="button"
          >
            All
          </button>
          <button
            className="px-3 py-1 rounded-full text-sm font-bold bg-transparent text-gray-500"
            type="button"
          >
            Bitcoin
          </button>
          <button
            className="px-3 py-1 rounded-full text-sm font-bold bg-transparent text-gray-500"
            type="button"
          >
            Blockchain
          </button>
          <button
            className="px-3 py-1 rounded-full text-sm font-bold bg-transparent text-gray-500"
            type="button"
          >
            Tutorial
          </button>
        </nav>
      </header>

      <main className="m-7 flex flex-col md:flex-row gap-10 md:justify-between">
        <div className="flex flex-col gap-5 w-full md:w-1/2 lg:w-1/3 h-auto">
          <div className="h-96 w-auto bg-gradient-to-r from-green-50 to-green-100 rounded-2xl" />
          <div className="flex flex-row items-start gap-2">
            <div className="flex flex-auto flex-col gap-3 w-1/2">
              <h3 className="font-sans subpixel-antialiased text-2xl text-gray-800 font-bold">
                Leveraged tokens now available
              </h3>
              <p className="font-sans text-md text-gray-500">
                Good things come in 3s. Get 3x Leveraged tokens now!
              </p>
            </div>
            <button
              className="flex justify-center flex-shrink-1 flex-grow-0 items-center px-4 py-2 border-2 border-gray-200 rounded-full bg-white text-gray-900 font-bold"
              type="button"
            >
              View more
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5 h-auto">
          <div className="flex gap-3 flex-grow-0 h-auto">
            <div className="flex flex-col justify-between w-full">
              <div className="flex flex-col">
                <h4 className="font-sans subpixel-antialiased text-md text-gray-800 font-bold">
                  Leverage tokens now
                </h4>
                <p className="font-sans text-md text-gray-500">
                  Good things come in 3s. Get 3x Leveraged tokens now!
                </p>
              </div>
              <small className="font-sans text-sm text-gray-400  font-bold">
                Jun 1, 2021
              </small>
            </div>
            <div className="block h-24 w-36 bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl" />
          </div>
          <div className="flex gap-3 flex-grow-0 h-auto">
            <div className="flex flex-col justify-between w-full">
              <div className="flex flex-col">
                <h4 className="font-sans subpixel-antialiased text-md text-gray-800 font-bold">
                  Leverage tokens now
                </h4>
                <p className="font-sans text-md text-gray-500">
                  Good things come in 3s. Get 3x Leveraged tokens now!
                </p>
              </div>
              <small className="font-sans text-sm text-gray-400  font-bold">
                Jun 1, 2021
              </small>
            </div>
            <div className="block h-24 w-36 bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl" />
          </div>
          <div className="flex gap-3 flex-grow-0 h-auto">
            <div className="flex flex-col justify-between w-full">
              <div className="flex flex-col">
                <h4 className="font-sans subpixel-antialiased text-md text-gray-800 font-bold">
                  Leverage tokens now
                </h4>
                <p className="font-sans text-md text-gray-500">
                  Good things come in 3s. Get 3x Leveraged tokens now!
                </p>
              </div>
              <small className="font-sans text-sm text-gray-400  font-bold">
                Jun 1, 2021
              </small>
            </div>
            <div className="block h-24 w-36 bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl" />
          </div>
          <div className="flex gap-3 flex-grow-0 h-auto">
            <div className="flex flex-col justify-between w-full">
              <div className="flex flex-col">
                <h4 className="font-sans subpixel-antialiased text-md text-gray-800 font-bold">
                  Leverage tokens now
                </h4>
                <p className="font-sans text-md text-gray-500">
                  Good things come in 3s. Get 3x Leveraged tokens now!
                </p>
              </div>
              <small className="font-sans text-sm text-gray-400  font-bold">
                Jun 1, 2021
              </small>
            </div>
            <div className="block h-24 w-36 bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl" />
          </div>
        </div>
      </main>
    </div>
  )
}
