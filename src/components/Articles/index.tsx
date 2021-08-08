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
}

export const Articles: React.FC<IArticlesProps> = ({ articles }) => (
  <div className="flex flex-col gap-8 h-auto w-full" data-cy="articles">
    {articles.map(el => (
      <Article key={el.id} {...el} />
    ))}
  </div>
)
