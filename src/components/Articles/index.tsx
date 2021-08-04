import React from 'react'

import { Article } from './Article'

interface IArticlesProps {
  articles: {
    id: string
    title: string
    description: string
    date: Date
    category: string
  }[]
  filter?: string
}

export const Articles: React.FC<IArticlesProps> = ({ articles, filter }) => (
  <div className="flex flex-col gap-8 h-auto w-full">
    {articles
      .filter(
        ({ category }) => category === filter || !filter || filter === 'all'
      )
      .map(el => (
        <Article key={el.id} {...el} />
      ))}
  </div>
)
