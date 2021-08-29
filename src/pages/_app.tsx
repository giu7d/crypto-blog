import '@/styles/tailwind.scss'
import '@/styles/globals.scss'
import '@/styles/button.scss'
import '@/styles/card.scss'
import '@/styles/filter.scss'
import '@/styles/header.scss'
import '@/styles/highlight.scss'
import '@/styles/input.scss'
import '@/styles/product.scss'
import '@/styles/typography.scss'

import React from 'react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
