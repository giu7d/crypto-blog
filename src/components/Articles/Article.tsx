import React from 'react'

interface IArticleProps {
  title: string
  description: string
  date: Date
}

export const Article: React.VFC<IArticleProps> = ({
  title,
  description,
  date
}) => (
  <div className="article-card">
    <div className="content">
      <small className="font-sans text-sm text-gray-400 font-bold">
        {date.toLocaleDateString('US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </small>
      <h4 className="font-sans subpixel-antialiased text-lg text-gray-800 font-bold">
        {title}
      </h4>
      <p className="font-sans text-md text-gray-500">{description}</p>
    </div>
    <div className="cover bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl" />
  </div>
)
